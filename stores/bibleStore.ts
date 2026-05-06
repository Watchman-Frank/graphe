'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Translation } from '@/types/bible';

interface RecentEntry {
  book: string;
  chapter: number;
  timestamp: number;
}

interface BibleState {
  currentBook: string;
  currentChapter: number;
  currentVerse: number | null;
  translation: Translation;
  fontSize: 'sm' | 'md' | 'lg' | 'xl';
  readingMode: 'normal' | 'focus' | 'study';
  recentlyRead: RecentEntry[];
  setCurrentPassage: (book: string, chapter: number) => void;
  setCurrentVerse: (verse: number | null) => void;
  setTranslation: (t: Translation) => void;
  setFontSize: (size: 'sm' | 'md' | 'lg' | 'xl') => void;
  setReadingMode: (mode: 'normal' | 'focus' | 'study') => void;
  addToRecentlyRead: (book: string, chapter: number) => void;
}

export const useBibleStore = create<BibleState>()(
  persist(
    (set) => ({
      currentBook: 'john',
      currentChapter: 1,
      currentVerse: null,
      translation: 'kjv',
      fontSize: 'md',
      readingMode: 'normal',
      recentlyRead: [],
      setCurrentPassage: (book, chapter) =>
        set({ currentBook: book, currentChapter: chapter }),
      setCurrentVerse: (verse) => set({ currentVerse: verse }),
      setTranslation: (t) => set({ translation: t }),
      setFontSize: (size) => set({ fontSize: size }),
      setReadingMode: (mode) => set({ readingMode: mode }),
      addToRecentlyRead: (book, chapter) =>
        set((state) => {
          const entry: RecentEntry = { book, chapter, timestamp: Date.now() };
          const filtered = state.recentlyRead.filter(
            (r) => !(r.book === book && r.chapter === chapter)
          );
          return { recentlyRead: [entry, ...filtered].slice(0, 10) };
        }),
    }),
    { name: 'graphe-bible' }
  )
);
