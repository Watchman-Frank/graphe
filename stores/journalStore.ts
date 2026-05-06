'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { JournalEntry } from '@/types/journal';

interface JournalState {
  entries: JournalEntry[];
  createEntry: (e: Omit<JournalEntry, 'id' | 'createdAt' | 'updatedAt'>) => string;
  updateEntry: (id: string, updates: Partial<JournalEntry>) => void;
  deleteEntry: (id: string) => void;
  getEntry: (id: string) => JournalEntry | undefined;
  searchEntries: (query: string) => JournalEntry[];
}

export const useJournalStore = create<JournalState>()(
  persist(
    (set, get) => ({
      entries: [],
      createEntry: (e) => {
        const id = `journal-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
        const now = Date.now();
        set((s) => ({
          entries: [{ ...e, id, createdAt: now, updatedAt: now }, ...s.entries],
        }));
        return id;
      },
      updateEntry: (id, updates) =>
        set((s) => ({
          entries: s.entries.map((e) =>
            e.id === id ? { ...e, ...updates, updatedAt: Date.now() } : e
          ),
        })),
      deleteEntry: (id) =>
        set((s) => ({ entries: s.entries.filter((e) => e.id !== id) })),
      getEntry: (id) => get().entries.find((e) => e.id === id),
      searchEntries: (query) => {
        const q = query.toLowerCase();
        return get().entries.filter(
          (e) =>
            e.title.toLowerCase().includes(q) ||
            e.content.toLowerCase().includes(q) ||
            e.tags.some((t) => t.toLowerCase().includes(q))
        );
      },
    }),
    { name: 'graphe-journal' }
  )
);
