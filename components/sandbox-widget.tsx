'use client'

import { useState } from 'react'
import type { Dict } from '@/lib/i18n'

type SandboxDict = Dict['sandboxWidget']

const MOCK_RESPONSE = {
  data: {
    verificationResult: {
      withinRadius: true,
      carrier: 'Vivo',
      confidence: 0.97,
    },
  },
  meta: {
    provider: 'sinch',
    latency_ms: 34,
    trace_id: 'req_8f2a1c',
  },
}

export default function SandboxWidget({ dict }: { dict: SandboxDict }) {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<typeof MOCK_RESPONSE | null>(null)
  const [phone, setPhone] = useState('+5511999990000')

  const run = async () => {
    setLoading(true)
    setResult(null)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setResult(MOCK_RESPONSE)
  }

  return (
    <section className="section" style={{ background: 'var(--bg-elev-1)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
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

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 16,
            maxWidth: 800,
          }}
        >
          {/* Request panel */}
          <div
            style={{
              background: 'var(--bg-elev-2)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                padding: '10px 16px',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <span
                style={{
                  background: 'var(--blue-500)',
                  color: '#fff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 9,
                  fontWeight: 600,
                  padding: '2px 6px',
                  borderRadius: 3,
                }}
              >
                POST
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: 'var(--ink-dim)',
                }}
              >
                /v1/location/verify
              </span>
            </div>

            <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div>
                <label
                  className="t-label"
                  style={{ color: 'var(--ink-dim)', display: 'block', marginBottom: 6 }}
                >
                  {dict.phoneNumberLabel}
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    borderRadius: 6,
                    color: 'var(--ink)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 13,
                    padding: '8px 12px',
                    outline: 'none',
                  }}
                />
              </div>
              <div
                style={{
                  padding: '10px 12px',
                  background: 'var(--bg)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 6,
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: 'var(--ink-dim)',
                  lineHeight: 1.8,
                }}
              >
                <span style={{ color: 'var(--ink-faint)' }}>latitude</span>
                {'  -23.5505\n'}
                <span style={{ color: 'var(--ink-faint)' }}>longitude</span>
                {' -46.6333\n'}
                <span style={{ color: 'var(--ink-faint)' }}>radius</span>
                {'    300'}
              </div>
              <button
                onClick={run}
                disabled={loading}
                className="btn btn-primary"
                style={{ width: '100%', opacity: loading ? 0.7 : 1 }}
              >
                {loading ? (
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      style={{ animation: 'spin 1s linear infinite' }}
                    >
                      <circle
                        cx="7"
                        cy="7"
                        r="5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="25"
                        strokeDashoffset="8"
                      />
                    </svg>
                    {dict.running}
                  </span>
                ) : (
                  dict.runRequest
                )}
              </button>
            </div>
          </div>

          {/* Response panel */}
          <div
            style={{
              background: 'var(--bg-elev-2)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                padding: '10px 16px',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: 'var(--ink-dim)',
                }}
              >
                {dict.response}
              </span>
              {result && (
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color: 'var(--success)',
                    }}
                  >
                    200 OK
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color: 'var(--ink-dim)',
                    }}
                  >
                    {result.meta.latency_ms}ms · {result.meta.provider}
                  </span>
                </div>
              )}
            </div>

            <div
              style={{
                padding: 16,
                minHeight: 180,
                display: 'flex',
                alignItems: result ? 'flex-start' : 'center',
                justifyContent: result ? 'flex-start' : 'center',
              }}
            >
              {!result && !loading && (
                <p className="t-small" style={{ color: 'var(--ink-faint)' }}>
                  {dict.emptyState}
                </p>
              )}
              {loading && (
                <p className="t-small" style={{ color: 'var(--ink-dim)' }}>
                  {dict.routing}
                </p>
              )}
              {result && (
                <pre
                  className="t-code"
                  style={{ color: 'var(--ink-mute)', fontSize: 12, width: '100%' }}
                >
                  {JSON.stringify(result, null, 2)
                    .split('\n')
                    .map((line, i) => {
                      const isKey = /^\s+"[^"]+":/.test(line)
                      const isTrue = /true/.test(line)
                      const isNum = /: \d/.test(line)
                      const isStr = /: "/.test(line)
                      return (
                        <div key={i}>
                          {isKey ? (
                            <>
                              <span style={{ color: 'var(--ink-dim)' }}>
                                {line.match(/^\s+/)?.[0]}
                              </span>
                              <span style={{ color: 'var(--blue-300)' }}>
                                {line.match(/"[^"]+"/)?.[0]}
                              </span>
                              <span style={{ color: 'var(--ink-faint)' }}>: </span>
                              <span
                                style={{
                                  color: isTrue
                                    ? 'var(--success)'
                                    : isNum
                                      ? 'var(--warning)'
                                      : isStr
                                        ? 'var(--success)'
                                        : 'var(--ink-mute)',
                                }}
                              >
                                {line.replace(/^\s+"[^"]+": /, '')}
                              </span>
                            </>
                          ) : (
                            <span style={{ color: 'var(--ink-faint)' }}>{line}</span>
                          )}
                        </div>
                      )
                    })}
                </pre>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
