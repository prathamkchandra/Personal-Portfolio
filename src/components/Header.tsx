// src/components/Header.tsx
import Link from 'next/link'
import { useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white/70 dark:bg-slate-900/50 backdrop-blur z-30">
      <nav className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* New Next.js Link API: no <a> child */}
        <Link href="#home" className="font-medium">
          Pratham K
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="/resume.pdf" download className="px-3 py-1 border rounded">Resume</a>
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="menu">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="stroke-slate-900 dark:stroke-slate-100"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t">
          <div className="flex flex-col px-6 py-4 gap-3">
            <a href="#home" onClick={() => setOpen(false)}>Home</a>
            <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            <a href="/resume.pdf" download className="inline-block mt-2">Download Resume</a>
          </div>
        </div>
      )}
    </header>
  )
}
