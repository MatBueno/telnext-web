import type { Metadata } from 'next'
import { getDictionary, isValidLocale, type Locale } from '@/lib/i18n'
import { notFound } from 'next/navigation'
import Nav from '@/components/nav'
import CoverageMap from '@/components/coverage-map'
import Waitlist from '@/components/waitlist'
import Footer from '@/components/footer'
import { COVERAGE, APIS } from '@/lib/constants'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  return {
    title: 'Coverage — Telnext',
    description:
      'Real-time carrier availability by country and API. See where Telnext routes and which carriers are supported.',
  }
}

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pt-br' }, { lang: 'es' }]
}

const COVERAGE_DETAIL = [
  {
    country: 'Brazil',
    flag: '🇧🇷',
    status: 'full' as const,
    carriers: [
      { name: 'Vivo', apis: ['Device Location', 'Number Verification', 'SIM Swap'] },
      { name: 'Claro', apis: ['Device Location', 'Number Verification', 'SIM Swap'] },
      { name: 'TIM', apis: ['Device Location', 'Number Verification'] },
    ],
  },
  {
    country: 'Mexico',
    flag: '🇲🇽',
    status: 'partial' as const,
    carriers: [
      { name: 'Telcel', apis: ['Device Location', 'SIM Swap'] },
      { name: 'AT&T MX', apis: ['Device Location'] },
    ],
  },
  {
    country: 'Germany',
    flag: '🇩🇪',
    status: 'full' as const,
    carriers: [
      { name: 'Deutsche Telekom', apis: ['Device Location', 'Number Verification', 'SIM Swap'] },
      { name: 'Vodafone', apis: ['Device Location', 'Number Verification', 'SIM Swap'] },
      { name: 'O2 (Telefónica DE)', apis: ['Device Location', 'Number Verification'] },
    ],
  },
]

export default function CoveragePage({ params }: { params: { lang: string } }) {
  if (!isValidLocale(params.lang)) notFound()
  const dict = getDictionary(params.lang as Locale)

  return (
    <>
      <Nav dict={dict.nav} lang={params.lang} />
      <main style={{ paddingTop: 64 }}>
        {/* Hero */}
        <div style={{ padding: '80px 0 40px', borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="container">
            <p className="t-label" style={{ color: 'var(--blue-500)', marginBottom: 12 }}>
              coverage
            </p>
            <h1 className="t-h1" style={{ color: 'var(--ink)', marginBottom: 12 }}>
              Where we route
            </h1>
            <p className="t-lead" style={{ color: 'var(--ink-dim)', maxWidth: 520 }}>
              Live routing across major carriers in{' '}
              {COVERAGE.filter((c) => c.status !== 'soon').length} countries.
              Coverage expanding every month.
            </p>
          </div>
        </div>

        {/* Overview grid */}
        <CoverageMap />

        {/* Detailed breakdown */}
        <section
          className="section"
          style={{ borderTop: '1px solid var(--border-subtle)' }}
        >
          <div className="container">
            <h2 className="t-h2" style={{ color: 'var(--ink)', marginBottom: 40 }}>
              API availability by carrier
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {COVERAGE_DETAIL.map((country) => (
                <div
                  key={country.country}
                  style={{
                    background: 'var(--bg-elev-1)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 12,
                    overflow: 'hidden',
                  }}
                >
                  {/* Country header */}
                  <div
                    style={{
                      padding: '16px 20px',
                      borderBottom: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                    }}
                  >
                    <span style={{ fontSize: 20 }}>{country.flag}</span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 17,
                        fontWeight: 600,
                        color: 'var(--ink)',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {country.country}
                    </h3>
                  </div>

                  {/* Carrier rows */}
                  <div style={{ padding: '8px 0' }}>
                    {country.carriers.map((carrier) => (
                      <div
                        key={carrier.name}
                        style={{
                          padding: '12px 20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: 16,
                          flexWrap: 'wrap',
                          borderBottom: '1px solid var(--border-subtle)',
                        }}
                      >
                        <span className="t-body" style={{ color: 'var(--ink-mute)', minWidth: 160 }}>
                          {carrier.name}
                        </span>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                          {APIS.map((api) => {
                            const supported = carrier.apis.includes(api.name)
                            return (
                              <span
                                key={api.name}
                                style={{
                                  fontFamily: 'var(--font-mono)',
                                  fontSize: 10,
                                  fontWeight: 500,
                                  padding: '3px 8px',
                                  borderRadius: 4,
                                  background: supported
                                    ? 'var(--success-soft)'
                                    : 'var(--bg-elev-3)',
                                  border: `1px solid ${supported ? 'rgba(45, 212, 160, 0.2)' : 'var(--border-subtle)'}`,
                                  color: supported ? 'var(--success)' : 'var(--ink-faint)',
                                }}
                              >
                                {api.name}
                              </span>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Coverage request CTA */}
            <div
              style={{
                marginTop: 40,
                padding: '24px',
                background: 'var(--bg-elev-1)',
                border: '1px solid var(--border)',
                borderRadius: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 16,
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 16,
                    fontWeight: 600,
                    color: 'var(--ink)',
                    marginBottom: 4,
                  }}
                >
                  Don&apos;t see your country?
                </p>
                <p className="t-small" style={{ color: 'var(--ink-dim)' }}>
                  Request coverage and we&apos;ll prioritize your region.
                </p>
              </div>
              <a href="mailto:coverage@telnext.dev" className="btn btn-ghost">
                request coverage
              </a>
            </div>
          </div>
        </section>

        <Waitlist dict={dict.waitlist} />
      </main>
      <Footer dict={dict.footer} lang={params.lang} />
    </>
  )
}
