import { notFound } from 'next/navigation'
import { getDictionary, isValidLocale, type Locale } from '@/lib/i18n'
import Nav from '@/components/nav'
import Hero from '@/components/hero'
import CodeWindow from '@/components/code-window'
import HowItWorks from '@/components/how-it-works'
import ApisSection from '@/components/apis-section'
import CoverageMap from '@/components/coverage-map'
import SandboxWidget from '@/components/sandbox-widget'
import InfrastructureSection from '@/components/infrastructure-section'
import PricingSection from '@/components/pricing-section'
import Waitlist from '@/components/waitlist'
import Footer from '@/components/footer'
import { STEPS } from '@/lib/constants'

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pt-br' }, { lang: 'es' }]
}

export default function Home({ params }: { params: { lang: string } }) {
  if (!isValidLocale(params.lang)) notFound()
  const dict = getDictionary(params.lang as Locale)

  return (
    <>
      <Nav dict={dict.nav} lang={params.lang} />
      <main>
        <Hero dict={dict.hero} lang={params.lang} />
        <CodeWindow dict={dict.codeWindow} />
        <HowItWorks dict={dict.howItWorks} />
        <ApisSection dict={dict.apis} />
        <CoverageMap />
        <SandboxWidget />
        <OnboardingSteps />
        <InfrastructureSection dict={dict.infrastructure} />
        <PricingSection dict={dict.pricing} />
        <Waitlist dict={dict.waitlist} />
      </main>
      <Footer dict={dict.footer} lang={params.lang} />
    </>
  )
}

function OnboardingSteps() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ marginBottom: 56 }}>
          <p className="t-label" style={{ color: 'var(--blue-500)', marginBottom: 12 }}>
            getting started
          </p>
          <h2 className="t-h2" style={{ color: 'var(--ink)', marginBottom: 12 }}>
            From zero to production
          </h2>
          <p className="t-body" style={{ color: 'var(--ink-dim)', maxWidth: 480 }}>
            No contracts. No approval queues. No custom SDKs per carrier.
          </p>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 1,
            background: 'var(--border-subtle)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 12,
            overflow: 'hidden',
          }}
        >
          {STEPS.map((step) => (
            <div key={step.number} style={{ background: 'var(--bg-elev-1)', padding: '28px 24px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  fontWeight: 600,
                  color: 'var(--blue-500)',
                  letterSpacing: '0.08em',
                  display: 'block',
                  marginBottom: 16,
                }}
              >
                {step.number}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 18,
                  fontWeight: 600,
                  color: 'var(--ink)',
                  marginBottom: 8,
                  letterSpacing: '-0.02em',
                }}
              >
                {step.title}
              </h3>
              <p className="t-small" style={{ color: 'var(--ink-dim)' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
