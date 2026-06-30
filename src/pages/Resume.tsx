import { Link } from 'react-router-dom'

const SKILLS = [
  { group: 'Frontend', items: 'React.js, Next.js, HTML, CSS, UI/UX Planning' },
  { group: 'Backend & API', items: 'Node.js, PHP, API Load Balancing, Response Validation' },
  { group: 'Databases', items: 'MySQL, PostgreSQL, MongoDB, Microsoft SQL Server' },
  { group: 'DevOps & Tools', items: 'CI/CD Pipelines, GitHub Code Review, Cloud Infrastructure, Maintenance' },
  { group: 'Leadership', items: 'Team Training, Methodology Implementation, R&D Management, Technical Mentorship (incl. AI coding tools)' },
]

const EXPERIENCE = [
  {
    company: 'Polareis',
    location: 'Kuala Lumpur, Malaysia',
    role: 'Tech Team Lead',
    period: 'May 2025 – Present',
    bullets: [
      'Spearheaded full-cycle engineering operations, managing system architecture, R&D initiatives, DevOps workflows, and robust CI/CD pipelines.',
      'Oversaw development standards by establishing rigid GitHub code review processes and system maintenance protocols.',
      'Championed team growth and efficiency by delivering structured training, implementing agile methodologies, and mentoring engineers on coding best practices using advanced AI tools.',
      'Maintained end-to-end ownership of the technical ecosystem, ensuring high system availability and rapid feature deployment.',
    ],
  },
  {
    company: 'Foqcus Sdn Bhd',
    location: 'Cheras, Selangor, Malaysia',
    role: 'Senior Software Developer / Engineer',
    period: 'October 2023 – June 2025',
    bullets: [
      'Owned end-to-end development, technical planning, R&D, and task allocation for high-traffic web applications.',
      'Pixelcard (E-business card website): Spearheaded architecture planning, UI/UX reviews, and core development; engineered responsive profile layouts for mobile/desktop, geolocation tracking features, and FIUU payment gateway integration.',
      "SmartKood (Logistics Solution Platform): Engineered advanced Campaign features for a QR-code-driven business logistics platform, implementing Touch 'n Go eWallet disbursements, digital lucky draws, and real-time brand owner balance overviews.",
    ],
  },
  {
    company: 'Fusionex Group',
    location: 'Petaling Jaya, Selangor, Malaysia',
    role: 'Solutions Developer',
    period: 'August 2021 – September 2023',
    bullets: [
      'Executed full-stack engineering and deep R&D across multiple large-scale corporate enterprise applications.',
      'Farm2Table (E-Commerce): Architected and optimized complex business logic for real-time cart calculations, promotional discount engines, and checkout breakdown summaries.',
      '8Excite (E-Commerce App): Built comprehensive administrative portals managing intricate configurations for group-buy campaigns and order management workflows.',
      'Warehouse Management System: Authored tracking modules for cost-of-goods-sold (COGS), real-time inventory transaction history logs, and multi-client sales channel resource allocations.',
      '8 Tix (Ticketing Platform): Researched and constructed an interactive event seat map, optimized ticket selection matrices, and built high-performance landing pages for major sporting and concert events.',
    ],
  },
  {
    company: 'LinkZZapp Group Sdn Bhd',
    location: 'Kuala Lumpur, Malaysia',
    role: 'Software Engineer',
    period: 'June 2018 – November 2020',
    sub: 'Also served as Freelance Software Engineer for Tech-Store Malaysia, Oct 2020 – Jan 2021',
    bullets: [
      'Handled full-stack planning and development for core web applications and underlying API servers.',
      'LinkZZapp PMS: Developed modules for an e-Property Platform ecosystem, including User & Visitor Management, Resident Portals, Vacant Possession, and analytical dashboards.',
      'Account & Messenger Architecture: Engineered backend Mobile APIs handling heavy traffic loads via API load balancing, validated data transactions, and built transactional email/FCM notification engines.',
      'Kiosk & Marketing Systems: Integrated proprietary property systems with third-party kiosk hardware and launched dynamic content management tools for ad banners and media publishing.',
    ],
  },
]

export default function Resume() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10 text-left">
      <Link to="/" className="mb-8 inline-block text-sm text-black/50 hover:text-black">
        ‹ Back
      </Link>

      <h1 className="text-4xl font-semibold leading-tight text-black">Tan Jian Rong</h1>
      <p className="mt-1 text-lg text-black/70">Senior Software Engineer &amp; Tech Team Lead</p>
      <p className="mt-2 text-sm text-black/50">
        Kuala Lumpur, Malaysia · 011-25807675 · jianrong08194@gmail.com ·{' '}
        <a
          href="https://linkedin.com/in/jianrong08194"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          linkedin.com/in/jianrong08194
        </a>
      </p>

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
        <h2 className="text-sm font-semibold uppercase tracking-wide text-black/50">Core Skills</h2>
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
              {job.sub && <p className="text-sm text-black/50">{job.sub}</p>}
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
        <p className="mt-2 text-black">
          Asia Pacific University of Technology and Innovation (APU / APIIT) | Bukit Jalil, Malaysia
        </p>
        <p className="text-black/70">Bachelor of Science (B.Sc.) in Computer Software Engineering | 2014 – 2018</p>
      </section>

      <section className="mt-8 mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-black/50">Languages</h2>
        <p className="mt-2 text-black">Chinese (Native/Fluent) · English (Professional) · Bahasa Malaysia (Professional)</p>
      </section>
    </div>
  )
}
