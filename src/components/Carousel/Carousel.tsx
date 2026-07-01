import { useNavigate } from 'react-router-dom'
import { ScrollRuler } from '../ScrollRuler'
import { navigateWithTransition } from '../../utils/pageTransition'
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
        <div className="shape-morph absolute right-[5%] top-3/5 z-0 aspect-square h-[65%] -translate-y-1/2" />
        <span className="relative w-[80%] display-inline z-10 text-6xl">
          Tech Lead driving agile methodologies, robust code reviews, and modern development.  
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
  }
]

export function Carousel() {
  const navigate = useNavigate()
  const { ref, progress } = useScrollProgress<HTMLDivElement>()
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
      <div
        ref={ref}
        className="flex touch-none gap-3 overflow-hidden py-1 [--card-w:min(900px,86vw)] px-[calc((100%-var(--card-w))/2)] cursor-grab transition-transform duration-300 ease-out will-change-transform active:cursor-grabbing"
        style={{ transform: `scale(${scale})` }}
      >

        {CARDS.map((card, i) => (
          <div key={i}>
            <div className={labelClassName}>
              <label>{card.label}</label>
            </div>
            <div onClick={() => card.path && navigateWithTransition(() => navigate(card.path!))}>
              <CarouselCard>{card.content}</CarouselCard>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-2 flex items-center justify-between gap-2">
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
