import type { Metadata } from 'next'
import { getDictionary, isValidLocale, type Locale } from '@/lib/i18n'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const locale: Locale = isValidLocale(params.lang) ? params.lang : 'en'
  const dict = getDictionary(locale)
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    metadataBase: new URL('https://telnext.dev'),
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: 'https://telnext.dev',
      siteName: 'Telnext',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
    },
    icons: { icon: '/logo/favicon.svg' },
    alternates: {
      canonical: `https://telnext.dev/${locale}`,
      languages: {
        'en': 'https://telnext.dev/en',
        'pt-BR': 'https://telnext.dev/pt-br',
        'es': 'https://telnext.dev/es',
      },
    },
  }
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return <>{children}</>
}
