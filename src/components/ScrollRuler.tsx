import { useEffect, useState } from 'react'

const TICKS = 28

type ScrollRulerProps = {
  orientation?: 'vertical' | 'horizontal'
  progress?: number
}

export function ScrollRuler({ orientation = 'vertical', progress: controlledProgress }: ScrollRulerProps) {
  const [windowProgress, setWindowProgress] = useState(0)
  const isControlled = controlledProgress !== undefined

  useEffect(() => {
    if (isControlled) return

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setWindowProgress(max > 0 ? window.scrollY / max : 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [isControlled])

  const progress = isControlled ? controlledProgress : windowProgress
  const activeIndex = Math.round(progress * (TICKS - 1))
  const isVertical = orientation === 'vertical'

  return (
    <div
      className={
        isVertical
          ? 'fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-start gap-1.5 sm:flex'
          : 'flex flex-row items-center gap-1.5'
      }
    >
      {Array.from({ length: TICKS }, (_, i) => {
        const isMajor = i % 6 === 0
        const isActive = i === activeIndex
        return (
          <div
            key={i}
            className="rounded-full transition-all duration-150"
            style={
              isVertical
                ? {
                    width: isActive ? 34 : isMajor ? 22 : 13,
                    height: isActive ? 3.5 : 2,
                    background: isActive ? '#000000' : isMajor ? '#9ca3af' : '#d1d5db',
                  }
                : {
                    height: isActive ? 34 : isMajor ? 22 : 13,
                    width: isActive ? 3.5 : 2,
                    background: isActive ? '#000000' : isMajor ? '#9ca3af' : '#d1d5db',
                  }
            }
          />
        )
      })}
    </div>
  )
}
