'use client'

import { useState } from 'react'

type Tab = 'typescript' | 'python' | 'curl'

function CopyButton({ text, copyLabel, copiedLabel }: { text: string; copyLabel: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={copy}
      style={{
        background: 'none',
        border: '1px solid var(--border)',
        borderRadius: 6,
        color: copied ? 'var(--success)' : 'var(--ink-dim)',
        cursor: 'pointer',
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        padding: '4px 10px',
        transition: 'all 0.15s',
      }}
    >
      {copied ? copiedLabel : copyLabel}
    </button>
  )
}

const TS_CODE = `import { Telnext } from '@telnext/sdk'

const client = new Telnext({
  apiKey: process.env.TELNEXT_API_KEY
})

// detect SIM swap before authorizing transaction
const risk = await client.simSwap.check({
  phoneNumber: '+5511999990000',
})

if (risk.swappedInLast24h) {
  blockTransaction()
}

// → { swapped: true, hoursAgo: 3, carrier: 'Vivo' }`

const PY_CODE = `from telnext import Telnext

client = Telnext(api_key=os.environ["TELNEXT_API_KEY"])

risk = client.sim_swap.check(
    phone_number="+5511999990000"
)

if risk.swapped_in_last_24h:
    block_transaction()

# → { swapped: True, hours_ago: 3, carrier: 'Vivo' }`

const CURL_CODE = `curl -X POST https://api.telnext.dev/v1/sim-swap/check \\
  -H "Authorization: Bearer $TELNEXT_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{ "phoneNumber": "+5511999990000" }'`

function TSCode() {
  return (
    <pre className="t-code" style={{ color: 'var(--ink-mute)' }}>
      <span className="syn-keyword">import</span>
      {' { '}
      <span className="syn-prop">Telnext</span>
      {' } '}
      <span className="syn-keyword">from</span>
      {' '}
      <span className="syn-string">&apos;@telnext/sdk&apos;</span>
      {'\n\n'}
      <span className="syn-keyword">const</span>
      {' client = '}
      <span className="syn-keyword">new</span>
      {' '}
      <span className="syn-fn">Telnext</span>
      {'({\n'}
      {'  apiKey: '}
      <span className="syn-prop">process</span>
      {'.env.'}
      <span className="syn-prop">TELNEXT_API_KEY</span>
      {'\n'}
      {'})\n\n'}
      <span className="syn-comment">{'// detect SIM swap before authorizing transaction'}</span>
      {'\n'}
      <span className="syn-keyword">const</span>
      {' risk = '}
      <span className="syn-keyword">await</span>
      {' client.'}
      <span className="syn-prop">simSwap</span>
      {'.'}
      <span className="syn-fn">check</span>
      {'({\n'}
      {'  phoneNumber: '}
      <span className="syn-string">&apos;+5511999990000&apos;</span>
      {',\n'}
      {'})\n\n'}
      <span className="syn-keyword">if</span>
      {' (risk.'}
      <span className="syn-prop">swappedInLast24h</span>
      {') {\n'}
      {'  '}
      <span className="syn-fn">blockTransaction</span>
      {'()\n'}
      {'}\n\n'}
      <span className="syn-comment">
        {"// → { swapped: true, hoursAgo: 3, carrier: 'Vivo' }"}
      </span>
    </pre>
  )
}

function PyCode() {
  return (
    <pre className="t-code" style={{ color: 'var(--ink-mute)' }}>
      <span className="syn-keyword">from</span>
      {' telnext '}
      <span className="syn-keyword">import</span>
      {' Telnext\n\n'}
      {'client = '}
      <span className="syn-fn">Telnext</span>
      {'(api_key=os.environ['}
      <span className="syn-string">&quot;TELNEXT_API_KEY&quot;</span>
      {'])\n\n'}
      {'risk = client.sim_swap.'}
      <span className="syn-fn">check</span>
      {'(\n'}
      {'    phone_number='}
      <span className="syn-string">&quot;+5511999990000&quot;</span>
      {'\n)\n\n'}
      <span className="syn-keyword">if</span>
      {' risk.swapped_in_last_24h:\n'}
      {'    '}
      <span className="syn-fn">block_transaction</span>
      {'()\n\n'}
      <span className="syn-comment">
        {"# → { swapped: True, hours_ago: 3, carrier: 'Vivo' }"}
      </span>
    </pre>
  )
}

function CurlCode() {
  return (
    <pre className="t-code" style={{ color: 'var(--ink-mute)' }}>
      {'curl -X POST '}
      <span className="syn-string">https://api.telnext.dev/v1/sim-swap/check</span>
      {' \\\n'}
      {'  -H '}
      <span className="syn-string">&quot;Authorization: Bearer $TELNEXT_API_KEY&quot;</span>
      {' \\\n'}
      {'  -H '}
      <span className="syn-string">&quot;Content-Type: application/json&quot;</span>
      {' \\\n'}
      {"  -d '{ "}
      <span className="syn-key">&quot;phoneNumber&quot;</span>
      {': '}
      <span className="syn-string">&quot;+5511999990000&quot;</span>
      {" }'"}
    </pre>
  )
}

const TABS: { id: Tab; label: string; code: string }[] = [
  { id: 'typescript', label: 'TypeScript', code: TS_CODE },
  { id: 'python', label: 'Python', code: PY_CODE },
  { id: 'curl', label: 'cURL', code: CURL_CODE },
]

export default function CodeWindow({ dict }: { dict: { copy: string; copied: string } }) {
  const [active, setActive] = useState<Tab>('typescript')
  const activeTab = TABS.find((t) => t.id === active)!

  return (
    <section className="section" id="code">
      <div className="container">
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div
            style={{
              background: 'var(--bg-elev-2)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              overflow: 'hidden',
            }}
          >
            {/* Window chrome */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderBottom: '1px solid var(--border-subtle)',
                background: 'var(--bg-elev-3)',
              }}
            >
              {/* Traffic lights */}
              <div style={{ display: 'flex', gap: 6 }}>
                {['#FF5F57', '#FEBC2E', '#28C840'].map((color) => (
                  <div
                    key={color}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      background: color,
                      opacity: 0.6,
                    }}
                  />
                ))}
              </div>

              {/* Tabs */}
              <div style={{ display: 'flex', gap: 2 }}>
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActive(tab.id)}
                    style={{
                      background: active === tab.id ? 'var(--bg-elev-2)' : 'none',
                      border: '1px solid',
                      borderColor: active === tab.id ? 'var(--border)' : 'transparent',
                      borderRadius: 6,
                      color: active === tab.id ? 'var(--ink)' : 'var(--ink-dim)',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      fontWeight: 500,
                      padding: '4px 10px',
                      transition: 'all 0.15s',
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <CopyButton text={activeTab.code} copyLabel={dict.copy} copiedLabel={dict.copied} />
            </div>

            {/* Code content */}
            <div style={{ padding: '24px 28px', overflowX: 'auto' }}>
              {active === 'typescript' && <TSCode />}
              {active === 'python' && <PyCode />}
              {active === 'curl' && <CurlCode />}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
