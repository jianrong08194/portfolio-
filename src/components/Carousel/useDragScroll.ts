import { useEffect } from 'react'
import type { RefObject } from 'react'

export function useDragScroll(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    let isDown = false
    let startX = 0
    let startScrollLeft = 0

    const onPointerDown = (e: PointerEvent) => {
      isDown = true
      startX = e.clientX
      startScrollLeft = el.scrollLeft
      el.setPointerCapture(e.pointerId)
    }

    const onPointerMove = (e: PointerEvent) => {
      if (!isDown) return
      el.scrollLeft = startScrollLeft - (e.clientX - startX)
    }

    const onPointerUp = (e: PointerEvent) => {
      isDown = false
      el.releasePointerCapture(e.pointerId)
    }

    el.addEventListener('pointerdown', onPointerDown)
    el.addEventListener('pointermove', onPointerMove)
    el.addEventListener('pointerup', onPointerUp)
    el.addEventListener('pointercancel', onPointerUp)

    return () => {
      el.removeEventListener('pointerdown', onPointerDown)
      el.removeEventListener('pointermove', onPointerMove)
      el.removeEventListener('pointerup', onPointerUp)
      el.removeEventListener('pointercancel', onPointerUp)
    }
  }, [ref])
}
