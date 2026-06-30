import { useEffect, useState } from 'react'
import type { RefObject } from 'react'

const MIN_SCALE = 0.9

export function useZoomScale(ref: RefObject<HTMLElement | null>, gap: number) {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => {
      const card = el.children[0] as HTMLElement | undefined
      const step = (card?.offsetWidth ?? 0) + gap
      const t = step > 0 ? Math.min(el.scrollLeft / step, 1) : 0
      setScale(1 - t * (1 - MIN_SCALE))
    }

    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ref, gap])

  return scale
}
