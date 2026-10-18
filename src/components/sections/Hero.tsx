import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { profile } from '../../data/profile'
import { GithubIcon, LinkedinIcon } from '../ui/Icons'

const k = (t: string) => <span className="text-accent">{t}</span>
const s = (t: string) => <span className="text-gold">{t}</span>
const codeLines = [
  <>{k('const')} developer: Developer = {'{'}</>,
  <>{'  '}name: {s(`"${profile.name}"`)},</>,
  <>{'  '}role: {s('"Frontend / Full-Stack JS"')},</>,
  <>{'  '}location: {s(`"${profile.location}"`)},</>,
  <>{'  '}paidSince: {s(String(profile.paidSince))},</>,
  <>{'  '}companies: {s(String(profile.companyCount))},</>,
  <>{'  '}stack: [{s('"React"')}, {s('"TypeScript"')}, {s('"Node.js"')}, {s('"MySQL"')}],</>,
  <>{'  '}english: {s(`"${profile.english}"`)},</>,
  <>{'  '}openToRemote: {k('true')},</>,
  <>{'}'}</>,
]

export function Hero() {
  const { scrollY } = useScroll()
  const glowY = useTransform(scrollY, [0, 600], [0, 90])
  return (
    <section id="home" aria-labelledby="hero-title" className="atmosphere relative overflow-hidden">
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0" />
      <motion.div aria-hidden style={{ y: glowY }} className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full rounded-full bg-ok opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ok" />
            </span>
            Open to Remote Opportunities
          </p>
          <h1 id="hero-title" className="mt-6 font-display text-[2.4rem] font-bold leading-[1.05] tracking-tight sm:text-6xl">
            Building Thoughtful Digital Experiences with React &amp; TypeScript.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I'm AbdulWahab, a frontend developer with professional experience since {profile.paidSince}, specializing in modern React applications, responsive interfaces, and full-stack JavaScript solutions.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="group inline-flex h-12 items-center gap-2 rounded-md bg-accent px-6 font-medium text-bg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30">Explore My Work <ArrowRight size={16} aria-hidden className="transition-transform group-hover:translate-x-1" /></a>
            <a href="#contact" className="inline-flex h-12 items-center rounded-md border border-line px-6 font-medium hover:border-accent">Contact Me</a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="grid h-12 w-12 place-items-center rounded-md border border-line hover:border-accent"><GithubIcon /></a>
            {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="grid h-12 w-12 place-items-center rounded-md border border-line hover:border-accent"><LinkedinIcon /></a>}
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-xl shadow-black/10" role="img" aria-label="Code snippet describing the developer profile">
          <div className="flex items-center justify-between border-b border-line px-4 py-3 text-sm text-muted" aria-hidden>
            <span className="font-mono">developer.ts</span>
            <span className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-line" /><i className="h-2.5 w-2.5 rounded-full bg-line" /><i className="h-2.5 w-2.5 rounded-full bg-line" /></span>
          </div>
          <div aria-hidden className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:text-sm">
            {codeLines.map((line, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 + i * 0.09, duration: 0.3 }} className="whitespace-pre">
                <span className="mr-4 select-none text-muted/60">{i + 1}</span>{line}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
