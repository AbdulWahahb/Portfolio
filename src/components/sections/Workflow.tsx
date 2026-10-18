import { useRef } from "react";
import { motion, useScroll, useReducedMotion } from "motion/react";

import {
  Search,
  Network,
  Blocks,
  Plug,
  ShieldCheck,
  GitPullRequest,
  Rocket,
  type LucideIcon,
} from "lucide-react";

import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

interface WorkflowStep {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
}

const steps: WorkflowStep[] = [
  {
    title: "Understand Business Requirements",
    description:
      "Analyze business processes, user needs, and application workflows. Translate complex requirements into clear frontend development tasks.",
    icon: Search,
    tags: ["Business Logic", "User Requirements", "Problem Solving"],
  },
  {
    title: "Plan Frontend Architecture",
    description:
      "Organize application structure, component relationships, state management, and API interactions to support maintainable development.",
    icon: Network,
    tags: ["React Architecture", "TypeScript", "State Management"],
  },
  {
    title: "Build Reusable Interfaces",
    description:
      "Develop responsive interfaces, reusable UI components, interactive data tables, and complex forms with reliable validation.",
    icon: Blocks,
    tags: ["React", "Tailwind CSS", "shadcn/ui", "React Hook Form", "Zod"],
  },
  {
    title: "Integrate APIs & Business Data",
    description:
      "Connect frontend interfaces to backend REST APIs, manage asynchronous requests, and handle loading, validation, and error states.",
    icon: Plug,
    tags: ["REST APIs", "Backend Integration", "Data Handling"],
  },
  {
    title: "Test & Validate",
    description:
      "Verify frontend functionality, test important user interactions, investigate edge cases, and improve application reliability.",
    icon: ShieldCheck,
    tags: ["Jest", "Debugging", "Form Validation"],
  },
  {
    title: "Collaborate & Review Code",
    description:
      "Work closely with developers, review Git changes and pull requests, support junior engineers, and solve technical challenges together.",
    icon: GitPullRequest,
    tags: ["Git", "Pull Requests", "Code Review", "Mentorship"],
  },
  {
    title: "Deliver & Continuously Improve",
    description:
      "Refine completed features, resolve reported issues, improve usability, and keep the codebase understandable and maintainable.",
    icon: Rocket,
    tags: ["Code Quality", "Maintainability", "Continuous Improvement"],
  },
];

export function Workflow() {
  const ref = useRef<HTMLOListElement>(null);

  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });

  return (
    <Section
      id="approach"
      title="My Engineering Approach"
      intro="How I approach complex software development, from understanding business requirements to building, reviewing, and improving applications."
    >
      <div className="relative ml-5 sm:ml-6">
        {/* Timeline background */}
        <span
          aria-hidden="true"
          className="
            absolute left-0 top-5 bottom-5
            w-px bg-line
          "
        />

        {/* Animated timeline progress */}
        <motion.span
          aria-hidden="true"
          style={{
            scaleY: reduceMotion ? 1 : scrollYProgress,
          }}
          className="
            absolute left-0 top-5 bottom-5
            w-[2px] origin-top bg-accent
          "
        />

        <ol ref={ref} className="relative space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <li key={step.title} className="relative pl-8 sm:pl-11">
                {/* Timeline icon */}
                <span
                  aria-hidden="true"
                  className="
                    absolute -left-[19px] top-5
                    grid h-10 w-10
                    place-items-center
                    rounded-full
                    border border-accent/40
                    bg-bg text-accent
                    shadow-sm
                  "
                >
                  <Icon size={19} />
                </span>

                <Reveal delay={index * 0.04}>
                  <div
                    className="
                      group relative overflow-hidden
                      rounded-2xl
                      border border-line
                      bg-surface
                      p-5 sm:p-6
                      transition-all duration-300
                      hover:border-accent/60
                      hover:shadow-lg
                      motion-safe:hover:-translate-y-0.5
                    "
                  >
                    {/* Subtle hover background */}
                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute -right-12 -top-12
                        h-40 w-40 rounded-full
                        bg-accent/5 blur-3xl
                        opacity-0
                        transition-opacity duration-300
                        group-hover:opacity-100
                      "
                    />

                    <div className="relative">
                      {/* Step number */}
                      <span
                        className="
                          mb-3 inline-block
                          text-xs font-semibold
                          uppercase tracking-widest
                          text-accent
                        "
                      >
                        Step {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Title */}
                      <h3
                        className="
                          font-display
                          text-lg font-semibold
                          sm:text-xl
                        "
                      >
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="
                          mt-3 max-w-2xl
                          text-sm leading-relaxed
                          text-muted sm:text-base
                        "
                      >
                        {step.description}
                      </p>

                      {/* Technology / skill tags */}
                      <ul
                        className="
                          mt-5 flex flex-wrap
                          gap-2
                        "
                        aria-label={`Skills related to ${step.title}`}
                      >
                        {step.tags.map((tag) => (
                          <li key={tag}>
                            <span
                              className="
                                inline-flex items-center
                                rounded-md
                                border border-line
                                bg-bg px-3 py-1.5
                                text-xs font-medium
                                text-muted
                                transition-colors
                                group-hover:border-accent/30
                              "
                            >
                              {tag}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Closing message */}

      <Reveal>
        <div
          className="
            mt-10 rounded-2xl
            border border-accent/20
            bg-accent/5
            p-6 text-center sm:p-8
          "
        >
          <h3
            className="
              font-display
              text-xl font-semibold
              sm:text-2xl
            "
          >
            Building Software That Solves Real Problems
          </h3>

          <p
            className="
              mx-auto mt-3 max-w-2xl
              leading-relaxed text-muted
            "
          >
            My focus is not only on writing frontend code, but also on
            understanding the business problem, collaborating with developers,
            and creating reliable, maintainable user experiences.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
