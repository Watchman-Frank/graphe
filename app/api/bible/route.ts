import { NextRequest, NextResponse } from 'next/server';

// bible-api.com requires space-separated book names (encoded as +), e.g. "1 samuel" not "1samuel"
const BOOK_NAME_MAP: Record<string, string> = {
  '1samuel': '1 samuel',
  '2samuel': '2 samuel',
  '1kings': '1 kings',
  '2kings': '2 kings',
  '1chronicles': '1 chronicles',
  '2chronicles': '2 chronicles',
  'ezra': 'ezra',
  'nehemiah': 'nehemiah',
  'songofsolomon': 'song of solomon',
  'songofsongs': 'song of solomon',
  '1corinthians': '1 corinthians',
  '2corinthians': '2 corinthians',
  'galatians': 'galatians',
  'ephesians': 'ephesians',
  'philippians': 'philippians',
  'colossians': 'colossians',
  '1thessalonians': '1 thessalonians',
  '2thessalonians': '2 thessalonians',
  '1timothy': '1 timothy',
  '2timothy': '2 timothy',
  'titus': 'titus',
  'philemon': 'philemon',
  'hebrews': 'hebrews',
  '1peter': '1 peter',
  '2peter': '2 peter',
  '1john': '1 john',
  '2john': '2 john',
  '3john': '3 john',
};

function normalizeRef(ref: string): string {
  // ref format: "bookname+chapter" or "bookname+chapter:verse-verse"
  const plusIndex = ref.indexOf('+');
  if (plusIndex === -1) return ref;

  const bookId = ref.slice(0, plusIndex).toLowerCase();
  const rest = ref.slice(plusIndex); // includes the leading +

  const normalized = BOOK_NAME_MAP[bookId] ?? bookId;
  // Replace spaces in the normalized book name with +
  return normalized.replace(/ /g, '+') + rest;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const ref = searchParams.get('ref');
  const translation = searchParams.get('translation') || 'kjv';

  if (!ref) {
    return NextResponse.json({ error: 'Missing ref parameter' }, { status: 400 });
  }

  try {
    const normalizedRef = normalizeRef(ref);
    const url = `https://bible-api.com/${normalizedRef}?translation=${translation}`;
    const res = await fetch(url, {
      next: { revalidate: 86400 },
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'Bible API error' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch Bible text' }, { status: 500 });
  }
}
