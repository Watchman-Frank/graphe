'use client';
import Link from 'next/link';
import { BIBLE_BOOKS, OLD_TESTAMENT, NEW_TESTAMENT, CATEGORY_LABELS } from '@/lib/bible/books';

const CATEGORY_COLORS: Record<string, string> = {
  'law': '#C9A84C', 'history': '#7BB8E8', 'poetry': '#E87BB8',
  'major-prophets': '#B8E87B', 'minor-prophets': '#7BE8B8',
  'gospels': '#E8A87B', 'acts': '#C4617A', 'epistles': '#A87BE8', 'prophecy': '#E8C97B',
};

export default function BooksPage() {
  return (
    <div className="px-4 py-8 md:px-10 md:py-12">
      <div className="mb-10">
        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--gold-400)' }}>Deep Learning</p>
        <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia,serif' }}>
          Books of the Bible
        </h1>
        <p className="text-sm" style={{ color: 'var(--shell-400)' }}>
          Choose a book for its full overview — authorship, date, themes, summaries and deep-dive study path.
        </p>
      </div>

      {[
        { label: 'Old Testament', books: OLD_TESTAMENT },
        { label: 'New Testament', books: NEW_TESTAMENT },
      ].map(({ label, books }) => (
        <div key={label} className="mb-12">
          <h2 className="text-lg font-bold mb-6 pb-2 border-b" style={{ color: 'var(--gold-300)', borderColor: 'rgba(201,168,76,0.15)' }}>{label}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {books.map(book => {
              const color = CATEGORY_COLORS[book.category];
              return (
                <Link
                  key={book.id}
                  href={`/books/${book.id}`}
                  className="rounded-xl p-4 border flex items-start gap-3 transition-all duration-150 hover:scale-[1.01]"
                  style={{ background: `${color}06`, borderColor: `${color}20` }}
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-xs font-black" style={{ background: `${color}18`, color }}>
                    {book.abbreviation}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-1">
                      <p className="font-bold text-sm" style={{ color: 'var(--parchment-100)' }}>{book.name}</p>
                      <span className="text-xs flex-shrink-0 mt-0.5" style={{ color: 'var(--shell-500)' }}>{book.chapters} ch</span>
                    </div>
                    <p className="text-xs mb-1" style={{ color }}>{CATEGORY_LABELS[book.category]}</p>
                    {book.theme && (
                      <p className="text-xs leading-tight line-clamp-2" style={{ color: 'var(--shell-400)' }}>{book.theme}</p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
