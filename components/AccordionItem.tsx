import Image from 'next/image'
import type { Exhibitor } from '@/lib/exhibitors-da'
import ImageSlider from './ImageSlider'

type Props = {
  exhibitor: Exhibitor
  panelId: string
  triggerId: string
}

export default function AccordionItem({ exhibitor, panelId, triggerId }: Props) {
  const { images } = exhibitor

  return (
    <div
      data-state="closed"
      className="index-accordion-item"
    >
      {/* Trigger */}
      <button
        id={triggerId}
        type="button"
        aria-expanded="false"
        aria-controls={panelId}
        className="index-accordion-trigger flex items-center justify-between w-full py-5 text-left cursor-pointer border-t border-white gap-3 bg-transparent appearance-none [color:inherit] [font:inherit] rounded-none"
      >
        <div className="font-bold text-2xl/[1] md:text-3xl/[1] tracking-[-0.005em]">{exhibitor.artistName}</div>
        <Image
          src="/icons/plus.svg"
          alt=""
          width={20}
          height={20}
          className="index-accordion-icon inline-flex items-center justify-center w-4 h-4 md:w-5 md:h-5 shrink-0 origin-center will-change-transform pointer-events-none"
        />
      </button>

      {/* Panel — starts hidden */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className="index-accordion-panel w-full max-w-full box-border"
        hidden
        style={{ height: '0px', opacity: 0 }}
      >
        <div className="index-accordion-panel__inner pb-5 w-full">
          {/* Images */}
          {images.type === 'slider' && (
            <div className="w-full mb-6">
              <ImageSlider slides={images.slides} isPortrait={false} />
            </div>
          )}
          {images.type === 'portrait-pair' && (
            <div className="flex flex-wrap gap-4 items-start w-full mb-6">
              {images.slides.map((slide, i) => (
                <div key={i} className="flex-1 min-w-0 max-w-[calc(50%-8px)] max-md:flex-none max-md:max-w-full">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    sizes={slide.sizes}
                    width={550}
                    height={825}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          )}
          {images.type === 'alternative-layout' && (
            <div className="flex gap-[1.5%] items-start w-full mb-6 max-[479px]:flex-col max-[479px]:gap-4">
              <Image
                src={images.landscape.src}
                alt={images.landscape.alt}
                sizes={images.landscape.sizes}
                width={1020}
                height={680}
                className="w-[66.91%] max-[479px]:w-full h-auto"
              />
              <Image
                src={images.portrait.src}
                alt={images.portrait.alt}
                sizes={images.portrait.sizes}
                width={550}
                height={825}
                className="w-[31.3%] max-[479px]:w-full h-auto"
              />
            </div>
          )}

          {/* Text */}
          <div className="grid grid-cols-1 sm:grid-cols-2 mb-8 gap-5">
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-2xl/[1] md:text-3xl/[1] uppercase tracking-[-0.005em]">{exhibitor.workTitle}</div>
              <div className="text-lg/[1.15] md:text-xl/[1.15] font-semibold flex flex-col gap-2 uppercase max-w-[80%]">
                {exhibitor.materials}
                {exhibitor.dimensions ? `\n${exhibitor.dimensions}` : ''}
              </div>
            </div>
            <div className="text-base/[1.3] md:text-lg/[1.3] font-semibold flex flex-col gap-2">
              {exhibitor.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
