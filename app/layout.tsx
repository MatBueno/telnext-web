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
  title: 'Telnext — Silent Security for Financial Services',
  description:
    'Real-time identity verification for banks and fintechs. SIM swap detection, number verification and device location via carrier network data. No OTP. No telco contracts.',
  keywords:
    'SIM swap detection, number verification, identity fraud, fintech security, CAMARA API, Open Gateway, LATAM',
  metadataBase: new URL('https://telnext.dev'),
  openGraph: {
    title: 'Telnext — Silent Security for Financial Services',
    description:
      'Real-time identity verification for banks and fintechs. No OTP. No telco contracts.',
    url: 'https://telnext.dev',
    siteName: 'Telnext',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Telnext — Silent Security for Financial Services',
    description:
      'Real-time identity verification for banks and fintechs. SIM swap detection, number verification via carrier network data.',
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
