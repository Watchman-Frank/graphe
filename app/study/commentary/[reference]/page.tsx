'use client';
import { useState } from 'react';
import { use } from 'react';
import Link from 'next/link';
import { BookOpen, ChevronLeft, BookMarked, ChevronDown, ChevronUp, Scroll, Library } from 'lucide-react';
import { getCommentaryByReference, COMMENTARY_INDEX } from '@/data/commentaries';

function renderProse(text: string) {
  return text.split('\n\n').filter(Boolean).map((para, i) => {
    const trimmed = para.trim();
    const formatted = trimmed
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>');
    return (
      <p
        key={i}
        className="mb-4 text-sm leading-relaxed"
        style={{ color: 'var(--parchment-200)' }}
        dangerouslySetInnerHTML={{ __html: formatted }}
      />
    );
  });
}

function VerseBlock({ verse, text, commentary }: { verse: string; text: string; commentary: string }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border rounded-2xl overflow-hidden mb-4" style={{ borderColor: 'rgba(201,168,76,0.18)', background: 'rgba(0,0,0,0.12)' }}>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-start gap-3 px-5 py-4 text-left hover:bg-white/[0.02] transition-colors"
      >
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--gold-400)' }}>{verse}</p>
          <p className="text-sm leading-snug scripture-font" style={{ color: 'var(--parchment-100)', fontStyle: 'italic' }}>
            &ldquo;{text}&rdquo;
          </p>
        </div>
        <span className="mt-1 flex-shrink-0" style={{ color: 'var(--shell-500)' }}>
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 border-t" style={{ borderColor: 'rgba(201,168,76,0.1)' }}>
          <div className="pt-4">{renderProse(commentary)}</div>
        </div>
      )}
    </div>
  );
}

interface Props {
  params: Promise<{ reference: string }>;
}

export default function CommentaryPage({ params }: Props) {
  const { reference } = use(params);
  const decoded = decodeURIComponent(reference).replace(/\+/g, ' ');
  const data = getCommentaryByReference(reference);
  const [activeTab, setActiveTab] = useState<'mh' | 'jfb'>('mh');

  const bookSlug = reference.split('+')[0];
  const chapter = reference.split('+')[1] || '1';

  if (!data) {
    return (
      <div className="px-4 py-8 md:px-10 md:py-12 max-w-3xl">
        <div className="flex items-center gap-3 mb-8">
          <Link href="/study" className="p-1.5 rounded-lg" style={{ color: 'var(--shell-400)' }}>
            <ChevronLeft size={18} />
          </Link>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold-400)' }}>Commentary</p>
            <h1 className="text-xl font-bold" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia,serif' }}>{decoded}</h1>
          </div>
        </div>

        {/* Fallback — no commentary yet */}
        <div className="rounded-2xl border p-8 text-center mb-6" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.12)' }}>
          <Scroll size={36} className="mx-auto mb-3" style={{ color: 'var(--gold-400)' }} />
          <h2 className="font-bold text-lg mb-2" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia,serif' }}>
            Full Commentary Coming
          </h2>
          <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: 'var(--shell-300)' }}>
            Verse-by-verse commentary for this passage is being prepared with Matthew Henry and Jamieson-Fausset-Brown content. Check back soon.
          </p>
          <Link
            href={`/bible/${bookSlug}/${chapter}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-semibold"
            style={{ background: 'rgba(201,168,76,0.1)', borderColor: 'rgba(201,168,76,0.25)', color: 'var(--gold-300)' }}
          >
            <BookOpen size={14} /> Read this chapter
          </Link>
        </div>

        {/* Browse available commentaries */}
        {COMMENTARY_INDEX.length > 0 && (
          <div className="rounded-2xl border p-5" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.1)' }}>
            <div className="flex items-center gap-2 mb-4">
              <Library size={14} style={{ color: 'var(--gold-400)' }} />
              <h3 className="font-bold text-xs uppercase tracking-widest" style={{ color: 'var(--gold-400)' }}>
                Available Commentaries
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {COMMENTARY_INDEX.map(({ reference: ref, title }) => (
                <Link
                  key={ref}
                  href={`/study/commentary/${ref}`}
                  className="px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all hover:scale-105"
                  style={{ background: 'rgba(201,168,76,0.06)', borderColor: 'rgba(201,168,76,0.2)', color: 'var(--gold-300)' }}
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  const activeCommentary = data[activeTab];

  return (
    <div className="px-4 py-8 md:px-10 md:py-12 max-w-3xl">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Link href="/study" className="p-1.5 rounded-lg" style={{ color: 'var(--shell-400)' }}>
          <ChevronLeft size={18} />
        </Link>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold-400)' }}>Commentary</p>
          <h1 className="text-xl font-bold" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia,serif' }}>{data.title}</h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {[
          { key: 'mh' as const, label: 'Matthew Henry', sub: '1662–1714' },
          { key: 'jfb' as const, label: 'Jamieson-Fausset-Brown', sub: '1871' },
        ].map(({ key, label, sub }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className="flex-1 px-4 py-3 rounded-xl text-sm font-bold border transition-all text-left"
            style={
              activeTab === key
                ? { background: 'rgba(201,168,76,0.14)', borderColor: 'rgba(201,168,76,0.35)', color: 'var(--gold-300)' }
                : { background: 'var(--shell-800)', borderColor: 'rgba(255,255,255,0.07)', color: 'var(--shell-500)' }
            }
          >
            <span className="block">{label}</span>
            <span className="block text-xs font-normal mt-0.5 opacity-60">{sub}</span>
          </button>
        ))}
      </div>

      {/* Introduction */}
      <div className="rounded-2xl border mb-5 overflow-hidden" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.15)' }}>
        <div className="flex items-center gap-2.5 px-5 py-3.5 border-b" style={{ borderColor: 'rgba(201,168,76,0.1)', background: 'rgba(201,168,76,0.04)' }}>
          <BookOpen size={14} style={{ color: 'var(--gold-400)' }} />
          <h2 className="font-bold text-xs uppercase tracking-widest" style={{ color: 'var(--gold-400)' }}>Introduction</h2>
          <span className="ml-auto text-xs font-semibold" style={{ color: 'var(--shell-500)' }}>
            {activeTab === 'mh' ? 'Matthew Henry' : 'Jamieson-Fausset-Brown'}
          </span>
        </div>
        <div className="p-5">
          {renderProse(activeCommentary.introduction)}
        </div>
      </div>

      {/* Verse-by-verse */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-4">
          <Scroll size={14} style={{ color: 'var(--gold-400)' }} />
          <h2 className="font-bold text-xs uppercase tracking-widest" style={{ color: 'var(--gold-400)' }}>
            Verse-by-Verse Commentary
          </h2>
          <span className="ml-auto text-xs" style={{ color: 'var(--shell-500)' }}>
            {activeCommentary.verseCommentaries.length} passage{activeCommentary.verseCommentaries.length !== 1 ? 's' : ''}
          </span>
        </div>
        {activeCommentary.verseCommentaries.map((vc, i) => (
          <VerseBlock key={i} verse={vc.verse} text={vc.text} commentary={vc.commentary} />
        ))}
      </div>

      {/* Conclusion */}
      <div className="rounded-2xl border mb-6 overflow-hidden" style={{ borderColor: 'rgba(201,168,76,0.2)', background: 'rgba(201,168,76,0.04)' }}>
        <div className="flex items-center gap-2.5 px-5 py-3.5 border-b" style={{ borderColor: 'rgba(201,168,76,0.12)' }}>
          <BookMarked size={14} style={{ color: 'var(--gold-400)' }} />
          <h2 className="font-bold text-xs uppercase tracking-widest" style={{ color: 'var(--gold-400)' }}>Conclusion</h2>
        </div>
        <div className="p-5">
          {renderProse(activeCommentary.conclusion)}
        </div>
      </div>

      {/* Footer actions */}
      <div className="flex flex-wrap gap-3">
        <Link
          href={`/bible/${bookSlug}/${chapter}`}
          className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold"
          style={{ background: 'rgba(201,168,76,0.1)', borderColor: 'rgba(201,168,76,0.25)', color: 'var(--gold-300)' }}
        >
          <BookOpen size={14} /> Read this chapter
        </Link>
        <Link
          href="/study/words"
          className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold"
          style={{ background: 'var(--shell-800)', borderColor: 'rgba(255,255,255,0.08)', color: 'var(--shell-400)' }}
        >
          <BookMarked size={14} /> Word Studies
        </Link>
      </div>

      {/* Browse other commentaries */}
      {COMMENTARY_INDEX.length > 1 && (
        <div className="mt-8 rounded-2xl border p-5" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.1)' }}>
          <div className="flex items-center gap-2 mb-4">
            <Library size={14} style={{ color: 'var(--gold-400)' }} />
            <h3 className="font-bold text-xs uppercase tracking-widest" style={{ color: 'var(--gold-400)' }}>
              More Commentaries
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {COMMENTARY_INDEX.filter(c => c.reference !== reference).map(({ reference: ref, title }) => (
              <Link
                key={ref}
                href={`/study/commentary/${ref}`}
                className="px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all hover:scale-105"
                style={{ background: 'rgba(201,168,76,0.06)', borderColor: 'rgba(201,168,76,0.2)', color: 'var(--gold-300)' }}
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
