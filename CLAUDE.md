# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page bilingual (Danish / English) site for the Biennale for Craft & Design 2025 exhibition. Originally built in Webflow; rebuilt in Next.js. The original Webflow exports are kept in `reference/` as a visual/DOM reference — they are not built or imported.

## Commands

```bash
npm run dev     # next dev
npm run build   # next build
npm run start   # serve production build
npm run lint    # eslint (flat config, eslint-config-next core-web-vitals + typescript)
```

No test framework. Verification is `npm run build` + `npx tsc --noEmit` + browsing both routes.

### When the browser runs code that no longer exists

`next.config.ts`'s `headers()` **must stay disabled in development** — there is a `process.env.NODE_ENV !== 'production'` early return guarding it. Production chunks are content-hashed (`d926e69a40a981ad.js`), so `immutable` is correct there. Dev chunks are **not**: Turbopack reuses the same filename (`components_9ff6a74d._.js`) as a module's contents change. Serving those with `max-age=31536000, immutable` tells the browser to cache dev JavaScript for a year and ignore reloads.

The symptoms are bizarre and easy to misdiagnose as a code bug:

- `TypeError: <symbol> is not a function` where the symbol **appears nowhere in the source** — e.g. `consumeScroll is not a function` on a line that reads `consumeHandoff`.
- **Hydration mismatches** between freshly-rendered HTML and a cached client bundle.
- Edits to anything under `public/` (images, `documents/*.json`) never appearing.

Diagnosis, in order:

1. `grep -rn "<symbol>" app components lib` — if it returns nothing, you are not looking at your code.
2. `curl -sI http://localhost:3000/_next/static/chunks/<name>.js | grep -i cache-control` — in dev this must be `no-store`, never `immutable`.
3. Only then suspect the server: `pkill -f "next dev"; rm -rf .next` and restart.

Separately: **never run `next build` while `next dev` is running.** They share `.next`, and the dev server can serve a stale *server* graph against a current client bundle — also a hydration mismatch. In React's diff `+` is the server and `-` is the client; if the `+` side contains code you already changed, it's this.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript strict · Tailwind CSS v4 · GSAP · lottie-web. `@/*` maps to the repo root.

## Architecture

### Routing: one root layout, an optional catch-all

```
app/[[...lang]]/layout.tsx   ← THE root layout, renders <html lang>
app/[[...lang]]/page.tsx     ← resolves lang, notFound() on anything else
```

`/` → `params.lang` is `undefined` → `da`. `/en` → `['en']` → `en`. Resolution lives in `lib/i18n.ts` (`resolveLang`, `otherLang`, `langHref`).

Why an optional catch-all rather than two route groups: a *single* root layout is what makes the language switch a client-side transition. The previous structure had two root layouts (one per language), and Next.js treats a navigation crossing root layouts as a full document reload — which is what made switching languages feel broken.

Two hard constraints:

- **Never create `app/page.tsx`.** It collides with the catch-all and fails the build (E925).
- `generateStaticParams` must return `[{ lang: [] }, { lang: ['en'] }]`. Returning `[{}, …]` throws E618 — the key has to be present.

A custom `not-found.tsx` inside this segment does **not** work: Next attaches the boundary above the root layout, so it renders without `<html>` and without CSS. A styled 404 would need `experimental.globalNotFound` plus `app/global-not-found.tsx`. Currently unstyled Next default, deliberately.

### Content: data, not duplicated JSX

There is no i18n library. Two dictionaries, one page.

| what | where |
|---|---|
| All UI copy, per language | `lib/copy/{da,en}.ts`, shape in `types.ts`, read via `getCopy(lang)` |
| Exhibitor ids, artist names, imagery (language-neutral) | `lib/exhibitors/data.ts` |
| Exhibitor work titles, materials, dimensions, descriptions | `lib/exhibitors/copy.{da,en}.ts`, keyed by id |
| Merge of the two, with alt text derived | `lib/exhibitors/index.ts` → `getExhibitors(lang)` |
| Values identical in both languages | `lib/constants.ts` (`PARTNER_LOGOS`, `BADGE`, `NOMINEES`, `WINNER`, `SITE_URL`, `HOME_HREF`) |
| Gallery strip | `lib/gallery-images.ts` |

`components/SitePage.tsx` is the single composition rendered for both languages.

Conventions worth keeping:

- **Multi-paragraph text is `string[]`, never a string with `\n`.** `intro.col1`/`col2`, and exhibitor `dimensions`/`description`, are arrays rendered as one element each. A previous version embedded `\n` in the strings and relied on a `white-space: pre-line` class that was applied to nothing, so every line break silently collapsed.
- **Image alt text is derived, not stored.** `getExhibitors` builds `` `${workTitle} ${lang === 'da' ? 'af' : 'by'} ${artistName}` ``. Storing it meant 21 of 26 Danish entries carried untranslated English alt.
- `getExhibitors` throws at module load if an id is missing from a dictionary, so drift fails the build rather than rendering a blank row.
- **DOM ids come from `exhibitor.id`, not `useId()`.** `useId` encodes a component's position in the React tree, so its output changes whenever anything above it changes — which makes ids churn between builds and turns any stale-build state into a hydration error. `exhibitor-<id>-trigger` / `-panel` are stable and readable.
- Props crossing into client components must be serialisable — **no functions**. `slider.goTo` is a template string with an `{n}` placeholder for exactly this reason; TypeScript won't catch it, only the build will.

### Language switch

`app/[[...lang]]/layout.tsx` passes `lang` plus *resolved* label strings down through `ClientProviders` → `GlobalNav`. No component parses `usePathname()` to work out the language, and only the active language's strings reach the client bundle.

`components/LangLink.tsx` is the only correct way to link between languages. It is a `next/link` (so the target's RSC payload is prefetched), and its `onClick` saves scroll into the transition context, awaits the outgoing fade, then pushes inside `startTransition` with `{ scroll: false }`.

`lib/transition-context.tsx` holds the registered fade, and the scroll handoff in a **module-scope** variable. That is not a style choice: `TransitionProvider` is rendered by the root layout, which itself lives inside the `[[...lang]]` segment, so the provider remounts on a switch and anything held in a `useRef` on it is lost. An earlier version did exactly that and silently never restored anything — scroll only *looked* preserved because the browser keeps the offset across a same-task DOM swap. Same reason `IntroOverlay` keeps `introDone` at module scope. `register` returns an unregister; `trigger` races the fade against a timeout and swallows errors so a broken animation can never block navigation.

### Scroll restoration is anchored, not pixel-based

`#intro` is ~422px taller in English (~540px on mobile), so a raw pixel offset lands on different content. `lib/scroll-anchor.ts` instead records *which landmark* the viewport sat against and the fraction into the span after it, then reproduces that in the incoming layout. Anchors are the five section ids plus the 26 `exhibitor-<id>-trigger` ids — all language-independent, and closed accordion rows are the same 71px pitch in both languages because `artistName` is shared data. Anchors must be collected fresh on every call; caching them defeats the purpose.

Exact in `#hero`/`#gallery`/`#index`/`#colophon`; proportional inside `#intro` and inside an open panel, which is the right approximation for the same prose at a different length.

`lib/accordion-dom.ts` carries the open exhibitor across the switch — otherwise it silently closes (`IndexSection.tsx`'s `closeItem(null, item, true)` on mount) and the document collapses another 600–950px. `jumpOpenTrigger` is a GSAP-free mirror of the jump-close so it can run synchronously in a layout effect; `IndexSection` skips its close for an item already marked open.

Both steps live in `PageTransition`'s single layout effect, in order: consume handoff → re-open → measure → scroll. Re-opening changes the height of everything below it, so it must precede measurement; keeping both in one effect makes that structural rather than a race against `IndexSection`'s async setup.

**Use `behavior: 'instant'` for any programmatic scroll.** Toggling an inline `scroll-behavior: auto` around a bare `scrollTo(x, y)` is *not* reliable — Chrome was observed animating over ~1s regardless, because the computed value is read when the scroll is performed.

### Fail-open rendering

Both visibility gates must stay fail-open; they were previously fail-closed and could leave the site permanently blank.

- `<main>` ships with `data-transition="pending"` and `.main[data-transition="pending"] { opacity: 0 }` in CSS. `PageTransition` removes the attribute on GSAP load, **and** on a `.catch`, **and** on a 1.2s timeout. A `<noscript>` block in the layout forces it visible.
- `IntroOverlay` dismisses on lottie `complete`, `error`, `data_failed`, a `.catch` on the whole async path, and a hard 6s timeout. `lib/safe-storage.ts` wraps `sessionStorage`, which *throws* (not returns null) in Safari private browsing and would otherwise abort the effect.

### The async-effect cleanup rule

**Every effect that awaits before registering anything needs a `cancelled` flag.** This is the single most common bug in this codebase — it has appeared in five components.

The shape that breaks:

```ts
useEffect(() => {
  let teardown = null
  const run = async () => {
    await import('gsap')          // ← cleanup can fire during this await
    teardown = attachThings()
  }
  run()
  return () => teardown?.()       // ← teardown is still null; removes nothing
}, [])
```

React's dev double-invoke fires the cleanup *before* the first `run()` resolves, so nothing is torn down and both passes then register. The result is two of everything: two click listeners per accordion trigger (every click opens *and* closes), two stacked `<svg>`s in the nav logo, leaked ScrollTriggers bound to a `#hero` that no longer exists.

The `[[...lang]]` subtree remounts on every language switch, so this surfaces as "it worked until I changed language". Correct shape:

```ts
let cancelled = false
const run = async () => {
  await import('gsap')
  if (cancelled) return
  …
}
return () => { cancelled = true; teardown?.() }
```

Components that mutate the DOM directly (`StackedNav` relocates `<li>`s between two `<ul>`s) must also **undo those moves in cleanup**, or a re-run starts from a half-sorted list.

A quick way to check for a regression: patch `EventTarget.prototype.addEventListener` / `removeEventListener` in the console, switch language, and confirm the counts balance.

### Lottie mounting rules

Two traps, both of which have bitten this codebase:

1. **Never assign the animation after an `await` without a cancelled flag.** `loadAnimation` is reached after `import()` + fetch resolve, so a cleanup that only does `anim?.destroy()` runs while `anim` is still `null`, destroys nothing, and the in-flight load appends anyway. Combined with React's dev double-invoke that yields **two stacked `<svg>`s**. Every mount must use a `cancelled` flag, `container.replaceChildren()` before loading, and a destroy in cleanup.
2. **`IntroOverlay` must not render on a remount.** The `[[...lang]]` subtree remounts on every language switch, and the overlay is a full-screen *white* panel — one rendered frame reads as the whole page flashing. A module-level `introDone` flag (plus a `useLayoutEffect` for the storage check, so the decision lands before paint) keeps it to the genuine first load only.

`lib/lottie.ts` caches the JSON at module level so a remount does not refetch, and `NavWrapper` carries the playhead across remounts in a module-level `lastFrame` so the looping nav logo resumes rather than snapping back to frame 0.

### Assets: cache-busting is manual

`next.config.ts` sets `max-age=31536000` on `/images|fonts|documents|icons`, and these files are **not** content-hashed. Editing an asset in place will not reach returning visitors for up to a year. The house convention is a version suffix in the filename — `hero-image-1-v2.webp`, `biennale-brown-logo-xl-v5.json`. **Bump the filename whenever you change an asset.**

Note the intro Lottie is filled `#291E0F`, the same brown as the site background, so its overlay is deliberately `bg-white`. It is played as `initialSegment: [60, 840]` at `setSpeed(4)` (~3.25s): frames 0–59 are a static hold, and the composition's `op` was corrected from 180 to 840 in v5 because the export had truncated a ~14s animation to 3s.

### Imperative DOM components

Several components animate by querying and mutating the DOM. The class names and section `id`s are load-bearing contracts that TypeScript cannot check.

- **`StackedNav`** — scroll-spy that physically moves `<li>`s between two `<ul>`s plus a cloned floating item. Resolves targets via `document.getElementById` for `intro`, `gallery`, `index`, `colophon`, so those section ids must match `NAV_ITEMS`. `labels` is a required prop — it used to be optional with a Danish fallback, which silently rendered the wrong language.
- **`IndexSection` + `AccordionItem`** — `AccordionItem` renders the markup, `IndexSection` drives it via `.index-accordion`, `.index-accordion-item`, `.index-accordion-trigger`, `.index-accordion-panel`, `.index-accordion-panel__inner`, `.index-accordion-icon`. Renaming any of these breaks the accordion silently.
- **`HeroSection`** — SVG-masked "eye" with a cross-fading slideshow, mouse tilt on desktop and device-orientation tilt behind a permission button on mobile. Has a **second** slideshow implementation built at runtime for iOS (`checkIsIOS`), where the SVG mask path performs badly. Only `HERO_IMAGES[0]` is in the DOM initially. Never pass a raw `transform` to `gsap.set` on SVG nodes — GSAP writes it as an *attribute*, yielding `transform="null"` and a console error per element per tween; use `force3D` instead.
- **`GallerySection`** — GSAP `Draggable` + inertia strip, measured from live rects and rebuilt on resize (`build()` clears its own listeners first, or every resize leaks a pair). Deliberately avoids `img.decode()`, which hangs on off-screen lazy images.
- **`IconNav`** — `ScrollTrigger` toggles `.is-on` once the hero scrolls past; the transition itself is in `globals.css`.

`GlobalNav` keys `IconNav` and `StackedNav` on `lang`. Those keys are load-bearing now that the switch is a soft transition: both components cache DOM references in mount-only effects and would otherwise hold stale nodes.

### Styling

Tailwind v4, CSS-first — **no `tailwind.config`**. Tokens live in the `@theme` block of `app/globals.css`:

- `--color-bg: #291E0F` → `bg-bg` (also hardcoded in a few gradients; keep in sync)
- `--font-sans` → local Utile Narrow (`lib/fonts.ts`, weights 600/700 only)
- `--breakpoint-nav: 62rem` → the `nav:` / `max-nav:` desktop-nav cutover
- `--spacing-gutter: 1.5625rem` → `px-gutter`, `left-gutter`, …

House style: theme tokens in `@theme`, utilities inline in JSX, and plain global CSS only for what Tailwind can't express or for elements created imperatively by JS. No `@utility`, `@layer` or `@apply` anywhere.

Browser-gesture handling lives on `html`/`body` in `globals.css`: `overscroll-behavior-x: none` suppresses swipe-to-navigate (it must be on the viewport scroller — the carousel is transform-based and not a scroll container, so putting it there does nothing), and `scrollbar-width: none` + `::-webkit-scrollbar { display: none }` hide the only scrollbar in the app. Note iOS Safari's left-edge back-swipe is a system gesture and cannot be suppressed by any web API.

### Images

All local under `public/images`, rendered with `next/image` with explicit `width`/`height` and hand-tuned `sizes` (the `LS`/`LP`/`LP_NEW`/`LP_ALT` constants in `lib/exhibitors/data.ts`). Lottie JSON in `public/documents` is fetched at runtime with `lottie-web` dynamically imported.

`app/robots.ts` and `app/sitemap.ts` both build from `SITE_URL` in `lib/constants.ts` — change the domain in that one place.

## Known gaps

- **Danish is missing two intro paragraphs** that exist in English. Marked `TODO(P2)` / `TODO(P4)` in `lib/copy/da.ts` with the English source quoted. Do not machine-translate them.
- No `metadataBase`, canonical, hreflang or `og:image` — deliberately out of scope so far.
