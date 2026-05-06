import { BibleChapterView } from '@/components/bible/BibleChapterView';

interface Props {
  params: Promise<{ book: string; chapter: string }>;
}

export default async function ChapterPage({ params }: Props) {
  const { book, chapter } = await params;
  return <BibleChapterView book={book} chapter={parseInt(chapter, 10)} />;
}
