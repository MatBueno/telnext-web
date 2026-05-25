export const SITE_URL = 'https://telnext.dev'
export const SITE_NAME = 'Telnext'
export const SITE_TAGLINE = 'One API. Every network.'
export const SITE_DESCRIPTION =
  'No telco contracts. One API key. Access device location, number verification and SIM swap across Sinch, Twilio and Infobip with automatic routing.'

export const NAV_LINKS = [
  { label: 'docs', href: '/docs' },
  { label: 'apis', href: '/#apis' },
  { label: 'pricing', href: '/pricing' },
  { label: 'coverage', href: '/coverage' },
] as const

export const APIS = [
  {
    name: 'Device Location',
    description:
      'Verify if a device is within a geographic radius using real network data.',
    status: 'live' as const,
    endpoint: '/v1/location/verify',
  },
  {
    name: 'Number Verification',
    description:
      'Silently verify that a phone number matches the device making the request.',
    status: 'live' as const,
    endpoint: '/v1/number/verify',
  },
  {
    name: 'SIM Swap',
    description:
      'Detect recent SIM swaps to prevent account takeover and fraud in real time.',
    status: 'live' as const,
    endpoint: '/v1/sim-swap/check',
  },
  {
    name: 'Quality on Demand',
    description:
      'Request dedicated network quality for latency-sensitive applications.',
    status: 'coming' as const,
    endpoint: '/v1/qod/sessions',
  },
] as const

export const COVERAGE = [
  {
    country: 'Brazil',
    flag: '🇧🇷',
    carriers: ['Vivo', 'Claro', 'TIM'],
    status: 'full' as const,
  },
  {
    country: 'Mexico',
    flag: '🇲🇽',
    carriers: ['Telcel', 'AT&T MX'],
    status: 'partial' as const,
  },
  {
    country: 'Argentina',
    flag: '🇦🇷',
    carriers: ['Personal', 'Claro'],
    status: 'partial' as const,
  },
  {
    country: 'Germany',
    flag: '🇩🇪',
    carriers: ['DT', 'Vodafone', 'O2'],
    status: 'full' as const,
  },
  {
    country: 'Spain',
    flag: '🇪🇸',
    carriers: ['Telefónica', 'Orange'],
    status: 'partial' as const,
  },
  {
    country: 'Colombia',
    flag: '🇨🇴',
    carriers: [],
    status: 'soon' as const,
  },
] as const

export const STATS = [
  { value: '3', label: 'providers' },
  { value: '4', label: 'APIs' },
  { value: '<50ms', label: 'p95' },
  { value: '99.9%', label: 'uptime' },
] as const

export const STEPS = [
  {
    number: '01',
    title: 'create account',
    description: 'Sandbox credentials immediately, no approval needed.',
  },
  {
    number: '02',
    title: 'explore sandbox',
    description: 'Full mock responses for all APIs, test every edge case.',
  },
  {
    number: '03',
    title: 'check coverage',
    description: 'Real-time carrier availability by country and API.',
  },
  {
    number: '04',
    title: 'ship to production',
    description: 'Swap sandbox key for live key, zero refactoring.',
  },
] as const

export const PROVIDERS = ['Sinch', 'Twilio', 'Infobip'] as const
