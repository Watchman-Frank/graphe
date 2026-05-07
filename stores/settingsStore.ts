'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Translation } from '@/types/bible';

interface ElevenLabsConfig {
  voiceId: string | null;
  voiceName: string | null;
  stability: number;
  similarityBoost: number;
  style: number;
  speakerBoost: boolean;
}

interface SettingsState {
  elevenLabs: ElevenLabsConfig;
  apiBibleKey: string;
  anthropicKey: string;
  theme: 'dark' | 'light';
  fontFamily: 'garamond' | 'georgia' | 'inter';
  notificationsEnabled: boolean;
  defaultTranslation: Translation;
  setElevenLabsConfig: (config: Partial<ElevenLabsConfig>) => void;
  setApiBibleKey: (key: string) => void;
  setAnthropicKey: (key: string) => void;
  setTheme: (theme: 'dark' | 'light') => void;
  setFontFamily: (font: 'garamond' | 'georgia' | 'inter') => void;
  setDefaultTranslation: (t: Translation) => void;
  toggleNotifications: () => void;
}

const defaultElevenLabs: ElevenLabsConfig = {
  voiceId: null,
  voiceName: null,
  stability: 0.5,
  similarityBoost: 0.75,
  style: 0.0,
  speakerBoost: true,
};

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      elevenLabs: defaultElevenLabs,
      apiBibleKey: '',
      anthropicKey: '',
      theme: 'dark',
      fontFamily: 'garamond',
      notificationsEnabled: false,
      defaultTranslation: 'kjv',
      setElevenLabsConfig: (config) =>
        set((s) => ({ elevenLabs: { ...s.elevenLabs, ...config } })),
      setApiBibleKey: (key) => set({ apiBibleKey: key }),
      setAnthropicKey: (key) => set({ anthropicKey: key }),
      setTheme: (theme) => set({ theme }),
      setFontFamily: (fontFamily) => set({ fontFamily }),
      setDefaultTranslation: (t) => set({ defaultTranslation: t }),
      toggleNotifications: () =>
        set((s) => ({ notificationsEnabled: !s.notificationsEnabled })),
    }),
    { name: 'graphe-settings' }
  )
);
