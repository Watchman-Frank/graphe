'use client';
import Link from 'next/link';
import { useJournalStore } from '@/stores/journalStore';
import { format } from 'date-fns';
import { Plus, Search, BookOpen, Trash2, NotebookPen } from 'lucide-react';
import { useState } from 'react';
import type { JournalEntry } from '@/types/journal';

const MOOD_EMOJI: Record<string, string> = {
  grateful: '🙏', hopeful: '✨', peaceful: '🕊️', struggling: '🌧️', joyful: '🌟', reflective: '💭',
};

const MOOD_COLORS: Record<string, string> = {
  grateful: '#B8E87B', hopeful: '#E8C97B', peaceful: '#7BE8B8',
  struggling: '#7BB8E8', joyful: '#E87BB8', reflective: '#A87BE8',
};

function JournalCard({ entry, onDelete }: { entry: JournalEntry; onDelete: (id: string) => void }) {
  const preview = entry.content.replace(/<[^>]*>/g, '').slice(0, 160);
  const moodColor = entry.mood ? MOOD_COLORS[entry.mood] : 'var(--gold-400)';

  return (
    <div
      className="rounded-2xl border overflow-hidden transition-all duration-200 hover:scale-[1.01] group"
      style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.12)' }}
    >
      {/* Card header stripe */}
      <div className="h-1" style={{ background: `linear-gradient(to right, ${moodColor}60, transparent)` }} />

      <div className="p-5">
        {/* Date & mood */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold" style={{ color: 'var(--shell-400)' }}>
            {format(new Date(entry.createdAt), 'EEEE, MMMM d, yyyy')}
          </span>
          {entry.mood && (
            <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: `${moodColor}18`, color: moodColor }}>
              {MOOD_EMOJI[entry.mood]} {entry.mood}
            </span>
          )}
        </div>

        {/* Title */}
        <Link href={`/journal/${entry.id}`}>
          <h3 className="font-bold text-base mb-2 leading-tight" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia,serif' }}>
            {entry.title || 'Untitled Entry'}
          </h3>
        </Link>

        {/* Verse reference */}
        {entry.verseReference && (
          <div className="flex items-center gap-1.5 mb-2">
            <BookOpen size={11} style={{ color: 'var(--gold-400)' }} />
            <span className="text-xs font-semibold" style={{ color: 'var(--gold-400)' }}>{entry.verseReference}</span>
          </div>
        )}

        {/* Preview */}
        <p className="text-sm leading-relaxed line-clamp-3 mb-3" style={{ color: 'var(--shell-400)' }}>
          {preview || 'No content yet…'}
        </p>

        {/* Tags */}
        {entry.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {entry.tags.map(tag => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(201,168,76,0.1)', color: 'var(--gold-400)' }}>
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <span className="text-xs" style={{ color: 'var(--shell-500)' }}>
            {format(new Date(entry.updatedAt), 'h:mm a')}
          </span>
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Link href={`/journal/${entry.id}`} className="text-xs font-semibold" style={{ color: 'var(--gold-400)' }}>
              Read →
            </Link>
            <button
              onClick={(e) => { e.preventDefault(); onDelete(entry.id); }}
              className="p-1 rounded-lg"
              style={{ color: 'var(--shell-500)' }}
            >
              <Trash2 size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function JournalPage() {
  const { entries, deleteEntry, searchEntries } = useJournalStore();
  const [query, setQuery] = useState('');

  const displayed = query ? searchEntries(query) : entries;

  return (
    <div className="px-4 py-8 md:px-10 md:py-12">
      {/* Header */}
      <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--gold-400)' }}>
            Spiritual Journal
          </p>
          <h1 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia,serif' }}>
            My Journal
          </h1>
          <p className="text-sm mt-1" style={{ color: 'var(--shell-400)' }}>
            {entries.length} {entries.length === 1 ? 'entry' : 'entries'}
          </p>
        </div>

        <Link
          href="/journal/new"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all hover:scale-105"
          style={{ background: 'linear-gradient(135deg, var(--gold-400), var(--gold-600))', color: 'var(--sepia-900)' }}
        >
          <Plus size={16} /> New Entry
        </Link>
      </div>

      {/* Search */}
      {entries.length > 0 && (
        <div className="relative mb-6">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: 'var(--shell-400)' }} />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search journal entries…"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none"
            style={{
              background: 'var(--shell-800)',
              borderColor: 'rgba(201,168,76,0.15)',
              color: 'var(--parchment-200)',
            }}
          />
        </div>
      )}

      {/* Entries grid */}
      {displayed.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4" style={{ background: 'rgba(201,168,76,0.1)' }}>
            <NotebookPen size={28} style={{ color: 'var(--gold-400)' }} />
          </div>
          <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--parchment-200)' }}>
            {query ? 'No entries found' : 'Begin your journey'}
          </h3>
          <p className="text-sm mb-6 max-w-xs" style={{ color: 'var(--shell-400)' }}>
            {query
              ? 'Try a different search term.'
              : 'Write your first journal entry. Record what God is speaking to you through His Word.'}
          </p>
          {!query && (
            <Link
              href="/journal/new"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm"
              style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--gold-300)', border: '1px solid rgba(201,168,76,0.3)' }}
            >
              <Plus size={16} /> Write First Entry
            </Link>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {displayed.map(entry => (
            <JournalCard key={entry.id} entry={entry} onDelete={deleteEntry} />
          ))}
        </div>
      )}
    </div>
  );
}
