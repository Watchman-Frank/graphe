'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { CHARACTER_SUMMARIES, CHARACTER_CATEGORIES } from '@/data/characters';
import { Search, BookOpen, Filter } from 'lucide-react';

const TESTAMENT_FILTERS = ['All', 'OT', 'NT', 'Both'] as const;

const CATEGORY_COLORS: Record<string, string> = {
  'Patriarch': '#C9A84C',
  'King / Poet / Sage': '#B8E87B',
  'Prophet': '#E8C47B',
  'Apostle': '#7BB8E8',
  'Judge / Prophet': '#E8A87B',
  'Military Leader / Prophet': '#A87BE8',
  'Disciple': '#7BE8D4',
  'Martyr / Deacon': '#E87B7B',
  'Queen': '#E87BB8',
  'Other': '#A8A8A8',
};

export default function CharactersPage() {
  const [search, setSearch] = useState('');
  const [testament, setTestament] = useState<'All' | 'OT' | 'NT' | 'Both'>('All');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => {
    return CHARACTER_SUMMARIES.filter(c => {
      const q = search.toLowerCase();
      const matchesSearch = !q || c.name.toLowerCase().includes(q) || c.oneLiner.toLowerCase().includes(q) || c.era.toLowerCase().includes(q);
      const matchesTestament = testament === 'All' || c.testament === testament;
      const matchesCategory = category === 'All' || c.category === category;
      return matchesSearch && matchesTestament && matchesCategory;
    });
  }, [search, testament, category]);

  return (
    <div className="px-4 py-8 md:px-10 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <Link href="/study" className="text-xs font-bold uppercase tracking-widest mb-2 inline-block" style={{ color: 'var(--shell-400)' }}>
          ← Back to Study
        </Link>
        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--gold-400)' }}>✦ Character Study</p>
        <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia,serif' }}>
          Biblical Characters
        </h1>
        <p className="text-sm leading-relaxed max-w-2xl" style={{ color: 'var(--shell-400)' }}>
          Study the lives of every major biblical figure — their calling, failures, faith, typology of Christ, and the eternal lessons their lives teach.
        </p>
      </div>

      {/* Search & Filters */}
      <div className="mb-6 space-y-3">
        <div className="relative">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: 'var(--shell-400)' }} />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search characters, eras, themes…"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border outline-none text-sm"
            style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.2)', color: 'var(--parchment-200)' }}
          />
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          <Filter size={13} style={{ color: 'var(--shell-400)' }} />
          {TESTAMENT_FILTERS.map(t => (
            <button
              key={t}
              onClick={() => setTestament(t)}
              className="px-3 py-1 rounded-lg text-xs font-bold border transition-all"
              style={testament === t
                ? { background: 'rgba(201,168,76,0.2)', borderColor: 'rgba(201,168,76,0.5)', color: 'var(--gold-300)' }
                : { background: 'var(--shell-800)', borderColor: 'rgba(255,255,255,0.07)', color: 'var(--shell-400)' }
              }
            >
              {t === 'All' ? 'All Testaments' : t === 'OT' ? 'Old Testament' : t === 'NT' ? 'New Testament' : 'Both'}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCategory('All')}
            className="px-3 py-1 rounded-lg text-xs font-bold border transition-all"
            style={category === 'All'
              ? { background: 'rgba(201,168,76,0.2)', borderColor: 'rgba(201,168,76,0.5)', color: 'var(--gold-300)' }
              : { background: 'var(--shell-800)', borderColor: 'rgba(255,255,255,0.07)', color: 'var(--shell-400)' }
            }
          >
            All Categories
          </button>
          {CHARACTER_CATEGORIES.map(cat => {
            const color = CATEGORY_COLORS[cat] ?? '#A8A8A8';
            return (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className="px-3 py-1 rounded-lg text-xs font-bold border transition-all"
                style={category === cat
                  ? { background: `${color}22`, borderColor: `${color}80`, color }
                  : { background: 'var(--shell-800)', borderColor: 'rgba(255,255,255,0.07)', color: 'var(--shell-400)' }
                }
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results count */}
      <p className="text-xs mb-4" style={{ color: 'var(--shell-500)' }}>
        {filtered.length} character{filtered.length !== 1 ? 's' : ''}
        {search || testament !== 'All' || category !== 'All' ? ' matching filters' : ' in database'}
      </p>

      {/* Character grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filtered.map(character => {
          const color = CATEGORY_COLORS[character.category] ?? '#A8A8A8';
          return (
            <Link
              key={character.id}
              href={`/study/characters/${character.id}`}
              className="rounded-2xl border p-4 flex flex-col gap-2 transition-all hover:scale-[1.02] group"
              style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.1)' }}
            >
              {/* Name + badge */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-base leading-tight" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia,serif' }}>
                    {character.name}
                  </h3>
                  {character.hebrewGreek && (
                    <span className="text-sm" style={{ color: 'var(--gold-400)', fontFamily: 'serif' }}>{character.hebrewGreek}</span>
                  )}
                </div>
                <span
                  className="flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{ background: `${color}18`, color }}
                >
                  {character.testament}
                </span>
              </div>

              {/* Name meaning */}
              <p className="text-xs italic" style={{ color: 'var(--gold-500)' }}>"{character.nameMeaning}"</p>

              {/* One liner */}
              <p className="text-xs leading-relaxed flex-1" style={{ color: 'var(--shell-300)' }}>{character.oneLiner}</p>

              {/* Category + era */}
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs font-semibold" style={{ color }}>{character.category}</span>
                <span className="text-xs" style={{ color: 'var(--shell-500)' }}>{character.era}</span>
              </div>

              {/* Key books */}
              <div className="flex flex-wrap gap-1">
                {character.keyBooks.slice(0, 3).map(b => (
                  <span key={b} className="text-xs px-1.5 py-0.5 rounded font-medium" style={{ background: 'rgba(201,168,76,0.08)', color: 'var(--parchment-300)' }}>
                    {b}
                  </span>
                ))}
              </div>
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="py-16 text-center">
          <BookOpen size={32} className="mx-auto mb-3" style={{ color: 'var(--shell-600)' }} />
          <p className="font-bold" style={{ color: 'var(--parchment-300)' }}>No characters found</p>
          <p className="text-sm mt-1" style={{ color: 'var(--shell-400)' }}>Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
}
