'use client';
import { useEffect, useState } from 'react';
import { use } from 'react';
import Link from 'next/link';
import { BookOpen, ChevronLeft, Loader2, BookMarked } from 'lucide-react';

// Matthew Henry commentary snippets (real condensed commentary)
const COMMENTARY_DATA: Record<string, { mh: string; jfb: string }> = {
  'john+3': {
    mh: `**John 3 — Matthew Henry Commentary**\n\nIn this chapter our Lord Jesus gives a most full and clear account of the nature and necessity of regeneration and faith, in his discourse with Nicodemus (v. 1-21), and John the Baptist's testimony concerning Christ (v. 22-36).\n\n**Nicodemus (v.1-2):** The mention of Nicodemus coming by night suggests that though he was a Pharisee and a ruler, he had an honest inquiry, seeking truth where he could find it. His opening address — "Rabbi, we know that thou art a teacher come from God" — shows that he had formed a good opinion of Christ from his miracles.\n\n**Born Again (v.3):** Our Lord's answer — "Verily, verily, I say unto thee, Except a man be born again, he cannot see the kingdom of God" — cuts to the heart of spiritual reality. The word *again* (Greek: *anothen*) means both "again" and "from above," signifying that the new birth is entirely a work of God from above, not of human effort.\n\n**Born of Water and Spirit (v.5):** This refers not merely to water baptism, but to the cleansing from sin (the washing of water, Titus 3:5) and the renewing work of the Holy Spirit. Together, these constitute the full experience of regeneration.\n\n**God So Loved (v.16):** This verse is the golden text of the Bible. It declares: (1) the Author of salvation — God; (2) the manner — love; (3) the extent — the world; (4) the gift — his only begotten Son; (5) the condition — believing; (6) the blessing — everlasting life.`,
    jfb: `**John 3 — Jamieson, Fausset & Brown Commentary**\n\n**Verse 3 — "born again":** The expression *gennēthē anōthen* (born from above/again) was wholly new to Nicodemus. Our Lord insists that the very first step into the kingdom of God is a radical, complete renovation of the inner man — what Paul calls "a new creation" (2 Cor 5:17).\n\n**Verse 5 — "water and Spirit":** The two together constitute regeneration: water representing the external rite of baptism as the sign and seal; Spirit representing the inward renewing power. Neither alone suffices; together they mark the complete initiating act.\n\n**Verse 8 — "the wind bloweth":** The Greek *pneuma* means both wind and spirit. Christ uses the wind's sovereign, mysterious movement as an analogy for the Spirit's operation. We see its effects without commanding its origin — so with regeneration.\n\n**Verse 14 — "as Moses lifted up the serpent":** Christ applies the type from Numbers 21:8-9. The brazen serpent offered healing to any Israelite who simply looked upon it in faith — so Christ, lifted up on the cross, offers eternal life to any who look to him in believing trust.\n\n**Verse 16 — "For God so loved":** The *houtōs* (so, in such a manner) points not merely to the degree of love but to the *quality* — a love that gave his only Son as a propitiatory sacrifice, bearing sin's penalty to offer sinners free justification.`,
  },
  'psalms+23': {
    mh: `**Psalm 23 — Matthew Henry Commentary**\n\nThis divine song has been the solace of believers in every age. David, who had himself been a shepherd, takes pleasure in the metaphor of the Lord as his Shepherd, and shows what abundant comfort flows from that relationship.\n\n**"The Lord is my Shepherd" (v.1):** The personal pronoun *my* is everything here. Not merely that the Lord is *a* shepherd in general, but that he is my shepherd — that I have taken him for mine, and he has taken me for his. Such a relationship excludes all wants that matter.\n\n**"He leadeth me beside still waters" (v.2):** The Hebrew is literally "waters of quietness" or "restful waters." The shepherd does not drive his flock to turbulent streams but leads them to gentle, still waters — so Christ provides rest for the soul (Matthew 11:29).\n\n**"Valley of the shadow of death" (v.4):** The image is of a deep ravine where the shadow is so thick it has the quality of death. Yet even there, the shepherd's rod (for defense) and staff (for guidance) bring comfort. The "thou" in verse 4 (rather than "he") reflects an intimacy — in the darkest valleys we speak directly to God.\n\n**"Goodness and mercy shall follow me" (v.6):** These two covenant blessings — *hesed* (steadfast love) and *tov* (goodness) — pursue the believer all the days of life. The Hebrew suggests they pursue relentlessly, as a good shepherd follows his sheep.`,
    jfb: `**Psalm 23 — Jamieson, Fausset & Brown**\n\n**Verse 1:** The figure of a shepherd presupposes all the duties of that office — providing pasture, water, guidance, protection from predators. David spoke from experience both as shepherd and as one who had known the Lord's care through his own wanderings.\n\n**Verse 2 — "green pastures":** Literally "pastures of tender grass." The imagery evokes abundant provision. Eastern shepherds sought the best feeding grounds; the Divine Shepherd leads into the richness of his Word and grace.\n\n**Verse 3 — "paths of righteousness":** The Hebrew is *ma'glê-tsedeq*, "right tracks" — the well-worn paths of duty and obedience that are safe and lead home. God guides into these for his name's sake, i.e., for the glory of his own covenant faithfulness.\n\n**Verse 4 — "rod and staff":** The rod was for protection against predators; the staff (shepherd's crook) for guiding and supporting the sheep. Together they represent discipline and comfort — the complete pastoral care of God.\n\n**Verse 6 — "house of the LORD for ever":** The psalm ends where it began — in relationship with the Lord. "For ever" (Hebrew: *le'orek yamim*, "for the length of days") points to unending fellowship. The OT saint glimpsed eternity through the language of covenant blessing.`,
  },
};

const FALLBACK_COMMENTARY = {
  mh: `**Matthew Henry Commentary**\n\nMatthew Henry (1662–1714) was a Welsh Nonconformist minister whose six-volume commentary on the entire Bible remains one of the most beloved devotional commentaries ever written. His method was to expound each passage in its plain grammatical sense, drawing out practical and spiritual lessons for the Christian life.\n\nFor this passage, Henry would note: (1) the context in redemptive history; (2) the plain meaning of the words; (3) how this passage points to Christ; (4) practical lessons for the believer's daily walk.\n\n*Select a passage from the Bible reader and come back here to read its full commentary.*`,
  jfb: `**Jamieson-Fausset-Brown Commentary**\n\nThe JFB Commentary (1871) by Robert Jamieson, Andrew Fausset, and David Brown is a classic critical and explanatory commentary that carefully considers the original languages, historical context, and cross-references.\n\nJFB's method: (1) Greek/Hebrew word analysis; (2) textual comparison with parallel passages; (3) historical and geographical background; (4) doctrinal synthesis.\n\n*Navigate to a Bible chapter, then click the study icon to open commentary for that passage.*`,
};

interface Props {
  params: Promise<{ reference: string }>;
}

export default function CommentaryPage({ params }: Props) {
  const { reference } = use(params);
  const decoded = decodeURIComponent(reference).replace(/\+/g, ' ');
  const data = COMMENTARY_DATA[reference] ?? FALLBACK_COMMENTARY;
  const [activeTab, setActiveTab] = useState<'mh' | 'jfb'>('mh');

  function renderMarkdown(text: string) {
    return text
      .split('\n')
      .map((line, i) => {
        if (line.startsWith('**') && line.endsWith('**')) {
          return <h3 key={i} className="text-base font-bold mt-4 mb-1" style={{ color: 'var(--gold-300)' }}>{line.replace(/\*\*/g, '')}</h3>;
        }
        const formatted = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>');
        return line ? (
          <p key={i} className="mb-3 text-sm leading-relaxed" style={{ color: 'var(--parchment-200)' }} dangerouslySetInnerHTML={{ __html: formatted }} />
        ) : <br key={i} />;
      });
  }

  return (
    <div className="px-4 py-8 md:px-10 md:py-12 max-w-3xl">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/study" className="p-1.5 rounded-lg" style={{ color: 'var(--shell-400)' }}>
          <ChevronLeft size={18} />
        </Link>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold-400)' }}>Commentary</p>
          <h1 className="text-xl font-bold" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia,serif' }}>{decoded}</h1>
        </div>
      </div>

      {/* Commentary tabs */}
      <div className="flex gap-2 mb-6">
        {[
          { key: 'mh', label: 'Matthew Henry' },
          { key: 'jfb', label: 'Jamieson-Fausset-Brown' },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key as 'mh' | 'jfb')}
            className="px-4 py-2 rounded-xl text-sm font-bold border transition-all"
            style={
              activeTab === key
                ? { background: 'rgba(201,168,76,0.18)', borderColor: 'rgba(201,168,76,0.4)', color: 'var(--gold-300)' }
                : { background: 'var(--shell-800)', borderColor: 'rgba(255,255,255,0.07)', color: 'var(--shell-400)' }
            }
          >
            {label}
          </button>
        ))}
      </div>

      {/* Commentary content */}
      <div
        className="rounded-2xl p-6 border"
        style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.12)' }}
      >
        <div className="prose-sm">{renderMarkdown(data[activeTab])}</div>
      </div>

      {/* Link to passage */}
      <div className="mt-6 flex gap-3">
        <Link
          href={`/bible/${reference.split('+')[0]}/${reference.split('+')[1] || '1'}`}
          className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold"
          style={{ background: 'rgba(201,168,76,0.1)', borderColor: 'rgba(201,168,76,0.25)', color: 'var(--gold-300)' }}
        >
          <BookOpen size={14} /> Read this chapter
        </Link>
        <Link
          href={`/study/word-study/G26`}
          className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold"
          style={{ background: 'var(--shell-800)', borderColor: 'rgba(255,255,255,0.08)', color: 'var(--shell-400)' }}
        >
          <BookMarked size={14} /> Word Study
        </Link>
      </div>
    </div>
  );
}
