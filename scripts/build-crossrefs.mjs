#!/usr/bin/env node
/**
 * Converts OpenBible.info cross-references TSV into per-chapter JSON files
 * at public/crossrefs/{bookId}/{chapter}.json
 *
 * Data source: https://a.openbible.info/data/cross-references.zip (CC-BY)
 * Format: "Gen.1.1\tRev.21.6\t56"
 *
 * Usage:
 *   node scripts/build-crossrefs.mjs [/path/to/cross_references.txt]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TSV_PATH = process.argv[2] ?? '/tmp/cross_references.txt';
const OUT_DIR = path.join(__dirname, '..', 'public', 'crossrefs');

// OpenBible book abbreviations → app book IDs
const BOOK_MAP = {
  Gen: 'genesis', Exod: 'exodus', Lev: 'leviticus', Num: 'numbers', Deut: 'deuteronomy',
  Josh: 'joshua', Judg: 'judges', Ruth: 'ruth',
  '1Sam': '1samuel', '2Sam': '2samuel', '1Kgs': '1kings', '2Kgs': '2kings',
  '1Chr': '1chronicles', '2Chr': '2chronicles',
  Ezra: 'ezra', Neh: 'nehemiah', Esth: 'esther',
  Job: 'job', Ps: 'psalms', Prov: 'proverbs', Eccl: 'ecclesiastes', Song: 'songofsolomon',
  Isa: 'isaiah', Jer: 'jeremiah', Lam: 'lamentations', Ezek: 'ezekiel', Dan: 'daniel',
  Hos: 'hosea', Joel: 'joel', Amos: 'amos', Obad: 'obadiah',
  Jonah: 'jonah', Mic: 'micah', Nah: 'nahum', Hab: 'habakkuk',
  Zeph: 'zephaniah', Hag: 'haggai', Zech: 'zechariah', Mal: 'malachi',
  Matt: 'matthew', Mark: 'mark', Luke: 'luke', John: 'john', Acts: 'acts',
  Rom: 'romans', '1Cor': '1corinthians', '2Cor': '2corinthians',
  Gal: 'galatians', Eph: 'ephesians', Phil: 'philippians', Col: 'colossians',
  '1Thess': '1thessalonians', '2Thess': '2thessalonians',
  '1Tim': '1timothy', '2Tim': '2timothy',
  Titus: 'titus', Phlm: 'philemon', Heb: 'hebrews',
  Jas: 'james', '1Pet': '1peter', '2Pet': '2peter',
  '1John': '1john', '2John': '2john', '3John': '3john',
  Jude: 'jude', Rev: 'revelation',
};

// Display labels for book IDs
const BOOK_LABELS = {
  genesis:'Gen', exodus:'Exod', leviticus:'Lev', numbers:'Num', deuteronomy:'Deut',
  joshua:'Josh', judges:'Judg', ruth:'Ruth',
  '1samuel':'1 Sam', '2samuel':'2 Sam', '1kings':'1 Kgs', '2kings':'2 Kgs',
  '1chronicles':'1 Chr', '2chronicles':'2 Chr',
  ezra:'Ezra', nehemiah:'Neh', esther:'Esth',
  job:'Job', psalms:'Ps', proverbs:'Prov', ecclesiastes:'Eccl', songofsolomon:'Song',
  isaiah:'Isa', jeremiah:'Jer', lamentations:'Lam', ezekiel:'Ezek', daniel:'Dan',
  hosea:'Hos', joel:'Joel', amos:'Amos', obadiah:'Obad',
  jonah:'Jonah', micah:'Mic', nahum:'Nah', habakkuk:'Hab',
  zephaniah:'Zeph', haggai:'Hag', zechariah:'Zech', malachi:'Mal',
  matthew:'Matt', mark:'Mark', luke:'Luke', john:'John', acts:'Acts',
  romans:'Rom', '1corinthians':'1 Cor', '2corinthians':'2 Cor',
  galatians:'Gal', ephesians:'Eph', philippians:'Phil', colossians:'Col',
  '1thessalonians':'1 Thess', '2thessalonians':'2 Thess',
  '1timothy':'1 Tim', '2timothy':'2 Tim',
  titus:'Titus', philemon:'Phlm', hebrews:'Heb',
  james:'Jas', '1peter':'1 Pet', '2peter':'2 Pet',
  '1john':'1 John', '2john':'2 John', '3john':'3 John',
  jude:'Jude', revelation:'Rev',
};

// Minimum vote threshold — negative votes = disputed, low = weak
const MIN_VOTES = 1;
// Max cross-refs per verse to keep (ordered by votes desc)
const MAX_PER_VERSE = 8;

function parseRef(raw) {
  // e.g. "Gen.1.1" or "1Sam.3.4"
  const parts = raw.split('.');
  if (parts.length < 3) return null;
  const verseNum = parseInt(parts[parts.length - 1], 10);
  const chapNum = parseInt(parts[parts.length - 2], 10);
  const bookAbbr = parts.slice(0, parts.length - 2).join('.');
  const bookId = BOOK_MAP[bookAbbr];
  if (!bookId || isNaN(chapNum) || isNaN(verseNum)) return null;
  return { bookId, chapter: chapNum, verse: verseNum };
}

function makeLabel(bookId, chapter, verse) {
  const abbr = BOOK_LABELS[bookId] ?? bookId;
  return `${abbr} ${chapter}:${verse}`;
}

// Structure: byChapter[bookId][chapter][verse] = [ {ref, label, votes}, ... ]
const byChapter = {};

console.log(`Reading ${TSV_PATH}…`);
const lines = fs.readFileSync(TSV_PATH, 'utf8').split('\n');

let parsed = 0;
let skipped = 0;

for (const line of lines) {
  if (!line || line.startsWith('From') || line.startsWith('#')) continue;
  const parts = line.split('\t');
  if (parts.length < 3) continue;

  const votes = parseInt(parts[2], 10);
  if (votes < MIN_VOTES) { skipped++; continue; }

  const from = parseRef(parts[0].trim());
  const to = parseRef(parts[1].trim());
  if (!from || !to) { skipped++; continue; }

  // Store: from-verse → to-verse
  const bk = from.bookId;
  const ch = from.chapter;
  const vs = from.verse;

  if (!byChapter[bk]) byChapter[bk] = {};
  if (!byChapter[bk][ch]) byChapter[bk][ch] = {};
  if (!byChapter[bk][ch][vs]) byChapter[bk][ch][vs] = [];

  const toRef = `${to.bookId}+${to.chapter}:${to.verse}`;
  const label = makeLabel(to.bookId, to.chapter, to.verse);
  byChapter[bk][ch][vs].push({ ref: toRef, label, votes });
  parsed++;
}

console.log(`Parsed ${parsed} refs (${skipped} skipped below threshold)`);

// Sort each verse's refs by votes desc and cap at MAX_PER_VERSE
for (const bk of Object.keys(byChapter)) {
  for (const ch of Object.keys(byChapter[bk])) {
    for (const vs of Object.keys(byChapter[bk][ch])) {
      byChapter[bk][ch][vs].sort((a, b) => b.votes - a.votes);
      byChapter[bk][ch][vs] = byChapter[bk][ch][vs]
        .slice(0, MAX_PER_VERSE)
        .map(({ ref, label }) => ({ ref, label })); // drop votes from output
    }
  }
}

// Write per-chapter files
fs.mkdirSync(OUT_DIR, { recursive: true });
let fileCount = 0;
let totalBytes = 0;
const index = {};

for (const [bk, chapters] of Object.entries(byChapter)) {
  const bookDir = path.join(OUT_DIR, bk);
  fs.mkdirSync(bookDir, { recursive: true });
  index[bk] = [];

  for (const [ch, verses] of Object.entries(chapters)) {
    const outPath = path.join(bookDir, `${ch}.json`);
    const json = JSON.stringify(verses);
    fs.writeFileSync(outPath, json, 'utf8');
    totalBytes += Buffer.byteLength(json, 'utf8');
    fileCount++;
    index[bk].push(parseInt(ch, 10));
  }
  index[bk].sort((a, b) => a - b);
}

fs.writeFileSync(path.join(OUT_DIR, 'index.json'), JSON.stringify(index));

console.log(`Wrote ${fileCount} chapter files to ${OUT_DIR}`);
console.log(`Total size: ${(totalBytes / 1024 / 1024).toFixed(1)} MB`);
