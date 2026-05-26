const BADGES = [
  'Gartner Magic Quadrant leaders in CPaaS',
  'GSMA Open Gateway certified',
  'CAMARA API compliant',
  'LATAM coverage: BR · MX · AR',
  'Automatic failover',
]

const COMPLIANCE = [
  {
    title: 'LGPD compliant',
    body: 'All carrier data access follows Brazilian data protection law.',
  },
  {
    title: 'No data retention',
    body: 'Telnext does not store phone numbers or location data. Query in, result out.',
  },
  {
    title: 'Audit trail',
    body: 'Every API call logged with trace_id and timestamp. Exportable for compliance review.',
  },
  {
    title: 'Sandbox isolation',
    body: 'Test environment fully isolated from production.',
  },
]

export default function InfrastructureSection() {
  return (
    <section className="section" id="infrastructure">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <p className="t-label" style={{ color: 'var(--blue-500)', marginBottom: 12 }}>
            infrastructure
          </p>
          <h2 className="t-h2" style={{ color: 'var(--ink)', marginBottom: 12 }}>
            Built on carriers that pass your security review.
          </h2>
          <p className="t-body" style={{ color: 'var(--ink-dim)', maxWidth: 560 }}>
            Telnext routes every API call through a curated network of tier-1
            global carriers and CPaaS providers — selected for reliability,
            compliance and regulatory standing.
          </p>
        </div>

        {/* Certification badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 48 }}>
          {BADGES.map((badge) => (
            <div
              key={badge}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 14px',
                background: 'var(--bg-elev-1)',
                border: '1px solid var(--border)',
                borderRadius: 8,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
                style={{ flexShrink: 0 }}
              >
                <path
                  d="M2.5 7L5.5 10L11.5 4"
                  stroke="var(--success)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="t-small" style={{ color: 'var(--ink-mute)' }}>
                {badge}
              </span>
            </div>
          ))}
        </div>

        {/* Compliance cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: 16,
          }}
        >
          {COMPLIANCE.map((item) => (
            <div
              key={item.title}
              className="card"
              style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 15,
                  fontWeight: 600,
                  color: 'var(--ink)',
                  letterSpacing: '-0.02em',
                }}
              >
                {item.title}
              </h3>
              <p className="t-small" style={{ color: 'var(--ink-dim)' }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
