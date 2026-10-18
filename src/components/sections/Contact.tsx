import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MapPin,
  Globe2,
  FileText,
  BriefcaseBusiness,
} from "lucide-react";

import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { profile } from "../../data/profile";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const copyEmail = async () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    try {
      await navigator.clipboard.writeText(profile.email);

      setCopied(true);
      setCopyError(false);
    } catch {
      setCopied(false);
      setCopyError(true);
    }

    timeoutRef.current = setTimeout(() => {
      setCopied(false);
      setCopyError(false);
    }, 2000);
  };

  const contactCardClass = `
    group flex items-center justify-between gap-4
    rounded-xl border border-line
    bg-bg p-4 sm:p-5
    transition-all duration-300
    hover:border-accent/60
    hover:bg-accent/5
    motion-safe:hover:-translate-y-0.5
    focus-visible:outline-2
    focus-visible:outline-offset-2
    focus-visible:outline-accent
  `;

  return (
    <Section
      id="contact"
      title="Let's Work Together"
      intro="Interested in working together? I'm open to international remote frontend and full-stack JavaScript opportunities."
    >
      <Reveal>
        <div
          className="
            relative overflow-hidden
            rounded-3xl border border-line
            bg-surface p-6
            sm:p-10 lg:p-12
          "
        >
          {/* Decorative gradient */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute -right-32 -top-32
              h-80 w-80 rounded-full
              bg-accent/10 blur-3xl
            "
          />

          <div
            className="
              relative grid items-start gap-12
              lg:grid-cols-[1.1fr_1fr]
              lg:gap-16
            "
          >
            {/* LEFT SIDE */}
            <div className="flex flex-col items-start">
              {/* Availability */}
              <div
                className="
                  inline-flex items-center gap-2
                  rounded-full border border-accent/30
                  bg-accent/10 px-4 py-2
                  text-xs font-semibold text-accent
                "
              >
                <span
                  className="
                    relative flex h-2.5 w-2.5
                  "
                  aria-hidden="true"
                >
                  <span
                    className="
                      absolute inline-flex h-full w-full
                      animate-ping rounded-full
                      bg-accent opacity-30
                      motion-reduce:animate-none
                    "
                  />
                  <span
                    className="
                      relative inline-flex h-2.5 w-2.5
                      rounded-full bg-accent
                    "
                  />
                </span>
                Open to Remote Opportunities
              </div>

              {/* Headline */}
              <h3
                className="
                  mt-7 max-w-xl
                  font-display
                  text-3xl font-bold tracking-tight
                  sm:text-4xl lg:text-5xl
                "
              >
                Have an opportunity?
                <span className="mt-2 block text-accent">Let's connect.</span>
              </h3>

              {/* Introduction */}
              <p
                className="
                  mt-6 max-w-lg
                  text-base leading-relaxed
                  text-muted sm:text-lg
                "
              >
                I'm a frontend developer with professional experience since
                2023, specializing in React, TypeScript, and modern web
                applications.
              </p>

              <p
                className="
                  mt-4 max-w-lg
                  leading-relaxed text-muted
                "
              >
                I enjoy solving complex business problems, building maintainable
                interfaces, and collaborating with development teams. I'm
                interested in contributing to ambitious products with
                international engineering teams.
              </p>

              {/* Primary CTA */}
              <a
                href={`mailto:${profile.email}`}
                className="
                  group mt-8 inline-flex
                  min-h-12 items-center justify-center
                  gap-3 rounded-xl
                  bg-accent px-6 py-3
                  font-semibold text-bg
                  transition-all duration-300
                  hover:opacity-90
                  motion-safe:hover:-translate-y-0.5
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-accent
                "
              >
                <Mail size={19} aria-hidden />
                Get In Touch
                <ArrowUpRight
                  size={18}
                  aria-hidden
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </a>

              {/* Professional information */}
              <div
                className="
                  mt-10 flex flex-wrap gap-x-6
                  gap-y-4 border-t border-line
                  pt-6
                "
              >
                <div className="flex items-center gap-2 text-sm text-muted">
                  <MapPin size={17} className="text-accent" aria-hidden />
                  {profile.location}
                </div>

                <div className="flex items-center gap-2 text-sm text-muted">
                  <Globe2 size={17} className="text-accent" aria-hidden />
                  Remote / International
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-5">
              <div className="mb-6">
                <div className="mb-2 flex items-center gap-2">
                  <BriefcaseBusiness
                    size={18}
                    className="text-accent"
                    aria-hidden
                  />

                  <h4
                    className="
                      font-display text-xl
                      font-semibold
                    "
                  >
                    Contact & Profiles
                  </h4>
                </div>

                <p className="text-sm leading-relaxed text-muted">
                  Reach out about remote positions, engineering collaborations,
                  or professional opportunities.
                </p>
              </div>

              {/* Email */}
              <div
                className="
                  rounded-xl border border-line
                  bg-bg p-4 sm:p-5
                "
              >
                <div className="flex items-start gap-3">
                  <div
                    className="
                      rounded-lg bg-accent/10
                      p-2.5 text-accent
                    "
                  >
                    <Mail size={20} aria-hidden />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className="
                        text-xs font-medium
                        uppercase tracking-wider
                        text-muted
                      "
                    >
                      Email Address
                    </p>

                    <a
                      href={`mailto:${profile.email}`}
                      className="
                        mt-1 block break-all
                        font-medium
                        hover:text-accent
                        focus-visible:outline-2
                        focus-visible:outline-accent
                      "
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="
                    mt-4 inline-flex
                    min-h-10 items-center gap-2
                    rounded-lg border border-line
                    px-4 text-sm font-medium
                    transition-colors
                    hover:border-accent
                    hover:text-accent
                    focus-visible:outline-2
                    focus-visible:outline-accent
                  "
                >
                  {copied ? (
                    <Check size={16} className="text-accent" aria-hidden />
                  ) : (
                    <Copy size={16} aria-hidden />
                  )}

                  {copied
                    ? "Email Copied!"
                    : copyError
                      ? "Copy unavailable"
                      : "Copy Email"}
                </button>

                <span className="sr-only" role="status" aria-live="polite">
                  {copied
                    ? "Email address copied to clipboard"
                    : copyError
                      ? "Could not copy email address"
                      : ""}
                </span>
              </div>

              {/* GitHub */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className={contactCardClass}
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span
                    className="
                      rounded-lg bg-accent/10
                      p-2.5 text-accent
                    "
                  >
                    <GithubIcon />
                  </span>

                  <div className="min-w-0">
                    <p className="font-semibold">GitHub</p>

                    <p
                      className="
                        mt-0.5 break-all
                        text-sm text-muted
                      "
                    >
                      {profile.github.replace(/^https?:\/\//, "")}
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={19}
                  className="
                    shrink-0 text-muted
                    transition-colors
                    group-hover:text-accent
                  "
                  aria-hidden
                />
              </a>

              {/* LinkedIn */}
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactCardClass}
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span
                      className="
                        rounded-lg bg-accent/10
                        p-2.5 text-accent
                      "
                    >
                      <LinkedinIcon />
                    </span>

                    <div>
                      <p className="font-semibold">LinkedIn</p>

                      <p className="mt-0.5 text-sm text-muted">
                        Professional Network
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="
                      shrink-0 text-muted
                      transition-colors
                      group-hover:text-accent
                    "
                    aria-hidden
                  />
                </a>
              )}

              {/* Resume */}
              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactCardClass}
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span
                      className="
                        rounded-lg bg-accent/10
                        p-2.5 text-accent
                      "
                    >
                      <FileText size={20} aria-hidden />
                    </span>

                    <div>
                      <p className="font-semibold">View My Resume</p>

                      <p className="mt-0.5 text-sm text-muted">
                        Professional Experience & Skills
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="
                      shrink-0 text-muted
                      transition-colors
                      group-hover:text-accent
                    "
                    aria-hidden
                  />
                </a>
              )}
            </div>
          </div>

          {/* Bottom message */}
          <div
            className="
              relative mt-12 border-t
              border-line pt-6
            "
          >
            <p
              className="
                text-center text-sm
                leading-relaxed text-muted
              "
            >
              Interested in building reliable, user-focused software together?
              I'm always happy to discuss meaningful engineering opportunities.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
