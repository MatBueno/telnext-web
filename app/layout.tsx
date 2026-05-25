import type { Metadata } from 'next'
import { Syne, Instrument_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Telnext — One API. Every network.',
  description:
    'Intelligent routing layer for CAMARA / Open Gateway APIs. Access device location, number verification and SIM swap across Sinch, Twilio and Infobip with one API key.',
  metadataBase: new URL('https://telnext.dev'),
  openGraph: {
    title: 'Telnext — One API. Every network.',
    description:
      'No telco contracts. One API key. Automatic routing by coverage, price and performance.',
    url: 'https://telnext.dev',
    siteName: 'Telnext',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Telnext — One API. Every network.',
    description: 'CAMARA Open Gateway APIs with automatic routing. Sandbox-ready. Production-grade.',
  },
  icons: {
    icon: '/logo/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${instrumentSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
