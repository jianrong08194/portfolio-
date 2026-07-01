import { useMemo, useState } from 'react'
import { TransitionLink } from '../components/TransitionLink'
import { CATEGORIES, PROJECTS } from '../data/projects'

export default function Projects() {
  const [filter, setFilter] = useState<string>('All')

  const filtered = useMemo(
    () => (filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <div className="mx-auto max-w-5xl px-6 py-10 text-left">
      <TransitionLink to="/" className="mb-8 inline-block text-sm text-black/50 hover:text-black">
        ‹ Back
      </TransitionLink>

      <h1 className="text-4xl font-semibold leading-tight text-black">Projects</h1>
      <p className="mt-2 text-black/60">A selection of products and platforms I&apos;ve architected and built.</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {['All', ...CATEGORIES].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`cursor-pointer rounded-full border px-3 py-1 text-sm transition-colors duration-200 ${
              filter === cat
                ? 'border-black bg-black text-white'
                : 'border-black/20 text-black/60 hover:border-black/40 hover:text-black'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {filtered.map((project, i) => (
          <div
            key={project.title}
            className="project-card flex flex-col justify-between border border-black/10 bg-white p-5 shadow-[0_0_20px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div>
              <span className="inline-block rounded-full bg-(--color-accent-bg) px-2 py-0.5 text-xs font-medium text-(--color-accent)">
                {project.category}
              </span>
              <h2 className="mt-3 text-xl font-semibold text-black">
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noreferrer" className="hover:underline">
                    {project.title} ↗
                  </a>
                ) : (
                  project.title
                )}
              </h2>
              <p className="mt-1 text-sm text-black/50">
                {project.company} · {project.period}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-black/70">{project.description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-black/10 px-2 py-0.5 text-xs text-black/50">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}

        {filtered.length === 0 && <p className="col-span-full text-black/50">More {filter} projects coming soon.</p>}
      </div>
    </div>
  )
}
