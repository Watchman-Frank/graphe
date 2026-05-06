import type { BiblePassage } from '@/types/bible';

const BIBLE_API_BASE = 'https://bible-api.com';
const API_BIBLE_BASE = 'https://api.scripture.api.bible/v1';

// KJV via bible-api.com (free, no key)
// NKJV via API.Bible (requires free API key)

function encodeRef(book: string, chapter: number, verseStart?: number, verseEnd?: number): string {
  let ref = `${book.replace(/\s+/g, '+')}+${chapter}`;
  if (verseStart) ref += `:${verseStart}`;
  if (verseEnd) ref += `-${verseEnd}`;
  return ref;
}

export async function fetchChapterKJV(book: string, chapter: number): Promise<BiblePassage> {
  const ref = encodeRef(book, chapter);
  const res = await fetch(`/api/bible?ref=${ref}&translation=kjv`);
  if (!res.ok) throw new Error(`Failed to fetch ${book} ${chapter}`);
  return res.json();
}

export async function fetchVerseKJV(book: string, chapter: number, verse: number): Promise<BiblePassage> {
  const ref = encodeRef(book, chapter, verse);
  const res = await fetch(`/api/bible?ref=${ref}&translation=kjv`);
  if (!res.ok) throw new Error(`Failed to fetch verse`);
  return res.json();
}

export async function fetchChapterNKJV(book: string, chapter: number, apiBibleKey: string): Promise<BiblePassage> {
  const res = await fetch(`/api/bible/nkjv?book=${encodeURIComponent(book)}&chapter=${chapter}`, {
    headers: { 'x-api-key': apiBibleKey },
  });
  if (!res.ok) throw new Error('NKJV requires a valid API.Bible key');
  return res.json();
}

export async function searchBible(query: string): Promise<BiblePassage[]> {
  const res = await fetch(`/api/bible/search?q=${encodeURIComponent(query)}`);
  if (!res.ok) return [];
  return res.json();
}
