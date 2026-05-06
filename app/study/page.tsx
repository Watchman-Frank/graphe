'use client';
import Link from 'next/link';
import { BookOpen, Languages, Scroll, MessageSquare, Globe, ChevronRight } from 'lucide-react';

const STUDY_TOOLS = [
  {
    href: '/study/commentary/john+3',
    icon: MessageSquare,
    label: 'Commentaries',
    description: 'Matthew Henry & Jamieson-Fausset-Brown verse-by-verse explanations',
    color: '#7BB8E8',
    bg: 'rgba(123,184,232,0.08)',
    border: 'rgba(123,184,232,0.2)',
  },
  {
    href: '/study/word-study/G26',
    icon: Languages,
    label: 'Greek & Hebrew',
    description: "Strong's Concordance — original language word study with pronunciation",
    color: '#B8E87B',
    bg: 'rgba(184,232,123,0.08)',
    border: 'rgba(184,232,123,0.2)',
  },
  {
    href: '/books',
    icon: Scroll,
    label: 'Book Backgrounds',
    description: 'Historical context, authorship, date, purpose and theological themes',
    color: 'var(--gold-400)',
    bg: 'rgba(201,168,76,0.08)',
    border: 'rgba(201,168,76,0.2)',
  },
  {
    href: '/maps',
    icon: Globe,
    label: 'Historical Maps',
    description: 'Ancient Israel, Paul\'s journeys, the Exodus route and more',
    color: '#7BE8B8',
    bg: 'rgba(123,232,184,0.08)',
    border: 'rgba(123,232,184,0.2)',
  },
];

const KEY_TOPICS = [
  { label: 'Salvation', refs: ['Romans 10:9', 'John 3:16', 'Ephesians 2:8-9'] },
  { label: 'Faith', refs: ['Hebrews 11:1', 'Romans 1:17', 'James 2:26'] },
  { label: 'Grace', refs: ['Ephesians 2:8', 'Titus 2:11', '2 Corinthians 12:9'] },
  { label: 'Love', refs: ['1 John 4:8', '1 Corinthians 13:4-7', 'John 15:13'] },
  { label: 'Prayer', refs: ['Philippians 4:6-7', 'Matthew 6:9-13', '1 Thessalonians 5:17'] },
  { label: 'Holy Spirit', refs: ['John 14:26', 'Acts 1:8', 'Galatians 5:22-23'] },
];

export default function StudyPage() {
  return (
    <div className="px-4 py-8 md:px-10 md:py-12 max-w-5xl">
      <div className="mb-10">
        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--gold-400)' }}>
          Deep Study
        </p>
        <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia,serif' }}>
          Study Centre
        </h1>
        <p className="text-sm" style={{ color: 'var(--shell-400)' }}>
          Commentaries, original languages, theological backgrounds — understand the Word as the author intended.
        </p>
      </div>

      {/* Tool cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {STUDY_TOOLS.map(({ href, icon: Icon, label, description, color, bg, border }) => (
          <Link
            key={href}
            href={href}
            className="rounded-2xl p-5 border flex items-start gap-4 transition-all duration-200 hover:scale-[1.01]"
            style={{ background: bg, borderColor: border }}
          >
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}18` }}>
              <Icon size={22} style={{ color }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <p className="font-bold" style={{ color: 'var(--parchment-100)' }}>{label}</p>
                <ChevronRight size={16} style={{ color: 'var(--shell-500)' }} />
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--shell-400)' }}>{description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Topical study */}
      <div>
        <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--shell-400)' }}>
          Topical Study
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {KEY_TOPICS.map(({ label, refs }) => (
            <div
              key={label}
              className="rounded-xl p-4 border"
              style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.12)' }}
            >
              <p className="font-bold text-sm mb-2" style={{ color: 'var(--gold-300)' }}>{label}</p>
              <div className="space-y-1">
                {refs.map(ref => {
                  const parts = ref.match(/^(.+?)\s+(\d+):?(.*)$/);
                  const bookName = parts?.[1].toLowerCase().replace(/\s+/g, '') ?? 'genesis';
                  const chap = parts?.[2] ?? '1';
                  return (
                    <Link
                      key={ref}
                      href={`/bible/${bookName}/${chap}`}
                      className="block text-xs py-0.5 transition-colors hover:text-gold"
                      style={{ color: 'var(--shell-400)' }}
                    >
                      {ref}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
