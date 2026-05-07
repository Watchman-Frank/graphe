'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BookOpen, BookMarked, GraduationCap, Map, CalendarDays,
  NotebookPen, Settings, ChevronRight, Cross, Scroll, Menu, X
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
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const sidebarRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close on route change
  useEffect(() => { setOpen(false); }, [path]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (
        sidebarRef.current?.contains(e.target as Node) ||
        toggleRef.current?.contains(e.target as Node)
      ) return;
      setOpen(false);
    }
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [open]);

  return (
    <>
      {/* Toggle button — always visible on desktop */}
      <button
        ref={toggleRef}
        onClick={() => setOpen(o => !o)}
        className="hidden md:flex fixed top-4 left-4 z-50 w-9 h-9 items-center justify-center rounded-lg transition-all hover:scale-105"
        style={{
          background: 'var(--shell-800)',
          color: 'var(--gold-400)',
          border: '1px solid rgba(201,168,76,0.18)',
        }}
        aria-label={open ? 'Close navigation' : 'Open navigation'}
      >
        {open ? <X size={16} /> : <Menu size={16} />}
      </button>

      {/* Sidebar panel */}
      <aside
        ref={sidebarRef}
        className={cn(
          'hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 z-40 border-r transition-transform duration-200 ease-in-out',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
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
                  active ? 'text-white' : 'hover:text-white'
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
                  <ChevronRight size={14} className="ml-auto" style={{ color: 'var(--gold-400)' }} />
                )}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
