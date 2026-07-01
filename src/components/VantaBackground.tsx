import { useEffect, useRef } from 'react'
import * as THREE from 'three'

declare global {
  interface Window {
    VANTA?: {
      DOTS: (options: Record<string, unknown>) => { destroy: () => void }
    }
  }
}

export function VantaBackground() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cancelled = false
    let effect: { destroy: () => void } | null = null

    ;(window as unknown as { THREE: typeof THREE }).THREE = THREE

    import('vanta/dist/vanta.dots.min.js').then(() => {
      if (cancelled || !ref.current || !window.VANTA) return

      effect = window.VANTA.DOTS({
        el: ref.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        color: 0x4a4a4a,
        color2: 0x4a4a4a,
        backgroundColor: 0xffffff,
        backgroundAlpha: 0,
        size: 2,
        spacing: 32,
        showLines: false,
      })
    })

    return () => {
      cancelled = true
      effect?.destroy()
    }
  }, [])

  return <div ref={ref} className="pointer-events-none fixed inset-0 -z-10" />
}
