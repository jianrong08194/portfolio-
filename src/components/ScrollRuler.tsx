import { useEffect, useState } from 'react'

const TICKS = 28

export function ScrollRuler() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const activeIndex = Math.round(progress * (TICKS - 1))

  return (
    <div className="fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-start gap-1.5 sm:flex">
      {Array.from({ length: TICKS }, (_, i) => {
        const isMajor = i % 6 === 0
        const isActive = i === activeIndex
        return (
          <div
            key={i}
            className="rounded-full transition-all duration-150"
            style={{
              width: isActive ? 28 : isMajor ? 18 : 10,
              height: isActive ? 2.5 : 1.5,
              background: isActive ? 'var(--color-accent, #aa3bff)' : isMajor ? '#9ca3af' : '#d1d5db',
            }}
          />
        )
      })}
    </div>
  )
}
