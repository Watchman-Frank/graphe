import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Sidebar } from '@/components/layout/Sidebar';
import { MobileNav } from '@/components/layout/MobileNav';
import { OfflineBanner } from '@/components/OfflineBanner';
import { ServiceWorkerRegistrar } from '@/components/ServiceWorkerRegistrar';

export const metadata: Metadata = {
  title: 'Graphe — Holy Scripture',
  description: 'Read, study and listen to the Holy Bible with deep theological resources, commentary, Greek & Hebrew word study, reading plans and journaling.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Graphe',
  },
  icons: {
    icon: '/icon-192.png',
    apple: '/icon-192.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#C9A84C',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ServiceWorkerRegistrar />
        <OfflineBanner />
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
