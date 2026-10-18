export interface Profile {
  name: string;
  initials: string;
  title: string;
  location: string;
  paidSince: number;
  companyCount: number;
  english: string;
  email: string;
  github: string;
  linkedin: string | null;
  resumeUrl: string | null;
}
export type SkillIcon = "frontend" | "backend" | "database" | "tools";
export interface SkillGroup {
  title: string;
  icon: SkillIcon;
  blurb: string;
  items: string[];
}
export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  summary: string;
  technologies: string[];
  achievements: string[];
  placeholder: boolean;
}
export interface CaseStudy {
  problem: string;
  solution: string;
  responsibilities: string[];
  architecture: { layer: string; detail: string }[];
  challenges: { challenge: string; solution: string }[];
}
export interface Project {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  features: string[];
  github: string | null;
  demo: string | null;
  featured: boolean;
  placeholder: boolean;
  imageUrl: string;
  caseStudy?: CaseStudy;
}
