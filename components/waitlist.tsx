'use client'

import { useState } from 'react'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setMessage("You're on the list. We'll reach out when tier-1 carriers go live.")
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  return (
    <section
      id="waitlist"
      className="section"
      style={{
        background: 'var(--bg-elev-1)',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        <div
          style={{
            maxWidth: 560,
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          {/* Header */}
          <p className="t-label" style={{ color: 'var(--blue-500)', marginBottom: 16 }}>
            early access
          </p>
          <h2 className="t-h2" style={{ color: 'var(--ink)', marginBottom: 12 }}>
            Join the early access list
          </h2>
          <p className="t-body" style={{ color: 'var(--ink-dim)', marginBottom: 40 }}>
            Built for banks and fintechs in LATAM.
            <br />
            Be first when tier-1 carriers go live.
          </p>

          {status === 'success' ? (
            <div
              style={{
                background: 'var(--success-soft)',
                border: '1px solid rgba(45, 212, 160, 0.2)',
                borderRadius: 10,
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M4 10L8 14L16 6"
                  stroke="var(--success)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="t-body" style={{ color: 'var(--success)' }}>
                {message}
              </p>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div
                style={{
                  display: 'flex',
                  gap: 8,
                  flexWrap: 'wrap',
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  style={{
                    flex: '1 1 220px',
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    borderRadius: 8,
                    color: 'var(--ink)',
                    fontFamily: 'var(--font-body)',
                    fontSize: 14,
                    padding: '12px 16px',
                    outline: 'none',
                    transition: 'border-color 0.15s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--blue-500)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn btn-primary"
                  style={{
                    flexShrink: 0,
                    padding: '12px 24px',
                    opacity: status === 'loading' ? 0.7 : 1,
                  }}
                >
                  {status === 'loading' ? 'joining…' : 'get early access'}
                </button>
              </div>

              {status === 'error' && (
                <p
                  className="t-small"
                  style={{ color: 'var(--danger)', marginTop: 10, textAlign: 'left' }}
                >
                  {message}
                </p>
              )}
            </form>
          )}

          <p className="t-small" style={{ color: 'var(--ink-faint)', marginTop: 16 }}>
            We respect your inbox. Unsubscribe any time.
          </p>
        </div>
      </div>
    </section>
  )
}
