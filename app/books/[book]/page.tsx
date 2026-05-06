'use client';
import { use } from 'react';
import Link from 'next/link';
import { getBookById } from '@/lib/bible/books';
import { ChevronLeft, BookOpen, GraduationCap, MessageSquare } from 'lucide-react';

const BOOK_DETAILS: Record<string, {
  overview: string; howWritten: string; structure: string[];
  themes: { title: string; description: string }[];
  highlights: { verse: string; text: string }[];
  deepPath: { phase: string; description: string }[];
}> = {
  john: {
    overview: `The Gospel of John stands apart from the Synoptic Gospels (Matthew, Mark, Luke) in its elevated theological perspective. Written likely in Ephesus around AD 85-90, John's purpose is explicit: "But these are written, that ye might believe that Jesus is the Christ, the Son of God; and that believing ye might have life through his name" (John 20:31). John selects seven miracles ("signs") and seven "I AM" discourses to prove Jesus' divine identity.`,
    howWritten: `John was written by the Apostle John, son of Zebedee, "the disciple whom Jesus loved." It was composed in Koine Greek and addressed to a broad audience, possibly primarily Gentile believers in Asia Minor. The book assumes familiarity with some Jewish customs but explains them for non-Jewish readers. John uses a distinctive vocabulary: light/darkness, believe, eternal life, love, truth, Word (Logos). The prologue (1:1-18) is a theological poem introducing the Logos who became flesh — drawing on Jewish Wisdom literature and Greek philosophical concepts of the logos (reason/word) to make a radical claim: the divine Logos became a particular Jewish man, Jesus of Nazareth.`,
    structure: [
      'Prologue (1:1-18) — The Word became flesh',
      'Book of Signs (1:19–12:50) — Seven miraculous signs',
      'Book of Glory (13:1–20:31) — The Upper Room, Cross, Resurrection',
      'Epilogue (21:1-25) — Restoration of Peter',
    ],
    themes: [
      { title: 'Belief / Faith', description: 'The verb "believe" (pisteuō) appears 98 times — more than any other NT book. John portrays salvation as a matter of personal trust in Jesus as the Son of God.' },
      { title: 'Light and Darkness', description: 'Jesus is "the light of the world" (8:12). John frames the human condition as darkness — moral blindness and ignorance — into which the light of Christ breaks.' },
      { title: 'Eternal Life', description: 'John uses "eternal life" (zōē aiōnios) 17 times — more than any other Gospel. This is not merely endless duration but a qualitative life in relationship with God (17:3).' },
      { title: 'The "I AM" sayings', description: 'Seven declarations of Jesus beginning "I am" (egō eimi) — Bread of Life, Light of World, Gate, Good Shepherd, Resurrection and Life, Way/Truth/Life, True Vine. Each echoes God\'s self-revelation to Moses in Exodus 3:14.' },
      { title: 'Love (Agapē)', description: 'The new commandment — "love one another as I have loved you" (13:34) — introduces a radically new standard: the measure of love is Christ\'s own self-giving sacrifice.' },
    ],
    highlights: [
      { verse: 'John 1:1', text: '"In the beginning was the Word, and the Word was with God, and the Word was God."' },
      { verse: 'John 3:16', text: '"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."' },
      { verse: 'John 11:25-26', text: '"I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live."' },
      { verse: 'John 14:6', text: '"I am the way, the truth, and the life: no man cometh unto the Father, but by me."' },
    ],
    deepPath: [
      { phase: '1. Overview', description: 'Read the prologue (1:1-18) and purpose statement (20:30-31) to understand John\'s intent.' },
      { phase: '2. The Seven Signs', description: 'Study each miracle: Cana (2), Nobleman\'s Son (4), Pool of Bethesda (5), Feeding 5000 (6), Walking on Water (6), Man Born Blind (9), Lazarus (11). Each sign reveals an aspect of Jesus\' identity.' },
      { phase: '3. The "I AM" Sayings', description: 'Study each of the seven "I AM" declarations in context. Compare with Exodus 3:14 and Isaiah 43:10.' },
      { phase: '4. The Upper Room Discourse', description: 'Chapters 13-17 contain Jesus\' most intimate teaching to his disciples. Note the promise of the Paraclete (Helper) and the High Priestly Prayer.' },
      { phase: '5. Greek Word Study', description: 'Study: pisteúō (believe, G4100), agápē (love, G26), zōē (life, G2222), logos (word, G3056), alētheia (truth, G225).' },
    ],
  },
  psalms: {
    overview: `The Psalter is the hymnbook and prayerbook of ancient Israel and the most quoted OT book in the NT. Its 150 psalms span approximately 1000 years of composition (from Moses to the post-exilic period). Organized into five books (echoing the five books of Moses), the Psalms cover the full range of human experience before God — joy, sorrow, doubt, praise, lament, confession, thanksgiving, and messianic hope.`,
    howWritten: `The Psalms were composed by multiple authors over many centuries: David (73 psalms), the Sons of Korah (11), Asaph (12), Solomon (2), Moses (1, Psalm 90), Ethan (1), Heman (1), and anonymous authors (49). They were used in Israel's temple worship — some were processional hymns, some penitential psalms, some Royal Psalms celebrating the Davidic king, and some Hallel psalms (113-118) sung at Passover. The Hebrew title is Tehillim — "Praises." Each psalm is a literary unit using ancient Hebrew poetic forms: parallelism (synonymous, antithetical, synthetic), acrostic structure (Psalm 119), and chiasm.`,
    structure: [
      'Book I (Psalms 1-41) — Davidic psalms; creation and fall themes',
      'Book II (Psalms 42-72) — Deliverance and kingdom themes',
      'Book III (Psalms 73-89) — Asaph and Korah; destruction of Jerusalem',
      'Book IV (Psalms 90-106) — Moses; God\'s eternal kingship',
      'Book V (Psalms 107-150) — Praise and restoration; Hallelujah psalms',
    ],
    themes: [
      { title: 'Praise and Worship', description: 'The Psalms model authentic worship — not performance but personal encounter. God is praised for who he is (doxology) and for what he has done (thanksgiving).' },
      { title: 'Lament', description: 'One-third of the Psalms are laments — bold, honest complaints to God. They teach that authentic faith includes bringing pain, confusion, and even anger honestly before God.' },
      { title: 'Messianic Prophecy', description: 'Key psalms (2, 22, 45, 69, 110, 118) are explicitly quoted in the NT as fulfilled in Jesus. Psalm 22 describes crucifixion in graphic detail, written 1000 years before Christ.' },
      { title: 'Torah Meditation', description: 'Psalm 1 and the great Psalm 119 (the longest chapter in the Bible) celebrate the Word of God as the source of blessing, wisdom and life.' },
      { title: 'The Shepherd', description: 'Psalm 23 — the best-known psalm — portrays the Lord as the perfect shepherd who provides, guides, comforts and promises eternal dwelling.' },
    ],
    highlights: [
      { verse: 'Psalm 1:1-2', text: '"Blessed is the man that walketh not in the counsel of the ungodly... but his delight is in the law of the LORD."' },
      { verse: 'Psalm 22:1', text: '"My God, my God, why hast thou forsaken me?" — Quoted by Jesus on the cross (Matthew 27:46)' },
      { verse: 'Psalm 23:1', text: '"The LORD is my shepherd; I shall not want."' },
      { verse: 'Psalm 119:105', text: '"Thy word is a lamp unto my feet, and a light unto my path."' },
    ],
    deepPath: [
      { phase: '1. Read the Psalter', description: 'Begin with Psalms 1, 23, 51, 119, and the Hallel Psalms (113-118).' },
      { phase: '2. Study the Types', description: 'Categorize: Hymns, Laments, Thanksgiving, Royal, Wisdom, Pilgrimage (Songs of Ascent, 120-134).' },
      { phase: '3. Messianic Psalms', description: 'Study Psalms 2, 22, 45, 69, 110, 118 alongside their NT quotations.' },
      { phase: '4. Hebrew Poetry', description: 'Learn parallelism: synonymous, antithetical, synthetic. See how Psalm 119\'s acrostic structure works (22 Hebrew letters × 8 verses).' },
      { phase: '5. Pray the Psalms', description: 'Luther called the Psalms "a little Bible" — use them as a school of prayer, praying each psalm personally.' },
    ],
  },
};

interface Props {
  params: Promise<{ book: string }>;
}

export default function BookDetailPage({ params }: Props) {
  const { book } = use(params);
  const meta = getBookById(book);
  const details = BOOK_DETAILS[book];

  if (!meta) {
    return (
      <div className="px-4 py-12 text-center">
        <p style={{ color: 'var(--parchment-200)' }}>Book not found.</p>
        <Link href="/books" className="text-sm mt-2 inline-block" style={{ color: 'var(--gold-400)' }}>← Back to Books</Link>
      </div>
    );
  }

  return (
    <div className="px-4 py-8 md:px-10 md:py-12 max-w-4xl">
      <div className="flex items-center gap-3 mb-8">
        <Link href="/books" className="p-1.5 rounded-lg" style={{ color: 'var(--shell-400)' }}>
          <ChevronLeft size={18} />
        </Link>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold-400)' }}>
            {meta.testament === 'OT' ? 'Old Testament' : 'New Testament'} · {meta.chapters} Chapters
          </p>
          <h1 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia,serif' }}>
            {meta.name}
          </h1>
        </div>
      </div>

      {/* Meta grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { label: 'Author', value: meta.author ?? 'Unknown' },
          { label: 'Written', value: meta.dateWritten ?? 'Unknown' },
          { label: 'Chapters', value: meta.chapters.toString() },
          { label: 'Key Verse', value: meta.keyVerse ?? '—' },
        ].map(({ label, value }) => (
          <div key={label} className="rounded-xl p-3 border" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.12)' }}>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--shell-400)' }}>{label}</p>
            <p className="text-sm font-bold" style={{ color: 'var(--parchment-200)' }}>{value}</p>
          </div>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mb-8">
        <Link href={`/bible/${book}/1`} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold border transition-all hover:scale-105" style={{ background: 'rgba(201,168,76,0.12)', borderColor: 'rgba(201,168,76,0.3)', color: 'var(--gold-300)' }}>
          <BookOpen size={14} /> Start Reading
        </Link>
        <Link href={`/study/commentary/${book}+1`} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold border transition-all hover:scale-105" style={{ background: 'var(--shell-800)', borderColor: 'rgba(255,255,255,0.08)', color: 'var(--shell-400)' }}>
          <MessageSquare size={14} /> Commentary
        </Link>
      </div>

      {!details ? (
        <div className="rounded-2xl p-8 border text-center" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.12)' }}>
          <GraduationCap size={32} className="mx-auto mb-3" style={{ color: 'var(--gold-400)' }} />
          <p className="font-bold mb-1" style={{ color: 'var(--parchment-200)' }}>Deep study coming soon</p>
          <p className="text-sm" style={{ color: 'var(--shell-400)' }}>Full book overview for {meta.name} is being prepared.</p>
          <p className="text-sm mt-2" style={{ color: 'var(--shell-400)' }}>
            Theme: <span style={{ color: 'var(--parchment-200)' }}>{meta.theme}</span>
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Overview */}
          <section className="rounded-2xl p-6 border" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.12)' }}>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--gold-400)' }}>Overview</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--parchment-200)' }}>{details.overview}</p>
          </section>

          {/* How Written */}
          <section className="rounded-2xl p-6 border" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.12)' }}>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--gold-400)' }}>Authorship & Composition</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--parchment-200)' }}>{details.howWritten}</p>
          </section>

          {/* Structure */}
          <section className="rounded-2xl p-6 border" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.12)' }}>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--gold-400)' }}>Structure</h2>
            <ul className="space-y-2">
              {details.structure.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--parchment-200)' }}>
                  <span className="flex-shrink-0 font-bold" style={{ color: 'var(--gold-400)' }}>›</span> {s}
                </li>
              ))}
            </ul>
          </section>

          {/* Themes */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--gold-400)' }}>Major Themes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {details.themes.map(({ title, description }) => (
                <div key={title} className="rounded-xl p-4 border" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.12)' }}>
                  <p className="font-bold text-sm mb-1" style={{ color: 'var(--gold-300)' }}>{title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--shell-400)' }}>{description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Key Verses */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--gold-400)' }}>Highlights & Key Verses</h2>
            <div className="space-y-3">
              {details.highlights.map(({ verse, text }) => {
                const parts = verse.match(/^(.+?)\s+(\d+)/);
                const bookSlug = parts?.[1].toLowerCase().replace(/\s+/g, '') ?? book;
                const ch = parts?.[2] ?? '1';
                return (
                  <div key={verse} className="rounded-xl p-4 border" style={{ background: 'rgba(201,168,76,0.06)', borderColor: 'rgba(201,168,76,0.18)' }}>
                    <p className="scripture-font text-sm leading-relaxed mb-2" style={{ color: 'var(--parchment-100)' }}>{text}</p>
                    <Link href={`/bible/${bookSlug}/${ch}`} className="text-xs font-bold" style={{ color: 'var(--gold-400)' }}>{verse}</Link>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Deep Learning Path */}
          <section className="rounded-2xl p-6 border" style={{ background: 'linear-gradient(135deg, rgba(123,45,62,0.12), rgba(201,168,76,0.06))', borderColor: 'rgba(201,168,76,0.2)' }}>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--gold-400)' }}>✦ Deep Learning Path</h2>
            <div className="space-y-3">
              {details.deepPath.map(({ phase, description }, i) => (
                <div key={phase} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-black mt-0.5" style={{ background: 'rgba(201,168,76,0.25)', color: 'var(--gold-300)' }}>
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-bold mb-0.5" style={{ color: 'var(--parchment-200)' }}>{phase}</p>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--shell-400)' }}>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
