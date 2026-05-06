'use client';
import { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCharacterById } from '@/data/characters';
import {
  BookOpen, ChevronRight, Users, Clock, Star, BookMarked,
  Heart, AlertTriangle, Lightbulb, Cross, Scroll, Link2
} from 'lucide-react';

function Section({ title, icon: Icon, color = '#C9A84C', children }: {
  title: string; icon: React.ElementType; color?: string; children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border mb-5 overflow-hidden" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.12)' }}>
      <div className="flex items-center gap-2.5 px-5 py-3.5 border-b" style={{ borderColor: 'rgba(201,168,76,0.1)', background: 'rgba(201,168,76,0.04)' }}>
        <Icon size={15} style={{ color }} />
        <h2 className="font-bold text-xs uppercase tracking-widest" style={{ color }}>{title}</h2>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function Pill({ children, color = '#C9A84C' }: { children: React.ReactNode; color?: string }) {
  return (
    <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-lg" style={{ background: `${color}15`, color }}>
      {children}
    </span>
  );
}

export default function CharacterPage({ params }: { params: Promise<{ character: string }> }) {
  const { character: characterId } = use(params);
  const c = getCharacterById(characterId);
  if (!c) notFound();

  const testamentColor = c.testament === 'OT' ? '#C9A84C' : c.testament === 'NT' ? '#7BB8E8' : '#B8E87B';

  return (
    <div className="px-4 py-8 md:px-10 md:py-12 max-w-4xl">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs mb-6" style={{ color: 'var(--shell-500)' }}>
        <Link href="/study" className="hover:underline" style={{ color: 'var(--shell-400)' }}>Study</Link>
        <ChevronRight size={12} />
        <Link href="/study/characters" className="hover:underline" style={{ color: 'var(--shell-400)' }}>Characters</Link>
        <ChevronRight size={12} />
        <span style={{ color: 'var(--parchment-300)' }}>{c.name}</span>
      </div>

      {/* Hero */}
      <div className="rounded-2xl border mb-6 overflow-hidden" style={{ borderColor: 'rgba(201,168,76,0.25)' }}>
        <div className="h-1.5" style={{ background: 'linear-gradient(to right, var(--gold-400), var(--gold-600), #7BB8E8)' }} />
        <div className="p-6 md:p-8" style={{ background: 'var(--shell-800)' }}>
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-3 flex-wrap mb-2">
                <h1 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia,serif' }}>{c.name}</h1>
                {c.hebrewGreek && (
                  <span className="text-2xl" style={{ color: 'var(--gold-400)', fontFamily: 'serif' }}>{c.hebrewGreek}</span>
                )}
              </div>
              {c.transliteration && (
                <p className="text-sm mb-1" style={{ color: 'var(--shell-400)' }}>
                  Transliteration: <span style={{ color: 'var(--parchment-300)' }}>{c.transliteration}</span>
                </p>
              )}
              <p className="text-sm italic" style={{ color: 'var(--gold-400)' }}>"{c.nameMeaning}"</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Pill color={testamentColor}>{c.testament === 'OT' ? 'Old Testament' : c.testament === 'NT' ? 'New Testament' : 'Old & New Testament'}</Pill>
              <Pill color="#B8E87B">{c.category}</Pill>
            </div>
          </div>

          <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--parchment-200)', fontFamily: 'Georgia,serif', fontStyle: 'italic' }}>
            {c.oneLiner}
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-1.5">
              <Clock size={13} style={{ color: 'var(--shell-400)' }} />
              <span style={{ color: 'var(--shell-300)' }}>{c.era}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BookOpen size={13} style={{ color: 'var(--shell-400)' }} />
              <span style={{ color: 'var(--shell-300)' }}>{c.keyBooks.join(', ')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Biography */}
      <Section title="Biography" icon={Scroll}>
        <div className="prose-sm max-w-none space-y-4">
          {c.biography.split('\n\n').filter(Boolean).map((para, i) => (
            <p key={i} className="leading-relaxed" style={{ color: 'var(--parchment-200)' }}>{para.trim()}</p>
          ))}
        </div>
      </Section>

      {/* Historical Context */}
      <Section title="Historical & Cultural Context" icon={BookMarked} color="#E8C47B">
        <p className="leading-relaxed text-sm" style={{ color: 'var(--parchment-200)' }}>{c.historicalContext}</p>
      </Section>

      {/* Key Scriptures */}
      <Section title="Key Scriptures & Analysis" icon={BookOpen} color="#7BB8E8">
        <div className="space-y-4">
          {c.keyScriptures.map((s, i) => (
            <div key={i} className="rounded-xl p-4 border" style={{ background: 'rgba(123,184,232,0.05)', borderColor: 'rgba(123,184,232,0.15)' }}>
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#7BB8E8' }}>{s.reference}</p>
              <p className="text-sm leading-relaxed mb-2 scripture-font" style={{ color: 'var(--parchment-100)', fontStyle: 'italic' }}>
                "{s.text}"
              </p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--shell-300)' }}>
                <span style={{ color: 'var(--gold-400)', fontWeight: 700 }}>Significance: </span>{s.significance}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      {c.timeline.length > 0 && (
        <Section title="Life Timeline" icon={Clock} color="#B8E87B">
          <div className="relative">
            <div className="absolute left-2.5 top-2 bottom-2 w-px" style={{ background: 'rgba(184,232,123,0.2)' }} />
            <div className="space-y-4">
              {c.timeline.map((event, i) => (
                <div key={i} className="pl-8 relative">
                  <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'rgba(184,232,123,0.15)', border: '1.5px solid rgba(184,232,123,0.4)' }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#B8E87B' }} />
                  </div>
                  <div>
                    {event.year && (
                      <span className="text-xs font-bold" style={{ color: '#B8E87B' }}>{event.year} — </span>
                    )}
                    <span className="text-sm" style={{ color: 'var(--parchment-200)' }}>{event.event}</span>
                    <span className="text-xs ml-2" style={{ color: 'var(--shell-500)' }}>({event.reference})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Traits & Character */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div className="rounded-2xl border overflow-hidden" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.12)' }}>
          <div className="flex items-center gap-2.5 px-5 py-3.5 border-b" style={{ borderColor: 'rgba(201,168,76,0.1)', background: 'rgba(184,232,123,0.04)' }}>
            <Heart size={14} style={{ color: '#B8E87B' }} />
            <h2 className="font-bold text-xs uppercase tracking-widest" style={{ color: '#B8E87B' }}>Character Traits</h2>
          </div>
          <div className="p-4 flex flex-wrap gap-2">
            {c.traits.map(t => (
              <Pill key={t} color="#B8E87B">{t}</Pill>
            ))}
          </div>
        </div>

        {c.failures.length > 0 && (
          <div className="rounded-2xl border overflow-hidden" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.12)' }}>
            <div className="flex items-center gap-2.5 px-5 py-3.5 border-b" style={{ borderColor: 'rgba(201,168,76,0.1)', background: 'rgba(232,123,123,0.04)' }}>
              <AlertTriangle size={14} style={{ color: '#E87B7B' }} />
              <h2 className="font-bold text-xs uppercase tracking-widest" style={{ color: '#E87B7B' }}>Failures & Weaknesses</h2>
            </div>
            <ul className="p-4 space-y-2">
              {c.failures.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-xs" style={{ color: 'var(--parchment-200)' }}>
                  <span style={{ color: '#E87B7B', flexShrink: 0 }}>•</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Faith Lessons */}
      <Section title="Faith Lessons for Today" icon={Lightbulb} color="#E8C47B">
        <ul className="space-y-3">
          {c.faithLessons.map((lesson, i) => (
            <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'var(--parchment-200)' }}>
              <Star size={12} className="mt-1 flex-shrink-0" style={{ color: '#E8C47B' }} />
              {lesson}
            </li>
          ))}
        </ul>
      </Section>

      {/* Typology of Christ */}
      {c.typologyOfChrist && (
        <div className="rounded-2xl border mb-5 overflow-hidden" style={{ borderColor: 'rgba(201,168,76,0.3)' }}>
          <div className="flex items-center gap-2.5 px-5 py-3.5" style={{ background: 'rgba(201,168,76,0.08)', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
            <Cross size={14} style={{ color: 'var(--gold-400)' }} />
            <h2 className="font-bold text-xs uppercase tracking-widest" style={{ color: 'var(--gold-400)' }}>Typology & Christ Connections</h2>
          </div>
          <div className="p-5" style={{ background: 'var(--shell-800)' }}>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--parchment-200)' }}>{c.typologyOfChrist}</p>
          </div>
        </div>
      )}

      {/* Theological Significance */}
      <Section title="Theological Significance" icon={BookOpen} color="#A87BE8">
        <p className="text-sm leading-relaxed" style={{ color: 'var(--parchment-200)' }}>{c.theologicalSignificance}</p>
      </Section>

      {/* Relationships */}
      {c.relationships.length > 0 && (
        <Section title="Key Relationships" icon={Users} color="#7BB8E8">
          <div className="flex flex-wrap gap-2">
            {c.relationships.map((r, i) => (
              <span key={i} className="text-xs px-2.5 py-1 rounded-lg" style={{ background: 'rgba(123,184,232,0.08)', color: 'var(--parchment-200)', border: '1px solid rgba(123,184,232,0.15)' }}>
                {r}
              </span>
            ))}
          </div>
        </Section>
      )}

      {/* Related Characters */}
      {c.relatedCharacters.length > 0 && (
        <div className="rounded-2xl border p-5" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.12)' }}>
          <div className="flex items-center gap-2 mb-4">
            <Link2 size={14} style={{ color: 'var(--gold-400)' }} />
            <h2 className="font-bold text-xs uppercase tracking-widest" style={{ color: 'var(--gold-400)' }}>Study These Related Characters</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {c.relatedCharacters.map(id => (
              <Link
                key={id}
                href={`/study/characters/${id}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-sm font-semibold transition-all hover:scale-105"
                style={{ background: 'rgba(201,168,76,0.08)', borderColor: 'rgba(201,168,76,0.2)', color: 'var(--gold-300)' }}
              >
                {id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                <ChevronRight size={12} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
