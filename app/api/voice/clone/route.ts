import { NextResponse } from 'next/server';

// Only the server-side key is used — clients never touch the API key.
const API_KEY = process.env.ELEVENLABS_API_KEY ?? '';

export async function GET() {
  if (!API_KEY) return NextResponse.json({ error: 'ElevenLabs not configured' }, { status: 503 });

  const res = await fetch('https://api.elevenlabs.io/v1/voices', {
    headers: { 'xi-api-key': API_KEY },
    next: { revalidate: 3600 },
  });

  if (!res.ok) return NextResponse.json({ error: 'Failed to fetch voices' }, { status: res.status });
  return NextResponse.json(await res.json());
}
