'use client';
import { useRef, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useJournalStore } from '@/stores/journalStore';
import { format } from 'date-fns';
import { ChevronLeft, Save, BookOpen, Tag, X } from 'lucide-react';
import Link from 'next/link';
import { useDebounce } from 'use-debounce';

const MOODS = [
  { id: 'grateful', emoji: '🙏', label: 'Grateful' },
  { id: 'joyful', emoji: '🌟', label: 'Joyful' },
  { id: 'peaceful', emoji: '🕊️', label: 'Peaceful' },
  { id: 'hopeful', emoji: '✨', label: 'Hopeful' },
  { id: 'reflective', emoji: '💭', label: 'Reflective' },
  { id: 'struggling', emoji: '🌧️', label: 'Struggling' },
];

const MOOD_COLORS: Record<string, string> = {
  grateful: '#B8E87B', hopeful: '#E8C97B', peaceful: '#7BE8B8',
  struggling: '#7BB8E8', joyful: '#E87BB8', reflective: '#A87BE8',
};

export default function NewJournalPage() {
  const router = useRouter();
  const { createEntry } = useJournalStore();
  const editorRef = useRef<HTMLDivElement>(null);

  const [title, setTitle] = useState('');
  const [mood, setMood] = useState('');
  const [verseRef, setVerseRef] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);
  const today = new Date();

  function addTag(e: React.KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const t = tagInput.trim().toLowerCase().replace(/^#/, '');
      if (t && !tags.includes(t)) setTags(prev => [...prev, t]);
      setTagInput('');
    }
  }

  function removeTag(tag: string) {
    setTags(prev => prev.filter(t => t !== tag));
  }

  function handleSave() {
    const content = editorRef.current?.innerHTML ?? '';
    if (!title && !content) return;
    setSaving(true);
    const id = createEntry({
      title: title || format(today, 'MMMM d, yyyy'),
      content,
      mood: mood as any,
      verseReference: verseRef || undefined,
      tags,
    });
    router.push(`/journal/${id}`);
  }

  const moodColor = mood ? MOOD_COLORS[mood] : 'var(--gold-400)';

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div
        className="sticky top-0 z-20 flex items-center justify-between px-4 md:px-8 py-3 border-b"
        style={{ background: 'rgba(13,12,10,0.95)', backdropFilter: 'blur(12px)', borderColor: 'rgba(201,168,76,0.12)' }}
      >
        <Link href="/journal" className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--shell-400)' }}>
          <ChevronLeft size={16} /> Journal
        </Link>

        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 px-4 py-1.5 rounded-xl text-sm font-bold transition-all hover:scale-105"
          style={{ background: 'linear-gradient(135deg, var(--gold-400), var(--gold-600))', color: 'var(--sepia-900)' }}
        >
          <Save size={14} /> Save Entry
        </button>
      </div>

      {/* Paper */}
      <div
        className="flex-1 max-w-3xl mx-auto w-full px-4 md:px-8 py-10"
      >
        {/* Parchment card */}
        <div
          className="rounded-3xl overflow-hidden shadow-2xl"
          style={{
            background: 'var(--parchment-100)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          }}
        >
          {/* Mood color strip */}
          {mood && (
            <div className="h-2" style={{ background: `linear-gradient(to right, ${moodColor}, ${moodColor}40)` }} />
          )}

          <div className="px-8 md:px-12 py-8">
            {/* Date */}
            <p className="text-xs font-bold uppercase tracking-[0.15em] mb-6" style={{ color: 'var(--shell-500)' }}>
              {format(today, 'EEEE, MMMM d, yyyy')}
            </p>

            {/* Title */}
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Title…"
              className="w-full text-3xl md:text-4xl font-bold mb-6 outline-none bg-transparent placeholder:opacity-30"
              style={{ color: 'var(--sepia-900)', fontFamily: 'Georgia,serif' }}
            />

            {/* Verse reference */}
            <div className="flex items-center gap-2 mb-6">
              <BookOpen size={14} style={{ color: 'var(--shell-500)' }} />
              <input
                type="text"
                value={verseRef}
                onChange={e => setVerseRef(e.target.value)}
                placeholder="Scripture reference (e.g. John 3:16)"
                className="text-sm outline-none bg-transparent flex-1"
                style={{ color: 'var(--sepia-700)' }}
              />
            </div>

            {/* Divider */}
            <div className="mb-6" style={{ borderBottom: '1px solid rgba(44,24,16,0.12)' }} />

            {/* Editor */}
            <div
              ref={editorRef}
              contentEditable
              suppressContentEditableWarning
              data-placeholder="Begin writing your thoughts, reflections, prayers…"
              className="journal-editor focus:outline-none"
            />

            {/* Bottom tools */}
            <div className="mt-8 pt-6 border-t space-y-4" style={{ borderColor: 'rgba(44,24,16,0.10)' }}>
              {/* Mood */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--shell-500)' }}>How are you feeling?</p>
                <div className="flex flex-wrap gap-2">
                  {MOODS.map(m => (
                    <button
                      key={m.id}
                      onClick={() => setMood(mood === m.id ? '' : m.id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all"
                      style={
                        mood === m.id
                          ? { background: `${MOOD_COLORS[m.id]}20`, borderColor: MOOD_COLORS[m.id], color: MOOD_COLORS[m.id] }
                          : { background: 'rgba(44,24,16,0.06)', borderColor: 'rgba(44,24,16,0.12)', color: 'var(--sepia-500)' }
                      }
                    >
                      {m.emoji} {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--shell-500)' }}>Tags</p>
                <div className="flex flex-wrap items-center gap-2">
                  {tags.map(tag => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--gold-600)' }}
                    >
                      #{tag}
                      <button onClick={() => removeTag(tag)}><X size={10} /></button>
                    </span>
                  ))}
                  <div className="flex items-center gap-1">
                    <Tag size={12} style={{ color: 'var(--shell-500)' }} />
                    <input
                      value={tagInput}
                      onChange={e => setTagInput(e.target.value)}
                      onKeyDown={addTag}
                      placeholder="Add tag, press Enter"
                      className="text-xs outline-none bg-transparent"
                      style={{ color: 'var(--sepia-700)' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
