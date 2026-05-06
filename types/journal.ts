export interface JournalEntry {
  id: string;
  title: string;
  content: string;
  verseReference?: string;
  verseText?: string;
  mood?: 'grateful' | 'hopeful' | 'peaceful' | 'struggling' | 'joyful' | 'reflective';
  tags: string[];
  createdAt: number;
  updatedAt: number;
}
