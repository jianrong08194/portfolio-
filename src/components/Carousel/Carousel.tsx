import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ScrollRuler } from '../ScrollRuler'
import { navigateWithTransition } from '../../utils/pageTransition'
import { CarouselCard } from './CarouselCard'
import { TypewriterText } from './TypewriterText'
import { useDragScroll } from './useDragScroll'
import { useScrollProgress } from './useScrollProgress'
import { useWheelScroll } from './useWheelScroll'
import { useZoomScale } from './useZoomScale'

export function Carousel() {
  const navigate = useNavigate()
  const { ref, progress } = useScrollProgress<HTMLDivElement>()
  useDragScroll(ref)
  useWheelScroll(ref)
  const gap = 12
  const scale = useZoomScale(ref, gap)
  const [swayX, setSwayX] = useState(0)
  const lastScrollLeft = useRef(0)
  const decayTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleScroll = () => {
      const delta = el.scrollLeft - lastScrollLeft.current
      lastScrollLeft.current = el.scrollLeft
      setSwayX(-delta * 5)
      clearTimeout(decayTimer.current)
      decayTimer.current = setTimeout(() => setSwayX(0), 80)
    }

    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [])

  const CARDS = [
    {
      label: 'About',
      content: (
        <div className="flex h-full items-start justify-start p-8 text-start  font-semibold leading-tight text-black">
          <div className="shape-morph absolute right-[5%] top-3/5 z-0 aspect-square h-[65%] -translate-y-1/2" />
          <span className="relative w-[80%] display-inline z-10 text-6xl">
            Tech Lead driving agile methodologies, robust code reviews, and modern development.
          </span>
        </div>
      ),
    },
    {
      label: 'Resume',
      path: '/resume',
      content: (
        <div className="flex h-full items-start justify-start p-8 text-left text-[clamp(1.5rem,3vw,2.5rem)] font-medium leading-tight text-black  cursor-pointer">
          <TypewriterText text="EXP." className="relative z-10 text-[18rem]" />
        </div>
      ),
    },
    {
      label: 'Projects',
      path: '/projects',
      content: (
        <div className="flex flex-col h-full items-start justify-start pl-7 pt-7 text-left text-[clamp(1.5rem,3vw,2.5rem)] font-medium leading-tight cursor-pointer">
          {['MVP', 'Demo', 'Prototype', 'Projects', 'Hobby', 'Vibe Code', 'Open Source'].map((item, i) => (
            <span
              key={item}
              className={`elevator-line${item === 'Projects' ? ' font-bold' : ''}`}
              style={{ animationDelay: `${i * 0.6}s` }}
            >
              {item}
            </span>
          ))}
        </div>
      ),
    },
    {
      label: 'Repository',
      url: 'https://github.com/jianrong08194?tab=repositories',
      content: (
        <div className="flex h-full items-end p-8 text-left text-[clamp(1.5rem,3vw,2.5rem)] font-medium leading-tight text-black  cursor-pointer overflow-hidden">
          <div
            className="relative z-10 flex flex-col items-start whitespace-nowrap align-space m-auto"
            style={{
              transform: `translateX(${swayX}px)`,
              transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          >
            <svg
              viewBox="0 0 98 96"
              className="mb-2 h-[6rem] w-[6rem]"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
              />
            </svg>
            <span className="text-[10rem] leading-none">GIT<span className="text-[#8534F3]">HUB</span></span>
          </div>
        </div>
      ),
    },
  ]

  const labelClassName = 'mb-2 text-sm text-black/50 items-start w-max'
  const scrollByPanel = (dir: 1 | -1) => {
    const el = ref.current
    const card = el?.children[0] as HTMLElement | undefined
    if (!el || !card) return
    el.scrollBy({ left: (card.offsetWidth + gap) * dir, behavior: 'smooth' })
  }
  
  return (
    <div>
      <div
        ref={ref}
        className="flex touch-none gap-3 overflow-hidden py-1 [--card-w:min(900px,86vw)] px-[calc((100%-var(--card-w))/2)] cursor-grab transition-transform duration-300 ease-out will-change-transform active:cursor-grabbing"
        style={{ transform: `scale(${scale})` }}
      >

        {CARDS.map((card, i) => (
          <div key={i} className="carousel-card-enter" style={{ animationDelay: `${i * 120}ms` }}>
            <div className={labelClassName}>
              <label>{card.label}</label>
            </div>
            <div onClick={() => card.url ? window.open(card.url, '_blank', 'noopener,noreferrer') : card.path && navigateWithTransition(() => navigate(card.path!))}>
              <CarouselCard>{card.content}</CarouselCard>
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-card-enter mb-2 flex items-center justify-between gap-2" style={{ animationDelay: `${CARDS.length * 120 + 80}ms` }}>
        <ScrollRuler orientation="horizontal" progress={progress} />
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollByPanel(-1)}
            aria-label="Previous"
            className="h-8 w-8 cursor-pointer rounded-full border border-black/20 bg-transparent"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scrollByPanel(1)}
            aria-label="Next"
            className="h-8 w-8 cursor-pointer rounded-full border border-black/20 bg-transparent"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  )
}
