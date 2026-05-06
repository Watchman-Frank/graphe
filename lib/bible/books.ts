import type { BibleBook, TranslationOption } from '@/types/bible';

export const BIBLE_BOOKS: BibleBook[] = [
  // Old Testament - Law
  { id: 'genesis', name: 'Genesis', testament: 'OT', chapters: 50, category: 'law', abbreviation: 'Gen', order: 1, author: 'Moses', dateWritten: '1450–1410 BC', theme: 'Beginnings and covenant', keyVerse: 'Genesis 1:1' },
  { id: 'exodus', name: 'Exodus', testament: 'OT', chapters: 40, category: 'law', abbreviation: 'Exo', order: 2, author: 'Moses', dateWritten: '1450–1410 BC', theme: 'Redemption and the Law', keyVerse: 'Exodus 20:2' },
  { id: 'leviticus', name: 'Leviticus', testament: 'OT', chapters: 27, category: 'law', abbreviation: 'Lev', order: 3, author: 'Moses', dateWritten: '1450–1410 BC', theme: 'Holiness and worship', keyVerse: 'Leviticus 19:2' },
  { id: 'numbers', name: 'Numbers', testament: 'OT', chapters: 36, category: 'law', abbreviation: 'Num', order: 4, author: 'Moses', dateWritten: '1450–1410 BC', theme: 'Wilderness journey and faithfulness', keyVerse: 'Numbers 6:24-26' },
  { id: 'deuteronomy', name: 'Deuteronomy', testament: 'OT', chapters: 34, category: 'law', abbreviation: 'Deu', order: 5, author: 'Moses', dateWritten: '1410 BC', theme: 'Covenant renewal', keyVerse: 'Deuteronomy 6:5' },
  // History
  { id: 'joshua', name: 'Joshua', testament: 'OT', chapters: 24, category: 'history', abbreviation: 'Jos', order: 6, author: 'Joshua', dateWritten: '1400–1370 BC', theme: 'Conquest and faithfulness', keyVerse: 'Joshua 1:9' },
  { id: 'judges', name: 'Judges', testament: 'OT', chapters: 21, category: 'history', abbreviation: 'Jdg', order: 7, author: 'Samuel', dateWritten: '1045–1000 BC', theme: 'Cycles of sin and deliverance', keyVerse: 'Judges 21:25' },
  { id: 'ruth', name: 'Ruth', testament: 'OT', chapters: 4, category: 'history', abbreviation: 'Rut', order: 8, author: 'Samuel', dateWritten: '1011–931 BC', theme: 'Loyalty and redemption', keyVerse: 'Ruth 1:16' },
  { id: '1samuel', name: '1 Samuel', testament: 'OT', chapters: 31, category: 'history', abbreviation: '1Sa', order: 9, author: 'Samuel/Nathan', dateWritten: '930 BC', theme: 'Transition to monarchy', keyVerse: '1 Samuel 16:7' },
  { id: '2samuel', name: '2 Samuel', testament: 'OT', chapters: 24, category: 'history', abbreviation: '2Sa', order: 10, author: 'Nathan/Gad', dateWritten: '930 BC', theme: 'David\'s reign', keyVerse: '2 Samuel 7:16' },
  { id: '1kings', name: '1 Kings', testament: 'OT', chapters: 22, category: 'history', abbreviation: '1Ki', order: 11, author: 'Jeremiah', dateWritten: '550 BC', theme: 'Kingdom united and divided', keyVerse: '1 Kings 8:56' },
  { id: '2kings', name: '2 Kings', testament: 'OT', chapters: 25, category: 'history', abbreviation: '2Ki', order: 12, author: 'Jeremiah', dateWritten: '550 BC', theme: 'Fall of kingdoms', keyVerse: '2 Kings 17:23' },
  { id: '1chronicles', name: '1 Chronicles', testament: 'OT', chapters: 29, category: 'history', abbreviation: '1Ch', order: 13, author: 'Ezra', dateWritten: '450–425 BC', theme: 'Temple and worship', keyVerse: '1 Chronicles 29:11' },
  { id: '2chronicles', name: '2 Chronicles', testament: 'OT', chapters: 36, category: 'history', abbreviation: '2Ch', order: 14, author: 'Ezra', dateWritten: '450–425 BC', theme: 'God\'s faithfulness to David\'s line', keyVerse: '2 Chronicles 7:14' },
  { id: 'ezra', name: 'Ezra', testament: 'OT', chapters: 10, category: 'history', abbreviation: 'Ezr', order: 15, author: 'Ezra', dateWritten: '440 BC', theme: 'Restoration and reform', keyVerse: 'Ezra 7:10' },
  { id: 'nehemiah', name: 'Nehemiah', testament: 'OT', chapters: 13, category: 'history', abbreviation: 'Neh', order: 16, author: 'Nehemiah', dateWritten: '445–420 BC', theme: 'Rebuilding and prayer', keyVerse: 'Nehemiah 8:10' },
  { id: 'esther', name: 'Esther', testament: 'OT', chapters: 10, category: 'history', abbreviation: 'Est', order: 17, author: 'Mordecai', dateWritten: '483–473 BC', theme: 'God\'s providence', keyVerse: 'Esther 4:14' },
  // Poetry
  { id: 'job', name: 'Job', testament: 'OT', chapters: 42, category: 'poetry', abbreviation: 'Job', order: 18, author: 'Job/Moses', dateWritten: '2000–1800 BC', theme: 'Suffering and sovereignty', keyVerse: 'Job 19:25' },
  { id: 'psalms', name: 'Psalms', testament: 'OT', chapters: 150, category: 'poetry', abbreviation: 'Psa', order: 19, author: 'David and others', dateWritten: '1440–586 BC', theme: 'Prayer, praise and worship', keyVerse: 'Psalm 23:1' },
  { id: 'proverbs', name: 'Proverbs', testament: 'OT', chapters: 31, category: 'poetry', abbreviation: 'Pro', order: 20, author: 'Solomon', dateWritten: '971–686 BC', theme: 'Wisdom for daily life', keyVerse: 'Proverbs 3:5-6' },
  { id: 'ecclesiastes', name: 'Ecclesiastes', testament: 'OT', chapters: 12, category: 'poetry', abbreviation: 'Ecc', order: 21, author: 'Solomon', dateWritten: '935 BC', theme: 'Meaning and purpose under the sun', keyVerse: 'Ecclesiastes 12:13' },
  { id: 'songofsolomon', name: 'Song of Solomon', testament: 'OT', chapters: 8, category: 'poetry', abbreviation: 'SoS', order: 22, author: 'Solomon', dateWritten: '965 BC', theme: 'Love and covenant intimacy', keyVerse: 'Song of Solomon 8:6' },
  // Major Prophets
  { id: 'isaiah', name: 'Isaiah', testament: 'OT', chapters: 66, category: 'major-prophets', abbreviation: 'Isa', order: 23, author: 'Isaiah', dateWritten: '740–700 BC', theme: 'Salvation and the coming Messiah', keyVerse: 'Isaiah 53:5' },
  { id: 'jeremiah', name: 'Jeremiah', testament: 'OT', chapters: 52, category: 'major-prophets', abbreviation: 'Jer', order: 24, author: 'Jeremiah', dateWritten: '627–586 BC', theme: 'Judgment and the new covenant', keyVerse: 'Jeremiah 29:11' },
  { id: 'lamentations', name: 'Lamentations', testament: 'OT', chapters: 5, category: 'major-prophets', abbreviation: 'Lam', order: 25, author: 'Jeremiah', dateWritten: '586 BC', theme: 'Grief and hope amid destruction', keyVerse: 'Lamentations 3:22-23' },
  { id: 'ezekiel', name: 'Ezekiel', testament: 'OT', chapters: 48, category: 'major-prophets', abbreviation: 'Eze', order: 26, author: 'Ezekiel', dateWritten: '593–571 BC', theme: 'God\'s glory and restoration', keyVerse: 'Ezekiel 36:26' },
  { id: 'daniel', name: 'Daniel', testament: 'OT', chapters: 12, category: 'major-prophets', abbreviation: 'Dan', order: 27, author: 'Daniel', dateWritten: '605–530 BC', theme: 'God\'s sovereignty over nations', keyVerse: 'Daniel 2:44' },
  // Minor Prophets
  { id: 'hosea', name: 'Hosea', testament: 'OT', chapters: 14, category: 'minor-prophets', abbreviation: 'Hos', order: 28, author: 'Hosea', dateWritten: '755–715 BC', theme: 'God\'s faithful love', keyVerse: 'Hosea 6:6' },
  { id: 'joel', name: 'Joel', testament: 'OT', chapters: 3, category: 'minor-prophets', abbreviation: 'Joe', order: 29, author: 'Joel', dateWritten: '835–796 BC', theme: 'The Day of the Lord', keyVerse: 'Joel 2:28' },
  { id: 'amos', name: 'Amos', testament: 'OT', chapters: 9, category: 'minor-prophets', abbreviation: 'Amo', order: 30, author: 'Amos', dateWritten: '760–753 BC', theme: 'Social justice and righteousness', keyVerse: 'Amos 5:24' },
  { id: 'obadiah', name: 'Obadiah', testament: 'OT', chapters: 1, category: 'minor-prophets', abbreviation: 'Oba', order: 31, author: 'Obadiah', dateWritten: '840 BC', theme: 'Judgment on Edom', keyVerse: 'Obadiah 1:15' },
  { id: 'jonah', name: 'Jonah', testament: 'OT', chapters: 4, category: 'minor-prophets', abbreviation: 'Jon', order: 32, author: 'Jonah', dateWritten: '785–775 BC', theme: 'God\'s mercy for all nations', keyVerse: 'Jonah 2:9' },
  { id: 'micah', name: 'Micah', testament: 'OT', chapters: 7, category: 'minor-prophets', abbreviation: 'Mic', order: 33, author: 'Micah', dateWritten: '742–687 BC', theme: 'Justice, mercy and humility', keyVerse: 'Micah 6:8' },
  { id: 'nahum', name: 'Nahum', testament: 'OT', chapters: 3, category: 'minor-prophets', abbreviation: 'Nah', order: 34, author: 'Nahum', dateWritten: '663–612 BC', theme: 'God\'s judgment on Nineveh', keyVerse: 'Nahum 1:7' },
  { id: 'habakkuk', name: 'Habakkuk', testament: 'OT', chapters: 3, category: 'minor-prophets', abbreviation: 'Hab', order: 35, author: 'Habakkuk', dateWritten: '612–589 BC', theme: 'Faith in God\'s justice', keyVerse: 'Habakkuk 2:4' },
  { id: 'zephaniah', name: 'Zephaniah', testament: 'OT', chapters: 3, category: 'minor-prophets', abbreviation: 'Zep', order: 36, author: 'Zephaniah', dateWritten: '640–609 BC', theme: 'The Day of the Lord and restoration', keyVerse: 'Zephaniah 3:17' },
  { id: 'haggai', name: 'Haggai', testament: 'OT', chapters: 2, category: 'minor-prophets', abbreviation: 'Hag', order: 37, author: 'Haggai', dateWritten: '520 BC', theme: 'Rebuild the temple; prioritize God', keyVerse: 'Haggai 2:9' },
  { id: 'zechariah', name: 'Zechariah', testament: 'OT', chapters: 14, category: 'minor-prophets', abbreviation: 'Zec', order: 38, author: 'Zechariah', dateWritten: '520–480 BC', theme: 'Messianic visions and hope', keyVerse: 'Zechariah 9:9' },
  { id: 'malachi', name: 'Malachi', testament: 'OT', chapters: 4, category: 'minor-prophets', abbreviation: 'Mal', order: 39, author: 'Malachi', dateWritten: '430 BC', theme: 'Return to God; the coming messenger', keyVerse: 'Malachi 4:2' },
  // New Testament - Gospels
  { id: 'matthew', name: 'Matthew', testament: 'NT', chapters: 28, category: 'gospels', abbreviation: 'Mat', order: 40, author: 'Matthew (Levi)', dateWritten: 'AD 50–70', theme: 'Jesus as the promised King', keyVerse: 'Matthew 28:19-20' },
  { id: 'mark', name: 'Mark', testament: 'NT', chapters: 16, category: 'gospels', abbreviation: 'Mar', order: 41, author: 'John Mark', dateWritten: 'AD 55–65', theme: 'Jesus as the Servant who acts', keyVerse: 'Mark 10:45' },
  { id: 'luke', name: 'Luke', testament: 'NT', chapters: 24, category: 'gospels', abbreviation: 'Luk', order: 42, author: 'Luke', dateWritten: 'AD 60–61', theme: 'Jesus as the perfect Son of Man', keyVerse: 'Luke 19:10' },
  { id: 'john', name: 'John', testament: 'NT', chapters: 21, category: 'gospels', abbreviation: 'Joh', order: 43, author: 'John the Apostle', dateWritten: 'AD 85–90', theme: 'Jesus as the divine Son of God', keyVerse: 'John 3:16' },
  // Acts
  { id: 'acts', name: 'Acts', testament: 'NT', chapters: 28, category: 'acts', abbreviation: 'Act', order: 44, author: 'Luke', dateWritten: 'AD 61–62', theme: 'The Holy Spirit and spread of the Gospel', keyVerse: 'Acts 1:8' },
  // Epistles - Paul's letters
  { id: 'romans', name: 'Romans', testament: 'NT', chapters: 16, category: 'epistles', abbreviation: 'Rom', order: 45, author: 'Paul', dateWritten: 'AD 56–57', theme: 'The Gospel: righteousness through faith', keyVerse: 'Romans 8:28' },
  { id: '1corinthians', name: '1 Corinthians', testament: 'NT', chapters: 16, category: 'epistles', abbreviation: '1Co', order: 46, author: 'Paul', dateWritten: 'AD 55', theme: 'Unity, holiness and love in the church', keyVerse: '1 Corinthians 13:13' },
  { id: '2corinthians', name: '2 Corinthians', testament: 'NT', chapters: 13, category: 'epistles', abbreviation: '2Co', order: 47, author: 'Paul', dateWritten: 'AD 55–56', theme: 'Suffering and the glory of ministry', keyVerse: '2 Corinthians 12:9' },
  { id: 'galatians', name: 'Galatians', testament: 'NT', chapters: 6, category: 'epistles', abbreviation: 'Gal', order: 48, author: 'Paul', dateWritten: 'AD 48–49', theme: 'Freedom through faith, not the Law', keyVerse: 'Galatians 2:20' },
  { id: 'ephesians', name: 'Ephesians', testament: 'NT', chapters: 6, category: 'epistles', abbreviation: 'Eph', order: 49, author: 'Paul', dateWritten: 'AD 60–62', theme: 'The church as body of Christ', keyVerse: 'Ephesians 2:8-9' },
  { id: 'philippians', name: 'Philippians', testament: 'NT', chapters: 4, category: 'epistles', abbreviation: 'Phi', order: 50, author: 'Paul', dateWritten: 'AD 60–62', theme: 'Joy in Christ in all circumstances', keyVerse: 'Philippians 4:13' },
  { id: 'colossians', name: 'Colossians', testament: 'NT', chapters: 4, category: 'epistles', abbreviation: 'Col', order: 51, author: 'Paul', dateWritten: 'AD 60–62', theme: 'The supremacy of Christ', keyVerse: 'Colossians 1:16-17' },
  { id: '1thessalonians', name: '1 Thessalonians', testament: 'NT', chapters: 5, category: 'epistles', abbreviation: '1Th', order: 52, author: 'Paul', dateWritten: 'AD 51', theme: 'Holiness and the return of Christ', keyVerse: '1 Thessalonians 4:16-17' },
  { id: '2thessalonians', name: '2 Thessalonians', testament: 'NT', chapters: 3, category: 'epistles', abbreviation: '2Th', order: 53, author: 'Paul', dateWritten: 'AD 51–52', theme: 'Standing firm until Christ\'s return', keyVerse: '2 Thessalonians 3:3' },
  { id: '1timothy', name: '1 Timothy', testament: 'NT', chapters: 6, category: 'epistles', abbreviation: '1Ti', order: 54, author: 'Paul', dateWritten: 'AD 62–64', theme: 'Church leadership and sound doctrine', keyVerse: '1 Timothy 6:12' },
  { id: '2timothy', name: '2 Timothy', testament: 'NT', chapters: 4, category: 'epistles', abbreviation: '2Ti', order: 55, author: 'Paul', dateWritten: 'AD 67', theme: 'Perseverance in ministry', keyVerse: '2 Timothy 3:16-17' },
  { id: 'titus', name: 'Titus', testament: 'NT', chapters: 3, category: 'epistles', abbreviation: 'Tit', order: 56, author: 'Paul', dateWritten: 'AD 63–64', theme: 'Godly living and sound doctrine', keyVerse: 'Titus 3:5' },
  { id: 'philemon', name: 'Philemon', testament: 'NT', chapters: 1, category: 'epistles', abbreviation: 'Phm', order: 57, author: 'Paul', dateWritten: 'AD 60–62', theme: 'Forgiveness and reconciliation', keyVerse: 'Philemon 1:16' },
  // General Epistles
  { id: 'hebrews', name: 'Hebrews', testament: 'NT', chapters: 13, category: 'epistles', abbreviation: 'Heb', order: 58, author: 'Unknown (possibly Paul)', dateWritten: 'AD 64–69', theme: 'Jesus: the ultimate High Priest', keyVerse: 'Hebrews 11:1' },
  { id: 'james', name: 'James', testament: 'NT', chapters: 5, category: 'epistles', abbreviation: 'Jam', order: 59, author: 'James (brother of Jesus)', dateWritten: 'AD 44–49', theme: 'Faith that works', keyVerse: 'James 2:26' },
  { id: '1peter', name: '1 Peter', testament: 'NT', chapters: 5, category: 'epistles', abbreviation: '1Pe', order: 60, author: 'Peter', dateWritten: 'AD 64–65', theme: 'Suffering and hope in Christ', keyVerse: '1 Peter 5:7' },
  { id: '2peter', name: '2 Peter', testament: 'NT', chapters: 3, category: 'epistles', abbreviation: '2Pe', order: 61, author: 'Peter', dateWritten: 'AD 65–68', theme: 'Guard against false teachers', keyVerse: '2 Peter 3:9' },
  { id: '1john', name: '1 John', testament: 'NT', chapters: 5, category: 'epistles', abbreviation: '1Jo', order: 62, author: 'John the Apostle', dateWritten: 'AD 85–95', theme: 'Love, light and life in Christ', keyVerse: '1 John 4:8' },
  { id: '2john', name: '2 John', testament: 'NT', chapters: 1, category: 'epistles', abbreviation: '2Jo', order: 63, author: 'John the Apostle', dateWritten: 'AD 85–95', theme: 'Walk in truth and love', keyVerse: '2 John 1:6' },
  { id: '3john', name: '3 John', testament: 'NT', chapters: 1, category: 'epistles', abbreviation: '3Jo', order: 64, author: 'John the Apostle', dateWritten: 'AD 85–95', theme: 'Hospitality and faithful witness', keyVerse: '3 John 1:4' },
  { id: 'jude', name: 'Jude', testament: 'NT', chapters: 1, category: 'epistles', abbreviation: 'Jud', order: 65, author: 'Jude (brother of Jesus)', dateWritten: 'AD 65–80', theme: 'Contend for the faith', keyVerse: 'Jude 1:3' },
  // Prophecy
  { id: 'revelation', name: 'Revelation', testament: 'NT', chapters: 22, category: 'prophecy', abbreviation: 'Rev', order: 66, author: 'John the Apostle', dateWritten: 'AD 94–96', theme: 'The ultimate victory of Christ', keyVerse: 'Revelation 21:4' },
];

export const OLD_TESTAMENT = BIBLE_BOOKS.filter(b => b.testament === 'OT');
export const NEW_TESTAMENT = BIBLE_BOOKS.filter(b => b.testament === 'NT');

export const CATEGORY_LABELS: Record<string, string> = {
  'law': 'The Law (Torah)',
  'history': 'History',
  'poetry': 'Poetry & Wisdom',
  'major-prophets': 'Major Prophets',
  'minor-prophets': 'Minor Prophets',
  'gospels': 'The Gospels',
  'acts': 'Acts',
  'epistles': 'Epistles',
  'prophecy': 'Prophecy',
};

export const TRANSLATIONS: TranslationOption[] = [
  { id: 'kjv', name: 'KJV', fullName: 'King James Version (1611)', requiresKey: false },
  { id: 'nkjv', name: 'NKJV', fullName: 'New King James Version (1982)', requiresKey: true },
];

export function getBookById(id: string): BibleBook | undefined {
  return BIBLE_BOOKS.find(b => b.id === id);
}

export function normalizeBookId(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '');
}
