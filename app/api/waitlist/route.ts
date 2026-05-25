import { NextRequest, NextResponse } from 'next/server'
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import path from 'path'

type Entry = { email: string; timestamp: string }

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const email = (body.email ?? '').trim().toLowerCase()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 })
    }

    const dataDir = path.join(process.cwd(), 'data')
    const filePath = path.join(dataDir, 'waitlist.json')

    if (!existsSync(dataDir)) {
      mkdirSync(dataDir, { recursive: true })
    }

    let waitlist: Entry[] = []
    if (existsSync(filePath)) {
      try {
        waitlist = JSON.parse(readFileSync(filePath, 'utf-8'))
      } catch {
        waitlist = []
      }
    }

    if (waitlist.some((e) => e.email === email)) {
      return NextResponse.json(
        { error: "You're already on the list. We'll be in touch!" },
        { status: 409 },
      )
    }

    waitlist.push({ email, timestamp: new Date().toISOString() })
    writeFileSync(filePath, JSON.stringify(waitlist, null, 2))

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Server error. Please try again.' }, { status: 500 })
  }
}
