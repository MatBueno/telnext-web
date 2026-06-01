import { COVERAGE } from '@/lib/constants'
import type { Dict } from '@/lib/i18n'

type CoverageDict = Dict['coverageMap']

export default function CoverageMap({ dict }: { dict: CoverageDict }) {
  const statusConfig = {
    full: { label: dict.statusFull, dot: 'var(--success)' },
    partial: { label: dict.statusPartial, dot: 'var(--warning)' },
    soon: { label: dict.statusSoon, dot: 'var(--ink-faint)' },
  }

  return (
    <section className="section" id="coverage">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <p className="t-label" style={{ color: 'var(--blue-500)', marginBottom: 12 }}>
            {dict.label}
          </p>
          <h2 className="t-h2" style={{ color: 'var(--ink)', marginBottom: 12 }}>
            {dict.title}
          </h2>
          <p className="t-body" style={{ color: 'var(--ink-dim)', maxWidth: 480 }}>
            {dict.body}
          </p>
        </div>

        {/* Country grid */}
        <div
          className="mobile-scroll"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 12,
          }}
        >
          {COVERAGE.map((item) => {
            const config = statusConfig[item.status]
            const countryName = dict.countries[item.country] ?? item.country
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
                      {countryName}
                    </p>
                    {item.carriers.length > 0 ? (
                      <p className="t-small" style={{ color: 'var(--ink-faint)' }}>
                        {item.carriers.join(' · ')}
                      </p>
                    ) : (
                      <p className="t-small" style={{ color: 'var(--ink-faint)' }}>
                        {dict.noCarriers}
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
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color: config.dot,
                    }}
                  >
                    {config.label}
                  </span>
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
          {Object.values(statusConfig).map((config) => (
            <div key={config.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
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
