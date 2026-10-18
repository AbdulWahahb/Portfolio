import { useEffect } from "react";
import { MotionConfig } from "motion/react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Workflow } from "./components/sections/Workflow";
import { Ecosystem } from "./components/sections/Ecosystem";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { Contact } from "./components/sections/Contact";
import { CaseStudy } from "./components/sections/CaseStudy";
import { useTheme } from "./hooks/useTheme";
import { useHash } from "./hooks/useHash";
import { projects } from "./data/projects";
import { profile } from "./data/profile";

const HOME_TITLE = document.title;

export default function App() {
  const { theme, toggle } = useTheme();
  const hash = useHash();
  const slug = hash.startsWith("#/projects/")
    ? hash.slice("#/projects/".length)
    : null;
  const project = slug
    ? projects.find((p) => p.slug === slug && p.caseStudy)
    : undefined;

  useEffect(() => {
    if (project) {
      window.scrollTo(0, 0);
      document.title = `${project.title} — ${profile.name}`;
      return;
    }
    document.title = HOME_TITLE;
    if (hash.length > 1 && !hash.startsWith("#/")) {
      requestAnimationFrame(() =>
        document.getElementById(hash.slice(1))?.scrollIntoView(),
      );
    }
  }, [hash, project]);

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar theme={theme} onToggle={toggle} />
      {project ? (
        <div id="main">
          <CaseStudy project={project} />
        </div>
      ) : (
        <main id="main">
          <Hero />
          <About />
          <Skills />
          <Ecosystem />
          <Experience />
          <Projects />
          <Workflow />
          <Contact />
        </main>
      )}
      <Footer />
    </MotionConfig>
  );
}
