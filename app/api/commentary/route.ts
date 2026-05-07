import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { COMMENTARY_SOURCES } from '@/data/commentarySources';

// ── HelloAO Bible API (bible.helloao.org) ─────────────────────────────────────
// Free, no rate limits, no API key. Covers all 66 books.

const HELLOAO_COMMENTATOR_IDS: Record<string, string> = {
  'mh':            'matthew-henry',
  'jfb':           'jamieson-fausset-brown',
  'adam-clarke':   'adam-clarke',
  'john-gill':     'john-gill',
  'keil-delitzsch':'keil-delitzsch',
  'tyndale':       'tyndale',
};

// OT-only commentaries — will return 404 for NT books from HelloAO
const HELLOAO_OT_ONLY = new Set(['keil-delitzsch']);

const HELLOAO_BOOK_CODES: Record<string, string> = {
  genesis:'GEN', exodus:'EXO', leviticus:'LEV', numbers:'NUM', deuteronomy:'DEU',
  joshua:'JOS', judges:'JDG', ruth:'RUT',
  '1samuel':'1SA', '2samuel':'2SA', '1kings':'1KI', '2kings':'2KI',
  '1chronicles':'1CH', '2chronicles':'2CH',
  ezra:'EZR', nehemiah:'NEH', esther:'EST',
  job:'JOB', psalms:'PSA', proverbs:'PRO', ecclesiastes:'ECC', songofsolomon:'SNG',
  isaiah:'ISA', jeremiah:'JER', lamentations:'LAM', ezekiel:'EZK', daniel:'DAN',
  hosea:'HOS', joel:'JOL', amos:'AMO', obadiah:'OBA',
  jonah:'JON', micah:'MIC', nahum:'NAM', habakkuk:'HAB',
  zephaniah:'ZEP', haggai:'HAG', zechariah:'ZEC', malachi:'MAL',
  matthew:'MAT', mark:'MRK', luke:'LUK', john:'JHN', acts:'ACT',
  romans:'ROM', '1corinthians':'1CO', '2corinthians':'2CO',
  galatians:'GAL', ephesians:'EPH', philippians:'PHP', colossians:'COL',
  '1thessalonians':'1TH', '2thessalonians':'2TH',
  '1timothy':'1TI', '2timothy':'2TI',
  titus:'TIT', philemon:'PHM', hebrews:'HEB',
  james:'JAS', '1peter':'1PE', '2peter':'2PE',
  '1john':'1JN', '2john':'2JN', '3john':'3JN',
  jude:'JUD', revelation:'REV',
};

const NT_BOOKS = new Set([
  'matthew','mark','luke','john','acts','romans',
  '1corinthians','2corinthians','galatians','ephesians','philippians','colossians',
  '1thessalonians','2thessalonians','1timothy','2timothy','titus','philemon',
  'hebrews','james','1peter','2peter','1john','2john','3john','jude','revelation',
]);

function extractHelloAoText(data: Record<string, unknown>): string | null {
  const chapter = data?.chapter as Record<string, unknown> | undefined;
  const content = chapter?.content as unknown[] | undefined;
  if (!Array.isArray(content) || content.length === 0) return null;

  const parts: string[] = [];

  function extractItem(item: unknown): void {
    if (typeof item === 'string') {
      const s = item.trim();
      if (s) parts.push(s);
    } else if (typeof item === 'object' && item !== null) {
      const obj = item as Record<string, unknown>;
      if (obj.type === 'heading' && Array.isArray(obj.content)) {
        const heading = (obj.content as unknown[]).map(i => typeof i === 'string' ? i : '').join(' ').trim();
        if (heading) parts.push(`\n**${heading}**`);
      } else if (Array.isArray(obj.content)) {
        (obj.content as unknown[]).forEach(extractItem);
      }
    }
  }

  for (const entry of content) {
    if (typeof entry === 'object' && entry !== null) {
      const e = entry as Record<string, unknown>;
      const items = e.content as unknown[] | undefined;
      if (Array.isArray(items)) items.forEach(extractItem);
    }
  }

  const text = parts.join('\n\n')
    .replace(/\n{4,}/g, '\n\n\n')
    .trim();

  return text.length > 80 ? text : null;
}

async function fetchHelloAo(bookId: string, chapter: string, sourceId: string): Promise<string | null> {
  const commentatorId = HELLOAO_COMMENTATOR_IDS[sourceId];
  if (!commentatorId) return null;

  if (HELLOAO_OT_ONLY.has(sourceId) && NT_BOOKS.has(bookId)) return null;

  const bookCode = HELLOAO_BOOK_CODES[bookId];
  if (!bookCode) return null;

  try {
    const url = `https://bible.helloao.org/api/c/${commentatorId}/${bookCode}/${chapter}.json`;
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) return null;
    const data = await res.json() as Record<string, unknown>;
    return extractHelloAoText(data);
  } catch {
    return null;
  }
}

// ── Worlddic fallback ─────────────────────────────────────────────────────────

const WORLDDIC_BOOK_MAP: Record<string, string> = {
  '1samuel': '1_samuel', '2samuel': '2_samuel',
  '1kings': '1_kings', '2kings': '2_kings',
  '1chronicles': '1_chronicles', '2chronicles': '2_chronicles',
  'songofsolomon': 'song_of_solomon',
  '1corinthians': '1_corinthians', '2corinthians': '2_corinthians',
  '1thessalonians': '1_thessalonians', '2thessalonians': '2_thessalonians',
  '1timothy': '1_timothy', '2timothy': '2_timothy',
  '1peter': '1_peter', '2peter': '2_peter',
  '1john': '1_john', '2john': '2_john', '3john': '3_john',
};

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

function decodeWorlddicJs(html: string): string | null {
  const match = html.match(/unescape\('([^']+)'\)/);
  if (!match) return null;
  try {
    const decoded = decodeURIComponent(match[1].replace(/%u([0-9A-Fa-f]{4})/g, (_, h) =>
      String.fromCharCode(parseInt(h, 16))
    ));
    return stripHtml(decoded);
  } catch {
    return null;
  }
}

function isValidContent(text: string): boolean {
  if (!text || text.length < 80) return false;
  const lower = text.toLowerCase();
  if (lower.includes('404 not found') || lower.includes('not found on this server')) return false;
  if (lower.includes('zoom infont sizezoom out') && text.length < 200) return false;
  return true;
}

async function fetchWorlddic(bookId: string, chapter: string, sourceId: string): Promise<string | null> {
  const sourceDef = COMMENTARY_SOURCES.find(s => s.id === sourceId);
  if (!sourceDef?.prefix) return null;

  const worlddicBook = WORLDDIC_BOOK_MAP[bookId] ?? bookId;
  const url = `https://worlddic.com/xe/sermon4/${sourceDef.prefix}_${worlddicBook}_${chapter}.html`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 604800 },
      headers: { 'User-Agent': 'Mozilla/5.0' },
    });
    if (!res.ok) return null;

    const html = await res.text();
    const direct = stripHtml(html);
    if (isValidContent(direct)) return direct;

    const jsDecoded = decodeWorlddicJs(html);
    if (jsDecoded && isValidContent(jsDecoded)) return jsDecoded;

    return null;
  } catch {
    return null;
  }
}

// ── AI fallback ───────────────────────────────────────────────────────────────

const BOOK_DISPLAY_NAMES: Record<string, string> = {
  genesis: 'Genesis', exodus: 'Exodus', leviticus: 'Leviticus', numbers: 'Numbers',
  deuteronomy: 'Deuteronomy', joshua: 'Joshua', judges: 'Judges', ruth: 'Ruth',
  '1samuel': '1 Samuel', '2samuel': '2 Samuel', '1kings': '1 Kings', '2kings': '2 Kings',
  '1chronicles': '1 Chronicles', '2chronicles': '2 Chronicles', ezra: 'Ezra',
  nehemiah: 'Nehemiah', esther: 'Esther', job: 'Job', psalms: 'Psalms',
  proverbs: 'Proverbs', ecclesiastes: 'Ecclesiastes', songofsolomon: 'Song of Solomon',
  isaiah: 'Isaiah', jeremiah: 'Jeremiah', lamentations: 'Lamentations', ezekiel: 'Ezekiel',
  daniel: 'Daniel', hosea: 'Hosea', joel: 'Joel', amos: 'Amos', obadiah: 'Obadiah',
  jonah: 'Jonah', micah: 'Micah', nahum: 'Nahum', habakkuk: 'Habakkuk',
  zephaniah: 'Zephaniah', haggai: 'Haggai', zechariah: 'Zechariah', malachi: 'Malachi',
  matthew: 'Matthew', mark: 'Mark', luke: 'Luke', john: 'John', acts: 'Acts',
  romans: 'Romans', '1corinthians': '1 Corinthians', '2corinthians': '2 Corinthians',
  galatians: 'Galatians', ephesians: 'Ephesians', philippians: 'Philippians',
  colossians: 'Colossians', '1thessalonians': '1 Thessalonians', '2thessalonians': '2 Thessalonians',
  '1timothy': '1 Timothy', '2timothy': '2 Timothy', titus: 'Titus', philemon: 'Philemon',
  hebrews: 'Hebrews', james: 'James', '1peter': '1 Peter', '2peter': '2 Peter',
  '1john': '1 John', '2john': '2 John', '3john': '3 John', jude: 'Jude',
  revelation: 'Revelation',
};

async function generateAiCommentary(bookId: string, chapter: string, sourceLabel: string, apiKey?: string): Promise<string | null> {
  const key = process.env.ANTHROPIC_API_KEY || apiKey;
  if (!key) return null;

  const bookName = BOOK_DISPLAY_NAMES[bookId] ?? bookId;

  try {
    const client = new Anthropic({ apiKey: key });
    const msg = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 800,
      messages: [{
        role: 'user',
        content: `You are a Bible scholar providing commentary in the style of ${sourceLabel}. Write a concise but substantive commentary on ${bookName} chapter ${chapter}. Cover: the main theme and argument of the chapter, key verse analysis, theological significance, and practical application. Write in a reverent, scholarly tone. 3–5 paragraphs. No headers, plain prose only.`,
      }],
    });
    const text = msg.content[0].type === 'text' ? msg.content[0].text : null;
    return text && text.length > 80 ? text : null;
  } catch {
    return null;
  }
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const bookId = searchParams.get('book');
  const chapter = searchParams.get('chapter');
  const source = searchParams.get('source');
  const clientApiKey = request.headers.get('x-anthropic-key') ?? undefined;

  if (!bookId || !chapter || !source) {
    return NextResponse.json({ error: 'Missing params' }, { status: 400 });
  }

  const sourceDef = COMMENTARY_SOURCES.find(s => s.id === source);
  if (!sourceDef) {
    return NextResponse.json({ error: 'Unknown source' }, { status: 400 });
  }

  if (source === 'ai') {
    const aiText = await generateAiCommentary(bookId, chapter, sourceDef.label, clientApiKey);
    if (aiText) return NextResponse.json({ text: aiText, source: sourceDef.label, book: bookId, chapter });
    return NextResponse.json({ error: 'Commentary not available.' }, { status: 404 });
  }

  // 1. Try HelloAO first (covers all 66 books, no rate limits)
  const helloAoText = await fetchHelloAo(bookId, chapter, source);
  if (helloAoText) {
    return NextResponse.json({ text: helloAoText, source: sourceDef.label, book: bookId, chapter });
  }

  // 2. Try worlddic
  const worlddicText = await fetchWorlddic(bookId, chapter, source);
  if (worlddicText) {
    return NextResponse.json({ text: worlddicText, source: sourceDef.label, book: bookId, chapter });
  }

  // 3. AI fallback
  const aiText = await generateAiCommentary(bookId, chapter, sourceDef.label, clientApiKey);
  if (aiText) {
    return NextResponse.json({ text: aiText, source: `${sourceDef.label} (AI)`, book: bookId, chapter });
  }

  return NextResponse.json({ error: 'Commentary not available for this passage.' }, { status: 404 });
}
