import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FileText, Menu, Moon, Sun, X } from 'lucide-react'
import { profile } from '../../data/profile'
import { useActiveSection } from '../../hooks/useActiveSection'
import type { Theme } from '../../hooks/useTheme'

const links = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact']
const target = (l: string) => `#${l.toLowerCase()}`
const ids = ['home', 'about', 'skills', 'experience', 'projects', 'contact']
const linkCls = 'relative rounded-md px-3 py-2 text-[15px] text-muted transition-colors hover:text-ink'

export function Navbar({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const iconBtn = 'grid h-11 w-11 place-items-center rounded-md border border-line text-ink transition-colors hover:border-accent'

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="grid h-10 w-10 place-items-center rounded-lg bg-accent font-display text-base font-bold text-bg" aria-label={`${profile.name}, home`}>
          {profile.initials}
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => <li key={l}><a href={target(l)} aria-current={active === l.toLowerCase() ? 'true' : undefined} className={`${linkCls} ${active === l.toLowerCase() ? '!text-ink' : ''}`}>{l}<span aria-hidden className={`absolute inset-x-3 bottom-1 h-px origin-left bg-accent transition-transform duration-300 ${active === l.toLowerCase() ? 'scale-x-100' : 'scale-x-0'}`} /></a></li>)}
        </ul>
        <div className="flex items-center gap-2">
          {profile.resumeUrl && (
            <a href={profile.resumeUrl} download className="hidden h-11 items-center gap-2 rounded-md border border-line px-4 text-[15px] font-medium hover:border-accent sm:inline-flex">
              <FileText size={16} aria-hidden /> Resume
            </a>
          )}
          <button type="button" onClick={onToggle} className={iconBtn} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button type="button" onClick={() => setOpen((o) => !o)} className={`${iconBtn} lg:hidden`} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" className="overflow-hidden border-t border-line bg-bg lg:hidden"
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
            <ul className="flex flex-col px-5 py-3">
              {links.map((l) => (
                <li key={l}><a href={target(l)} onClick={() => setOpen(false)} className="block rounded-md px-3 py-3.5 text-lg hover:bg-surface">{l}</a></li>
              ))}
              {profile.resumeUrl && <li><a href={profile.resumeUrl} download className="block rounded-md px-3 py-3.5 text-lg hover:bg-surface">Resume</a></li>}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
