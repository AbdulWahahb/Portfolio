import type { SkillGroup } from "../types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Engineering",
    icon: "frontend",
    blurb: "Building scalable, responsive, and maintainable web applications.",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Responsive Web Design",
    ],
  },
  {
    title: "UI & Component Design",
    icon: "frontend",
    blurb:
      "Creating modern interfaces and reusable component systems for complex business applications.",
    items: [
      "Tailwind CSS",
      "Sass / SCSS",
      "shadcn/ui",
      "Reusable Components",
      "UI Architecture",
      "Interactive Dashboards",
    ],
  },
  {
    title: "Forms & State Management",
    icon: "frontend",
    blurb:
      "Managing complex forms, application state, validation, and data-driven user interactions.",
    items: [
      "React Hook Form",
      "Zod",
      "Redux",
      "Form Validation",
      "Dynamic Forms",
      "Data Tables",
    ],
  },
  {
    title: "Backend & API Integration",
    icon: "backend",
    blurb:
      "Connecting frontend applications to backend services and implementing business workflows.",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "API Integration",
      "Async / Await",
      "Error Handling",
    ],
  },
  {
    title: "Databases & Business Logic",
    icon: "database",
    blurb:
      "Working with relational databases and business logic for accounting and management systems.",
    items: [
      "MySQL",
      "SQL Queries",
      "Relational Data Modeling",
      "Double-Entry Accounting",
      "Inventory Workflows",
      "Payment & Billing Logic",
    ],
  },
  {
    title: "Development & Testing",
    icon: "tools",
    blurb:
      "Using practical development tools, testing workflows, and collaborative engineering practices.",
    items: [
      "Git",
      "GitHub",
      "Linux",
      "Neovim",
      "Vite",
      "npm",
      "Jest",
      "Pull Request Reviews",
      "Code Review",
      "Team Collaboration",
    ],
  },
];
