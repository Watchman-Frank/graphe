'use client';
import Link from 'next/link';
import { BIBLE_BOOKS, OLD_TESTAMENT, NEW_TESTAMENT, CATEGORY_LABELS } from '@/lib/bible/books';
import { useBibleStore } from '@/stores/bibleStore';
import { BookOpen } from 'lucide-react';

const CATEGORY_ORDER = ['law', 'history', 'poetry', 'major-prophets', 'minor-prophets', 'gospels', 'acts', 'epistles', 'prophecy'];

const CATEGORY_COLORS: Record<string, string> = {
  'law': '#C9A84C',
  'history': '#7BB8E8',
  'poetry': '#E87BB8',
  'major-prophets': '#B8E87B',
  'minor-prophets': '#7BE8B8',
  'gospels': '#E8A87B',
  'acts': '#C4617A',
  'epistles': '#A87BE8',
  'prophecy': '#E8C97B',
};

function BookGrid({ books }: { books: typeof BIBLE_BOOKS }) {
  const grouped = CATEGORY_ORDER.reduce((acc, cat) => {
    const cats = books.filter(b => b.category === cat);
    if (cats.length) acc[cat] = cats;
    return acc;
  }, {} as Record<string, typeof BIBLE_BOOKS>);

  return (
    <div className="space-y-8">
      {Object.entries(grouped).map(([cat, bks]) => (
        <div key={cat}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full" style={{ background: CATEGORY_COLORS[cat] }} />
            <h3 className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--shell-400)' }}>
              {CATEGORY_LABELS[cat]}
            </h3>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
            {bks.map(book => (
              <Link
                key={book.id}
                href={`/bible/${book.id}/1`}
                className="rounded-lg p-2.5 text-center border transition-all duration-150 hover:scale-105"
                style={{
                  background: `${CATEGORY_COLORS[book.category]}08`,
                  borderColor: `${CATEGORY_COLORS[book.category]}25`,
                }}
              >
                <p className="text-xs font-bold mb-0.5" style={{ color: CATEGORY_COLORS[book.category] }}>
                  {book.abbreviation}
                </p>
                <p className="text-xs leading-tight" style={{ color: 'var(--parchment-200)' }}>
                  {book.name}
                </p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--shell-500)' }}>
                  {book.chapters} ch
                </p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function BiblePage() {
  const { recentlyRead, translation, setTranslation } = useBibleStore();

  return (
    <div className="px-4 py-8 md:px-10 md:py-12">
      <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--gold-400)' }}>
            Holy Bible
          </p>
          <h1 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia,serif' }}>
            Choose a Book
          </h1>
        </div>

        {/* Translation toggle */}
        <div className="flex items-center gap-1 p-1 rounded-lg border" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.2)' }}>
          {(['kjv', 'nkjv'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTranslation(t)}
              className="px-4 py-1.5 rounded-md text-sm font-bold transition-all"
              style={
                translation === t
                  ? { background: 'var(--gold-400)', color: 'var(--sepia-900)' }
                  : { color: 'var(--shell-400)' }
              }
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Recent */}
      {recentlyRead.length > 0 && (
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--shell-400)' }}>
            Continue Reading
          </p>
          <div className="flex gap-2 flex-wrap">
            {recentlyRead.slice(0, 5).map(r => (
              <Link
                key={`${r.book}-${r.chapter}`}
                href={`/bible/${r.book}/${r.chapter}`}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium transition-all hover:scale-105"
                style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.2)', color: 'var(--parchment-200)' }}
              >
                <BookOpen size={14} style={{ color: 'var(--gold-400)' }} />
                {r.book.charAt(0).toUpperCase() + r.book.slice(1)} {r.chapter}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Old Testament */}
      <div className="mb-10">
        <h2 className="text-lg font-bold mb-6 pb-2 border-b" style={{ color: 'var(--gold-300)', borderColor: 'rgba(201,168,76,0.15)' }}>
          Old Testament
        </h2>
        <BookGrid books={OLD_TESTAMENT} />
      </div>

      {/* New Testament */}
      <div>
        <h2 className="text-lg font-bold mb-6 pb-2 border-b" style={{ color: 'var(--gold-300)', borderColor: 'rgba(201,168,76,0.15)' }}>
          New Testament
        </h2>
        <BookGrid books={NEW_TESTAMENT} />
      </div>
    </div>
  );
}
