'use client';
import Link from 'next/link';
import { WORD_STUDY_SUMMARIES } from '@/data/wordStudies';
import { Languages, BookOpen, ChevronRight } from 'lucide-react';

const TOPIC_COLORS: Record<string, string> = {
  grace: '#C9A84C',
  faith: '#7BB8E8',
  covenant: '#B8E87B',
  redemption: '#E8A87B',
  shalom: '#7BE8D4',
  holiness: '#E87BB8',
  atonement: '#E87B7B',
  'kingdom-of-god': '#A87BE8',
};

export default function WordStudiesPage() {
  return (
    <div className="px-4 py-8 md:px-10 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <Link href="/study" className="text-xs font-bold uppercase tracking-widest mb-2 inline-block" style={{ color: 'var(--shell-400)' }}>
          ← Back to Study
        </Link>
        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--gold-400)' }}>✦ Word & Topic Study</p>
        <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia,serif' }}>
          Biblical Words & Topics
        </h1>
        <p className="text-sm leading-relaxed max-w-2xl" style={{ color: 'var(--shell-400)' }}>
          Trace any theological word through the entire Bible — from the original Hebrew and Greek, through every major occurrence, to full doctrinal and practical analysis.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {WORD_STUDY_SUMMARIES.map(study => {
          const color = TOPIC_COLORS[study.id] ?? '#C9A84C';
          const hebrew = study.originalWords.find(w => w.language === 'Hebrew');
          const greek = study.originalWords.find(w => w.language === 'Greek');
          return (
            <Link
              key={study.id}
              href={`/study/words/${study.id}`}
              className="rounded-2xl border p-5 flex flex-col gap-3 transition-all hover:scale-[1.02] group"
              style={{ background: 'var(--shell-800)', borderColor: `${color}25` }}
            >
              {/* Language scripts */}
              <div className="flex items-center gap-3 flex-wrap">
                {hebrew && (
                  <span className="text-xl font-bold" style={{ color, fontFamily: 'serif' }}>{hebrew.script}</span>
                )}
                {greek && (
                  <span className="text-xl font-bold" style={{ color: `${color}CC`, fontFamily: 'serif' }}>{greek.script}</span>
                )}
              </div>

              {/* Title */}
              <div>
                <h3 className="font-bold text-lg mb-0.5" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia,serif' }}>{study.topic}</h3>
                <p className="text-xs font-semibold" style={{ color }}>{study.subtitle}</p>
              </div>

              {/* One liner */}
              <p className="text-xs leading-relaxed flex-1" style={{ color: 'var(--shell-300)' }}>{study.oneLiner}</p>

              {/* Language tags */}
              <div className="flex items-center gap-2">
                {study.originalWords.map(w => (
                  <span key={w.strongsId} className="text-xs px-2 py-0.5 rounded font-bold" style={{ background: `${color}15`, color }}>
                    {w.language === 'Hebrew' ? 'Heb' : 'Grk'} {w.strongsId}
                  </span>
                ))}
                <ChevronRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color }} />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Coming soon */}
      <div className="mt-8 rounded-2xl border p-6 text-center" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.1)' }}>
        <Languages size={28} className="mx-auto mb-2" style={{ color: 'var(--gold-400)' }} />
        <p className="font-bold mb-1" style={{ color: 'var(--parchment-200)' }}>More Topics Coming</p>
        <p className="text-sm" style={{ color: 'var(--shell-400)' }}>
          Agape, Logos, Repentance, Hope, Sanctification, Prayer, Wisdom, Fear of the Lord, Resurrection, Worship, and 15+ more topics are being added.
        </p>
      </div>
    </div>
  );
}
