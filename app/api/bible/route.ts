import { NextRequest, NextResponse } from 'next/server';

// book ID → bolls.life book number (1–66)
const BOOK_NUMBERS: Record<string, number> = {
  genesis: 1, exodus: 2, leviticus: 3, numbers: 4, deuteronomy: 5,
  joshua: 6, judges: 7, ruth: 8, '1samuel': 9, '2samuel': 10,
  '1kings': 11, '2kings': 12, '1chronicles': 13, '2chronicles': 14,
  ezra: 15, nehemiah: 16, esther: 17, job: 18, psalms: 19,
  proverbs: 20, ecclesiastes: 21, songofsolomon: 22, isaiah: 23,
  jeremiah: 24, lamentations: 25, ezekiel: 26, daniel: 27,
  hosea: 28, joel: 29, amos: 30, obadiah: 31, jonah: 32,
  micah: 33, nahum: 34, habakkuk: 35, zephaniah: 36, haggai: 37,
  zechariah: 38, malachi: 39,
  matthew: 40, mark: 41, luke: 42, john: 43, acts: 44,
  romans: 45, '1corinthians': 46, '2corinthians': 47, galatians: 48,
  ephesians: 49, philippians: 50, colossians: 51, '1thessalonians': 52,
  '2thessalonians': 53, '1timothy': 54, '2timothy': 55, titus: 56,
  philemon: 57, hebrews: 58, james: 59, '1peter': 60, '2peter': 61,
  '1john': 62, '2john': 63, '3john': 64, jude: 65, revelation: 66,
};

// bible-api.com needs spaces in multi-word book names (encoded as +)
const BOOK_NAME_MAP: Record<string, string> = {
  '1samuel': '1 samuel', '2samuel': '2 samuel',
  '1kings': '1 kings', '2kings': '2 kings',
  '1chronicles': '1 chronicles', '2chronicles': '2 chronicles',
  songofsolomon: 'song of solomon', songofsongs: 'song of solomon',
  '1corinthians': '1 corinthians', '2corinthians': '2 corinthians',
  '1thessalonians': '1 thessalonians', '2thessalonians': '2 thessalonians',
  '1timothy': '1 timothy', '2timothy': '2 timothy',
  '1peter': '1 peter', '2peter': '2 peter',
  '1john': '1 john', '2john': '2 john', '3john': '3 john',
};

// ref format: "bookId+chapter" or "bookId chapter" (+ decoded as space by URLSearchParams)
// optionally with ":verse" or ":verse-verse" suffix
function parseRef(ref: string): { bookId: string; chapter: number; verseStart?: number; verseEnd?: number } | null {
  // '+' is decoded as space by URLSearchParams, but handle both just in case
  let sepIdx = ref.indexOf('+');
  if (sepIdx === -1) sepIdx = ref.indexOf(' ');
  if (sepIdx === -1) return null;
  const bookId = ref.slice(0, sepIdx).toLowerCase();
  const rest = ref.slice(sepIdx + 1);
  const colonIdx = rest.indexOf(':');
  if (colonIdx === -1) {
    return { bookId, chapter: parseInt(rest, 10) };
  }
  const chapter = parseInt(rest.slice(0, colonIdx), 10);
  const versePart = rest.slice(colonIdx + 1);
  const dashIdx = versePart.indexOf('-');
  if (dashIdx === -1) {
    return { bookId, chapter, verseStart: parseInt(versePart, 10), verseEnd: parseInt(versePart, 10) };
  }
  return {
    bookId, chapter,
    verseStart: parseInt(versePart.slice(0, dashIdx), 10),
    verseEnd: parseInt(versePart.slice(dashIdx + 1), 10),
  };
}

async function fetchNKJV(ref: string) {
  const parsed = parseRef(ref);
  if (!parsed) return NextResponse.json({ error: 'Invalid ref' }, { status: 400 });

  const bookNum = BOOK_NUMBERS[parsed.bookId];
  if (!bookNum) return NextResponse.json({ error: `Unknown book: ${parsed.bookId}` }, { status: 400 });

  const res = await fetch(
    `https://bolls.life/get-chapter/NKJV/${bookNum}/${parsed.chapter}/`,
    { next: { revalidate: 86400 } }
  );
  if (!res.ok) return NextResponse.json({ error: 'NKJV fetch failed' }, { status: res.status });

  const raw: { pk: number; verse: number; text: string }[] = await res.json();

  let verses = raw.map(v => ({
    book_id: parsed.bookId,
    book_name: parsed.bookId,
    chapter: parsed.chapter,
    verse: v.verse,
    text: v.text,
  }));

  if (parsed.verseStart !== undefined && parsed.verseEnd !== undefined) {
    verses = verses.filter(v => v.verse >= parsed.verseStart! && v.verse <= parsed.verseEnd!);
  }

  const passage = {
    reference: ref.replace(/\+/g, ' '),
    verses,
    text: verses.map(v => v.text).join(' '),
    translation_id: 'nkjv',
    translation_name: 'New King James Version',
  };

  return NextResponse.json(passage);
}

function normalizeKJVRef(ref: string): string {
  const plusIndex = ref.indexOf('+');
  if (plusIndex === -1) return ref;
  const bookId = ref.slice(0, plusIndex).toLowerCase();
  const rest = ref.slice(plusIndex);
  const normalized = BOOK_NAME_MAP[bookId] ?? bookId;
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
    if (translation === 'nkjv') {
      return fetchNKJV(ref);
    }

    // KJV via bible-api.com
    const normalizedRef = normalizeKJVRef(ref);
    const url = `https://bible-api.com/${normalizedRef}?translation=${translation}`;
    const res = await fetch(url, { next: { revalidate: 86400 } });

    if (!res.ok) {
      return NextResponse.json({ error: 'Bible API error' }, { status: res.status });
    }

    return NextResponse.json(await res.json());
  } catch {
    return NextResponse.json({ error: 'Failed to fetch Bible text' }, { status: 500 });
  }
}
