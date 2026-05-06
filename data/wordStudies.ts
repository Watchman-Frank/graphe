export interface OccurrenceVerse {
  reference: string;
  text: string;
  note?: string;
}

export interface OriginalWord {
  language: 'Hebrew' | 'Greek';
  script: string;
  transliteration: string;
  strongsId: string;
  definition: string;
  rangeOfMeaning: string;
}

export interface WordStudy {
  id: string;
  topic: string;
  originalWords: OriginalWord[];
  subtitle: string;
  oneLiner: string;
  overview: string;
  theologicalBackground: string;
  progressionThroughScripture: string;
  keyOccurrences: OccurrenceVerse[];
  doctrinalConnections: string[];
  practicalApplication: string;
  christConnection: string;
  relatedTopics: string[];
  keyTheologians?: string;
}

export const WORD_STUDIES: WordStudy[] = [
  {
    id: 'grace',
    topic: 'Grace',
    originalWords: [
      {
        language: 'Hebrew',
        script: 'חֵן',
        transliteration: 'chen',
        strongsId: 'H2580',
        definition: 'Favor, grace, charm; unearned goodwill bestowed by a superior on an inferior',
        rangeOfMeaning: 'From the root chanan (to be gracious), it carries the idea of stooping in kindness — the bending of a superior toward one who cannot claim any right to that attention.',
      },
      {
        language: 'Hebrew',
        script: 'חֶסֶד',
        transliteration: 'hesed',
        strongsId: 'H2617',
        definition: 'Covenant love, steadfast love, lovingkindness, mercy; loyal love that exceeds what is required',
        rangeOfMeaning: 'One of the richest Hebrew words — hesed is the love within a covenant that goes beyond obligation. It combines loyalty (faithfulness to a promise) and love (emotional commitment). Often translated "lovingkindness" or "steadfast love."',
      },
      {
        language: 'Greek',
        script: 'χάρις',
        transliteration: 'charis',
        strongsId: 'G5485',
        definition: 'Grace, favor, gratitude; the free, unmerited gift of God toward the undeserving',
        rangeOfMeaning: 'From chairo (to rejoice) and sharing a root with chara (joy). In Hellenistic Greek it meant a gift or favor that created obligation; Paul transforms it to mean entirely free, unconditioned divine favor that creates no human debt — an innovation in Greek thought.',
      },
    ],
    subtitle: 'The Unmerited Favor at the Heart of the Gospel',
    oneLiner: 'The free, unearned, undeserved favor of God toward sinners — the foundation of salvation and the atmosphere of all Christian life.',
    overview: `Grace is not merely a Christian concept layered onto the Bible; it is the governing principle of the entire story of redemption from Genesis to Revelation. It can be defined theologically as God's free, unmerited, and undeserved favor bestowed on those who have no claim to it — indeed, on those who deserve the opposite.

The first use of "grace" (chen) in the Bible is deeply instructive: "But Noah found grace in the eyes of the LORD" (Genesis 6:8). This is immediately before the flood judgment — grace appears not in paradise but in the context of divine wrath, as a mysterious, sovereign exception to judgment. It sets the tone for every subsequent appearance: grace is always unexpected, always unearned.

In the New Testament, charis is Paul's great theme. He uses it 100 times in his letters alone. His transformation of the Greek word is itself a theological revolution: in secular Greek, charis involved reciprocity — a gift that created obligation. Paul insists that divine grace creates no such obligation, that it is entirely free, and that to mix it with human merit is to destroy it entirely: "If by grace, then it is no more of works: otherwise grace is no more grace" (Romans 11:6).`,
    theologicalBackground: `Grace must be understood against the backdrop of three other realities: human sin (which makes grace necessary), divine holiness (which makes grace surprising), and law (which grace is distinct from but does not abolish).

The Reformation recovered the biblical doctrine of grace against the medieval Catholic synthesis of grace and merit. Luther's breakthrough insight — that "the righteousness of God" in Romans 1:17 is not God's punishing justice but the righteousness He freely gives to faith — was the spark of the Reformation. "By grace are you saved through faith, and that not of yourselves; it is the gift of God; not of works, lest any man should boast" (Ephesians 2:8-9) is the Reformation's memory verse.

Within Reformed theology, the five points of Calvinism (TULIP) are essentially a systematic description of grace: totally undeserved (Total Depravity), sovereignly given (Unconditional Election), purchased by Christ alone (Limited/Particular Atonement), effectively applied (Irresistible Grace), and permanently secured (Perseverance of the Saints). Arminian theology emphasizes the universal availability of grace (prevenient grace) and the role of human response. Both traditions agree that grace is undeserved; the debate concerns whether it is irresistible.`,
    'progressionThroughScripture': `**Genesis:** Grace appears first as divine exception to judgment (Noah, Genesis 6:8). The Abrahamic covenant is itself pure grace — God chose Abraham without prior merit (Genesis 12:1-3; Romans 4:1-8).

**Exodus:** The burning bush (Exodus 3) and the passing-by of God before Moses (34:6-7) reveal the divine character as "gracious and merciful." The tabernacle — God's willingness to dwell among sinful people — is an act of extraordinary grace.

**Psalms:** Hesed (covenant grace/lovingkindness) appears 127 times in the Psalms. Psalm 103 is the great hesed psalm: "He has not dealt with us after our sins; nor rewarded us according to our iniquities."

**Prophets:** Isaiah's comfort oracles (chapters 40-55) are saturated with grace — God calling Israel back not because they deserve it but because of His own name and steadfast love.

**John's Gospel:** "Grace and truth came through Jesus Christ" (John 1:17). The Incarnation is the supreme act of grace — God becoming flesh to dwell among us.

**Romans:** Paul's systematic treatment of grace (chapters 3-8) climaxes in the declaration: "where sin abounded, grace did much more abound" (5:20). Grace is the dominant power of the new age in Christ.

**Ephesians:** "By grace are you saved through faith... it is the gift of God" (2:8-9) — the compressed gospel.

**Revelation:** The final grace: "The grace of our Lord Jesus Christ be with you all. Amen" (22:21) — grace opens and closes the story of redemption.`,
    keyOccurrences: [
      { reference: 'Genesis 6:8', text: 'But Noah found grace in the eyes of the LORD.', note: 'First use of grace (chen) in the Bible — grace as divine exception to judgment.' },
      { reference: 'Exodus 34:6', text: 'The LORD, The LORD God, merciful and gracious, longsuffering, and abundant in goodness and truth.', note: 'God\'s self-disclosure of character — grace embedded in the divine name.' },
      { reference: 'Psalm 103:10', text: 'He hath not dealt with us after our sins; nor rewarded us according to our iniquities.', note: 'The negative grace: what God did NOT do — the foundation of all positive grace.' },
      { reference: 'John 1:14', text: 'And the Word was made flesh, and dwelt among us...full of grace and truth.', note: 'Grace incarnated — the Logos brings grace in His very person.' },
      { reference: 'Romans 5:20', text: 'But where sin abounded, grace did much more abound.', note: 'The superabundance of grace — sin is outpaced by grace at every point.' },
      { reference: 'Ephesians 2:8-9', text: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.', note: 'The Reformation verse — the complete grammar of salvation: grace, faith, gift, not works.' },
      { reference: '2 Corinthians 12:9', text: 'My grace is sufficient for thee: for my strength is made perfect in weakness.', note: 'Grace as present sustaining power — not only for justification but for daily weakness.' },
      { reference: 'Titus 2:11-12', text: 'For the grace of God that bringeth salvation hath appeared to all men, Teaching us that, denying ungodliness and worldly lusts, we should live soberly, righteously, and godly.', note: 'Grace is not only saving but sanctifying — it teaches and transforms.' },
    ],
    doctrinalConnections: [
      'Justification by faith — grace is the ground, faith is the instrument, Christ is the basis',
      'Adoption — sonship is a gift of grace, not a reward of performance',
      'Election — God\'s sovereign choice is rooted in grace, not foreseen merit',
      'Sanctification — "grow in grace" (2 Peter 3:18) means grace continues after conversion',
      'Spiritual gifts (charismata) — every spiritual gift is a grace-gift; charisma comes from charis',
      'Perseverance — "the God of all grace" will complete what He began (1 Peter 5:10; Philippians 1:6)',
    ],
    practicalApplication: `Grace changes the posture of the human heart before God. One who has received grace cannot boast (Romans 3:27), cannot despair (Romans 8:1), and cannot hold conditional love over others (Matthew 18:23-35). Grace creates gratitude (the word "eucharist" comes from eucharistia, the Greek for thanksgiving — itself related to charis). Grace liberates from both legalism (performance for acceptance) and license (indifference to sin). Paul's answer to "shall we continue in sin that grace may abound?" is passionate: "God forbid. How shall we, that are dead to sin, live any longer therein?" (Romans 6:1-2). Grace does not permit sin; it removes sin's power.`,
    christConnection: `Christ is both the source and the supreme expression of grace. John 1:14-17 contrasts "the law came through Moses" with "grace and truth came through Jesus Christ." This is not law versus grace as two competing systems, but the fulfillment of what the law pointed to. The cross is the meeting point of divine justice and divine grace: "Being justified freely by his grace through the redemption that is in Christ Jesus" (Romans 3:24). The word "freely" (dōrean) means as a gift, gratis — yet the gift cost God everything. Grace is free to the receiver because it was infinitely costly to the Giver.`,
    relatedTopics: ['faith', 'justification', 'covenant', 'redemption', 'forgiveness'],
    keyTheologians: 'Augustine of Hippo (On Grace and Free Will), Martin Luther (Commentary on Galatians), John Calvin (Institutes III), Martyn Lloyd-Jones (Romans series), Thomas Oden (Classic Christianity)',
  },

  {
    id: 'faith',
    topic: 'Faith',
    originalWords: [
      {
        language: 'Hebrew',
        script: 'אֱמוּנָה',
        transliteration: 'emunah',
        strongsId: 'H530',
        definition: 'Faithfulness, firmness, steadiness, trust; the quality of being reliable and trustworthy',
        rangeOfMeaning: 'From aman (to be firm, reliable). Emunah is primarily active — it is not merely a cognitive belief but a steady, trustworthy way of life. Habakkuk 2:4 ("the just shall live by his emunah") is the foundation of Pauline faith-righteousness.',
      },
      {
        language: 'Greek',
        script: 'πίστις',
        transliteration: 'pistis',
        strongsId: 'G4102',
        definition: 'Faith, belief, trust, faithfulness; the settled confidence in a person or proposition that produces action',
        rangeOfMeaning: 'From peitho (to persuade). Pistis in secular Greek meant trustworthiness (of a person) or conviction (in an argument). In the NT it becomes the instrument of salvation — the human response to the divine grace offer. Faith has three classical elements: notitia (knowledge), assensus (agreement), and fiducia (personal trust/commitment) — it is the fiducia that saves.',
      },
    ],
    subtitle: 'The Living Trust That Connects the Soul to God',
    oneLiner: 'The confident, active trust in God and His Word — the instrument through which divine grace is received and eternal life obtained.',
    overview: `Faith in biblical theology is not merely intellectual agreement with propositions about God. It is a living, active trust that commits the whole person — mind, will, and affections — to the God who has revealed Himself and His promises. The great Hebrews 11 definition captures this: "Faith is the substance of things hoped for, the evidence of things not seen" (11:1). Faith gives present substance to future realities and functions as evidence for what the eye cannot see.

The Reformation made faith-alone (sola fide) its battle cry, recovering the Pauline insight that justification comes through faith, not works. But Paul's concept of faith is richer than mere mental assent. Romans 4 uses Abraham as the model: Abraham "believed God, and it was counted unto him for righteousness" (4:3, quoting Genesis 15:6). This faith was expressed in action — in leaving Ur, in receiving the covenant, in offering Isaac. James is not in tension with Paul but targeting a different error: James 2:14-26 attacks dead faith — faith without deeds — which is no genuine faith at all.`,
    theologicalBackground: `The three classical elements of saving faith (from the Reformed tradition) are: notitia (knowledge of the gospel content), assensus (intellectual agreement that it is true), and fiducia (personal trust and commitment — the saving element). A person may have notitia and assensus without fiducia — the demons "believe and tremble" (James 2:19) but are not saved.

Luther's insight was that faith is not a meritorious act that earns salvation but the empty hand that receives the gift. Calvin added that faith is the instrument, not the cause, of justification — the cause is Christ's righteousness, the instrument is faith. The "obedience of faith" (Romans 1:5; 16:26) shows that genuine faith always produces obedience — the two cannot ultimately be separated.`,
    'progressionThroughScripture': `**Genesis:** Abraham's faith (Genesis 15:6) is the OT foundation of Pauline justification-by-faith. His journey of faith — from Ur to Canaan, through childlessness, to the sacrifice of Isaac — shows faith as sustained, tested, and triumphant.

**Habakkuk 2:4:** "The just shall live by his faith (emunah)" — quoted three times in the NT (Romans 1:17; Galatians 3:11; Hebrews 10:38), making it perhaps the most quoted OT verse in the NT.

**Psalms:** The Psalms model both the expressions of faith ("I will trust and not be afraid," Isaiah 12:2) and the struggle of faith ("How long, O LORD? Will you forget me forever?" Psalm 13:1). Honest lament is itself an act of faith.

**John's Gospel:** Pisteuō (to believe) appears 98 times in John — more than in any other NT book. John's purpose statement: "these are written so that you may believe that Jesus is the Christ, the Son of God, and that by believing you may have life in his name" (20:31).

**Romans:** The entire letter is structured around faith: righteousness "from faith to faith" (1:17); Abraham as model of faith (4); faith's fruit (5-8); the word of faith (10:8-17). "Faith comes by hearing, and hearing by the word of God" (10:17).

**Hebrews 11:** The Hall of Faith — the great cloud of OT witnesses who "died in faith, not having received the promises, but having seen them afar off" (11:13). Faith is the consistent thread of all redemptive history.`,
    keyOccurrences: [
      { reference: 'Genesis 15:6', text: 'And he believed in the LORD; and he counted it to him for righteousness.', note: 'The foundational faith-verse of the entire Bible — Paul quotes it in both Romans 4 and Galatians 3.' },
      { reference: 'Habakkuk 2:4', text: 'The just shall live by his faith.', note: 'The text that broke Luther open — quoted three times in the NT as the charter of justification by faith.' },
      { reference: 'Hebrews 11:1', text: 'Now faith is the substance of things hoped for, the evidence of things not seen.', note: 'The Bible\'s own definition of faith — it gives reality to promises not yet fulfilled and acts as evidence for the invisible.' },
      { reference: 'Romans 1:17', text: 'For therein is the righteousness of God revealed from faith to faith: as it is written, The just shall live by faith.', note: 'The thesis of Romans — righteousness from God, received by faith, a purely gracious transaction.' },
      { reference: 'Ephesians 2:8', text: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God.', note: 'Grace is the basis; faith is the instrument; and even the faith may be understood as a gift.' },
      { reference: 'James 2:17', text: 'Even so faith, if it hath not works, is dead, being alone.', note: 'James attacks counterfeit faith — intellectual agreement without life transformation. Genuine faith always produces works.' },
      { reference: 'Hebrews 12:2', text: 'Looking unto Jesus the author and finisher of our faith.', note: 'Christ is the origin and completion of faith — faith is not self-generated but a gift from Him.' },
    ],
    doctrinalConnections: [
      'Justification — faith is the sole instrument of justification (sola fide)',
      'Assurance — genuine faith brings assurance of salvation (1 John 5:13)',
      'Sanctification — faith works through love (Galatians 5:6) — it is not passive',
      'Prayer — "the prayer of faith" (James 5:15) — faith is the atmosphere of effective prayer',
      'Repentance — faith and repentance are the two sides of conversion (Mark 1:15: "repent and believe")',
      'Works — not the basis of salvation but the evidence and fruit of genuine saving faith',
    ],
    practicalApplication: `Biblical faith is not a feeling or a willpower technique; it is trust in a person — Jesus Christ — based on evidence (His resurrection, His word, His character). Faith grows by hearing the word of God (Romans 10:17), by prayer, and by being exercised in trials (James 1:2-4). The Psalms model that honest struggle, including doubt and lament, is compatible with genuine faith. The question is not "do I feel certain?" but "is my trust anchored in Christ?" Assurance comes not from introspection but from the promises of God: "He that hath the Son hath life" (1 John 5:12).`,
    christConnection: `Jesus is simultaneously the object of faith and (as Hebrews 12:2 suggests) the source and perfector of faith. The "faith of Jesus Christ" (pistis Christou) language in Paul (Romans 3:22; Galatians 2:16) may refer to Christ's own faithfulness — His covenant faithfulness to the Father — as the ground of our justification, not merely the faith we place in Him. Either way, Christ is indispensable to faith: we believe in Him, and He is the one who "authors" faith in our hearts through His Spirit (Philippians 1:29: "to you it has been granted...to believe in him").`,
    relatedTopics: ['grace', 'justification', 'repentance', 'hope', 'works'],
  },

  {
    id: 'covenant',
    topic: 'Covenant',
    originalWords: [
      {
        language: 'Hebrew',
        script: 'בְּרִית',
        transliteration: 'berit',
        strongsId: 'H1285',
        definition: 'Covenant, alliance, treaty; a solemn bond between parties, often ratified by oath and sacrifice',
        rangeOfMeaning: 'Possibly from bara (to cut) — covenants were "cut" in the ancient Near East by passing between divided animals (Genesis 15). Berit governs the entire OT narrative: every major relationship between God and humanity is covenantal in structure.',
      },
      {
        language: 'Greek',
        script: 'διαθήκη',
        transliteration: 'diathēkē',
        strongsId: 'G1242',
        definition: 'Covenant, testament, will; a binding agreement, often with the force of a last will and testament',
        rangeOfMeaning: 'In secular Greek, diathēkē meant a "last will and testament" — not a bilateral contract but a sovereign disposition by one party. The LXX (Septuagint) translators chose this word over synthēkē (mutual agreement) to translate berit, emphasizing God\'s sovereign initiative in covenant-making. This is why "Old Testament" and "New Testament" use the same word.',
      },
    ],
    subtitle: 'The Backbone of Biblical Theology',
    oneLiner: 'God\'s binding, sovereign commitments to His people that structure the entire story of redemption — from Eden to the New Jerusalem.',
    overview: `The covenant is the organizing principle of the entire Bible. Biblical theology from Genesis to Revelation can be told as the story of God's covenants: their initiation, their violation by humanity, and their ultimate fulfillment in Christ. To understand the covenant is to understand how the two Testaments relate to each other and how the entire Bible holds together as one story.

A biblical covenant is not merely a contract (a bilateral exchange of goods or services, breakable by either party) but a solemn bond that establishes a relationship, specifies its terms, and is typically sealed with an oath, often accompanied by sacrifice. The phrase "I will be your God and you will be my people" is the covenant formula that echoes from Exodus through Revelation, and it is the heartbeat of the entire biblical relationship between God and humanity.`,
    theologicalBackground: `Covenant theology (the Calvinist/Reformed framework) organizes the Bible around three great covenants: the Covenant of Redemption (the eternal intra-Trinitarian agreement), the Covenant of Works (with Adam in Eden, Genesis 2), and the Covenant of Grace (God's provision of salvation through Christ, beginning in Genesis 3:15). The historical covenants (Noahic, Abrahamic, Mosaic, Davidic, New) are all administrations of the one Covenant of Grace.

New Covenant theology and dispensationalism are alternative frameworks that handle the relationship of the covenants differently, but all major evangelical traditions agree that the biblical covenants form the structural spine of redemptive history.

The Abrahamic, Mosaic, and Davidic covenants are progressive: each builds on and expands the previous, all finding their ultimate fulfillment in the New Covenant inaugurated by Christ at the Last Supper ("This cup is the new covenant in my blood," Luke 22:20).`,
    'progressionThroughScripture': `**Adamic Covenant (Genesis 1-3):** Life and dominion promised to obedience; death the consequence of transgression. Adam failed; Christ (the Last Adam) kept it perfectly.

**Noahic Covenant (Genesis 9):** God's unconditional commitment never to destroy the earth by flood again. Universal in scope — applies to all humanity. Sealed with the rainbow. Establishes the framework for common grace and human civilization.

**Abrahamic Covenant (Genesis 12; 15; 17; 22):** Land, descendants, blessing. Genesis 15 is the extraordinary covenant-cutting ceremony: God alone passes between the divided animals — an unconditional, unilateral commitment. "I will be your God and you will be my people" begins here. The covenant is confirmed by oath (Genesis 22:16-18).

**Mosaic Covenant (Exodus 19-24; Deuteronomy):** Conditional — blessings for obedience, curses for disobedience. A national covenant with Israel, structuring Israel's life as a theocratic community. Includes the Ten Commandments and the detailed Levitical law. This covenant could be (and was) broken by Israel's unfaithfulness.

**Davidic Covenant (2 Samuel 7; Psalm 89):** An eternal dynasty — "your throne shall be established forever." God promises that a son of David will rule eternally. This covenant is the direct ground of all messianic expectation.

**New Covenant (Jeremiah 31:31-34; Ezekiel 36:26-27; Luke 22:20; Hebrews 8-10):** Jeremiah's great prophecy: "I will put my law in their minds and write it on their hearts." Ezekiel adds: "I will give you a new heart...and put my Spirit within you." The law internalized, not merely external; individual relationship, not merely national; permanent forgiveness. Jesus ratifies this covenant in His blood at the Last Supper.`,
    keyOccurrences: [
      { reference: 'Genesis 15:17-18', text: 'When the sun had gone down and it was dark, behold, a smoking fire pot and a flaming torch passed between these pieces. On that day the LORD made a covenant with Abram.', note: 'God alone passes through the divided animals — He takes on Himself both sides of the covenant oath, guaranteeing its unconditional nature.' },
      { reference: 'Exodus 19:5-6', text: 'Now if you obey me fully and keep my covenant, then out of all nations you will be my treasured possession...a kingdom of priests and a holy nation.', note: 'The Mosaic covenant announced — conditional, national, priestly.' },
      { reference: '2 Samuel 7:16', text: 'Your house and your kingdom will endure forever before me; your throne will be established forever.', note: 'The Davidic Covenant — the promise that grounds all messianic expectation in the OT.' },
      { reference: 'Jeremiah 31:31-33', text: 'Behold, the days are coming, declares the LORD, when I will make a new covenant with the house of Israel...I will put my law within them, and I will write it on their hearts.', note: 'The New Covenant prophecy — the most detailed preview of the new covenant age in the OT.' },
      { reference: 'Luke 22:20', text: 'This cup is the new covenant in my blood, which is poured out for you.', note: 'Jesus ratifies the New Covenant with His own blood — the Last Supper is a covenant meal.' },
      { reference: 'Hebrews 8:6', text: 'But as it is, Christ has obtained a ministry that is as much more excellent than the old as the covenant he mediates is better, since it is enacted on better promises.', note: 'The New Covenant\'s superiority — better mediator, better promises, better blood.' },
    ],
    doctrinalConnections: [
      'The Church — the covenant community of the New Covenant, heir to the promises of Abraham (Galatians 3:29)',
      'Baptism — the sign of covenant entry in the New Covenant (parallel to circumcision in the Abrahamic)',
      'Lord\'s Supper — the covenant renewal meal, proclaiming the Lord\'s death "until he comes"',
      'Election — God\'s election is always covenantal in structure',
      'Law and Gospel — the Mosaic covenant (law) and the New Covenant (gospel) are the two dispensations Paul distinguishes in Galatians',
      'The Kingdom of God — the New Covenant is the inauguration of the Kingdom in its "already/not yet" structure',
    ],
    practicalApplication: `Understanding covenant transforms how Christians relate to God. We are not employees performing for wages but covenant partners in a relationship initiated and sustained by God's faithfulness, not ours. When we fail, the New Covenant does not collapse — it is sealed in Christ's blood and mediated by His permanent intercession (Hebrews 7:25). The covenant also transforms community: the church is a covenant family, not a voluntary association. Covenant theology grounds both assurance (God's unconditional commitment) and responsibility (the covenant creates obligations of love, obedience, and worship).`,
    christConnection: `Every biblical covenant finds its fulfillment in Christ. He is the offspring of Abraham (Galatians 3:16), the Son of David (Matthew 1:1), the mediator of the New Covenant (Hebrews 9:15), the Lamb whose blood ratifies it (Matthew 26:28). The cross is the ultimate covenant ceremony: Christ "cut" the New Covenant with His own blood, passing through death so that we might live. Hebrews 9:15-17 explicitly uses the "testament/will" meaning of diathēkē: a will only comes into force at the death of the testator — so Christ had to die for the New Covenant to become operative.`,
    relatedTopics: ['grace', 'redemption', 'atonement', 'kingdom-of-god', 'law'],
  },

  {
    id: 'redemption',
    topic: 'Redemption',
    originalWords: [
      {
        language: 'Hebrew',
        script: 'גָּאַל',
        transliteration: 'ga\'al',
        strongsId: 'H1350',
        definition: 'To redeem as a kinsman-redeemer (go\'el); to reclaim, ransom, buy back family property or a person',
        rangeOfMeaning: 'The go\'el was a close male relative obligated to redeem: property sold in poverty, a relative sold into slavery, or to avenge the blood of a murdered kinsman. Ruth\'s Boaz is the supreme OT example. God acts as go\'el for Israel, especially in the Exodus.',
      },
      {
        language: 'Hebrew',
        script: 'פָּדָה',
        transliteration: 'padah',
        strongsId: 'H6299',
        definition: 'To redeem, ransom, deliver; specifically through the payment of a price',
        rangeOfMeaning: 'Emphasizes the payment dimension of redemption — a price is paid to transfer ownership. Used of Israel\'s redemption from Egypt (Deuteronomy 7:8) and of the firstborn being "redeemed" through sacrifice.',
      },
      {
        language: 'Greek',
        script: 'ἀπολύτρωσις',
        transliteration: 'apolytrōsis',
        strongsId: 'G629',
        definition: 'Redemption, release obtained by payment of a ransom; deliverance through the payment of a price',
        rangeOfMeaning: 'From apo (away from) + lytrōsis (ransom, release). In the Greco-Roman world, lytrōsis was used of ransoming prisoners of war or freeing slaves. The NT uses it for Christ\'s purchase of freedom from sin, death, and Satan.',
      },
    ],
    subtitle: 'The Purchase Price of Human Freedom',
    oneLiner: 'God\'s costly rescue of humanity from the slavery of sin and death through the payment of a ransom — the life of His own Son.',
    overview: `Redemption is the Bible's great liberation narrative. It speaks of humanity enslaved — to sin, to death, to the accuser — and of God's sovereign, costly intervention to set them free by paying the price of release. The concept is woven through both Testaments with three strands: the kinsman-redeemer relationship (go'el), the ransom payment (padah/lytrōsis), and the pattern of the Exodus.

The paradigmatic OT redemption is the Exodus: "I am the LORD your God, who brought you out of Egypt, out of the house of slavery" (Exodus 20:2). This became Israel's defining identity — redeemed people. Every subsequent redemption in Scripture echoes its structure: slavery, divine intervention, payment (blood of the Passover lamb), passage through waters, new life in a new place.`,
    theologicalBackground: `Redemption is one of the great metaphors of the atonement, alongside propitiation (satisfying wrath), reconciliation (restoring relationship), justification (legal acquittal), and adoption (new family). These are not competing theories but complementary facets of what Christ accomplished at the cross.

The ransom metaphor ("the Son of Man came...to give his life a ransom for many," Mark 10:45) raises the question: to whom is the ransom paid? The early church debated whether it was paid to Satan (Origen) or to God (Anselm). Most modern evangelicals understand the ransom as metaphorical in its target — it describes the cost, not the payment recipient — and focus on the reality that sin has enslaved humanity and Christ's death was the price of liberation.`,
    'progressionThroughScripture': `**Exodus:** The Passover is the definitive OT redemption — blood on the doorposts, the firstborn spared, Israel delivered from slavery through the Red Sea. Paul calls Christ "our Passover lamb" (1 Corinthians 5:7), explicitly linking the two.

**Ruth:** Boaz as kinsman-redeemer (go'el) — the nearest relative who redeems Naomi's land and marries Ruth, preserving the family line. The most personal OT illustration of redemption.

**Isaiah 40-55:** God as the "Redeemer" (go'el) of Israel — used 13 times of God in Isaiah. The return from Babylon is portrayed as a new Exodus-redemption.

**Mark 10:45:** "The Son of Man came not to be served but to serve, and to give his life as a ransom for many" — Christ's own definition of the purpose of His death.

**Romans 3:24:** "Justified freely by his grace through the redemption that is in Christ Jesus" — redemption as the objective ground of justification.

**Galatians 3:13:** "Christ redeemed us from the curse of the law by becoming a curse for us" — substitutionary redemption from the law's condemnation.

**Revelation 5:9:** "Worthy are you...for you were slain, and by your blood you ransomed people for God from every tribe and language and people and nation" — the cosmic scope of redemption, the song of heaven.`,
    keyOccurrences: [
      { reference: 'Exodus 6:6', text: 'I will redeem you with an outstretched arm and with great acts of judgment.', note: 'God as the active Redeemer in the Exodus — the paradigm for all subsequent redemption.' },
      { reference: 'Job 19:25', text: 'For I know that my redeemer liveth, and that he shall stand at the latter day upon the earth.', note: 'Job\'s go\'el cry — the Redeemer who will vindicate him at the resurrection.' },
      { reference: 'Isaiah 44:22', text: 'I have blotted out, like a thick cloud, your transgressions, and like a cloud your sins; return to me, for I have redeemed you.', note: 'Redemption as the ground of the call to return — God\'s action comes before our response.' },
      { reference: 'Mark 10:45', text: 'For even the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many.', note: 'Jesus\'s own description of His mission — the ransom formula from His lips.' },
      { reference: 'Ephesians 1:7', text: 'In him we have redemption through his blood, the forgiveness of our trespasses, according to the riches of his grace.', note: 'Redemption and forgiveness linked — the mechanism (blood) and the result (forgiveness) and the source (grace).' },
      { reference: 'Revelation 5:9', text: 'Thou art worthy...for thou wast slain, and hast redeemed us to God by thy blood out of every kindred, and tongue, and people, and nation.', note: 'Heaven\'s redemption song — the purchased people from every nation, before the throne.' },
    ],
    doctrinalConnections: [
      'Atonement — redemption is one of the key metaphors for what the atonement accomplished',
      'Justification — the redeemed are also justified: legal status and relational status both changed',
      'Adoption — the redeemed become sons and daughters: "God sent his Son...to redeem those under the law, that we might receive the adoption as sons" (Galatians 4:4-5)',
      'Sanctification — "You were bought with a price; therefore glorify God in your body" (1 Corinthians 6:20)',
      'Eschatology — the "redemption of our bodies" (Romans 8:23) is the final act of redemption at the resurrection',
    ],
    practicalApplication: `To know yourself as redeemed changes your self-understanding from a free agent to a purchased person — and paradoxically, this is liberation, not servitude. "You are not your own; you were bought with a price" (1 Corinthians 6:19-20) means you are no longer enslaved to sin's imperatives but freed to live for the One who bought you. Redemption destroys the fear of condemnation (Romans 8:1), the fear of death (Hebrews 2:14-15), and the power of past guilt (Ephesians 1:7). The redeemed community's highest calling is worship — the Revelation vision shows this clearly.`,
    christConnection: `Christ is the kinsman-redeemer in the fullest possible sense. As a kinsman-redeemer must share the flesh of those he redeems (Hebrews 2:14: "Since therefore the children share in flesh and blood, he himself likewise partook of the same things"), so the eternal Son became flesh. As the go'el must have the means to pay (Boaz was wealthy), so Christ paid with His own blood — "the most precious currency in the universe" (1 Peter 1:18-19: "not with perishable things such as silver or gold, but with the precious blood of Christ"). As the go'el acts out of love, not obligation, so Christ redeemed us "freely by his grace."`,
    relatedTopics: ['atonement', 'grace', 'covenant', 'justification', 'shalom'],
  },

  {
    id: 'shalom',
    topic: 'Shalom / Peace',
    originalWords: [
      {
        language: 'Hebrew',
        script: 'שָׁלוֹם',
        transliteration: 'shalom',
        strongsId: 'H7965',
        definition: 'Peace, completeness, wholeness, welfare, prosperity, health; the state of total well-being in every dimension',
        rangeOfMeaning: 'From shalem (to be complete, sound, whole). Shalom is far richer than the English "peace" (absence of conflict). It encompasses total flourishing — physical health, mental wholeness, relational harmony, economic sufficiency, spiritual alignment with God. It is the vision of the good life as God intended it.',
      },
      {
        language: 'Greek',
        script: 'εἰρήνη',
        transliteration: 'eirēnē',
        strongsId: 'G1515',
        definition: 'Peace, harmony, tranquility; the state of being bound together in harmonious relationship',
        rangeOfMeaning: 'In secular Greek, eirēnē was primarily the absence of war. In the NT, shaped by the Hebrew shalom, it gains the richer sense of positive wholeness. Paul\'s "peace with God" (Romans 5:1) is not merely the cessation of hostility but the restoration of the full relational shalom God intended.',
      },
    ],
    subtitle: 'The Wholeness God Intends for All Things',
    oneLiner: 'Shalom is not merely the absence of conflict but the positive, comprehensive flourishing of all creation — the ultimate goal of God\'s entire redemptive plan.',
    overview: `Shalom is one of the most beautiful and misunderstood words in the Bible. English translations reduce it to "peace" — suggesting calm or absence of conflict. But shalom is a positive, overflowing reality: the state of utter well-being, wholeness, and flourishing in every dimension of existence. It encompasses physical health, material sufficiency, relational harmony, spiritual alignment with God, and ecological integrity.

The word occurs over 250 times in the Old Testament. It is the standard Hebrew greeting (shalom aleichem — peace be upon you) not because it is casual but because this is the deepest longing of the human heart. When the Old Testament prophets envision God's future, they use shalom as their central concept: the world made right, restored to what God intended.`,
    theologicalBackground: `Nicholas Wolterstorff's definition of shalom is widely cited: "the flourishing of human beings in all their relationships with God, with each other, and with the created world." This three-dimensional relational peace corresponds to the three dimensions broken by the Fall: relationship with God (spiritual alienation), relationship with others (Cain and Abel), and relationship with creation (the curse on the ground).

The "God of peace" (Romans 15:33; 16:20; Philippians 4:9) is not merely a God who brings calm but a God whose very character is shalom — wholeness, integrity, the unity of all good things. The messianic title "Prince of Peace" (Isaiah 9:6) announces that the coming king will be the one who brings and embodies shalom for all creation.`,
    'progressionThroughScripture': `**Creation (Genesis 1-2):** The original state of shalom — humanity at peace with God, with each other, and with creation. The Sabbath (Genesis 2:2-3) is the weekly celebration of shalom — rest in completed goodness.

**Fall (Genesis 3):** The shattering of shalom — alienation from God (hiding), alienation from each other (blame-shifting), alienation from creation (thorns and toil). The entire OT narrative is the story of shalom's loss and the beginning of its restoration.

**Mosaic Law:** The law's blessings are described in shalom terms (Leviticus 26:3-13): rain in season, abundant harvests, safety, victory — the physical dimensions of shalom. The law cannot ultimately produce shalom but points to the need for it.

**Psalms and Prophets:** Isaiah is the great shalom prophet. Isaiah 9:6 (Prince of Peace), 26:3 (perfect peace for the trusting mind), 32:17 (the fruit of righteousness is shalom), 52:7 ("How beautiful are the feet of him who brings good news, who publishes peace"), 53:5 ("the chastisement of our peace was upon him"), 54:10 (the covenant of my peace shall not be removed), 57:19 (peace, peace to the far and near).

**New Testament:** Jesus's greeting to His disciples is the shalom greeting: "Peace be with you" (John 20:19,21,26) — uttered three times to the frightened disciples after the resurrection. Romans 5:1: "Therefore, having been justified by faith, we have peace with God through our Lord Jesus Christ." This is the vertical dimension of shalom restored. Ephesians 2:14-17: "He himself is our peace" — breaking down the wall between Jew and Gentile, the horizontal dimension restored.

**Revelation:** The final shalom — "He will wipe away every tear...death shall be no more, neither shall there be mourning, nor crying, nor pain anymore" (21:4). The new creation is shalom perfected and permanent.`,
    keyOccurrences: [
      { reference: 'Isaiah 9:6', text: 'His name shall be called...Prince of Peace.', note: 'The Messiah as shalom-bringer — His reign will be the government of total peace.' },
      { reference: 'Isaiah 53:5', text: 'The chastisement of our peace was upon him.', note: 'The cost of shalom — it was purchased by the Servant\'s punishment, not achieved cheaply.' },
      { reference: 'Isaiah 26:3', text: 'Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee.', note: '"Perfect peace" is the Hebrew "shalom shalom" — doubled for completeness and emphasis.' },
      { reference: 'Romans 5:1', text: 'Therefore being justified by faith, we have peace with God through our Lord Jesus Christ.', note: 'The restored vertical dimension of shalom — the fundamental alienation overcome.' },
      { reference: 'Ephesians 2:14', text: 'For he is our peace, who hath made both one, and hath broken down the middle wall of partition between us.', note: 'Christ as the embodiment of shalom — horizontal reconciliation (Jew/Gentile) as the fruit of His cross.' },
      { reference: 'Philippians 4:7', text: 'And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.', note: 'The experiential peace available now — transcending rational explanation, guarding the heart.' },
      { reference: 'Revelation 21:4', text: 'And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain.', note: 'The final shalom — every dimension of brokenness healed, every wound closed.' },
    ],
    doctrinalConnections: [
      'Atonement — "the chastisement of our peace was upon him" (Isaiah 53:5) — shalom was purchased at the cross',
      'Justification — "peace with God" (Romans 5:1) is the relational fruit of justification',
      'Reconciliation — the horizontal dimension of shalom: Jew and Gentile, enemy and friend, made one',
      'New Creation — the eschatological shalom of Revelation 21-22 is the final goal of all redemption',
      'Sabbath — the weekly Sabbath rest is a mini-shalom, a foretaste of eternal rest (Hebrews 4:9-11)',
    ],
    practicalApplication: `Pursuing shalom is the vocation of every believer and community. This means not merely seeking absence of conflict but actively pursuing the flourishing of every person in every dimension: physical, relational, spiritual, economic. "Seek the welfare (shalom) of the city where I have sent you into exile, and pray to the LORD on its behalf" (Jeremiah 29:7) — the call to missional shalom-building in whatever context God places us. Peacemaking (Matthew 5:9: "blessed are the peacemakers") is the active pursuit of shalom in broken relationships.`,
    christConnection: `Jesus is the Prince of Peace (Isaiah 9:6). He brought shalom vertically ("peace with God," Romans 5:1), horizontally ("he is our peace," Ephesians 2:14), internally ("my peace I give to you," John 14:27 — a peace unlike the world's), and eschatologically (Revelation 21-22). The cross is the hinge of all shalom: "the chastisement of our peace was upon him" (Isaiah 53:5). On the cross, the condition for shalom was met — the guilt and alienation that destroyed it were absorbed by Christ. The resurrection announces that shalom is victorious — life, wholeness, and flourishing have the last word over death and fragmentation.`,
    relatedTopics: ['redemption', 'grace', 'kingdom-of-god', 'atonement', 'hope'],
  },

  {
    id: 'holiness',
    topic: 'Holiness',
    originalWords: [
      {
        language: 'Hebrew',
        script: 'קָדוֹשׁ / קֹדֶשׁ',
        transliteration: 'qadosh / qodesh',
        strongsId: 'H6942 / H6944',
        definition: 'Holy, sacred, set apart; distinct, other, separated from the common and consecrated to God',
        rangeOfMeaning: 'The root qadash means "to be set apart." Holiness is primarily a relational and positional concept: what is holy has been separated from the common/profane and dedicated to God\'s purposes. God\'s holiness is His absolute "otherness" — His transcendence beyond all created categories. Human holiness is derivative: being set apart by and for the Holy God.',
      },
      {
        language: 'Greek',
        script: 'ἅγιος',
        transliteration: 'hagios',
        strongsId: 'G40',
        definition: 'Holy, consecrated, set apart; morally pure, dedicated to God',
        rangeOfMeaning: 'The word for "saint" (hagios) is the same word as "holy." Every believer is a "holy one" (saint) — not because of moral achievement but because of being set apart for God in Christ. The Spirit is the "Holy Spirit" (Hagion Pneuma) — the agent who applies God\'s holiness to the believer.',
      },
    ],
    subtitle: 'The Searing, Beautiful Otherness of God',
    oneLiner: 'Holiness is God\'s fundamental nature — His absolute moral perfection and transcendent otherness — and the calling of every person redeemed by His grace.',
    overview: `Holiness is the attribute of God that most distinguishes Him from all created beings. It has two inseparable dimensions: the moral (God's absolute purity, the absence of all sin or defect) and the ontological (God's transcendence, His "set-apart-ness" from all creation). Isaiah's seraphim do not cry "Powerful, powerful, powerful" or "Loving, loving, loving" but "Holy, holy, holy" — the only divine attribute given three-fold repetition in Scripture.

Holiness is God's defining characteristic, the background against which all His other attributes must be understood. His love is a holy love; His wrath is a holy wrath; His grace is a holy grace. To understand God wrongly — reducing Him to sentimental love without holiness, or to fearsome power without love — is to have a false god.

The demand "Be holy, for I am holy" (Leviticus 11:44; 1 Peter 1:16) runs through both Testaments. It is not a moralistic self-improvement project but a call to participation in the divine nature (2 Peter 1:4) — to reflect in human life the character of the God who has set them apart.`,
    theologicalBackground: `Rudolf Otto's concept of the "numinous" — the "mysterium tremendum et fascinans" (the mystery that is at once overwhelming and attractive) — captures the experiential dimension of holiness. The holy is what causes trembling and draws at the same time. Isaiah's vision (chapter 6), Ezekiel's (chapters 1-3), and John's (Revelation 1) all produce the same reaction: prostration before overpowering divine holiness.

The Protestant Reformers recovered the centrality of divine holiness against a domesticated medieval piety. Jonathan Edwards's sermons, particularly "The Excellency of Christ," are among the best explorations of divine holiness combined with love in the Christian tradition.`,
    'progressionThroughScripture': `**Exodus 3:** "Take off your sandals, for the place where you are standing is holy ground" — the first major theophany (God-appearance) is characterized by holiness-space: Moses cannot approach the holy God in ordinary fashion.

**Leviticus:** The "holiness code" (chapters 17-26) structures Israel's entire life around the principle of holiness — food laws, sexual ethics, worship regulations — all expressing that Israel was a "holy nation" (Exodus 19:6), set apart for a holy God.

**Isaiah 6:** The trisagion — "Holy, holy, holy is the LORD of hosts; the whole earth is full of his glory." The complete shattering of human self-sufficiency (Isaiah: "I am undone") before divine holiness.

**John 17:** Jesus's High Priestly Prayer — "Sanctify them in the truth; your word is truth" — the New Covenant pathway to holiness: the Spirit-applied word.

**Romans 12:1:** "Present your bodies as a living sacrifice, holy and acceptable to God" — the practical expression of sanctification, the moment-by-moment consecration of everyday life.

**1 Peter 1:15-16:** "As he who called you is holy, you also be holy in all your conduct" — the NT imperative, grounded in the indicative of God's holiness and calling.

**Revelation 4:8:** The four living creatures, never ceasing to cry, "Holy, holy, holy, is the Lord God Almighty" — the eternal anthem of the redeemed creation before the throne.`,
    keyOccurrences: [
      { reference: 'Leviticus 11:44', text: 'For I am the LORD your God: ye shall therefore sanctify yourselves, and ye shall be holy; for I am holy.', note: 'The foundation of all biblical ethics: holiness as participation in God\'s own character.' },
      { reference: 'Isaiah 6:3', text: 'Holy, holy, holy, is the LORD of hosts: the whole earth is full of his glory.', note: 'The only tripled divine attribute in Scripture — emphasizing absolute, complete, utter holiness.' },
      { reference: 'Isaiah 57:15', text: 'For thus saith the high and lofty One that inhabiteth eternity, whose name is Holy; I dwell in the high and holy place, with him also that is of a contrite and humble spirit.', note: 'Holiness and humility — the transcendent Holy One dwells with the crushed in spirit. The paradox of grace.' },
      { reference: 'John 17:17', text: 'Sanctify them through thy truth: thy word is truth.', note: 'The New Covenant mechanism of sanctification: truth — the word of God applied by the Spirit.' },
      { reference: '1 Peter 1:15-16', text: 'But as he which hath called you is holy, so be ye holy in all manner of conversation; Because it is written, Be ye holy; for I am holy.', note: 'Peter applies the Levitical command to the NT church — the standard of holiness has not changed.' },
      { reference: 'Hebrews 12:14', text: 'Follow peace with all men, and holiness, without which no man shall see the Lord.', note: 'The necessity of holiness — not as the basis of salvation but as its necessary fruit and evidence.' },
    ],
    doctrinalConnections: [
      'Sanctification — the progressive process by which the believer is made holy, conformed to Christ\'s image',
      'Justification — the basis of the believer\'s holy standing before God is imputed righteousness, not personal holiness',
      'The Church — "holy nation" (1 Peter 2:9) — the corporate identity of the redeemed as God\'s set-apart people',
      'The Lord\'s Supper — "examine yourself" (1 Corinthians 11:28) — holiness is required for covenant meal participation',
      'Prayer — "hallowed be your name" — the first petition of the Lord\'s Prayer is a prayer for God\'s holiness to be recognized and honored',
    ],
    practicalApplication: `Holiness is not a monastic retreat from the world but the transformation of every dimension of ordinary life into sacred space — "whatever you do, do all to the glory of God" (1 Corinthians 10:31). Holiness addresses thought life (2 Corinthians 10:5), sexual life (1 Thessalonians 4:3-7), speech (Ephesians 4:29), use of money (1 Timothy 6:17-19), and social relationships (James 2:1-9). The means of holiness are prayer, the word of God, community, worship, and the disciplines of mortification (putting to death sinful habits) and vivification (cultivating Spirit-produced graces).`,
    christConnection: `Christ is the Holy One of God (Mark 1:24; John 6:69). He is the only human being who has ever fully lived the holiness that God required — "without sin" (Hebrews 4:15), "holy, innocent, unstained, separated from sinners" (Hebrews 7:26). His holiness is both our standard and our provision: at the cross, His perfect holiness was credited to us ("the holy and righteous one," Acts 3:14, given up by us); at regeneration, His Spirit begins making us holy from the inside. Sanctification is not self-improvement but Spirit-worked conformity to Christ's image (Romans 8:29; 2 Corinthians 3:18).`,
    relatedTopics: ['grace', 'atonement', 'fear-of-the-lord', 'worship', 'sanctification'],
  },

  {
    id: 'atonement',
    topic: 'Atonement',
    originalWords: [
      {
        language: 'Hebrew',
        script: 'כָּפַר',
        transliteration: 'kaphar',
        strongsId: 'H3722',
        definition: 'To cover, to make atonement, to appease, to expiate; the cancellation of sin\'s guilt by a substitutionary sacrifice',
        rangeOfMeaning: 'Possibly from a root meaning "to cover" (parallel to kopher, ransom price) or "to wipe clean." The Day of Atonement (Yom Kippur) uses this root throughout Leviticus 16. The great theological question is whether the atonement "covers" sin (conceals it until the real sacrifice comes — Romans 3:25) or fully removes it.',
      },
      {
        language: 'Greek',
        script: 'ἱλασμός / ἱλαστήριον',
        transliteration: 'hilasmos / hilastērion',
        strongsId: 'G2434 / G2435',
        definition: 'Propitiation, expiation; the turning away of divine wrath by an atoning sacrifice; the mercy seat',
        rangeOfMeaning: 'Hilastērion in Romans 3:25 is translated "propitiation" (ESV, NKJV) or "expiation" (NRSV) — a significant theological debate. Propitiation means satisfying divine wrath; expiation means cleansing sin. Both aspects are present: Christ is the mercy seat (hilastērion = the Ark\'s cover where atonement blood was sprinkled, Hebrews 9:5) who both turns away wrath and cleanses guilt.',
      },
    ],
    subtitle: 'The Great Exchange at the Heart of the Cross',
    oneLiner: 'The atoning work of Christ by which sin\'s guilt is removed, God\'s wrath is satisfied, and the broken relationship between God and humanity is fully and permanently restored.',
    overview: `Atonement is the central mechanism of the Christian gospel. It answers the most fundamental question of theology: how can a holy God and sinful humans be in relationship? The answer is not by God ignoring sin (which would violate His justice) or by humans making themselves good enough (which the entire Bible says is impossible) but by God Himself providing a substitute who absorbs the penalty of sin in their place.

The English word "atonement" is itself theologically revealing: it literally means "at-one-ment" — the restoration of unity between parties who were at enmity. The Hebrew kaphar (cover, atone) and the Day of Atonement ritual establish the OT framework; the NT fulfillment shows that what the animal sacrifices "covered" until judgment day, Christ's sacrifice fully and finally removed.`,
    theologicalBackground: `The major theories of the atonement debate what the cross primarily accomplished:
- **Penal Substitution** (Anselm, Reformers): Christ bore the penalty of sin in our place, satisfying divine justice. The dominant evangelical position.
- **Moral Influence/Exemplary** (Abelard): The cross primarily demonstrates God's love and moves us to respond. Criticized for not explaining how the cross actually changes our status.
- **Christus Victor** (early fathers, Aulén): The cross as the decisive victory over sin, death, and Satan. A NT theme (Colossians 2:15; Hebrews 2:14) that complements, not replaces, substitution.
- **Ransom** (early church): Christ's death as payment to free humanity from Satan's bondage. Expresses the liberation dimension.

The best theology holds these together: the cross is simultaneously penal substitution (satisfying justice), moral influence (demonstrating love), Christus Victor (defeating evil powers), and ransom (liberating the enslaved).`,
    'progressionThroughScripture': `**Leviticus 16 (Day of Atonement):** The most detailed OT atonement ritual. Two goats: one sacrificed (blood sprinkled on the mercy seat — expiation), one the scapegoat (Aaron confesses Israel's sins over it; it is sent into the wilderness — expulsion). Christ fulfills both: His blood is the true expiation (Hebrews 9), and He "became a curse for us" (Galatians 3:13), bearing our sin away.

**Isaiah 53:** "The LORD has laid on him the iniquity of us all" (v.6) — substitutionary atonement stated explicitly. "He was wounded for our transgressions; he was bruised for our iniquities" (v.5).

**Romans 3:21-26:** The climactic atonement passage — God publicly displayed Christ as a "propitiation" (hilastērion) to demonstrate His righteousness, showing that He was just in "passing over" former sins (covered under the OT system) and justifying those who trust in Jesus.

**Hebrews 9-10:** The systematic comparison of OT ritual atonement and Christ's final atonement. The repetition of the OT sacrifices showed they were insufficient; Christ offered Himself "once for all" — the finality of His atonement.

**1 John 2:2:** "He is the propitiation for our sins, and not for ours only but also for the sins of the whole world" — the sufficiency and scope of the atonement.`,
    keyOccurrences: [
      { reference: 'Leviticus 17:11', text: 'For the life of the flesh is in the blood: and I have given it to you upon the altar to make an atonement for your souls: for it is the blood that maketh an atonement for the soul.', note: 'The OT principle: life for life, blood for blood — the death principle at the heart of atonement.' },
      { reference: 'Isaiah 53:6', text: 'All we like sheep have gone astray; we have turned every one to his own way; and the LORD hath laid on him the iniquity of us all.', note: 'Substitutionary atonement\'s OT foundation — the Servant bears what we deserve.' },
      { reference: 'Mark 10:45', text: 'For even the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many.', note: 'Christ\'s own purpose-statement — His death as ransom, the substitutionary principle from His own lips.' },
      { reference: 'Romans 3:25', text: 'Whom God hath set forth to be a propitiation through faith in his blood, to declare his righteousness for the remission of sins.', note: 'God set Christ forth publicly as the mercy seat — propitiation and expiation combined; faith the means of reception.' },
      { reference: '2 Corinthians 5:21', text: 'For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him.', note: 'The great exchange — the most compact statement of penal substitution in the NT: our sin to Him, His righteousness to us.' },
      { reference: 'Hebrews 9:26', text: 'But now once in the end of the world hath he appeared to put away sin by the sacrifice of himself.', note: 'The finality of the atonement — "once for all" forever; no repetition possible or needed.' },
    ],
    doctrinalConnections: [
      'Justification — the atonement is the objective ground; justification is the forensic declaration',
      'Reconciliation — "God was in Christ reconciling the world to himself" (2 Corinthians 5:19)',
      'Redemption — Christ\'s atoning death is the ransom that redeems from sin\'s bondage',
      'Propitiation — the atonement satisfies divine wrath, enabling God to be "just and the justifier of him who has faith in Jesus" (Romans 3:26)',
      'The Lord\'s Supper — the ongoing memorial and proclamation of the atoning death "until he comes"',
      'Adoption — the atonement removes the barrier to adoption as children of God',
    ],
    practicalApplication: `Understanding the atonement transforms how we relate to God, to sin, and to others. Guilt is not something to manage, suppress, or deny — it is something Christ absorbed. "There is therefore now no condemnation for those who are in Christ Jesus" (Romans 8:1) is not wishful thinking but a verdict grounded in the objective work of the cross. This enables honest self-assessment without self-destruction: we can acknowledge sin without fear because it has been fully atoned for. It also generates a forgiving community: "Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you" (Ephesians 4:32).`,
    christConnection: `The atonement is Christ's supreme work. Every other aspect of His ministry — His teaching, His miracles, His example — is preparatory or applicatory. "Christ died for our sins according to the scriptures" (1 Corinthians 15:3) is the first and most essential kerygmatic statement. John 19:30 — "It is finished" (tetelestai — it is paid in full, a commercial term stamped on paid bills in the ancient world) — declares that the atonement is complete. Hebrews 9:12 emphasizes its permanence: "he entered once for all into the holy places...by means of his own blood, thus securing an eternal redemption."`,
    relatedTopics: ['redemption', 'grace', 'holiness', 'justification', 'covenant'],
  },

  {
    id: 'kingdom-of-god',
    topic: 'Kingdom of God',
    originalWords: [
      {
        language: 'Hebrew',
        script: 'מַלְכוּת / מֶלֶך',
        transliteration: 'malkuth / melek',
        strongsId: 'H4438 / H4428',
        definition: 'Kingdom, kingship, reign, dominion; the dynamic exercise of royal authority',
        rangeOfMeaning: 'Malkuth emphasizes the active ruling, not merely the geographical domain. "The Kingdom of God" is primarily about God\'s reign (dynamic) not just His realm (static). The Psalms celebrate God\'s kingship (Psalms 93, 96-99: "The LORD reigns!") as the theological foundation.',
      },
      {
        language: 'Greek',
        script: 'βασιλεία τοῦ θεοῦ',
        transliteration: 'basileia tou theou',
        strongsId: 'G932',
        definition: 'Kingdom of God / Kingdom of Heaven; the sovereign rule, reign, and authority of God, both present and future',
        rangeOfMeaning: '"Kingdom of heaven" (Matthew\'s preferred term) and "Kingdom of God" (Mark, Luke, John) are equivalent. The kingdom is both present (inaugurated in Christ\'s ministry) and future (consummated at His return) — the "already/not yet" tension that structures all NT eschatology.',
      },
    ],
    subtitle: 'The Central Theme of Jesus\'s Preaching',
    oneLiner: 'God\'s sovereign, saving reign — inaugurated in Jesus\'s ministry, present in the church, and coming in fullness at His return — the organizing theme of the entire biblical story.',
    overview: `The kingdom of God is the organizing center of Jesus's entire message. His first recorded preaching: "Repent, for the kingdom of heaven is at hand" (Matthew 4:17). His last recorded teaching before the ascension: "speaking about the kingdom of God" (Acts 1:3). The Lord's Prayer includes as its central petition: "Your kingdom come, your will be done, on earth as it is in heaven." Paul's summary of his preaching: "proclaiming the kingdom of God and teaching about the Lord Jesus Christ" (Acts 28:31).

Yet despite its centrality, the kingdom is widely misunderstood. Some reduce it to a future political state (dispensationalism in some forms); others to present social transformation (liberal theology); others to an inward spiritual state (pietism). The NT holds a dynamic tension: the kingdom is both "now" and "not yet."`,
    theologicalBackground: `The most important scholarly contribution to kingdom theology in the 20th century was the "already/not yet" formulation developed by Oscar Cullmann and George Eldon Ladd. Ladd's "The Gospel of the Kingdom" (1959) and "A Theology of the New Testament" demonstrate that the kingdom has been inaugurated (D-Day — the decisive battle has been won) but not yet consummated (V-Day — the victory has not yet been fully worked out). This tension explains the coexistence of miracles/healing/liberation (kingdom present) and ongoing suffering/evil (kingdom not yet fully come).

The kingdom is Christocentric: where Christ reigns, the kingdom is present. It enters wherever darkness yields to light, bondage is broken, the sick are healed, the poor hear good news. It will be consummated when Christ returns and "the kingdom of the world has become the kingdom of our Lord and of his Christ" (Revelation 11:15).`,
    'progressionThroughScripture': `**OT Foundation:** God's universal kingship is assumed throughout the OT (Psalm 103:19: "The LORD has established his throne in heaven, and his kingdom rules over all"). The covenant history of Israel is the story of God establishing His theocratic kingdom on earth. The expectation of a future Davidic king who would reign over a restored, universal, permanent kingdom drives all messianic prophecy.

**Daniel 2 and 7:** The stone that crushes all human empires and fills the earth (Daniel 2:35, 44) — the coming kingdom that supersedes all earthly governments. The "Son of Man" who receives "dominion, glory, and a kingdom that all peoples, nations, and languages should serve him" (7:14).

**Jesus's Parables:** The kingdom is described by dozens of parables — it begins small (mustard seed, leaven) and grows to fill the earth; it contains both good and evil until the harvest (wheat and tares); it is of surpassing worth (hidden treasure, pearl of great price); it demands total commitment; its invitation is universally offered but the response is divided.

**Acts:** "Proclaiming the kingdom of God" summarizes apostolic preaching (Acts 8:12; 14:22; 19:8; 20:25; 28:23,31). The church is the primary community of the kingdom — not the kingdom itself but its most visible earthly expression.

**Revelation:** The consummation — "The kingdom of the world has become the kingdom of our Lord and of his Christ, and he shall reign forever and ever" (11:15). The New Jerusalem descending is the spatial-temporal perfection of the kingdom — God's reign fully realized over a renewed creation.`,
    keyOccurrences: [
      { reference: 'Matthew 4:17', text: 'From that time Jesus began to preach, and to say, Repent: for the kingdom of heaven is at hand.', note: 'The opening of Jesus\'s public ministry — the kingdom is present, demanding response.' },
      { reference: 'Luke 17:20-21', text: 'The kingdom of God cometh not with observation...for, behold, the kingdom of God is within you (or: among you).', note: 'The kingdom as present reality — already operating, though not with political visibility.' },
      { reference: 'Matthew 12:28', text: 'But if I cast out devils by the Spirit of God, then the kingdom of God is come unto you.', note: 'Exorcisms as kingdom arrival — the battle against evil is evidence the king has come.' },
      { reference: 'Daniel 7:13-14', text: 'I saw in the night visions, and, behold, one like the Son of man came with the clouds of heaven...and there was given him dominion, and glory, and a kingdom.', note: 'The OT foundation of Jesus\'s "Son of Man" kingdom — the universal, eternal reign promised to the Messiah.' },
      { reference: 'Revelation 11:15', text: 'The kingdoms of this world are become the kingdoms of our Lord, and of his Christ; and he shall reign for ever and ever.', note: 'The consummation — all earthly authority subordinated to the eternal kingdom of Christ.' },
    ],
    doctrinalConnections: [
      'Eschatology — the kingdom\'s "already/not yet" structure is the framework for all NT eschatological thinking',
      'Christology — the kingdom is inseparable from the King; Jesus is the kingdom in person',
      'Mission — the church exists to announce, embody, and extend the kingdom',
      'Social ethics — kingdom values (justice, mercy, peace, care for the poor) shape the community\'s life in the world',
      'Prayer — "Your kingdom come" is the church\'s most fundamental political statement and eschatological hope',
    ],
    practicalApplication: `Kingdom ethics are the ethics of a community that lives by the values of God's future reign in the present age. This means: prioritizing justice for the oppressed (the kingdom is always coming from the margin to the center), generosity with wealth (storing up treasure in heaven, not on earth), forgiveness and reconciliation (the kingdom community is marked by the ethic of the restored family), and cross-bearing discipleship (the way into the kingdom is through the cross — "through many tribulations we must enter the kingdom of God," Acts 14:22).`,
    christConnection: `The kingdom is inseparable from the King. Jesus doesn't merely announce the kingdom — He is it. "The kingdom of God is among you" (Luke 17:21) is said when Jesus is standing before them. His healings are kingdom-signs (Matthew 11:5). His exorcisms are kingdom power (Matthew 12:28). His death and resurrection are the pivotal kingdom events — at the cross the king is apparently defeated, but in the resurrection He is decisively vindicated as Lord. The ascension is His enthronement (Acts 2:33-36; Psalm 110:1). His return will be the final, visible, universal revelation of a kingdom that has been present but hidden — "every knee shall bow" (Philippians 2:10).`,
    relatedTopics: ['covenant', 'redemption', 'shalom', 'faith', 'hope'],
  },
];

export function getWordStudyById(id: string): WordStudy | undefined {
  return WORD_STUDIES.find(w => w.id === id);
}

export const WORD_STUDY_SUMMARIES = WORD_STUDIES.map(({ id, topic, subtitle, oneLiner, originalWords }) => ({
  id, topic, subtitle, oneLiner, originalWords,
}));
