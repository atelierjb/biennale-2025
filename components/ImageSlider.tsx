'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import type { SlideImage } from '@/lib/exhibitors-da'

type Props = {
  slides: SlideImage[]
  isPortrait?: boolean
  className?: string
}

export default function ImageSlider({ slides, isPortrait = false, className = '' }: Props) {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() => {
    setCurrent(c => (c - 1 + slides.length) % slides.length)
  }, [slides.length])

  const next = useCallback(() => {
    setCurrent(c => (c + 1) % slides.length)
  }, [slides.length])

  if (slides.length === 0) return null

  if (slides.length === 1) {
    const slide = slides[0]
    return (
      <div className={`relative w-full overflow-hidden${isPortrait ? ' portrait' : ''} ${className}`}>
        <Image
          src={slide.src}
          alt={slide.alt}
          sizes={slide.sizes}
          width={isPortrait ? 550 : 1020}
          height={isPortrait ? 825 : 680}
          className="w-full h-auto block object-cover"
        />
      </div>
    )
  }

  return (
    <div className={`relative w-full overflow-hidden${isPortrait ? ' portrait' : ''} ${className}`}>
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex z-100 justify-center gap-2 mt-3" role="tablist" aria-label="Slides">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
            className={`w-2 h-2 border-0 cursor-pointer transition-colors duration-150 ${i === current ? 'bg-white' : 'bg-white/35'}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
      <div
        className="flex w-full will-change-transform transition-transform duration-500 ease-[ease]"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="flex-none w-full" aria-hidden={i !== current}>
            <Image
              src={slide.src}
              alt={slide.alt}
              sizes={slide.sizes}
              width={isPortrait ? 550 : 1020}
              height={isPortrait ? 825 : 680}
              className="w-full h-auto block object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}

      </div>

      {/* Prev arrow */}
      <button
        className="absolute top-1/2 -translate-y-1/2 z-10 left-2 w-8 h-8 flex items-center justify-center bg-[rgba(41,30,15,.7)] border border-white/25 rounded-full cursor-pointer text-white text-lg hover:bg-[rgba(41,30,15,.95)] transition-colors duration-150"
        onClick={prev}
        aria-label="Previous image"
      >
        ←
      </button>

      {/* Next arrow */}
      <button
        className="absolute top-1/2 -translate-y-1/2 z-10 right-2 w-8 h-8 flex items-center justify-center bg-[rgba(41,30,15,.7)] border border-white/25 rounded-full cursor-pointer text-white text-lg hover:bg-[rgba(41,30,15,.95)] transition-colors duration-150"
        onClick={next}
        aria-label="Next image"
      >
        →
      </button>


    </div>
  )
}
