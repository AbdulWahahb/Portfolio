import { ArrowUpRight } from "lucide-react";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Badge, PlaceholderTag } from "../ui/Badge";
import { ProjectVisual } from "../ui/ProjectVisual";
import { GithubIcon } from "../ui/Icons";
import { ArchitectureDiagram } from "../ui/ArchitectureDiagram";
import { projects } from "../../data/projects";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  return (
    <Section id="projects" title="Featured projects">
      <div className="space-y-8">
        {featured.map((p) => (
          <Reveal key={p.slug}>
            <article
              className="
    grid
    grid-cols-1
    items-stretch
    gap-8
    rounded-2xl
    border border-line
    bg-surface
    p-5
    transition-colors
    hover:border-accent
    sm:p-8
    
  "
            >
              {/* Image: approximately 65% width */}
              <div className="min-w-0 min-h-[350px]">
                <ProjectVisual label={p.title} image={p.imageUrl} />
              </div>

              {/* Description: approximately 35% width */}
              <div className="flex min-w-0 flex-col">
                <h3 className="font-display text-2xl font-bold sm:text-3xl">
                  {p.title}
                </h3>

                <p className="mt-3 leading-relaxed text-muted">{p.summary}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <li key={t}>
                      <Badge>{t}</Badge>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 list-disc space-y-1.5 pl-5 text-muted">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  {p.caseStudy && (
                    <a
                      href={`#/projects/${p.slug}`}
                      className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-5 font-medium text-bg hover:opacity-90"
                    >
                      Read case study
                      <ArrowUpRight size={16} aria-hidden />
                    </a>
                  )}

                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-11 items-center gap-2 rounded-md border border-line px-5 font-medium hover:border-accent"
                    >
                      <GithubIcon /> GitHub
                    </a>
                  )}

                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-11 items-center gap-2 rounded-md border border-line px-5 font-medium hover:border-accent"
                    >
                      Live demo
                      <ArrowUpRight size={16} aria-hidden />
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
        <Reveal>
          <ArchitectureDiagram />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          {others.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <article className="h-full rounded-xl border border-dashed border-line bg-surface p-6">
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-xl font-semibold">
                    {p.title}
                  </h3>
                  {p.placeholder && <PlaceholderTag />}
                </div>
                <p className="mt-2 text-muted">{p.summary}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
