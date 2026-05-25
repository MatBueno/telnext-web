import type { Metadata } from 'next'
import Nav from '@/components/nav'
import PricingSection from '@/components/pricing-section'
import Waitlist from '@/components/waitlist'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Pricing — Telnext',
  description:
    'Simple, transparent pricing. Start free in sandbox. Pay $0.004 per API call in production. Volume discounts for 1M+ calls.',
}

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 64 }}>
        {/* Page hero */}
        <div
          style={{
            padding: '80px 0 40px',
            textAlign: 'center',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          <div className="container">
            <p className="t-label" style={{ color: 'var(--blue-500)', marginBottom: 12 }}>
              pricing
            </p>
            <h1 className="t-h1" style={{ color: 'var(--ink)', marginBottom: 12 }}>
              Simple, transparent pricing
            </h1>
            <p className="t-lead" style={{ color: 'var(--ink-dim)', maxWidth: 480, margin: '0 auto' }}>
              No monthly minimums. No setup fees. Pay only for what you use in
              production.
            </p>
          </div>
        </div>

        <PricingSection />

        {/* FAQ */}
        <section className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <div className="container" style={{ maxWidth: 680 }}>
            <h2
              className="t-h2"
              style={{ color: 'var(--ink)', marginBottom: 40 }}
            >
              Frequently asked
            </h2>

            {FAQ.map((item) => (
              <details
                key={item.q}
                style={{
                  borderBottom: '1px solid var(--border-subtle)',
                  paddingBottom: 24,
                  marginBottom: 24,
                }}
              >
                <summary
                  style={{
                    cursor: 'pointer',
                    fontFamily: 'var(--font-display)',
                    fontSize: 16,
                    fontWeight: 600,
                    color: 'var(--ink)',
                    letterSpacing: '-0.02em',
                    marginBottom: 0,
                    listStyle: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {item.q}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    style={{ flexShrink: 0, color: 'var(--ink-dim)' }}
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p
                  className="t-body"
                  style={{ color: 'var(--ink-dim)', marginTop: 12 }}
                >
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <Waitlist />
      </main>
      <Footer />
    </>
  )
}

const FAQ = [
  {
    q: 'When does billing start?',
    a: 'Billing starts only when you switch from a sandbox key to a live key. Sandbox usage is always free.',
  },
  {
    q: 'What counts as an API call?',
    a: 'Each request to any live endpoint counts as one call. Sandbox requests, health checks, and failed auth attempts are not billed.',
  },
  {
    q: 'Is there a minimum commitment?',
    a: 'No minimums on Pay as you go. Volume pricing requires a monthly minimum — contact us for details.',
  },
  {
    q: 'What happens if a provider fails?',
    a: 'Telnext automatically retries on the next best provider. You are not charged for calls that never receive a response from a carrier.',
  },
  {
    q: 'Can I use the sandbox forever?',
    a: 'Yes. The sandbox is permanently free and full-featured. It returns mock responses identical in shape to production.',
  },
]
