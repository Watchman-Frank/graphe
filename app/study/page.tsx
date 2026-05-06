'use client';
import Link from 'next/link';
import { BookOpen, Users, Languages, ChevronRight, Scroll, Star, BookMarked } from 'lucide-react';

const PATHS = [
  {
    href: '/study/book/genesis',
    icon: Scroll,
    label: 'Book Study',
    description: 'Deep-dive into any of the 66 books — structure, theology, authorship, themes, cross-references, and how each book connects to the whole of Scripture.',
    features: ['Historical & cultural context', 'Chapter-by-chapter analysis', 'Messianic connections', 'Theological themes', 'Author intent & background'],
    color: '#C9A84C',
    bg: 'rgba(201,168,76,0.08)',
    border: 'rgba(201,168,76,0.25)',
    badge: '66 Books',
  },
  {
    href: '/study/characters',
    icon: Users,
    label: 'Character Study',
    description: 'Study the lives of every major and minor biblical figure — their calling, failures, faith, and the eternal lessons their lives teach us.',
    features: ['Full biography with timeline', 'Key scriptures & analysis', 'Faith lessons for today', 'Typology & Christ connections', 'Cross-character relationships'],
    color: '#7BB8E8',
    bg: 'rgba(123,184,232,0.08)',
    border: 'rgba(123,184,232,0.25)',
    badge: '60+ Characters',
  },
  {
    href: '/study/words',
    icon: Languages,
    label: 'Word & Topic Study',
    description: 'Trace any theological word or topic through the entire Bible — from Genesis to Revelation, in the original Hebrew and Greek, with full doctrinal analysis.',
    features: ['Hebrew & Greek originals', 'How the word evolves through Scripture', 'Every key occurrence', 'Theological & doctrinal depth', 'Practical application'],
    color: '#B8E87B',
    bg: 'rgba(184,232,123,0.08)',
    border: 'rgba(184,232,123,0.25)',
    badge: '25+ Topics',
  },
];

const QUICK_CHARACTERS = ['Moses', 'David', 'Paul', 'Mary', 'Abraham', 'Elijah', 'Peter', 'Esther'];
const QUICK_WORDS = ['Grace', 'Faith', 'Covenant', 'Redemption', 'Holiness', 'Kingdom', 'Atonement', 'Shalom'];

export default function StudyPage() {
  return (
    <div className="px-4 py-8 md:px-10 md:py-12 max-w-5xl">
      <div className="mb-10">
        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--gold-400)' }}>
          ✦ Deep Study Centre
        </p>
        <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia,serif' }}>
          Study the Word of God
        </h1>
        <p className="text-sm leading-relaxed max-w-2xl" style={{ color: 'var(--shell-400)' }}>
          Scholarly-depth tools for understanding Scripture as its authors intended — drawing on commentaries, original languages, historical context, and the full sweep of biblical theology.
        </p>
      </div>

      {/* Three paths */}
      <div className="space-y-4 mb-12">
        {PATHS.map(({ href, icon: Icon, label, description, features, color, bg, border, badge }) => (
          <Link
            key={href}
            href={href}
            className="flex flex-col md:flex-row items-start gap-5 rounded-2xl p-6 border transition-all duration-200 hover:scale-[1.005] group"
            style={{ background: bg, borderColor: border }}
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: `${color}18` }}>
              <Icon size={26} style={{ color }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <h2 className="text-xl font-bold" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia,serif' }}>{label}</h2>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full" style={{ background: `${color}18`, color }}>{badge}</span>
              </div>
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--shell-400)' }}>{description}</p>
              <ul className="flex flex-wrap gap-2">
                {features.map(f => (
                  <li key={f} className="flex items-center gap-1.5 text-xs font-medium">
                    <Star size={9} style={{ color }} />
                    <span style={{ color: 'var(--parchment-200)' }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ChevronRight size={20} className="flex-shrink-0 mt-1 opacity-40 group-hover:opacity-100 transition-opacity" style={{ color }} />
          </Link>
        ))}
      </div>

      {/* Quick access */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--shell-400)' }}>Quick — Character Studies</p>
          <div className="flex flex-wrap gap-2">
            {QUICK_CHARACTERS.map(name => (
              <Link key={name} href={`/study/characters/${name.toLowerCase()}`}
                className="px-3 py-1.5 rounded-xl border text-sm font-semibold transition-all hover:scale-105"
                style={{ background: 'rgba(123,184,232,0.08)', borderColor: 'rgba(123,184,232,0.2)', color: '#7BB8E8' }}>
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--shell-400)' }}>Quick — Word Studies</p>
          <div className="flex flex-wrap gap-2">
            {QUICK_WORDS.map(word => (
              <Link key={word} href={`/study/words/${word.toLowerCase()}`}
                className="px-3 py-1.5 rounded-xl border text-sm font-semibold transition-all hover:scale-105"
                style={{ background: 'rgba(184,232,123,0.08)', borderColor: 'rgba(184,232,123,0.2)', color: '#B8E87B' }}>
                {word}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
