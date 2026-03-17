type Props = {
  largeText: React.ReactNode
  col1: React.ReactNode
  col2: React.ReactNode
  badgeSrc: string
  badgeAlt: string
  prizeLabel: string
  nomineesLabel: string
  nominees: string
  winnerLabel: string
  winner: string
}

export default function IntroSection({
  largeText,
  col1,
  col2,
  badgeSrc,
  badgeAlt,
  prizeLabel,
  nomineesLabel,
  nominees,
  winnerLabel,
  winner,
}: Props) {
  return (
    <section id="intro" className="pb-24 pb-16 w-full mx-auto mb-24 px-5 md:pl-[21vw] md:pr-[14vw]">
      <div className="text-3xl/[1] md:text-[3.35rem]/[1] font-bold mb-6 md:mb-12 tracking-[-0.01em]">{largeText}</div>

      <div className="grid grid-cols-2 gap-8 mb-12 max-md:grid-cols-1">
        <div className="text-base/[1.15] md:text-2xl/[1.15] font-semibold flex flex-col gap-4 md:pr-[2.5rem]">{col1}</div>
        <div className="text-base/[1.15] md:text-2xl/[1.15] font-semibold flex flex-col gap-4 md:pr-[2.5rem]">{col2}</div>
      </div>

      <img src={badgeSrc} loading="lazy" alt={badgeAlt} width={140} height={140} className="w-full h-auto mb-24" />

      <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
        <div className="font-bold text-3xl/[1] md:text-4xl/[1]">{prizeLabel}</div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="label-xs">{nomineesLabel}</div>
            <div className="text-xl/[1.15] md:text-2xl/[1.15] font-semibold">{nominees}</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="label-xs">{winnerLabel}</div>
            <div className="font-bold text-3xl/[1] md:text-4xl/[1]">{winner}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
