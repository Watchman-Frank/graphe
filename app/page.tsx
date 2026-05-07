import Link from 'next/link';
import { BookOpen, GraduationCap, NotebookPen, CalendarDays, Map, Mic, ArrowRight, Scroll } from 'lucide-react';
import { getDailyVerse } from '@/data/dailyVerses';

const FEATURES = [
  { href: '/bible', icon: BookOpen, label: 'Read', description: 'KJV & NKJV with audio in multiple voices', color: 'var(--gold-400)', bg: 'rgba(201,168,76,0.1)', border: 'rgba(201,168,76,0.2)' },
  { href: '/study', icon: GraduationCap, label: 'Study', description: 'Commentaries, Greek & Hebrew, theology', color: '#7BB8E8', bg: 'rgba(123,184,232,0.08)', border: 'rgba(123,184,232,0.2)' },
  { href: '/books', icon: Scroll, label: 'Books', description: 'Deep overviews, themes & highlights', color: 'var(--burgundy-300)', bg: 'rgba(196,97,122,0.08)', border: 'rgba(196,97,122,0.2)' },
  { href: '/maps', icon: Map, label: 'Maps', description: 'Historical maps & ancient measurements', color: '#7BE8B8', bg: 'rgba(123,232,184,0.08)', border: 'rgba(123,232,184,0.2)' },
  { href: '/plans', icon: CalendarDays, label: 'Plans', description: 'Reading plans with reminders & alarms', color: '#E87BB8', bg: 'rgba(232,123,184,0.08)', border: 'rgba(232,123,184,0.2)' },
  { href: '/journal', icon: NotebookPen, label: 'Journal', description: 'Record your spiritual journey', color: '#B8E87B', bg: 'rgba(184,232,123,0.08)', border: 'rgba(184,232,123,0.2)' },
];

export default function Home() {
  const verse = getDailyVerse();

  return (
    <div className="min-h-screen px-4 py-8 md:px-10 md:py-12">
      <div className="mb-10">
        <p className="text-sm font-medium mb-1" style={{ color: 'var(--gold-400)' }}>
          Welcome to Graphe
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia, serif' }}>
          The Holy Scripture
        </h1>
        <p className="text-sm" style={{ color: 'var(--shell-400)' }}>
          Read, study, listen, and grow in the Word of God.
        </p>
      </div>

      {/* Daily Verse */}
      <div
        className="rounded-2xl p-6 mb-8 relative overflow-hidden border"
        style={{
          background: 'linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(123,45,62,0.06) 100%)',
          borderColor: 'rgba(201,168,76,0.22)',
        }}
      >
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-[0.07] pointer-events-none" style={{ background: 'var(--gold-400)', transform: 'translate(35%, -35%)' }} />
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--gold-400)' }}>
          ✦ Verse of the Day
        </p>
        <blockquote className="scripture-font text-lg md:text-2xl font-medium mb-4" style={{ color: 'var(--parchment-100)' }}>
          &ldquo;{verse.text}&rdquo;
        </blockquote>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="text-sm font-semibold" style={{ color: 'var(--gold-400)' }}>
            — {verse.reference}
          </span>
          <Link
            href={`/bible/${verse.book}/${verse.chapter}`}
            className="flex items-center gap-1.5 text-sm font-medium"
            style={{ color: 'var(--gold-300)' }}
          >
            Read in context <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Feature grid */}
      <h2 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--shell-400)' }}>
        Explore
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-10">
        {FEATURES.map(({ href, icon: Icon, label, description, color, bg, border }) => (
          <Link
            key={href}
            href={href}
            className="rounded-xl p-4 md:p-5 border transition-all duration-200 hover:scale-[1.02]"
            style={{ background: bg, borderColor: border }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: `${color}18` }}>
              <Icon size={20} style={{ color }} />
            </div>
            <p className="font-bold text-sm mb-1" style={{ color: 'var(--parchment-100)' }}>{label}</p>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--shell-400)' }}>{description}</p>
          </Link>
        ))}
      </div>

      {/* Voice CTA */}
      <div
        className="rounded-2xl p-5 border flex items-start gap-4"
        style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.15)' }}
      >
        <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(201,168,76,0.12)' }}>
          <Mic size={20} style={{ color: 'var(--gold-400)' }} />
        </div>
        <div>
          <p className="font-bold mb-1" style={{ color: 'var(--parchment-100)' }}>Hear scripture read aloud</p>
          <p className="text-sm mb-3" style={{ color: 'var(--shell-400)' }}>
            Choose a voice and listen to any passage — multiple voices available, ready to use instantly.
          </p>
          <Link href="/settings" className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: 'var(--gold-400)' }}>
            Choose your voice <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
