'use client';
import { useEffect, useState } from 'react';
import { WifiOff, Wifi } from 'lucide-react';

export function OfflineBanner() {
  const [offline, setOffline] = useState(false);
  const [justReconnected, setJustReconnected] = useState(false);

  useEffect(() => {
    setOffline(!navigator.onLine);

    function handleOffline() {
      setOffline(true);
      setJustReconnected(false);
    }

    function handleOnline() {
      setOffline(false);
      setJustReconnected(true);
      setTimeout(() => setJustReconnected(false), 3000);
    }

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);
    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  if (!offline && !justReconnected) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold"
      style={{
        background: offline ? 'rgba(120,60,20,0.97)' : 'rgba(30,80,40,0.97)',
        backdropFilter: 'blur(8px)',
        color: offline ? '#fcd7a0' : '#a7f3c0',
      }}
    >
      {offline ? (
        <>
          <WifiOff size={13} />
          You&apos;re offline — showing cached scripture and study data
        </>
      ) : (
        <>
          <Wifi size={13} />
          Back online
        </>
      )}
    </div>
  );
}
