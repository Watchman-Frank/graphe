'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface VerseNotesState {
  notes: Record<string, string>; // key: "book:chapter:verse"
  setNote: (book: string, chapter: number, verse: number, text: string) => void;
  removeNote: (book: string, chapter: number, verse: number) => void;
  getNote: (book: string, chapter: number, verse: number) => string;
}

function key(book: string, chapter: number, verse: number) {
  return `${book}:${chapter}:${verse}`;
}

export const useVerseNotesStore = create<VerseNotesState>()(
  persist(
    (set, get) => ({
      notes: {},
      setNote: (book, chapter, verse, text) =>
        set(s => ({ notes: { ...s.notes, [key(book, chapter, verse)]: text } })),
      removeNote: (book, chapter, verse) =>
        set(s => {
          const next = { ...s.notes };
          delete next[key(book, chapter, verse)];
          return { notes: next };
        }),
      getNote: (book, chapter, verse) => get().notes[key(book, chapter, verse)] ?? '',
    }),
    { name: 'graphe-verse-notes' }
  )
);
