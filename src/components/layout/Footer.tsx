import { ArrowUp } from 'lucide-react'
import { profile } from '../../data/profile'
import { GithubIcon, LinkedinIcon } from '../ui/Icons'

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 sm:flex-row sm:items-center sm:px-8">
        <div>
          <p className="font-display text-lg font-bold">{profile.name}</p>
          <p className="text-sm text-muted">© {new Date().getFullYear()} {profile.name}. Built with React, TypeScript and Tailwind CSS.</p>
        </div>
        <div className="flex items-center gap-2">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="grid h-11 w-11 place-items-center rounded-md border border-line hover:border-accent"><GithubIcon /></a>
          {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="grid h-11 w-11 place-items-center rounded-md border border-line hover:border-accent"><LinkedinIcon /></a>}
          <a href="#home" className="ml-2 inline-flex h-11 items-center gap-2 rounded-md border border-line px-4 text-sm font-medium hover:border-accent">
            <ArrowUp size={16} aria-hidden /> Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
