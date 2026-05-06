'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type HighlightColor = 'yellow' | 'green' | 'blue' | 'pink' | 'purple';

export interface Highlight {
  id: string;
  book: string;
  chapter: number;
  verse: number;
  color: HighlightColor;
  createdAt: number;
}

interface HighlightsState {
  highlights: Highlight[];
  addHighlight: (h: Omit<Highlight, 'id' | 'createdAt'>) => void;
  removeHighlight: (book: string, chapter: number, verse: number) => void;
  getHighlightForVerse: (book: string, chapter: number, verse: number) => Highlight | undefined;
  getHighlightsForChapter: (book: string, chapter: number) => Highlight[];
}

export const useHighlightsStore = create<HighlightsState>()(
  persist(
    (set, get) => ({
      highlights: [],
      addHighlight: (h) =>
        set((s) => {
          const filtered = s.highlights.filter(
            (x) => !(x.book === h.book && x.chapter === h.chapter && x.verse === h.verse)
          );
          return {
            highlights: [
              { ...h, id: `${h.book}-${h.chapter}-${h.verse}`, createdAt: Date.now() },
              ...filtered,
            ],
          };
        }),
      removeHighlight: (book, chapter, verse) =>
        set((s) => ({
          highlights: s.highlights.filter(
            (h) => !(h.book === book && h.chapter === chapter && h.verse === verse)
          ),
        })),
      getHighlightForVerse: (book, chapter, verse) =>
        get().highlights.find((h) => h.book === book && h.chapter === chapter && h.verse === verse),
      getHighlightsForChapter: (book, chapter) =>
        get().highlights.filter((h) => h.book === book && h.chapter === chapter),
    }),
    { name: 'graphe-highlights' }
  )
);
