import { ArrowLeft } from 'lucide-react'
import { Badge, PlaceholderTag } from '../ui/Badge'
import { ArchitectureDiagram } from '../ui/ArchitectureDiagram'
import { ProjectVisual } from '../ui/ProjectVisual'
import type { Project } from '../../types'

const H = ({ children }: { children: string }) => <h2 className="mt-12 font-display text-2xl font-bold">{children}</h2>

export function CaseStudy({ project }: { project: Project }) {
  const c = project.caseStudy!
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-20">
      <a href="#projects" className="inline-flex h-11 items-center gap-2 text-muted hover:text-ink"><ArrowLeft size={18} aria-hidden /> All projects</a>
      <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">{project.title}</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">{project.summary}</p>
      <ul className="mt-5 flex flex-wrap gap-2">{project.stack.map((t) => <li key={t}><Badge>{t}</Badge></li>)}</ul>
      <div className="mt-8"><ProjectVisual label="Project screenshot placeholder" /></div>
      <p className="mt-6 flex items-center gap-2 text-sm text-muted"><PlaceholderTag>Draft</PlaceholderTag> Sections below are templates. Edit src/data/projects.ts with confirmed details.</p>
      <H>Problem</H><p className="mt-3 leading-relaxed text-muted">{c.problem}</p>
      <H>Solution</H><p className="mt-3 leading-relaxed text-muted">{c.solution}</p>
      <H>My responsibilities</H>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted">{c.responsibilities.map((r) => <li key={r}>{r}</li>)}</ul>
      <H>Architecture</H>
      <dl className="mt-3 divide-y divide-line rounded-xl border border-line bg-surface">
        {c.architecture.map((a) => <div key={a.layer} className="flex flex-col gap-1 px-5 py-3.5 sm:flex-row sm:gap-6"><dt className="w-24 shrink-0 font-medium">{a.layer}</dt><dd className="text-muted">{a.detail}</dd></div>)}
      </dl>
      <div className="mt-6"><ArchitectureDiagram /></div>
      <H>Engineering challenges</H>
      <ul className="mt-3 space-y-4">
        {c.challenges.map((x) => <li key={x.challenge} className="rounded-xl border border-line bg-surface p-5"><p className="font-medium">{x.challenge}</p><p className="mt-1 text-muted">{x.solution}</p></li>)}
      </ul>
    </div>
  )
}
