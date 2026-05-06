'use client';
import { use, useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useJournalStore } from '@/stores/journalStore';
import { format } from 'date-fns';
import { ChevronLeft, Save, BookOpen, Trash2, Edit3, X, Tag } from 'lucide-react';
import { useDebounce } from 'use-debounce';

const MOOD_COLORS: Record<string, string> = {
  grateful: '#B8E87B', hopeful: '#E8C97B', peaceful: '#7BE8B8',
  struggling: '#7BB8E8', joyful: '#E87BB8', reflective: '#A87BE8',
};

const MOOD_EMOJI: Record<string, string> = {
  grateful: '🙏', hopeful: '✨', peaceful: '🕊️', struggling: '🌧️', joyful: '🌟', reflective: '💭',
};

const MOODS = [
  { id: 'grateful', emoji: '🙏', label: 'Grateful' },
  { id: 'joyful', emoji: '🌟', label: 'Joyful' },
  { id: 'peaceful', emoji: '🕊️', label: 'Peaceful' },
  { id: 'hopeful', emoji: '✨', label: 'Hopeful' },
  { id: 'reflective', emoji: '💭', label: 'Reflective' },
  { id: 'struggling', emoji: '🌧️', label: 'Struggling' },
];

interface Props {
  params: Promise<{ entryId: string }>;
}

export default function JournalEntryPage({ params }: Props) {
  const { entryId } = use(params);
  const router = useRouter();
  const { getEntry, updateEntry, deleteEntry } = useJournalStore();
  const entry = getEntry(entryId);

  const editorRef = useRef<HTMLDivElement>(null);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(entry?.title ?? '');
  const [mood, setMood] = useState(entry?.mood ?? '');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>(entry?.tags ?? []);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (editorRef.current && entry) {
      editorRef.current.innerHTML = entry.content;
    }
  }, [entry, editing]);

  if (!entry) {
    return (
      <div className="px-4 py-12 text-center">
        <p style={{ color: 'var(--parchment-200)' }}>Entry not found.</p>
        <Link href="/journal" className="text-sm mt-2 inline-block" style={{ color: 'var(--gold-400)' }}>← Back to Journal</Link>
      </div>
    );
  }

  function handleSave() {
    const content = editorRef.current?.innerHTML ?? '';
    updateEntry(entryId, { title, content, mood: mood as any, tags });
    setSaved(true);
    setEditing(false);
    setTimeout(() => setSaved(false), 2000);
  }

  function handleDelete() {
    if (confirm('Delete this journal entry?')) {
      deleteEntry(entryId);
      router.push('/journal');
    }
  }

  function addTag(e: React.KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const t = tagInput.trim().toLowerCase().replace(/^#/, '');
      if (t && !tags.includes(t)) setTags(prev => [...prev, t]);
      setTagInput('');
    }
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
        <div className="flex items-center gap-2">
          {saved && <span className="text-xs font-medium" style={{ color: '#B8E87B' }}>Saved ✓</span>}
          {editing ? (
            <button onClick={handleSave} className="flex items-center gap-2 px-4 py-1.5 rounded-xl text-sm font-bold" style={{ background: 'linear-gradient(135deg, var(--gold-400), var(--gold-600))', color: 'var(--sepia-900)' }}>
              <Save size={14} /> Save
            </button>
          ) : (
            <button onClick={() => setEditing(true)} className="flex items-center gap-2 px-4 py-1.5 rounded-xl text-sm font-bold border" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.2)', color: 'var(--gold-400)' }}>
              <Edit3 size={14} /> Edit
            </button>
          )}
          <button onClick={handleDelete} className="p-2 rounded-xl border" style={{ borderColor: 'rgba(255,80,80,0.2)', color: 'rgba(255,100,100,0.7)' }}>
            <Trash2 size={14} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-3xl mx-auto w-full px-4 md:px-8 py-10">
        <div
          className="rounded-3xl overflow-hidden shadow-2xl"
          style={{ background: 'var(--parchment-100)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
        >
          {mood && <div className="h-2" style={{ background: `linear-gradient(to right, ${moodColor}, ${moodColor}40)` }} />}

          <div className="px-8 md:px-12 py-8">
            {/* Date */}
            <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: 'var(--shell-500)' }}>
              {format(new Date(entry.createdAt), 'EEEE, MMMM d, yyyy')}
              {entry.updatedAt !== entry.createdAt && (
                <span className="ml-2 normal-case font-normal">· edited {format(new Date(entry.updatedAt), 'MMM d')}</span>
              )}
            </p>

            {/* Title */}
            {editing ? (
              <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="w-full text-3xl md:text-4xl font-bold mb-6 outline-none bg-transparent"
                style={{ color: 'var(--sepia-900)', fontFamily: 'Georgia,serif' }}
              />
            ) : (
              <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--sepia-900)', fontFamily: 'Georgia,serif' }}>
                {entry.title || 'Untitled'}
              </h1>
            )}

            {/* Verse */}
            {entry.verseReference && (
              <div className="flex items-center gap-2 mb-5 pb-4 border-b" style={{ borderColor: 'rgba(44,24,16,0.1)' }}>
                <BookOpen size={14} style={{ color: 'var(--shell-500)' }} />
                <span className="text-sm font-semibold" style={{ color: 'var(--sepia-700)' }}>{entry.verseReference}</span>
              </div>
            )}

            {/* Body */}
            <div
              ref={editorRef}
              contentEditable={editing}
              suppressContentEditableWarning
              className="journal-editor"
              style={{ pointerEvents: editing ? 'auto' : 'none' }}
              dangerouslySetInnerHTML={editing ? undefined : { __html: entry.content }}
            />

            {/* Mood & Tags (view) */}
            {!editing && (
              <div className="mt-6 pt-4 border-t flex flex-wrap items-center gap-3" style={{ borderColor: 'rgba(44,24,16,0.1)' }}>
                {entry.mood && (
                  <span className="text-xs px-3 py-1 rounded-full font-semibold" style={{ background: `${MOOD_COLORS[entry.mood]}20`, color: MOOD_COLORS[entry.mood] }}>
                    {MOOD_EMOJI[entry.mood]} {entry.mood}
                  </span>
                )}
                {entry.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(201,168,76,0.12)', color: 'var(--gold-600)' }}>
                    #{t}
                  </span>
                ))}
              </div>
            )}

            {/* Edit mode: mood & tags */}
            {editing && (
              <div className="mt-8 pt-6 border-t space-y-4" style={{ borderColor: 'rgba(44,24,16,0.10)' }}>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--shell-500)' }}>Mood</p>
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
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--shell-500)' }}>Tags</p>
                  <div className="flex flex-wrap items-center gap-2">
                    {tags.map(tag => (
                      <span key={tag} className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--gold-600)' }}>
                        #{tag} <button onClick={() => setTags(t => t.filter(x => x !== tag))}><X size={10} /></button>
                      </span>
                    ))}
                    <div className="flex items-center gap-1">
                      <Tag size={12} style={{ color: 'var(--shell-500)' }} />
                      <input value={tagInput} onChange={e => setTagInput(e.target.value)} onKeyDown={addTag} placeholder="Add tag…" className="text-xs outline-none bg-transparent" style={{ color: 'var(--sepia-700)' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
