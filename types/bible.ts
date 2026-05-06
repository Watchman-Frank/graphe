export interface BibleVerse {
  book_id: string;
  book_name: string;
  chapter: number;
  verse: number;
  text: string;
}

export interface BiblePassage {
  reference: string;
  verses: BibleVerse[];
  text: string;
  translation_id: string;
  translation_name: string;
}

export type BookCategory =
  | 'law'
  | 'history'
  | 'poetry'
  | 'major-prophets'
  | 'minor-prophets'
  | 'gospels'
  | 'acts'
  | 'epistles'
  | 'prophecy';

export interface BibleBook {
  id: string;
  name: string;
  testament: 'OT' | 'NT';
  chapters: number;
  category: BookCategory;
  abbreviation: string;
  order: number;
  author?: string;
  dateWritten?: string;
  theme?: string;
  keyVerse?: string;
}

export type Translation = 'kjv' | 'nkjv';

export interface TranslationOption {
  id: Translation;
  name: string;
  fullName: string;
  requiresKey: boolean;
}
