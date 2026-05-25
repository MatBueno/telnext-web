import type { Metadata } from 'next'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Docs — Telnext',
  description: 'Telnext developer documentation. Quickstart, API reference, SDKs and error codes.',
}

const NAV_ITEMS = [
  {
    section: 'Getting started',
    items: ['Quickstart', 'Authentication', 'Sandbox vs Production', 'Rate limits'],
  },
  {
    section: 'APIs',
    items: ['Device Location', 'Number Verification', 'SIM Swap', 'Quality on Demand'],
  },
  {
    section: 'SDKs',
    items: ['TypeScript / Node.js', 'Python', 'Go', 'REST (cURL)'],
  },
  {
    section: 'Errors & Routing',
    items: ['Error codes', 'Routing logic', 'Failover behavior', 'Retry policy'],
  },
]

const ERROR_EXAMPLE = `{
  "error": "no_route_available",
  "message": "No provider could serve the request for BR-VIVO.",
  "attempted": [
    { "provider": "sinch",   "result": "timeout" },
    { "provider": "twilio",  "result": "503"     },
    { "provider": "infobip", "result": "unsupported" }
  ],
  "retry_after": 30,
  "status_page": "status.telnext.dev",
  "trace_id": "req_8f2a1c",
  "timestamp": "2026-05-25T14:02:11Z"
}`

export default function DocsPage() {
  return (
    <>
      <Nav />
      <div
        style={{
          paddingTop: 64,
          minHeight: '100vh',
          display: 'flex',
        }}
      >
        {/* Sidebar */}
        <aside
          style={{
            width: 240,
            flexShrink: 0,
            borderRight: '1px solid var(--border-subtle)',
            background: 'var(--bg-elev-1)',
            padding: '32px 0',
            position: 'sticky',
            top: 64,
            height: 'calc(100vh - 64px)',
            overflowY: 'auto',
          }}
          className="hidden md:block"
        >
          {NAV_ITEMS.map((group) => (
            <div key={group.section} style={{ marginBottom: 32 }}>
              <p
                className="t-label"
                style={{
                  color: 'var(--ink-faint)',
                  padding: '0 20px',
                  marginBottom: 8,
                }}
              >
                {group.section}
              </p>
              {group.items.map((item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    display: 'block',
                    padding: '7px 20px',
                    textDecoration: 'none',
                    fontSize: 13,
                    fontFamily: 'var(--font-body)',
                    fontWeight: 400,
                    transition: 'color 0.1s, background 0.1s',
                    borderLeft: item === 'Quickstart' ? '2px solid var(--blue-500)' : '2px solid transparent',
                    color: item === 'Quickstart' ? 'var(--blue-300)' : 'var(--ink-mute)',
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          ))}
        </aside>

        {/* Content */}
        <main style={{ flex: 1, padding: '40px 0', minWidth: 0 }}>
          <div style={{ maxWidth: 680, padding: '0 32px' }}>
            {/* Quickstart */}
            <div style={{ marginBottom: 64 }}>
              <p className="t-label" style={{ color: 'var(--blue-500)', marginBottom: 12 }}>
                getting started
              </p>
              <h1 className="t-h1" style={{ color: 'var(--ink)', marginBottom: 16 }}>
                Quickstart
              </h1>
              <p className="t-body" style={{ color: 'var(--ink-dim)', marginBottom: 32 }}>
                Get your first response in under two minutes. No approval, no
                contracts, no carrier onboarding.
              </p>

              {/* Step 1 */}
              <h2
                className="t-h3"
                style={{ color: 'var(--ink)', marginBottom: 12 }}
              >
                1. Install the SDK
              </h2>
              <CodeBlock lang="bash" code="npm install @telnext/sdk" />

              {/* Step 2 */}
              <h2
                className="t-h3"
                style={{ color: 'var(--ink)', marginBottom: 12, marginTop: 32 }}
              >
                2. Set your API key
              </h2>
              <CodeBlock lang="bash" code="export TELNEXT_API_KEY=sk_sandbox_xxxxxxxxxxxx" />
              <p
                className="t-small"
                style={{ color: 'var(--ink-dim)', marginTop: 8 }}
              >
                Sandbox keys start with{' '}
                <code
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 12,
                    background: 'var(--bg-elev-3)',
                    padding: '1px 5px',
                    borderRadius: 3,
                    color: 'var(--ink-mute)',
                  }}
                >
                  sk_sandbox_
                </code>
                . Live keys start with{' '}
                <code
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 12,
                    background: 'var(--bg-elev-3)',
                    padding: '1px 5px',
                    borderRadius: 3,
                    color: 'var(--ink-mute)',
                  }}
                >
                  sk_live_
                </code>
                . Zero code changes between environments.
              </p>

              {/* Step 3 */}
              <h2
                className="t-h3"
                style={{ color: 'var(--ink)', marginBottom: 12, marginTop: 32 }}
              >
                3. Make a request
              </h2>
              <CodeBlock
                lang="typescript"
                code={`import { Telnext } from '@telnext/sdk'

const client = new Telnext({
  apiKey: process.env.TELNEXT_API_KEY
})

const result = await client.location.verify({
  phoneNumber: '+5511999990000',
  latitude: -23.5505,
  longitude: -46.6333,
  radius: 300,
})

console.log(result.verificationResult)
// → { withinRadius: true, carrier: 'Vivo', confidence: 0.97 }`}
              />
            </div>

            <hr className="divider" style={{ marginBottom: 64 }} />

            {/* Error reference */}
            <div style={{ marginBottom: 64 }}>
              <h2 className="t-h2" style={{ color: 'var(--ink)', marginBottom: 16 }}>
                Error format
              </h2>
              <p className="t-body" style={{ color: 'var(--ink-dim)', marginBottom: 24 }}>
                All errors follow the same envelope. The{' '}
                <code
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 12,
                    background: 'var(--bg-elev-3)',
                    padding: '1px 5px',
                    borderRadius: 3,
                    color: 'var(--ink-mute)',
                  }}
                >
                  trace_id
                </code>{' '}
                field is always present — include it when filing a support request.
              </p>
              <CodeBlock lang="json" code={ERROR_EXAMPLE} />
            </div>

            {/* Coming soon notice */}
            <div
              style={{
                background: 'var(--bg-elev-2)',
                border: '1px solid var(--border)',
                borderRadius: 10,
                padding: '20px 24px',
                display: 'flex',
                gap: 12,
                alignItems: 'flex-start',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ marginTop: 2, flexShrink: 0 }}>
                <circle cx="9" cy="9" r="7.5" stroke="var(--blue-300)" strokeWidth="1.25" />
                <path d="M9 6V9.5" stroke="var(--blue-300)" strokeWidth="1.25" strokeLinecap="round" />
                <circle cx="9" cy="12" r="0.75" fill="var(--blue-300)" />
              </svg>
              <p className="t-small" style={{ color: 'var(--ink-dim)' }}>
                Full API reference, webhook docs, and SDK guides are in progress.
                Join the{' '}
                <a href="/#waitlist" style={{ color: 'var(--blue-300)', textDecoration: 'none' }}>
                  early access list
                </a>{' '}
                to get notified when they go live.
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}

function CodeBlock({ lang, code }: { lang: string; code: string }) {
  return (
    <div
      style={{
        background: 'var(--bg-elev-2)',
        border: '1px solid var(--border)',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 0,
      }}
    >
      <div
        style={{
          padding: '6px 12px',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            fontWeight: 500,
            color: 'var(--ink-faint)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        >
          {lang}
        </span>
      </div>
      <pre
        style={{
          padding: '16px',
          fontFamily: 'var(--font-mono)',
          fontSize: 13,
          lineHeight: 1.65,
          color: 'var(--ink-mute)',
          overflowX: 'auto',
        }}
      >
        {code}
      </pre>
    </div>
  )
}
