export interface VerseCommentary {
  verse: string;
  text: string;
  commentary: string;
}

export interface ChapterCommentary {
  reference: string;
  title: string;
  introduction: string;
  verseCommentaries: VerseCommentary[];
  conclusion: string;
}

export interface PassageCommentary {
  reference: string;
  title: string;
  mh: ChapterCommentary;
  jfb: ChapterCommentary;
}

export const COMMENTARIES: PassageCommentary[] = [
  // ══════════════════════════════════════════════════════
  //  GENESIS 1 — CREATION
  // ══════════════════════════════════════════════════════
  {
    reference: 'genesis+1',
    title: 'Genesis 1 — The Creation',
    mh: {
      reference: 'genesis+1',
      title: 'Genesis 1 — Matthew Henry',
      introduction: `The first chapter of Genesis is the foundation of all foundations — the cornerstone of all revealed religion. Before Moses writes one word of law, before a single covenant is recorded, before the story of Abraham or the prophecies of Isaiah, he writes: "In the beginning, God created the heavens and the earth." Everything that follows in the Bible depends upon this. If God is not the creator and sovereign owner of all things, then He has no right to give commands, make covenants, or execute judgments. But because He made all things, He owns all things; and because He owns all things, He rules all things; and because He rules all things, all His word is truth and all His ways are just.

Matthew Henry observes that Moses wrote not to gratify curiosity but to provide an account that every human being needs — who we are, where we came from, and who made us. He notes that God could have created the world in an instant; instead He created it in six days, giving us a pattern of ordered labor and Sabbath rest that shapes all human life. Every "and it was so" and "and God saw that it was good" is a theological statement: the creation is not the product of chance or conflict between competing gods (as Babylon's Enuma Elish taught) but the deliberate, purposeful work of one God who approves of what He makes.`,
      verseCommentaries: [
        {
          verse: 'Genesis 1:1',
          text: 'In the beginning God created the heaven and the earth.',
          commentary: `Henry: "In the beginning" — not from eternity, for that would be blasphemy, but in the beginning of time, when God chose to begin. The word *bara* (created) is used exclusively of divine action in the Old Testament — no human subject ever takes this verb. It means not merely to fashion from existing material but to bring into existence. God did not work upon pre-existing chaos or matter; He spoke and it was.

"God" — the Hebrew *Elohim* is a plural noun with a singular verb, already hinting at the Trinity that would later be more fully revealed. Henry says this name emphasizes God's power and authority — He is the God who does whatever He wills.

Henry notes the practical implication: the soul that truly believes this verse — that God made all things — will bow before Him as the absolute sovereign, will trust Him as the all-sufficient provider, and will worship Him as the only proper object of adoration. The atheist removes the foundation of all morality, all meaning, and all hope when he denies this verse. The Christian receives from it an anchor for the soul: the one who made all things holds all things.`,
        },
        {
          verse: 'Genesis 1:2',
          text: 'And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.',
          commentary: `Henry: The words "without form and void" (*tohu wabohu*) describe the earth in its raw, inchoate state before the six days of forming and filling. This is not a description of evil but of incompleteness — like the raw materials before a craftsman begins. Some have seen here a judgment (the "gap theory"), but Henry takes the straightforward reading: this is the pre-creation state, the blank canvas upon which God would paint.

"The Spirit of God moved upon the face of the waters" — the verb *rachaph* means to brood, to hover as a bird over its nest. This is the Spirit's creative presence, not yet speaking but already present, hovering in readiness. Henry draws the beautiful parallel to new creation: the Spirit who hovered over chaos to bring forth the first creation is the same Spirit who hovers over the chaos of a sinner's soul to bring forth new birth. Where the Spirit is, life is about to begin.

Henry also notes the triune presence from the very beginning: God the Father ordains creation, the Son (Word) speaks it into being (cf. John 1:3; Col 1:16), and the Spirit sustains and vivifies it. The whole Trinity was active in creation — as each Person is active in redemption.`,
        },
        {
          verse: 'Genesis 1:3',
          text: 'And God said, Let there be light: and there was light.',
          commentary: `Henry: "And God said" — the creation is by the Word of God. "He spoke, and it was done; he commanded, and it stood fast" (Psalm 33:9). This is the first of ten divine utterances in Genesis 1 (Jewish tradition counts them), corresponding perhaps to the ten commandments — the moral law as the echo of the creative word.

"Let there be light" — light was created before the sun, moon, and stars (which come on day four). Henry draws a spiritual lesson: the light of God's grace, knowledge, and presence precedes all other blessings. In redemption too, the first work is illumination — "God, who commanded the light to shine out of darkness, hath shined in our hearts" (2 Corinthians 4:6). Before we have any other blessing, we must have the light of the knowledge of Christ.

"And there was light" — the instantaneous response of creation to the Creator's command. Henry: "He said and it was done — no more words needed." The same omnipotence that created physical light creates spiritual light in the soul. "Let there be light" is the prayer that every sinner needs answered: that God would speak into the darkness of the heart and bring spiritual understanding.`,
        },
        {
          verse: 'Genesis 1:26-27',
          text: 'And God said, Let us make man in our image, after our likeness... So God created man in his own image, in the image of God created he him; male and female created he them.',
          commentary: `Henry: The creation of man is distinguished from all previous acts of creation in two significant ways. First, it is preceded by divine deliberation — "Let us make" — not a command to the earth or waters but a taking of counsel within the Godhead. "Let *us*" — the plural is remarkable; Henry understands it as a council of the Trinity, the Father addressing the Son and Spirit, all three Persons uniting in the supreme creative act. This gives humanity a dignity that nothing else in creation possesses: we were the subject of divine thought before we were made.

Second, man is made in God's *image* and *likeness* — the *tselem* and *demuth* of God. Henry identifies the image of God as comprising three elements: (1) the intellectual image — knowledge, reason, the capacity to know God and His truth; (2) the moral image — righteousness and holiness, the conformity of the will to God's will; (3) the dominion image — authority over the creatures, appointed as God's regent on earth.

"Male and female created he them" — both sexes bear the image equally and fully. Henry is emphatic here: the image of God is not masculine alone but human. Woman shares equally in the dignity of the divine image. This is the biblical foundation of male-female equality before God, however differentiated their roles.

Henry is careful to note that the image of God was defaced, though not obliterated, by the Fall. The intellectual image was darkened (we now misunderstand God and ourselves), the moral image was corrupted (we now incline to sin), and the dominion image was compromised (creation now resists human rule). Redemption is the restoration of the image: "renewed in knowledge after the image of him that created him" (Colossians 3:10).`,
        },
        {
          verse: 'Genesis 1:31',
          text: 'And God saw every thing that he had made, and, behold, it was very good. And the evening and the morning were the sixth day.',
          commentary: `Henry: After each day's work God saw that it was "good." But after the whole was complete — after man was made and set in dominion over creation — "it was *very* good." The superlative marks the completion of a perfect work. The world as God made it was without defect, without death, without sorrow, without sin. Every part was fitted to its purpose; every creature to its place; man to his God.

Henry draws the lesson: God reviews His works and approves them. We should similarly review our daily work to see whether it is such as we dare present to God — whether done in faith, from a right motive, by a right rule. The craftsman who can say "it is very good" has honor in his work; the Christian should aim for work that reflects the divine "very good."

Henry also anticipates the tragedy to come: all this goodness was spoiled by one act of disobedience in chapter 3. How unspeakably precious was what was lost in the Fall; how unspeakably gracious is the redemption that restores and surpasses it. "The first Adam" begins with "very good" and ends in ruin; "the Last Adam" (1 Corinthians 15:45) begins in ruin and ends in glory. The Revelation of John closes with a creation that is not merely "very good" but "new" — renewed, perfected, and sealed from any further corruption.`,
        },
      ],
      conclusion: `Henry's overall lesson from Genesis 1: We learn here (1) to admire the power of God — who created all things by a word; (2) to adore the wisdom of God — who ordered all things with such exquisite fitness; (3) to trust the goodness of God — who made all things "very good" for the benefit of man; (4) to worship the triune God — Father, Son, and Spirit all present in creation; (5) to understand our own dignity and our fall — made in God's image, ruined by sin, but awaiting restoration in Christ the Last Adam. Genesis 1 is not merely a cosmological account; it is the theological foundation for everything the Bible will say about God, man, sin, redemption, and new creation.`,
    },
    jfb: {
      reference: 'genesis+1',
      title: 'Genesis 1 — Jamieson, Fausset & Brown',
      introduction: `Genesis 1 forms the preamble to all divine revelation. Jamieson notes that the Hebrew title *Bereshith* ("in the beginning") was used by the Jews to name the entire book, as it was their custom to name books by their opening words. The chapter proceeds with majestic, rhythmic simplicity — a literary form unlike either Babylonian myth or Greek philosophy — presenting creation not as conflict (the Babylonian view) nor as emanation (the Greek Gnostic view) but as the sovereign, ordered work of one almighty Creator.

The JFB commentary is attentive to the Hebrew text and to the theological polemics embedded in the account: every element of Genesis 1 appears to be a deliberate counter-narrative to the polytheism of Israel's neighbors. The sun and moon are not named (lest they be confused with the deities Shamash and Sin); animals are not divine but created; man is not a slave of the gods but their image-bearer and regent over creation.`,
      verseCommentaries: [
        {
          verse: 'Genesis 1:1',
          text: 'In the beginning God created the heaven and the earth.',
          commentary: `JFB: The verse is the most comprehensive statement of origins in all literature. *Bara* (to create) in the Qal stem has God as its only subject throughout the OT, denoting creative activity proper to God alone — not manufacturing from existing material but calling into existence what did not exist. The Septuagint translates with *epoiēsen* (made), but the Hebrew is more precise.

"Heaven and the earth" — the Hebrew idiom for the totality of the universe, what we would call "everything that exists." It is a merism — two opposite extremes that together encompass all (cf. "from Dan to Beersheba" = all of Israel). Fausset notes that this opening statement is the death-blow to three false systems: (1) atheism — God exists and is the cause of all; (2) polytheism — one God, not many; (3) materialism — matter had a beginning, it is not eternal.

Brown adds: The simplicity of the statement is itself theologically significant. No argument for God's existence is offered; no origin of God is explained. He simply IS, and He simply acts. This is the perspective of faith, not of philosophy. The Bible assumes God; it does not prove Him. And the soul that begins with "In the beginning God" has a foundation that no subsequent intellectual attack can remove.`,
        },
        {
          verse: 'Genesis 1:3',
          text: 'And God said, Let there be light: and there was light.',
          commentary: `JFB: The creative fiat is expressed in the imperfect tense with a jussive force: *yehi or* — "light, be!" The instantaneity of the response is the measure of divine omnipotence. Jamieson: "He spoke, and the energy of his word was the cause of the effect; it was irresistible, and immediate — yea, even simultaneous with the command."

Fausset notes the theological priority of light: it is the first created thing, preceding all other specific works. In Scripture, light is consistently associated with God's presence, knowledge, holiness, and salvation: "God is light" (1 John 1:5); "Thy word is a lamp" (Ps 119:105); Christ is "the light of the world" (John 8:12). The physical priority of light in creation is a parable of its spiritual priority in redemption.

Brown: The creation of light before the luminaries (day 1 vs. day 4) has troubled commentators. The explanation most consistent with the text is that a diffused, atmospheric light was created on day 1 — providing the cycle of day and night — while on day 4 the specific light-bearers were formed to govern, mark seasons, and give light in a more concentrated way. This sequence also teaches that light is not identical with the sun; God is the ultimate source of light, and in the New Jerusalem there is no sun because "the Lord God giveth them light" (Rev 22:5).`,
        },
        {
          verse: 'Genesis 1:26-27',
          text: 'Let us make man in our image, after our likeness...',
          commentary: `JFB: The "Let us" (*na'aseh*) is the most discussed grammatical construction in the chapter. Several interpretations have been proposed: (1) the plural of majesty (royal "we") — rejected by most scholars as a post-biblical usage not found in Hebrew of this period; (2) God addressing the angelic council — possible (cf. 1 Kings 22:19-22) but unlikely since angels did not create man; (3) the Trinity in intra-divine address — the view of the church fathers and most evangelical commentators, fitting with the plural *Elohim* and the NT revelation of the Son as the agent of creation (John 1:3; Col 1:16; Heb 1:2).

Jamieson on the *image* (*tselem*) and *likeness* (*demuth*): While some church fathers distinguished these (image = natural faculties; likeness = spiritual conformity), the Hebrew usage treats them as a hendiadys — two words expressing one concept. The image of God in man encompasses personality (self-consciousness, reason, will), moral capacity (conscience, the capacity for righteousness), and spiritual aptitude (the ability to know and commune with God).

Fausset notes that the "image" was not destroyed by the Fall but damaged and distorted. Even fallen human beings retain the image (Genesis 9:6 assumes it as the basis for capital punishment: "for in the image of God made he man"). The NT goal of sanctification is the restoration of that image: "conformed to the image of his Son" (Romans 8:29); "renewed in knowledge after the image of him that created him" (Colossians 3:10).

"Male and female created he them" — Fausset: The creation of woman is here stated as a fact, though the details are reserved for chapter 2. The significance is that both sexes simultaneously and equally bear the divine image. The sexual differentiation is part of the original "very good" creation, not a concession or a fall.`,
        },
      ],
      conclusion: `JFB's final synthesis of Genesis 1: The chapter presents creation as the product of divine speech (emphasizing the Word, later revealed as the eternal Son), divine Spirit (the creative presence of the Holy Spirit), and divine will (the Father's sovereign purpose). It establishes humanity as the crown of creation, unique in bearing God's image, and uniquely accountable to God. The seven-day structure with its Sabbath culmination (chapter 2) becomes the template for all human time — six days of productive work, one day of rest and worship. The entire chapter is at once history, theology, ethics, and doxology.`,
    },
  },

  // ══════════════════════════════════════════════════════
  //  JOHN 1 — THE WORD
  // ══════════════════════════════════════════════════════
  {
    reference: 'john+1',
    title: 'John 1 — The Word Made Flesh',
    mh: {
      reference: 'john+1',
      title: 'John 1 — Matthew Henry',
      introduction: `The Gospel of John opens not with a genealogy (as Matthew) or with John the Baptist (as Mark) or with Luke's careful historical account, but with a soaring theological prologue that has no parallel in all of literature. Henry says that this prologue is John's thesis — the lens through which he means us to read everything that follows. When the other evangelists tell us what Jesus said and did, John wants us to know first, before any miracle or teaching, exactly WHO is speaking and acting. The answer is overwhelming: the eternal Word, through whom all things were made, who is fully God, has become fully flesh. This is the gospel of the Incarnation.

Henry was a pastor as well as a commentator, and he reads the prologue practically: it is meant not to satisfy curiosity about metaphysics but to ground the believer's faith in the absolute sufficiency of Christ. If Christ is truly the eternal Word and the Light of the world, then He is enough for every need, every darkness, every death.`,
      verseCommentaries: [
        {
          verse: 'John 1:1',
          text: 'In the beginning was the Word, and the Word was with God, and the Word was God.',
          commentary: `Henry: Three staggering assertions in one verse, each building on the last. (1) "In the beginning WAS the Word" — not "came to be" but "was." Before creation began, the Word already existed. The Word was not the first created thing but the pre-creation reality. He who "in the beginning" was present is thus co-eternal with God the Father, sharing in divine eternality. Henry notes that this deliberately echoes Genesis 1:1 — "in the beginning God" — to identify the Word as the same divine agent present in creation.

(2) "The Word was WITH God" — the Greek is *pros ton theon*, literally "toward God," implying not merely proximity but intimate, face-to-face relationship. The Word is a distinct person within the Godhead, not simply an attribute or mode of God. There is eternal fellowship, eternal communication, eternal love between the Word and the Father.

(3) "The Word WAS God" — the climactic assertion that has been debated for twenty centuries. The Greek places *theos* (God) before the verb without the definite article: *theos ēn ho Logos*. This grammatical construction (a predicate nominative without the article) does not mean "the Word was a god" (as the Jehovah's Witnesses translate, confusing the absence of the article with indefiniteness) but rather denotes the nature or quality of the subject. Henry: the Word is of the same nature as the Father — fully, truly, essentially divine — while also being a distinct person. This is the foundation of Trinitarian theology: three persons, one God.

Henry's practical note: the Word became flesh (v.14) so that this infinite, eternal, divine Being might be touched, heard, seen, and known by sinful humans. The Incarnation is not a diminishment of deity but its most astonishing self-disclosure.`,
        },
        {
          verse: 'John 1:3',
          text: 'All things were made by him; and without him was not any thing made that was made.',
          commentary: `Henry: "All things" — *panta* with no qualification — every single created thing, without exception. The Word is not a creature who was later elevated to divine status (as Arianism taught) but the Creator. This verse, combined with Colossians 1:16, Hebrews 1:2, and 1 Corinthians 8:6, creates an insurmountable barrier against any view of Christ as a creature or a lesser god.

"Without him was not any thing made that was made" — the negative reinforcement is total. Not merely "most things" but "not anything." Henry observes that this universal creative agency is precisely why Christ has universal salvific authority: "All authority in heaven and on earth has been given to me" (Matthew 28:18). The one who made all things has the right and power to save all who come to Him.

Practical application by Henry: We should marvel at the condescension of the Creator becoming a creature for our salvation. The one through whom all the galaxies, all the mountains, all the creatures were spoken into being, emptied Himself and was born in a stable, worked at a carpenter's bench, walked dusty roads, and died on a criminal's cross. The entire creation was made through Him; He was put to death by His own creatures. Yet this was precisely the will of the Father and the love of the Son for lost humanity.`,
        },
        {
          verse: 'John 1:12-13',
          text: 'But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name: Which were born, not of blood, nor of the will of the flesh, nor of the will of man, but of God.',
          commentary: `Henry: These two verses together present the twin doctrines of conversion and regeneration with extraordinary precision. Verse 12 states the human side — "received him" and "believe on his name" — the active, responsible choice of faith. Verse 13 states the divine side — "born of God" — the supernatural, sovereign work of regeneration that precedes and enables the choice of faith.

"Received him" — faith is described as reception, the welcoming of a person, not merely the intellectual acceptance of a proposition. To receive Christ is to receive His person, His office (as Prophet, Priest, and King), His salvation, and His lordship. Henry: "Those, and those only, who receive Christ, shall receive the privilege of being the sons of God."

"To become the sons of God" — the *exousia* (power, right, authority) given to believers is the legal right of adoption into God's family. This is not natural sonship (belonging to God as creator) but adoptive sonship (belonging to God as Father through redemption and the new birth). The difference between a creature and a son is vast: creatures are owned; sons are loved, known, and heirs.

"Not of blood" — not by natural lineage (being born Jewish does not make one a child of God); "nor of the will of the flesh" — not by human religious effort or self-improvement; "nor of the will of man" — not by the decision of any human priest or pastor; "but of God" — the new birth is entirely a divine operation. Henry notes the threefold negation before the positive: John excludes every human contribution to regeneration before attributing it wholly to God. This is one of the clearest statements of sovereign grace in the entire Bible.`,
        },
        {
          verse: 'John 1:14',
          text: 'And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.',
          commentary: `Henry: This is perhaps the most theologically packed single verse in the New Testament. John declares the Incarnation — the eternal Word assuming a fully human nature — in four words: *ho Logos sarx egeneto*, "the Word flesh became."

"Was made flesh" — the verb *egeneto* (became) marks a new fact in the biography of the eternal Word that was not true before: He BECAME flesh. Not that He became less than God, but that He became what He was not: genuinely, bodily human. Henry is insistent against two ancient errors: (1) Docetism — the view that the flesh was only apparent — denied by this verse; (2) Nestorianism — the view that the divine and human natures were merely joined rather than personally united in one person — denied by the subject of the sentence: it is the WORD who became flesh, not a human who was joined to a divine person.

"Dwelt among us" — *eskēnōsen*, literally "tabernacled" or "pitched his tent" among us. The allusion to the Tabernacle is deliberate: as God's glory dwelt in the Tabernacle in the wilderness (Exodus 40:34-35), so the fullness of divine glory now tabernacled in the human body of Jesus. Henry: "He fixed his tabernacle in our nature, as he had before fixed his tabernacle in the midst of the camp of Israel." The Incarnation is the new and final Tabernacle.

"We beheld his glory" — John speaks as an eyewitness. He literally saw the Transfiguration (2 Peter 1:16-18), the feeding of the five thousand, the raising of Lazarus, the crucifixion, the resurrection. Each of these was a manifestation of divine glory in a human life.

"Full of grace and truth" — the two great covenant attributes of God in the Old Testament (Exodus 34:6: "merciful and gracious, long-suffering, and abundant in goodness and truth") are now perfectly incarnated in a person. Grace is the giving of what we do not deserve; truth is the perfect conformity to reality. Jesus never gave false grace (sentimentality without confronting sin) and never gave graceless truth (moral rigor without tenderness). He was the perfect embodiment of both.`,
        },
        {
          verse: 'John 1:29',
          text: 'Behold the Lamb of God, which taketh away the sin of the world.',
          commentary: `Henry: John the Baptist's announcement of Jesus is the most concise gospel statement in the four Gospels. In seven words (in the original Greek) it compresses the whole theology of the atonement: identity (the Lamb of God), mission (taketh away sin), scope (of the world).

"The Lamb of God" — the genitive "of God" can be taken in two complementary senses: (1) the Lamb provided by God (as God provided the ram for Abraham in Genesis 22:13-14: "the LORD will provide himself a lamb"); (2) the Lamb belonging to God, offered to God, accepted by God. Both are true: the Father sent the Son (John 3:16), and the Son offered Himself to the Father (Hebrews 9:14). Henry notes the whole sacrificial system of the Old Testament — every Passover lamb, every daily offering, every Day of Atonement goat — was a pointer to this one "Lamb of God."

"Which taketh away" — the Greek *airō* means to lift up and carry away. It is not merely that sin is overlooked or forgiven in a soft sense, but that it is actually borne away by a substitute. Isaiah 53:4: "Surely he hath borne our griefs and carried our sorrows." The Lamb of God does not merely cover sin (as the OT sacrifices provided a covering — *kaphar*) but removes it entirely. "As far as the east is from the west, so far hath he removed our transgressions from us" (Psalm 103:12).

"The sin of the world" — *ton hamartian tou kosmou*, "the sin of the world" in the singular. Not sins (plural) as isolated acts but sin as the principle, the condition, the root. Henry: the Baptist does not say "the sins of Israel" or "the sins of the elect" but "the sin of the world" — indicating the universal sufficiency of the sacrifice, even if not its universal application. The Lamb's blood is sufficient for all; it is efficient for those who believe.`,
        },
      ],
      conclusion: `Henry's summary of John 1: The chapter introduces three Persons who will dominate the Gospel — the eternal Word (Jesus Christ, vv.1-18), the forerunner prophet (John the Baptist, vv.19-34), and the first disciples (vv.35-51). But the prologue is the key to everything: those who know who Jesus truly is will read every subsequent miracle, discourse, death, and resurrection with the proper astonishment. The Creator has become a creature to redeem creatures. The eternal Word has spoken in human syllables. The fullness of grace and truth has taken up residence in a human body. Everything about the Christian life — faith, prayer, salvation, holiness, hope — rests upon this foundation: "the Word was made flesh."`,
    },
    jfb: {
      reference: 'john+1',
      title: 'John 1 — Jamieson, Fausset & Brown',
      introduction: `The Prologue to John (1:1-18) is, in the judgment of JFB, "the most comprehensive doctrinal introduction to any of the Gospels." It was written, Brown notes, not to introduce a biography but to establish a theological perspective — the reader must know that Jesus of Nazareth is the eternal, divine, incarnate Word before a single miracle is recorded. The Prologue is John's answer to the question that runs through the whole Gospel: "Who is this man?" The answer is given before the question is fully formed: He is God.

JFB's commentary is attentive to the Greek philosophical background (the *Logos* concept was familiar in Stoic and Platonic thought as the ordering principle of the universe) while insisting that John's use is distinctively Hebrew: the *Logos* is not an abstract principle but a personal agent, identified with the God who spoke in creation (Genesis 1) and who speaks in the Law and Prophets.`,
      verseCommentaries: [
        {
          verse: 'John 1:1',
          text: 'In the beginning was the Word, and the Word was with God, and the Word was God.',
          commentary: `JFB: The three clauses of verse 1 correspond to three aspects of the Logos's eternal being: His existence before time ("was in the beginning"), His personal distinctness from the Father ("was with God"), and His essential deity ("was God").

Jamieson on "the Word" (*ho Logos*): The choice of *Logos* was deliberate and brilliant. To Jewish readers it recalled the *memra* (Aramaic for "word") used in the Targums as a reverent circumlocution for God's direct activity; it recalled the creative "And God said" of Genesis 1. To Greek readers it recalled the Stoic *logos* as the rational principle of the universe. But John redefines the term entirely: the *Logos* is not a principle but a Person; not an emanation but the eternal Son.

Fausset on the grammar of "the Word was God": The construction *theos ēn ho Logos* is well-understood in Greek grammar. The predicate (theos) precedes the subject (Logos) and lacks the article. This is a normal Greek way of expressing "of the nature of" or "essentially characterized by." It no more means "a god" than John 4:24 means "God is a spirit" (one of many spirits); rather, "God is Spirit" — Spirit is the nature of God. Similarly here: the nature of the Logos is divine — He is fully and truly God.

Brown notes the four-verse inclusio: the chapter opens with "the Word was God" (1:1) and closes with the Son "in the bosom of the Father" (1:18), declaring God. The whole prologue is bracketed by the deity of the Son.`,
        },
        {
          verse: 'John 1:14',
          text: 'And the Word was made flesh, and dwelt among us...',
          commentary: `JFB: The word *egeneto* (became) is the pivot of the entire prologue and of all Christian theology. The same verb used in 1:3 ("all things were made/became through him") is now used of the Word Himself. He who was the agent of all becoming has Himself become — taken upon Himself a genuine human nature.

Jamieson: "was made flesh" — the scandalous, glorious center of Christianity. Not "appeared to be flesh" (Docetism), not "took possession of a human person" (Nestorianism), but "became flesh" — the eternal Person of the Son assumed full human nature, body and soul, without loss of His divine nature. Chalcedon (AD 451) would later define this as two natures, one Person, without confusion, without change, without division, without separation.

Fausset on *eskēnōsen* (dwelt/tabernacled): The word is drawn from the Greek *skēnē* (tent, tabernacle), cognate with the Hebrew *Shekhinah* (the divine presence/glory). The parallelism with Exodus 40:34 is intentional: as the cloud of glory filled the Tabernacle when Moses completed it, so the divine glory filled the human body of Jesus. But the Tabernacle was temporary and movable; the Incarnation is permanent. The risen, ascended, glorified Christ still has His human nature — eternally.

Brown on "full of grace and truth": These two qualities correspond to the Hebrew pair *hesed* (lovingkindness/grace) and *emet* (truth/faithfulness) from Exodus 34:6. This is the divine name revealed to Moses in the most direct theophany of the Old Testament. John is saying: the character of God self-disclosed to Moses on Sinai is now personally embodied in Jesus Christ. To see Jesus is to see the full character of God in a form we can encounter, touch, and know.`,
        },
        {
          verse: 'John 1:29',
          text: 'Behold the Lamb of God, which taketh away the sin of the world.',
          commentary: `JFB: John the Baptist's proclamation is the interpretive key to Jesus's entire ministry. Before Jesus has taught a single parable or healed a single person in this Gospel, He is identified as "the Lamb of God" — the one whose death is the purpose and climax of His coming.

Jamieson on "the Lamb of God": Three OT backgrounds converge here. (1) The Passover lamb (Exodus 12) — whose blood protected Israel from the destroying angel, whose death was substitutionary and communal — Paul explicitly connects in 1 Corinthians 5:7: "Christ our Passover is sacrificed for us." (2) The Isaiah 53 Suffering Servant, "led as a lamb to the slaughter" (53:7), who "bore the sins of many." (3) The daily burnt offering lamb at the Temple (Exodus 29:38-42), whose continuous sacrifice maintained Israel's approach to God. All three strands meet in the one person of Christ.

Fausset on *airō* (taketh away): The verb is decisive. It is not *kaluptō* (to cover, as the OT atonement covered sin until the final sacrifice came) but *airō* (to lift and carry away). Christ's atonement does not merely defer the penalty but abolishes the charge. Hebrews 10:14: "by one offering he hath perfected for ever them that are sanctified." The contrast with the repeated OT sacrifices is stark: they must be repeated because they never truly took away sin (Hebrews 10:1-4); Christ's single offering takes it away permanently.

Brown on "the sin of the world": The singular *hamartian* (the sin) rather than the plural (sins) is significant. John points not merely to individual acts of transgression but to the power and condition of sin — the solidarity of the human race in its fallen state. And "of the world" (*tou kosmou*) is universal in scope: no nationality, race, sex, or class is excluded from the reach of this atoning sacrifice. Its sufficiency is unlimited; its efficacy applies to all who receive it by faith.`,
        },
      ],
      conclusion: `JFB summary of John 1: The prologue establishes the ontological identity of Jesus (eternal, divine, incarnate Word); the Baptist narrative establishes His redemptive identity (Lamb of God, Son of God); the disciple-calling narrative establishes His personal identity (the one who calls by name, the ladder between heaven and earth of Jacob's vision). John 1 is the most complete Christological introduction in the NT, presenting Christ as simultaneously the agent of creation, the light of humanity, the only-begotten of the Father, the Lamb who takes away sin, and the one who gives the right of divine sonship to all who receive Him.`,
    },
  },

  // ══════════════════════════════════════════════════════
  //  JOHN 3 — BORN AGAIN
  // ══════════════════════════════════════════════════════
  {
    reference: 'john+3',
    title: 'John 3 — Born Again',
    mh: {
      reference: 'john+3',
      title: 'John 3 — Matthew Henry',
      introduction: `Henry regards John 3 as one of the most important chapters in the New Testament, containing as it does the clearest exposition of the new birth and the most comprehensive statement of the gospel (v.16) in the entire Bible. The chapter falls into two parts: the conversation with Nicodemus (vv.1-21), in which the necessity and nature of regeneration are expounded; and John the Baptist's final testimony to Christ (vv.22-36), in which he makes his celebrated declaration, "He must increase, but I must decrease."

Henry notes the striking contrast at the opening: the chapter begins with a ruler of the Jews secretly coming to Jesus by night (Nicodemus, representing human religious achievement) and will end with the disciples of both Jesus and John baptizing in the Jordan. The movement is from private inquiry to public testimony. Nicodemus comes with intellectual questions; John the Baptist comes with complete self-surrender. Both are brought to Jesus; only one, in this chapter at least, goes away transformed.`,
      verseCommentaries: [
        {
          verse: 'John 3:1-2',
          text: 'There was a man of the Pharisees, named Nicodemus, a ruler of the Jews: The same came to Jesus by night...',
          commentary: `Henry: Nicodemus is introduced with great care: a Pharisee (the strictest sect of Judaism, scrupulously observing the law), a ruler (a member of the Sanhedrin, the highest Jewish court of 71 members), and evidently a man of learning and good reputation. He had, in other words, everything that Jewish religion could offer. Yet this very completeness of religious résumé is what makes his coming to Jesus so significant: he came not because Judaism had failed him but because Jesus drew him with a power he could not explain.

"Came by night" — Henry has been much exercised by this detail. He refuses to condemn Nicodemus outright for it (as some do, reading cowardice) and instead notes that evening was a common time for rabbinic discussion, that Nicodemus perhaps feared interruption during the day, and that there may have been genuine spiritual urgency in his nighttime visit. Yet the "night" also carries Johannine theological weight: in John, night is consistently associated with spiritual darkness (cf. 9:4; 13:30 when Judas left the supper "and it was night"). Nicodemus, for all his religion, comes out of spiritual darkness — and Jesus will send him into light.

"Rabbi, we know that thou art a teacher come from God" — his opening address is respectful but limited. He recognizes Jesus as a teacher authenticated by miracles but not yet as the Messiah or the Son of God. Henry: "He comes with a good opinion of Christ but with no sufficient sense of his own need." This is the fundamental problem of the religious man: he can admire Christ as a teacher while having no personal experience of His saving power.`,
        },
        {
          verse: 'John 3:3',
          text: 'Jesus answered and said unto him, Verily, verily, I say unto thee, Except a man be born again, he cannot see the kingdom of God.',
          commentary: `Henry: Jesus does not answer Nicodemus's implicit question (whatever it was) but addresses the deeper need beneath the question. This is characteristic of Jesus throughout John: He cuts through the surface inquiry to the heart's real condition. Nicodemus had not asked about the new birth; Jesus introduces it because it is precisely what Nicodemus needs and does not know he needs.

"Verily, verily" (*amēn amēn*) — the double amen, unique to John's Gospel (it occurs 25 times), is a formula of absolute divine authority. Jesus does not say "thus saith the LORD" (the prophetic formula) but speaks directly from His own authority. Henry: "He asserts it upon his own knowledge and authority."

"Except a man be born again" — the Greek *anōthen* means both "again" (a second time) and "from above." Both meanings are present: the new birth is a second birth, a completely new beginning; and it is from above, i.e., of divine origin, not of human manufacture. Henry: "It is not a reformation of the old nature but the implanting of a new nature. It is not like mending an old garment but putting on a new one."

"He cannot see the kingdom of God" — the impossibility is absolute. Natural birth — however refined by education, religion, or morality — produces only natural persons; spirit is required for spiritual perception. Henry: "A man may be a great scholar, a great moralist, a great church member, and yet without the new birth he cannot even perceive the kingdom of God, much less enter into it." This should deeply humble the religious person: there is something that all his religion cannot supply, and its absence renders him entirely unfit for God's kingdom.`,
        },
        {
          verse: 'John 3:5-8',
          text: 'Jesus answered, Verily, verily, I say unto thee, Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God...',
          commentary: `Henry: In verse 5 Christ explains what the new birth is: "born of water and of the Spirit." This combination has been interpreted in various ways, but Henry argues for the most natural reading: water represents the cleansing, purifying dimension of regeneration (the washing away of the filth of sin, Titus 3:5: "the washing of regeneration and renewing of the Holy Ghost"), and the Spirit represents the renewing, empowering dimension. Together they constitute the complete experience of regeneration.

Henry explicitly rejects the view that "water" means water baptism in a mechanical sense — as if the rite of baptism automatically regenerates. He points out that Simon Magus was baptized but remained "in the gall of bitterness and the bond of iniquity" (Acts 8:23). The water of regeneration is not the water of the river but the water of divine cleansing, applied by the Spirit. Baptism is the sign and seal of this inner reality, not its mechanical cause.

"That which is born of the flesh is flesh, and that which is born of the Spirit is spirit" (v.6) — Henry: "This is the reason why the new birth is necessary: the first birth gives only a fleshly nature, entirely insufficient for the spiritual kingdom. The addition of culture, education, or religion cannot change the fundamental nature of what the first birth produces." Only a birth of a completely different kind — from above, from the Spirit — can produce a nature capable of God.

"The wind bloweth where it listeth" (v.8) — Henry finds this analogy profoundly encouraging as well as humbling. The Spirit's work is real (we see and feel its effects) even though its operations are mysterious (we cannot direct or fully analyze it). The Christian need not fully understand the mechanics of regeneration in order to experience it. "So is every one that is born of the Spirit" — like the wind's effects, the new birth is evident in its fruits: a changed life, a new love for God, a hatred of sin, a hunger for Scripture.`,
        },
        {
          verse: 'John 3:14-15',
          text: 'And as Moses lifted up the serpent in the wilderness, even so must the Son of man be lifted up: That whosoever believeth in him should not perish, but have eternal life.',
          commentary: `Henry: Jesus here provides the Old Testament type for His own atoning death — an extraordinary piece of self-interpretation. The incident in Numbers 21:4-9 (Israel bitten by fiery serpents, Moses making a bronze serpent and lifting it up, and all who looked at it living) is applied by Jesus to His own crucifixion.

The parallel is exact: (1) The Israelites were bitten by serpents they could not cure by their own efforts — so sinners are bitten by sin, under the curse of death, unable to save themselves. (2) God provided the remedy — not by removing the serpents but by providing a means of healing through an appointed object. So God provides salvation not by removing the consequences of sin by decree but by providing Christ as the appointed sacrifice. (3) The means was simply to look — not to work, not to earn, not to climb, but to look in faith at the lifted-up object. So faith in the crucified Christ is the means of salvation. (4) The effect was immediate life — those who looked lived; there was no gradation of healing based on the quality of the look. So faith in Christ, however weak, brings eternal life.

Henry: "The lifting up of the brazen serpent was a type of the crucifixion. As that was nailed to a pole and lifted up for all the camp to see, so Christ was nailed to a cross and lifted up for all the world to see. And as the look of faith cured the dying Israelite, so faith in the crucified Saviour gives eternal life to every believing sinner, however desperate his condition."`,
        },
        {
          verse: 'John 3:16',
          text: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.',
          commentary: `Henry: "This is the golden text of the Bible — the gospel in a nutshell, the sun of the whole Scripture." He works through it with characteristic thoroughness.

"For GOD" — the first word locates the entire movement of salvation with God, not with man. The initiative, the plan, the execution are all divine. God did not respond to something in humanity; He acted out of His own sovereign love.

"So LOVED" — *houtōs ēgapēsen*, the *houtōs* (so, in this manner) is crucial. It is not merely that God loved intensely (though He did) but that He loved in this particular, extraordinary, costly way — by giving His Son. The love is defined by what it did, not merely asserted. Henry: "It is easy to say 'I love you'; it costs something to prove it. God proved His love by a gift — and not just any gift but the most costly gift conceivable."

"The WORLD" — not merely Israel, not merely the elect, but the world — the lost, the enemies of God, the ungrateful, the rebellious. This is grace at its most scandalous: God loves those who are His enemies and gives His Son for them (Romans 5:8-10).

"His ONLY BEGOTTEN Son" — *ton huion ton monogenē* — the unique, one-of-a-kind Son. Henry: "He did not give an angel, or a prophet, or a great man, but His own Son — and not one of many sons but the only-begotten, the beloved, in whom His soul delighted." The costliness of the gift is proportional to the love behind it.

"That WHOSOEVER" — the offer is universal in scope: there is no person excluded on the basis of nationality, history of sin, or moral condition. Henry: "The door is as wide as the word 'whosoever.' The only qualification is that one believes."

"Believeth in him" — faith is the instrument, not the basis. The basis is the love of God and the sacrifice of Christ; the instrument by which this is received is faith — the active, personal trust that throws itself upon Christ.

"Should not PERISH" — the negative statement: escape from the condemnation and destruction that sin deserves. Then the positive: "but have everlasting life" — the quality of life that belongs to the age to come, beginning now in the soul of the believer.`,
        },
      ],
      conclusion: `Henry's summation of John 3: The chapter teaches us three things of supreme importance. First, that the new birth is absolutely necessary — no religion, no morality, no heritage can substitute for it. Second, that the means of eternal life is faith in the crucified and lifted-up Son of Man — as simply as the dying Israelite looked at the brazen serpent. Third, that the root of the whole saving plan is the love of God, which gave its most precious gift to rescue those who deserved only judgment. Every word of verse 16 is a foundation: God, love, world, Son, faith, everlasting life. Let the soul rest upon each one.`,
    },
    jfb: {
      reference: 'john+3',
      title: 'John 3 — Jamieson, Fausset & Brown',
      introduction: `JFB treats John 3 as a pivotal chapter for the doctrine of regeneration and the theology of the cross. Jamieson notes that Nicodemus represents the pinnacle of Jewish religious attainment — and the totality of his inadequacy before the kingdom of God. The conversation reveals that external religion, however thorough, cannot bridge the gap between the natural human condition and the spiritual requirement of God's kingdom. Only a birth from above — wholly divine in origin and spiritual in nature — can effect the necessary change.`,
      verseCommentaries: [
        {
          verse: 'John 3:3',
          text: 'Except a man be born again, he cannot see the kingdom of God.',
          commentary: `JFB: The absolute nature of the necessity (*ean mē*, "except/unless") admits no qualification. Brown: "Not 'except a man be somewhat improved' or 'except a man reform his conduct' but 'except a man be born again' — a new origin, a new beginning, a new nature."

Fausset on *anōthen* (again/from above): The ambiguity is almost certainly deliberate. Nicodemus hears "again" and objects on the basis of physical impossibility (v.4): "can he enter the second time into his mother's womb?" Jesus's clarification in v.5 makes plain He meant "from above" — the new birth is not a repetition of physical birth but a birth of an entirely different kind, from a different source. The misunderstanding is a literary device John uses throughout the Gospel (cf. the "living water" with the Samaritan woman, ch.4; the "bread from heaven," ch.6) to allow Jesus to teach more deeply.

Jamieson: The verb *gennēthē* (born, regenerated) in the passive voice is significant: it is something done to a person, not something a person does. One cannot regenerate oneself any more than one can give birth to oneself. The new birth is entirely a work of the Holy Spirit; faith is the evidence that it has occurred, not the cause of it.`,
        },
        {
          verse: 'John 3:16',
          text: 'For God so loved the world, that he gave his only begotten Son...',
          commentary: `JFB: Fausset calls this "the condensed gospel," noting that it contains in miniature all the major themes of the New Testament. Brown: "No human author ever wrote a sentence that contains so much in so little. Augustine called it the summary of the Bible; Luther called it 'the Bible in miniature.'"

"God so loved" — the subject is God; the verb is *ēgapēsen* (aorist, past tense: loved, at a definite point in history — the Incarnation and Cross). But the love was not created at the Incarnation; it existed eternally and was historically expressed then. The *houtōs* (so) is properly a marker of manner, not merely degree: God loved in this particular way — by giving.

Fausset on "the world": John uses *kosmos* in various senses throughout the Gospel: sometimes the created order, sometimes humanity in its rebellion against God, sometimes the elect in the world. Here, in the context of "gave his Son," the world means humanity in its lostness and need — all without exception. Brown: "The gift was made for the world — all of it — without restriction. The question of its reception and effect is answered in the condition 'whosoever believeth.'"

Jamieson on "should not perish": *Apollumi* (perish, destroy) in the NT refers to the final, irreversible destruction of those who reject God — the second death (Revelation 20:14). The contrast with "everlasting life" (*zōēn aiōnion*) is between total loss and total gain. JFB: *aiōnios* (everlasting, eternal) is the adjective of the new age, the age of God's reign. Eternal life is the life of the coming kingdom, available now to faith.`,
        },
        {
          verse: 'John 3:30',
          text: 'He must increase, but I must decrease.',
          commentary: `JFB: John the Baptist's final words in the Fourth Gospel are, Fausset says, "the most perfect expression of the spirit of a true Christian minister." The *dei* (must) in "He must increase" is the same word used of divine necessity throughout John (3:7: "ye must be born again"; 4:4: "he must needs go through Samaria"; 20:9: "he must rise again from the dead"). John's self-effacement before Christ is not a reluctant resignation but a theological conviction: the coming of the Son into His glory is a divine necessity, and the forerunner's joy is to see that necessity fulfilled.

Brown: "He must increase" — *auxanein*, to grow, expand, flourish. Christ's honor, reputation, and following must grow; His kingdom must expand. "But I must decrease" — *elattousthai*, to become less, to be made smaller. John's ministry has served its purpose; the shadow must fade in the rising of the sun.

JFB notes that John's use of the marriage metaphor (vv.28-29) is profound: John is the friend of the bridegroom, not the bridegroom himself. The friend's joy is complete not when the bride looks at him but when she looks at the bridegroom. So the true minister's joy is complete not when disciples admire his preaching but when they behold Christ. This is the measure of all genuine Christian ministry: does it increase the fame of Christ and decrease the prominence of the minister?`,
        },
      ],
      conclusion: `JFB summary of John 3: The conversation with Nicodemus establishes the absolute necessity of the new birth (vv.1-8), the means of that birth through faith in the crucified Son of Man (vv.9-15), and the motivation for the whole saving plan in the love of God (v.16). The chapter ends with John the Baptist's most mature theological insight — complete self-surrender to the increase of Christ. Together, these elements form a comprehensive theology of salvation: its necessity, its accomplishment, its basis, and the proper human response.`,
    },
  },

  // ══════════════════════════════════════════════════════
  //  ROMANS 8 — NO CONDEMNATION
  // ══════════════════════════════════════════════════════
  {
    reference: 'romans+8',
    title: 'Romans 8 — No Condemnation, Life in the Spirit',
    mh: {
      reference: 'romans+8',
      title: 'Romans 8 — Matthew Henry',
      introduction: `Henry calls Romans 8 "the very cream of the epistle." If Romans 3 is the foundational chapter of justification and Romans 5 its grand demonstration, Romans 8 is its glorious application to the believer's life. The chapter moves from the particular ("there is now no condemnation for those who are in Christ Jesus") to the cosmic ("neither death nor life nor angels nor principalities shall separate us from the love of God which is in Christ Jesus our Lord"). It is a chapter of assured triumph — not triumphalism, but the genuine, tested, Spirit-assured confidence of those who know that their standing before God is not by their own righteousness but by union with Christ.

Henry outlines the chapter in four movements: (1) the deliverance from condemnation and the indwelling Spirit (vv.1-17); (2) the sufferings of the present age set against future glory (vv.18-25); (3) the Spirit's intercession in our weakness (vv.26-27); (4) the unbreakable chain of God's purpose from foreknowledge to glorification, and the triumphant conclusion in the love of God (vv.28-39).`,
      verseCommentaries: [
        {
          verse: 'Romans 8:1',
          text: 'There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit.',
          commentary: `Henry: "This is the great charter of the gospel — the magna carta of the redeemed. 'No condemnation.'" The Greek *katakrima* (condemnation) is the technical term for the verdict of the judge at the final assize — the sentence that consigns to punishment. Paul declares with categorical force: for those who are in Christ Jesus, that sentence is null, void, and will never be executed.

"Therefore" — connects to the whole argument of chapters 3-7. The "therefore" draws the practical conclusion of justification by faith. If we are justified by faith, then there is no remaining charge, no pending sentence, no condemnation to fear.

"NOW" — the Greek *nyn* is emphatic. Not "there will be no condemnation at the last judgment" (though that too is true) but there is NOW, in present experience, no condemnation. The verdict has already been given — not at the last day but at the cross. The believer does not wait for acquittal; it has already been pronounced.

"In Christ Jesus" — this is the key phrase, the condition that governs everything. The safety is not in our own righteousness or faithfulness but in being united to Christ, covered by His righteousness, sheltered under His atonement. Henry: "The believer's security is not in himself but in Christ — in what Christ has done, not in what the believer has done."

"Who walk not after the flesh, but after the Spirit" (the latter part of the verse, absent in some manuscripts) — Henry includes it as a description of those who are in Christ, not as a condition added to faith. Those who are truly in Christ walk in the Spirit; this is the fruit and evidence of their position, not an additional requirement for their justification.`,
        },
        {
          verse: 'Romans 8:11',
          text: 'But if the Spirit of him that raised up Jesus from the dead dwell in you, he that raised up Christ from the dead shall also quicken your mortal bodies by his Spirit that dwelleth in you.',
          commentary: `Henry: This is one of the great resurrection promises of the New Testament, and Henry notes that it grounds the bodily resurrection in the most solid possible foundation: the indwelling Spirit who is Himself the Spirit of resurrection.

"The Spirit of him that raised up Jesus from the dead" — Paul identifies the Holy Spirit by His most recent and decisive action: the raising of Christ from the dead. The resurrection was a trinitarian act (the Father raised the Son through the Spirit: Hebrews 13:20; Romans 1:4). And the same Spirit who was the agent of Christ's resurrection now dwells in the believer.

"Shall also quicken your mortal bodies" — *zōopoiēsei*, shall make alive. The bodies we now inhabit — mortal, subject to decay and death — will be made alive by the same power that raised Christ. This is the NT's consistent teaching: the resurrection of Christ is the pattern and guarantee of the believer's resurrection (1 Corinthians 15:20: "Christ the firstfruits; then they that are Christ's").

Henry: "What a comfort for the dying believer! This body that is wearing away, that is consumed with illness, that is returning to dust — the same Spirit who inhabits it will one day quicken it. The seed is sown in weakness; it will be raised in glory."`,
        },
        {
          verse: 'Romans 8:28',
          text: 'And we know that all things work together for good to them that love God, to them who are the called according to his purpose.',
          commentary: `Henry: "This is the sovereign medicine for the soul in every trouble." He notes carefully both the scope ("all things") and the limitation ("to them that love God").

"All things work together for good" — not merely good things, or even neutral things, but "all things" — including suffering, loss, persecution, sickness, bereavement, failure, and sin's consequences. Paul does not say all things ARE good, but that all things WORK TOGETHER for good — the cooperation of all circumstances, even dark ones, toward a good end. Henry: "The physician does not say each individual ingredient in the medicine is sweet and pleasant — some are bitter — but that together they produce health."

"To them that love God" — the limitation is critical. This promise is not a universal comfort (it would be a cruel mockery to tell a person ruining themselves through sin that "all things work for good"). It is for those who love God — i.e., those who are regenerate, whose heart has been turned toward God by the Spirit. And Henry notes that even the love of God in the believer is itself a gift of grace: "We love him because he first loved us."

"To them who are the called according to his purpose" — the "called" here is not the general call of the gospel (which goes to all) but the effectual call (which produces the response of faith). This is the divine basis of the comfort: God's purpose undergirds all providences. Because God has a purpose for His people — stated in the next two verses (foreknowledge, predestination, calling, justification, glorification) — no circumstance can ultimately frustrate that purpose.`,
        },
        {
          verse: 'Romans 8:31-39',
          text: 'What shall we then say to these things? If God be for us, who can be against us?...',
          commentary: `Henry: Paul closes the chapter not with a syllogism but a doxology — a series of rhetorical questions that are simultaneously arguments and acts of worship. Henry says: "He does not merely assert the security of the believer; he invites the believer to argue it through and then to rest in it."

"If God be for us, who can be against us?" (v.31) — Henry: "The question is not whether there are those who are against us — there are many: the world, the flesh, the devil, our own hearts. The question is whether they can ultimately prevail against us when God is for us. And the answer is: they cannot."

"He that spared not his own Son, but delivered him up for us all, how shall he not with him also freely give us all things?" (v.32) — Henry calls this "the great argument from the greater to the less." If God gave the greatest possible gift — His own Son, His only begotten — in order to save us when we were enemies, shall He now withhold lesser gifts from us as His children? The giving of Christ is the guarantee of every subsequent blessing.

"Who shall separate us from the love of Christ?" (v.35) — followed by a list of the great powers that threaten believers: tribulation, distress, persecution, famine, nakedness, peril, sword. And Paul says: in all these things, not around them, not above them, but IN them, "we are more than conquerors through him that loved us."

Verses 38-39 conclude with the most comprehensive possible declaration of indestructible love: death, life, angels, principalities, powers, things present, things to come, height, depth — not one of these can separate the believer from the love of God in Christ Jesus. Henry: "The list is exhaustive by design — Paul means to exclude every conceivable power and circumstance. The love of God in Christ is the one reality more powerful than all opposition."`,
        },
      ],
      conclusion: `Henry's summary of Romans 8: "This chapter begins with 'no condemnation' and ends with 'no separation.' Between these two 'no's, the whole Christian life is lived. No condemnation now, no separation ever — this is the ground of all peace, all courage, all holiness, and all hope. The Christian's security rests not in his own performance but in the eternal love of God, the perfected work of Christ, and the indwelling presence of the Spirit. Romans 8 is the proof that God is serious about finishing what He began."`,
    },
    jfb: {
      reference: 'romans+8',
      title: 'Romans 8 — Jamieson, Fausset & Brown',
      introduction: `JFB treats Romans 8 as "the great climactic chapter of the epistle to the Romans and of the Pauline theology of grace." It is the practical and doxological application of the legal and forensic doctrines worked out in chapters 3-7. Fausset notes that the chapter is structured around the Holy Spirit — mentioned less than twice in Romans 1-7, the Spirit is mentioned 19 times in Romans 8 alone. This concentration is deliberate: the life of the justified believer is essentially pneumatological (Spirit-driven), not merely intellectual or moral.`,
      verseCommentaries: [
        {
          verse: 'Romans 8:1',
          text: 'There is therefore now no condemnation to them which are in Christ Jesus.',
          commentary: `JFB: The *ara nyn* (therefore now) links this verse to everything in chapters 3-7. Jamieson: "The 'therefore' is the biggest 'therefore' in the New Testament — the conclusion of the entire argument of justification." The "now" is temporal (present) and logical (given what has been established).

Fausset on *katakrima* (condemnation): The word is a legal term for the punishment that follows upon the verdict of guilty. It is not merely the verdict but the execution of the sentence — the actual infliction of penalty. Paul says: for those in Christ, there is not merely a verdict of "not guilty" but a complete absence of any penal consequence. The justified believer will not face the wrath of God in judgment.

Brown on "in Christ Jesus": The union with Christ (expressed by the *en Christō* formula, used 165 times by Paul) is the forensic basis of the believer's security. He does not say "those who are good enough" or "those who feel righteous" but "those who are in Christ" — whose standing is determined not by their own merits but by their union with the one who has perfectly satisfied all divine justice. This is imputed righteousness in its most direct expression.`,
        },
        {
          verse: 'Romans 8:26-27',
          text: 'Likewise the Spirit also helpeth our infirmities: for we know not what we should pray for as we ought: but the Spirit itself maketh intercession for us with groanings which cannot be uttered.',
          commentary: `JFB: This passage on the Spirit's intercession is, Brown says, "one of the most practically comforting in the New Testament for praying believers." It addresses the universal experience of not knowing how to pray — the "weakness of our infirmities" in prayer.

Jamieson on *synantilambanetai* (helpeth): The word is compound — *syn* (together with) + *anti* (over against) + *lambanō* (to take hold). It means to take hold together with someone against something, i.e., to help by taking the other side of a burden. The Spirit does not pray instead of us but WITH us, taking the other end of the burden of our prayer when we are too weak to carry it alone.

Fausset: "We know not what to pray for as we ought" — this is the universal condition of the believer, not a spiritual deficiency. Even the most mature Christians face situations where they cannot articulate the right prayer — grief too deep for words, needs too complex for analysis, the will of God too mysterious to specify. At such times, the Spirit intercedes "with groanings that cannot be uttered" — *alalētois stenagmois* (inexpressible groanings).

Brown: The Spirit's intercession is "according to the will of God" (v.27). This is the guarantee of its efficacy: because the Spirit knows perfectly both our needs and the Father's will, His intercession never misses the mark. The believer's prayer may be imperfect; the Spirit's intercession within and through that prayer is perfect.`,
        },
        {
          verse: 'Romans 8:38-39',
          text: 'For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come, nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.',
          commentary: `JFB: The peroration of the chapter is a comprehensive enumeration of every conceivable threat to the believer's security in God's love. Jamieson: "Paul is exhausting all categories of possibility in order to exclude all of them." The structure is a list of opposing pairs plus a comprehensive catch-all at the end.

"Death" and "life" — the two greatest certainties of human existence, the two poles of temporal reality. Neither the process of dying nor the experience of living with all its dangers can cut the believer off from God's love.

"Angels" and "principalities" and "powers" — celestial beings of various ranks (the NT's language for angelic and demonic hierarchies). Fausset notes this is remarkable: even if an angel were to appear and preach a different gospel (Galatians 1:8), it would not and could not sever the bond of God's love.

"Things present" and "things to come" — all temporal circumstances, whether currently experienced or still anticipated. No present suffering and no future catastrophe can accomplish the separation.

"Height" and "depth" — spatial extremes, possibly astronomical metaphors (highest point in the sky; deepest point below the horizon — technical astrological terms of the time). Brown: "Even if the heavens opened to reveal forces of overwhelming power, or the deep disgorged its most fearsome threats, they could not break the bond."

"Nor any other creature" (*ktisis* — created thing) — the ultimate catch-all: Paul is aware that no list is exhaustive, so he adds "anything else in all creation." The only thing not created is God Himself — and God is the one whose love cannot be lost.

Jamieson's final comment: "This is not the language of hope or of effort but of the most absolute assurance. Paul does not say 'I hope' or 'I believe with some uncertainty' but 'I am persuaded' — *pepeismai*, perfect tense, a firm settled conviction arrived at and held with unshakeable certainty.'"`,
        },
      ],
      conclusion: `JFB summary of Romans 8: The chapter is the pneumatological apex of Romans — the Spirit who secures justification (v.1), transforms character (vv.5-14), assures sonship (vv.15-17), sustains in suffering (vv.18-25), intercedes in prayer (vv.26-27), and ultimately guarantees glorification (v.30). The entire structure of the chapter demonstrates that the believer's security is trinitarian: no condemnation because of the Son's work; transformation and intercession through the Spirit's presence; unbreakable love through the Father's eternal purpose.`,
    },
  },

  // ══════════════════════════════════════════════════════
  //  PSALM 23 — THE LORD IS MY SHEPHERD
  // ══════════════════════════════════════════════════════
  {
    reference: 'psalms+23',
    title: 'Psalm 23 — The Lord is My Shepherd',
    mh: {
      reference: 'psalms+23',
      title: 'Psalm 23 — Matthew Henry',
      introduction: `Henry introduces Psalm 23 as "one of the most frequently quoted, most universally loved, and most richly comforting of all the psalms." He notes that David writes as one who has been both shepherd and sheep — he knows the shepherd's work from personal experience in his youth, and he has experienced the Lord's shepherding through a life of extraordinary vicissitudes: lion and bear, the courts of Saul, the cave of Adullam, the flight from Absalom, the valleys and mountains of his long and eventful history.

Henry observes that the psalm was likely written in middle or late life — when David had experienced enough of God's faithfulness in darkness to testify with complete credibility to what God does "through the valley of the shadow of death." This is not the enthusiasm of a new convert but the settled confidence of a tested saint.`,
      verseCommentaries: [
        {
          verse: 'Psalm 23:1',
          text: 'The LORD is my shepherd; I shall not want.',
          commentary: `Henry: The opening line is the charter of the entire psalm and of the Christian life: a statement of relationship ("the LORD is my shepherd") and its consequence ("I shall not want"). Henry notes that the personal pronoun "my" is doing enormous theological work: not the LORD is THE shepherd (though He is) nor even THE shepherd of Israel (though He is that too) but "MY shepherd" — the psalmist's personal, covenantal relationship with the God who knows him by name and cares for him as an individual.

"The LORD" — this is the covenantal name YHWH, the God who bound Himself to Israel at Sinai and to David by the Davidic covenant. This is the God of promise, faithfulness, and steadfast love. When David says "the LORD is my shepherd," he is claiming the fullness of YHWH's covenantal character in his personal life.

"Shall not want" — Henry: "This is the most comprehensive negative promise in the Bible: nothing necessary for the soul's wellbeing shall be lacking." He is careful to note that this does not promise an absence of difficulty, pain, or hardship (the rest of the psalm explicitly acknowledges these in "the valley of the shadow of death"). What it promises is that nothing NEEDED shall be lacking — food, guidance, protection, restoration, the presence of God. The sheep under a good shepherd may travel through rough terrain, but it does not go without what it needs.

Henry draws the practical implication with characteristic plainness: "If God is your shepherd, complaining is ingratitude. If you shall not want, what is your constant fretting about? The God who made the promise and the God who feeds you every day is the same. Trust Him."`,
        },
        {
          verse: 'Psalm 23:2-3',
          text: 'He maketh me to lie down in green pastures: he leadeth me beside the still waters. He restoreth my soul: he leadeth me in the paths of righteousness for his name\'s sake.',
          commentary: `Henry: Verses 2-3 describe the shepherd's provision for rest, refreshment, and guidance — the positive blessings of the relationship. Note the structure: lie down (rest), green pastures (provision), still waters (refreshment), restores soul (renewal), right paths (guidance). This is the complete pastoral care of God.

"Green pastures" (*nôt deše*) — literally "pastures of tender grass," the freshest, most nourishing feed. Henry: "God doesn't feed His sheep on dry stalks and stubble but on the richest spiritual provision — His word, His ordinances, His Spirit's ministry, the fellowship of His people. The Christian who neglects these is like a sheep that wanders from the green pastures into the desert."

"Still waters" (*mê menûhôt*) — "waters of quietness" or "restful waters." Eastern shepherds knew that sheep would not drink from turbulent or rushing water; they would lead them to still pools. Henry: "So God provides His rest not by removing the turbulence of life but by leading His people to the internal stillness of trust — 'thou wilt keep him in perfect peace whose mind is stayed on thee' (Isaiah 26:3)."

"He restoreth my soul" — the Hebrew *yešôbeb napšî* means "He turns my soul back/He brings my soul back." Henry applies this in three ways: (1) restoration after wandering — when the sheep has gone astray, the shepherd brings it back; (2) restoration after weakness — reviving the exhausted, discouraged, spiritually depleted; (3) restoration after sin — bringing the penitent back from the far country. Henry: "How often has the shepherd had to restore my soul! How often have I wandered, grown cold, grown weary, fallen into sin — and He has patiently, gently brought me back."

"Paths of righteousness for his name's sake" — God's guidance is into the right paths, the paths of duty and holiness. And the reason He does it is striking: "for his name's sake" — not for our merit, not because we deserve it, but because His own honor is bound up in the welfare of His sheep. The shepherd's reputation is at stake when his sheep are lost. So God guides us out of faithfulness to His own covenant name and character.`,
        },
        {
          verse: 'Psalm 23:4',
          text: 'Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.',
          commentary: `Henry: The transition from "He leadeth me" (third person, objective description) to "for THOU art with me" (second person, direct address) is one of the most moving grammatical transitions in the Psalter. It comes precisely at the darkest moment — the valley of the shadow of death. When the path is easy and green, we may speak about the shepherd in the third person; when the path grows dark and threatening, we speak TO Him directly. Intimacy intensifies in the valley.

"The valley of the shadow of death" (*gê tsalmāwet*) — Henry takes this both literally (as a reference to the dark ravines and steep-walled valleys of Palestine where thieves and wild animals lurked) and spiritually (as any experience of extreme danger, affliction, or the approach of death itself). He sees in the phrase a comprehensive picture of every dark experience the believer must pass through.

"I will fear no evil" — not "I feel no danger" or "there is no evil here." The valley has real threats; David is not denying them. But in the presence of the shepherd, the threats do not produce paralyzing fear. "For THOU art with me" — the reason for fearlessness is not the absence of danger but the presence of God. Henry: "One word from him is enough — 'Do not fear.' And the basis for not fearing is not rational analysis of the threats but the personal knowledge that the shepherd is present."

"Thy rod and thy staff" — the rod was a club for defense against predators; the staff was the shepherd's crook for guiding and rescuing stuck or fallen sheep. Together they represent God's two-sided care: protection against external enemies and personal guidance in the right way. Henry: "It is remarkable that even the tools of discipline — the rod — are here described as 'comforting.' Sometimes God's rod of correction is the most comforting thing He sends, because it proves He has not abandoned us to go our own way."`,
        },
        {
          verse: 'Psalm 23:5-6',
          text: 'Thou preparest a table before me in the presence of mine enemies... Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the LORD for ever.',
          commentary: `Henry: The imagery shifts in verse 5 from shepherd and sheep to host and guest. Henry notes this transition: the same God who tends us as a shepherd honors us as a host — preparing a table, anointing us with oil, filling our cup. This is the language of royal welcome and covenant hospitality.

"In the presence of mine enemies" — the table is set not after the enemies are defeated and driven away but in their very presence. Henry: "God does not wait until all opposition has been removed to bless His people. He feasts His people in full view of their enemies — this is both His power (no enemy can prevent it) and His deliberate intention to honor His people publicly."

"Thou anointest my head with oil" — the anointing of a guest with oil was a mark of special honor and welcome (cf. Luke 7:46). The cup "runneth over" (*râwâ*) — literally "my cup is saturated/dripping with excess." Henry: "God does not give minimum rations but overflowing abundance. The language is of extravagance — as if the cup has been filled so full it runs over the rim. This is the description of a God who takes pleasure in blessing His children beyond what they expect."

"Surely goodness and mercy shall follow me all the days of my life" — *hesed* (covenant lovingkindness) and *tôv* (goodness, beauty) are the two covenant blessings that pursue the believer. Henry: "They follow as a man's shadow follows him — inseparable, constant, present wherever he goes. And they follow not just in the good days but 'all the days' — dark days and bright days, days of sickness and days of health, days of failure and days of victory."

"I will dwell in the house of the LORD for ever" — the word *šûb* (translated "dwell") may also mean "return to" — "I will return to the LORD's house forever." Henry: "The psalm ends not with the sheep in the field or the guest at the table but with the worshipper in the sanctuary — in the very presence of God, at home. And the word 'for ever' (*le'orek yamim*, 'to the length of days') points beyond earthly life to the eternal dwelling with God, the final and permanent fulfillment of all that the psalm has anticipated."`,
        },
      ],
      conclusion: `Henry's close of Psalm 23: "This psalm is the possession of every age of the church because it speaks to every age's experience. The young and healthy read it as promise; the suffering and dying read it as comfort; the departed have found it the very description of their arrival home. Let the Christian who reads it do three things: (1) claim it personally — 'the LORD is MY shepherd'; (2) rest in it practically — 'I shall not want'; (3) look forward in it eschatologically — 'I will dwell in the house of the LORD for ever.'"`,
    },
    jfb: {
      reference: 'psalms+23',
      title: 'Psalm 23 — Jamieson, Fausset & Brown',
      introduction: `JFB notes that Psalm 23 is "perhaps the most universally beloved of the Psalms" and that its power lies in its combination of profound theological content with intimate personal expression. Jamieson observes that the metaphor of shepherd and sheep is one of the most natural in Palestine — a land where flocks were ubiquitous — and that its familiarity for David as a literal shepherd gives the psalm its lived-in authenticity.`,
      verseCommentaries: [
        {
          verse: 'Psalm 23:1',
          text: 'The LORD is my shepherd; I shall not want.',
          commentary: `JFB: Fausset opens with the observation that "the pronoun 'my' is one of the most significant in the Psalter. The relationship is personal, exclusive, and covenantal." The shepherd in the ancient East did not merely supervise a flock from a distance but knew each sheep by name, called them individually, and was personally responsible for their welfare. Jesus confirms this image: "I know my sheep, and am known of mine" (John 10:14).

Brown on *lo' echsar* (I shall not want): The Hebrew negative absolute — "I shall not lack" — covers both material and spiritual needs. Fausset: "Want here means deficiency in anything necessary for life, wellbeing, or the fulfillment of God's purposes." He notes that the psalmist makes this sweeping claim not from wealth or ease but from experience of God's consistent provision in varying circumstances.

JFB draws the NT connection: "Christ is the Good Shepherd (John 10:11), the Great Shepherd (Hebrews 13:20), and the Chief Shepherd (1 Peter 5:4). All three titles correspond to what Psalm 23 depicts — the caring shepherd, the powerful shepherd, and the returning shepherd."`,
        },
        {
          verse: 'Psalm 23:4',
          text: 'Yea, though I walk through the valley of the shadow of death...',
          commentary: `JFB: The Hebrew *tsalmāwet* (shadow of death) may be a compound noun (shadow + death) or simply a superlative form: "deep/thick darkness." Either way, Jamieson notes, the image is of a ravine so deep and so shadowed that death seems to lurk in it — the most dangerous terrain the shepherd's flock might traverse.

Fausset on the shift to second person ("thou art with me"): "This is the theological heart of the verse and of the whole psalm. In the description of blessing (vv.2-3), David speaks of God in the third person — a certain grateful distance. But when danger comes, the third person dissolves into direct address: 'Thou art with me.' The experience of the dark valley drives the believer into immediate, face-to-face, second-person intimacy with God." This is one of the great pastoral observations of the JFB commentary.

Brown: "The rod (*šēbeṭ*) was a short heavy club, sometimes with a head of metal or studded with nails, used to drive off predators. The staff (*mišʿenet*) was the tall shepherd's crook, with a curved head, for guiding and steadying the sheep. Together they represent God's defending and guiding care — protection from what threatens and direction in what perplexes. Both are sources of 'comfort' (*yenachamamûni*, from *nacham*, to comfort or give rest) — even the defensive weapons of the shepherd bring peace to the sheep who knows them."`,
        },
        {
          verse: 'Psalm 23:6',
          text: 'Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the LORD for ever.',
          commentary: `JFB: Fausset on the word "follow" (*rādap*): "The same word is used for pursuing enemies in battle — it means to pursue, to chase, to follow relentlessly. The covenant blessings of goodness (*tôv*) and lovingkindness (*hesed*) pursue the believer with the same relentless energy as enemies pursue a fugitive. The image is almost martial: divine grace is a tireless pursuer that will not abandon the chase."

Brown on the eschatological close: "I will dwell in the house of the LORD for ever" — the phrase *le'orek yamim* (to the length of days) points forward to eternal habitation with God. The psalm has moved from present provision (v.1), through present danger (v.4), to eternal dwelling (v.6). This is the trajectory of the Christian life: current provision in the valley, the presence of God in the darkness, and the ultimate arrival at the Father's house. Jesus himself echoes this: 'In my Father's house are many mansions' (John 14:2)."`,
        },
      ],
      conclusion: `JFB summary of Psalm 23: The psalm is a complete miniature theology of the Christian life — present sufficiency (v.1), divine provision (vv.2-3), courage in darkness through divine presence (v.4), abundant blessing in adversity (v.5), covenant faithfulness throughout life (v.6a), and eternal life in the house of God (v.6b). It is the simplest and most complete expression of what it means to trust God, in a world where danger is real, God is present, and heaven is certain.`,
    },
  },

  // ══════════════════════════════════════════════════════
  //  ISAIAH 53 — THE SUFFERING SERVANT
  // ══════════════════════════════════════════════════════
  {
    reference: 'isaiah+53',
    title: 'Isaiah 53 — The Suffering Servant',
    mh: {
      reference: 'isaiah+53',
      title: 'Isaiah 53 — Matthew Henry',
      introduction: `Henry calls Isaiah 53 "the most evangelical chapter in the Old Testament — so full and clear an account of the sufferings of Christ and the glory that should follow, that it looks more like a history of what has past than a prophecy of what was to come." Written approximately 700 years before the crucifixion, the chapter describes the Messiah's rejection, suffering, death, burial, vindication, and the purpose of His suffering (the bearing of others' sins) with a precision that staggers the mind. It is no wonder that Philip, when asked by the Ethiopian eunuch to explain this passage, "opened his mouth and, beginning from this Scripture, told him the good news about Jesus" (Acts 8:35).

Henry observes that the chapter is the fourth and climactic "Servant Song" of Isaiah (the others are in chapters 42, 49, and 50), and that it answers the question raised in 52:13: "My servant shall act wisely; he shall be high and lifted up, and shall be exalted." How can a servant who is despised and rejected (52:14: "his appearance was so marred, beyond human semblance") also be "high and lifted up"? Chapter 53 answers: through the path of suffering-unto-death-and-resurrection, the Servant's exaltation comes precisely through His humiliation.`,
      verseCommentaries: [
        {
          verse: 'Isaiah 53:1-3',
          text: 'Who hath believed our report? and to whom is the arm of the LORD revealed? For he shall grow up before him as a tender plant, and as a root out of a dry ground: he hath no form nor comeliness; and when we shall see him, there is no beauty that we should desire him. He is despised and rejected of men...',
          commentary: `Henry: The chapter opens with two rhetorical questions that express astonishment at the non-reception of the Servant. "Who has believed?" — implying that the answer is tragically few. The message of a suffering, rejected Messiah was scandal to the Jews (1 Corinthians 1:23: "to the Jews a stumbling block") and foolishness to the Greeks.

"The arm of the LORD" — God's power and might, the mighty acts of deliverance and creation. The Servant is the supreme expression of divine power — but in a form so unexpected that most do not recognize it. The weakness of the cross is the power of God (1 Corinthians 1:18). Paul quotes verse 1 in Romans 10:16 in connection with the Jewish rejection of the gospel: the unbelief of many does not negate the sufficiency of the proclamation.

"A tender plant...a root out of a dry ground" — the Messiah's origin was unexpected and unpromising by human standards. He was born not in a palace but in a stable; raised not in a capital city but in obscure Galilee; from a family not of the current nobility but of a long-degraded royal line (the house of David had been reduced to a peasant family in Bethlehem). Henry: "The dry ground represents the degraded condition of David's dynasty — there was nothing left to grow from humanly speaking. Yet out of this apparent deadness came the most vital growth in history."

"No beauty that we should desire him" — not that Jesus was physically ugly, but that He lacked the external marks of power, prestige, and majesty that the world uses to evaluate greatness. He came not with armies or wealth or political authority. Henry: "He came to be seen, not admired; to be despised, not acclaimed; to suffer, not reign — at first. This was the divine method: the King of kings as a servant of servants."

"Despised and rejected of men, a man of sorrows and acquainted with grief" — Henry notes the fourfold description: despised (treated with contempt), rejected (set aside as unfit or unwanted), "a man of sorrows" (whose whole life was marked by suffering: grief at Lazarus's tomb, sorrow in Gethsemane, agony on the cross), "acquainted with grief" (not a theoretical but an experiential knowledge of human pain). He was not a comfortable philosopher speaking about suffering from a distance; He bore it in His own person.`,
        },
        {
          verse: 'Isaiah 53:4-6',
          text: 'Surely he hath borne our griefs, and carried our sorrows...But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed. All we like sheep have gone astray; we have turned every one to his own way; and the LORD hath laid on him the iniquity of us all.',
          commentary: `Henry: "These three verses are the very heart of the chapter and of the gospel — substitutionary atonement stated with as much precision and clarity as anywhere in the whole Bible."

"Surely he hath borne our griefs and carried our sorrows" — the word "surely" (*'āken*) is emphatic, a strong affirmation correcting a misunderstanding stated in the previous line: "Yet we esteemed him stricken, smitten by God, and afflicted." The crowd thought His suffering was divine punishment for His own sin; the text says: no, "SURELY" — we had it backwards. He was not suffering for His own sins but bearing ours.

The verbs are decisive: "borne" (*nāśā'*) and "carried" (*sābal*) are load-bearing words — words used of a man carrying a heavy burden, a ship bearing cargo. Christ did not merely sympathize with our griefs; He picked them up and carried them away on His own back. Matthew quotes verse 4 in connection with Jesus's healings (Matthew 8:17): the same substitutionary principle that operated at the cross was present in every healing — He was taking away what He had not himself suffered.

"Wounded for our transgressions...bruised for our iniquities" (v.5) — the causative prepositions are everything here. "For" (*min*) means on account of, because of, in place of. He was not wounded by accident or by fate; He was wounded because of, on account of, in place of, our transgressions. Henry: "Every wound on His body had our name on it. The nails were driven not merely by Roman soldiers but by our sins."

"The chastisement of our peace was upon him" — *mûsar šelômēnû* — the discipline, the correction, the punishment that produces/restores our peace (*shalom*, wholeness, wellbeing) — this was laid upon Him. Henry: "We needed peace with God but had earned judgment. He absorbed the judgment so that we could receive the peace. Our peace is purchased by His punishment."

"With his stripes we are healed" — *habûrāh* (stripe, weal, wound) — the mark left by a rod or whip. Peter quotes this verse in 1 Peter 2:24 in the context of bearing the cross patiently. Henry: "The healing is real and total: spiritual healing from the disease of sin, which is the cause of all our misery. Not some healing, or probable healing, but 'we are healed' — past tense, accomplished fact."

"All we like sheep have gone astray" (v.6) — Henry: "This is the universal diagnosis before the universal cure. Every person without exception: 'All we.' The specific symptom: 'we have turned every one to his own way' — self-will, self-determination, the refusal of God's way." The wandering is deliberate: the sheep does not accidentally stray; it turns away.

"And the LORD hath laid on him the iniquity of us all" — the greatest theological sentence in the Old Testament. *Hiphgî'a bô et 'ăwon kullānû* — "caused to meet him the iniquity of us all." The picture is of the iniquity of all humanity converging on one point — the Servant. This is the doctrine of penal substitution in its most direct Old Testament expression: our collective, individual, total iniquity was gathered and placed upon the Servant.`,
        },
        {
          verse: 'Isaiah 53:7-9',
          text: 'He was oppressed, and he was afflicted, yet he opened not his mouth: he is brought as a lamb to the slaughter, and as a sheep before her shearers is dumb, so he openeth not his mouth.',
          commentary: `Henry: The Servant's silence under suffering is one of the most powerful elements of the prophecy. "He was oppressed, and he was afflicted, yet he opened not his mouth" — a remarkable contrast with the human norm. When unjustly accused, we protest; when wrongly punished, we object. Jesus's silence before Pilate and Herod (Matthew 27:12-14; Luke 23:9) directly fulfilled this verse. Henry notes that Philip quoted precisely this passage to the Ethiopian eunuch and applied it to Jesus (Acts 8:30-35).

"As a lamb to the slaughter" — the Passover lamb was led to slaughter without resistance; it did not know what was happening, but the High Priest did. Jesus knew exactly what was happening and went willingly — this is not the passivity of ignorance but the deliberate self-surrender of perfect obedience. John the Baptist's declaration "Behold the Lamb of God" (John 1:29) draws directly on this Isaianic image.

"He was taken from prison and from judgment" (v.8) — the sequence matches the Gospel narratives precisely: arrested in the Garden, tried before Annas, Caiaphas, Pilate, and Herod, condemned, executed. "Who shall declare his generation?" — Henry takes this as an expression of wonder: who would have thought that the one being executed had an eternal generation, being the Son of God? "For he was cut off out of the land of the living" — death, the sentence normally reserved for criminals. "For the transgression of my people was he stricken" — again, the substitutionary principle: cut off because of the transgression of "my people," not for His own.

"He made his grave with the wicked, and with the rich in his death" (v.9) — crucified between two thieves (the wicked), but buried in Joseph of Arimathea's new tomb (a rich man). The specific detail — the rich man's tomb — was not something a fabricating author would likely include; its fulfillment was accidental from a human perspective. It is a striking mark of genuine prophecy.`,
        },
        {
          verse: 'Isaiah 53:10-12',
          text: 'Yet it pleased the LORD to bruise him; he hath put him to grief: when thou shalt make his soul an offering for sin... He shall see his seed, he shall prolong his days, and the pleasure of the LORD shall prosper in his hand.',
          commentary: `Henry: "It pleased the LORD to bruise him" — these five words contain the most staggering truth in the universe. The suffering of the Servant was not the victory of His enemies but the will of the Father. Henry: "This removes all possibility of interpreting the cross as accident, tragedy, or failure. It was the will of God from before time — 'delivered up according to the definite plan and foreknowledge of God' (Acts 2:23)."

"When thou shalt make his soul an offering for sin (*'āšam*)" — the *'āšam* was the guilt offering under the Levitical system, the sacrifice that specifically addressed guilt incurred by violation of God's rights. The Servant is not merely a peace offering or a burnt offering but a guilt offering — His death specifically addresses the guilt that humanity has accumulated before God.

"He shall see his seed, he shall prolong his days" — despite His death in verse 9, He shall see offspring (those regenerated by His death) and prolong His days. This can only be a reference to resurrection: the One who died in verse 9 lives again in verse 10. Henry: "The resurrection is implicit in the Servant's prospering 'after the travail of his soul.' You cannot prolong the days of a dead man."

"He shall see of the travail of his soul, and shall be satisfied" (v.11) — Henry dwells long on this verse. "By the knowledge of himself shall my righteous servant justify many" — the Servant justifies not by the sinner's good works or improvements but by His own righteousness (*tsaddîq*) imputed to them. This is justification by imputation stated in Old Testament terms.

"I will divide him a portion with the great...because he hath poured out his soul unto death" (v.12) — the chapter ends with exaltation through humiliation. Henry: "He who made His soul a guilt offering, who was numbered with the transgressors, who bore the sin of many — He now receives the spoils of divine victory: intercession for transgressors, a portion with the great, division of the strong's spoil. The humblest death becomes the greatest triumph."`,
        },
      ],
      conclusion: `Henry's overall comment on Isaiah 53: "This chapter is the OT gospel in full. It teaches: the universality of sin (v.6: 'all we like sheep'), the completeness of the atonement (v.5: 'the chastisement of our peace was upon him'), the sufficiency of the sacrifice (v.11: 'by his knowledge shall my righteous servant justify many'), and the certainty of exaltation (v.12: 'I will divide him a portion with the great'). Any person who reads this chapter with an honest heart and knowledge of Christ must say: this is He. There is no other explanation for this precision."`,
    },
    jfb: {
      reference: 'isaiah+53',
      title: 'Isaiah 53 — Jamieson, Fausset & Brown',
      introduction: `JFB opens with the observation that Isaiah 53 stands as "the Calvary of the Old Testament." Brown: "No other passage in the OT so directly, so precisely, and so comprehensively describes the atonement as accomplished by a vicarious, suffering, dying, rising Servant." The passage was written ~700 BC; it was translated into Greek in the LXX ~250 BC — over 200 years before the crucifixion. Its historical priority to the events it describes is beyond serious question.`,
      verseCommentaries: [
        {
          verse: 'Isaiah 53:5',
          text: 'But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.',
          commentary: `JFB: Fausset identifies this as the chapter's doctrinal center and the clearest OT statement of penal substitution. Four distinct parallel clauses, each expressing the substitutionary relationship from a different angle:

(1) "Wounded for our transgressions" — *mehollal mippešā'ênû*: pierced through, profaned on account of our rebellious acts. The word *pāša'* (transgression) is the strongest OT word for sin — deliberate rebellion against a known authority. He was pierced because of our rebellion.

(2) "Bruised for our iniquities" — *medukka' mē'ăwōnōtênû*: crushed, ground down on account of our moral perversities. *'āwon* (iniquity) carries the sense of twistedness, the distorted character of a will bent away from God. He was crushed because of our moral distortion.

(3) "The chastisement of our peace was upon him" — *mûsar šelômēnû 'ālāyw*: the discipline, the corrective punishment (*mûsar*) that results in our wholeness/peace (*šālôm*) was placed upon him. The peace we needed was purchased by His punishment.

(4) "With his stripes we are healed" — *ûbahăbûrātô nirpā'-lānû*: by His weal/welt (the mark left by a blow) there is healing for us. The medical metaphor: our disease (sin) is healed by the suffering of the Servant.

Jamieson: "All four lines state the same truth from different angles: He suffered in our place, for our offenses, so that we might be relieved of their consequences. This is not moral influence, not example, not merely demonstration of divine love — it is substitutionary atonement stated with surgical precision."

Brown adds the NT resonance: Peter quotes this verse in 1 Peter 2:24 in the context of Christ's bearing our sins on the tree. The Greek *anapherō* (to bear up, to carry) translates the Hebrew *nāśā'*, connecting the Levitical concept of the priest bearing the sin-offering to God's altar.`,
        },
        {
          verse: 'Isaiah 53:6',
          text: 'All we like sheep have gone astray; we have turned every one to his own way; and the LORD hath laid on him the iniquity of us all.',
          commentary: `JFB: Fausset: "The verse is structured as a confession of universal sin followed by a declaration of complete substitution." The "all" (*kullānû*) at the beginning and end of the verse is the verbal frame: "all we...the iniquity of us all." The same "all" that goes astray is the same "all" whose iniquity is laid on the Servant.

"Turned every one to his own way" — the essence of sin is self-determination, the assertion of one's own will against God's. Brown: "This is the universal human condition: not merely that we have done wrong things but that we have set ourselves as our own center and authority. This is the deepest meaning of original sin."

"The LORD hath laid on him" — *hiphgî'a bô* — "caused to meet, caused to fall upon." The piel-type of *pāgā'* (to meet, encounter) with the causal hiphil: God caused our iniquity to meet the Servant, to fall upon Him, to intersect with Him. Brown: "This is the supreme act of divine justice and divine mercy simultaneously: justice, because the sin is not overlooked but punished; mercy, because it is punished in a substitute, not in the sinner."

Jamieson on the significance: "This verse excludes every theory of the atonement that denies substitution. The sin is not merely illustrated in the Servant's suffering, or merely sympathized with — it is laid upon Him. The transaction is objective, not merely subjective; it affects God's relation to the sinner, not merely the sinner's feelings about God."`,
        },
        {
          verse: 'Isaiah 53:10-11',
          text: 'Yet it pleased the LORD to bruise him... when thou shalt make his soul an offering for sin, he shall see his seed... He shall see of the travail of his soul, and shall be satisfied: by his knowledge shall my righteous servant justify many.',
          commentary: `JFB: Brown on "it pleased the LORD to bruise him": "The Hebrew *ḥāpēṣ* (pleased) is the same word used of God's delight in the sacrifices and obedience of His people. It does not mean that God took sadistic pleasure in His Son's suffering but that the atoning death of the Servant was the expression of God's deepest will and purpose — the thing He had planned before the foundation of the world (1 Peter 1:20; Revelation 13:8) for the salvation of humanity."

Fausset on *'āšam* (sin offering): "The technical term for the guilt offering — the sacrifice that addressed specific violations of God's rights, compensating as it were for damage done. The Servant becomes the *'āšam* — the guilt offering — for all humanity's violations of God's rights. This is not a loose metaphor but a precise typological fulfillment: every *'āšam* offered under the Levitical system was a picture of this one ultimate offering."

Jamieson on "he shall see his seed, he shall prolong his days" (v.10b): "Since verse 9 has described the Servant's death ('cut off out of the land of the living'), these phrases can only refer to post-mortem existence — i.e., resurrection. The Servant who dies in v.9 lives in v.10. This is one of the clearest OT references to resurrection, and it is in the context of the Servant's atoning death."

Brown on "by his knowledge shall my righteous servant justify many" (v.11): "The instrumental phrase 'by his knowledge' may mean (1) by knowledge of him (faith in him) or (2) by his own knowledge (of the Father's will, of Scripture, of the condition of sinners). Either way, the justification is through the Servant, not through the sinner's improvement. *Yatsdîq* (justify) is a forensic term — to pronounce righteous, to declare acquitted. The many are declared righteous not by their own righteousness but by being united to 'my righteous servant.'"`,
        },
      ],
      conclusion: `JFB final note on Isaiah 53: "This chapter has converted more Jews to Christianity, more skeptics to faith, and more nominal Christians to genuine conversion than perhaps any other single passage of Scripture. Its precision is its most powerful apologetic: the convergence of rejection (vv.1-3), vicarious suffering (vv.4-6), silent submission (v.7), death with the wicked and burial with the rich (vv.8-9), and post-mortem vindication (vv.10-12) on one historical person — Jesus of Nazareth — is beyond the reach of coincidence or human fabrication."`,
    },
  },

  // ══════════════════════════════════════════════════════
  //  HEBREWS 11 — FAITH HALL OF FAME
  // ══════════════════════════════════════════════════════
  {
    reference: 'hebrews+11',
    title: 'Hebrews 11 — The Hall of Faith',
    mh: {
      reference: 'hebrews+11',
      title: 'Hebrews 11 — Matthew Henry',
      introduction: `Henry regards Hebrews 11 as "the great gallery of heroes of the faith — the most extensive and inspiring catalogue of spiritual courage in the Bible." The chapter comes in the context of the author's sustained argument (chapters 1-10) that Christ is greater than all the OT institutions — better than angels, Moses, Aaron, and the Levitical priesthood. Chapter 10 ends with a warning against shrinking back from faith (10:38-39: "my righteous one shall live by faith, and if he shrinks back, my soul has no pleasure in him"). Chapter 11 then presents the great OT cloud of witnesses who did NOT shrink back, as the model for the Hebrew Christians being urged to persevere.

Henry notes that the definition of faith in verse 1 is not a theological abstraction but a pastoral tool: faith is what enabled every person in this chapter to do what they did. Understanding faith properly is the key to living as they lived.`,
      verseCommentaries: [
        {
          verse: 'Hebrews 11:1',
          text: 'Now faith is the substance of things hoped for, the evidence of things not seen.',
          commentary: `Henry: "This is the Bible's own definition of faith — and it is a definition that focuses on faith's function and effect rather than its nature." Faith is not mere intellectual assent to propositions but a living confidence that makes future realities present and visible realities of invisible ones.

"Substance of things hoped for" (*hypostasis elpizomenōn*) — *hypostasis* is a rich Greek word meaning foundation, substance, ground of confidence, or "title deed." Henry prefers "substance" in the sense of "that which makes future things real and present to the mind." Faith is not wishful thinking (hope without ground) but the reality of the future, drawn into the present by confidence in God's word. The Christian who lives by faith lives as if the resurrection, the final judgment, and the eternal kingdom are already real — because in God's economy, they are.

"Evidence of things not seen" (*elegchos ou blepomenōn*) — *elegchos* is a word from the law courts meaning proof, evidence, the demonstration that establishes a fact. Faith is the proof — the internal, Spirit-wrought conviction — of the reality of what cannot be seen with the physical eye. The things of God are not unreal simply because they are invisible; faith is the evidence faculty by which the believer apprehends them.

Henry: "Without this faith, the soul is like a man in a dark room who says 'there is nothing here because I cannot see it.' With faith, it is like a man who knows what is in the room from the description of one who has been there — in this case, God himself, who has described in His word the invisible realities He has made and which He promises to His people."`,
        },
        {
          verse: 'Hebrews 11:6',
          text: 'But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him.',
          commentary: `Henry: "This verse states the absolute necessity of faith for any approach to God. 'Without faith it is impossible to please him' — not difficult, not inadvisable, but impossible. All moral virtue, all religious performance, all generosity, all obedience — apart from faith in God — cannot please Him, because they are not offered in the right spirit (trust) or to the right object."

"He that cometh to God must believe that he is" — the existence of God is the first article of faith. But Henry notes this is not merely intellectual theism (even demons believe that God exists, James 2:19) but personal trust in the God who is — who is real, present, active, and knowable.

"And that he is a rewarder of them that diligently seek him" — the second element of faith for approach to God: confidence that He responds, that seeking Him is worthwhile, that He does not leave those who seek Him unrewarded. Henry: "The atheist says God does not exist; the deist says God exists but does not respond to prayer; only the biblical theist says God is AND He rewards diligent seekers. This second element is what drives the great heroes of Hebrews 11 — they each believed that God would keep His word and honor their trust."`,
        },
        {
          verse: 'Hebrews 11:13',
          text: 'These all died in faith, not having received the promises, but having seen them afar off, and were persuaded of them, and embraced them, and confessed that they were strangers and pilgrims on the earth.',
          commentary: `Henry: "This verse is the summary statement of the OT saints' faith and is one of the most moving in the chapter. They died in faith — not IN the possession of what was promised but IN the faith that it would come. The promises were not yet fulfilled in their experience, but they were so confident in God's word that they acted as if they were."

"Seen them afar off" — like sailors who spot land on the distant horizon and steer confidently toward it, even though it is too far to reach today. Henry: "Abraham saw the day of Christ 'afar off and rejoiced' (John 8:56). Moses 'looked to the reward' (Hebrews 11:26) which he would not receive in his lifetime. They lived by a future they could not yet touch."

"Strangers and pilgrims on the earth" — Henry dwells with characteristic warmth on this phrase. "They identified themselves publicly as those who had their true home elsewhere. To be a stranger is to know you are temporarily away from where you belong. The OT saints knew this was not their final home; they were passing through toward a better country."

Henry makes the practical point: "We in the NT era, with the completion of the canon and the indwelling Spirit, are privileged above the OT saints. They saw the promises from a great distance; we have seen their fulfillment in Christ. How much more, then, should we die in faith? How much stronger should our confidence be, given all that we know? The example of those who died without receiving the promises is a rebuke to our unbelief."`,
        },
        {
          verse: 'Hebrews 11:32-40',
          text: 'And what shall I more say? for the time would fail me to tell of Gideon, and of Barak, and of Samson, and of Jephthae; of David also, and Samuel...',
          commentary: `Henry: The author's rhetorical "what shall I more say?" signals that the list is far from exhausted — there are too many heroes of faith to fully enumerate. Henry notes this with pastoral wisdom: the author could have expanded the list to fill a volume; instead he acknowledges the surplus, which is itself a testimony to the pervasive power of faith throughout all of OT history.

The two groups in vv.33-38 are instructive: (1) those who "through faith subdued kingdoms...stopped the mouths of lions...quenched the violence of fire" — the overcomers, those whose faith led to visible, dramatic deliverance; (2) those who "were tortured, not accepting deliverance...were stoned, were sawn asunder...were slain with the sword...wandered about in sheepskins and goatskins" — the sufferers, those whose faith led not to rescue but to martyrdom. Henry emphasizes that both groups appear in the same gallery of honor: the faith that delivers is not greater than the faith that endures without delivery. God values both equally.

"Of whom the world was not worthy" (v.38) — Henry: "This is the Author of Hebrews's assessment of the sufferers. The world treated them as refuse, as unworthy of decent living. The divine verdict is the opposite: THEY were not the refuse; they were above what the world could appreciate." This is the great reversal: the martyred, wandering, impoverished believers of OT history were the world's greatest people, and the world was not good enough to have them.

Verses 39-40 give the chapter's theological climax: "all these, though commended through their faith, did not receive what was promised, since God had provided something better for us, that apart from us they should not be made perfect." Henry: "The OT saints' faith was real, their reward will be real, but the fullness of what they trusted in — Christ's atoning death, resurrection, and the new covenant — was reserved for the NT era. We and they together receive the promise. Their faith anticipated what we have experienced; our completion includes them."`,
        },
      ],
      conclusion: `Henry's conclusion on Hebrews 11: "The chapter is a sustained argument from example against apostasy. The readers tempted to abandon the Christian confession in the face of Jewish persecution are shown: your fathers did not abandon theirs in the face of far greater privation. The cloud of witnesses (12:1) who have gone before us did not shrink back. And the 'something better' they did not live to see — Christ fully revealed, the new covenant fully established — we have seen. How much greater is our obligation to run with endurance the race set before us."`,
    },
    jfb: {
      reference: 'hebrews+11',
      title: 'Hebrews 11 — Jamieson, Fausset & Brown',
      introduction: `JFB reads Hebrews 11 as the NT's most systematic treatment of OT faith. Fausset notes that the definition of faith in verse 1 is functional rather than essential — it describes what faith DOES rather than what it IS in itself. Faith's function is to make the future real and the invisible evident. This functional definition is then illustrated across the sweep of OT history, from creation (v.3) through Abraham, the patriarchs, Moses, the judges, and the martyrs of the intertestamental period.`,
      verseCommentaries: [
        {
          verse: 'Hebrews 11:1',
          text: 'Now faith is the substance of things hoped for, the evidence of things not seen.',
          commentary: `JFB: Jamieson on *hypostasis* (substance/assurance): "In classical Greek and the papyri, *hypostasis* has the sense of 'title deed' or 'guarantee' — a document that establishes legal ownership of property not yet in one's possession. Faith is the 'title deed' that the believer holds for the inheritance not yet received. He does not possess the inheritance experientially, but he holds the title; and the title, in God's economy, is as secure as the inheritance itself."

Fausset on *elegchos* (evidence/conviction): "From the verb *elegchō* — to cross-examine, to convict, to prove by argument. Faith is the faculty by which the Christian 'cross-examines' the testimony of God and arrives at the settled conviction that what God says is true, though unseen. It is not credulity (believing without evidence) but the proper response to testimony — specifically, the testimony of the One who cannot lie."

Brown: "The conjunction of *hypostasis* and *elegchos* gives a complete picture of faith's operation: it gives substance to the future (making future realities present to the mind and will) and provides evidence for the invisible (making invisible realities as certain as what is seen). These two functions correspond to the two dimensions of Christian hope — the eschatological (what is still future) and the spiritual (what is present but not physically perceptible)."`,
        },
        {
          verse: 'Hebrews 11:17-19',
          text: 'By faith Abraham, when he was tried, offered up Isaac... Accounting that God was able to raise him up, even from the dead...',
          commentary: `JFB: Fausset calls this "the supreme test of OT faith — a test so severe that it had only one equivalent in all history: the Father offering His own Son." The parallel is deliberate and was made by Jesus Himself: "Abraham rejoiced to see my day" (John 8:56).

Brown on the offering of Isaac: "The logic of Abraham's obedience (v.19) is remarkable: 'he accounted that God was able to raise him up from the dead.' Abraham knew two things with equal certainty: (1) God had promised that through Isaac his descendants would be named; (2) God had commanded him to offer Isaac. The only way both could be true simultaneously is if God raised Isaac from the dead after the sacrifice. So Abraham obeyed, and in his own mind, he had already received Isaac back from the dead before the command was countermanded."

Jamieson: "The typological significance is stated directly in verse 19: 'from whence also he received him in a figure' (*en parabolē*) — in a parable or type. The receiving-back of Isaac from the (figurative) dead is a parable of the resurrection of Christ. Abraham's near-sacrifice is a type of the Father offering the Son; Isaac's sparing is a type of the resurrection. This is why Jesus could say 'Abraham saw my day and was glad': the Akedah (binding of Isaac) was Abraham's vision of Golgotha and Easter."`,
        },
      ],
      conclusion: `JFB on the conclusion of Hebrews 11: The chapter is simultaneously a theology of faith, a history of the people of God, and a pastoral exhortation. The "better thing" of verse 40 — the NT fulfillment of all that the OT saints anticipated — is the strongest possible argument for Christian perseverance: we who have received what they only hoped for have far less reason to shrink back and far more reason to run with endurance.`,
    },
  },

  // ══════════════════════════════════════════════════════
  //  EPHESIANS 2 — GRACE THROUGH FAITH
  // ══════════════════════════════════════════════════════
  {
    reference: 'ephesians+2',
    title: 'Ephesians 2 — Grace, Faith, and the New Humanity',
    mh: {
      reference: 'ephesians+2',
      title: 'Ephesians 2 — Matthew Henry',
      introduction: `Matthew Henry introduces Ephesians 2 as a chapter that contains "a lively picture both of the misery of unregenerate men and of the happy condition of converted souls, enough to awaken and alarm those who are yet in their sins and to put them upon hastening out of that state, and to comfort and delight those whom God hath quickened." The chapter moves from death to life, from wrath to mercy, from distance to nearness, from division to unity — all accomplished by sovereign grace.

Henry structures the chapter in three movements: (1) the miserable condition of these Ephesians by nature (vv. 1-3, 11-12); (2) the glorious change wrought in them by converting grace (vv. 4-10, 13); and (3) the great privileges that both converted Jews and Gentiles receive from Christ (vv. 14-22). The theological architecture is deliberately dramatic: the depth of the pit (vv. 1-3) makes the height of grace (vv. 4-10) all the more astonishing.`,
      verseCommentaries: [
        {
          verse: 'Ephesians 2:1',
          text: 'And you hath he quickened, who were dead in trespasses and sins.',
          commentary: `Henry: "Unregenerate souls are dead in trespasses and sins. All those who are in their sins are dead in sins — yea, in trespasses and sins, which may signify all sorts of sins, habitual and actual, sins of heart and of life. Sin is the death of the soul. Wherever that prevails there is a privation of all spiritual life. Sinners are dead in state, being destitute of the principles and powers of spiritual life and cut off from God, the fountain of life: and they are dead in law, as a condemned malefactor is said to be a dead man."

This death is not the cessation of activity but the cessation of life toward God. The dead man moves and speaks and transacts, but he cannot see, hear, or respond to the living God. His faculties are intact but turned entirely to the wrong direction. Henry observes that the word "dead" is used with full rhetorical force — Paul does not say "you were somewhat impaired" or "you were weakened" but dead. The condition of the unregenerate soul is not a moral disadvantage to be overcome by effort; it is a spiritual death to be overcome by resurrection.

The "quickening" (Greek: *suzōopoiēsen* — "made alive together with") is described in the past tense, as an already-accomplished fact. This is the language of conversion — when God's regenerating power raised the spiritually dead soul into new life. Henry: "The soul that was dead is made alive. The soul that had no power to move toward God, no desire for God, no delight in God, is given new life — the very life of Christ Himself, shared through union with Him."`,
        },
        {
          verse: 'Ephesians 2:2-3',
          text: 'Wherein in time past ye walked according to the course of this world, according to the prince of the power of the air... and were by nature the children of wrath, even as others.',
          commentary: `Henry: "A state of sin is a state of conformity to this world. In the Ephesians 2:1 he speaks of their internal state, in this of their outward conversation. The men of the world are used to do what is described here — walking in trespasses and sins, in bondage to the devil, and under the sentence of divine wrath."

"We are by nature bond-slaves to sin and Satan. Those who walk in trespasses and sins walk according to the prince of the power of the air. The devil is thus described — the legions of apostate angels are as one power united under one chief. The air is represented as the seat of his kingdom and it was the opinion of both Jews and heathens that the air is full of spirits and that there they exercise and exert themselves."

On "children of wrath" — Henry is emphatic: "The Jews were so, as well as the Gentiles and one man is as much so as another by nature, not only by custom and imitation, but from the time when we began to exist, and by reason of our natural inclinations and appetites. All men, being naturally children of disobedience, are also by nature children of wrath. Our state and course are such as deserve wrath, and would end in eternal wrath, if divine grace did not interpose." The phrase "even as others" strips away every claim to natural advantage — birth, religion, culture, morality — and levels all humanity before the holy wrath of God.`,
        },
        {
          verse: 'Ephesians 2:4-5',
          text: 'But God, who is rich in mercy, for his great love wherewith he loved us, even when we were dead in sins, hath quickened us together with Christ.',
          commentary: `Henry: "Here the apostle begins his account of the glorious change that was wrought in them by converting grace. God himself is the author of this great and happy change, and his great love is the spring and fontal cause of it — hence he resolved to show mercy. Love is his inclination to do us good considered simply as creatures; mercy respects us as apostate and as miserable creatures. God's eternal love or good-will towards his creatures moved him to contrive the way of reconciliation when they had forfeited his favour."

The logical and grammatical pivot of the passage is the word "But." After three verses of relentless description of ruin — dead, walking in sin, in bondage to the devil, children of wrath — Paul inserts "But God." Henry: "But God! How much is there in these two little words. The whole of salvation is contained in them. We were dead — but God quickened us. We were condemned — but God pardoned us. We were at enmity — but God reconciled us. Whatever the depth of our misery, 'But God' is the answer."

"Rich in mercy" — Henry: "God's mercy is not a scanty mercy that doles out forgiveness by drops. He is *rich* in mercy — there is a treasury of it that cannot be emptied. And the particular mercy shown to us — raising dead souls to life — required the greatest exercise of power and love that God has ever displayed."

The phrase "even when we were dead" is the most theologically important qualifier. Grace was not extended because we were improving or reaching out to God — we were dead. The entire initiative, the entire movement, belongs to God.`,
        },
        {
          verse: 'Ephesians 2:8-9',
          text: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.',
          commentary: `Henry: "Our faith, our conversion, and our eternal salvation, are not the mere product of any natural abilities, nor of any merit of our own: Not of works, lest any man should boast. These things are not brought to pass by any thing done by us, and therefore all boasting is excluded — he who glories must not glory in himself, but in the Lord. There is no room for any man's boasting of his own abilities and power or as though he had done any thing that might deserve such immense favours from God."

This verse is the Magna Carta of Protestant soteriology. Henry identifies three critical elements: (1) the source — "by grace" (not by nature, not by merit, not by effort); (2) the instrument — "through faith" (the hand that receives, not the price that purchases); (3) the origin — "not of yourselves, it is the gift of God" (faith itself is not the product of human decision-making but of divine enablement).

Henry is careful to note that faith is both required and given: "Faith is the instrument, not the basis of salvation. We receive God's grace through faith as through the opening of a hand. But that very opening of the hand, that very act of faith, is itself a work of God in the soul. He gives us both the salvation and the faith that receives it. Salvation is grace from first to last."

On "lest any man should boast" — Henry: "Pride is the last enemy that dies in a saint. God has so ordered the plan of salvation that it defeats boasting at every turn. You did not choose yourself; God chose you. You did not earn your forgiveness; Christ earned it. You did not produce your faith; God worked it in you. From first to last it is grace, and grace removes every plank from the platform of human boasting."`,
        },
        {
          verse: 'Ephesians 2:10',
          text: 'For we are his workmanship, created in Christ Jesus unto good works, which God hath before ordained that we should walk in them.',
          commentary: `Henry: "We are God's *poiēma* — his workmanship, his masterpiece. As a craftsman is known by what he makes, God's glory is displayed in the redeemed soul. We are not the products of our own self-improvement; we are God's work. He made us — first at creation, then again at new creation. The new birth is as much a creation ex nihilo as the first: 'Therefore if any man be in Christ, he is a new creature' (2 Corinthians 5:17)."

"Created in Christ Jesus unto good works" — Henry is emphatic that this verse rescues the doctrine of grace from the charge of antinomianism. We are not saved *by* works (vv. 8-9) but we are saved *for* works (v. 10). Grace does not abolish the demand of obedience; it creates the capacity for it. The person who was "dead in trespasses and sins" and capable of nothing pleasing to God is now "created in Christ Jesus" with both the desire and the power to walk in good works.

"Which God hath before ordained that we should walk in them" — Henry: "God has prepared a path of good works for every believer, laid out in advance, fitted to our particular gifts, circumstances, and calling. We do not invent our obedience; we walk in a path that has been prepared. Our life as believers is not improvisation but discovery — discovering what God prepared for us before time began."`,
        },
        {
          verse: 'Ephesians 2:14',
          text: 'For he is our peace, who hath made both one, and hath broken down the middle wall of partition between us.',
          commentary: `Henry: "The great design of the gospel is to break down dividing walls. The Jews and Gentiles were as contrary the one to the other as well could be. The Jews had no dealings with Samaritans, let alone Gentiles. They looked upon them as dogs, and the Gentiles looked upon the Jews as a strange and contemptible people. Now Christ came and reconciled both to God, and so reconciled them to one another."

The "middle wall of partition" (*mesotoichon tou phragmou*) almost certainly alludes to the actual stone wall in the Jerusalem Temple that separated the Court of the Gentiles from the inner courts — inscribed with a warning that any Gentile who passed it would be executed. This physical wall was the architectural expression of the theological separation the Law maintained. Christ's death broke down the theological reality; the Temple's eventual destruction in AD 70 broke down the physical symbol.

Henry draws the application: "If Christ has broken down the wall between Jew and Gentile — the oldest and deepest religious division in the ancient world — what wall between human beings can He not break down? The gospel creates a new humanity: 'one new man' (v.15), not a compromise between two religions but a third thing altogether, something unprecedented. In Christ there is neither Jew nor Greek, slave nor free, male nor female (Galatians 3:28) — all are one new man, reconciled to God through the cross."`,
        },
      ],
      conclusion: `Henry concludes Ephesians 2 with this observation: "This chapter contains the whole gospel in miniature. It shows us what we were — dead, enslaved, condemned, separated. It shows us what God did — loved, quickened, raised, reconciled. It shows us what we are — workmanship, citizens, members of the household, a holy temple. The transition from the first state to the second is entirely the work of God's grace, received through faith, expressed in good works, and resulting in a new community that breaks every human wall. Let the saint meditate on this chapter until the weight of grace overwhelms every tendency toward self-congratulation, and let it drive him to the good works for which God has prepared him from eternity."`,
    },
    jfb: {
      reference: 'ephesians+2',
      title: 'Ephesians 2 — Jamieson, Fausset & Brown',
      introduction: `JFB opens Ephesians 2 by noting the contrast between the universal human condition (vv. 1-3) and the gracious divine intervention (vv. 4-10). The commentary draws heavily on the Greek text, particularly the phrase *kata ton aiōna tou kosmou toutou* ("according to the course of this world"), which JFB renders as the "age-spirit" — the spirit of a whole era and civilization organized around rebellion against God. The Gentiles' condition was not merely individual moral failure but systemic participation in an age defined by disobedience.`,
      verseCommentaries: [
        {
          verse: 'Ephesians 2:1-2',
          text: 'And you hath he quickened, who were dead in trespasses and sins: Wherein in time past ye walked according to the course of this world, according to the prince of the power of the air.',
          commentary: `JFB: "Dead in trespasses and sins — the accumulated weight of actual sin (trespasses, *paraptōmasin*) and the habitual condition of sin (*hamartiais*). The distinction is between specific acts of transgression and the underlying state of sinfulness from which they spring. Fausset: 'Dead' here is not rhetorical exaggeration but theological precision — the spiritually dead are as incapable of spiritual movement toward God as a corpse is of physical movement. They are not merely ill; they are dead.

On 'the prince of the power of the air' — Jamieson: Satan and his demonic host are here called the collective 'power of the air' — the invisible domain of spiritual influence that pervades the atmosphere of fallen human culture. This is the 'world-spirit' that the unregenerate breathe, unconsciously conforming to values and desires shaped by an adversary. As fish are unaware of the water that fills them, fallen people are unaware of the spiritual medium that has shaped their desires, values, and ambitions. The Gospel does not merely improve people's behavior — it delivers them from a spiritual atmosphere that was slowly killing them.

Brown: The phrase 'the spirit that now worketh in the children of disobedience' is chilling in its present tense: not 'worked' but 'works' — this is not a past historical influence but a present ongoing one. Even as Paul writes to believers in Ephesus, this spirit is active in the surrounding population, and potentially in any believer who forgets their deliverance."`,
        },
        {
          verse: 'Ephesians 2:4-6',
          text: 'But God, who is rich in mercy, for his great love wherewith he loved us... hath quickened us together with Christ... and hath raised us up together, and made us sit together in heavenly places in Christ Jesus.',
          commentary: `JFB: "But God" — Fausset: "The magnificent contrast. The depth of human misery (vv. 1-3) is the dark background against which the 'but God' shines all the more brightly. Not merely 'God acted' but God acted who is 'rich in mercy' — whose inexhaustible reserves of compassion found, in the very extremity of human ruin, not a reason to abandon us but the occasion to pour out the riches of His grace.

Jamieson on the three-fold raising (quickened, raised, seated): 'Three past tenses, all accomplished facts in the believer's standing before God: (1) *suzōopoiēsen* — quickened together with Christ: the resurrection of the soul, parallel to Christ's resurrection; (2) *sunēgeiren* — raised together: the elevation of the soul into spiritual heights; (3) *sunekathisen* — made to sit together: the current position of the believer in Christ at the right hand of the Father. This is not a statement about experiential feeling but about objective standing. The believer is already, in Christ, seated at the Father's right hand. This is the ground of Christian boldness and peace: we do not approach God from below, seeking a favorable response; we approach from within Christ, already at God's right hand.'

Brown: 'The three compound words all begin with *sun-* (together): this preposition signals that the believer's entire spiritual experience is participation in what Christ has done. We are quickened *with* Him, raised *with* Him, seated *with* Him. Our salvation is not analogous to His resurrection but participatory in it — we are included in the very acts that constitute His victory."`,
        },
        {
          verse: 'Ephesians 2:8-10',
          text: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast. For we are his workmanship, created in Christ Jesus unto good works.',
          commentary: `JFB: "By grace... through faith — Fausset: 'Grace is the source; faith is the channel. *Charis* (grace) and *pistis* (faith) together exclude every form of human merit. Grace excludes merit from the side of God: He acts not because He owes us anything or because we deserve it, but out of pure generosity. Faith excludes merit from the side of the human recipient: faith is the empty hand that receives, not the currency that purchases. To emphasize: faith itself is not the meritorious cause of salvation; Christ is. Faith is the instrument of appropriation, not the basis of acceptance."

Jamieson on 'not of yourselves — it is the gift of God': 'The referent of "that" (*touto*) is debated among grammarians: does it refer specifically to faith, or to the entire salvation just described? The grammatical gender is neuter, while both "grace" and "faith" are feminine — suggesting the neuter "touto" refers to the whole complex of salvation (the being-saved, the grace, the faith together) as a unified gift of God. The point is the same in either case: the entire saving transaction, from initial grace to final acceptance, is God's gift to the human recipient, not an achievement the human brings to God."

Brown on *poiēma* (workmanship, v.10): 'The word from which we get "poem." As a poet crafts a work that expresses his own vision and beauty, God crafts the redeemed soul — it is His artistic creation, expressing His glory. And the pre-prepared good works are the "plot" of the poem He has written: each believer's life of obedience is a story God authored in eternity and now enacts in time through the Spirit's working."`,
        },
        {
          verse: 'Ephesians 2:14-16',
          text: 'For he is our peace, who hath made both one, and hath broken down the middle wall of partition between us... that he might reconcile both unto God in one body by the cross.',
          commentary: `JFB: "Jamieson: 'He is our peace' — not merely the maker of peace but peace itself, in His own person. As He is the righteousness of God personified (1 Corinthians 1:30), so He is peace personified — not a settlement between parties but the personal embodiment of reconciliation.

The 'middle wall of partition' (*to mesotoichon tou phragmou*) alludes to the Jerusalem Temple's soreg — the stone balustrade that separated the Court of the Gentiles from the inner courts, inscribed with the warning 'No foreigner may enter within the barricade which surrounds the sanctuary and enclosure. Anyone who is caught doing so will have himself to blame for his ensuing death.' Fausset: 'The physical wall that divided Jew and Gentile in the Temple was the visible symbol of the theological distinction maintained by the Law. Christ's death did not merely improve the relationship between the communities — it abolished the very basis of the division: the Law with its specific ordinances that marked Israel as separate (*en dogmasin*, v.15, "in ordinances"). The new humanity that results is not a reformed Judaism or an improved paganism but something entirely new: one new man (*kainos anthrōpos*).'

Brown on reconciliation through the cross (v.16): 'The mechanism of reconciliation is *apokatallaxē* — a compound that intensifies the basic word for reconciliation. The cross is not merely an example of God's love that softens human attitudes; it is the objective event in which God condemned sin and satisfied justice, removing the actual ground of estrangement. Both Jew and Gentile are reconciled to God in "one body" — the body of Christ given on the cross, which is also the body of the Church."`,
        },
      ],
      conclusion: `JFB concludes Ephesians 2 with Fausset's observation: "The chapter is a movement from *nekrous* (dead, v.1) to *naon hagion* (holy temple, v.21). The same God who spoke light into darkness at creation speaks life into death at regeneration — and then builds that living material into a dwelling place for Himself. The goal of salvation is not merely individual rescue but corporate habitation: God building a temple not of stone but of living people, in whom He dwells by His Spirit. This is why Paul ends not with an individual standing before God but with a building being built together — the Church as God's holy habitation is the goal of the entire saving purpose."`,
    },
  },

  // ══════════════════════════════════════════════════════
  //  1 CORINTHIANS 13 — THE LOVE CHAPTER
  // ══════════════════════════════════════════════════════
  {
    reference: '1+corinthians+13',
    title: '1 Corinthians 13 — The Excellence of Love',
    mh: {
      reference: '1+corinthians+13',
      title: '1 Corinthians 13 — Matthew Henry',
      introduction: `Henry describes 1 Corinthians 13 as Paul's commendation of "the more excellent way" — the way of charity (love, *agapē*) which surpasses all gifts. He notes that the Corinthian church was rich in gifts (speaking in tongues, prophecy, knowledge, faith for miracles) and poor in love — and that Paul's strategy is not to dismiss their gifts but to show that without love, even the most impressive spiritual gifts are nothing. The chapter has three movements: the necessity of love (vv. 1-3), the nature of love (vv. 4-7), and the permanence of love (vv. 8-13).

Henry: "What is here recommended as the more excellent way is charity — agapē — not what is meant by charity in our common use of the word, which most men understand of alms-giving, but love in its fullest and most extensive meaning: true love to God and man, a benevolent disposition of mind towards our fellow-Christians, growing out of sincere and fervent devotion to God. This living principle of all duty and obedience is the more excellent way."`,
      verseCommentaries: [
        {
          verse: '1 Corinthians 13:1-3',
          text: 'Though I speak with the tongues of men and of angels, and have not charity, I am become as sounding brass, or a tinkling cymbal... and though I bestow all my goods to feed the poor... and have not charity, it profiteth me nothing.',
          commentary: `Henry: "Could a man speak all the languages on earth, and that with the greatest propriety, elegance, and fluency, could he talk like an angel, and yet be without charity, it would be all empty noise, mere unharmonious and useless sound, that would neither profit nor delight. It is not talking freely, nor finely, nor learnedly, of the things of God that will save ourselves or profit others, if we are destitute of holy love. It is the charitable heart, not the voluble tongue, that is acceptable with God."

On prophecy, knowledge, and faith without love: "Had a man ever so clear an understanding of the prophecies and types under the old dispensation, ever so accurate a knowledge of the doctrines of Christianity, nay, and this by inspiration from the infallible dictates and illumination of the Spirit of God — without charity he would be nothing; all this would stand him in no stead. A clear and deep head is of no signification without a benevolent and charitable heart. It is not great knowledge that God sets a value upon, but true and hearty devotion and love."

On giving all to the poor and yielding to martyrdom: "Should all a man has be laid out in this manner, if he had no charity, it would profit him nothing. There may be an open and lavish hand where there is no liberal and charitable heart. Vain-glorious ostentation, or a proud conceit of merit, may put a man to large expense this way who has no true love to God nor men. Our doing good to others will do none to us, if it be not well done — namely, from a principle of devotion and charity, love to God and good-will to men." The most costly external performance, even martyrdom, is valueless without love.`,
        },
        {
          verse: '1 Corinthians 13:4-7',
          text: 'Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up... Beareth all things, believeth all things, hopeth all things, endureth all things.',
          commentary: `Henry: "The apostle gives us in these verses some of the properties and effects of charity, both to describe and commend it, that we may know whether we have this grace and that if we have not we may fall in love with what is so exceedingly amiable, and not rest till we have obtained it."

On *makrothumia* (long-suffering): "Love can endure evil, injury, and provocation without being filled with resentment, indignation, or revenge. It makes the mind firm, gives it power over the angry passions, and furnishes it with a persevering patience that shall rather wait and wish for the reformation of a brother than fly out in resentment of his conduct."

On kindness: "It is benign, bountiful; it is courteous and obliging. The law of kindness is in her lips; her heart is large, and her hand open. She is ready to show favours and to do good. She seeks to be useful; and not only seizes on opportunities of doing good, but searches for them."

On not envying: "If we love our neighbour we shall be so far from envying his welfare, or being displeased with it, that we shall share in it and rejoice at it. His bliss and sanctification will be an addition to ours, instead of impairing or lessening it. This is the proper effect of kindness and benevolence: envy is the effect of ill-will."

On "beareth all things, believeth all things, hopeth all things, endureth all things" — Henry calls this the four-fold covering of love: "Love covers much, believes much, hopes much, and endures much. It is slow to judge harshly, slow to abandon hope, slow to retaliate, and slow to despair of any person. These four qualities together make love the most powerful conserving force in any community — it is the mortar that holds the stones of fellowship together under every kind of pressure."`,
        },
        {
          verse: '1 Corinthians 13:8-12',
          text: 'Charity never faileth: but whether there be prophecies, they shall fail; whether there be tongues, they shall cease; whether there be knowledge, it shall vanish away... For now we see through a glass, darkly; but then face to face.',
          commentary: `Henry: "Love is superior to all gifts because it is permanent. Prophecy will be fulfilled and superseded; tongues will cease; knowledge (as we know it partially and imperfectly) will be replaced by direct vision. But love — the love of God and of neighbor — belongs to the eternal order. In heaven we shall not need prophecy because we shall see face to face; we shall not need tongues because all barriers will be removed; we shall not need partial knowledge because we shall know fully. But love will not be superseded because love is the very atmosphere of heaven."

On the glass darkly: "We see through a glass, darkly — *di' esoptrou en ainigmati* — literally 'through a mirror in a riddle.' Ancient mirrors were polished metal, showing a dim and distorted reflection. Paul uses this to describe our present knowledge of divine things: real but indirect, genuine but imperfect, true but mediated. We have the Word of God, we have the Spirit, we have the experience of faith — and all of these are real. But they are reflections of the divine reality, not the reality itself. The day of 'face to face' vision is coming, and on that day every riddle will be resolved and every reflection replaced by direct vision."

Henry: "The question is not whether prophecy is better than tongues, or knowledge than faith — the question is whether any gift compares with love. And the answer is: none of them will accompany us into eternity, but love will. Choose, therefore, not to excel in the gift that impresses others in this age, but in the grace that will last into the next."`,
        },
        {
          verse: '1 Corinthians 13:13',
          text: 'And now abideth faith, hope, charity, these three; but the greatest of these is charity.',
          commentary: `Henry: "He concludes with a summary comparison of the three great Christian graces — faith, hope, and charity. All three abide (remain, *menei*): they are permanent features of the Christian life, not temporary gifts. But love is greatest of the three, and for compelling reasons."

"Faith grasps what is not seen, but it will be superseded by sight. Hope anticipates what is not yet possessed, but it will be superseded by possession. Love is the present enjoyment and exercise of what is ultimate — God Himself is love (1 John 4:8), and the love of God and neighbor is not merely the means to an end but the very substance of the eternal life. In heaven we shall not need faith because we shall see; we shall not need hope because we shall have; but we shall need love forever because God is love, and the life of eternity is the life of love."

Henry draws the practical application: "This teaches us not to be satisfied with gifts — even the greatest gifts — if we are deficient in love. The person who has little gift but much love is richer before God than the person who has great gift but little love. The question to ask is not 'How gifted am I?' but 'How loving am I?' For at the last, love is what remains when all gifts are done."`,
        },
      ],
      conclusion: `Henry's final reflection on 1 Corinthians 13: "The apostle has set before us a glass in which we may see what we are, and what we are not. Let each of us look into it with an honest heart. Do I suffer long? Am I kind? Do I envy? Do I vaunt myself? Am I puffed up? Do I behave unseemly? Do I seek my own? Am I easily provoked? Do I think evil? The love described here is the love of God poured into our hearts by the Holy Spirit (Romans 5:5). It is not produced by effort alone but received by grace — and then exercised, cultivated, and expressed. Let us seek not the gift that will earn men's admiration, but the grace that will outlast every gift and fill the halls of eternity."`,
    },
    jfb: {
      reference: '1+corinthians+13',
      title: '1 Corinthians 13 — Jamieson, Fausset & Brown',
      introduction: `JFB places this chapter in its literary context: Paul has spent chapters 12-14 addressing the Corinthians' misuse and overvaluation of spectacular gifts, especially tongues. Chapter 13 is the hinge — the "more excellent way" (12:31) that surpasses all gifts and without which all gifts are nothing. Fausset notes that Paul does not directly oppose tongues but relativizes them by showing that love, unlike tongues, belongs to the eternal order.`,
      verseCommentaries: [
        {
          verse: '1 Corinthians 13:1',
          text: 'Though I speak with the tongues of men and of angels, and have not charity, I am become as sounding brass, or a tinkling cymbal.',
          commentary: `JFB: "Fausset: Paul advances from 'tongues of men' (natural human eloquence) to 'tongues of angels' (the highest conceivable linguistic ability) to establish the universal claim: no degree of verbal gift compensates for the absence of love. The Corinthians prided themselves on eloquence — Apollos was celebrated for it, and some factions prided themselves on his style over Paul's. Paul's point is that eloquence without love is percussion without music: it makes sound but carries no living content.

On 'sounding brass, or a tinkling cymbal': Jamieson: 'Two kinds of percussion are invoked — brass (*chalkos*), which produces a loud, resonant but meaningless sound, and a clashing cymbal, producing a sharp, penetrating but equally contentless noise. The person speaking without love may attract attention by their volume or brilliance, but nothing of spiritual substance is communicated or received. The listeners are no better off for having heard it.' Brown: 'The metaphor is particularly cutting for the Corinthians, who lived in a city famous for Corinthian bronze — *aes Corinthiacum* — the most prized metal of the ancient world. Paul takes their most celebrated cultural product and says: even if you were made of it, without love, you are nothing."`,
        },
        {
          verse: '1 Corinthians 13:4-5',
          text: 'Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up, doth not behave itself unseemly, seeketh not her own, is not easily provoked, thinketh no evil.',
          commentary: `JFB: "Fausset on *makrothumia* (longsuffering): 'This word describes love's first and most fundamental posture — the long fuse, the persistent patience under provocation. It is the opposite of the temper that the Corinthians showed when parties formed and members sued each other in pagan courts (1 Corinthians 6:1-8). Longsuffering is the grace that holds back the counterattack and waits for God to vindicate.'

On 'not puffed up' (*ou phusioutai*): Jamieson: 'The verb *phusioō* (to inflate, puff up) is a favorite Pauline word for Corinthian arrogance (used 6 times in 1 Corinthians, once in Colossians). The Corinthians were inflated by their gifts, their wisdom, their party loyalties. Love deflates all such inflation: when you genuinely love the other person, their gain is your joy rather than your threat, and their gift is a reason to celebrate rather than to compete.'

On 'thinketh no evil' (*ou logizetai to kakon*): Fausset: 'The verb *logizomai* is an accounting term — to reckon, to put to account. Love does not keep a running ledger of grievances. It does not credit the wrongs it has suffered to the account of the one who inflicted them, to be collected later. This is precisely the accounting God refuses to apply to us (Romans 4:8 — "Blessed is the man to whom the Lord will not impute sin"), and which believers are commanded to model in their relationships with each other."`,
        },
        {
          verse: '1 Corinthians 13:8-10',
          text: 'Charity never faileth: but whether there be prophecies, they shall fail... For we know in part, and we prophesy in part. But when that which is perfect is come, then that which is in part shall be done away.',
          commentary: `JFB: "Jamieson on 'never faileth' (*oudepote piptei*): 'Love never falls to the ground, never drops out of use, never becomes obsolete. The gifts of the Spirit are tools fitted for the particular needs of the present age — prophecy for revelation in the absence of completed Scripture, tongues for the sign to Israel, knowledge gifts for the building up of the pre-creedal community. When the need they served is met, they are superseded. But love is not a tool for a particular need; it is the very air of eternity.'

On 'when that which is perfect is come' (*hotan de elthē to teleion*): This phrase has generated considerable debate. JFB follows the patristic consensus: the 'perfect' (*teleion*) refers to the eschatological completion — the Lord's return, the resurrection, the beatific vision. Fausset: 'The contrast in vv. 12-13 — "now... then," "face to face," "as I am known" — consistently points to an eschatological telos, not a historical one. The partial-knowing and partial-seeing that characterizes our present age will be done away, not when Scripture is complete (though that was a real milestone), but when faith is swallowed up by sight.'

Brown: 'The argument of vv. 8-12 is teleological: everything that is means to an end will end when the end arrives. Faith will end in sight; hope will end in possession; knowledge will end in full comprehension. But love will not end because love is not a means to an end — love is the eternal content of the life of God shared with His people. This is why Paul can say it "abides" alongside faith and hope even as he argues that it surpasses them."`,
        },
        {
          verse: '1 Corinthians 13:13',
          text: 'And now abideth faith, hope, charity, these three; but the greatest of these is charity.',
          commentary: `JFB: "Fausset: 'The triad of faith, hope, and love is Paul's characteristic summary of Christian existence (cf. 1 Thessalonians 1:3; 5:8; Colossians 1:4-5; Romans 5:1-5; Galatians 5:5-6; Hebrews 10:22-24). They are the three great "abiding" graces — permanent features of the Christian life in contrast to the temporary gifts of vv. 8-12. But why does love exceed both faith and hope in greatness?'

Jamieson's answer: 'Faith terminates on unseen realities and will be superseded by sight; hope terminates on unrealized futures and will be superseded by possession. Love, however, does not terminate on an other to be later replaced by direct contact — love *is* direct contact. To love God is to enter into the very life of God, since God is love. Faith and hope are pilgrim graces, fitted for the journey; love is the destination itself, and therefore already participating in what faith and hope only anticipate.'

Brown: 'This verse is not diminishing faith and hope but rather pointing to love as their telos. Genuine faith, when fully mature, is love — trust in God expressed as whole-hearted devotion. Genuine hope, when fully realized, is love — the anticipation of being fully in the presence of the One who is love. Love, therefore, is the substance of which faith and hope are the shadow. It "abideth" not merely alongside them but as their perfection and completion."`,
        },
      ],
      conclusion: `JFB's summation: "Jamieson: 'The pastoral genius of this chapter is that Paul addresses the Corinthians' actual problem — divisiveness, competitiveness, pride over gifts — with a description of love that directly convicts each of their characteristic vices without once naming them. The person who was puffed up about tongues is shown that tongues without love is noise; the person who prided himself on knowledge is shown that knowledge without love is nothing; the person who gave generously but competitively is shown that giving without love profits nothing. Love is the mirror in which every Corinthian vice is exposed — not by accusation but by contrast.' Every age has its Corinthian temptations: our own gifts, achievements, and platforms can become occasions for pride rather than service. The corrective is always the same: the more excellent way of love."`,
    },
  },

  // ══════════════════════════════════════════════════════
  //  MATTHEW 5 — THE SERMON ON THE MOUNT (BEATITUDES)
  // ══════════════════════════════════════════════════════
  {
    reference: 'matthew+5',
    title: 'Matthew 5 — The Sermon on the Mount: The Beatitudes',
    mh: {
      reference: 'matthew+5',
      title: 'Matthew 5 — Matthew Henry',
      introduction: `Henry opens his commentary on the Sermon on the Mount with this observation: "This chapter, and the two that follow it, are a sermon — a famous sermon, the sermon upon the mount. It is the longest and fullest continued discourse of our Saviour that we have upon record in all the gospels. It is a practical discourse: there is not much of the *credenda* of Christianity in it — the things to be believed — but it is wholly taken up with the *agenda* — the things to be done."

The setting is deliberately contrasted with Sinai: "Christ preached this sermon, which was an exposition of the law, upon a mountain, because upon a mountain the law was given. But observe the difference: when the law was given, the Lord came down upon the mountain; now the Lord went up. Then he spoke in thunder and lightning; now, in a still small voice. Then the people were ordered to keep their distance; now they are invited to draw near. A blessed change! The glory of the gospel is the glory that excels, for grace and truth came by Jesus Christ."

Henry on the Beatitudes: "He proposes blessedness as the end, and gives us the character of those who are entitled to blessedness — very different from the sentiments of a vain world — in eight beatitudes, which may justly be called paradoxes. The world says: Blessed are the rich, the powerful, the self-sufficient. Christ says: Blessed are the poor in spirit, the meek, the mourners. The world's blessedness and Christ's blessedness are in perfect opposition."`,
      verseCommentaries: [
        {
          verse: 'Matthew 5:3',
          text: 'Blessed are the poor in spirit: for theirs is the kingdom of heaven.',
          commentary: `Henry: "This is the first and foundation beatitude. The poor in spirit are those who are humble and lowly in their own eyes, who understand their spiritual poverty and insufficiency, who have no high opinion of themselves or of their own merits, who are not rich in their own conceit, not full of themselves. It is not outward poverty that is here blessed — there is no blessing in mere lack of money. It is the poverty of spirit — the inner disposition that acknowledges dependence on God for everything.

'Blessed are the poor in spirit.' These are the people who have a deep sense of their spiritual need, who feel they have nothing to bring to God, who cannot look to their own righteousness as the ground of acceptance, who cry out as the tax collector: 'God be merciful to me a sinner' (Luke 18:13). This poverty is the very opposite of the Pharisaic self-sufficiency that Jesus elsewhere condemns.

'For theirs is the kingdom of heaven.' Note the present tense — not 'shall be' but 'is.' The poor in spirit already possess the kingdom, not because they have achieved anything, but because the kingdom is given to those who know they cannot earn it. Grace always flows downward to the humble: 'God resists the proud but gives grace to the humble' (James 4:6). The kingdom of God belongs not to the great, the capable, and the self-sufficient but to those who know they are none of these things."`,
        },
        {
          verse: 'Matthew 5:4-5',
          text: 'Blessed are they that mourn: for they shall be comforted. Blessed are the meek: for they shall inherit the earth.',
          commentary: `Henry on mourning: "Those that mourn for sin are they that are in a special manner sorrowful — not for want of the comforts of this life, but for the want of God's favour, and for the sins by which they have forfeited it. This mourning is consistent with peace of conscience and joy in the Holy Ghost. It proceeds from a sense of sin and misery, and from a love to God and longing after a better state. The promise is 'they shall be comforted' — the comforting is by Christ himself, who is the Comforter's gift (John 14:16), and by the Spirit who is the Comforter. God saves his choicest comforts for those who mourn most sincerely for sin."

On the meek: "The meek are those who have mastered their natural tempers by grace, who have the rule of their own spirits — they are not easily provoked, not resentful when provoked, not revengeful when wronged. The meek man is one who knows how to be abased and how to abound (Philippians 4:12) — who takes the good and the bad of this life from God's hand, who does not quarrel with Providence, who does not quarrel with men. The promise — 'they shall inherit the earth' — is startling. The world gives the earth to the aggressive, the competitive, the self-assertive. Christ gives it to the meek. In the eternal order, as in the resurrection, the meek are the true inheritors — because the meek are citizens of the kingdom of God that will fill the earth."`,
        },
        {
          verse: 'Matthew 5:6-8',
          text: 'Blessed are they which do hunger and thirst after righteousness: for they shall be filled. Blessed are the merciful: for they shall obtain mercy. Blessed are the pure in heart: for they shall see God.',
          commentary: `Henry on hunger and thirst for righteousness: "They that hunger and thirst after righteousness are those who desire and press after a righteous state before God and a righteous frame of spirit — to be justified by God and sanctified by his Spirit. This is a holy appetite, strong and importunate. They hunger — they feel the emptiness and pain of the want. They thirst — they feel the urgency and desire. The appetite here is specifically for *righteousness* — not for sensation, pleasure, honor, or wealth, but for the right standing before God and the right condition of soul that only God can supply. The promise — 'they shall be filled' — is absolute. Every other appetite may go unsatisfied; this one will be filled, because its object is what God most delights to give."

On the merciful: "The merciful are those who are compassionate to the miseries of others, ready to forgive offenses against themselves, and ready to relieve the miseries of others when it is in the power of their hands to do it. This beatitude especially concerns our dealings with those who have offended us: the forgiving spirit toward enemies. The promise — 'they shall obtain mercy' — at the last day and now. Those who show no mercy shall receive none; those who show mercy shall receive it in full."

On purity of heart: "This beatitude is climactic. The pure in heart are those who have the spiritual and divine nature and image stamped upon them, who are sincere and upright, in whom there is no guile, who aim at God in all they do, who are inwardly what they profess outwardly — whose religion is not a performance for observers but an expression of what they truly are before God. The promise is the greatest of all promises: 'they shall see God.' Not merely hear about Him, read about Him, reason about Him — but see Him. To see God is the ultimate human destiny, the final restoration of what was lost in Eden when sin closed our eyes to His face."`,
        },
        {
          verse: 'Matthew 5:13-16',
          text: 'Ye are the salt of the earth... Ye are the light of the world. A city that is set on an hill cannot be hid.',
          commentary: `Henry: "Having described the characters of those that are to be disciples of Christ in the beatitudes, he now tells them what their position and responsibility in the world are to be. They are to be salt and light — two of the most useful things in the world, though two of the most common."

On salt: "Salt is of great use to season and preserve, and to keep things from putrefying. Good Christians, as they are blessed themselves, are blessings to the world. In proportion as Christianity spreads, it preserves the world from the corruption that sin would bring. When the salt loses its savour — when Christians lose their vitality, their spiritual freshness, their distinctiveness — they become good for nothing. They neither season the world nor serve the kingdom. Henry: 'The warning here is for the disciple who becomes so like the world that he can no longer change it.'"

On light: "Light is both revealing and warming. It shows things as they are and it gives life wherever it shines. Christians are to be lights in the world — not hiding their faith, not apologizing for their distinctiveness, not concealing the candle of their witness under a bushel of conformity, but letting it burn openly. A city on a hill cannot be hid — and a genuine Christian, living the life of the Beatitudes, cannot be hidden either. The life of grace is public, not because Christians parade themselves, but because real transformation of character is visible."`,
        },
        {
          verse: 'Matthew 5:43-48',
          text: 'Ye have heard that it hath been said, Thou shalt love thy neighbour, and hate thine enemy. But I say unto you, Love your enemies... that ye may be the children of your Father which is in heaven.',
          commentary: `Henry on the climax of the Sermon: "This is the seventh and last antithesis in the exposition of the moral law — and it is the most radical. The law said 'love your neighbor,' and the scribal tradition added 'hate your enemy.' Christ does not merely extend the command; he reverses the whole framework: Love your enemies. This is the most counter-cultural command in all of Scripture, because it cuts against the deepest natural human instinct of reciprocity.

'Love your enemies, bless them that curse you, do good to them that hate you, and pray for them which despitefully use you and persecute you.' Henry counts four specific acts: (1) love — the inward disposition of goodwill; (2) bless — the verbal expression, refusing to curse in return; (3) do good — the active expression in deeds; (4) pray — intercession before God for those who have wronged you. This is not passive resignation but active enemy-love, directed in all four dimensions: heart, mouth, hand, and prayer.

'That ye may be the children of your Father which is in heaven.' Henry: 'This is the divine logic of enemy-love: God does it. God sends rain on the just and the unjust. God is kind to the ungrateful and the evil. God loved the world while we were His enemies. If we love only those who love us, we do what everyone does — there is nothing of God in it. But if we love our enemies, we reflect the character of our Father, who loved His enemies enough to give His Son to die for them. Enemy-love is the most divine thing a human being can do, because it most closely resembles the love of God revealed at Calvary."`,
        },
      ],
      conclusion: `Henry concludes Matthew 5: "The sermon on the mount is a comprehensive exhibition of the character required by the kingdom of God, the spirit that should animate all Christ's subjects, and the standard by which they should measure themselves. It shows that the kingdom of God is an inward, spiritual kingdom — not a matter of outward observance but of transformed character and motivation. The eight beatitudes describe the citizen of the kingdom; the salt and light metaphors describe his function; the six antitheses describe the spirit in which he fulfills the law — not by reducing it to minimum compliance but by taking it to its deepest intention. And the whole sermon ends with the command to love enemies, which is the most radical expression of the divine love that the kingdom embodies."`,
    },
    jfb: {
      reference: 'matthew+5',
      title: 'Matthew 5 — Jamieson, Fausset & Brown',
      introduction: `JFB notes that the Sermon on the Mount is presented by Matthew as the first of five major discourses (Matthew 5-7; 10; 13; 18; 23-25), carefully structured as a New Pentateuch. Jamieson observes: "As Moses went up Sinai to receive the law and then came down to give it to Israel, so Christ ascends the mountain as the new Moses — but with this critical difference: He does not merely transmit what He received from the Father; He speaks with inherent authority. 'Ye have heard that it was said... but I say unto you.' The formula is without parallel in all prophetic literature."`,
      verseCommentaries: [
        {
          verse: 'Matthew 5:3-4',
          text: 'Blessed are the poor in spirit: for theirs is the kingdom of heaven. Blessed are they that mourn: for they shall be comforted.',
          commentary: `JFB: "Fausset on *ptōchos* (poor): 'The Greek has two words for poor: *penēs*, describing the one who has little but must labor for what he needs, and *ptōchos*, describing the destitute, the beggar, the one who has nothing and depends on another\'s charity. Christ uses the more extreme word: the utterly destitute in spirit — those who have abandoned every claim on God, every confidence in their own merit, every spiritual self-sufficiency. This is the absolute poverty of one who knows that before God they have nothing, are nothing, and can bring nothing. This is the beginning of saving grace.'

Brown: 'The kingdom "is" theirs (present tense) in contrast to the future tenses of the other beatitudes. The poor in spirit already possess the kingdom because the kingdom is given, not earned, and the only qualification for a gift is the acknowledgment that you cannot purchase it. When the wealthy young ruler asked what he must *do* to inherit eternal life, he could not empty himself of his many possessions. The poor in spirit have nothing to empty: they receive the kingdom with open hands.'

On mourning: Jamieson: 'The mourning here is not grief over worldly loss but over sin — one's own sin and the sin of the world. This is the mourning of the tax collector in the temple, the mourning of Peter after the denials, the mourning of David in Psalm 51. The comfort (*paraklēsis*) promised is the specific ministry of the Paraclete — the Holy Spirit who is the Comforter sent precisely to those who mourn over sin."`,
        },
        {
          verse: 'Matthew 5:17-20',
          text: 'Think not that I am come to destroy the law, or the prophets: I am not come to destroy, but to fulfil... For I say unto you, That except your righteousness shall exceed the righteousness of the scribes and Pharisees, ye shall in no case enter into the kingdom of heaven.',
          commentary: `JFB: "Jamieson on 'fulfil': 'The verb *plēroō* (to fill up, complete, fulfill) is the key to understanding Christ's relationship to the Law. He did not abrogate it (destroy), nor did He leave it in its partial, shadowy form. He fulfilled it — filled it up to its fullest meaning and intention. This fulfillment occurred in two directions: (1) He fulfilled its moral demands by living in perfect obedience — He is the only human being who has kept the law fully; (2) He fulfilled its ceremonial and prophetic types by being the reality to which they pointed. The sacrifices are fulfilled in His once-for-all sacrifice; the priesthood is fulfilled in His eternal high-priestly intercession; the Passover is fulfilled in His death.'

Fausset on the righteousness exceeding the Pharisees': 'This statement must have been electrifying to the original hearers. The Pharisees were the most rigorous law-keepers in Judaism — they tithed mint and dill and cumin (Matthew 23:23), they washed their hands seven ways before eating, they prayed three times daily. If their righteousness is insufficient for the kingdom, what hope is there? Christ's answer in the antitheses that follow is: the Pharisees made the law external and manageable; the kingdom requires a righteousness that begins in the heart and extends to motive, thought, and disposition. The standard is not reduced but infinitely raised — and can only be met by grace, not self-improvement."`,
        },
        {
          verse: 'Matthew 5:43-44',
          text: 'Ye have heard that it hath been said, Thou shalt love thy neighbour, and hate thine enemy. But I say unto you, Love your enemies, bless them that curse you, do good to them that hate you, and pray for them which despitefully use you.',
          commentary: `JFB: "Brown: 'Love your enemies' — *agapate tous echthrous*. The verb *agapaō* (to love with self-giving, purposeful goodwill) applied to *echthrous* (enemies, adversaries, those actively hostile) is the most radical commandment in the Sermon. The Qumran community contemporaneous with Jesus explicitly commanded hatred of enemies ('hate all that he has rejected'); the Pharisees limited neighbor-love to fellow Israelites. Jesus abolishes both restrictions and extends the love command to its absolute limit.

Fausset on the fourfold form: 'Four concentric actions are commanded: (1) love them — the inward disposition; (2) bless them that curse you — the verbal response; (3) do good to them that hate you — the active response in deeds; (4) pray for them that persecute you — the prayer response. The sequence moves from the interior to the exterior, from the heart to the hand, from the private to the public. All four dimensions must be present for genuine enemy-love.'

Jamieson: 'The theological ground for this command — "that ye may be the children of your Father which is in heaven" (v.45) — is the most powerful motivation Paul later expresses in Romans 5:8: "God demonstrates his love for us in that while we were still sinners, Christ died for us." The cross is the ultimate example of enemy-love in practice: we were God's enemies, and He loved us to the point of giving His Son. The disciple who loves his enemies does not exceed Christ's command — he embodies Christ's cross."`,
        },
      ],
      conclusion: `JFB's conclusion on Matthew 5: "Jamieson: 'The Sermon on the Mount is not a program for earning the kingdom by superior moral effort. Read that way, it condemns everyone who hears it, because it sets an impossibly high standard: even lustful thoughts are adultery; even angry words are murder; enemy-love is commanded. The Sermon is a diagnosis, not a program. It shows us what perfect obedience to God looks like, and in doing so, drives us to Christ, who alone has rendered that obedience on our behalf and who alone can impart by His Spirit the character here described. The Beatitudes describe Christ perfectly — He is poor in spirit (Philippians 2:7-8), He mourns (John 11:35; Luke 19:41), He is meek (Matthew 11:29), He hungers and thirsts for righteousness, He is merciful, He is pure in heart, He makes peace, He is persecuted for righteousness. To receive Christ is to begin receiving His character."`,
    },
  },
];

export function getCommentaryByReference(reference: string): PassageCommentary | undefined {
  return COMMENTARIES.find(c => c.reference === reference);
}

export const COMMENTARY_INDEX = COMMENTARIES.map(({ reference, title }) => ({ reference, title }));
