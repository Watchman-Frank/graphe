import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const apiKey = request.headers.get('xi-api-key');
  if (!apiKey) return NextResponse.json({ error: 'API key required' }, { status: 401 });

  const res = await fetch('https://api.elevenlabs.io/v1/voices', {
    headers: { 'xi-api-key': apiKey },
  });

  if (!res.ok) return NextResponse.json({ error: 'Failed to fetch voices' }, { status: res.status });
  return NextResponse.json(await res.json());
}

export async function POST(request: NextRequest) {
  const apiKey = request.headers.get('xi-api-key');
  if (!apiKey) return NextResponse.json({ error: 'API key required' }, { status: 401 });

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
  const apiKey = request.headers.get('xi-api-key');
  const { searchParams } = new URL(request.url);
  const voiceId = searchParams.get('voiceId');
  if (!apiKey || !voiceId) return NextResponse.json({ error: 'Missing params' }, { status: 400 });

  const res = await fetch(`https://api.elevenlabs.io/v1/voices/${voiceId}`, {
    method: 'DELETE',
    headers: { 'xi-api-key': apiKey },
  });

  return NextResponse.json({ success: res.ok });
}
