export type Locale = 'en' | 'pt-br' | 'es'

export const LOCALES: Locale[] = ['en', 'pt-br', 'es']
export const DEFAULT_LOCALE: Locale = 'en'

export type ApiEntry = {
  name: string
  businessValue: string
  how: string
  useCases: string[]
  endpoint: string
}

export type PlanEntry = {
  name: string
  price: string
  unit: string
  description: string
  features: string[]
  cta: string
  ctaHref: string
  featured?: boolean
  note?: string
}

export type Dict = {
  meta: { title: string; description: string }
  nav: { docs: string; apis: string; pricing: string; coverage: string; cta: string }
  hero: {
    badge: string
    headline1: string
    headline2: string
    sub: string
    body: string
    ctaPrimary: string
    ctaSecondary: string
    stats: { value: string; label: string }[]
  }
  howItWorks: {
    label: string
    title: string
    body: string
    nodes: { label: string; sub: string; highlight?: boolean; multi?: boolean }[]
    footerNote: string
  }
  apis: {
    label: string
    title: string
    body: string
    live: string
    comingSoon: string
    liveApis: ApiEntry[]
    comingApis: string[]
  }
  infrastructure: {
    label: string
    title: string
    body: string
    badges: string[]
    compliance: { title: string; body: string }[]
  }
  pricing: {
    label: string
    title: string
    body: string
    popular: string
    plans: PlanEntry[]
  }
  waitlist: {
    label: string
    title: string
    body: string
    placeholder: string
    cta: string
    loading: string
    success: string
    errorGeneric: string
    errorNetwork: string
    footnote: string
  }
  footer: {
    copyright: string
    links: { docs: string; status: string; github: string; privacy: string }
  }
  onboarding: {
    label: string
    title: string
    body: string
    steps: { number: string; title: string; description: string }[]
  }
  coverageMap: {
    label: string
    title: string
    body: string
    statusFull: string
    statusPartial: string
    statusSoon: string
    noCarriers: string
    countries: Record<string, string>
    apisByCarrierTitle: string
    requestTitle: string
    requestBody: string
    requestCta: string
  }
  sandboxWidget: {
    label: string
    title: string
    body: string
    phoneNumberLabel: string
    runRequest: string
    running: string
    response: string
    emptyState: string
    routing: string
  }
  codeWindow: { copy: string; copied: string }
}

import en from './en'
import ptBr from './pt-br'
import es from './es'

export function getDictionary(locale: Locale): Dict {
  switch (locale) {
    case 'pt-br': return ptBr
    case 'es': return es
    default: return en
  }
}

export function isValidLocale(s: string): s is Locale {
  return LOCALES.includes(s as Locale)
}
