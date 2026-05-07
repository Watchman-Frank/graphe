'use client';
import { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ChevronLeft, ChevronRight, BookOpen, Bookmark, Highlighter,
  PlayCircle, PauseCircle, Volume2, Loader2, GraduationCap,
  BookMarked, Type, Mic2, Navigation, Link2, MessageSquare,
  ChevronDown, ChevronUp, X,
} from 'lucide-react';
import { useBibleStore } from '@/stores/bibleStore';
import { useAudioStore } from '@/stores/audioStore';
import { useBookmarksStore } from '@/stores/bookmarksStore';
import { useHighlightsStore, type HighlightColor } from '@/stores/highlightsStore';
import { useSettingsStore } from '@/stores/settingsStore';
import { getBookById, BIBLE_BOOKS } from '@/lib/bible/books';
import { cn } from '@/lib/utils/cn';
import type { BibleVerse, BiblePassage } from '@/types/bible';
import { parseCrossRef, type CrossRef } from '@/data/crossReferences';
import { getVerseCommentary } from '@/data/commentaries';
import { COMMENTARY_SOURCES } from '@/data/commentarySources';

const HIGHLIGHT_COLORS: { color: HighlightColor; label: string; cls: string }[] = [
  { color: 'yellow', label: 'Yellow', cls: 'highlight-yellow' },
  { color: 'green', label: 'Green', cls: 'highlight-green' },
  { color: 'blue', label: 'Blue', cls: 'highlight-blue' },
  { color: 'pink', label: 'Pink', cls: 'highlight-pink' },
  { color: 'purple', label: 'Purple', cls: 'highlight-purple' },
];

const FONT_SIZES = {
  sm: 'text-base',
  md: 'text-lg',
  lg: 'text-xl',
  xl: 'text-2xl',
};

const SPEEDS = [0.75, 1.0, 1.25, 1.5, 2.0];

// ── Cross-reference chip with hover preview ──────────────────────────────────

const previewCache = new Map<string, string>();
// Cache chapter cross-ref JSON keyed "book:chapter"
const crossRefChapterCache = new Map<string, Record<string, CrossRef[]>>();

const BACK_KEY = 'graphe-crossref-back';

function CrossRefChip({ crossRef }: { crossRef: CrossRef }) {
  const router = useRouter();
  const [preview, setPreview] = useState<string | null>(previewCache.get(crossRef.ref) ?? null);
  const [fetching, setFetching] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastPointerType = useRef<string>('mouse');

  function fetchPreview() {
    if (preview !== null || fetching) return;
    setFetching(true);
    fetch(`/api/bible?ref=${crossRef.ref}`)
      .then(r => r.json())
      .then(data => {
        const text: string = data.verses?.[0]?.text?.trim() ?? '';
        previewCache.set(crossRef.ref, text);
        setPreview(text);
      })
      .catch(() => setPreview(''))
      .finally(() => setFetching(false));
  }

  // Close tooltip when tapping/clicking outside
  useEffect(() => {
    if (!showTip) return;
    function onOutside(e: PointerEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setShowTip(false);
    }
    document.addEventListener('pointerdown', onOutside);
    return () => document.removeEventListener('pointerdown', onOutside);
  }, [showTip]);

  function navigate() {
    const parsed = parseCrossRef(crossRef.ref);
    if (!parsed) return;
    // Save current page so we can go back
    sessionStorage.setItem(BACK_KEY, window.location.pathname + window.location.search);
    router.push(`/bible/${parsed.book}/${parsed.chapter}?verse=${parsed.verse}`);
  }

  // Desktop: hover shows tooltip, click navigates
  function handleMouseEnter() {
    if (lastPointerType.current === 'touch') return;
    hoverTimerRef.current = setTimeout(() => {
      setShowTip(true);
      fetchPreview();
    }, 220);
  }

  function handleMouseLeave() {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    if (lastPointerType.current !== 'touch') setShowTip(false);
  }

  function handlePointerDown(e: React.PointerEvent) {
    lastPointerType.current = e.pointerType;
  }

  function handleClick(e: React.MouseEvent) {
    if (lastPointerType.current === 'touch') {
      // First tap: show tooltip. Second tap on chip when tip already open: navigate.
      if (showTip) {
        e.preventDefault();
        navigate();
      } else {
        e.preventDefault();
        setShowTip(true);
        fetchPreview();
      }
    } else {
      // Mouse click: navigate directly (tooltip shown by hover)
      navigate();
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onPointerDown={handlePointerDown}
        onClick={handleClick}
        className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold border transition-all active:scale-95"
        style={{
          background: showTip ? 'rgba(201,168,76,0.18)' : 'rgba(201,168,76,0.08)',
          borderColor: 'rgba(201,168,76,0.3)',
          color: 'var(--gold-400)',
          touchAction: 'manipulation',
        }}
      >
        <Link2 size={10} />
        {crossRef.label}
      </button>

      {showTip && (
        <div
          className="absolute bottom-full left-0 mb-2 z-50 rounded-xl border shadow-2xl text-xs leading-relaxed"
          style={{
            background: 'var(--shell-800)',
            borderColor: 'rgba(201,168,76,0.3)',
            color: 'var(--parchment-200)',
            width: '17rem',
            maxWidth: 'calc(100vw - 2rem)',
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-3 pt-2.5 pb-1.5 border-b"
            style={{ borderColor: 'rgba(201,168,76,0.15)' }}
          >
            <span className="font-bold text-xs" style={{ color: 'var(--gold-400)' }}>
              {crossRef.label}
            </span>
            <button
              onPointerDown={e => e.stopPropagation()}
              onClick={e => { e.stopPropagation(); navigate(); }}
              className="flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold border transition-colors"
              style={{
                background: 'rgba(201,168,76,0.12)',
                borderColor: 'rgba(201,168,76,0.3)',
                color: 'var(--gold-300)',
              }}
            >
              Open <ChevronRight size={10} />
            </button>
          </div>
          {/* Verse text */}
          <div className="px-3 py-2.5">
            {fetching ? (
              <Loader2 size={12} className="animate-spin" style={{ color: 'var(--shell-400)' }} />
            ) : (
              <p className="italic" style={{ color: 'var(--parchment-300)' }}>{preview || '—'}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Inline verse commentary panel ────────────────────────────────────────────

const dynamicCache = new Map<string, string>();
const patriisticChapterCache = new Map<string, Record<string, { a: string; s: string; q: string }[]>>();
const wordStudyChapterCache = new Map<string, Record<string, WordStudyEntry[]>>();

interface PatristicEntry { a: string; s: string; q: string; }
interface WordStudyEntry { t: string; g: string; s: string; c: string; tr?: string; }

function VerseCommentaryPanel({
  book,
  chapter,
  verse,
  staticCommentary,
}: {
  book: string;
  chapter: number;
  verse: number;
  staticCommentary: { mh: string; jfb: string } | null;
}) {
  const { anthropicKey } = useSettingsStore();
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState('wordstudy');
  const [dynamicContent, setDynamicContent] = useState<Record<string, string>>({});
  const [patriisticEntries, setPatriisticEntries] = useState<PatristicEntry[] | null>(null);
  const [wordStudyWords, setWordStudyWords] = useState<WordStudyEntry[] | null>(null);
  const [loading, setLoadingSource] = useState<string | null>(null);

  const staticIds = new Set(staticCommentary?.mh ? ['mh'] : []).add(staticCommentary?.jfb ? 'jfb' : '');

  async function loadWordStudy() {
    const chapKey = `${book}:${chapter}`;
    setLoadingSource('wordstudy');
    try {
      let chapData = wordStudyChapterCache.get(chapKey);
      if (!chapData) {
        const res = await fetch(`/wordstudy/${book}/${chapter}.json`);
        if (!res.ok) { setWordStudyWords([]); return; }
        chapData = await res.json() as Record<string, WordStudyEntry[]>;
        wordStudyChapterCache.set(chapKey, chapData);
      }
      setWordStudyWords(chapData[String(verse)] ?? []);
    } catch {
      setWordStudyWords([]);
    } finally {
      setLoadingSource(null);
    }
  }

  async function loadPatristic() {
    const chapKey = `${book}:${chapter}`;
    setLoadingSource('patristic');
    try {
      let chapData = patriisticChapterCache.get(chapKey);
      if (!chapData) {
        const res = await fetch(`/patristic/${book}/${chapter}.json`);
        if (!res.ok) { setPatriisticEntries([]); return; }
        chapData = await res.json() as Record<string, PatristicEntry[]>;
        patriisticChapterCache.set(chapKey, chapData);
      }
      setPatriisticEntries(chapData[String(verse)] ?? []);
    } catch {
      setPatriisticEntries([]);
    } finally {
      setLoadingSource(null);
    }
  }

  async function loadSource(id: string) {
    if (id === 'patristic') { loadPatristic(); return; }
    const cacheKey = `${book}+${chapter}+${id}`;
    if (dynamicCache.has(cacheKey)) {
      setDynamicContent(prev => ({ ...prev, [id]: dynamicCache.get(cacheKey)! }));
      return;
    }
    setLoadingSource(id);
    try {
      const headers: Record<string, string> = {};
      if (anthropicKey) headers['x-anthropic-key'] = anthropicKey;
      const res = await fetch(`/api/commentary?book=${book}&chapter=${chapter}&source=${id}`, { headers });
      const data = await res.json();
      const text: string = data.text ?? '';
      dynamicCache.set(cacheKey, text);
      setDynamicContent(prev => ({ ...prev, [id]: text }));
    } catch {
      setDynamicContent(prev => ({ ...prev, [id]: '' }));
    } finally {
      setLoadingSource(null);
    }
  }

  function handleTabClick(id: string) {
    setActiveId(id);
    if (id === 'wordstudy') { if (wordStudyWords === null) loadWordStudy(); return; }
    if (id === 'patristic') { if (patriisticEntries === null) loadPatristic(); return; }
    const isStatic = (id === 'mh' && !!staticCommentary?.mh) || (id === 'jfb' && !!staticCommentary?.jfb);
    if (!isStatic && !dynamicContent[id]) {
      loadSource(id);
    }
  }

  function handleOpen() {
    const newOpen = !open;
    setOpen(newOpen);
    if (newOpen) {
      if (activeId === 'wordstudy') { if (wordStudyWords === null) loadWordStudy(); }
      else if (activeId === 'patristic') { if (patriisticEntries === null) loadPatristic(); }
      else if (!dynamicContent[activeId]) { loadSource(activeId); }
    }
  }

  function getContent(id: string): string {
    if (id === 'mh' && staticCommentary?.mh) return staticCommentary.mh;
    if (id === 'jfb' && staticCommentary?.jfb) return staticCommentary.jfb;
    return dynamicContent[id] ?? '';
  }

  const activeContent = getContent(activeId);

  return (
    <div className="mt-2 ml-2">
      <button
        onClick={handleOpen}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all"
        style={{
          background: open ? 'rgba(201,168,76,0.12)' : 'rgba(201,168,76,0.04)',
          borderColor: 'rgba(201,168,76,0.2)',
          color: open ? 'var(--gold-300)' : 'var(--shell-400)',
        }}
      >
        <MessageSquare size={11} />
        {COMMENTARY_SOURCES.length} Commentaries
        {open ? <ChevronUp size={11} /> : <ChevronDown size={11} />}
      </button>

      {open && (
        <div
          className="mt-2 rounded-xl border"
          style={{ background: 'rgba(10,9,8,0.6)', borderColor: 'rgba(201,168,76,0.15)' }}
        >
          {/* Scrollable tab row */}
          <div
            className="flex gap-1 overflow-x-auto px-3 pt-3 pb-2"
            style={{ scrollbarWidth: 'none' }}
          >
            {COMMENTARY_SOURCES.map(src => {
              const hasStatic = (src.id === 'mh' && !!staticCommentary?.mh) || (src.id === 'jfb' && !!staticCommentary?.jfb);
              const hasLoaded = hasStatic || !!dynamicContent[src.id];
              const isActive = activeId === src.id;
              return (
                <button
                  key={src.id}
                  onClick={() => handleTabClick(src.id)}
                  className="shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all"
                  style={
                    isActive
                      ? { background: 'var(--gold-400)', color: 'var(--sepia-900)' }
                      : hasLoaded
                      ? { background: 'rgba(201,168,76,0.1)', color: 'var(--gold-400)', border: '1px solid rgba(201,168,76,0.2)' }
                      : { background: 'transparent', color: 'var(--shell-400)', border: '1px solid rgba(255,255,255,0.06)' }
                  }
                >
                  {src.label}
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="px-4 pb-4 pt-1">
            {loading === activeId ? (
              <div className="flex items-center gap-2 py-4" style={{ color: 'var(--shell-400)' }}>
                <Loader2 size={14} className="animate-spin" />
                <span className="text-xs">Loading {COMMENTARY_SOURCES.find(s => s.id === activeId)?.label}…</span>
              </div>
            ) : activeId === 'wordstudy' ? (
              wordStudyWords && wordStudyWords.length > 0 ? (
                <div className="max-h-72 overflow-y-auto">
                  <div className="flex flex-wrap gap-2 py-1">
                    {wordStudyWords.map((w, i) => (
                      <div
                        key={i}
                        className="rounded-lg px-2.5 py-2 border flex flex-col items-center min-w-[4rem]"
                        style={{ background: 'rgba(201,168,76,0.05)', borderColor: 'rgba(201,168,76,0.12)' }}
                      >
                        <span
                          className="text-sm font-bold leading-tight"
                          style={{ color: 'var(--gold-300)', fontFamily: 'serif', direction: w.tr ? 'rtl' : 'ltr' }}
                        >
                          {w.t}
                        </span>
                        {w.tr && (
                          <span className="text-[10px] italic mt-0.5" style={{ color: 'var(--shell-400)' }}>{w.tr}</span>
                        )}
                        <span className="text-[11px] font-semibold mt-1" style={{ color: 'var(--parchment-200)' }}>{w.g}</span>
                        <span className="text-[9px] mt-0.5 uppercase tracking-wide" style={{ color: 'var(--shell-500)' }}>
                          {w.s ? `${w.tr ? 'H' : 'G'}${w.s}` : ''} · {w.c}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : wordStudyWords !== null ? (
                <div className="py-3 text-center">
                  <p className="text-xs italic" style={{ color: 'var(--shell-500)' }}>No word study data for this verse.</p>
                </div>
              ) : null
            ) : activeId === 'patristic' ? (
              patriisticEntries && patriisticEntries.length > 0 ? (
                <div className="space-y-3 max-h-72 overflow-y-auto">
                  {patriisticEntries.map((entry, i) => (
                    <div
                      key={i}
                      className="rounded-lg p-3 border"
                      style={{ background: 'rgba(201,168,76,0.05)', borderColor: 'rgba(201,168,76,0.12)' }}
                    >
                      <div className="flex items-baseline gap-2 mb-1.5">
                        <span className="text-xs font-bold" style={{ color: 'var(--gold-400)' }}>{entry.a}</span>
                        {entry.s && <span className="text-xs italic truncate" style={{ color: 'var(--shell-400)' }}>{entry.s}</span>}
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--parchment-300)' }}>{entry.q}</p>
                    </div>
                  ))}
                </div>
              ) : patriisticEntries !== null ? (
                <div className="py-3 text-center">
                  <p className="text-xs italic" style={{ color: 'var(--shell-500)' }}>No Church Fathers commentary for this verse.</p>
                </div>
              ) : null
            ) : activeContent ? (
              <p
                className="text-xs leading-relaxed whitespace-pre-line max-h-72 overflow-y-auto"
                style={{ color: 'var(--parchment-300)' }}
              >
                {activeContent}
              </p>
            ) : (
              <div className="py-3 text-center">
                <p className="text-xs italic" style={{ color: 'var(--shell-500)' }}>
                  {dynamicContent[activeId] === '' ? 'Commentary not available for this passage.' : 'Click to load commentary.'}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Verse action menu ─────────────────────────────────────────────────────────

interface VerseMenuProps {
  verse: BibleVerse;
  book: string;
  chapter: number;
  onClose: () => void;
}

function VerseMenu({ verse, book, chapter, onClose }: VerseMenuProps) {
  const { addBookmark, removeBookmark, isBookmarked, bookmarks } = useBookmarksStore();
  const { addHighlight, removeHighlight, getHighlightForVerse } = useHighlightsStore();
  const bookmarked = isBookmarked(book, chapter, verse.verse);
  const highlight = getHighlightForVerse(book, chapter, verse.verse);

  return (
    <div
      className="absolute left-0 z-30 mt-1 rounded-xl border p-3 shadow-xl flex gap-2 flex-wrap"
      style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.25)', minWidth: 240 }}
    >
      <button
        onClick={() => {
          if (bookmarked) {
            const bm = bookmarks.find(b => b.book === book && b.chapter === chapter && b.verse === verse.verse);
            if (bm) removeBookmark(bm.id);
          } else {
            addBookmark({ book, chapter, verse: verse.verse, text: verse.text, color: '#C9A84C' });
          }
          onClose();
        }}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all"
        style={
          bookmarked
            ? { background: 'rgba(201,168,76,0.2)', color: 'var(--gold-300)', borderColor: 'rgba(201,168,76,0.3)' }
            : { color: 'var(--shell-400)', borderColor: 'rgba(255,255,255,0.08)' }
        }
      >
        <Bookmark size={12} /> {bookmarked ? 'Bookmarked' : 'Bookmark'}
      </button>

      {HIGHLIGHT_COLORS.map(({ color, label, cls }) => (
        <button
          key={color}
          onClick={() => {
            if (highlight?.color === color) {
              removeHighlight(book, chapter, verse.verse);
            } else {
              addHighlight({ book, chapter, verse: verse.verse, color });
            }
            onClose();
          }}
          className={cn('w-7 h-7 rounded-full border-2 transition-transform hover:scale-110', cls)}
          style={{ borderColor: highlight?.color === color ? 'white' : 'transparent' }}
          title={label}
        />
      ))}
    </div>
  );
}

// ── Go-to navigation panel ────────────────────────────────────────────────────

function GoToPanel({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [selectedBook, setSelectedBook] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('');
  const [selectedVerse, setSelectedVerse] = useState('');

  const bookMeta = BIBLE_BOOKS.find(b => b.id === selectedBook);
  const maxChapters = bookMeta?.chapters ?? 0;

  function handleGo() {
    if (!selectedBook || !selectedChapter) return;
    const path = `/bible/${selectedBook}/${selectedChapter}`;
    router.push(selectedVerse ? `${path}?verse=${selectedVerse}` : path);
    onClose();
  }

  return (
    <div
      className="absolute top-full left-0 right-0 z-40 border-b px-4 md:px-8 py-4 flex flex-wrap items-end gap-3"
      style={{
        background: 'rgba(13,12,10,0.97)',
        backdropFilter: 'blur(12px)',
        borderColor: 'rgba(201,168,76,0.15)',
      }}
    >
      <div className="flex flex-wrap items-end gap-3 w-full">
        {/* Book */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--shell-400)' }}>
            Book
          </label>
          <select
            value={selectedBook}
            onChange={e => { setSelectedBook(e.target.value); setSelectedChapter(''); setSelectedVerse(''); }}
            className="rounded-lg px-3 py-2 text-sm border"
            style={{
              background: 'var(--shell-800)',
              borderColor: 'rgba(201,168,76,0.25)',
              color: 'var(--parchment-100)',
              minWidth: 160,
            }}
          >
            <option value="">Choose book…</option>
            <optgroup label="Old Testament">
              {BIBLE_BOOKS.filter(b => b.testament === 'OT').map(b => (
                <option key={b.id} value={b.id}>{b.name}</option>
              ))}
            </optgroup>
            <optgroup label="New Testament">
              {BIBLE_BOOKS.filter(b => b.testament === 'NT').map(b => (
                <option key={b.id} value={b.id}>{b.name}</option>
              ))}
            </optgroup>
          </select>
        </div>

        {/* Chapter */}
        {selectedBook && (
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--shell-400)' }}>
              Chapter
            </label>
            <select
              value={selectedChapter}
              onChange={e => { setSelectedChapter(e.target.value); setSelectedVerse(''); }}
              className="rounded-lg px-3 py-2 text-sm border"
              style={{
                background: 'var(--shell-800)',
                borderColor: 'rgba(201,168,76,0.25)',
                color: 'var(--parchment-100)',
                minWidth: 100,
              }}
            >
              <option value="">Chapter…</option>
              {Array.from({ length: maxChapters }, (_, i) => i + 1).map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
        )}

        {/* Verse (optional) */}
        {selectedChapter && (
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--shell-400)' }}>
              Verse <span style={{ color: 'var(--shell-600)' }}>(optional)</span>
            </label>
            <input
              type="number"
              min={1}
              max={200}
              placeholder="e.g. 16"
              value={selectedVerse}
              onChange={e => setSelectedVerse(e.target.value)}
              className="rounded-lg px-3 py-2 text-sm border w-24"
              style={{
                background: 'var(--shell-800)',
                borderColor: 'rgba(201,168,76,0.25)',
                color: 'var(--parchment-100)',
              }}
            />
          </div>
        )}

        <div className="flex gap-2">
          <button
            onClick={handleGo}
            disabled={!selectedBook || !selectedChapter}
            className="px-5 py-2 rounded-lg text-sm font-bold transition-all hover:scale-105 disabled:opacity-40"
            style={{ background: 'var(--gold-400)', color: 'var(--sepia-900)' }}
          >
            Go
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-lg border"
            style={{ borderColor: 'rgba(201,168,76,0.2)', color: 'var(--shell-400)' }}
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

interface Props {
  book: string;
  chapter: number;
  initialVerse?: number;
}

export function BibleChapterView({ book, chapter, initialVerse }: Props) {
  const router = useRouter();
  const { translation, fontSize, setFontSize, setTranslation, setCurrentPassage, addToRecentlyRead } = useBibleStore();
  const { isPlaying, isLoading: audioLoading, playbackSpeed, audioUrl, setPlaying, setPlaybackSpeed, setAudioUrl, setLoading } = useAudioStore();
  const { elevenLabs } = useSettingsStore();
  const highlightsStore = useHighlightsStore();

  const [passage, setPassage] = useState<BiblePassage | null>(null);
  const [loading, setLoadingPassage] = useState(true);
  const [error, setError] = useState('');
  const [selectedVerse, setSelectedVerse] = useState<BibleVerse | null>(null);
  const [crossRefData, setCrossRefData] = useState<Record<string, CrossRef[]>>({});
  const [showGoTo, setShowGoTo] = useState(false);
  const [backTarget, setBackTarget] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const chunkQueueRef = useRef<string[]>([]);
  const chunkIndexRef = useRef<number>(0);
  const [chunkProgress, setChunkProgress] = useState({ current: 0, total: 0 });

  const bookMeta = getBookById(book);
  const totalChapters = bookMeta?.chapters ?? 1;
  const prevChapter = chapter > 1 ? chapter - 1 : null;
  const nextChapter = chapter < totalChapters ? chapter + 1 : null;

  // Pick up the back-navigation target set by CrossRefChip
  useEffect(() => {
    const saved = sessionStorage.getItem(BACK_KEY);
    setBackTarget(saved ?? null);
  }, [book, chapter]);

  // Load cross-references for this chapter
  useEffect(() => {
    const chapKey = `${book}:${chapter}`;
    const cached = crossRefChapterCache.get(chapKey);
    if (cached) { setCrossRefData(cached); return; }
    fetch(`/crossrefs/${book}/${chapter}.json`)
      .then(r => r.ok ? r.json() : {})
      .then((data: Record<string, CrossRef[]>) => {
        crossRefChapterCache.set(chapKey, data);
        setCrossRefData(data);
      })
      .catch(() => setCrossRefData({}));
  }, [book, chapter]);

  useEffect(() => {
    setLoadingPassage(true);
    setError('');
    // Reset audio when chapter changes
    setPlaying(false);
    setAudioUrl(null);
    chunkQueueRef.current = [];
    chunkIndexRef.current = 0;
    setChunkProgress({ current: 0, total: 0 });
    if (audioRef.current) {
      audioRef.current.src = '';
    }
    const ref = `${book.replace(/\s+/g, '+')}+${chapter}`;
    fetch(`/api/bible?ref=${ref}&translation=${translation}`)
      .then(r => r.json())
      .then(data => {
        if (data.error) throw new Error(data.error);
        setPassage(data);
        setCurrentPassage(book, chapter);
        addToRecentlyRead(book, chapter);
      })
      .catch(() => setError('Could not load this passage. Please check your connection.'))
      .finally(() => setLoadingPassage(false));
  }, [book, chapter, translation]);

  // Scroll to initial verse after passage loads
  useEffect(() => {
    if (!initialVerse || loading || !passage) return;
    const el = document.getElementById(`v${initialVerse}`);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
    }
  }, [initialVerse, loading, passage]);

  // Audio
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.play().catch(() => setPlaying(false));
    else audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = playbackSpeed;
  }, [playbackSpeed]);

  function buildChunks(verses: BibleVerse[]): string[] {
    const MAX = 4500;
    const chunks: string[] = [];
    let current = '';
    for (const v of verses) {
      const part = `Verse ${v.verse}. ${v.text} `;
      if (current.length + part.length > MAX && current.length > 0) {
        chunks.push(current.trim());
        current = part;
      } else {
        current += part;
      }
    }
    if (current.trim()) chunks.push(current.trim());
    return chunks;
  }

  async function playChunk(text: string, index: number, total: number) {
    setLoading(true);
    setChunkProgress({ current: index + 1, total });
    try {
      const res = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text,
          voiceId: elevenLabs.voiceId,
          stability: elevenLabs.stability,
          similarityBoost: elevenLabs.similarityBoost,
          style: elevenLabs.style,
          speakerBoost: elevenLabs.speakerBoost,
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: 'TTS failed' }));
        throw new Error(err.error ?? 'TTS failed');
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
      if (audioRef.current) {
        audioRef.current.src = url;
        await audioRef.current.play();
        setPlaying(true);
      }
    } catch (e: any) {
      const msg = e?.message ?? '';
      if (msg.includes('API key')) {
        alert('ElevenLabs API key not set. Go to Settings → ElevenLabs API Key and enter your key.');
      } else {
        alert(`Audio failed: ${msg || 'Check your ElevenLabs API key and voice in Settings.'}`);
      }
      setPlaying(false);
      chunkQueueRef.current = [];
    } finally {
      setLoading(false);
    }
  }

  async function generateAudio() {
    if (!passage || !elevenLabs.voiceId) return;
    const chunks = buildChunks(passage.verses);
    chunkQueueRef.current = chunks;
    chunkIndexRef.current = 0;
    await playChunk(chunks[0], 0, chunks.length);
  }

  async function handleAudioEnded() {
    setPlaying(false);
    const next = chunkIndexRef.current + 1;
    const queue = chunkQueueRef.current;
    if (next < queue.length) {
      chunkIndexRef.current = next;
      await playChunk(queue[next], next, queue.length);
    } else {
      // Finished all chunks
      chunkQueueRef.current = [];
      chunkIndexRef.current = 0;
      setChunkProgress({ current: 0, total: 0 });
    }
  }

  const hasVoice = !!elevenLabs.voiceId;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div
        className="sticky top-0 z-20 flex items-center justify-between px-4 md:px-8 py-3 border-b"
        style={{ background: 'rgba(13,12,10,0.9)', backdropFilter: 'blur(12px)', borderColor: 'rgba(201,168,76,0.12)' }}
      >
        <div className="flex items-center gap-3">
          <Link href="/bible" className="p-1.5 rounded-lg transition-colors" style={{ color: 'var(--shell-400)' }}>
            <BookOpen size={18} />
          </Link>
          <span className="font-bold text-sm md:text-base" style={{ color: 'var(--parchment-100)' }}>
            {bookMeta?.name ?? book} {chapter}
          </span>
          <div className="flex items-center gap-0.5 p-0.5 rounded-full" style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}>
            {(['kjv', 'nkjv'] as const).map(t => (
              <button
                key={t}
                onClick={() => setTranslation(t)}
                className="px-2 py-0.5 rounded-full text-xs font-bold transition-all"
                style={translation === t
                  ? { background: 'var(--gold-400)', color: 'var(--sepia-900)' }
                  : { color: 'var(--shell-400)' }}
              >
                {t.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Go to verse */}
          <button
            onClick={() => setShowGoTo(o => !o)}
            className="p-1.5 rounded-lg border text-xs font-bold transition-all"
            title="Go to verse"
            style={
              showGoTo
                ? { background: 'rgba(201,168,76,0.2)', borderColor: 'rgba(201,168,76,0.4)', color: 'var(--gold-300)' }
                : { borderColor: 'rgba(201,168,76,0.2)', color: 'var(--gold-400)' }
            }
          >
            <Navigation size={15} />
          </button>

          {/* Font size */}
          <button
            onClick={() => {
              const sizes = ['sm', 'md', 'lg', 'xl'] as const;
              const i = sizes.indexOf(fontSize);
              setFontSize(sizes[(i + 1) % 4]);
            }}
            className="p-1.5 rounded-lg border text-xs font-bold"
            style={{ borderColor: 'rgba(201,168,76,0.2)', color: 'var(--gold-400)' }}
            title="Change font size"
          >
            <Type size={15} />
          </button>

          {/* Study link */}
          <Link
            href={`/study/commentary/${book}+${chapter}`}
            className="p-1.5 rounded-lg border transition-colors"
            style={{ borderColor: 'rgba(201,168,76,0.2)', color: 'var(--gold-400)' }}
            title="Study this passage"
          >
            <GraduationCap size={15} />
          </Link>

          {/* Read to Me */}
          {hasVoice ? (
            <div className="flex items-center gap-1">
              {audioLoading ? (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border" style={{ borderColor: 'rgba(201,168,76,0.3)', color: 'var(--gold-400)' }}>
                  <Loader2 size={13} className="animate-spin" />
                  <span className="text-xs font-bold hidden sm:inline">Loading…</span>
                </div>
              ) : isPlaying ? (
                <button
                  onClick={() => setPlaying(false)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all"
                  style={{ background: 'rgba(201,168,76,0.15)', borderColor: 'rgba(201,168,76,0.4)', color: 'var(--gold-300)' }}
                >
                  <PauseCircle size={14} />
                  <span className="text-xs font-bold hidden sm:inline">Pause</span>
                </button>
              ) : (
                <button
                  onClick={audioUrl ? () => setPlaying(true) : generateAudio}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all hover:scale-105"
                  style={{ background: 'rgba(201,168,76,0.08)', borderColor: 'rgba(201,168,76,0.3)', color: 'var(--gold-400)' }}
                >
                  <PlayCircle size={14} />
                  <span className="text-xs font-bold hidden sm:inline">{audioUrl ? 'Play' : 'Read to Me'}</span>
                </button>
              )}
              <select
                value={playbackSpeed}
                onChange={e => setPlaybackSpeed(Number(e.target.value))}
                className="text-xs rounded px-1 py-0.5 border"
                style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.2)', color: 'var(--gold-400)' }}
              >
                {SPEEDS.map(s => <option key={s} value={s}>{s}×</option>)}
              </select>
            </div>
          ) : (
            <Link
              href="/settings"
              className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg border transition-all hover:scale-105"
              style={{ background: 'rgba(201,168,76,0.06)', borderColor: 'rgba(201,168,76,0.2)', color: 'var(--gold-400)' }}
            >
              <Mic2 size={12} /> Read to Me
            </Link>
          )}
        </div>

        {/* Go-to panel */}
        {showGoTo && <GoToPanel onClose={() => setShowGoTo(false)} />}
      </div>

      {/* Back-navigation banner — shown after jumping from a cross-reference */}
      {backTarget && (
        <div
          className="flex items-center gap-2 px-4 py-2 border-b"
          style={{ background: 'rgba(201,168,76,0.07)', borderColor: 'rgba(201,168,76,0.15)' }}
        >
          <button
            onClick={() => {
              sessionStorage.removeItem(BACK_KEY);
              setBackTarget(null);
              router.push(backTarget);
            }}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all active:scale-95"
            style={{ background: 'rgba(201,168,76,0.12)', borderColor: 'rgba(201,168,76,0.3)', color: 'var(--gold-300)' }}
          >
            <ChevronLeft size={13} />
            Back to previous passage
          </button>
          <button
            onClick={() => { sessionStorage.removeItem(BACK_KEY); setBackTarget(null); }}
            className="ml-auto p-1 rounded"
            style={{ color: 'var(--shell-500)' }}
            aria-label="Dismiss"
          >
            <X size={13} />
          </button>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 px-4 md:px-12 lg:px-24 py-8 max-w-3xl mx-auto w-full">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <Loader2 size={32} className="animate-spin" style={{ color: 'var(--gold-400)' }} />
            <p style={{ color: 'var(--shell-400)' }}>Loading scripture…</p>
          </div>
        ) : error ? (
          <div className="text-center py-32">
            <p className="mb-2 font-semibold" style={{ color: 'var(--parchment-200)' }}>{error}</p>
            <button onClick={() => window.location.reload()} className="text-sm" style={{ color: 'var(--gold-400)' }}>Try again</button>
          </div>
        ) : passage ? (
          <>
            {/* Chapter heading */}
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-1" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia,serif' }}>
                {bookMeta?.name ?? book}
              </h1>
              <p className="text-lg" style={{ color: 'var(--gold-400)' }}>Chapter {chapter}</p>
              <div className="w-16 h-0.5 mx-auto mt-4" style={{ background: 'linear-gradient(to right, transparent, var(--gold-400), transparent)' }} />
            </div>

            {/* Verses — block layout for cross-refs + commentary */}
            <div className={cn('scripture-font', FONT_SIZES[fontSize])}>
              {passage.verses.map(verse => {
                const hl = highlightsStore.getHighlightForVerse(book, chapter, verse.verse);
                const crossRefs: CrossRef[] = crossRefData[String(verse.verse)] ?? [];
                const commentary = getVerseCommentary(book, chapter, verse.verse);

                return (
                  <div
                    key={verse.verse}
                    id={`v${verse.verse}`}
                    className="mb-5 pb-4 border-b"
                    style={{ borderColor: 'rgba(255,255,255,0.04)' }}
                  >
                    {/* Verse text */}
                    <div
                      className={cn(
                        'relative cursor-pointer rounded px-2 py-1 transition-colors leading-relaxed',
                        hl ? `highlight-${hl.color}` : 'hover:bg-white/5',
                      )}
                      style={{ color: 'var(--parchment-100)' }}
                      onClick={() =>
                        setSelectedVerse(selectedVerse?.verse === verse.verse ? null : verse)
                      }
                    >
                      <sup
                        className="verse-num mr-1.5 select-none"
                        style={{ color: 'var(--gold-400)', fontWeight: 700, fontSize: '0.7em' }}
                      >
                        {verse.verse}
                      </sup>
                      {verse.text}
                      {selectedVerse?.verse === verse.verse && (
                        <VerseMenu
                          verse={verse}
                          book={book}
                          chapter={chapter}
                          onClose={() => setSelectedVerse(null)}
                        />
                      )}
                    </div>

                    {/* Cross references */}
                    {crossRefs.length > 0 && (
                      <div className="flex gap-1.5 flex-wrap mt-2 ml-2">
                        {crossRefs.map(cr => (
                          <CrossRefChip key={cr.ref} crossRef={cr} />
                        ))}
                      </div>
                    )}

                    {/* Inline commentary — always available via dynamic fetch */}
                    <VerseCommentaryPanel
                      book={book}
                      chapter={chapter}
                      verse={verse.verse}
                      staticCommentary={commentary}
                    />
                  </div>
                );
              })}
            </div>
          </>
        ) : null}
      </div>

      {/* Chapter navigation */}
      <div
        className="sticky bottom-0 flex items-center justify-between px-4 md:px-8 py-3 border-t"
        style={{ background: 'rgba(13,12,10,0.95)', backdropFilter: 'blur(12px)', borderColor: 'rgba(201,168,76,0.12)' }}
      >
        {prevChapter ? (
          <Link
            href={`/bible/${book}/${prevChapter}`}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold transition-all hover:scale-105"
            style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.2)', color: 'var(--parchment-200)' }}
          >
            <ChevronLeft size={16} /> Chapter {prevChapter}
          </Link>
        ) : <div />}

        <div className="flex items-center gap-1">
          {isPlaying && (
            <div className="flex items-center gap-0.5 mr-2">
              {[1, 2, 3, 4, 5].map(i => <div key={i} className="wave-bar" />)}
            </div>
          )}
          {chunkProgress.total > 1 && (isPlaying || audioLoading) && (
            <span className="text-xs font-bold mr-2" style={{ color: 'var(--gold-500)' }}>
              Part {chunkProgress.current}/{chunkProgress.total}
            </span>
          )}
          <BookMarked size={14} style={{ color: 'var(--gold-400)' }} />
          <span className="text-xs font-medium" style={{ color: 'var(--shell-400)' }}>
            {chapter} / {totalChapters}
          </span>
        </div>

        {nextChapter ? (
          <Link
            href={`/bible/${book}/${nextChapter}`}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold transition-all hover:scale-105"
            style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.2)', color: 'var(--parchment-200)' }}
          >
            Chapter {nextChapter} <ChevronRight size={16} />
          </Link>
        ) : (
          <Link
            href="/bible"
            className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold"
            style={{ background: 'rgba(201,168,76,0.1)', borderColor: 'rgba(201,168,76,0.3)', color: 'var(--gold-300)' }}
          >
            Next Book <ChevronRight size={16} />
          </Link>
        )}
      </div>

      <audio ref={audioRef} onEnded={handleAudioEnded} style={{ display: 'none' }} />
    </div>
  );
}
