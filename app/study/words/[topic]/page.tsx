'use client';
import { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getWordStudyById } from '@/data/wordStudies';
import { BookOpen, ChevronRight, Languages, ScrollText, Star, Lightbulb, Link2, Cross, BookMarked } from 'lucide-react';

function Section({ title, icon: Icon, color = '#C9A84C', children }: {
  title: string; icon: React.ElementType; color?: string; children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border mb-5 overflow-hidden" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.12)' }}>
      <div className="flex items-center gap-2.5 px-5 py-3.5 border-b" style={{ borderColor: 'rgba(201,168,76,0.1)', background: 'rgba(201,168,76,0.03)' }}>
        <Icon size={14} style={{ color }} />
        <h2 className="font-bold text-xs uppercase tracking-widest" style={{ color }}>{title}</h2>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function renderMarkdown(text: string) {
  return text.split('\n\n').filter(Boolean).map((block, i) => {
    const trimmed = block.trim();
    if (trimmed.startsWith('**') && trimmed.includes(':**')) {
      const colonIdx = trimmed.indexOf(':**');
      const heading = trimmed.slice(2, colonIdx);
      const body = trimmed.slice(colonIdx + 3).trim();
      return (
        <div key={i} className="mb-4">
          <p className="font-bold text-sm mb-1" style={{ color: '#C9A84C' }}>{heading}</p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--parchment-200)' }}>{body}</p>
        </div>
      );
    }
    return <p key={i} className="text-sm leading-relaxed mb-4" style={{ color: 'var(--parchment-200)' }}>{trimmed}</p>;
  });
}

export default function WordStudyPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: topicId } = use(params);
  const study = getWordStudyById(topicId);
  if (!study) notFound();

  const hebrewWords = study.originalWords.filter(w => w.language === 'Hebrew');
  const greekWords = study.originalWords.filter(w => w.language === 'Greek');

  return (
    <div className="px-4 py-8 md:px-10 md:py-12 max-w-4xl">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs mb-6" style={{ color: 'var(--shell-500)' }}>
        <Link href="/study" className="hover:underline" style={{ color: 'var(--shell-400)' }}>Study</Link>
        <ChevronRight size={12} />
        <Link href="/study/words" className="hover:underline" style={{ color: 'var(--shell-400)' }}>Word Studies</Link>
        <ChevronRight size={12} />
        <span style={{ color: 'var(--parchment-300)' }}>{study.topic}</span>
      </div>

      {/* Hero */}
      <div className="rounded-2xl border mb-6 overflow-hidden" style={{ borderColor: 'rgba(201,168,76,0.25)' }}>
        <div className="h-1.5" style={{ background: 'linear-gradient(to right, var(--gold-400), #B8E87B, #7BB8E8)' }} />
        <div className="p-6 md:p-8" style={{ background: 'var(--shell-800)' }}>
          <h1 className="text-3xl md:text-4xl font-bold mb-1" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia,serif' }}>
            {study.topic}
          </h1>
          <p className="text-sm font-semibold mb-3" style={{ color: 'var(--gold-400)' }}>{study.subtitle}</p>
          <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--parchment-200)', fontFamily: 'Georgia,serif', fontStyle: 'italic' }}>
            {study.oneLiner}
          </p>

          {/* Original Words */}
          <div className="flex flex-wrap gap-3">
            {study.originalWords.map(w => (
              <div key={w.strongsId} className="rounded-xl border px-4 py-3 flex-1 min-w-[200px]"
                style={{ background: w.language === 'Hebrew' ? 'rgba(201,168,76,0.06)' : 'rgba(123,184,232,0.06)', borderColor: w.language === 'Hebrew' ? 'rgba(201,168,76,0.2)' : 'rgba(123,184,232,0.2)' }}>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-2xl font-bold" style={{ color: w.language === 'Hebrew' ? 'var(--gold-400)' : '#7BB8E8', fontFamily: 'serif' }}>{w.script}</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--shell-400)' }}>{w.strongsId}</span>
                </div>
                <p className="text-sm font-semibold mb-0.5" style={{ color: 'var(--parchment-200)' }}>{w.transliteration}</p>
                <p className="text-xs font-bold mb-1.5" style={{ color: w.language === 'Hebrew' ? 'var(--gold-500)' : '#5A9EC8' }}>{w.language}</p>
                <p className="text-xs leading-relaxed mb-1.5" style={{ color: 'var(--parchment-300)' }}>{w.definition}</p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--shell-400)' }}>{w.rangeOfMeaning}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overview */}
      <Section title="Overview" icon={BookOpen}>
        <div className="space-y-3">
          {study.overview.split('\n\n').filter(Boolean).map((p, i) => (
            <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--parchment-200)' }}>{p.trim()}</p>
          ))}
        </div>
      </Section>

      {/* Theological Background */}
      <Section title="Theological Background" icon={ScrollText} color="#E8C47B">
        <div className="space-y-3">
          {study.theologicalBackground.split('\n\n').filter(Boolean).map((p, i) => (
            <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--parchment-200)' }}>{p.trim()}</p>
          ))}
        </div>
      </Section>

      {/* Progression Through Scripture */}
      <Section title="Progression Through Scripture" icon={BookMarked} color="#B8E87B">
        <div>{renderMarkdown(study.progressionThroughScripture)}</div>
      </Section>

      {/* Key Occurrences */}
      <Section title="Key Occurrences & Analysis" icon={Languages} color="#7BB8E8">
        <div className="space-y-4">
          {study.keyOccurrences.map((occ, i) => (
            <div key={i} className="rounded-xl p-4 border" style={{ background: 'rgba(123,184,232,0.04)', borderColor: 'rgba(123,184,232,0.15)' }}>
              <p className="text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: '#7BB8E8' }}>{occ.reference}</p>
              <p className="text-sm leading-relaxed mb-2 scripture-font" style={{ color: 'var(--parchment-100)', fontStyle: 'italic' }}>
                "{occ.text}"
              </p>
              {occ.note && (
                <p className="text-xs leading-relaxed" style={{ color: 'var(--shell-300)' }}>
                  <span style={{ color: 'var(--gold-400)', fontWeight: 700 }}>Note: </span>{occ.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Doctrinal Connections */}
      <Section title="Doctrinal Connections" icon={Cross} color="#A87BE8">
        <ul className="space-y-2.5">
          {study.doctrinalConnections.map((d, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--parchment-200)' }}>
              <Star size={11} className="mt-1 flex-shrink-0" style={{ color: '#A87BE8' }} />
              {d}
            </li>
          ))}
        </ul>
      </Section>

      {/* Practical Application */}
      <Section title="Practical Application" icon={Lightbulb} color="#E8C47B">
        <div className="space-y-3">
          {study.practicalApplication.split('\n\n').filter(Boolean).map((p, i) => (
            <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--parchment-200)' }}>{p.trim()}</p>
          ))}
        </div>
      </Section>

      {/* Christ Connection */}
      <div className="rounded-2xl border mb-5 overflow-hidden" style={{ borderColor: 'rgba(201,168,76,0.3)' }}>
        <div className="flex items-center gap-2.5 px-5 py-3.5" style={{ background: 'rgba(201,168,76,0.08)', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
          <Cross size={14} style={{ color: 'var(--gold-400)' }} />
          <h2 className="font-bold text-xs uppercase tracking-widest" style={{ color: 'var(--gold-400)' }}>Christ Connection</h2>
        </div>
        <div className="p-5" style={{ background: 'var(--shell-800)' }}>
          <div className="space-y-3">
            {study.christConnection.split('\n\n').filter(Boolean).map((p, i) => (
              <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--parchment-200)' }}>{p.trim()}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Key Theologians */}
      {study.keyTheologians && (
        <Section title="Recommended Theologians & Resources" icon={BookOpen} color="#7BB8E8">
          <p className="text-sm leading-relaxed" style={{ color: 'var(--parchment-200)' }}>{study.keyTheologians}</p>
        </Section>
      )}

      {/* Related Topics */}
      {study.relatedTopics.length > 0 && (
        <div className="rounded-2xl border p-5" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.12)' }}>
          <div className="flex items-center gap-2 mb-4">
            <Link2 size={14} style={{ color: 'var(--gold-400)' }} />
            <h2 className="font-bold text-xs uppercase tracking-widest" style={{ color: 'var(--gold-400)' }}>Study These Related Topics</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {study.relatedTopics.map(id => (
              <Link
                key={id}
                href={`/study/words/${id}`}
                className="px-3 py-1.5 rounded-xl border text-sm font-semibold transition-all hover:scale-105"
                style={{ background: 'rgba(201,168,76,0.08)', borderColor: 'rgba(201,168,76,0.2)', color: 'var(--gold-300)' }}
              >
                {id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
