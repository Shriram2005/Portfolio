import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from 'react'
import { achievements, certs, contact, education, experience, projects, services, skills, type Project } from './data'

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  })
}

function Tilt({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const move = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 8}deg)`
    el.style.setProperty('--mx', `${(x + 0.5) * 100}%`)
    el.style.setProperty('--my', `${(y + 0.5) * 100}%`)
  }
  const leave = () => ref.current && (ref.current.style.transform = '')
  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      className={`relative transition-transform duration-300 ease-out will-change-transform [background:radial-gradient(400px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,91,31,.08),transparent_60%),var(--color-panel)] ${className}`}
    >
      {children}
    </div>
  )
}

function Label({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className="reveal mb-12 flex items-baseline gap-4 border-b border-line pb-4 font-mono text-xs uppercase tracking-[0.2em] text-fog">
      <span className="text-hot">{n}</span>
      <span>{children}</span>
    </div>
  )
}

const nav = ['work', 'experience', 'skills', 'services', 'record', 'contact']

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 font-mono text-xs">
        <a href="#top" className="font-bold tracking-tight">
          shriram<span className="text-hot">.</span>mange
        </a>
        <nav className="hidden gap-8 uppercase tracking-widest text-fog md:flex">
          {nav.map((n) => (
            <a key={n} href={`#${n}`} className="transition-colors hover:text-paper">
              {n}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${contact.email}`}
          className="hidden bg-hot px-4 py-2 font-bold uppercase tracking-widest text-ink transition hover:bg-paper md:block"
        >
          Hire me →
        </a>
        <button className="md:hidden uppercase tracking-widest" onClick={() => setOpen(!open)} aria-expanded={open}>
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col border-t border-line px-6 py-4 font-mono text-sm uppercase tracking-widest md:hidden">
          {nav.map((n) => (
            <a key={n} href={`#${n}`} onClick={() => setOpen(false)} className="py-2">
              {n}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

const roles = ['Android Developer', 'Full-stack Engineer', 'Compose Specialist', 'Freelance Builder']

function Hero() {
  const [i, setI] = useState(0)
  const [text, setText] = useState('')
  useEffect(() => {
    const word = roles[i]
    if (text.length < word.length) {
      const t = setTimeout(() => setText(word.slice(0, text.length + 1)), 60)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => (setText(''), setI((i + 1) % roles.length)), 1800)
    return () => clearTimeout(t)
  }, [text, i])

  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-[1280px] gap-12 px-6 pb-20 pt-20 lg:grid-cols-[1.5fr_1fr] lg:pt-32">
        <div>
          <div className="reveal mb-8 inline-flex items-center gap-3 border border-line px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-fog">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for projects · Nashik, IN
          </div>
          <h1 className="reveal font-mono text-[clamp(2.75rem,8vw,6.5rem)] font-extrabold leading-[0.92] tracking-[-0.05em]">
            Shriram
            <br />
            Mange<span className="text-hot">_</span>
          </h1>
          <p className="reveal mt-6 h-8 font-mono text-lg text-fog md:text-xl">
            &gt; <span className="text-paper">{text}</span>
            <span className="caret text-hot">▌</span>
          </p>
          <p className="reveal mt-8 max-w-xl text-lg leading-relaxed text-fog">
            I craft beautiful, performant Android apps with <span className="text-paper">Kotlin & Jetpack Compose</span> and
            ship full-stack web platforms end to end — from first sketch to production deploy.
          </p>
          <div className="reveal mt-10 flex flex-wrap gap-3 font-mono text-sm">
            <a href="#work" className="group bg-hot px-6 py-4 font-bold uppercase tracking-widest text-ink transition hover:bg-paper">
              View work <span className="inline-block transition group-hover:translate-x-1">→</span>
            </a>
            <a href="#contact" className="border border-line px-6 py-4 uppercase tracking-widest transition hover:border-paper">
              Start a project
            </a>
          </div>
        </div>

        <Tilt className="reveal self-end border border-line p-6 font-mono text-sm">
          <div className="mb-5 flex items-center justify-between text-xs text-fog">
            <span>~/shriram/profile.kt</span>
            <span className="flex gap-1.5">
              <i className="h-2.5 w-2.5 rounded-full bg-line" />
              <i className="h-2.5 w-2.5 rounded-full bg-line" />
              <i className="h-2.5 w-2.5 rounded-full bg-hot" />
            </span>
          </div>
          <pre className="whitespace-pre-wrap leading-7 text-fog">
            <span className="text-hot">data class</span> <span className="text-paper">Dev</span>(
            {'\n'}  stack = <span className="text-paper">"Kotlin · Compose · React"</span>,
            {'\n'}  projects = <span className="text-paper">15</span>+,
            {'\n'}  experience = <span className="text-paper">"2+ yrs"</span>,
            {'\n'}  studying = <span className="text-paper">"MCA @ KKWIEER"</span>,
            {'\n'}  openTo = listOf(<span className="text-paper">Jobs, Freelance, Collabs</span>)
            {'\n'})
          </pre>
          <div className="mt-6 grid grid-cols-3 border-t border-line pt-5 text-center">
            {[
              ['15+', 'Projects'],
              ['2+', 'Years'],
              ['150+', 'Users · Stepo'],
            ].map(([a, b]) => (
              <div key={b}>
                <div className="text-2xl font-extrabold text-paper">{a}</div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-fog">{b}</div>
              </div>
            ))}
          </div>
        </Tilt>
      </div>
      <div className="overflow-hidden border-y border-line py-4 font-mono text-sm uppercase tracking-widest text-fog">
        <div className="marquee flex w-max gap-10">
          {[...Object.values(skills).flat(), ...Object.values(skills).flat()].map((s, k) => (
            <span key={k} className="flex items-center gap-10">
              {s} <span className="text-hot">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

const filters = ['All', 'Android', 'Web', 'AI / IoT'] as const

function ProjectLinks({ p }: { p: Project }) {
  return (
    <div className="flex gap-4 font-mono text-xs uppercase tracking-widest">
      {p.live && (
        <a href={p.live} target="_blank" rel="noreferrer" className="text-hot hover:underline">
          Live ↗
        </a>
      )}
      {p.repo && (
        <a href={p.repo} target="_blank" rel="noreferrer" className="text-fog hover:text-paper">
          Code ↗
        </a>
      )}
    </div>
  )
}

function Work() {
  const featured = projects.filter((p) => p.featured)
  const [active, setActive] = useState(0)
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const rest = projects.filter((p) => !p.featured && (filter === 'All' || p.kind === filter))
  const f = featured[active]

  return (
    <section id="work" className="mx-auto max-w-[1280px] px-6 py-28">
      <Label n="01">Selected work</Label>
      <div className="reveal grid gap-px border border-line bg-line lg:grid-cols-[320px_1fr]">
        <div className="bg-ink">
          {featured.map((p, k) => (
            <button
              key={p.name}
              onClick={() => setActive(k)}
              className={`group flex w-full items-center justify-between border-b border-line px-6 py-6 text-left transition last:border-0 ${
                k === active ? 'bg-panel' : 'hover:bg-panel/50'
              }`}
            >
              <div>
                <div className="font-mono text-xs text-fog">0{k + 1} · {p.kind}</div>
                <div className={`mt-1 font-mono text-xl font-bold ${k === active ? 'text-paper' : 'text-fog group-hover:text-paper'}`}>
                  {p.name}
                </div>
              </div>
              <span className={`font-mono text-hot transition ${k === active ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`}>→</span>
            </button>
          ))}
        </div>
        <Tilt className="min-h-[420px] p-8 md:p-12">
          <div key={f.name} className="animate-[fadeIn_.5s_ease]">
            <div className="font-mono text-xs uppercase tracking-widest text-hot">{f.tag}</div>
            <h3 className="mt-3 font-mono text-4xl font-extrabold tracking-tight md:text-5xl">{f.name}</h3>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fog">{f.desc}</p>
            {f.points && (
              <ul className="mt-8 grid gap-3 md:grid-cols-2">
                {f.points.map((pt) => (
                  <li key={pt} className="border-l-2 border-hot pl-4 text-sm leading-relaxed">
                    {pt}
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-8 flex flex-wrap gap-2">
              {f.stack.map((s) => (
                <span key={s} className="border border-line px-2.5 py-1 font-mono text-xs text-fog">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <ProjectLinks p={f} />
            </div>
          </div>
        </Tilt>
      </div>

      <div className="reveal mt-20 flex flex-wrap items-end justify-between gap-6">
        <h3 className="font-mono text-2xl font-bold">More builds</h3>
        <div className="flex border border-line font-mono text-xs uppercase tracking-widest">
          {filters.map((x) => (
            <button
              key={x}
              onClick={() => setFilter(x)}
              className={`px-4 py-2.5 transition ${filter === x ? 'bg-paper text-ink' : 'text-fog hover:text-paper'}`}
            >
              {x}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((p) => (
          <Tilt key={p.name} className="group flex flex-col border border-line p-6 hover:border-fog">
            <div className="flex items-center justify-between font-mono text-xs text-fog">
              <span>{p.kind}</span>
              <span>{p.tag}</span>
            </div>
            <h4 className="mt-6 font-mono text-lg font-bold transition group-hover:text-hot">{p.name}</h4>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-fog">{p.desc}</p>
            <div className="mt-5 font-mono text-[11px] text-fog">{p.stack.join(' / ')}</div>
            <div className="mt-5 border-t border-line pt-4">
              <ProjectLinks p={p} />
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-[1280px] px-6 py-28">
      <Label n="02">Experience</Label>
      <div className="divide-y divide-line border-y border-line">
        {experience.map((e) => (
          <div key={e.org} className="reveal group grid gap-4 py-10 transition md:grid-cols-[220px_1fr_auto] md:gap-10">
            <div className="font-mono text-sm text-fog">
              <div className="text-paper">{e.when}</div>
              <div className="mt-1">{e.where}</div>
            </div>
            <div>
              <h3 className="font-mono text-2xl font-bold tracking-tight transition group-hover:text-hot">{e.org}</h3>
              <div className="mt-1 text-fog">{e.role}</div>
              <ul className="mt-5 space-y-2 text-sm leading-relaxed">
                {e.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span className="font-mono text-hot">›</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap content-start gap-2 md:max-w-[220px] md:justify-end">
              {e.stack.map((s) => (
                <span key={s} className="border border-line px-2 py-0.5 font-mono text-[11px] text-fog">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Skills() {
  const groups = Object.keys(skills)
  const [g, setG] = useState(groups[1])
  return (
    <section id="skills" className="mx-auto max-w-[1280px] px-6 py-28">
      <Label n="03">Stack & capabilities</Label>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div className="reveal">
          <h2 className="font-mono text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Native mobile.
            <br />
            Full-stack web.
            <br />
            <span className="text-hot">Clean architecture.</span>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-fog">
            MVVM/MVI on Android, scalable backends on the web, and a solid grounding in DSA, OOP and design patterns.
          </p>
        </div>
        <div className="reveal">
          <div className="flex flex-wrap gap-2 font-mono text-xs uppercase tracking-widest">
            {groups.map((x) => (
              <button
                key={x}
                onClick={() => setG(x)}
                className={`border px-4 py-2 transition ${g === x ? 'border-hot bg-hot text-ink' : 'border-line text-fog hover:border-fog hover:text-paper'}`}
              >
                {x}
              </button>
            ))}
          </div>
          <div key={g} className="mt-8 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3">
            {skills[g].map((s, k) => (
              <div
                key={s}
                style={{ animationDelay: `${k * 40}ms` }}
                className="animate-[fadeIn_.4s_ease_both] bg-ink px-5 py-6 font-mono text-sm transition hover:bg-panel hover:text-hot"
              >
                <span className="mr-2 text-[10px] text-fog">{String(k + 1).padStart(2, '0')}</span>
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="border-y border-line bg-panel">
      <div className="mx-auto max-w-[1280px] px-6 py-28">
        <Label n="04">What I offer</Label>
        <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([t, d], k) => (
            <div key={t} className="reveal group bg-panel p-8 transition hover:bg-ink">
              <div className="font-mono text-xs text-hot">/{String(k + 1).padStart(2, '0')}</div>
              <h3 className="mt-8 font-mono text-xl font-bold">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fog">{d}</p>
              <a href="#contact" className="mt-6 inline-block font-mono text-xs uppercase tracking-widest text-fog transition group-hover:text-hot">
                Discuss →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Record() {
  return (
    <section id="record" className="mx-auto max-w-[1280px] px-6 py-28">
      <Label n="05">Achievements & record</Label>
      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map(([b, t, s]) => (
          <Tilt key={t} className="reveal flex gap-6 border border-line p-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-hot font-mono text-sm font-bold text-hot">{b}</div>
            <div>
              <h3 className="font-semibold leading-snug">{t}</h3>
              <p className="mt-1 text-sm text-fog">{s}</p>
            </div>
          </Tilt>
        ))}
      </div>

      <div className="mt-20 grid gap-16 lg:grid-cols-2">
        <div className="reveal">
          <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-fog">Education</h3>
          {education.map(([d, s, w, g]) => (
            <div key={d} className="grid grid-cols-[64px_1fr_auto] items-baseline gap-4 border-t border-line py-5">
              <span className="font-mono font-bold text-hot">{d}</span>
              <div>
                <div>{s}</div>
                <div className="font-mono text-xs text-fog">{w}</div>
              </div>
              <span className="font-mono text-sm">{g}</span>
            </div>
          ))}
        </div>
        <div className="reveal">
          <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-fog">Certifications</h3>
          {certs.map(([c, m]) => (
            <div key={c} className="flex flex-wrap justify-between gap-2 border-t border-line py-5">
              <span>{c}</span>
              <span className="font-mono text-xs text-fog">{m}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard?.writeText(contact.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }
  const links = [
    ['GitHub', contact.github],
    ['LinkedIn', contact.linkedin],
    ['WhatsApp', contact.whatsapp],
    ['Telegram', contact.telegram],
  ]
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-[1280px] px-6 py-28">
        <Label n="06">Contact</Label>
        <h2 className="reveal font-mono text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
          Got an app idea?
          <br />
          <span className="text-hot">Let's ship it.</span>
        </h2>
        <p className="reveal mt-6 max-w-xl text-lg text-fog">
          Open to full-time roles, freelance projects and collaborations. I usually reply within 24 hours.
        </p>
        <div className="reveal mt-12 flex flex-wrap gap-3 font-mono text-sm">
          <a href={`mailto:${contact.email}`} className="bg-hot px-6 py-4 font-bold uppercase tracking-widest text-ink transition hover:bg-paper">
            Email me →
          </a>
          <button onClick={copy} className="border border-line px-6 py-4 transition hover:border-paper">
            {copied ? '✓ Copied to clipboard' : contact.email}
          </button>
          <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="border border-line px-6 py-4 transition hover:border-paper">
            {contact.phone}
          </a>
        </div>
        <div className="reveal mt-16 grid grid-cols-2 border-t border-line md:grid-cols-4">
          {links.map(([n, h]) => (
            <a
              key={n}
              href={h}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border-b border-line py-6 pr-6 font-mono uppercase tracking-widest text-fog transition hover:text-paper"
            >
              {n}
              <span className="transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-hot">↗</span>
            </a>
          ))}
        </div>
      </div>
      <footer className="relative mx-auto flex max-w-[1280px] flex-wrap justify-between gap-4 px-6 pb-10 font-mono text-xs text-fog">
        <span>© 2026 Shriram Mange · Nashik, Maharashtra</span>
        <a href={contact.site} className="hover:text-paper">shrirammange.me</a>
      </footer>
    </section>
  )
}

export default function App() {
  useReveal()
  return (
    <div className="min-h-screen bg-ink text-paper antialiased">
      <Header />
      <main>
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <Services />
        <Record />
        <Contact />
      </main>
    </div>
  )
}
