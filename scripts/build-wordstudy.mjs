#!/usr/bin/env node
/**
 * Processes mybibletoolbox-data macula YAML files into compact per-chapter JSON
 * files stored at public/wordstudy/{bookId}/{chapter}.json
 *
 * Usage:
 *   node scripts/build-wordstudy.mjs /path/to/mybibletoolbox-data
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const yaml = require('../node_modules/js-yaml/index.js');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_DIR = process.argv[2] ?? '/tmp/mybibletoolbox';
const COMMENTARY_DIR = path.join(REPO_DIR, 'commentary');
const OUT_DIR = path.join(__dirname, '..', 'public', 'wordstudy');

// USFM 3.0 book codes → app book IDs
const BOOK_CODE_MAP = {
  GEN: 'genesis', EXO: 'exodus', LEV: 'leviticus', NUM: 'numbers', DEU: 'deuteronomy',
  JOS: 'joshua', JDG: 'judges', RUT: 'ruth',
  '1SA': '1samuel', '2SA': '2samuel', '1KI': '1kings', '2KI': '2kings',
  '1CH': '1chronicles', '2CH': '2chronicles',
  EZR: 'ezra', NEH: 'nehemiah', EST: 'esther',
  JOB: 'job', PSA: 'psalms', PRO: 'proverbs', ECC: 'ecclesiastes', SNG: 'songofsolomon',
  ISA: 'isaiah', JER: 'jeremiah', LAM: 'lamentations',
  EZK: 'ezekiel', DAN: 'daniel', HOS: 'hosea',
  JOL: 'joel', AMO: 'amos', OBA: 'obadiah',
  JON: 'jonah', MIC: 'micah', NAM: 'nahum',
  HAB: 'habakkuk', ZEP: 'zephaniah', HAG: 'haggai',
  ZEC: 'zechariah', MAL: 'malachi',
  MAT: 'matthew', MRK: 'mark', LUK: 'luke', JHN: 'john',
  ACT: 'acts', ROM: 'romans',
  '1CO': '1corinthians', '2CO': '2corinthians',
  GAL: 'galatians', EPH: 'ephesians',
  PHP: 'philippians', COL: 'colossians',
  '1TH': '1thessalonians', '2TH': '2thessalonians',
  '1TI': '1timothy', '2TI': '2timothy',
  TIT: 'titus', PHM: 'philemon', HEB: 'hebrews',
  JAS: 'james', '1PE': '1peter', '2PE': '2peter',
  '1JN': '1john', '2JN': '2john', '3JN': '3john',
  JUD: 'jude', REV: 'revelation',
};

// bookId → chapter → verse → [ {t, g, s, c} ]
const byBook = {};

function addVerse(bookId, chapter, verse, words) {
  if (!byBook[bookId]) byBook[bookId] = {};
  if (!byBook[bookId][chapter]) byBook[bookId][chapter] = {};
  byBook[bookId][chapter][verse] = words;
}

console.log(`Scanning ${COMMENTARY_DIR}…`);

const bookDirs = fs.readdirSync(COMMENTARY_DIR).filter(d =>
  BOOK_CODE_MAP[d] && fs.statSync(path.join(COMMENTARY_DIR, d)).isDirectory()
);

console.log(`Processing ${bookDirs.length} books…`);
let verseCount = 0;
let errorCount = 0;

for (const bookCode of bookDirs) {
  const bookId = BOOK_CODE_MAP[bookCode];
  const bookDir = path.join(COMMENTARY_DIR, bookCode);
  const chapterDirs = fs.readdirSync(bookDir).filter(d =>
    fs.statSync(path.join(bookDir, d)).isDirectory()
  );

  for (const chapDir of chapterDirs) {
    const chapter = parseInt(chapDir, 10);
    const chapPath = path.join(bookDir, chapDir);
    const verseDirs = fs.readdirSync(chapPath).filter(d =>
      fs.statSync(path.join(chapPath, d)).isDirectory()
    );

    for (const verseDir of verseDirs) {
      const verse = parseInt(verseDir, 10);
      const maculaFile = path.join(chapPath, verseDir,
        `${bookCode}-${chapDir}-${verseDir}-macula.yaml`);
      if (!fs.existsSync(maculaFile)) continue;

      try {
        const content = fs.readFileSync(maculaFile, 'utf8');
        const doc = yaml.load(content);
        if (!doc || !Array.isArray(doc.words)) continue;

        const words = [];
        for (const w of doc.words) {
          // Skip articles and punctuation-only entries
          const cls = w?.morphology?.class ?? '';
          if (cls === 'det' || cls === '') continue;
          const gloss = w?.translation?.gloss ?? '';
          if (!gloss || gloss === '-') continue;

          words.push({
            t: w.text ?? '',
            g: gloss,
            s: String(w?.lexical?.strong ?? ''),
            c: cls,
            ...(w.transliteration ? { tr: w.transliteration } : {}),
          });
        }

        if (words.length > 0) {
          addVerse(bookId, chapter, verse, words);
          verseCount++;
        }
      } catch {
        errorCount++;
      }
    }
  }

  process.stdout.write(`  ${bookCode} (${bookId})\n`);
}

console.log(`\nProcessed ${verseCount} verses (${errorCount} errors).`);

// Write per-chapter JSON files
fs.mkdirSync(OUT_DIR, { recursive: true });
let fileCount = 0;
let totalBytes = 0;
const index = {};

for (const [bookId, chapters] of Object.entries(byBook)) {
  const bookDir = path.join(OUT_DIR, bookId);
  fs.mkdirSync(bookDir, { recursive: true });
  index[bookId] = [];

  for (const [chap, verses] of Object.entries(chapters)) {
    const outPath = path.join(bookDir, `${chap}.json`);
    const json = JSON.stringify(verses);
    fs.writeFileSync(outPath, json, 'utf8');
    totalBytes += Buffer.byteLength(json, 'utf8');
    fileCount++;
    index[bookId].push(parseInt(chap, 10));
  }

  index[bookId].sort((a, b) => a - b);
}

fs.writeFileSync(path.join(OUT_DIR, 'index.json'), JSON.stringify(index));

console.log(`Wrote ${fileCount} chapter files to ${OUT_DIR}`);
console.log(`Total size: ${(totalBytes / 1024 / 1024).toFixed(1)} MB`);
