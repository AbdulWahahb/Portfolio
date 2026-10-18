import {
  Database,
  Layout,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Badge } from "../ui/Badge";
import { skillGroups } from "../../data/skills";
import type { SkillIcon } from "../../types";

const icons: Record<SkillIcon, LucideIcon> = {
  frontend: Layout,
  backend: Server,
  database: Database,
  tools: Wrench,
};

export function Skills() {
  return (
    <Section
      id="skills"
      title="Technical skills"
      intro="The tools I use day to day. Real applications are the better proof, so see the projects below."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((g, i) => {
          const Icon = icons[g.icon];
          return (
            <Reveal key={g.title} delay={i * 0.05}>
              <article className="h-full rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent">
                <Icon className="text-accent" size={26} aria-hidden />
                <h3 className="mt-4 font-display text-xl font-semibold">
                  {g.title}
                </h3>
                <p className="mt-1 text-muted">{g.blurb}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <li key={it}>
                      <Badge>{it}</Badge>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
