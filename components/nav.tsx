'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import type { Dict } from '@/lib/i18n'
import { LOCALES } from '@/lib/i18n'

type NavDict = Dict['nav']

const LANG_LABELS: Record<string, string> = {
  en: 'EN',
  'pt-br': 'PT',
  es: 'ES',
}

export default function Nav({ dict, lang }: { dict: NavDict; lang: string }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Build path for switching locales: replace current lang prefix
  function switchPath(newLang: string) {
    const withoutLang = pathname.replace(/^\/(en|pt-br|es)/, '') || '/'
    return `/${newLang}${withoutLang === '/' ? '' : withoutLang}`
  }

  const NAV_LINKS = [
    { label: dict.docs, href: `/${lang}/docs` },
    { label: dict.apis, href: `#apis` },
    { label: dict.pricing, href: `#pricing` },
    { label: dict.coverage, href: `/${lang}/coverage` },
  ]

  const LangSwitcher = () => (
    <div style={{ display: 'flex', gap: 2 }}>
      {LOCALES.map((loc) => (
        <a
          key={loc}
          href={switchPath(loc)}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.06em',
            padding: '4px 8px',
            borderRadius: 5,
            textDecoration: 'none',
            color: loc === lang ? 'var(--blue-300)' : 'var(--ink-faint)',
            background: loc === lang ? 'rgba(108, 140, 255, 0.1)' : 'transparent',
            border: `1px solid ${loc === lang ? 'rgba(108, 140, 255, 0.2)' : 'transparent'}`,
            transition: 'all 0.15s',
          }}
        >
          {LANG_LABELS[loc]}
        </a>
      ))}
    </div>
  )

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(10, 10, 11, 0.90)' : 'rgba(10, 10, 11, 0.60)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        transition: 'all 0.2s ease',
      }}
    >
      <div className="container" style={{ height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand lockup */}
        <a
          href={`/${lang}`}
          aria-label="Telnext"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}
        >
          <svg width="36" height="36" viewBox="0 0 240 240" aria-hidden="true">
            <g fill="none" stroke="var(--blue-500)" strokeWidth="22" strokeLinecap="round" strokeLinejoin="round">
              <path d="M 48 60 L 120 60 L 120 196" />
              <path d="M 120 60 L 192 60" />
            </g>
            <g fill="var(--bg)" stroke="var(--blue-500)" strokeWidth="12">
              <circle cx="48" cy="60" r="18" />
              <circle cx="192" cy="60" r="18" />
              <circle cx="120" cy="196" r="18" />
            </g>
          </svg>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '28px', letterSpacing: '-0.04em', color: 'var(--ink)' }}>
            telnext<span style={{ color: 'var(--blue-500)' }}>.dev</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 24 }}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <LangSwitcher />
          <a href="#waitlist" className="btn btn-primary" style={{ padding: '8px 18px' }}>
            {dict.cta}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink)', padding: 4 }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {menuOpen ? (
              <>
                <path d="M4 4L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            ) : (
              <>
                <path d="M3 5H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 10H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="flex md:hidden flex-col"
          style={{ background: 'var(--bg-elev-1)', borderTop: '1px solid var(--border-subtle)', padding: '16px 24px 24px', gap: 0 }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
              style={{ padding: '12px 0', borderBottom: '1px solid var(--border-subtle)' }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ padding: '16px 0', borderBottom: '1px solid var(--border-subtle)' }}>
            <LangSwitcher />
          </div>
          <a
            href="#waitlist"
            className="btn btn-primary"
            style={{ marginTop: 16, width: '100%' }}
            onClick={() => setMenuOpen(false)}
          >
            {dict.cta}
          </a>
        </div>
      )}
    </nav>
  )
}
