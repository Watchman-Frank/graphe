import { NextRequest, NextResponse } from 'next/server';
import { COMMENTARY_SOURCES } from '@/data/commentarySources';

// Maps app book IDs to worlddic.com underscore-separated names
const WORLDDIC_BOOK_MAP: Record<string, string> = {
  '1samuel': '1_samuel',
  '2samuel': '2_samuel',
  '1kings': '1_kings',
  '2kings': '2_kings',
  '1chronicles': '1_chronicles',
  '2chronicles': '2_chronicles',
  'songofsolomon': 'song_of_solomon',
  '1corinthians': '1_corinthians',
  '2corinthians': '2_corinthians',
  'galatians': 'galatians',
  'ephesians': 'ephesians',
  'philippians': 'philippians',
  'colossians': 'colossians',
  '1thessalonians': '1_thessalonians',
  '2thessalonians': '2_thessalonians',
  '1timothy': '1_timothy',
  '2timothy': '2_timothy',
  'titus': 'titus',
  'philemon': 'philemon',
  'hebrews': 'hebrews',
  '1peter': '1_peter',
  '2peter': '2_peter',
  '1john': '1_john',
  '2john': '2_john',
  '3john': '3_john',
};

function toWorlddicBook(bookId: string): string {
  return WORLDDIC_BOOK_MAP[bookId] ?? bookId;
}

function stripHtml(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<\/div>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/[ \t]{3,}/g, '  ')
    .replace(/\n{4,}/g, '\n\n\n')
    .trim();
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const bookId = searchParams.get('book');
  const chapter = searchParams.get('chapter');
  const source = searchParams.get('source');

  if (!bookId || !chapter || !source) {
    return NextResponse.json({ error: 'Missing params' }, { status: 400 });
  }

  const sourceDef = COMMENTARY_SOURCES.find(s => s.id === source);
  if (!sourceDef) {
    return NextResponse.json({ error: 'Unknown source' }, { status: 400 });
  }

  const worlddicBook = toWorlddicBook(bookId);
  const url = `https://worlddic.com/xe/sermon4/${sourceDef.prefix}_${worlddicBook}_${chapter}.html`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 604800 }, // 1 week cache
      headers: { 'User-Agent': 'Mozilla/5.0' },
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'Not found', url }, { status: 404 });
    }

    const html = await res.text();
    const text = stripHtml(html);

    if (!text || text.length < 50) {
      return NextResponse.json({ error: 'Empty content' }, { status: 404 });
    }

    return NextResponse.json({ text, source: sourceDef.label, book: bookId, chapter });
  } catch {
    return NextResponse.json({ error: 'Fetch failed' }, { status: 500 });
  }
}
