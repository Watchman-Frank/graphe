import type { Metadata } from 'next';
import './globals.css';
import { Sidebar } from '@/components/layout/Sidebar';
import { MobileNav } from '@/components/layout/MobileNav';

export const metadata: Metadata = {
  title: 'Graphe — Holy Scripture',
  description: 'Read, study and listen to the Holy Bible with deep theological resources, commentary, Greek & Hebrew word study, reading plans and journaling.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          <Sidebar />
          <main
            className="flex-1 md:ml-64 pb-20 md:pb-0 min-h-screen"
            style={{ background: 'var(--shell-950)' }}
          >
            {children}
          </main>
        </div>
        <MobileNav />
      </body>
    </html>
  );
}
