'use client';
import { use } from 'react';
import Link from 'next/link';
import { ChevronLeft, BookOpen } from 'lucide-react';

// Key Strong's entries with full detail
const STRONGS_DATA: Record<string, {
  id: string; lemma: string; transliteration: string; pronunciation: string;
  language: 'Greek' | 'Hebrew'; definition: string; derivation: string;
  kjvUsage: string; notes: string; bibleRefs: string[];
}> = {
  'G26': {
    id: 'G26', lemma: 'ἀγάπη', transliteration: 'agapē', pronunciation: 'ag-ah-pay',
    language: 'Greek',
    definition: 'Love, specifically the divine love of God for man and the responsive love of man for God and fellow man. This love is not primarily emotional but volitional — a deliberate choice to seek the highest good of another regardless of feeling.',
    derivation: 'From ἀγαπάω (agapaō, G25) — to love in a moral or social sense; to prefer; to wish well to.',
    kjvUsage: 'love (86x), charity (27x), dear (1x)',
    notes: `The Greek world had four major words for love:\n• *Eros* — romantic/sexual love (not used in NT)\n• *Storgē* — family affection (used only in compound forms)\n• *Philia* — friendship, warm affection\n• *Agapē* — the highest form, chosen love, the love of will and purpose\n\nWhen Jesus commands us to "love one another" (John 13:34), he uses agapē — a love that is not contingent on the lovability of the other person. This is the word used in John 3:16 ("God so loved the world") and 1 John 4:8 ("God is love"). Paul's great hymn to love in 1 Corinthians 13 uses this word throughout.\n\nThe distinction from *philia*: philia is natural affection, the love of friends drawn together by common qualities. Agapē transcends this — it is the love of one who sees the unworthiness of the object and loves anyway. This is the essence of grace.`,
    bibleRefs: ['John 3:16', 'Romans 5:8', '1 Corinthians 13:1-13', '1 John 4:7-12', 'John 15:13'],
  },
  'G4102': {
    id: 'G4102', lemma: 'πίστις', transliteration: 'pistis', pronunciation: 'pis-tis',
    language: 'Greek',
    definition: 'Faith, belief, trust. In the NT context, it denotes a personal trust in and commitment to Jesus Christ as Lord and Saviour — not mere intellectual assent, but a wholehearted reliance upon him for salvation.',
    derivation: 'From πείθω (peithō) — to persuade, to be persuaded.',
    kjvUsage: 'faith (239x), assurance (1x), belief (1x), believe + 1537 (1x), fidelity (1x)',
    notes: `*Pistis* in the NT is the primary word for saving faith. The Reformers captured three essential elements:\n\n1. **Notitia** — knowledge of the facts of the gospel (who Christ is, what he did)\n2. **Assensus** — assent to those facts as true\n3. **Fiducia** — personal trust and reliance — the decisive element\n\nJustification is "by faith" (*ek pisteōs*, Romans 1:17) — meaning God reckons righteousness to the one who places their trust in Christ. This faith is itself a gift (Ephesians 2:8-9), yet it is the believer who genuinely exercises it.\n\nIn Hebrews 11:1, faith is defined: "Now faith is the substance (*hypostasis*, substance, foundation) of things hoped for, the evidence (*elenchos*, proof) of things not seen."`,
    bibleRefs: ['Hebrews 11:1', 'Romans 1:17', 'Ephesians 2:8-9', 'Galatians 2:20', 'James 2:26'],
  },
  'H7965': {
    id: 'H7965', lemma: 'שָׁלוֹם', transliteration: 'shalom', pronunciation: 'shaw-LOME',
    language: 'Hebrew',
    definition: 'Peace, completeness, welfare, health, prosperity. Far richer than the English "peace" (absence of conflict), shalom encompasses total well-being — the state of flourishing in relationship with God, others, and creation.',
    derivation: 'From שָׁלֵם (shalem, H7999) — to be complete, whole, sound.',
    kjvUsage: 'peace (175x), well (14x), peaceably (9x), welfare (5x), salute (4x), prosperity (4x), health (2x)',
    notes: `Shalom is one of the richest words in the Hebrew Bible. It encompasses:\n\n• **Physical wellbeing** — good health, safety, prosperity\n• **Relational harmony** — right relationship with God and neighbour\n• **Cosmic completeness** — the right ordering of all things as God intended\n\nThe Aaronic blessing (Numbers 6:24-26) closes with "and give thee peace (*shalom*)." The Messianic hope is expressed through shalom — Isaiah calls the Messiah *Sar Shalom*, "Prince of Peace" (Isaiah 9:6).\n\nIn the NT, the Hebrew *shalom* becomes the Greek *eirēnē* (G1515). Paul's greeting "grace and peace" (*charis kai eirēnē*) is a fusion of Greek greeting (*charis*, grace) and Hebrew greeting (*shalom*). The peace Christ gives "passeth all understanding" (Philippians 4:7) — it is the eschatological shalom experienced in advance by those in Christ.`,
    bibleRefs: ['Numbers 6:24-26', 'Isaiah 9:6', 'John 14:27', 'Philippians 4:7', 'Isaiah 53:5'],
  },
};

interface Props {
  params: Promise<{ strongsId: string }>;
}

export default function WordStudyPage({ params }: Props) {
  const { strongsId } = use(params);
  const entry = STRONGS_DATA[strongsId];

  if (!entry) {
    return (
      <div className="px-4 py-12 text-center">
        <p style={{ color: 'var(--parchment-200)' }}>Word study for <strong>{strongsId}</strong> not found.</p>
        <p className="text-sm mt-2" style={{ color: 'var(--shell-400)' }}>Try: G26 (agapē), G4102 (pistis), H7965 (shalom)</p>
        <div className="flex justify-center gap-2 mt-4">
          {Object.keys(STRONGS_DATA).map(id => (
            <Link key={id} href={`/study/word-study/${id}`} className="px-3 py-1.5 rounded-lg border text-sm font-bold" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.2)', color: 'var(--gold-400)' }}>{id}</Link>
          ))}
        </div>
      </div>
    );
  }

  function renderNotes(text: string) {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('##')) return <h3 key={i} className="font-bold text-sm mt-4 mb-1" style={{ color: 'var(--gold-300)' }}>{line.replace(/##\s?/, '')}</h3>;
      if (line.startsWith('•')) return <li key={i} className="ml-4 text-sm mb-1" style={{ color: 'var(--parchment-200)' }} dangerouslySetInnerHTML={{ __html: line.slice(1).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>') }} />;
      const formatted = line.replace(/\*\*(.+?)\*\*/g, '<strong style="color:var(--gold-300)">$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>');
      return line ? <p key={i} className="text-sm mb-2 leading-relaxed" style={{ color: 'var(--parchment-200)' }} dangerouslySetInnerHTML={{ __html: formatted }} /> : <br key={i} />;
    });
  }

  return (
    <div className="px-4 py-8 md:px-10 md:py-12 max-w-3xl">
      <div className="flex items-center gap-3 mb-8">
        <Link href="/study" className="p-1.5 rounded-lg" style={{ color: 'var(--shell-400)' }}>
          <ChevronLeft size={18} />
        </Link>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold-400)' }}>
            {entry.language} Word Study · Strong&apos;s {entry.id}
          </p>
          <h1 className="text-2xl font-bold" style={{ color: 'var(--parchment-100)' }}>
            {entry.lemma}
          </h1>
        </div>
      </div>

      {/* Core word data */}
      <div className="rounded-2xl p-6 border mb-5" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.04))', borderColor: 'rgba(201,168,76,0.25)' }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
          {[
            { label: 'Original', value: entry.lemma },
            { label: 'Transliteration', value: entry.transliteration },
            { label: 'Pronunciation', value: entry.pronunciation },
            { label: 'Language', value: entry.language },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--shell-400)' }}>{label}</p>
              <p className="font-bold" style={{ color: 'var(--parchment-100)' }}>{value}</p>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--shell-400)' }}>Definition</p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--parchment-200)' }}>{entry.definition}</p>
        </div>

        <div className="mb-4">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--shell-400)' }}>Derivation</p>
          <p className="text-sm" style={{ color: 'var(--parchment-200)' }}>{entry.derivation}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--shell-400)' }}>KJV Usage</p>
          <p className="text-sm font-mono" style={{ color: 'var(--gold-400)' }}>{entry.kjvUsage}</p>
        </div>
      </div>

      {/* Extended notes */}
      <div className="rounded-2xl p-6 border mb-5" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.12)' }}>
        <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--gold-400)' }}>
          Theological & Historical Notes
        </p>
        <div>{renderNotes(entry.notes)}</div>
      </div>

      {/* Key references */}
      <div className="rounded-2xl p-5 border" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.12)' }}>
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--gold-400)' }}>
          Key Bible References
        </p>
        <div className="flex flex-wrap gap-2">
          {entry.bibleRefs.map(ref => {
            const parts = ref.match(/^(.+?)\s+(\d+)/);
            const book = parts?.[1].toLowerCase().replace(/\s+/g, '') ?? 'genesis';
            const ch = parts?.[2] ?? '1';
            return (
              <Link
                key={ref}
                href={`/bible/${book}/${ch}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all hover:scale-105"
                style={{ background: 'rgba(201,168,76,0.08)', borderColor: 'rgba(201,168,76,0.25)', color: 'var(--gold-300)' }}
              >
                <BookOpen size={11} /> {ref}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Try other words */}
      <div className="mt-6">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--shell-400)' }}>Other Word Studies</p>
        <div className="flex gap-2">
          {Object.keys(STRONGS_DATA).filter(id => id !== strongsId).map(id => (
            <Link key={id} href={`/study/word-study/${id}`} className="px-3 py-1.5 rounded-lg border text-sm font-bold transition-all hover:scale-105" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.2)', color: 'var(--gold-400)' }}>
              {id} — {STRONGS_DATA[id].lemma}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
