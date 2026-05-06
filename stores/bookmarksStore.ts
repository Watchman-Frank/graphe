'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Bookmark {
  id: string;
  book: string;
  chapter: number;
  verse: number;
  text: string;
  note?: string;
  color: string;
  createdAt: number;
}

interface BookmarksState {
  bookmarks: Bookmark[];
  addBookmark: (b: Omit<Bookmark, 'id' | 'createdAt'>) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (book: string, chapter: number, verse: number) => boolean;
  getBookmarksForChapter: (book: string, chapter: number) => Bookmark[];
}

export const useBookmarksStore = create<BookmarksState>()(
  persist(
    (set, get) => ({
      bookmarks: [],
      addBookmark: (b) =>
        set((s) => ({
          bookmarks: [
            { ...b, id: `${b.book}-${b.chapter}-${b.verse}-${Date.now()}`, createdAt: Date.now() },
            ...s.bookmarks,
          ],
        })),
      removeBookmark: (id) =>
        set((s) => ({ bookmarks: s.bookmarks.filter((b) => b.id !== id) })),
      isBookmarked: (book, chapter, verse) =>
        get().bookmarks.some((b) => b.book === book && b.chapter === chapter && b.verse === verse),
      getBookmarksForChapter: (book, chapter) =>
        get().bookmarks.filter((b) => b.book === book && b.chapter === chapter),
    }),
    { name: 'graphe-bookmarks' }
  )
);
