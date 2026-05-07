'use client';
import { use } from 'react';
import Link from 'next/link';
import { getBookById } from '@/lib/bible/books';
import { BOOK_STUDIES } from '@/data/bookStudies';
import { ChevronLeft, BookOpen, GraduationCap, MessageSquare } from 'lucide-react';

interface Props {
  params: Promise<{ book: string }>;
}

export default function BookDetailPage({ params }: Props) {
  const { book } = use(params);
  const meta = getBookById(book);
  const details = BOOK_STUDIES[book];

  if (!meta) {
    return (
      <div className="px-4 py-12 text-center">
        <p style={{ color: 'var(--parchment-200)' }}>Book not found.</p>
        <Link href="/books" className="text-sm mt-2 inline-block" style={{ color: 'var(--gold-400)' }}>← Back to Books</Link>
      </div>
    );
  }

  return (
    <div className="px-4 py-8 md:px-10 md:py-12 max-w-4xl">
      <div className="flex items-center gap-3 mb-8">
        <Link href="/books" className="p-1.5 rounded-lg" style={{ color: 'var(--shell-400)' }}>
          <ChevronLeft size={18} />
        </Link>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold-400)' }}>
            {meta.testament === 'OT' ? 'Old Testament' : 'New Testament'} · {meta.chapters} Chapters
          </p>
          <h1 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia,serif' }}>
            {meta.name}
          </h1>
        </div>
      </div>

      {/* Meta grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { label: 'Author', value: meta.author ?? 'Unknown' },
          { label: 'Written', value: meta.dateWritten ?? 'Unknown' },
          { label: 'Chapters', value: meta.chapters.toString() },
          { label: 'Key Verse', value: meta.keyVerse ?? '—' },
        ].map(({ label, value }) => (
          <div key={label} className="rounded-xl p-3 border" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.12)' }}>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--shell-400)' }}>{label}</p>
            <p className="text-sm font-bold" style={{ color: 'var(--parchment-200)' }}>{value}</p>
          </div>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mb-8">
        <Link href={`/bible/${book}/1`} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold border transition-all hover:scale-105" style={{ background: 'rgba(201,168,76,0.12)', borderColor: 'rgba(201,168,76,0.3)', color: 'var(--gold-300)' }}>
          <BookOpen size={14} /> Start Reading
        </Link>
        <Link href={`/study/commentary/${book}+1`} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold border transition-all hover:scale-105" style={{ background: 'var(--shell-800)', borderColor: 'rgba(255,255,255,0.08)', color: 'var(--shell-400)' }}>
          <MessageSquare size={14} /> Commentary
        </Link>
      </div>

      {!details ? (
        <div className="rounded-2xl p-8 border text-center" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.12)' }}>
          <GraduationCap size={32} className="mx-auto mb-3" style={{ color: 'var(--gold-400)' }} />
          <p className="font-bold mb-1" style={{ color: 'var(--parchment-200)' }}>Deep study coming soon</p>
          <p className="text-sm" style={{ color: 'var(--shell-400)' }}>Full book overview for {meta.name} is being prepared.</p>
          <p className="text-sm mt-2" style={{ color: 'var(--shell-400)' }}>
            Theme: <span style={{ color: 'var(--parchment-200)' }}>{meta.theme}</span>
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Overview */}
          <section className="rounded-2xl p-6 border" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.12)' }}>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--gold-400)' }}>Overview</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--parchment-200)' }}>{details.overview}</p>
          </section>

          {/* How Written */}
          <section className="rounded-2xl p-6 border" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.12)' }}>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--gold-400)' }}>Authorship & Composition</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--parchment-200)' }}>{details.howWritten}</p>
          </section>

          {/* Structure */}
          <section className="rounded-2xl p-6 border" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.12)' }}>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--gold-400)' }}>Structure</h2>
            <ul className="space-y-2">
              {details.structure.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--parchment-200)' }}>
                  <span className="flex-shrink-0 font-bold" style={{ color: 'var(--gold-400)' }}>›</span> {s}
                </li>
              ))}
            </ul>
          </section>

          {/* Themes */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--gold-400)' }}>Major Themes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {details.themes.map(({ title, description }) => (
                <div key={title} className="rounded-xl p-4 border" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.12)' }}>
                  <p className="font-bold text-sm mb-1" style={{ color: 'var(--gold-300)' }}>{title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--shell-400)' }}>{description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Key Verses */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--gold-400)' }}>Highlights & Key Verses</h2>
            <div className="space-y-3">
              {details.highlights.map(({ verse, text }) => {
                const parts = verse.match(/^(.+?)\s+(\d+)/);
                const bookSlug = parts?.[1].toLowerCase().replace(/\s+/g, '') ?? book;
                const ch = parts?.[2] ?? '1';
                return (
                  <div key={verse} className="rounded-xl p-4 border" style={{ background: 'rgba(201,168,76,0.06)', borderColor: 'rgba(201,168,76,0.18)' }}>
                    <p className="scripture-font text-sm leading-relaxed mb-2" style={{ color: 'var(--parchment-100)' }}>{text}</p>
                    <Link href={`/bible/${bookSlug}/${ch}`} className="text-xs font-bold" style={{ color: 'var(--gold-400)' }}>{verse}</Link>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Deep Learning Path */}
          <section className="rounded-2xl p-6 border" style={{ background: 'linear-gradient(135deg, rgba(123,45,62,0.12), rgba(201,168,76,0.06))', borderColor: 'rgba(201,168,76,0.2)' }}>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--gold-400)' }}>✦ Deep Learning Path</h2>
            <div className="space-y-3">
              {details.deepPath.map(({ phase, description }, i) => (
                <div key={phase} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-black mt-0.5" style={{ background: 'rgba(201,168,76,0.25)', color: 'var(--gold-300)' }}>
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-bold mb-0.5" style={{ color: 'var(--parchment-200)' }}>{phase}</p>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--shell-400)' }}>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
