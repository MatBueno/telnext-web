const LIVE_APIS = [
  {
    name: 'Number Verification',
    businessValue: 'Eliminates OTP for login and transaction confirmation.',
    how: 'Silently confirms the phone number matches the device making the request — using carrier data, not SMS.',
    useCases: ['Login', 'password recovery', 'transaction auth'],
    endpoint: '/v1/number/verify',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="4" y="2" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M7 10L9 12L13 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: 'SIM Swap Detection',
    businessValue: 'Stops account takeover before the fraudster receives an OTP.',
    how: 'Returns the date of last SIM change. Block the transaction if a swap happened in the last 24h.',
    useCases: ['High-value transfers', 'account recovery', 'new device login'],
    endpoint: '/v1/sim-swap/check',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 4V2M13 4V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 9.5H13M10 7V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Device Location',
    businessValue: 'Flags impossible travel and out-of-area transactions in real time.',
    how: 'Verifies the device is within a defined radius using network positioning — no GPS required.',
    useCases: ['Geo-fencing', 'step-up auth', 'anomaly detection'],
    endpoint: '/v1/location/verify',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 2C6.69 2 4 4.69 4 8C4 12.5 10 18 10 18C10 18 16 12.5 16 8C16 4.69 13.31 2 10 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
]

const COMING_APIS = [
  'Quality on Demand',
  'Device Status',
  'Network-based OTP',
  'Carrier Billing',
]

export default function ApisSection() {
  return (
    <section className="section" id="apis">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <p className="t-label" style={{ color: 'var(--blue-500)', marginBottom: 12 }}>
            security APIs
          </p>
          <h2 className="t-h2" style={{ color: 'var(--ink)', marginBottom: 12 }}>
            Three APIs. Every threat vector.
          </h2>
          <p className="t-body" style={{ color: 'var(--ink-dim)', maxWidth: 480 }}>
            All carrier-grade. No OTP. No telco contracts.
            Same payload, every provider.
          </p>
        </div>

        {/* Live API cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 16,
            marginBottom: 24,
          }}
        >
          {LIVE_APIS.map((api) => (
            <div
              key={api.name}
              className="card"
              style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
            >
              {/* Icon + status */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    background: 'rgba(45, 212, 160, 0.08)',
                    border: '1px solid rgba(45, 212, 160, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--success)',
                  }}
                >
                  {api.icon}
                </div>
                <span className="status-live">live</span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 17,
                  fontWeight: 600,
                  color: 'var(--ink)',
                  letterSpacing: '-0.02em',
                }}
              >
                {api.name}
              </h3>

              {/* Business value */}
              <p className="t-body" style={{ color: 'var(--ink-mute)' }}>
                {api.businessValue}
              </p>

              {/* How */}
              <div
                style={{
                  padding: '12px',
                  background: 'var(--bg)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 8,
                }}
              >
                <p className="t-small" style={{ color: 'var(--ink-dim)' }}>
                  {api.how}
                </p>
              </div>

              {/* Use cases */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {api.useCases.map((uc) => (
                  <span
                    key={uc}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color: 'var(--ink-dim)',
                      background: 'var(--bg-elev-3)',
                      border: '1px solid var(--border)',
                      borderRadius: 4,
                      padding: '3px 8px',
                    }}
                  >
                    {uc}
                  </span>
                ))}
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

        {/* Coming soon APIs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
          <span className="t-label" style={{ color: 'var(--ink-faint)', marginRight: 4 }}>
            coming soon
          </span>
          {COMING_APIS.map((name) => (
            <div
              key={name}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 12px',
                background: 'var(--bg-elev-1)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 6,
                opacity: 0.65,
              }}
            >
              <span className="t-small" style={{ color: 'var(--ink-dim)' }}>
                {name}
              </span>
              <span className="status-coming">soon</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
