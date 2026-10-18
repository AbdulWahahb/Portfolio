import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { engineeringPrinciples, profile } from "../../data/profile";

const details: [string, string][] = [
  ["Location", profile.location],
  ["Paid development since", String(profile.paidSince)],
  ["Software companies", String(profile.companyCount)],
  ["English", `${profile.english} (Advanced)`],
  ["Looking for", "Remote frontend and full-stack roles"],
];

export function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          <p>
            I've been developing software professionally since{" "}
            {profile.paidSince} and have worked at {profile.companyCount}{" "}
            software companies. My work has centered on business management
            systems, accounting applications and administration dashboards.
          </p>
          <p>
            Most of my day-to-day is React and TypeScript: complex forms, tables
            of real data, and integrations with REST APIs backed by Node.js and
            MySQL. I like turning messy business workflows into interfaces
            people can use without training.
          </p>
          <p>
            I care about clean architecture and code that the next developer can
            read. I'm looking to join international engineering teams, where I
            can learn from other engineers and contribute to products over the
            long term.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="space-y-6">
          <dl className="divide-y divide-line rounded-xl border border-line bg-surface">
            {details.map(([t, d]) => (
              <div
                key={t}
                className="flex flex-col gap-0.5 px-5 py-3.5 sm:flex-row sm:justify-between"
              >
                <dt className="text-muted">{t}</dt>
                <dd className="font-medium sm:text-right">{d}</dd>
              </div>
            ))}
          </dl>
          <div>
            <h3 className="font-display text-xl font-semibold">
              Engineering principles
            </h3>
            <ul className="mt-3 space-y-2 text-muted">
              {engineeringPrinciples.map((p) => (
                <li key={p} className="border-l-2 border-accent pl-3">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
