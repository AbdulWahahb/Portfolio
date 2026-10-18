import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import {
  Code2,
  Palette,
  Layers3,
  Server,
  Database,
  Wrench,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { skillGroups } from "../../data/skills";

// Match icons with skill group identifiers
const groupIcons: Record<string, LucideIcon> = {
  frontend: Code2,
  design: Palette,
  state: Layers3,
  backend: Server,
  database: Database,
  tools: Wrench,
};

export function Ecosystem() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  const reduceMotion = useReducedMotion();

  // Support both hover and touch/click interactions
  const active = hovered ?? selected;

  return (
    <Section
      id="ecosystem"
      title="Technology Ecosystem"
      intro="The technologies and engineering practices I use to develop modern web applications, build business workflows, and collaborate with development teams."
    >
      <Reveal>
        <div className="relative">
          {/* Section introduction */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Technical Expertise
              </p>

              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                From responsive React interfaces to backend integration,
                relational databases, and collaborative development workflows.
              </p>
            </div>

            <div className="rounded-full border border-line bg-surface px-4 py-2 text-xs font-medium text-muted">
              {skillGroups?.length} Skill Categories
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups?.map((group) => {
              const Icon = groupIcons[group.icon] ?? Code2;

              const isActive = active === group.title;

              const isDimmed = active !== null && !isActive;

              return (
                <motion.div
                  key={group.title}
                  onMouseEnter={() => setHovered(group.title)}
                  onMouseLeave={() => setHovered(null)}
                  animate={{
                    opacity: isDimmed ? 0.7 : 1,
                    scale: isActive ? 1.012 : 1,
                  }}
                  whileHover={reduceMotion ? undefined : { y: -5 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.25,
                    ease: "easeOut",
                  }}
                  className={`
                    group relative flex h-full
                    min-w-0 flex-col
                    overflow-hidden rounded-2xl
                    border bg-surface
                    p-5 sm:p-6
                    transition-colors duration-300
                    ${
                      isActive
                        ? "border-accent"
                        : "border-line hover:border-accent/50"
                    }
                  `}
                >
                  {/* Decorative background glow */}
                  <div
                    aria-hidden="true"
                    className={`
                      pointer-events-none
                      absolute -right-16 -top-16
                      h-44 w-44 rounded-full
                      bg-accent/10 blur-3xl
                      transition-opacity duration-500
                      ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }
                    `}
                  />

                  {/* Card Header */}
                  <div className="relative flex items-start justify-between gap-3">
                    <div
                      className={`
                        flex h-12 w-12 shrink-0
                        items-center justify-center
                        rounded-xl border
                        transition-all duration-300
                        ${
                          isActive
                            ? "border-accent/40 bg-accent/15 text-accent"
                            : "border-line bg-bg text-muted group-hover:border-accent/30 group-hover:text-accent"
                        }
                      `}
                    >
                      <Icon size={23} aria-hidden />
                    </div>

                    <button
                      type="button"
                      aria-label={`Highlight ${group.title}`}
                      aria-pressed={selected === group.title}
                      onFocus={() => setHovered(group.title)}
                      onBlur={() => setHovered(null)}
                      onClick={() =>
                        setSelected((current) =>
                          current === group.title ? null : group.title,
                        )
                      }
                      className="
                        rounded-lg p-2
                        text-muted
                        transition-colors duration-300
                        hover:bg-accent/10
                        hover:text-accent
                        focus-visible:outline-2
                        focus-visible:outline-accent
                      "
                    >
                      <ArrowUpRight
                        size={19}
                        aria-hidden
                        className={`
                          transition-transform duration-300
                          ${
                            isActive
                              ? "rotate-45 text-accent"
                              : "group-hover:rotate-45"
                          }
                        `}
                      />
                    </button>
                  </div>

                  {/* Category title */}
                  <div className="relative mt-5">
                    <h3 className="font-display text-xl font-semibold tracking-tight">
                      {group.title}
                    </h3>

                    <p className="mt-3 min-h-[72px] text-sm leading-relaxed text-muted">
                      {group.blurb}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="relative my-5 h-px w-full overflow-hidden bg-line">
                    <motion.div
                      initial={false}
                      animate={{
                        scaleX: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.35,
                      }}
                      className="
                        absolute inset-0
                        origin-left bg-accent
                      "
                    />
                  </div>

                  {/* Skills badges */}
                  <ul
                    className="relative flex flex-wrap gap-2"
                    aria-label={`${group.title} skills`}
                  >
                    {group.items.map((skill) => (
                      <li key={skill}>
                        <span
                          className="
                            inline-flex items-center
                            rounded-lg border border-line
                            bg-bg px-3 py-1.5
                            text-xs font-medium
                            text-muted
                            transition-all duration-300
                            group-hover:border-accent/30
                          "
                        >
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom */}
                  <div className="relative mt-auto pt-6">
                    <div className="flex items-center justify-between border-t border-line pt-4">
                      <span className="text-xs font-medium text-muted">
                        {group.items.length} Skills & Practices
                      </span>

                      <span
                        aria-hidden="true"
                        className={`
                          h-1.5 w-1.5 rounded-full
                          transition-colors duration-300
                          ${isActive ? "bg-accent" : "bg-line"}
                        `}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom highlight */}
          <div className="mt-8 rounded-2xl border border-accent/20 bg-accent/5 p-6 sm:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  My Core Stack
                </p>

                <h3 className="mt-2 font-display text-xl font-semibold sm:text-2xl">
                  React + TypeScript + Node.js + MySQL
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  My primary technology stack for building data-driven
                  applications, complex management systems, and modern business
                  software.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "Frontend Architecture",
                  "API Integration",
                  "Business Logic",
                ].map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full
                      border border-accent/20
                      bg-bg px-3 py-2
                      text-xs font-medium
                      text-muted
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
