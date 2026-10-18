import type { Profile } from "../types";

export const profile: Profile = {
  name: "AbdulWahab Rahimi",
  initials: "AW",
  title: "Frontend Developer / Full-Stack JavaScript Developer",
  location: "Herat, Afghanistan",
  paidSince: 2023,
  companyCount: 3,
  english: "C1",
  // TODO: replace with your real email address
  email: "nanok6805@gmail.com",
  github: "https://github.com/AbdulWahahb",
  // TODO: add your LinkedIn URL, e.g. 'https://www.linkedin.com/in/your-handle'. Leave null to hide.
  linkedin: "https://www.linkedin.com/in/abdulwahab-rahimi-3857a6265",
  // TODO: put your CV in /public/resume.pdf and set to '/resume.pdf'. Leave null to hide the button.
  resumeUrl: null,
};

export const engineeringPrinciples = [
  "Reusable components over copy-paste",
  "Readable code that teammates can maintain",
  "Interfaces that work on every screen size",
  "APIs designed around real workflows",
];
