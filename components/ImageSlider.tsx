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
        className="absolute top-1/2 -translate-y-1/2 z-10 left-2 w-8 h-auto cursor-pointer"
        onClick={prev}
        aria-label="Previous image"
      >
        <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.0293 9C24.0293 6.91095 22.8506 4.92658 20.7676 3.42676C18.6864 1.92832 15.7649 0.970703 12.5 0.970703C9.23509 0.970703 6.31359 1.92832 4.23242 3.42676C2.14936 4.92658 0.970703 6.91095 0.970703 9C0.970703 11.0891 2.14936 13.0734 4.23242 14.5732C6.31358 16.0717 9.23506 17.0293 12.5 17.0293V18L11.8574 17.9883C5.36848 17.7506 0.169572 13.9333 0.00390625 9.23145L0 9C0 4.0374 5.60754 0 12.5 0L13.1426 0.0117188C19.7376 0.253337 25 4.19256 25 9L24.9961 9.23145C24.825 14.0875 19.285 18 12.5 18V17.0293C15.7649 17.0293 18.6864 16.0717 20.7676 14.5732C22.8506 13.0734 24.0293 11.0891 24.0293 9Z" fill="#FFF" />
          <path d="M11.6711 6.44737L9.55263 8.53947H18V9.89474H9.55263L11.6711 12L10.7368 12.9342L7 9.22368L10.7368 5.5L11.6711 6.44737Z" fill="#FFF" />
        </svg>
      </button>

      {/* Next arrow */}
      <button
        className="absolute top-1/2 -translate-y-1/2 z-10 right-2 w-8 h-auto cursor-pointer"
        onClick={next}
        aria-label="Next image"
      >
        <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.970703 9C0.970703 6.91095 2.14936 4.92658 4.23242 3.42676C6.31359 1.92832 9.23509 0.970703 12.5 0.970703C15.7649 0.970703 18.6864 1.92832 20.7676 3.42676C22.8506 4.92658 24.0293 6.91095 24.0293 9C24.0293 11.0891 22.8506 13.0734 20.7676 14.5732C18.6864 16.0717 15.7649 17.0293 12.5 17.0293V18L13.1426 17.9883C19.6315 17.7506 24.8304 13.9333 24.9961 9.23145L25 9C25 4.0374 19.3925 0 12.5 0L11.8574 0.0117188C5.26238 0.253337 0 4.19256 0 9L0.00390625 9.23145C0.175007 14.0875 5.71495 18 12.5 18V17.0293C9.23506 17.0293 6.31358 16.0717 4.23242 14.5732C2.14936 13.0734 0.970703 11.0891 0.970703 9Z" fill="#FFF" />
          <path d="M13.3289 6.44737L15.4474 8.53947H7V9.89474H15.4474L13.3289 12L14.2632 12.9342L18 9.22368L14.2632 5.5L13.3289 6.44737Z" fill="#FFF" />
        </svg>


      </button>


    </div>
  )
}
