import { useNavigate } from 'react-router-dom'
import { CarouselCard } from './CarouselCard'
import { TypewriterText } from './TypewriterText'
import { useDragScroll } from './useDragScroll'
import { useScrollProgress } from './useScrollProgress'
import { useWheelScroll } from './useWheelScroll'
import { useZoomScale } from './useZoomScale'

const CARDS = [
  {
    label: 'About',
    content: (
      <div className="flex h-full items-start justify-start p-8 text-start  font-semibold leading-tight text-black">
        <div className="absolute right-[5%] top-3/5 z-0 aspect-square h-[65%] -translate-y-1/2 bg-green-400" />
        <span className="relative w-[80%] display-inline z-10 text-6xl">
          Tech Lead driving full-stack architecture,{' '}
          <span >DevOps</span>, and{' '}
          <span >AI-guided team mentorship</span>.
        </span>
      </div>
    ),
  },
  {
    label: 'Experiences',
    path: '/resume',
    content: (
      <div className="flex h-full items-start justify-start p-8 text-left text-[clamp(1.5rem,3vw,2.5rem)] font-medium leading-tight text-black  cursor-pointer">
        <TypewriterText text="EXP." className="relative z-10 text-[18rem]" />
      </div>
    ),
  },
  {
    label: 'Projects',
    content: (
      <div className="flex flex-col h-full items-start justify-start pl-7 pt-7 text-left text-[clamp(1.5rem,3vw,2.5rem)] font-medium leading-tight text-grey-900 cursor-pointer" >
        <span>
          MVP
        </span>
        <span >
          Demo
        </span>
        <span >
          Prototype
        </span>
        <span className="text-black" >
          Projects
        </span>
        <span >
          Hobby
        </span>
        <span>
          Vibe Code
        </span>
        <span>
          Open Source
        </span>
      </div>
    ),
  }
]

export function Carousel() {
  const navigate = useNavigate()
  const { ref, progress } = useScrollProgress<HTMLDivElement>()
  void progress
  useDragScroll(ref)
  useWheelScroll(ref)
  const gap = 12
  const scale = useZoomScale(ref, gap)

  const labelClassName = 'mb-2 text-sm text-black/50 items-start w-max'
  const scrollByPanel = (dir: 1 | -1) => {
    const el = ref.current
    const card = el?.children[0] as HTMLElement | undefined
    if (!el || !card) return
    el.scrollBy({ left: (card.offsetWidth + gap) * dir, behavior: 'smooth' })
  }
  
  return (
    <div>
      {/* <div className="relative my-4 h-1 overflow-hidden rounded-full bg-black/10">
        <div
          className="absolute inset-0 bg-current transition-[width] duration-100 ease-linear"
          style={{ width: `${progress * 100}%` }}
        />
      </div> */}

      <div
        ref={ref}
        className="flex gap-3 overflow-hidden py-1 [--card-w:min(900px,86vw)] px-[calc((100%-var(--card-w))/2)] cursor-grab transition-transform duration-300 ease-out will-change-transform active:cursor-grabbing"
        style={{ transform: `scale(${scale})` }}
      >

        {CARDS.map((card, i) => (
          <div key={i}>
            <div className={labelClassName}>
              <label>{card.label}</label>
            </div>
            <div onClick={() => card.path && navigate(card.path)}>
              <CarouselCard>{card.content}</CarouselCard>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-2 flex justify-end gap-2">
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
  )
}
