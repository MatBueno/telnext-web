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

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CodeWindow />
        <HowItWorks />
        <ApisSection />
        <CoverageMap />
        <SandboxWidget />
        <OnboardingSteps />
        <InfrastructureSection />
        <PricingSection />
        <Waitlist />
      </main>
      <Footer />
    </>
  )
}

function OnboardingSteps() {
  return (
    <section className="section">
      <div className="container">
        {/* Header */}
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

        {/* Steps grid */}
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
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              style={{
                background: 'var(--bg-elev-1)',
                padding: '28px 24px',
                position: 'relative',
              }}
            >
              {/* Step number */}
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

              {/* Title */}
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

              {/* Description */}
              <p className="t-small" style={{ color: 'var(--ink-dim)' }}>
                {step.description}
              </p>

              {/* Connector dot */}
              {i < STEPS.length - 1 && (
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    right: -8,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    background: 'var(--bg-elev-3)',
                    border: '2px solid var(--border)',
                    zIndex: 1,
                    display: 'none', // visible only on lg screens via media query
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
