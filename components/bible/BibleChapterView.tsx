'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ChevronLeft, ChevronRight, BookOpen, Bookmark, Highlighter,
  PlayCircle, PauseCircle, Volume2, Loader2, GraduationCap,
  BookMarked, Type, Mic2
} from 'lucide-react';
import { useBibleStore } from '@/stores/bibleStore';
import { useAudioStore } from '@/stores/audioStore';
import { useBookmarksStore } from '@/stores/bookmarksStore';
import { useHighlightsStore, type HighlightColor } from '@/stores/highlightsStore';
import { useSettingsStore } from '@/stores/settingsStore';
import { getBookById } from '@/lib/bible/books';
import { cn } from '@/lib/utils/cn';
import type { BibleVerse, BiblePassage } from '@/types/bible';

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

interface VerseMenuProps {
  verse: BibleVerse;
  book: string;
  chapter: number;
  onClose: () => void;
}

function VerseMenu({ verse, book, chapter, onClose }: VerseMenuProps) {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarksStore();
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
            // remove
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
          style={{
            borderColor: highlight?.color === color ? 'white' : 'transparent',
          }}
          title={label}
        />
      ))}
    </div>
  );
}

interface Props {
  book: string;
  chapter: number;
}

export function BibleChapterView({ book, chapter }: Props) {
  const router = useRouter();
  const { translation, fontSize, setFontSize, setCurrentPassage, addToRecentlyRead } = useBibleStore();
  const { isPlaying, isLoading: audioLoading, playbackSpeed, audioUrl, setPlaying, setPlaybackSpeed, setAudioUrl, setLoading } = useAudioStore();
  const { elevenLabs } = useSettingsStore();
  const highlightsStore = useHighlightsStore();

  const [passage, setPassage] = useState<BiblePassage | null>(null);
  const [loading, setLoadingPassage] = useState(true);
  const [error, setError] = useState('');
  const [selectedVerse, setSelectedVerse] = useState<BibleVerse | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const bookMeta = getBookById(book);
  const totalChapters = bookMeta?.chapters ?? 1;
  const prevChapter = chapter > 1 ? chapter - 1 : null;
  const nextChapter = chapter < totalChapters ? chapter + 1 : null;

  useEffect(() => {
    setLoadingPassage(true);
    setError('');
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

  // Audio control
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => setPlaying(false));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = playbackSpeed;
  }, [playbackSpeed]);

  async function generateAudio() {
    if (!passage || !elevenLabs.apiKey || !elevenLabs.voiceId) return;
    setLoading(true);
    const text = passage.verses.map(v => `Verse ${v.verse}. ${v.text}`).join(' ');
    try {
      const res = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: text.slice(0, 4000),
          voiceId: elevenLabs.voiceId,
          apiKey: elevenLabs.apiKey,
          stability: elevenLabs.stability,
          similarityBoost: elevenLabs.similarityBoost,
          style: elevenLabs.style,
          speakerBoost: elevenLabs.speakerBoost,
        }),
      });
      if (!res.ok) throw new Error();
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
      if (audioRef.current) {
        audioRef.current.src = url;
        audioRef.current.play();
        setPlaying(true);
      }
    } catch {
      alert('Audio generation failed. Check your ElevenLabs API key in Settings.');
    } finally {
      setLoading(false);
    }
  }

  const hasVoice = !!elevenLabs.apiKey && !!elevenLabs.voiceId;

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
          <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--gold-400)' }}>
            {translation.toUpperCase()}
          </span>
        </div>

        <div className="flex items-center gap-2">
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

          {/* Audio */}
          {hasVoice ? (
            <div className="flex items-center gap-1">
              {audioLoading ? (
                <Loader2 size={20} className="animate-spin" style={{ color: 'var(--gold-400)' }} />
              ) : isPlaying ? (
                <button onClick={() => setPlaying(false)} style={{ color: 'var(--gold-400)' }}>
                  <PauseCircle size={22} />
                </button>
              ) : (
                <button onClick={audioUrl ? () => setPlaying(true) : generateAudio} style={{ color: 'var(--gold-400)' }}>
                  <PlayCircle size={22} />
                </button>
              )}

              {/* Speed */}
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
            <Link href="/settings" className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-lg border" style={{ borderColor: 'rgba(201,168,76,0.2)', color: 'var(--shell-400)' }}>
              <Mic2 size={12} /> Voice
            </Link>
          )}
        </div>
      </div>

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

            {/* Verses */}
            <div className={cn('scripture-font', FONT_SIZES[fontSize])} style={{ color: 'var(--parchment-100)' }}>
              {passage.verses.map(verse => {
                const hl = highlightsStore.getHighlightForVerse(book, chapter, verse.verse);
                return (
                  <span
                    key={verse.verse}
                    className={cn(
                      'relative cursor-pointer transition-colors rounded px-0.5',
                      hl ? `highlight-${hl.color}` : 'hover:bg-white/5'
                    )}
                    onClick={() =>
                      setSelectedVerse(selectedVerse?.verse === verse.verse ? null : verse)
                    }
                  >
                    <sup className="verse-num">{verse.verse}</sup>
                    {verse.text}{' '}
                    {selectedVerse?.verse === verse.verse && (
                      <VerseMenu
                        verse={verse}
                        book={book}
                        chapter={chapter}
                        onClose={() => setSelectedVerse(null)}
                      />
                    )}
                  </span>
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
            <div className="flex items-center gap-0.5 mr-3">
              {[1,2,3,4,5].map(i => <div key={i} className="wave-bar" />)}
            </div>
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

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        onEnded={() => setPlaying(false)}
        style={{ display: 'none' }}
      />
    </div>
  );
}
