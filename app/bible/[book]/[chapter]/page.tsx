import { BibleChapterView } from '@/components/bible/BibleChapterView';

interface Props {
  params: Promise<{ book: string; chapter: string }>;
  searchParams: Promise<{ verse?: string }>;
}

export default async function ChapterPage({ params, searchParams }: Props) {
  const { book, chapter } = await params;
  const { verse } = await searchParams;
  return (
    <BibleChapterView
      book={book}
      chapter={parseInt(chapter, 10)}
      initialVerse={verse ? parseInt(verse, 10) : undefined}
    />
  );
}
