import { APIS } from '@/lib/constants'

const ICONS: Record<string, React.ReactNode> = {
  'Device Location': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 2C6.69 2 4 4.69 4 8C4 12.5 10 18 10 18C10 18 16 12.5 16 8C16 4.69 13.31 2 10 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  ),
  'Number Verification': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="4" y="2" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'SIM Swap': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 4V2M13 4V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 9.5H13M10 7V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  'Quality on Demand': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M3 13L7 9L10 12L13 7L17 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
}

export default function ApisSection() {
  return (
    <section className="section" id="apis">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <p className="t-label" style={{ color: 'var(--blue-500)', marginBottom: 12 }}>
            CAMARA open gateway
          </p>
          <h2 className="t-h2" style={{ color: 'var(--ink)', marginBottom: 12 }}>
            Four APIs. One key.
          </h2>
          <p className="t-body" style={{ color: 'var(--ink-dim)', maxWidth: 480 }}>
            All APIs are CAMARA-compliant. No custom integration per carrier.
            Same payload, every provider.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 16,
          }}
        >
          {APIS.map((api) => (
            <div
              key={api.name}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                opacity: api.status === 'coming' ? 0.65 : 1,
                transition: 'border-color 0.15s, transform 0.15s',
              }}
            >
              {/* Icon + status */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    background:
                      api.status === 'live'
                        ? 'rgba(45, 212, 160, 0.08)'
                        : 'var(--bg-elev-3)',
                    border: `1px solid ${api.status === 'live' ? 'rgba(45, 212, 160, 0.15)' : 'var(--border)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: api.status === 'live' ? 'var(--success)' : 'var(--ink-dim)',
                  }}
                >
                  {ICONS[api.name]}
                </div>
                <span className={api.status === 'live' ? 'status-live' : 'status-coming'}>
                  {api.status === 'live' ? 'live' : 'coming soon'}
                </span>
              </div>

              {/* Title & description */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 17,
                    fontWeight: 600,
                    color: 'var(--ink)',
                    marginBottom: 8,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {api.name}
                </h3>
                <p className="t-small" style={{ color: 'var(--ink-dim)' }}>
                  {api.description}
                </p>
              </div>

              {/* Endpoint */}
              <div
                style={{
                  marginTop: 'auto',
                  padding: '8px 12px',
                  background: 'var(--bg)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 6,
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: 'var(--ink-dim)',
                }}
              >
                POST {api.endpoint}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
