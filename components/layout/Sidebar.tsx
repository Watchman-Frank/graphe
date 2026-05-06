'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BookOpen, BookMarked, GraduationCap, Map, CalendarDays,
  NotebookPen, Settings, Mic, ChevronRight, Cross, Scroll
} from 'lucide-react';
import { cn } from '@/lib/utils/cn';

const NAV = [
  { href: '/', label: 'Home', icon: Cross },
  { href: '/bible', label: 'Read', icon: BookOpen },
  { href: '/books', label: 'Books', icon: Scroll },
  { href: '/study', label: 'Study', icon: GraduationCap },
  { href: '/maps', label: 'Maps', icon: Map },
  { href: '/plans', label: 'Plans', icon: CalendarDays },
  { href: '/journal', label: 'Journal', icon: NotebookPen },
  { href: '/settings', label: 'Settings', icon: Settings },
];

export function Sidebar() {
  const path = usePathname();

  return (
    <aside
      className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 z-40 border-r"
      style={{
        background: 'var(--shell-900)',
        borderColor: 'rgba(201,168,76,0.12)',
      }}
    >
      {/* Logo */}
      <div className="px-6 py-6 border-b" style={{ borderColor: 'rgba(201,168,76,0.12)' }}>
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, var(--gold-400), var(--gold-600))' }}
          >
            <BookMarked size={18} className="text-white" />
          </div>
          <div>
            <p className="font-bold text-lg tracking-tight" style={{ color: 'var(--gold-300)' }}>
              Graphe
            </p>
            <p className="text-xs" style={{ color: 'var(--shell-400)' }}>Holy Scripture</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {NAV.map(({ href, label, icon: Icon }) => {
          const active = href === '/' ? path === '/' : path.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 group',
                active
                  ? 'text-white'
                  : 'hover:text-white'
              )}
              style={
                active
                  ? { background: 'rgba(201,168,76,0.15)', color: 'var(--gold-300)' }
                  : { color: 'var(--shell-400)' }
              }
              onMouseEnter={(e) => {
                if (!active) (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.07)';
              }}
              onMouseLeave={(e) => {
                if (!active) (e.currentTarget as HTMLElement).style.background = '';
              }}
            >
              <Icon size={18} />
              <span className="text-sm font-medium">{label}</span>
              {active && (
                <ChevronRight
                  size={14}
                  className="ml-auto"
                  style={{ color: 'var(--gold-400)' }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Voice badge */}
      <div className="px-4 pb-6">
        <Link href="/settings">
          <div
            className="rounded-xl p-3 border cursor-pointer hover:border-opacity-60 transition-all"
            style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.2)' }}
          >
            <div className="flex items-center gap-2 mb-1">
              <Mic size={14} style={{ color: 'var(--gold-400)' }} />
              <span className="text-xs font-semibold" style={{ color: 'var(--gold-300)' }}>
                Voice Mode
              </span>
            </div>
            <p className="text-xs" style={{ color: 'var(--shell-400)' }}>
              Clone your voice to hear scripture in your own accent
            </p>
          </div>
        </Link>
      </div>
    </aside>
  );
}
