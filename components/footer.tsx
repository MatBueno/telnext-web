import type { Dict } from '@/lib/i18n'

export default function Footer({ dict, lang }: { dict: Dict['footer']; lang: string }) {
  const links = [
    { label: dict.links.docs, href: `/${lang}/docs` },
    { label: dict.links.status, href: 'https://status.telnext.dev' },
    { label: dict.links.github, href: 'https://github.com/telnext' },
    { label: dict.links.privacy, href: `/${lang}/privacy` },
  ]

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        padding: '32px 0',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        {/* Brand + copyright */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a
            href={`/${lang}`}
            aria-label="Telnext"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
          >
            <svg width="22" height="22" viewBox="0 0 240 240" aria-hidden="true">
              <g
                fill="none"
                stroke="var(--blue-500)"
                strokeWidth="22"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M 48 60 L 120 60 L 120 196" />
                <path d="M 120 60 L 192 60" />
              </g>
              <g fill="var(--bg)" stroke="var(--blue-500)" strokeWidth="12">
                <circle cx="48" cy="60" r="18" />
                <circle cx="192" cy="60" r="18" />
                <circle cx="120" cy="196" r="18" />
              </g>
            </svg>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: '16px',
                letterSpacing: '-0.04em',
                color: 'var(--ink)',
              }}
            >
              telnext<span style={{ color: 'var(--blue-500)' }}>.dev</span>
            </span>
          </a>
          <span
            style={{
              display: 'none',
              color: 'var(--border)',
              fontSize: 16,
            }}
          >
            |
          </span>
          <p className="t-small" style={{ color: 'var(--ink-faint)' }}>
            {dict.copyright}
          </p>
        </div>

        {/* Nav links */}
        <nav style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              style={{ fontSize: 13 }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
