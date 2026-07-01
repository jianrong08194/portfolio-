import { TransitionLink } from '../components/TransitionLink'

const SKILLS = [
  { group: 'Languages', items: 'PHP, Node.js, JavaScript, HTML, CSS, Tailwind' },
  { group: 'Frameworks & Libraries', items: 'Laravel, Vue.js, React.js, Next.js' },
  { group: 'Databases', items: 'MySQL, PostgreSQL, MongoDB, Microsoft SQL Server' },
  { group: 'DevOps & Infrastructure', items: 'CI/CD Pipelines, GitHub Code Review, Operations, Automation, Systems Architecture' },
  { group: 'Methodologies & Leadership', items: 'Agile, Team Training, R&D Management, AI-Guided Mentorship' },
]

const EXPERIENCE = [
  {
    company: 'Polareis',
    location: 'Kuala Lumpur, Malaysia',
    role: 'Tech Team Lead',
    period: 'May 2025 – July 2026',
    bullets: [
      'Spearheaded full-cycle engineering operations, maintaining complete technical ownership of system architecture, R&D initiatives, DevOps workflows, and robust CI/CD pipelines.',
      'Oversaw code standards and deployment quality by establishing rigid GitHub code review processes and system maintenance protocols.',
      'Championed team productivity and scale by delivering structured technical training, implementing agile methodologies, and mentoring engineers on best practices using modern AI-guided coding workflows.',
    ],
  },
  {
    company: 'Foqcus Sdn Bhd',
    location: 'Cheras, Selangor, Malaysia',
    role: 'Senior Software Developer / Engineer',
    period: 'Oct 2023 – June 2025',
    bullets: [
      'Pixelcard (E-Business Card Platform): Led architectural planning, task management, and UI/UX reviews. Developed geolocation tracking engines, device-responsive profile layouts, and integrated seamless FIUU payment gateways.',
      "SmartKood (Logistics Platform): Engineered core features for a business logistics platform focused on QR code workflows, including Touch 'n Go eWallet disbursements, digital lucky draws, and brand owner real-time balance overviews.",
    ],
  },
  {
    company: 'Fusionex Group',
    location: 'Petaling Jaya, Selangor, Malaysia',
    role: 'Solutions Developer',
    period: 'Aug 2021 – Sept 2023',
    bullets: [
      'Farm2Table E-Commerce: Architected and optimized mission-critical backend math engines for complex real-time cart breakdowns, dynamic promotions, and transactional discount summaries.',
      '8Excite Application & WMS: Built comprehensive administrative configuration portals handling multi-channel group-buy workflows, order setups, real-time COGS trackers, item transaction logs, and partner channel asset allocations.',
      '8 Tix platform: Constructed high-performance interactive event seat maps, optimized user-facing ticket selection flows, and designed heavy-traffic event landing architectures.',
    ],
  },
  {
    company: 'LinkZZapp Group Sdn Bhd & Tech-Store',
    location: 'Kuala Lumpur / Petaling Jaya, Malaysia',
    role: 'Software Engineer / Freelance Software Engineer',
    period: 'June 2018 – Jan 2021',
    bullets: [
      'LinkZZapp PMS: Programmed underlying frameworks for a flagship prop-tech e-Property Platform ecosystem, creating models for Visitor Management, User Feedback, Vacant Possession, and data-driven analytical dashboards.',
      'Account & Notification Layers: Crafted scalable mobile web APIs optimized through API load balancing architectures, data validation, and built transactional email/FCM alert systems.',
      'Smart Marketing & Kiosks: Engineered robust content management platforms for ad banner delivery networks alongside executing physical third-party IoT kiosk software integrations.',
    ],
  },
]

export default function Resume() {
  return (
    <div className="mx-auto max-w-4xl py-10 text-left">
      <div className="mb-8 flex items-center justify-between px-16">
        <TransitionLink to="/" className="inline-block text-sm text-black/50 hover:text-black">
          ‹ Back
        </TransitionLink>
        <a
          href="/henry_resume.pdf"
          download="Henry_Tan_Resume.pdf"
          className="flex items-center gap-1.5 rounded-md border border-black/20 px-3 py-1.5 text-sm text-black/60 hover:border-black/50 hover:text-black transition-colors"
          title="Download Resume"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download PDF
        </a>
      </div>

      <div className="px-16 py-6">
        <h1 className="text-4xl font-semibold leading-tight text-black">Tan Jian Rong</h1>
        <p className="mt-1 text-lg text-black/70">Senior Software Engineer &amp; Tech Team Lead</p>
        <p className="mt-2 text-sm text-black/50">
          Kuala Lumpur, Malaysia · 011-25807675 · jianrong08194@gmail.com ·{' '}
          <a href="https://linkedin.com/in/jianrong08194" target="_blank" rel="noreferrer" className="underline">
            linkedin.com/in/jianrong08194
          </a>{' '}
          ·{' '}
          <a href="https://henry.slopping.click" target="_blank" rel="noreferrer" className="underline">
            henry.slopping.click
          </a>
        </p>
      </div>

      <div className="bg-white px-16 py-6 shadow-lg">
        <section className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-black/50">Professional Summary</h2>
          <p className="mt-2 leading-relaxed text-black">
            Versatile Technical Leader and Senior Full-Stack Developer with over 7 years of experience architecting,
            building, and maintaining scalable web ecosystems. Proven track record of managing the entire software
            lifecycle — spanning R&amp;D, system architecture, CI/CD pipelines, and DevOps. Adept at building
            high-performing engineering cultures through agile methodologies, rigorous code reviews, and modern
            AI-guided developer mentorship.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-black/50">Technical Skills</h2>
          <ul className="mt-2 space-y-1">
            {SKILLS.map((s) => (
              <li key={s.group} className="text-black">
                <span className="font-medium">{s.group}:</span> {s.items}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-black/50">Work Experience</h2>
          <div className="mt-2 space-y-6">
            {EXPERIENCE.map((job) => (
              <div key={job.company}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-medium text-black">
                    {job.company} <span className="font-normal text-black/50">| {job.location}</span>
                  </h3>
                  <span className="text-sm text-black/50">{job.period}</span>
                </div>
                <p className="italic text-black/70">{job.role}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="leading-relaxed text-black">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-black/50">Education</h2>
          <p className="mt-2 font-medium text-black">
            Asia Pacific University of Technology and Innovation (APU / APIIT){' '}
            <span className="font-normal text-black/50">| Bukit Jalil, Malaysia</span>
          </p>
          <p className="text-black/70">Bachelor of Science (B.Sc.) in Computer Software Engineering | 2014 – 2018</p>
        </section>

        <section className="mt-8 mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-black/50">Languages</h2>
          <p className="mt-2 text-black">Chinese (Native/Fluent) · English (Professional) · Bahasa Malaysia (Professional)</p>
        </section>
      </div>
    </div>
  )
}
