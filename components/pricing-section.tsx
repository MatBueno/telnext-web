import type { Dict } from '@/lib/i18n'

export default function PricingSection({ dict }: { dict: Dict['pricing'] }) {
  return (
    <section className="section" id="pricing">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p className="t-label" style={{ color: 'var(--blue-500)', marginBottom: 12 }}>
            {dict.label}
          </p>
          <h2 className="t-h2" style={{ color: 'var(--ink)', marginBottom: 12 }}>
            {dict.title}
          </h2>
          <p className="t-body" style={{ color: 'var(--ink-dim)' }}>
            {dict.body}
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 16,
            alignItems: 'start',
          }}
        >
          {dict.plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                background: plan.featured ? 'var(--bg-elev-2)' : 'var(--bg-elev-1)',
                border: `${plan.featured ? 2 : 1}px solid ${plan.featured ? 'var(--blue-500)' : 'var(--border-subtle)'}`,
                borderRadius: 14,
                padding: '28px 24px',
                position: 'relative',
                boxShadow: plan.featured
                  ? '0 0 40px rgba(108, 140, 255, 0.12)'
                  : 'none',
              }}
            >
              {plan.featured && (
                <div
                  style={{
                    position: 'absolute',
                    top: -13,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--blue-500)',
                    color: '#fff',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    fontWeight: 600,
                    padding: '4px 12px',
                    borderRadius: 100,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {dict.popular}
                </div>
              )}

              {/* Plan header */}
              <div style={{ marginBottom: 24 }}>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 14,
                    fontWeight: 600,
                    color: plan.featured ? 'var(--blue-300)' : 'var(--ink-dim)',
                    marginBottom: 12,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  {plan.name}
                </p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 36,
                      fontWeight: 700,
                      color: 'var(--ink)',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {plan.price}
                  </span>
                  <span className="t-small" style={{ color: 'var(--ink-dim)' }}>
                    · {plan.unit}
                  </span>
                </div>
                {plan.note && (
                  <p className="t-label" style={{ color: 'var(--ink-faint)' }}>
                    {plan.note}
                  </p>
                )}
              </div>

              <p className="t-small" style={{ color: 'var(--ink-dim)', marginBottom: 24 }}>
                {plan.description}
              </p>

              {/* Features */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                {plan.features.map((feat) => (
                  <li
                    key={feat}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                      style={{ marginTop: 2, flexShrink: 0 }}
                    >
                      <path
                        d="M2.5 7L5.5 10L11.5 4"
                        stroke={plan.featured ? 'var(--blue-500)' : 'var(--success)'}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="t-small" style={{ color: 'var(--ink-mute)' }}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.ctaHref}
                className={`btn ${plan.featured ? 'btn-primary' : 'btn-ghost'}`}
                style={{ width: '100%' }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
