import { useRef } from "react";
import { motion, useScroll, useReducedMotion } from "motion/react";

import {
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Badge, PlaceholderTag } from "../ui/Badge";
import { experience } from "../../data/experience";

export function Experience() {
  const timelineRef = useRef<HTMLOListElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 65%"],
  });

  return (
    <Section
      id="experience"
      title="Professional Experience"
      intro="My journey building real-world software, collaborating with development teams, and growing from a Frontend Developer to a Frontend Team Lead."
    >
      <div className="relative">
        {/* Section introduction */}
        <Reveal>
          <div
            className="
              mb-10 flex flex-wrap
              items-center justify-between
              gap-4
            "
          >
            <div>
              <div
                className="
                  mb-3 inline-flex
                  items-center gap-2
                  rounded-full
                  border border-accent/30
                  bg-accent/10
                  px-4 py-2
                  text-xs font-semibold
                  text-accent
                "
              >
                <BriefcaseBusiness size={15} aria-hidden="true" />
                CAREER JOURNEY
              </div>

              <p
                className="
                  max-w-2xl text-sm
                  leading-relaxed text-muted
                  sm:text-base
                "
              >
                Professional software development experience since 2023,
                spanning inventory management, healthcare platforms, and
                financial systems.
              </p>
            </div>

            <div
              className="
                rounded-xl border border-line
                bg-surface px-5 py-3
              "
            >
              <p
                className="
                  text-xs uppercase
                  tracking-wider text-muted
                "
              >
                Companies
              </p>

              <p
                className="
                  mt-1 font-display
                  text-2xl font-bold text-accent
                "
              >
                {experience.length.toString().padStart(2, "0")}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Career timeline */}
        <ol
          ref={timelineRef}
          className="
            relative ml-4
            space-y-8
            border-l border-line
            pl-8
            sm:ml-5 sm:pl-10
          "
        >
          {/* Scroll progress line */}
          <motion.span
            aria-hidden="true"
            style={{
              scaleY: reduceMotion ? 1 : scrollYProgress,
            }}
            className="
              pointer-events-none
              absolute -left-px
              top-0 bottom-0
              w-[2px]
              origin-top bg-accent
            "
          />

          {experience.map((item, index) => {
            const isLatest = index === 0;

            return (
              <li key={`${item.company}-${item.period}`} className="relative">
                {/* Timeline indicator */}
                <span
                  aria-hidden="true"
                  className={`
                    absolute
                    -left-[41px] sm:-left-[49px]
                    top-6
                    z-10
                    flex h-[18px] w-[18px]
                    items-center justify-center
                    rounded-full border-2
                    ${
                      isLatest ? "border-accent bg-accent" : "border-line bg-bg"
                    }
                  `}
                >
                  <span
                    className={`
                      h-1.5 w-1.5
                      rounded-full
                      ${isLatest ? "bg-bg" : "bg-accent"}
                    `}
                  />
                </span>

                <Reveal delay={index * 0.08}>
                  <article
                    className={`
                      group relative
                      overflow-hidden
                      rounded-2xl
                      border
                      p-5 sm:p-7
                      transition-all
                      duration-300
                      motion-safe:hover:-translate-y-0.5
                      ${
                        isLatest
                          ? "border-accent/40 bg-surface"
                          : "border-line bg-surface hover:border-accent/50"
                      }
                    `}
                  >
                    {/* Accent glow for latest role */}
                    {isLatest && (
                      <div
                        aria-hidden="true"
                        className="
                          pointer-events-none
                          absolute -right-24 -top-24
                          h-64 w-64
                          rounded-full
                          bg-accent/10 blur-3xl
                        "
                      />
                    )}

                    <div className="relative">
                      {/* Top metadata */}
                      <div
                        className="
                          mb-5 flex flex-wrap
                          items-center justify-between
                          gap-3
                        "
                      >
                        <span
                          className="
                            text-xs font-semibold
                            uppercase
                            tracking-[0.16em]
                            text-accent
                          "
                        >
                          Experience {String(index + 1).padStart(2, "0")}
                        </span>

                        {isLatest && !item.placeholder && (
                          <span
                            className="
                              inline-flex items-center
                              gap-1.5
                              rounded-full
                              border border-accent/30
                              bg-accent/10
                              px-3 py-1.5
                              text-xs font-medium
                              text-accent
                            "
                          >
                            <Sparkles size={13} aria-hidden="true" />
                            Most Recent Role
                          </span>
                        )}
                      </div>

                      {/* Role and company */}
                      <div
                        className="
                          flex flex-wrap
                          items-start justify-between
                          gap-4
                        "
                      >
                        <div className="min-w-0 flex-1">
                          <div
                            className="
                              flex flex-wrap
                              items-center gap-3
                            "
                          >
                            <h3
                              className="
                                font-display
                                text-xl font-bold
                                tracking-tight
                                sm:text-2xl
                              "
                            >
                              {item.role}
                            </h3>

                            {item.placeholder && <PlaceholderTag />}
                          </div>

                          <div
                            className="
                              mt-3 flex items-center
                              gap-2 text-accent
                            "
                          >
                            <BriefcaseBusiness size={17} aria-hidden="true" />

                            <span className="font-semibold">
                              {item.company}
                            </span>
                          </div>
                        </div>

                        {/* Date badge */}
                        <div
                          className="
                            inline-flex items-center
                            gap-2 rounded-lg
                            border border-line
                            bg-bg px-3 py-2
                            text-sm text-muted
                          "
                        >
                          <CalendarDays size={15} aria-hidden="true" />

                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Summary */}
                      <p
                        className="
                          mt-6 max-w-3xl
                          text-sm leading-7
                          text-muted sm:text-base
                        "
                      >
                        {item.summary}
                      </p>

                      {/* Achievements */}
                      {item.achievements.length > 0 && (
                        <div className="mt-7">
                          <h4
                            className="
                              mb-4 flex items-center
                              gap-2 text-sm
                              font-semibold
                            "
                          >
                            <ArrowUpRight
                              size={17}
                              className="text-accent"
                              aria-hidden="true"
                            />
                            Key Contributions
                          </h4>

                          <ul className="grid gap-3">
                            {item.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="
                                    flex items-start
                                    gap-3 text-sm
                                    leading-relaxed
                                    text-muted
                                  "
                              >
                                <CheckCircle2
                                  size={17}
                                  className="
                                      mt-0.5
                                      shrink-0
                                      text-accent
                                    "
                                  aria-hidden="true"
                                />

                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      {item.technologies.length > 0 && (
                        <div
                          className="
                            mt-7 border-t
                            border-line pt-5
                          "
                        >
                          <p
                            className="
                              mb-3 text-xs
                              font-semibold uppercase
                              tracking-wider
                              text-muted
                            "
                          >
                            Technologies & Tools
                          </p>

                          <ul
                            className="
                              flex flex-wrap
                              gap-2
                            "
                            aria-label={`Technologies used at ${item.company}`}
                          >
                            {item.technologies.map((tech) => (
                              <li key={tech}>
                                <Badge>{tech}</Badge>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>

        {/* Closing message */}
        <Reveal>
          <div
            className="
              relative mt-10
              overflow-hidden
              rounded-2xl
              border border-accent/20
              bg-accent/5
              p-6 sm:p-8
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute -right-20 -bottom-20
                h-48 w-48
                rounded-full
                bg-accent/10 blur-3xl
              "
            />

            <div className="relative">
              <p
                className="
                  text-xs font-semibold
                  uppercase tracking-widest
                  text-accent
                "
              >
                Career Direction
              </p>

              <h3
                className="
                  mt-3 font-display
                  text-xl font-semibold
                  sm:text-2xl
                "
              >
                Building Better Software, Growing With Every Project.
              </h3>

              <p
                className="
                  mt-3 max-w-3xl
                  leading-relaxed text-muted
                "
              >
                From frontend development to team leadership, my focus has been
                on solving real business problems, building maintainable
                applications, and collaborating with developers to deliver
                better software.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
