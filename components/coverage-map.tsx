import { COVERAGE } from '@/lib/constants'

const STATUS_CONFIG = {
  full: {
    label: 'full coverage',
    className: 'status-full',
    dot: 'var(--success)',
  },
  partial: {
    label: 'partial',
    className: 'status-partial',
    dot: 'var(--warning)',
  },
  soon: {
    label: 'coming soon',
    className: 'status-soon',
    dot: 'var(--ink-faint)',
  },
}

export default function CoverageMap() {
  return (
    <section className="section" id="coverage">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <p className="t-label" style={{ color: 'var(--blue-500)', marginBottom: 12 }}>
            carrier coverage
          </p>
          <h2 className="t-h2" style={{ color: 'var(--ink)', marginBottom: 12 }}>
            Where we route
          </h2>
          <p className="t-body" style={{ color: 'var(--ink-dim)', maxWidth: 480 }}>
            Live routing across major carriers. Coverage expanding every month
            as new operators join the CAMARA Open Gateway program.
          </p>
        </div>

        {/* Country grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 12,
          }}
        >
          {COVERAGE.map((item) => {
            const config = STATUS_CONFIG[item.status]
            return (
              <div
                key={item.country}
                style={{
                  background: 'var(--bg-elev-1)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 10,
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 12,
                }}
              >
                {/* Country info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: 24, lineHeight: 1 }}>{item.flag}</span>
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 15,
                        fontWeight: 600,
                        color: item.status === 'soon' ? 'var(--ink-dim)' : 'var(--ink)',
                        marginBottom: 4,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {item.country}
                    </p>
                    {item.carriers.length > 0 ? (
                      <p className="t-small" style={{ color: 'var(--ink-faint)' }}>
                        {item.carriers.join(' · ')}
                      </p>
                    ) : (
                      <p className="t-small" style={{ color: 'var(--ink-faint)' }}>
                        no carriers yet
                      </p>
                    )}
                  </div>
                </div>

                {/* Status */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: config.dot,
                      flexShrink: 0,
                    }}
                  />
                  <span className={config.className}>{config.label}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Legend */}
        <div
          style={{
            marginTop: 32,
            display: 'flex',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          {Object.entries(STATUS_CONFIG).map(([key, config]) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: config.dot,
                }}
              />
              <span className="t-label" style={{ color: 'var(--ink-dim)' }}>
                {config.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
