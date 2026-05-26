import { NextRequest, NextResponse } from 'next/server'
import { LOCALES, DEFAULT_LOCALE, type Locale } from './lib/i18n'

function detectLocale(request: NextRequest): Locale {
  const al = request.headers.get('accept-language') ?? ''
  const langs = al.split(',').map((l) => l.split(';')[0].trim().toLowerCase())
  for (const l of langs) {
    if (l.startsWith('pt')) return 'pt-br'
    if (l.startsWith('es')) return 'es'
    if (l.startsWith('en')) return 'en'
  }
  return DEFAULT_LOCALE
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Pass through API routes, Next.js internals, and static files
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    /\.\w+$/.test(pathname)
  ) {
    return NextResponse.next()
  }

  const hasLocale = LOCALES.some(
    (loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`)
  )

  if (!hasLocale) {
    const locale = detectLocale(request)
    const url = request.nextUrl.clone()
    url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
