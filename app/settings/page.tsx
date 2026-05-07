'use client';
import { useEffect, useState } from 'react';
import { useSettingsStore } from '@/stores/settingsStore';
import { useBibleStore } from '@/stores/bibleStore';
import { Mic, Loader2, Volume2, BookOpen, Bell, Check } from 'lucide-react';

const SPEEDS = [0.75, 1.0, 1.25, 1.5, 2.0];

function Section({ title, icon: Icon, children }: { title: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border p-6 mb-5" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.12)' }}>
      <div className="flex items-center gap-2 mb-5">
        <Icon size={16} style={{ color: 'var(--gold-400)' }} />
        <h2 className="font-bold text-sm uppercase tracking-widest" style={{ color: 'var(--gold-400)' }}>{title}</h2>
      </div>
      {children}
    </div>
  );
}

function Slider({ label, value, onChange, min = 0, max = 1, step = 0.05, description }: {
  label: string; value: number; onChange: (v: number) => void;
  min?: number; max?: number; step?: number; description?: string;
}) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1">
        <label className="text-sm font-semibold" style={{ color: 'var(--parchment-200)' }}>{label}</label>
        <span className="text-xs font-mono" style={{ color: 'var(--gold-400)' }}>{value.toFixed(2)}</span>
      </div>
      {description && <p className="text-xs mb-1.5" style={{ color: 'var(--shell-400)' }}>{description}</p>}
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full accent-yellow-400"
      />
    </div>
  );
}

export default function SettingsPage() {
  const { elevenLabs, defaultTranslation, setElevenLabsConfig, setDefaultTranslation } = useSettingsStore();
  const { setTranslation: setBibleTranslation } = useBibleStore();

  const [voices, setVoices] = useState<{ voice_id: string; name: string; category?: string }[]>([]);
  const [voicesLoading, setVoicesLoading] = useState(false);
  const [voicesError, setVoicesError] = useState('');

  const [testText, setTestText] = useState('For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.');
  const [previewLoading, setPreviewLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  function loadVoices() {
    setVoicesLoading(true);
    setVoicesError('');
    fetch('/api/voice/clone')
      .then(r => r.json())
      .then(data => {
        if (data.error) throw new Error(data.error);
        const list: { voice_id: string; name: string; category?: string }[] = data.voices ?? [];
        setVoices(list);

        // Auto-select "franko 1" (or first cloned/custom voice) if none selected yet
        if (!elevenLabs.voiceId && list.length > 0) {
          const preferred = list.find(v => v.name.toLowerCase().includes('franko'));
          const cloned = list.find(v => v.category === 'cloned' || v.category === 'professional' || v.category === 'generated');
          const pick = preferred ?? cloned ?? list[0];
          if (pick) setElevenLabsConfig({ voiceId: pick.voice_id, voiceName: pick.name });
        }
      })
      .catch(err => setVoicesError(err.message ?? 'Could not load voices.'))
      .finally(() => setVoicesLoading(false));
  }

  useEffect(() => {
    loadVoices();
  }, []);

  async function previewVoice() {
    if (!elevenLabs.voiceId) return;
    setPreviewLoading(true);
    try {
      const res = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: testText,
          voiceId: elevenLabs.voiceId,
          stability: elevenLabs.stability,
          similarityBoost: elevenLabs.similarityBoost,
          style: elevenLabs.style,
          speakerBoost: elevenLabs.speakerBoost,
        }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error ?? 'Preview failed');
      }
      const blob = await res.blob();
      setAudioUrl(URL.createObjectURL(blob));
    } catch (e: any) {
      alert(e.message ?? 'Preview failed.');
    } finally {
      setPreviewLoading(false);
    }
  }

  return (
    <div className="px-4 py-8 md:px-10 md:py-12 max-w-2xl">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--gold-400)' }}>Configuration</p>
        <h1 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia,serif' }}>Settings</h1>
      </div>

      {/* ── Voice selection ─────────────────────────────────────────────────── */}
      <Section title="Reading Voice" icon={Mic}>
        {voicesLoading ? (
          <div className="flex items-center gap-2 py-2" style={{ color: 'var(--shell-400)' }}>
            <Loader2 size={15} className="animate-spin" />
            <span className="text-sm">Loading voices…</span>
          </div>
        ) : voicesError ? (
          <div>
            <p className="text-sm mb-2" style={{ color: '#e87b7b' }}>{voicesError}</p>
            <button
              onClick={() => loadVoices()}
              className="text-xs px-3 py-1.5 rounded-lg border"
              style={{ borderColor: 'rgba(201,168,76,0.3)', color: 'var(--gold-400)' }}
            >
              Retry
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {voices.map(v => {
              const active = elevenLabs.voiceId === v.voice_id;
              return (
                <button
                  key={v.voice_id}
                  onClick={() => setElevenLabsConfig({ voiceId: v.voice_id, voiceName: v.name })}
                  className="flex items-center justify-between px-4 py-3 rounded-xl border text-left transition-all hover:scale-[1.01]"
                  style={
                    active
                      ? { background: 'rgba(201,168,76,0.12)', borderColor: 'rgba(201,168,76,0.4)' }
                      : { background: 'var(--shell-900)', borderColor: 'rgba(255,255,255,0.07)' }
                  }
                >
                  <div>
                    <p className="text-sm font-semibold" style={{ color: 'var(--parchment-200)' }}>{v.name}</p>
                    {v.category && (
                      <p className="text-xs capitalize" style={{ color: 'var(--shell-500)' }}>{v.category}</p>
                    )}
                  </div>
                  {active && <Check size={15} style={{ color: 'var(--gold-400)' }} />}
                </button>
              );
            })}
          </div>
        )}

        {/* Audio quality sliders */}
        {voices.length > 0 && elevenLabs.voiceId && (
          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--shell-400)' }}>Voice Quality</p>
            <Slider label="Stability" value={elevenLabs.stability} onChange={v => setElevenLabsConfig({ stability: v })} description="Higher = more consistent; Lower = more expressive" />
            <Slider label="Similarity Boost" value={elevenLabs.similarityBoost} onChange={v => setElevenLabsConfig({ similarityBoost: v })} description="How closely to replicate the cloned voice" />
            <Slider label="Style Exaggeration" value={elevenLabs.style} onChange={v => setElevenLabsConfig({ style: v })} description="Amplifies the voice style (increase gently)" />
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-semibold" style={{ color: 'var(--parchment-200)' }}>Speaker Boost</p>
                <p className="text-xs" style={{ color: 'var(--shell-400)' }}>Boosts similarity to the original voice</p>
              </div>
              <button
                onClick={() => setElevenLabsConfig({ speakerBoost: !elevenLabs.speakerBoost })}
                className="relative w-11 h-6 rounded-full transition-all"
                style={{ background: elevenLabs.speakerBoost ? 'var(--gold-400)' : 'var(--shell-600)' }}
              >
                <div className="absolute top-0.5 rounded-full w-5 h-5 bg-white transition-all" style={{ left: elevenLabs.speakerBoost ? '1.375rem' : '0.125rem' }} />
              </button>
            </div>
          </div>
        )}

        {/* Voice preview */}
        {elevenLabs.voiceId && (
          <div className="rounded-xl p-4 border mt-2" style={{ background: 'var(--shell-900)', borderColor: 'rgba(201,168,76,0.15)' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold-400)' }}>Test Voice</p>
            <textarea
              value={testText}
              onChange={e => setTestText(e.target.value)}
              rows={2}
              className="w-full px-3 py-2 rounded-lg border text-sm outline-none mb-2 scripture-font"
              style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.15)', color: 'var(--parchment-200)', resize: 'none' }}
            />
            <div className="flex items-center gap-3">
              <button
                onClick={previewVoice}
                disabled={previewLoading}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105"
                style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--gold-300)', border: '1px solid rgba(201,168,76,0.3)' }}
              >
                {previewLoading ? <Loader2 size={14} className="animate-spin" /> : <Volume2 size={14} />}
                {previewLoading ? 'Generating…' : 'Preview Voice'}
              </button>
              {audioUrl && (
                <audio controls src={audioUrl} className="flex-1 h-8" style={{ accentColor: 'var(--gold-400)' }} autoPlay />
              )}
            </div>
          </div>
        )}
      </Section>

      {/* ── Translation ──────────────────────────────────────────────────────── */}
      <Section title="Bible Translation" icon={BookOpen}>
        <div className="flex gap-3">
          {[
            { id: 'kjv', sub: 'King James Version · Public domain' },
            { id: 'nkjv', sub: 'New King James Version · Thomas Nelson' },
          ].map(t => (
            <button
              key={t.id}
              onClick={() => { setDefaultTranslation(t.id as any); setBibleTranslation(t.id as any); }}
              className="flex-1 rounded-xl p-3 border text-left transition-all"
              style={
                defaultTranslation === t.id
                  ? { background: 'rgba(201,168,76,0.12)', borderColor: 'rgba(201,168,76,0.4)' }
                  : { background: 'var(--shell-900)', borderColor: 'rgba(255,255,255,0.07)' }
              }
            >
              <p className="font-bold text-sm mb-0.5" style={{ color: 'var(--parchment-200)' }}>{t.id.toUpperCase()}</p>
              <p className="text-xs" style={{ color: 'var(--shell-400)' }}>{t.sub}</p>
            </button>
          ))}
        </div>
      </Section>

      {/* ── Notifications ────────────────────────────────────────────────────── */}
      <Section title="Notifications & Reminders" icon={Bell}>
        <p className="text-sm mb-4" style={{ color: 'var(--shell-400)' }}>
          Enable browser notifications to receive reminders for your reading plans.
        </p>
        <button
          onClick={async () => {
            const perm = await Notification.requestPermission();
            if (perm === 'granted') alert('Notifications enabled! Set reminder times in your reading plans.');
          }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl border font-bold text-sm transition-all hover:scale-105"
          style={{ background: 'rgba(201,168,76,0.08)', borderColor: 'rgba(201,168,76,0.25)', color: 'var(--gold-300)' }}
        >
          <Bell size={14} /> Enable Notifications
        </button>
      </Section>
    </div>
  );
}
