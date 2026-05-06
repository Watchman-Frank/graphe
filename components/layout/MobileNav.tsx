'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, GraduationCap, CalendarDays, NotebookPen, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

const NAV = [
  { href: '/bible', label: 'Read', icon: BookOpen },
  { href: '/study', label: 'Study', icon: GraduationCap },
  { href: '/plans', label: 'Plans', icon: CalendarDays },
  { href: '/journal', label: 'Journal', icon: NotebookPen },
  { href: '/books', label: 'More', icon: MoreHorizontal },
];

export function MobileNav() {
  const path = usePathname();

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around px-2 py-2 border-t"
      style={{ background: 'var(--shell-900)', borderColor: 'rgba(201,168,76,0.12)' }}
    >
      {NAV.map(({ href, label, icon: Icon }) => {
        const active = path.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className="flex flex-col items-center gap-1 px-3 py-1"
          >
            <Icon
              size={20}
              style={{ color: active ? 'var(--gold-400)' : 'var(--shell-400)' }}
            />
            <span
              className="text-xs"
              style={{ color: active ? 'var(--gold-300)' : 'var(--shell-400)' }}
            >
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
