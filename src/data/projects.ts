export const CATEGORIES = ['MVP', 'Demo', 'Prototype', 'Projects', 'Hobby', 'Vibe Code', 'Open Source'] as const

export type ProjectCategory = (typeof CATEGORIES)[number]

export type Project = {
  title: string
  company: string
  period: string
  category: ProjectCategory
  description: string
  tags: string[]
  url?: string
}

export const PROJECTS: Project[] = [
  {
    title: 'Polareis',
    company: 'Polareis',
    period: '2025 – Present',
    category: 'Projects',
    description:
      'Marketing co-pilot platform — a unified command center for marketers to plan, create, publish, and optimize content across Facebook, Instagram, X, WordPress, TikTok, LinkedIn, and YouTube, with AI-powered content ideas and performance insights.',
    tags: ['SaaS', 'Marketing', 'AI'],
    url: 'https://polareis.io/',
  },
  {
    title: 'SmartKood',
    company: 'SmartKood',
    period: '2023 – 2025',
    category: 'Projects',
    description:
      'Brand protection and QR-code platform — product authentication, consumer engagement (rewards, lucky draws), and real-time scan analytics for FMCG, automotive, and luxury goods brands.',
    tags: ['QR Code', 'Brand Protection', 'SaaS'],
    url: 'https://www.smartkood.com/',
  },
]
