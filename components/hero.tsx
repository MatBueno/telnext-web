import type { Dict } from '@/lib/i18n'

type HeroDict = Dict['hero']

export default function Hero({ dict, lang }: { dict: HeroDict; lang: string }) {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: 64,
      }}
    >
      {/* Grid background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to bottom, transparent 60%, var(--bg) 100%),
            linear-gradient(rgba(108, 140, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(108, 140, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 64px 64px, 64px 64px',
          backgroundPosition: '0 0, -1px -1px, -1px -1px',
        }}
      />

      {/* Blue glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 600,
          height: 400,
          background:
            'radial-gradient(ellipse at center, rgba(108, 140, 255, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ maxWidth: 760 }}>
          {/* Badge */}
          <div style={{ marginBottom: 32 }}>
            <span className="badge">
              <span className="badge-dot" />
              {dict.badge}
            </span>
          </div>

          {/* Headline */}
          <h1 className="t-display" style={{ color: 'var(--ink)', marginBottom: 8 }}>
            {dict.headline1}
          </h1>
          <h1
            className="t-display"
            style={{
              color: 'transparent',
              backgroundImage:
                'linear-gradient(135deg, var(--blue-300) 0%, var(--blue-500) 60%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              marginBottom: 24,
            }}
          >
            {dict.headline2}
          </h1>

          {/* Lead */}
          <p
            className="t-lead"
            style={{ color: 'var(--ink-mute)', marginBottom: 12, fontWeight: 600, fontSize: 22 }}
          >
            {dict.sub}
          </p>
          <p className="t-body" style={{ color: 'var(--ink-dim)', maxWidth: 560, marginBottom: 40 }}>
            {dict.body}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 64 }}>
            <a href="#waitlist" className="btn btn-primary btn-lg">
              {dict.ctaPrimary}
            </a>
            <a href={`/${lang}/docs`} className="btn btn-ghost btn-lg">
              {dict.ctaSecondary}
            </a>
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0 40px',
              paddingTop: 32,
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            {dict.stats.map((stat) => (
              <div key={stat.label} style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 18,
                    fontWeight: 600,
                    color: 'var(--ink)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {stat.value}
                </span>
                <span className="t-label" style={{ color: 'var(--ink-dim)' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
