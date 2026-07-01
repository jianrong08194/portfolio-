import { useEffect, useRef, useState } from 'react'

const TYPE_MS = 300
const DELETE_MS = 200
const HOLD_FULL_MS = 1250
const HOLD_MIN_MS = 600

export function TypewriterText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [len, setLen] = useState(1)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let playing = false
    let timeoutId: ReturnType<typeof setTimeout>
    let current = 1

    const step = (dir: 'type' | 'delete') => {
      if (!playing) return

      if (dir === 'type') {
        current = Math.min(current + 1, text.length)
        setLen(current)
        const done = current >= text.length
        timeoutId = setTimeout(() => step(done ? 'delete' : 'type'), done ? HOLD_FULL_MS : TYPE_MS)
      } else {
        current = Math.max(current - 1, 1)
        setLen(current)
        const done = current <= 1
        timeoutId = setTimeout(() => step(done ? 'type' : 'delete'), done ? HOLD_MIN_MS : DELETE_MS)
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        playing = entry.isIntersecting
        if (playing) {
          clearTimeout(timeoutId)
          step('type')
        } else {
          clearTimeout(timeoutId)
        }
      },
      { threshold: 0.8 },
    )
    observer.observe(el)

    return () => {
      observer.disconnect()
      clearTimeout(timeoutId)
    }
  }, [text])

  return (
    <span ref={ref} className={className}>
      {text.slice(0, len)}
    </span>
  )
}
