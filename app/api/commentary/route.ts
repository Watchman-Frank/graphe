import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { COMMENTARY_SOURCES } from '@/data/commentarySources';

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
  'galatians': 'galatians', 'ephesians': 'ephesians',
  'philippians': 'philippians', 'colossians': 'colossians',
  'titus': 'titus', 'philemon': 'philemon',
  'hebrews': 'hebrews',
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
  // Detect worlddic false-200 error pages
  if (lower.includes('404 not found') || lower.includes('not found on this server')) return false;
  if (lower.includes('zoom infont sizezoom out') && text.length < 200) return false;
  return true;
}

async function fetchWorlddic(bookId: string, chapter: string, sourceId: string): Promise<string | null> {
  const sourceDef = COMMENTARY_SOURCES.find(s => s.id === sourceId);
  if (!sourceDef) return null;

  const worlddicBook = toWorlddicBook(bookId);
  const url = `https://worlddic.com/xe/sermon4/${sourceDef.prefix}_${worlddicBook}_${chapter}.html`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 604800 },
      headers: { 'User-Agent': 'Mozilla/5.0' },
    });
    if (!res.ok) return null;

    const html = await res.text();

    // Try direct HTML strip first
    const direct = stripHtml(html);
    if (isValidContent(direct)) return direct;

    // Try decoding JavaScript-encoded content
    const jsDecoded = decodeWorlddicJs(html);
    if (jsDecoded && isValidContent(jsDecoded)) return jsDecoded;

    return null;
  } catch {
    return null;
  }
}

function getBookDisplayName(bookId: string): string {
  const names: Record<string, string> = {
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
  return names[bookId] ?? bookId;
}

async function generateAiCommentary(bookId: string, chapter: string, sourceLabel: string, apiKey?: string): Promise<string | null> {
  const key = process.env.ANTHROPIC_API_KEY || apiKey;
  if (!key) return null;

  const bookName = getBookDisplayName(bookId);

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

  // 1. Try worlddic first (free, no key needed)
  if (source !== 'ai') {
    const text = await fetchWorlddic(bookId, chapter, source);
    if (text) {
      return NextResponse.json({ text, source: sourceDef.label, book: bookId, chapter });
    }
  }

  // 2. Fall back to AI commentary
  const aiText = await generateAiCommentary(bookId, chapter, sourceDef.label, clientApiKey);
  if (aiText) {
    return NextResponse.json({ text: aiText, source: `${sourceDef.label} (AI)`, book: bookId, chapter });
  }

  return NextResponse.json({ error: 'Commentary not available for this passage.' }, { status: 404 });
}
