// sessionStorage throws (not returns null) in blocked-storage contexts —
// Safari private browsing, embedded/partitioned iframes, some in-app browsers.
// An unguarded access aborts the calling effect, which is how a splash screen
// ends up permanently stuck.

export function getSessionItem(key: string): string | null {
  try {
    return sessionStorage.getItem(key)
  } catch {
    return null
  }
}

export function setSessionItem(key: string, value: string): void {
  try {
    sessionStorage.setItem(key, value)
  } catch {
    // Not being able to remember is fine; throwing is not.
  }
}
