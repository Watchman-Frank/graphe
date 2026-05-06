'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AudioState {
  isPlaying: boolean;
  playbackSpeed: number;
  audioUrl: string | null;
  isLoading: boolean;
  autoAdvance: boolean;
  setPlaying: (v: boolean) => void;
  setPlaybackSpeed: (s: number) => void;
  setAudioUrl: (url: string | null) => void;
  setLoading: (v: boolean) => void;
  setAutoAdvance: (v: boolean) => void;
  reset: () => void;
}

export const useAudioStore = create<AudioState>()(
  persist(
    (set) => ({
      isPlaying: false,
      playbackSpeed: 1.0,
      audioUrl: null,
      isLoading: false,
      autoAdvance: false,
      setPlaying: (v) => set({ isPlaying: v }),
      setPlaybackSpeed: (s) => set({ playbackSpeed: s }),
      setAudioUrl: (url) => set({ audioUrl: url }),
      setLoading: (v) => set({ isLoading: v }),
      setAutoAdvance: (v) => set({ autoAdvance: v }),
      reset: () => set({ isPlaying: false, audioUrl: null, isLoading: false }),
    }),
    { name: 'graphe-audio', partialize: (s) => ({ playbackSpeed: s.playbackSpeed, autoAdvance: s.autoAdvance }) }
  )
);
