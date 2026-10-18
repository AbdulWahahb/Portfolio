import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface Props { id: string; title: string; intro?: string; children: ReactNode }

export function Section({ id, title, intro, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <h2 id={`${id}-title`} className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        {intro && <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  )
}
