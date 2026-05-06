'use client';
import { useState } from 'react';
import { useSettingsStore } from '@/stores/settingsStore';
import { Mic, Key, CheckCircle2, Loader2, Upload, Volume2, BookOpen, Bell, Palette } from 'lucide-react';

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
  const { elevenLabs, apiBibleKey, defaultTranslation, setElevenLabsConfig, setApiBibleKey, setDefaultTranslation } = useSettingsStore();
  const [testingKey, setTestingKey] = useState(false);
  const [keyStatus, setKeyStatus] = useState<'idle' | 'ok' | 'fail'>('idle');
  const [voices, setVoices] = useState<{ voice_id: string; name: string }[]>([]);
  const [testText, setTestText] = useState('For God so loved the world, that he gave his only begotten Son.');
  const [previewLoading, setPreviewLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  async function testApiKey() {
    if (!elevenLabs.apiKey) return;
    setTestingKey(true);
    setKeyStatus('idle');
    try {
      const res = await fetch('/api/voice/clone', {
        headers: { 'xi-api-key': elevenLabs.apiKey },
      });
      if (res.ok) {
        const data = await res.json();
        setVoices(data.voices ?? []);
        setKeyStatus('ok');
      } else {
        setKeyStatus('fail');
      }
    } catch {
      setKeyStatus('fail');
    } finally {
      setTestingKey(false);
    }
  }

  async function previewVoice() {
    if (!elevenLabs.apiKey || !elevenLabs.voiceId) return;
    setPreviewLoading(true);
    try {
      const res = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: testText,
          voiceId: elevenLabs.voiceId,
          apiKey: elevenLabs.apiKey,
          stability: elevenLabs.stability,
          similarityBoost: elevenLabs.similarityBoost,
          style: elevenLabs.style,
          speakerBoost: elevenLabs.speakerBoost,
        }),
      });
      if (res.ok) {
        const blob = await res.blob();
        setAudioUrl(URL.createObjectURL(blob));
      }
    } catch {
      alert('Preview failed.');
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

      {/* Translation */}
      <Section title="Bible Translation" icon={BookOpen}>
        <p className="text-sm mb-4" style={{ color: 'var(--shell-400)' }}>
          KJV is available instantly (no key needed). NKJV requires a free API.Bible account.
        </p>
        <div className="flex gap-3">
          {[
            { id: 'kjv', name: 'King James Version (KJV)', sub: 'Public domain · No key required · 1611', free: true },
            { id: 'nkjv', name: 'New King James Version (NKJV)', sub: 'Requires API.Bible key · Thomas Nelson 1982', free: false },
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setDefaultTranslation(t.id as any)}
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

        {defaultTranslation === 'nkjv' && (
          <div className="mt-4">
            <label className="text-xs font-bold uppercase tracking-widest mb-1.5 block" style={{ color: 'var(--shell-400)' }}>API.Bible Key</label>
            <input
              type="password"
              value={apiBibleKey}
              onChange={e => setApiBibleKey(e.target.value)}
              placeholder="Enter your API.Bible key…"
              className="w-full px-4 py-2.5 rounded-xl border outline-none text-sm"
              style={{ background: 'var(--shell-900)', borderColor: 'rgba(201,168,76,0.2)', color: 'var(--parchment-200)' }}
            />
            <p className="text-xs mt-1" style={{ color: 'var(--shell-500)' }}>
              Get a free key at scripture.api.bible
            </p>
          </div>
        )}
      </Section>

      {/* Voice cloning */}
      <Section title="Voice Cloning — ElevenLabs" icon={Mic}>
        <div className="rounded-xl p-4 mb-5" style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)' }}>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--parchment-200)' }}>
            <strong style={{ color: 'var(--gold-300)' }}>How it works:</strong> Create a free or paid account at elevenlabs.io, record 3+ minutes of your voice, clone it, and paste your API key here. Graphe will read the Bible to you in your own voice.
          </p>
        </div>

        {/* API Key */}
        <div className="mb-4">
          <label className="text-xs font-bold uppercase tracking-widest mb-1.5 block" style={{ color: 'var(--shell-400)' }}>ElevenLabs API Key</label>
          <div className="flex gap-2">
            <input
              type="password"
              value={elevenLabs.apiKey}
              onChange={e => setElevenLabsConfig({ apiKey: e.target.value })}
              placeholder="sk-…"
              className="flex-1 px-4 py-2.5 rounded-xl border outline-none text-sm"
              style={{ background: 'var(--shell-900)', borderColor: 'rgba(201,168,76,0.2)', color: 'var(--parchment-200)' }}
            />
            <button
              onClick={testApiKey}
              disabled={testingKey || !elevenLabs.apiKey}
              className="px-4 py-2.5 rounded-xl border font-bold text-sm flex items-center gap-2 transition-all"
              style={{ background: 'var(--shell-900)', borderColor: 'rgba(201,168,76,0.2)', color: 'var(--gold-400)' }}
            >
              {testingKey ? <Loader2 size={14} className="animate-spin" /> : keyStatus === 'ok' ? <CheckCircle2 size={14} style={{ color: '#B8E87B' }} /> : <Key size={14} />}
              Test
            </button>
          </div>
          {keyStatus === 'ok' && <p className="text-xs mt-1" style={{ color: '#B8E87B' }}>✓ API key valid — {voices.length} voice(s) found</p>}
          {keyStatus === 'fail' && <p className="text-xs mt-1" style={{ color: '#E87B7B' }}>✗ Invalid API key. Check your ElevenLabs account.</p>}
        </div>

        {/* Voice selection */}
        {voices.length > 0 && (
          <div className="mb-4">
            <label className="text-xs font-bold uppercase tracking-widest mb-1.5 block" style={{ color: 'var(--shell-400)' }}>Select Voice</label>
            <select
              value={elevenLabs.voiceId ?? ''}
              onChange={e => {
                const v = voices.find(x => x.voice_id === e.target.value);
                setElevenLabsConfig({ voiceId: e.target.value, voiceName: v?.name });
              }}
              className="w-full px-4 py-2.5 rounded-xl border text-sm"
              style={{ background: 'var(--shell-900)', borderColor: 'rgba(201,168,76,0.2)', color: 'var(--parchment-200)' }}
            >
              <option value="">— Choose a voice —</option>
              {voices.map(v => <option key={v.voice_id} value={v.voice_id}>{v.name}</option>)}
            </select>
            {elevenLabs.voiceName && (
              <p className="text-xs mt-1" style={{ color: '#B8E87B' }}>Active: {elevenLabs.voiceName}</p>
            )}
          </div>
        )}

        {/* Voice settings */}
        <div className="mb-4">
          <Slider label="Stability" value={elevenLabs.stability} onChange={v => setElevenLabsConfig({ stability: v })} description="Higher = more consistent; Lower = more expressive" />
          <Slider label="Similarity Boost" value={elevenLabs.similarityBoost} onChange={v => setElevenLabsConfig({ similarityBoost: v })} description="How closely to replicate the cloned voice" />
          <Slider label="Style Exaggeration" value={elevenLabs.style} onChange={v => setElevenLabsConfig({ style: v })} description="Amplifies the voice style (increase gently)" />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold" style={{ color: 'var(--parchment-200)' }}>Speaker Boost</p>
              <p className="text-xs" style={{ color: 'var(--shell-400)' }}>Boosts similarity to original voice</p>
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

        {/* Voice preview */}
        {elevenLabs.voiceId && (
          <div className="rounded-xl p-4 border" style={{ background: 'var(--shell-900)', borderColor: 'rgba(201,168,76,0.15)' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold-400)' }}>Preview Your Voice</p>
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
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all"
                style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--gold-300)', border: '1px solid rgba(201,168,76,0.3)' }}
              >
                {previewLoading ? <Loader2 size={14} className="animate-spin" /> : <Volume2 size={14} />}
                Generate Preview
              </button>
              {audioUrl && (
                <audio controls src={audioUrl} className="flex-1 h-8" style={{ accentColor: 'var(--gold-400)' }} />
              )}
            </div>
          </div>
        )}
      </Section>

      {/* Notifications */}
      <Section title="Notifications & Reminders" icon={Bell}>
        <p className="text-sm mb-4" style={{ color: 'var(--shell-400)' }}>
          Enable browser notifications to receive reminders for your reading plans. Set individual reminder times inside each plan.
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
