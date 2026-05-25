const FLOW_NODES = [
  { label: 'Developer', sub: 'your app' },
  { label: 'Telnext API', sub: 'single endpoint', highlight: true },
  { label: 'Routing Engine', sub: 'coverage · price · perf', highlight: true },
  { label: 'Providers', sub: 'Sinch · Twilio · Infobip', multi: true },
  { label: 'Carrier', sub: 'real network' },
]

function ArrowRight() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0, color: 'var(--ink-faint)' }}
    >
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Node({
  label,
  sub,
  highlight,
  multi,
}: {
  label: string
  sub: string
  highlight?: boolean
  multi?: boolean
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        minWidth: 110,
      }}
    >
      <div
        style={{
          background: highlight ? 'var(--bg-elev-3)' : 'var(--bg-elev-1)',
          border: `1px solid ${highlight ? 'var(--border-strong)' : 'var(--border-subtle)'}`,
          borderRadius: 10,
          padding: '12px 16px',
          textAlign: 'center',
          position: 'relative',
          boxShadow: highlight ? '0 0 0 1px var(--blue-glow)' : 'none',
        }}
      >
        {highlight && (
          <div
            style={{
              position: 'absolute',
              inset: -1,
              borderRadius: 10,
              background:
                'linear-gradient(135deg, rgba(108, 140, 255, 0.08) 0%, transparent 100%)',
              pointerEvents: 'none',
            }}
          />
        )}
        {multi ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            {['Sinch', 'Twilio', 'Infobip'].map((p) => (
              <span
                key={p}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  fontWeight: 500,
                  color: 'var(--ink-mute)',
                  background: 'var(--bg-elev-2)',
                  border: '1px solid var(--border)',
                  borderRadius: 4,
                  padding: '2px 8px',
                }}
              >
                {p}
              </span>
            ))}
          </div>
        ) : (
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 13,
              fontWeight: 600,
              color: highlight ? 'var(--blue-300)' : 'var(--ink)',
              whiteSpace: 'nowrap',
            }}
          >
            {label}
          </span>
        )}
      </div>
      <span className="t-label" style={{ color: 'var(--ink-faint)', textAlign: 'center' }}>
        {sub}
      </span>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section className="section" style={{ background: 'var(--bg-elev-1)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p className="t-label" style={{ color: 'var(--blue-500)', marginBottom: 12 }}>
            how it works
          </p>
          <h2 className="t-h2" style={{ color: 'var(--ink)', marginBottom: 16 }}>
            Automatic routing, every call
          </h2>
          <p className="t-body" style={{ color: 'var(--ink-dim)', maxWidth: 540, margin: '0 auto' }}>
            Telnext selects the best provider for each call automatically — by
            carrier coverage, price and historical performance. If one provider
            fails, we fallback instantly. You get one response. We handle the rest.
          </p>
        </div>

        {/* Flow diagram */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '16px 8px',
          }}
        >
          <Node label="Developer" sub="your app" />
          <ArrowRight />
          <Node label="Telnext API" sub="single endpoint" highlight />
          <ArrowRight />
          <Node label="Routing Engine" sub="coverage · price · perf" highlight />
          <ArrowRight />
          <Node label="Providers" sub="Sinch · Twilio · Infobip" multi />
          <ArrowRight />
          <Node label="Carrier" sub="real network" />
        </div>

        {/* Fallback note */}
        <div
          style={{
            marginTop: 48,
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8"
              stroke="var(--success)"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
            <path
              d="M5 8L7 10L11 6"
              stroke="var(--success)"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="t-label" style={{ color: 'var(--ink-dim)' }}>
            Automatic failover — zero config required
          </span>
        </div>
      </div>
    </section>
  )
}
