'use client';
import { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BIBLE_BOOKS } from '@/lib/bible/books';
import { BookOpen, ChevronRight, Clock, User, Star, Scroll, BookMarked, Link2, Layers } from 'lucide-react';

const BOOK_DEEP_DATA: Record<string, {
  overview: string;
  structure: { section: string; chapters: string; summary: string }[];
  themes: { theme: string; description: string; keyVerses: string[] }[];
  historicalContext: string;
  theologicalSignificance: string;
  christConnection: string;
  messianicProphecies?: string[];
  studyQuestions: string[];
  relatedBooks: string[];
}> = {
  genesis: {
    overview: `Genesis ("beginnings") is the foundation of the entire Bible. It answers humanity's deepest questions: Where did we come from? Why are we here? Why is everything broken? And is there hope? Written by Moses (c. 1450–1410 BC), Genesis covers more time than any other book — from creation to Joseph's death in Egypt (roughly 2,300 years) — and establishes every major theological theme that will unfold across the remaining 65 books.

The book divides naturally into two halves: primeval history (chapters 1-11, covering creation through Babel) and patriarchal history (chapters 12-50, covering Abraham through Joseph). The hinge is Genesis 12:1-3, where God calls Abraham and makes the covenant that will drive the rest of biblical history: "I will make of you a great nation...and in you all the families of the earth shall be blessed." Everything from Genesis 12 to Revelation 22 is the unfolding of that promise.`,
    structure: [
      { section: 'Creation', chapters: '1-2', summary: 'God creates the heavens and earth in six days; humanity created in His image to rule and tend creation; the Sabbath established.' },
      { section: 'The Fall', chapters: '3', summary: 'The Serpent tempts Eve; the fall; the curse on creation and humanity; the protoevangelium (3:15) — first Messianic prophecy.' },
      { section: 'Early Humanity', chapters: '4-5', summary: 'Cain and Abel; the first murder; Seth and the messianic line; the genealogy from Adam to Noah.' },
      { section: 'Noah and the Flood', chapters: '6-9', summary: 'Humanity\'s wickedness; Noah chosen; the ark; the flood; the Noahic covenant; the rainbow.' },
      { section: 'Tower of Babel', chapters: '10-11', summary: 'The Table of Nations; humanity\'s pride at Babel; God confuses the languages; the genealogy to Abram.' },
      { section: 'Abraham', chapters: '12-25', summary: 'The call and covenant; Canaan; the Abrahamic covenant ratified; Ishmael; Isaac born; the binding of Isaac; the covenant confirmed.' },
      { section: 'Isaac and Jacob', chapters: '25-36', summary: 'Esau and Jacob; the birthright sold; Isaac\'s blessing stolen; Jacob\'s dream; the wives; the twelve sons; wrestling with God; Jacob renamed Israel.' },
      { section: 'Joseph', chapters: '37-50', summary: 'Joseph sold into slavery; Potiphar\'s house; prison; dreams interpreted; elevated in Egypt; famine; the family reunited; the death of Jacob and Joseph.' },
    ],
    themes: [
      { theme: 'Creation and Image', description: 'Humanity is uniquely created in the image of God (imago Dei, 1:26-27) — the foundation of human dignity, purpose, and responsibility.', keyVerses: ['Genesis 1:26-27', 'Genesis 2:7', 'Genesis 2:15'] },
      { theme: 'The Fall and Sin', description: 'The entrance of sin through disobedience and its catastrophic consequences — broken relationships in every direction: with God, each other, and creation.', keyVerses: ['Genesis 3:6', 'Genesis 3:15', 'Genesis 3:17-19'] },
      { theme: 'Election and Covenant', description: 'God sovereignly chooses Abraham, Isaac, Jacob — not on the basis of merit but grace — and makes binding covenant commitments.', keyVerses: ['Genesis 12:1-3', 'Genesis 15:17-18', 'Genesis 22:16-18'] },
      { theme: 'Providence', description: 'Joseph\'s story is the supreme Genesis demonstration of divine providence: "You intended to harm me, but God intended it for good" (50:20).', keyVerses: ['Genesis 45:4-8', 'Genesis 50:20'] },
      { theme: 'The Seed Promise', description: 'The "seed" (offspring/descendants) who will ultimately crush the Serpent — the messianic thread running from 3:15 through the whole OT.', keyVerses: ['Genesis 3:15', 'Genesis 12:7', 'Genesis 22:18', 'Genesis 49:10'] },
    ],
    historicalContext: `Genesis was written during or after the Exodus period. The ancient Near Eastern world it addresses had competing creation accounts (Enuma Elish, Atrahasis, Gilgamesh Epic) that portrayed humanity as slaves of capricious gods. Genesis presents a radical alternative: one sovereign God who creates with purpose, creates humanity as the crown of creation in His image, and is personally invested in humanity's flourishing. Archaeological finds (Ebla tablets, Mari tablets, Nuzi documents) have corroborated many of the patriarchal customs and names in Genesis that were once doubted by critical scholars.`,
    theologicalSignificance: `Genesis establishes every major theological category of the Bible: creation, the image of God, marriage, work, the Fall and sin, death, judgment, grace, covenant, sacrifice, election, promise, and redemption. It introduces the three great arcs of biblical theology — creation, fall, redemption — that structure everything from Genesis 3 to Revelation 22. The Abrahamic covenant (chapters 12, 15, 17, 22) is the foundation of the entire redemptive narrative. Genesis 3:15 (the protoevangelium) is the first announcement of the gospel.`,
    christConnection: `Christ is present throughout Genesis in type and prophecy: Adam (the first man, whose failure the "Last Adam" reverses — Romans 5:12-21), Noah (the one through whom humanity is preserved, typifying Christ the ark of salvation), Abraham (whose willingness to sacrifice Isaac prefigures the Father offering the Son — Hebrews 11:17-19), Isaac (the son born miraculously and offered up), Joseph (the suffering servant rejected by his brothers who saves the world). The messianic seed promise of 3:15 culminates in Christ; 12:3 ("all the families of the earth shall be blessed") is explicitly cited as fulfilled in Christ's gospel (Galatians 3:8,16).`,
    messianicProphecies: [
      'Genesis 3:15 — The Seed of the woman will crush the Serpent\'s head (fulfilled in Christ\'s death and resurrection)',
      'Genesis 12:3 — In Abraham\'s seed all nations will be blessed (Galatians 3:16 — "the seed is Christ")',
      'Genesis 22:18 — Through Abraham\'s offspring all nations will be blessed (cited by Peter in Acts 3:25)',
      'Genesis 49:10 — The scepter shall not depart from Judah until Shiloh comes (a royal-messianic prophecy)',
    ],
    studyQuestions: [
      'What does it mean to be made "in the image of God" (1:26-27)? How does this shape how you understand your own identity and the dignity of every person?',
      'In Genesis 3, what was the progression of Eve\'s temptation? What does this pattern teach us about how sin works today?',
      'How does the Abrahamic covenant in Genesis 15 demonstrate the unconditional nature of grace? Why did God alone pass between the animals?',
      'In what ways does Joseph\'s story (Genesis 37-50) prepare us to understand the story of Jesus?',
      'The word "seed/offspring" appears repeatedly in Genesis. Trace its use from 3:15 to 22:18 to 49:10. What picture emerges?',
    ],
    relatedBooks: ['exodus', 'romans', 'galatians', 'hebrews', 'revelation'],
  },
  john: {
    overview: `The Gospel of John is unlike the other three Gospels. Where Matthew, Mark, and Luke (the "Synoptics") share much common material and present Jesus's story largely chronologically, John is almost entirely distinct — only 8% of John's material appears in the other Gospels. John writes as a theologian-witness: he is not primarily concerned with what happened but with who Jesus IS.

Written by the Apostle John (c. AD 85-95), probably from Ephesus, the Gospel is structured around seven signs (miracles), seven "I AM" statements, and the progression of Jesus's public ministry in Galilee and Jerusalem. John's stated purpose (20:31) gives us his thesis: "these are written so that you may believe that Jesus is the Christ, the Son of God, and that by believing you may have life in his name." Every chapter is designed to press the reader toward this single verdict.`,
    structure: [
      { section: 'The Prologue', chapters: '1:1-18', summary: 'The Logos pre-exists creation; is God; becomes flesh; full of grace and truth. The theological foundation of everything that follows.' },
      { section: 'Signs and Discourses', chapters: '1:19-12:50', summary: 'The Book of Signs: seven miracles, extended theological discourses, growing division between belief and unbelief.' },
      { section: 'The Upper Room', chapters: '13-17', summary: 'The Book of Glory begins: washing feet, Judas sent away, the Farewell Discourse (chapters 14-16), the High Priestly Prayer (chapter 17).' },
      { section: 'Passion and Resurrection', chapters: '18-21', summary: 'Arrest, trials, crucifixion, burial, empty tomb, resurrection appearances, restoration of Peter, the beloved disciple.' },
    ],
    themes: [
      { theme: 'Light and Darkness', description: 'From the prologue ("the light shines in the darkness") to the final scenes, John frames Jesus\'s ministry as light entering a world of darkness. "I AM the light of the world" (8:12).', keyVerses: ['John 1:5', 'John 3:19-21', 'John 8:12', 'John 9:5'] },
      { theme: 'Belief / Unbelief', description: 'The word "believe" (pisteuō) appears 98 times in John — more than any other NT book. Every encounter with Jesus creates a crisis of belief.', keyVerses: ['John 1:12', 'John 3:16', 'John 11:25-26', 'John 20:31'] },
      { theme: 'Eternal Life', description: '"Eternal life" (zōē aiōnios) is used 17 times. It is not primarily a future quantity of life but a quality of life — knowing God — that begins now.', keyVerses: ['John 3:16', 'John 5:24', 'John 10:10', 'John 17:3'] },
      { theme: 'The Seven I AM Statements', description: 'Jesus\'s seven "I AM + predicate" declarations (bread of life, light of the world, door, good shepherd, resurrection and life, way/truth/life, true vine) are the systematic self-revelation of His identity.', keyVerses: ['John 6:35', 'John 8:12', 'John 10:9', 'John 10:11', 'John 11:25', 'John 14:6', 'John 15:1'] },
      { theme: 'The Holy Spirit (Paraclete)', description: 'The Farewell Discourse (chapters 14-16) contains John\'s most extensive pneumatology: the Spirit as Counselor, Teacher, Witness, and Convictor.', keyVerses: ['John 14:16-17', 'John 14:26', 'John 15:26', 'John 16:7-11'] },
    ],
    historicalContext: `John writes from Ephesus (according to strong early church tradition) to a church dealing with early Gnostic challenges that denied the full humanity of Christ. The prologue's "the Word became flesh" is a direct counter to Docetism (the view that Jesus only appeared to have a body). John's community had also experienced the trauma of expulsion from the synagogue (9:22; 16:2), and his Gospel addresses Jewish-Christian tension. The late dating (~AD 85-95) reflects a church that had experienced decades of reflection on the Resurrection.`,
    theologicalSignificance: `John provides the New Testament's most fully developed Christology. The Logos prologue (1:1-18) identifies Jesus as the pre-existent, creator-mediating, incarnate God — the highest Christological statement in the entire NT. John's "God is love" (1 John 4:8) and "the Word was God" (1:1) together give us the ontological identity of Jesus. The "I AM" statements (connecting Jesus to the divine name of Exodus 3:14) are Jesus's own claims to deity. John 3:16 is the gospel in 25 words.`,
    christConnection: `John is the supreme Christological Gospel. The Logos Christology (1:1-18) establishes Christ's pre-existence, deity, and incarnation. The seven signs demonstrate His divine power; the seven "I AM" statements reveal His divine identity; the Passion narrative reveals His divine love. The explicit purpose statement (20:31) — "that you may believe that Jesus is the Christ, the Son of God" — makes the Christological argument the Gospel's entire aim. The resurrection appearances in chapter 20-21 confirm the claims of chapters 1-19.`,
    messianicProphecies: [
      'John 1:23 — "The voice of one crying in the wilderness" (Isaiah 40:3) fulfilled in John the Baptist',
      'John 12:15 — "Your King is coming, sitting on a donkey\'s colt" (Zechariah 9:9) fulfilled at the Triumphal Entry',
      'John 13:18 — "He who ate my bread has lifted his heel against me" (Psalm 41:9) fulfilled in Judas\'s betrayal',
      'John 19:24 — "They divided my garments among them" (Psalm 22:18) fulfilled at the crucifixion',
      'John 19:36 — "Not one of his bones will be broken" (Psalm 34:20; Exodus 12:46) fulfilled at the cross',
    ],
    studyQuestions: [
      'Read John 1:1-18 slowly. What claims does the prologue make about Jesus? How does "the Word became flesh" (1:14) challenge any view of Jesus as less than fully divine or less than fully human?',
      'In John 3, what does Jesus mean by being "born again" (or "born from above")? What is the relationship between this new birth and belief?',
      'Trace the uses of "I AM" through John. What is the significance of the absolute "I AM" statements (8:24, 8:28, 8:58) in the context of Exodus 3:14?',
      'In John 11, before raising Lazarus, Jesus wept (11:35). What does this tell us about His humanity? And then His power over death — what does this tell us about His deity?',
      'The High Priestly Prayer of John 17 reveals what Jesus cared most about at the end of His earthly ministry. What does He pray for? What does this teach us about His ongoing intercession?',
    ],
    relatedBooks: ['genesis', '1john', 'revelation', 'romans', 'hebrews'],
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  'law': '#C9A84C',
  'history': '#7BB8E8',
  'poetry': '#B8E87B',
  'major-prophets': '#E8A87B',
  'minor-prophets': '#E87BB8',
  'gospels': '#7BE8D4',
  'acts': '#A87BE8',
  'epistles': '#E8C47B',
  'prophecy': '#E87B7B',
};

function Section({ title, icon: Icon, color = '#C9A84C', children }: {
  title: string; icon: React.ElementType; color?: string; children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border mb-5 overflow-hidden" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.12)' }}>
      <div className="flex items-center gap-2.5 px-5 py-3.5 border-b" style={{ borderColor: 'rgba(201,168,76,0.1)', background: 'rgba(201,168,76,0.03)' }}>
        <Icon size={14} style={{ color }} />
        <h2 className="font-bold text-xs uppercase tracking-widest" style={{ color }}>{title}</h2>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

export default function BookStudyPage({ params }: { params: Promise<{ book: string }> }) {
  const { book: bookId } = use(params);
  const book = BIBLE_BOOKS.find(b => b.id === bookId);
  if (!book) notFound();

  const deep = BOOK_DEEP_DATA[bookId];
  const color = CATEGORY_COLORS[book.category] ?? '#C9A84C';

  return (
    <div className="px-4 py-8 md:px-10 md:py-12 max-w-4xl">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs mb-6" style={{ color: 'var(--shell-500)' }}>
        <Link href="/study" className="hover:underline" style={{ color: 'var(--shell-400)' }}>Study</Link>
        <ChevronRight size={12} />
        <Link href="/books" className="hover:underline" style={{ color: 'var(--shell-400)' }}>Books</Link>
        <ChevronRight size={12} />
        <span style={{ color: 'var(--parchment-300)' }}>{book.name}</span>
      </div>

      {/* Hero */}
      <div className="rounded-2xl border mb-6 overflow-hidden" style={{ borderColor: `${color}35` }}>
        <div className="h-1.5" style={{ background: `linear-gradient(to right, ${color}, ${color}88)` }} />
        <div className="p-6 md:p-8" style={{ background: 'var(--shell-800)' }}>
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-1" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia,serif' }}>
                {book.name}
              </h1>
              <p className="text-sm font-semibold" style={{ color }}>Book {book.order} of 66 — {book.testament === 'OT' ? 'Old Testament' : 'New Testament'}</p>
            </div>
            <span className="text-sm font-bold px-3 py-1 rounded-xl capitalize" style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}>
              {book.category.replace('-', ' ')}
            </span>
          </div>

          {book.theme && (
            <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--parchment-200)', fontFamily: 'Georgia,serif', fontStyle: 'italic' }}>
              Theme: {book.theme}
            </p>
          )}

          <div className="flex flex-wrap gap-5 text-sm">
            {book.author && (
              <div className="flex items-center gap-1.5">
                <User size={13} style={{ color: 'var(--shell-400)' }} />
                <span style={{ color: 'var(--shell-300)' }}>Author: {book.author}</span>
              </div>
            )}
            {book.dateWritten && (
              <div className="flex items-center gap-1.5">
                <Clock size={13} style={{ color: 'var(--shell-400)' }} />
                <span style={{ color: 'var(--shell-300)' }}>Written: {book.dateWritten}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <BookOpen size={13} style={{ color: 'var(--shell-400)' }} />
              <span style={{ color: 'var(--shell-300)' }}>{book.chapters} chapters</span>
            </div>
          </div>

          {book.keyVerse && (
            <div className="mt-4 rounded-xl p-3 border" style={{ background: `${color}08`, borderColor: `${color}20` }}>
              <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color }}>Key Verse</p>
              <p className="text-sm font-semibold" style={{ color: 'var(--parchment-200)' }}>{book.keyVerse}</p>
            </div>
          )}
        </div>
      </div>

      {/* Read the book */}
      <Link
        href={`/bible/${bookId}/1`}
        className="flex items-center justify-between rounded-xl border p-4 mb-6 transition-all hover:scale-[1.01]"
        style={{ background: `${color}08`, borderColor: `${color}25` }}
      >
        <div className="flex items-center gap-3">
          <BookOpen size={18} style={{ color }} />
          <span className="font-bold" style={{ color: 'var(--parchment-200)' }}>Read {book.name}</span>
        </div>
        <ChevronRight size={16} style={{ color }} />
      </Link>

      {deep ? (
        <>
          {/* Overview */}
          <Section title="Book Overview" icon={Scroll}>
            <div className="space-y-4">
              {deep.overview.split('\n\n').filter(Boolean).map((p, i) => (
                <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--parchment-200)' }}>{p.trim()}</p>
              ))}
            </div>
          </Section>

          {/* Structure */}
          <Section title="Book Structure & Outline" icon={Layers} color="#B8E87B">
            <div className="space-y-3">
              {deep.structure.map((s, i) => (
                <div key={i} className="flex gap-4 p-3 rounded-xl" style={{ background: 'rgba(184,232,123,0.05)', border: '1px solid rgba(184,232,123,0.1)' }}>
                  <div className="flex-shrink-0 text-right" style={{ minWidth: '80px' }}>
                    <p className="text-xs font-bold uppercase tracking-wider" style={{ color: '#B8E87B' }}>ch. {s.chapters}</p>
                    <p className="text-xs font-semibold mt-0.5" style={{ color: 'var(--parchment-200)' }}>{s.section}</p>
                  </div>
                  <p className="text-xs leading-relaxed flex-1" style={{ color: 'var(--shell-300)' }}>{s.summary}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Themes */}
          <Section title="Theological Themes" icon={Star} color="#E8C47B">
            <div className="space-y-4">
              {deep.themes.map((t, i) => (
                <div key={i} className="rounded-xl p-4 border" style={{ background: 'rgba(232,196,123,0.04)', borderColor: 'rgba(232,196,123,0.15)' }}>
                  <p className="font-bold text-sm mb-1.5" style={{ color: '#E8C47B' }}>{t.theme}</p>
                  <p className="text-xs leading-relaxed mb-2" style={{ color: 'var(--parchment-200)' }}>{t.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {t.keyVerses.map(v => (
                      <span key={v} className="text-xs px-2 py-0.5 rounded font-medium" style={{ background: 'rgba(232,196,123,0.1)', color: 'var(--parchment-300)' }}>{v}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Historical Context */}
          <Section title="Historical & Cultural Context" icon={BookMarked} color="#7BB8E8">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--parchment-200)' }}>{deep.historicalContext}</p>
          </Section>

          {/* Theological Significance */}
          <Section title="Theological Significance" icon={BookOpen} color="#A87BE8">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--parchment-200)' }}>{deep.theologicalSignificance}</p>
          </Section>

          {/* Messianic Prophecies */}
          {deep.messianicProphecies && (
            <div className="rounded-2xl border mb-5 overflow-hidden" style={{ borderColor: 'rgba(201,168,76,0.3)' }}>
              <div className="flex items-center gap-2.5 px-5 py-3.5" style={{ background: 'rgba(201,168,76,0.08)', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
                <Star size={14} style={{ color: 'var(--gold-400)' }} />
                <h2 className="font-bold text-xs uppercase tracking-widest" style={{ color: 'var(--gold-400)' }}>Messianic Prophecies Fulfilled</h2>
              </div>
              <div className="p-5 space-y-2.5" style={{ background: 'var(--shell-800)' }}>
                {deep.messianicProphecies.map((p, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--parchment-200)' }}>
                    <Star size={11} className="mt-1 flex-shrink-0" style={{ color: 'var(--gold-400)' }} />
                    {p}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Christ Connection */}
          <div className="rounded-2xl border mb-5 overflow-hidden" style={{ borderColor: 'rgba(201,168,76,0.3)' }}>
            <div className="flex items-center gap-2.5 px-5 py-3.5" style={{ background: 'rgba(201,168,76,0.08)', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
              <h2 className="font-bold text-xs uppercase tracking-widest" style={{ color: 'var(--gold-400)' }}>Christ Connection</h2>
            </div>
            <div className="p-5" style={{ background: 'var(--shell-800)' }}>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--parchment-200)' }}>{deep.christConnection}</p>
            </div>
          </div>

          {/* Study Questions */}
          <Section title="Deep Study Questions" icon={BookOpen} color="#7BE8D4">
            <ol className="space-y-4">
              {deep.studyQuestions.map((q, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'var(--parchment-200)' }}>
                  <span className="flex-shrink-0 font-bold text-base w-6 text-center" style={{ color: '#7BE8D4' }}>{i + 1}</span>
                  {q}
                </li>
              ))}
            </ol>
          </Section>

          {/* Related Books */}
          {deep.relatedBooks.length > 0 && (
            <div className="rounded-2xl border p-5" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.12)' }}>
              <div className="flex items-center gap-2 mb-4">
                <Link2 size={14} style={{ color: 'var(--gold-400)' }} />
                <h2 className="font-bold text-xs uppercase tracking-widest" style={{ color: 'var(--gold-400)' }}>Study These Related Books</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {deep.relatedBooks.map(id => {
                  const b = BIBLE_BOOKS.find(b => b.id === id);
                  return (
                    <Link
                      key={id}
                      href={`/study/book/${id}`}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-sm font-semibold transition-all hover:scale-105"
                      style={{ background: 'rgba(201,168,76,0.08)', borderColor: 'rgba(201,168,76,0.2)', color: 'var(--gold-300)' }}
                    >
                      {b?.name ?? id}
                      <ChevronRight size={12} />
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </>
      ) : (
        /* Generic page for books without deep data */
        <div className="rounded-2xl border p-8 text-center" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.12)' }}>
          <Scroll size={32} className="mx-auto mb-3" style={{ color: 'var(--gold-400)' }} />
          <p className="font-bold text-lg mb-1" style={{ color: 'var(--parchment-200)' }}>Deep study content coming soon</p>
          <p className="text-sm mb-5" style={{ color: 'var(--shell-400)' }}>
            Full theological analysis, structure, themes, historical context, and Christ connections for {book.name} are being prepared.
          </p>
          <Link
            href={`/bible/${bookId}/1`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm border"
            style={{ background: `${color}10`, borderColor: `${color}30`, color }}
          >
            <BookOpen size={14} /> Read {book.name} Now
          </Link>
        </div>
      )}
    </div>
  );
}
