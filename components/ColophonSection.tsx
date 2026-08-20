import Image from 'next/image'
import type { CreditEntry } from '@/lib/copy'

type Props = {
  supportLabel: string
  fundingLogoAlt: string
  credits: CreditEntry[]
  copyright: string
  dateRange: string
}

/** The credits entry after which the layout wants extra breathing room. */
const CREDIT_GAP_AFTER_INDEX = 3

export default function ColophonSection({
  supportLabel,
  fundingLogoAlt,
  credits,
  copyright,
  dateRange,
}: Props) {
  return (
    <section id="colophon" className="px-gutter pb-16 md:pb-12 w-full mx-auto md:pl-[21vw] md:pr-[14vw]">
      {/* Sponsors */}
      <div className="mb-12">
        <div className="label-xs">{supportLabel}</div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 items-center mt-4">
          {/* One logo strip split across two files: the first carries the
              accessible name, the second is a decorative continuation. */}
          <Image
            src="/images/FondeGroup_cleaned_light-pt1-scaled.png"
            sizes="(max-width: 2500px) 100vw, 2500px"
            alt={fundingLogoAlt}
            width={2500}
            height={300}
            className="h-auto w-full object-contain"
          />
          <Image
            src="/images/FondeGroup_cleaned_light-pt2-scaled.png"
            sizes="(max-width: 2500px) 100vw, 2500px"
            alt=""
            width={2500}
            height={300}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>

      {/* Credits grid */}
      <div className="grid grid-cols-2 gap-6 md:gap-8 mb-12 max-md:grid-cols-1">
        {credits.map((c, i) => (
          <div key={i} className={`flex flex-col gap-2${i === CREDIT_GAP_AFTER_INDEX ? ' mb-4' : ''}`}>
            <div className="label-xs">{c.label}</div>
            <div className="text-2xl/[1.2] md:text-3xl/[1.2] tracking-[-0.0025em] font-bold">{c.value}</div>
          </div>
        ))}
      </div>

      {/* Copyright + date */}
      <div className="grid grid-cols-2 gap-4 md:gap-8 max-md:grid-cols-1 pt-16 md:pt-36">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="label-xs">{copyright}</div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="label-xs">{dateRange}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
