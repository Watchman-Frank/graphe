import { NextRequest, NextResponse } from 'next/server';

function getApiKey(): string | null {
  return process.env.ELEVENLABS_API_KEY ?? null;
}

export async function GET() {
  const apiKey = getApiKey();
  if (!apiKey) return NextResponse.json({ error: 'ElevenLabs API key not configured' }, { status: 503 });

  const res = await fetch('https://api.elevenlabs.io/v1/voices', {
    headers: { 'xi-api-key': apiKey },
    next: { revalidate: 3600 },
  });

  if (!res.ok) return NextResponse.json({ error: 'Failed to fetch voices' }, { status: res.status });
  return NextResponse.json(await res.json());
}

export async function POST(request: NextRequest) {
  const apiKey = getApiKey();
  if (!apiKey) return NextResponse.json({ error: 'ElevenLabs API key not configured' }, { status: 503 });

  const formData = await request.formData();
  const res = await fetch('https://api.elevenlabs.io/v1/voices/add', {
    method: 'POST',
    headers: { 'xi-api-key': apiKey },
    body: formData,
  });

  if (!res.ok) return NextResponse.json({ error: 'Voice cloning failed' }, { status: res.status });
  return NextResponse.json(await res.json());
}

export async function DELETE(request: NextRequest) {
  const apiKey = getApiKey();
  const { searchParams } = new URL(request.url);
  const voiceId = searchParams.get('voiceId');
  if (!apiKey || !voiceId) return NextResponse.json({ error: 'Missing params' }, { status: 400 });

  const res = await fetch(`https://api.elevenlabs.io/v1/voices/${voiceId}`, {
    method: 'DELETE',
    headers: { 'xi-api-key': apiKey },
  });

  return NextResponse.json({ success: res.ok });
}
