import type { MouseEvent, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { navigateWithTransition } from '../utils/pageTransition'

export function TransitionLink({ to, className, children }: { to: string; className?: string; children: ReactNode }) {
  const navigate = useNavigate()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    navigateWithTransition(() => navigate(to))
  }

  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  )
}
