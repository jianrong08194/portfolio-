import { useRef } from 'react'
import styles from './Carousel.module.css'
import { useDragScroll } from './useDragScroll'
import { useScrollProgress } from './useScrollProgress'

const COLORS = ['#e63946', '#457b9d', '#2a9d8f', '#e76f51', '#6d597a', '#1d3557']

export function Carousel() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>()
  useDragScroll(ref)
  const gap = 12

  const scrollByPanel = (dir: 1 | -1) => {
    const el = ref.current
    const card = el?.children[0] as HTMLElement | undefined
    if (!el || !card) return
    el.scrollBy({ left: (card.offsetWidth + gap) * dir, behavior: 'smooth' })
  }

  return (
    <div>
      <div className={styles.progressTrack}>
        <div className={styles.progressFill} style={{ width: `${progress * 100}%` }} />
      </div>

      <div className={styles.scroller} ref={ref}>
        {COLORS.map((color, i) => (
          <div key={i} className={styles.panel} style={{ background: color }}>
            Panel {i + 1}
          </div>
        ))}
      </div>

      <div className={styles.controls}>
        <button type="button" onClick={() => scrollByPanel(-1)} aria-label="Previous">
          ‹
        </button>
        <button type="button" onClick={() => scrollByPanel(1)} aria-label="Next">
          ›
        </button>
      </div>
    </div>
  )
}
