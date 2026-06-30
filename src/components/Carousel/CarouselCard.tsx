import type { ReactNode } from 'react'

export function CarouselCard({ children }: { children: ReactNode }) {
  return (
    <div className="relative mr-4 h-[clamp(260px,40vw,460px)] w-(--card-w) shrink-0 select-none overflow-hidden border border-black/10 bg-white shadow-[0_0_20px_rgba(0,0,0,0.2)]">
      {children}
    </div>
  )
}
