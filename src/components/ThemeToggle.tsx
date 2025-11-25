// src/components/ThemeToggle.tsx
'use client'
import React, { useEffect, useState } from 'react'

/**
 * ThemeToggle (named export)
 * - Persists preference in localStorage ("theme")
 * - Toggles 'dark' class on <html>
 * - Guards window usage for SSR
 * - Renders an invisible placeholder while the initial theme is being determined
 */
export function ThemeToggle(): JSX.Element {
  const [isDark, setIsDark] = useState<boolean | null>(null)

  useEffect(() => {
    try {
      const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null

      if (saved === 'dark') {
        document.documentElement.classList.add('dark')
        setIsDark(true)
      } else if (saved === 'light') {
        document.documentElement.classList.remove('dark')
        setIsDark(false)
      } else {
        // follow system preference if no saved preference
        const prefersDark =
          typeof window !== 'undefined' &&
          window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches

        if (prefersDark) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
        setIsDark(Boolean(prefersDark))
      }
    } catch (e) {
      // localStorage might be unavailable (e.g., strict environments), fall back to light
      setIsDark(false)
    }
  }, [])

  const toggle = (): void => {
    try {
      const next = !Boolean(isDark)
      setIsDark(next)
      if (next) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    } catch (e) {
      // ignore storage errors, just flip state locally
      setIsDark((s) => !s)
    }
  }

  // Avoid hydration mismatch by not rendering the real button until theme is known
  if (isDark === null) {
    return <button aria-hidden className="w-10 h-10 rounded p-2 opacity-0 pointer-events-none" />
  }

  return (
    <button
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="w-10 h-10 rounded flex items-center justify-center border"
    >
      {isDark ? (
        /* sun icon (click => go to light) */
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 3v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 19v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.2 4.2l1.4 1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18.4 18.4l1.4 1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.2 19.8l1.4-1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18.4 5.6l1.4-1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ) : (
        /* moon icon (click => go to dark) */
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  )
}
