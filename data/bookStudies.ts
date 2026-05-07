export interface BookStudy {
  overview: string;
  howWritten: string;
  structure: string[];
  themes: { title: string; description: string }[];
  highlights: { verse: string; text: string }[];
  deepPath: { phase: string; description: string }[];
}

export const BOOK_STUDIES: Record<string, BookStudy> = {
  genesis: {
    overview: `Genesis is the book of beginnings — the foundation of the entire biblical narrative. It records the creation of the universe, the origin of humanity, the entrance of sin and death, God's judgment in the flood, the dispersion of nations at Babel, and the choice of Abraham through whom God begins his redemptive plan. The book answers the most fundamental questions: Where did everything come from? Why is there evil and suffering? What is God's solution?`,
    howWritten: `Moses wrote Genesis as part of the Pentateuch (five books of Moses), circa 1450–1410 BC. Genesis draws on ancient oral traditions, genealogical records, and direct divine revelation. It employs rich narrative prose, genealogies (toledot — "generations of"), and poetry (e.g., Jacob's blessing in ch. 49). The structure is driven by 11 occurrences of the phrase "these are the generations of," marking major narrative transitions.`,
    structure: [
      'Primeval History (1–11) — Creation, Fall, Flood, Babel',
      'Abraham Cycle (12–25) — Call, covenant, promise, test',
      'Isaac & Jacob Cycle (25–36) — Blessing, conflict, wrestling with God',
      'Joseph Story (37–50) — Betrayal, Providence, redemption of family',
    ],
    themes: [
      { title: 'Creation & Sovereignty', description: 'God speaks and creation obeys (ch. 1–2). He is the uncreated Creator — Lord over light, life, time, and order. Creation is declared "very good."' },
      { title: 'The Fall & Sin', description: 'The entry of sin (ch. 3) fractures every relationship — with God, self, others, creation. Yet the first promise of redemption (3:15, the protoevangelium) appears immediately.' },
      { title: 'Covenant', description: 'God makes unconditional covenants with Noah (ch. 9) and Abraham (ch. 12, 15, 17). These covenants are the backbone of the entire Bible\'s story.' },
      { title: 'Providence', description: 'The Joseph narrative (37–50) is a masterclass in divine providence — "You meant it for evil, God meant it for good" (50:20). God works through human choices to fulfill his purposes.' },
      { title: 'Election & Grace', description: 'God chooses not the firstborn or the strongest but the younger, the barren, the unlikely — Isaac over Ishmael, Jacob over Esau, Joseph over his brothers. Grace, not merit, drives the story.' },
    ],
    highlights: [
      { verse: 'Genesis 1:1', text: '"In the beginning God created the heaven and the earth."' },
      { verse: 'Genesis 3:15', text: '"And I will put enmity between thee and the woman, and between thy seed and her seed; it shall bruise thy head, and thou shalt bruise his heel."' },
      { verse: 'Genesis 12:1-3', text: '"Get thee out of thy country... and I will make of thee a great nation, and I will bless thee... and in thee shall all families of the earth be blessed."' },
      { verse: 'Genesis 50:20', text: '"But as for you, ye thought evil against me; but God meant it unto good, to bring to pass, as it is this day, to save much people alive."' },
    ],
    deepPath: [
      { phase: '1. The Toledot Structure', description: 'Trace the 11 "generations of" headings (2:4; 5:1; 6:9; 10:1; 11:10; 11:27; 25:12; 25:19; 36:1; 36:9; 37:2). They are the skeleton of the book.' },
      { phase: '2. The Covenants', description: 'Study the Noahic (9:1-17), Abrahamic (12:1-3; 15; 17) covenants. Note what God promises and what the signs are. These set up all of Scripture.' },
      { phase: '3. The Protoevangelium', description: 'Genesis 3:15 is the first messianic promise. Trace "the seed of the woman" through Genesis: Seth → Shem → Abraham → Isaac → Jacob → Judah.' },
      { phase: '4. Typology', description: 'Joseph is the richest type of Christ in the OT: rejected by brothers, falsely accused, raised to glory, saves his people. List the parallels.' },
      { phase: '5. Hebrew Words', description: 'Study: bara (create, H1254), hesed (lovingkindness, H2617), toledot (generations, H8435), berith (covenant, H1285).' },
    ],
  },

  exodus: {
    overview: `Exodus is the great redemption story of the Old Testament — God delivering Israel from 430 years of slavery in Egypt. It establishes the central event of the OT: the Passover and Exodus, which the entire Bible looks back on as the defining act of God's saving power. It also records the giving of the Law at Sinai and detailed instructions for the Tabernacle — God's dwelling with his people.`,
    howWritten: `Written by Moses, approximately 1450–1410 BC. The name "Exodus" comes from the Greek for "departure/going out." The Hebrew title is "Shemot" (Names), from its opening words. The book is a continuation of Genesis, picking up 400 years later. It alternates between narrative and legal/liturgical material. The Passover instructions (ch. 12) were preserved as liturgical text for annual celebration. The Tabernacle blueprints (ch. 25–31, 35–40) show the most detailed architectural description in the OT.`,
    structure: [
      'Israel in Egypt (1–12) — Oppression, Moses called, the 10 Plagues, Passover',
      'Exodus to Sinai (13–18) — Red Sea crossing, wilderness provision',
      'Covenant at Sinai (19–24) — The Ten Commandments, covenant ratified',
      'The Tabernacle (25–40) — Blueprint given, golden calf, Tabernacle built',
    ],
    themes: [
      { title: 'Redemption', description: 'The Passover lamb\'s blood on the doorposts (ch. 12) is the central redemptive act of the OT. Every NT writer sees it as a type of Christ\'s sacrifice (1 Cor 5:7; John 1:29).' },
      { title: 'The Name of God', description: 'God reveals his personal covenant name YHWH (I AM WHO I AM, 3:14) to Moses — a name that conveys eternal self-existence and absolute faithfulness to his covenant.' },
      { title: 'The Law', description: 'The Ten Commandments (20:1-17) and the Book of the Covenant (20:22–23:33) structure Israel\'s life with God: the first four commandments govern love for God; the last six govern love for neighbor.' },
      { title: 'God\'s Presence', description: 'The entire Tabernacle project (ch. 25–40) exists so God can dwell among his people: "Let them make me a sanctuary; that I may dwell among them" (25:8). This anticipates the incarnation.' },
      { title: 'Judgment on False Gods', description: 'Each of the 10 plagues targets a specific Egyptian deity — Hapi (river/Nile), Ra (sun), Khepri (frogs), etc. God systematically defeats Egypt\'s gods before the eyes of the world.' },
    ],
    highlights: [
      { verse: 'Exodus 3:14', text: '"And God said unto Moses, I AM THAT I AM: and he said, Thus shalt thou say unto the children of Israel, I AM hath sent me unto you."' },
      { verse: 'Exodus 12:13', text: '"And the blood shall be to you for a token upon the houses where ye are: and when I see the blood, I will pass over you."' },
      { verse: 'Exodus 20:2-3', text: '"I am the LORD thy God, which have brought thee out of the land of Egypt... Thou shalt have no other gods before me."' },
      { verse: 'Exodus 25:8', text: '"And let them make me a sanctuary; that I may dwell among them."' },
    ],
    deepPath: [
      { phase: '1. The Plagues & Egyptian Gods', description: 'Research which Egyptian deity each plague targeted. This shows Exodus is a theological war — YHWH vs. the gods of Egypt.' },
      { phase: '2. The Passover Typology', description: 'Study Exodus 12 alongside 1 Corinthians 5:7, John 1:29, and Revelation 5. The Passover lamb is explicitly applied to Christ.' },
      { phase: '3. The Ten Commandments', description: 'Study Exodus 20 vs. Deuteronomy 5. Note differences. Study Jesus\' "fulfillment" of the Law in Matthew 5:17-48.' },
      { phase: '4. The Tabernacle as Theology', description: 'Every piece of furniture points to Christ: the altar (sacrifice), the laver (washing), the lampstand (light of the world), the table (bread of life), the ark (mercy seat/atonement).' },
      { phase: '5. The Name YHWH', description: 'Study the tetragrammaton (H3068). Compare with Jesus\' seven "I AM" statements in John. The connection is deliberate and profound.' },
    ],
  },

  leviticus: {
    overview: `Leviticus is the most systematically misunderstood book of the Bible — yet Hebrews calls it a shadow of Christ (Heb 10:1). As the central book of the Pentateuch, it stands at the heart of Israel's worship system, detailing how a holy God could dwell with a sinful people. Every sacrifice, every purification ritual, every feast is a dramatized lesson in the holiness of God, the seriousness of sin, and the provision of atonement.`,
    howWritten: `Written by Moses at Mount Sinai, c. 1445 BC. The Hebrew title "Wayyiqra" means "And He Called" — God calling Moses to receive instructions. The book is almost entirely legal material delivered by God directly to Moses. Unlike Genesis and Exodus, it contains almost no narrative (the exception being the ordination of priests in ch. 8–9 and the death of Nadab and Abihu in ch. 10). It is structured around the Holiness Code (17–26), which contains the key verse of the entire book: "Be ye holy, for I the LORD your God am holy" (19:2).`,
    structure: [
      'The Sacrificial System (1–7) — Burnt, grain, peace, sin, guilt offerings',
      'Ordination of Priests (8–10) — Aaron and sons consecrated; Nadab/Abihu judged',
      'Laws of Clean and Unclean (11–15) — Food, childbirth, skin disease, bodily discharges',
      'Day of Atonement (16) — The high priest enters the Most Holy Place once a year',
      'Holiness Code (17–27) — Laws for holy living, feasts, Sabbath, and the Year of Jubilee',
    ],
    themes: [
      { title: 'Holiness of God', description: '"Be holy as I am holy" (19:2) is the central command. God\'s holiness demands separation from everything impure — morally, ritually, and relationally.' },
      { title: 'Atonement', description: 'The word "atonement" (kipper — to cover, H3722) appears 49 times. The entire sacrificial system teaches that sin requires a substitutionary death. Hebrews shows Christ as the final fulfilment.' },
      { title: 'Sacrifice', description: 'Five types of offerings each communicate different aspects of approach to God: the burnt offering (total surrender), sin offering (propitiation), guilt offering (restitution), peace offering (fellowship), grain offering (dedication).' },
      { title: 'The Feasts', description: 'The seven feasts of Israel (ch. 23) form a prophetic calendar: Passover (crucifixion), First Fruits (resurrection), Pentecost (Holy Spirit), Trumpets, Atonement, Tabernacles — all fulfilled in Christ.' },
      { title: 'The Scapegoat', description: 'On the Day of Atonement (ch. 16), two goats picture two aspects of Christ\'s work: one is slain (propitiation) and the other carries sins away into the wilderness (expiation).' },
    ],
    highlights: [
      { verse: 'Leviticus 17:11', text: '"For the life of the flesh is in the blood: and I have given it to you upon the altar to make an atonement for your souls: for it is the blood that maketh an atonement for the soul."' },
      { verse: 'Leviticus 19:2', text: '"Speak unto all the congregation of the children of Israel, and say unto them, Ye shall be holy: for I the LORD your God am holy."' },
      { verse: 'Leviticus 19:18', text: '"Thou shalt not avenge, nor bear any grudge against the children of thy people, but thou shalt love thy neighbour as thyself: I am the LORD."' },
      { verse: 'Leviticus 16:34', text: '"And this shall be an everlasting statute unto you, to make an atonement for the children of Israel for all their sins once a year."' },
    ],
    deepPath: [
      { phase: '1. The Five Offerings', description: 'Study each offering (ch. 1–7) and its NT fulfilment: burnt offering → Romans 12:1; sin offering → 2 Cor 5:21; peace offering → Eph 2:14.' },
      { phase: '2. Day of Atonement', description: 'Read Leviticus 16 alongside Hebrews 9–10. Every detail of Yom Kippur finds its perfect fulfilment in Christ\'s once-for-all sacrifice.' },
      { phase: '3. The Seven Feasts', description: 'Study Leviticus 23 as a prophetic calendar. Identify which feasts have already been fulfilled (spring feasts) and which are yet to come (fall feasts).' },
      { phase: '4. Clean and Unclean', description: 'The clean/unclean laws are not primarily about hygiene but holiness. Study Acts 10 and Mark 7:14-23 for the NT\'s interpretation.' },
      { phase: '5. The Holiness Code', description: 'Read Leviticus 18–20. Many of these laws are quoted in the NT. Note Jesus\' quotation of 19:18 as the second greatest commandment (Matt 22:39).' },
    ],
  },

  numbers: {
    overview: `Numbers recounts forty years of Israel's wilderness wandering — a period of testing, rebellion, and divine provision. The Hebrew title "In the Desert" is more descriptive: this is the book of Israel's failure to trust God when standing at the edge of the Promised Land. Their unbelief at Kadesh-Barnea (ch. 13–14) is the turning point, condemning an entire generation to die in the wilderness. Paul calls these events a warning for Christians (1 Cor 10:1-11).`,
    howWritten: `Written by Moses, c. 1450–1410 BC. The English title "Numbers" refers to the two census counts that open and close the book (ch. 1 and ch. 26). The book blends narrative, legal material, and poetic oracles (Balaam's oracles in ch. 22–24 are some of the most Messianic in the entire OT). The Aaronic blessing (6:24-26) — "The LORD bless thee and keep thee" — comes from this book.`,
    structure: [
      'The First Generation (1–10) — Census, preparation, departure from Sinai',
      'Journey & Rebellion (11–25) — Complaints, spy mission, 40 years of wandering',
      'Balaam\'s Oracles (22–24) — Messianic prophecies from a pagan prophet',
      'The Second Generation (26–36) — New census, laws for the new generation, preparation to enter',
    ],
    themes: [
      { title: 'Unbelief and Consequences', description: 'Israel\'s refusal to enter Canaan (13–14) despite God\'s promises is the paradigm of unbelief. Hebrews 3–4 uses this episode as the central warning against hardening one\'s heart.' },
      { title: 'God\'s Provision', description: 'Despite constant complaining, God provides: manna (ch. 11), water from the rock (ch. 20), the pillar of cloud and fire (9:15-23). His provision outlasts Israel\'s ingratitude.' },
      { title: 'Holiness and Judgment', description: 'God\'s holiness is not abstract — it is demonstrated repeatedly in judgment on Korah\'s rebellion (ch. 16), on those who committed sexual immorality (ch. 25), and on Moses himself (ch. 20).' },
      { title: 'The Bronze Serpent', description: 'Numbers 21:4-9 — Israel bitten by serpents, healed by looking at a bronze serpent on a pole. Jesus explicitly applies this to himself: "As Moses lifted up the serpent... so must the Son of Man be lifted up" (John 3:14).' },
      { title: 'Messianic Prophecy', description: 'Balaam\'s fourth oracle (24:17): "A star shall come out of Jacob, and a scepter shall rise out of Israel" — a direct Messianic promise cited by the Magi and in Dead Sea Scrolls.' },
    ],
    highlights: [
      { verse: 'Numbers 6:24-26', text: '"The LORD bless thee, and keep thee: The LORD make his face shine upon thee, and be gracious unto thee: The LORD lift up his countenance upon thee, and give thee peace."' },
      { verse: 'Numbers 14:8', text: '"If the LORD delight in us, then he will bring us into this land, and give it us; a land which floweth with milk and honey."' },
      { verse: 'Numbers 21:9', text: '"And Moses made a serpent of brass, and put it upon a pole, and it came to pass, that if a serpent had bitten any man, when he beheld the serpent of brass, he lived."' },
      { verse: 'Numbers 24:17', text: '"I shall see him, but not now: I shall behold him, but not nigh: there shall come a Star out of Jacob, and a Sceptre shall rise out of Israel."' },
    ],
    deepPath: [
      { phase: '1. The Two Censuses', description: 'Compare ch. 1 and ch. 26. The entire first generation (except Caleb and Joshua) died. The census documents the cost of unbelief — a whole generation lost.' },
      { phase: '2. Kadesh-Barnea', description: 'Read ch. 13–14 slowly. Then read Hebrews 3:7–4:13. This is Paul\'s paradigm for apostasy. What does "rest" mean for the Christian?' },
      { phase: '3. Balaam\'s Oracles', description: 'Study the four oracles (23:7-10; 23:18-24; 24:3-9; 24:15-24). These are prophetic blessings on Israel from a Gentile prophet — God can speak through unexpected channels.' },
      { phase: '4. The Bronze Serpent & John 3', description: 'Cross-reference Numbers 21:4-9 with John 3:14-15. Why does Jesus choose this image? What does "looking" mean in both contexts?' },
      { phase: '5. Paul\'s Warning', description: 'Read 1 Corinthians 10:1-13. Paul lists five specific sins from Numbers and their judgments. Note verse 13: the same God who judged is faithful to provide a way of escape.' },
    ],
  },

  deuteronomy: {
    overview: `Deuteronomy is Moses' farewell — three sermons delivered on the plains of Moab to the new generation about to enter the Promised Land. The name means "second law" (deuteros = second, nomos = law), though it is not new law but a renewal of the Sinai covenant, applied to a new generation in a new context. It is the most quoted OT book in the New Testament, with Jesus himself quoting it three times when tempted by the devil.`,
    howWritten: `Written by Moses, c. 1410 BC, just before his death. Deuteronomy is structured as an ancient Near Eastern suzerainty treaty (the Hittite treaty form): preamble, historical prologue, stipulations, blessings and curses, deposit and reading. This confirms that God is the Great King and Israel is his vassal nation. The final chapter (34) recording Moses' death was added by Joshua or a later editor. Jesus quoted Deuteronomy 6:13, 6:16, and 8:3 in his wilderness temptation (Matt 4).`,
    structure: [
      'First Sermon (1–4) — Historical review: Sinai to Moab',
      'Second Sermon (5–26) — The Law restated: Decalogue, Shema, statutes, and ordinances',
      'Covenant Renewal (27–30) — Blessings and curses on Ebal and Gerizim',
      'Transition and Moses\' Death (31–34) — Joshua commissioned; Song of Moses; Moses dies on Nebo',
    ],
    themes: [
      { title: 'Love for God', description: 'The Shema (6:4-5) — "Hear, O Israel: the LORD our God is one LORD: and thou shalt love the LORD thy God with all thine heart, and with all thy soul, and with all thy might" — is the foundational command of the Bible, quoted by Jesus as the greatest commandment (Matt 22:37).' },
      { title: 'Memory and Teaching', description: '"Remember that you were a slave in Egypt" appears repeatedly. Israel is called to keep memory alive through recitation, ritual, and teaching children. Faith is transmitted; it must be deliberate.' },
      { title: 'Covenant Faithfulness', description: 'Moses repeatedly sets before Israel a stark choice: obey and be blessed, disobey and be cursed (ch. 28). The blessing/curse structure anticipates both the exile (disobedience) and the new covenant restoration.' },
      { title: 'The Coming Prophet', description: '"The LORD thy God will raise up unto thee a Prophet from the midst of thee, of thy brethren, like unto me" (18:15) — Peter and Stephen both quote this as fulfilled in Jesus (Acts 3:22; 7:37).' },
      { title: 'Centralized Worship', description: 'Deuteronomy insists that Israel worship only at the place God chooses (ch. 12). This guards against syncretism and idol worship. Solomon\'s temple in Jerusalem eventually becomes that place.' },
    ],
    highlights: [
      { verse: 'Deuteronomy 6:4-5', text: '"Hear, O Israel: The LORD our God is one LORD: And thou shalt love the LORD thy God with all thine heart, and with all thy soul, and with all thy might."' },
      { verse: 'Deuteronomy 8:3', text: '"Man doth not live by bread only, but by every word that proceedeth out of the mouth of the LORD doth man live." — Quoted by Jesus in temptation (Matt 4:4)' },
      { verse: 'Deuteronomy 18:15', text: '"The LORD thy God will raise up unto thee a Prophet from the midst of thee, of thy brethren, like unto me; unto him ye shall hearken."' },
      { verse: 'Deuteronomy 30:19', text: '"I call heaven and earth to record this day against you, that I have set before you life and death, blessing and cursing: therefore choose life, that both thou and thy seed may live."' },
    ],
    deepPath: [
      { phase: '1. The Shema', description: 'Study Deuteronomy 6:4-9. Then read Matthew 22:37-40. Then read the Mezuzah tradition — why did Jews write this on their doorposts? What does it mean to love God with "all"?' },
      { phase: '2. Jesus and Deuteronomy', description: 'Every one of Jesus\' three responses to Satan in Matthew 4 quotes Deuteronomy (8:3; 6:16; 6:13). Deuteronomy is Jesus\' sword against temptation — study these passages in their OT context.' },
      { phase: '3. Blessings and Curses', description: 'Read Deuteronomy 28 in full. Then read Galatians 3:10-14: Christ became a curse for us. This is one of the most important cross-references in the NT.' },
      { phase: '4. The Prophet Like Moses', description: 'Study 18:15-22. What were the criteria? Read Acts 3:22-26 and 7:37. How did Jesus fulfil this in ways no other prophet could?' },
      { phase: '5. The Song of Moses', description: 'Deuteronomy 32 is one of the great poems of Scripture. It summarizes the entire sweep of Israel\'s history. It is quoted in Romans 10:19; 12:19; 15:10, and in Revelation 15:3.' },
    ],
  },

  joshua: {
    overview: `Joshua records the fulfilment of God's 400-year-old promise to Abraham: "To your offspring I will give this land." Under Joshua's leadership, Israel crosses the Jordan, conquers Canaan, and divides the land among the twelve tribes. It is a book about covenant faithfulness — God's faithfulness to his promises and the call for Israel to be faithful in return. The conquest raises deep theological questions about holy war (herem) that the NT addresses through the lens of spiritual warfare.`,
    howWritten: `Written primarily by Joshua, with some additions by later writers (Eleazar or Phinehas). Date: c. 1400–1370 BC. The book is structured around two major sections: military campaigns (1–12) and land allotment (13–21). It closes with covenant renewal at Shechem (24), deliberately echoing Deuteronomy's covenant form. Joshua is the Hebrew form of "Jesus" (Yeshua = "YHWH saves"), making Joshua a deliberate type of Christ who leads his people into their inheritance.`,
    structure: [
      'Entering the Land (1–5) — Commissioning, Rahab, crossing Jordan, circumcision, Passover',
      'Southern & Northern Campaigns (6–12) — Jericho, Ai, Gibeon, the long day, 31 kings defeated',
      'Division of the Land (13–21) — Tribal allotments; Caleb\'s inheritance; cities of refuge',
      'Covenant Renewal (22–24) — Eastern tribes return; Joshua\'s farewell; Shechem covenant',
    ],
    themes: [
      { title: 'Divine Faithfulness', description: 'Joshua 21:45 — "There failed not ought of any good thing which the LORD had spoken unto the house of Israel; all came to pass." God\'s word is the most reliable thing in existence.' },
      { title: 'Courageous Obedience', description: '"Be strong and of a good courage" is repeated four times (1:6, 7, 9, 18). God\'s command to Joshua is also his provision — he would not command what he would not enable.' },
      { title: 'The Ban (Herem)', description: 'The commanded destruction of Canaanite cities is one of the most difficult passages in Scripture. The NT frames this as God\'s patience running out (Gen 15:16) and a picture of the final judgment on evil.' },
      { title: 'Rahab: Grace for Outsiders', description: 'A Canaanite prostitute (Rahab) is saved by faith in the God of Israel (2:11). She becomes an ancestor of Jesus (Matt 1:5) — the scarlet cord anticipating the blood of Christ.' },
      { title: 'Cities of Refuge', description: 'Six cities of refuge (ch. 20) where an accidental killer could flee and be safe — a vivid picture of Christ as the refuge from the judgment we deserve (Heb 6:18).' },
    ],
    highlights: [
      { verse: 'Joshua 1:8', text: '"This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night, that thou mayest observe to do according to all that is written therein."' },
      { verse: 'Joshua 1:9', text: '"Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest."' },
      { verse: 'Joshua 2:11', text: '"The LORD your God, he is God in heaven above, and in earth beneath." — Rahab\'s confession of faith' },
      { verse: 'Joshua 24:15', text: '"Choose you this day whom ye will serve... but as for me and my house, we will serve the LORD."' },
    ],
    deepPath: [
      { phase: '1. Joshua as a Type of Christ', description: 'Joshua (Yeshua) leads Israel into their inheritance; Jesus leads his people into their eternal inheritance. Compare Joshua 1 with Hebrews 4:8-11. The "rest" of Canaan points to greater rest.' },
      { phase: '2. Rahab and Grace', description: 'Read Joshua 2 and 6:22-25. Then read Hebrews 11:31 and James 2:25. What does Rahab\'s faith look like practically? How does grace override ethnic and moral boundaries?' },
      { phase: '3. The Holy War Question', description: 'Read Genesis 15:16, Deuteronomy 9:4-5, and Amos 2:9. God\'s judgment on Canaan was not arbitrary — it was 400 years of patience exhausted. Compare with Revelation\'s final judgment.' },
      { phase: '4. Cities of Refuge', description: 'Study Joshua 20. Then read Hebrews 6:18. The manslayer fleeing to the city of refuge is a picture of the sinner fleeing to Christ. The high priest\'s death released the refugee.' },
      { phase: '5. The Covenant at Shechem', description: 'Joshua 24 is structured as a covenant renewal. Note the challenge in 24:15. "Choose" is an active verb. Joshua\'s declaration is a model of personal and family commitment to God.' },
    ],
  },

  judges: {
    overview: `Judges chronicles one of the darkest periods in Israel's history — seven cycles of apostasy, oppression, repentance, and deliverance between the death of Joshua and the rise of the monarchy. The book's recurring refrain, "In those days there was no king in Israel: every man did that which was right in his own eyes" (21:25), captures the spiritual anarchy of the era. Yet even in Israel's worst failures, God raises up unlikely deliverers — a left-handed man, a woman, a man with a jawbone — demonstrating that salvation depends on God's grace, not human merit.`,
    howWritten: `Traditionally attributed to Samuel, c. 1045–1000 BC. The book uses a recurring literary formula for each judge: Israel sins → God sends oppressors → Israel cries out → God raises a judge → Israel has rest → the judge dies → Israel sins again. The 12 judges range from major figures (Gideon, Samson, Deborah) to minor ones mentioned in passing. The two appendices (17–21) are placed thematically rather than chronologically, showing the spiritual depth of Israel's degradation.`,
    structure: [
      'Introduction (1–2) — Incomplete conquest; the sin-cycle pattern introduced',
      'The Major Judges (3–16) — Othniel, Ehud, Deborah, Gideon, Jephthah, Samson',
      'Appendix 1 (17–18) — Micah\'s idol and the migration of Dan',
      'Appendix 2 (19–21) — The Levite\'s concubine; civil war against Benjamin',
    ],
    themes: [
      { title: 'The Sin Cycle', description: 'The seven-fold pattern (sin, servitude, supplication, salvation, silence, sin...) is both historical and pedagogical. It shows that human nature without divine transformation always returns to idolatry.' },
      { title: 'God\'s Sovereign Grace', description: 'God uses the most unlikely deliverers: Ehud (left-handed, seen as defective), Deborah (a woman in a patriarchal society), Gideon (threshing wheat in fear), Samson (a womanizer). Salvation is always of the LORD.' },
      { title: 'The Cost of Compromise', description: 'Israel\'s failure to fully drive out the Canaanites (1:27-36) directly caused their spiritual corruption (2:1-5). Partial obedience is disobedience. The very thing they tolerated became their tormentor.' },
      { title: 'The Need for a King', description: 'The book\'s conclusion (21:25) sets up the call for a king in 1 Samuel. But the deeper need is not a human king but the King of Kings — the Messianic hope runs through Judges.' },
      { title: 'Women and Unlikely Heroes', description: 'Deborah (ch. 4–5), Jael (ch. 4), and the unnamed woman who killed Abimelech (9:53) all demonstrate that God\'s Spirit is not limited by human social structures.' },
    ],
    highlights: [
      { verse: 'Judges 2:10', text: '"And also all that generation were gathered unto their fathers: and there arose another generation after them, which knew not the LORD, nor yet the works which he had done for Israel."' },
      { verse: 'Judges 6:12', text: '"And the angel of the LORD appeared unto him, and said unto him, The LORD is with thee, thou mighty man of valour."' },
      { verse: 'Judges 16:28', text: '"And Samson called unto the LORD, and said, O Lord GOD, remember me... that I may be at once avenged of the Philistines for my two eyes."' },
      { verse: 'Judges 21:25', text: '"In those days there was no king in Israel: every man did that which was right in his own eyes."' },
    ],
    deepPath: [
      { phase: '1. The Seven Cycles', description: 'Chart all seven apostasy cycles: which judge, which oppressor, how long. Notice the pattern degrades over time — the later judges are more flawed than earlier ones.' },
      { phase: '2. Gideon\'s Fleece', description: 'Read ch. 6–8. Gideon begins in fear, asks for signs, wins a great victory (300 men!), and ends in idolatry (8:27). What does his story teach about faith, courage, and the danger of success?' },
      { phase: '3. Samson Typology', description: 'Samson is the most complex judge — a Nazirite who violates every aspect of his vow, yet is used by God. Study his story in ch. 13–16. How does Hebrews 11:32 include him among heroes of faith?' },
      { phase: '4. Deborah and Song', description: 'Judges 5 is one of the oldest pieces of Hebrew poetry. Compare the prose account (ch. 4) with the poem (ch. 5). What details does the poem add? Why is Deborah\'s leadership significant?' },
      { phase: '5. The Downward Spiral', description: 'Read the appendices (17–21). These show Israel at its absolute worst — idolatry, sexual violence, civil war. This is the theological nadir before God\'s answer arrives: Samuel, then David.' },
    ],
  },

  ruth: {
    overview: `Ruth is a masterpiece of biblical narrative — four short chapters that trace the journey of a Moabite widow from destitution to becoming the great-grandmother of David and an ancestor of Jesus Christ. Set in the dark days of the Judges, it is a story of extraordinary loyalty (hesed — lovingkindness), providence, and redemption. Boaz as kinsman-redeemer (go'el) is one of the richest types of Christ in the OT.`,
    howWritten: `Authorship is attributed to Samuel, c. 1011–931 BC. The book is written in the finest classical Hebrew prose — spare, elegant, and deliberately structured. Its position in the Hebrew canon is between Judges and Samuel (its chronological setting) but it is also grouped with the Megilloth (five scrolls read at festivals) — Ruth is read at Pentecost/Feast of Weeks. The Levirate marriage custom (Deut 25:5-10) and the kinsman-redeemer institution (Lev 25) are the legal backdrop.`,
    structure: [
      'Naomi\'s Loss (1) — Famine, death of husband and sons; Ruth\'s loyalty; return to Bethlehem',
      'Ruth and Boaz (2) — Ruth gleans in Boaz\'s field; Boaz\'s kindness',
      'The Threshing Floor (3) — Naomi\'s plan; Ruth asks Boaz to be her kinsman-redeemer',
      'The Redemption (4) — Legal transaction at the gate; Boaz redeems; marriage; Obed born',
    ],
    themes: [
      { title: 'Hesed (Lovingkindness)', description: 'The Hebrew word hesed — covenant love, loyal loving-kindness — appears three times (1:8; 2:20; 3:10). Ruth\'s love for Naomi and Boaz\'s love for Ruth model the love God has for his people.' },
      { title: 'The Kinsman-Redeemer', description: 'The go\'el (redeemer) was a near relative who had the right and duty to redeem family members from poverty, slavery, or childlessness. Boaz\'s redemption of Ruth is the OT\'s fullest picture of Christ\'s redemptive work.' },
      { title: 'Providence', description: '"Her hap was to light on a part of the field belonging unto Boaz" (2:3) — what appears to be coincidence is divine orchestration. Ruth "happened" to glean in exactly the right field. God is silently sovereign.' },
      { title: 'Inclusion of the Nations', description: 'Ruth is a Moabite — from a nation born in incest (Gen 19) and excluded from Israel\'s assembly (Deut 23:3). Yet she is grafted into the covenant community and becomes part of the Messianic line. Grace overrides ethnicity.' },
      { title: 'Loyalty', description: 'Ruth 1:16-17 — "Whither thou goest, I will go; and where thou lodgest, I will lodge" — is one of the most beautiful expressions of loyalty in all literature. Ruth\'s commitment models covenant faithfulness.' },
    ],
    highlights: [
      { verse: 'Ruth 1:16-17', text: '"Whither thou goest, I will go; and where thou lodgest, I will lodge: thy people shall be my people, and thy God my God: Where thou diest, will I die, and there will I be buried."' },
      { verse: 'Ruth 2:12', text: '"The LORD recompense thy work, and a full reward be given thee of the LORD God of Israel, under whose wings thou art come to trust."' },
      { verse: 'Ruth 2:20', text: '"The LORD... hath not left off his kindness to the living and to the dead... The man is near of kin unto us, one of our next kinsmen."' },
      { verse: 'Ruth 4:17', text: '"And they called his name Obed: he is the father of Jesse, the father of David."' },
    ],
    deepPath: [
      { phase: '1. Hesed — Covenant Love', description: 'Find every use of hesed in Ruth (1:8; 2:20; 3:10). Then trace hesed through Psalms (136 repeats it 26 times) and into the NT as agape. This single word captures God\'s character.' },
      { phase: '2. Boaz as Type of Christ', description: 'The kinsman-redeemer (go\'el) must be: (1) a near relative, (2) willing, (3) able to pay the price. Apply each criterion to Jesus. Also study go\'el in Isaiah 41:14; 43:14; 44:6.' },
      { phase: '3. The Legal Transaction', description: 'Ruth 4:1-12: the sandal ceremony, the "nearer kinsman," the witnesses. This is covenant law in action. How does Galatians 3:13 ("Christ hath redeemed us from the curse of the law") mirror this scene?' },
      { phase: '4. Ruth\'s Place in Matthew\'s Genealogy', description: 'Ruth is one of four women named in Matthew 1\'s genealogy (1:5). All four have unusual circumstances. Why does Matthew include them? What is he showing about grace?' },
      { phase: '5. The Book\'s Literary Art', description: 'Notice the chiastic structure, the use of seven (a complete number) blessings pronounced in the book, the names (Naomi = pleasant; Mara = bitter; Boaz = strength), and the deliberate echoes of Genesis.' },
    ],
  },

  '1samuel': {
    overview: `1 Samuel records one of the most dramatic transitions in Israel's history — from judges to monarchy. Three towering figures dominate: Samuel (the last judge and first prophet of the new era), Saul (the king Israel demanded), and David (the king God chose). The book explores the corrupting nature of power, the difference between outward appearance and inward character ("for man looketh on the outward appearance, but the LORD looketh on the heart," 16:7), and the painful cost of disobedience.`,
    howWritten: `Written by Samuel (chapters 1–24) and completed by Nathan and Gad after Samuel's death, c. 930 BC. It forms one book with 2 Samuel in the Hebrew canon (Samuel/Kings). The book is organized around three main characters, not strict chronological events. It contains some of the finest character studies in all literature: Hannah's prayer, Samuel's call, David and Goliath, the friendship of David and Jonathan.`,
    structure: [
      'Samuel (1–7) — Hannah\'s prayer, Samuel\'s call, Ark captured, Philistines defeated',
      'Saul\'s Rise (8–15) — Israel demands a king; Saul anointed, fails, is rejected',
      'David\'s Rise (16–31) — David anointed, kills Goliath, flees Saul, Saul dies on Gilboa',
    ],
    themes: [
      { title: 'True vs. False Leadership', description: 'Saul is the king Israel wanted — tall, handsome, impressive. David is the king God chose — a shepherd boy. The contrast exposes the difference between human and divine criteria for leadership.' },
      { title: 'Obedience Over Sacrifice', description: '"To obey is better than sacrifice" (15:22) — Samuel\'s rebuke of Saul after partial obedience is one of the most important theological statements in the OT. God wants the heart, not ritual compliance.' },
      { title: 'The Davidic Covenant', description: '1 Samuel sets the stage for the covenant God makes with David in 2 Samuel 7 — the promise of an eternal dynasty pointing to the Messiah.' },
      { title: 'Prayer', description: 'Hannah\'s prayer (ch. 2) is a theological anthem quoted by Mary in the Magnificat (Luke 1:46-55). Prayer is the heartbeat of this book — Hannah, Samuel, David all pray their way through crises.' },
      { title: 'The Spirit of God', description: 'The Spirit comes on Saul (10:10) and later departs from him (16:14). The Spirit comes on David (16:13). The contrast between Spirit-filled and Spirit-abandoned leadership is stark.' },
    ],
    highlights: [
      { verse: '1 Samuel 2:2', text: '"There is none holy as the LORD: for there is none beside thee: neither is there any rock like our God." — Hannah\'s prayer' },
      { verse: '1 Samuel 15:22', text: '"Hath the LORD as great delight in burnt offerings and sacrifices, as in obeying the voice of the LORD? Behold, to obey is better than sacrifice."' },
      { verse: '1 Samuel 16:7', text: '"The LORD seeth not as man seeth; for man looketh on the outward appearance, but the LORD looketh on the heart."' },
      { verse: '1 Samuel 17:47', text: '"The battle is the LORD\'s, and he will give you into our hands." — David before Goliath' },
    ],
    deepPath: [
      { phase: '1. Hannah\'s Prayer', description: 'Read 1 Samuel 2:1-10 alongside Luke 1:46-55. Mary knew Hannah\'s prayer deeply enough to echo it. What does Hannah\'s theology say about power, the proud, and the humble?' },
      { phase: '2. Samuel\'s Call', description: 'Read 1 Samuel 3. "Speak, LORD, for thy servant heareth" is the posture of all true prophets. How does Samuel contrast with Eli? What does availability to God look like?' },
      { phase: '3. Saul\'s Decline', description: 'Chart Saul\'s five failures: unauthorized sacrifice (13), sparing Agag (15), seeking the witch of Endor (28), and others. Each act of disobedience is smaller to him but larger to God. Trace the pattern of self-justification.' },
      { phase: '4. David and Goliath', description: 'Read 1 Samuel 17 closely. David refuses Saul\'s armor — he can only fight as himself, with God. What does this say about spiritual warfare? Compare with Ephesians 6:10-18.' },
      { phase: '5. Jonathan and David', description: 'Their covenant friendship (18–20) is one of the Bible\'s greatest stories of brotherly love. What does Jonathan sacrifice for David? How does this model self-giving love?' },
    ],
  },

  '2samuel': {
    overview: `2 Samuel is the story of David's reign — its heights and its depths. David conquers Jerusalem, brings the Ark there, and receives the great Davidic Covenant (ch. 7). But the second half of the book traces the devastating consequences of his sin with Bathsheba and murder of Uriah — betrayal, rape, murder, rebellion within his own family. It is one of the Bible's most honest portraits of a godly man: a man after God's own heart who commits terrible sin, repents deeply, and lives with the consequences.`,
    howWritten: `Written by Nathan and Gad, completed c. 930 BC. Forms one book with 1 Samuel in the Hebrew canon. The book has a clear theological hinge at chapter 11 — everything before is ascent, everything after is descent, all flowing from David's sin. The lament of David over Saul and Jonathan (ch. 1) and his lament over Absalom (ch. 18) are among the most moving pieces of poetry in Scripture.`,
    structure: [
      'David\'s Triumph (1–10) — Becomes king; captures Jerusalem; Davidic Covenant; defeats enemies',
      'David\'s Sin (11) — Bathsheba; Uriah murdered; the turning point',
      'David\'s Consequences (12–20) — Nathan\'s rebuke; Amnon and Tamar; Absalom\'s rebellion',
      'Appendix (21–24) — Famine, victories, Psalms, the census and its judgment',
    ],
    themes: [
      { title: 'The Davidic Covenant', description: '2 Samuel 7 is the theological center of the book — God promises David an eternal throne and dynasty: "thy throne shall be established for ever." This covenant is the basis of the entire Messianic expectation in the OT.' },
      { title: 'Sin and Its Consequences', description: 'David\'s sin with Bathsheba and murder of Uriah (ch. 11) triggers a chain of tragic consequences that Nathan prophesies: "the sword shall never depart from thine house" (12:10). The consequences outlast the forgiveness.' },
      { title: 'Repentance', description: 'Psalm 51 (written after Nathan\'s confrontation) is the Bible\'s greatest model of genuine repentance: acknowledgment of sin, appeal to God\'s character, a broken and contrite heart.' },
      { title: 'Loyal Love (Hesed)', description: 'David\'s kindness to Mephibosheth (ch. 9) — showing grace to Jonathan\'s crippled son for covenant love\'s sake — is a picture of God\'s grace to the spiritually crippled for Christ\'s sake.' },
      { title: 'Leadership and Its Costs', description: 'David\'s failures as a father (passivity with Amnon, indulgence of Absalom) and as a king (the census) show that even great leaders have blind spots. Leadership without accountability is dangerous.' },
    ],
    highlights: [
      { verse: '2 Samuel 7:16', text: '"And thine house and thy kingdom shall be established for ever before thee: thy throne shall be established for ever." — The Davidic Covenant' },
      { verse: '2 Samuel 11:1', text: '"And it came to pass, after the year was expired, at the time when kings go forth to battle... that David tarried still at Jerusalem." — Idleness precedes temptation.' },
      { verse: '2 Samuel 12:7', text: '"And Nathan said to David, Thou art the man."' },
      { verse: '2 Samuel 22:3', text: '"The God of my rock; in him will I trust: he is my shield, and the horn of my salvation, my high tower, and my refuge, my saviour."' },
    ],
    deepPath: [
      { phase: '1. The Davidic Covenant', description: 'Read 2 Samuel 7 in full. Then trace its echoes: Psalm 89, Isaiah 9:6-7, Luke 1:32-33, Acts 2:30-31, Revelation 22:16. This covenant is the backbone of Messianic prophecy.' },
      { phase: '2. Nathan\'s Parable', description: 'Read 2 Samuel 12:1-15. Nathan\'s confrontation is a masterclass in prophetic courage and pastoral wisdom. David condemns himself before Nathan reveals the application. How does truth come home through story?' },
      { phase: '3. Psalm 51 and Repentance', description: 'Read 2 Samuel 11–12 and then Psalm 51 together. What does genuine repentance look like? Note: David doesn\'t primarily ask for forgiveness — he asks for a clean heart (v.10).' },
      { phase: '4. Mephibosheth — Grace Illustrated', description: 'Read 2 Samuel 9. Then apply it: we are all spiritually "lame in both feet" (like Mephibosheth), brought to the king\'s table not by our merit but by covenant love (hesed). This is the Gospel in miniature.' },
      { phase: '5. Absalom\'s Rebellion', description: 'Read ch. 15–18. David flees Jerusalem weeping. Absalom enters David\'s wives. David forbids anyone to harm Absalom. When Absalom dies, David weeps: "O my son Absalom!" — the love of a father for a rebellious son.' },
    ],
  },

  '1kings': {
    overview: `1 Kings spans roughly 120 years of Israelite history — from Solomon's brilliant reign (the golden age of the united kingdom) to its catastrophic division after his death, and then 80 years of the divided kingdom, climaxing with the prophetic ministry of Elijah against the worst king Israel ever had: Ahab. It is a theology of kingship: the kings are evaluated not by military success or economic prosperity but by one criterion — did they follow God faithfully?`,
    howWritten: `Traditionally attributed to Jeremiah, compiled c. 550 BC during the Babylonian exile. The compiler drew from "the book of the acts of Solomon" (11:41), "the book of the chronicles of the kings of Israel," and "the book of the chronicles of the kings of Judah." The book is heavily theological — the "Deuteronomistic history" evaluates each king by Deuteronomy's standards of covenant faithfulness.`,
    structure: [
      'Solomon\'s Reign (1–11) — Coronation; temple built and dedicated; wealth and wisdom; apostasy',
      'The Kingdom Divided (12) — Rehoboam\'s folly; Jeroboam leads Israel\'s rebellion',
      'The Northern Kings (13–16) — Jeroboam through Omri; idolatry escalates',
      'Elijah vs. Ahab (17–22) — Drought; Mt Carmel; flight to Horeb; Naboth\'s vineyard; Ahab\'s death',
    ],
    themes: [
      { title: 'Wisdom and Its Limits', description: 'Solomon is given unparalleled wisdom (3:12) yet ultimately "his wives turned away his heart after other gods" (11:4). Wisdom without faithfulness cannot save. The beginning of wisdom is the fear of the LORD.' },
      { title: 'The Temple as God\'s Presence', description: 'Solomon\'s temple (ch. 5–8) is the architectural answer to the Tabernacle — God\'s presence dwelling with his people. Solomon\'s dedicatory prayer (ch. 8) is one of the great prayers of the OT.' },
      { title: 'Covenant Consequences', description: 'The kingdom divides (ch. 12) as direct judgment for Solomon\'s idolatry (11:9-13). God is faithful to his covenant — both its promises and its warnings.' },
      { title: 'Prophetic Courage', description: 'Elijah stands alone against 450 prophets of Baal on Mount Carmel (ch. 18). Then he flees to Horeb in despair (ch. 19). His story models both the glory and vulnerability of prophetic ministry.' },
      { title: 'Justice and Land', description: 'Naboth\'s vineyard (ch. 21) — Ahab covets it, Jezebel murders Naboth for it. Elijah pronounces judgment. God cares about the abuse of power and the theft of the poor\'s inheritance.' },
    ],
    highlights: [
      { verse: '1 Kings 3:9', text: '"Give therefore thy servant an understanding heart to judge thy people, that I may discern between good and bad: for who is able to judge this thy so great a people?" — Solomon\'s request' },
      { verse: '1 Kings 8:27', text: '"But will God indeed dwell on the earth? behold, the heaven and heaven of heavens cannot contain thee; how much less this house that I have builded?"' },
      { verse: '1 Kings 18:21', text: '"And Elijah came unto all the people, and said, How long halt ye between two opinions? if the LORD be God, follow him: but if Baal, then follow him."' },
      { verse: '1 Kings 19:12', text: '"And after the fire a still small voice." — God to Elijah at Horeb' },
    ],
    deepPath: [
      { phase: '1. Solomon\'s Temple', description: 'Read 1 Kings 5–8. Measure the temple dimensions, study the furniture placements, and read Solomon\'s prayer (ch. 8). Then read John 2:19-21 and Revelation 21:22. The temple is fulfilled in Christ.' },
      { phase: '2. Solomon\'s Downfall', description: 'Read 1 Kings 11:1-13. Deuteronomy 17:14-20 warned kings not to multiply wives, horses, or gold — Solomon did all three. How does comfort and success become the greatest spiritual danger?' },
      { phase: '3. Elijah on Carmel', description: 'Read 1 Kings 18. The contest is between YHWH and Baal (storm god). Fire falls, the people fall on their faces: "The LORD, he is the God." Then the rain comes. Study James 5:17-18 alongside this.' },
      { phase: '4. The Still Small Voice', description: 'After his greatest victory, Elijah collapses in fear (1 Kings 19). God\'s response: food, sleep, a gentle whisper. How does God\'s care for a depressed prophet speak to ministry burnout?' },
      { phase: '5. Ahab as Anti-Model', description: 'Ahab is evaluated as worse than all before him (16:30). Chart his sins: marrying Jezebel, introducing Baal worship, Naboth\'s murder. Then read his surprising partial repentance (21:29) — God\'s mercy even for the worst.' },
    ],
  },

  '2kings': {
    overview: `2 Kings continues where 1 Kings ends, tracing the history of the divided kingdoms until both fall: Israel to Assyria in 722 BC (ch. 17) and Judah to Babylon in 586 BC (ch. 25). The book is a tragic fulfillment of the covenant curses of Deuteronomy 28. Yet even in the darkest hours, God's faithfulness shines through reforming kings like Hezekiah and Josiah, and through the ministries of Elisha and Isaiah.`,
    howWritten: `Compiled along with 1 Kings by Jeremiah or a Deuteronomistic editor, c. 550 BC in Babylon. The book's structure mirrors the same evaluative formula for each king. Elisha's ministry (ch. 2–13) dominates the early chapters, featuring twice as many miracles as Elijah. The fall of Israel (ch. 17) is given a theological explanation — they rejected the covenant of YHWH. The fall of Jerusalem (ch. 25) ends with a glimmer of hope: Jehoiachin is released from prison.`,
    structure: [
      'Elisha\'s Ministry (1–13) — Elisha succeeds Elijah; miracles; the Shunammite; Naaman healed',
      'Decline of Both Kingdoms (14–17) — Various kings; Israel falls to Assyria (722 BC)',
      'Hezekiah and Josiah (18–23) — Two great reforming kings; Isaiah\'s ministry',
      'Fall of Jerusalem (24–25) — Nebuchadnezzar; the temple burned; exile to Babylon',
    ],
    themes: [
      { title: 'Covenant Judgment', description: '2 Kings 17:7-23 gives the theological explanation for Israel\'s exile: they abandoned YHWH\'s covenant, served other gods, and refused to listen to the prophets. Judgment is not capricious — it is covenantal.' },
      { title: 'Prophetic Ministry', description: 'Elisha\'s miracles (raising the dead, purifying water, multiplying oil, healing Naaman) are even more numerous than Elijah\'s and anticipate the miracles of Jesus. The NT explicitly compares them (Luke 4:27).' },
      { title: 'Revival Is Possible but Insufficient', description: 'Hezekiah (ch. 18–20) and Josiah (ch. 22–23) bring genuine, sweeping reforms — but they cannot undo the accumulated sin of their predecessors. Individual reformation is needed, not just national reform.' },
      { title: 'The Remnant', description: 'Even after the exile, God preserves a remnant. Jehoiachin is released from prison (25:27-30) — a seed of hope that the Davidic line survives. This faint hope will grow into the New Testament.' },
      { title: 'Prayer Changes Things', description: 'Hezekiah prays when Assyria threatens (19:14-19) — God sends one angel to destroy 185,000 soldiers. He prays when dying (20:1-6) — God gives him 15 more years. Prayer is not optional.' },
    ],
    highlights: [
      { verse: '2 Kings 2:11', text: '"And it came to pass, as they still went on, and talked, that, behold, there appeared a chariot of fire, and horses of fire... and Elijah went up by a whirlwind into heaven."' },
      { verse: '2 Kings 5:13', text: '"And his servants came near, and spake unto him, and said, My father, if the prophet had bid thee do some great thing, wouldest thou not have done it? how much rather then, when he saith to thee, Wash, and be clean?"' },
      { verse: '2 Kings 17:13', text: '"Yet the LORD testified against Israel, and against Judah, by all the prophets, and by all the seers, saying, Turn ye from your evil ways."' },
      { verse: '2 Kings 19:15', text: '"And Hezekiah prayed before the LORD, and said, O LORD God of Israel, which dwellest between the cherubims, thou art the God, even thou alone."' },
    ],
    deepPath: [
      { phase: '1. Elijah to Elisha', description: 'Read 2 Kings 2. The double portion of Elisha\'s request is not greed — it is the legal right of the firstborn heir (Deut 21:17). He asks to fully inherit Elijah\'s prophetic mantle. Compare with Luke 24:49 (the Spirit poured out).' },
      { phase: '2. Naaman\'s Healing', description: 'Read 2 Kings 5 alongside Luke 4:27. Naaman — a Gentile, a soldier of Israel\'s enemy — is healed when an Israelite general is not. Jesus uses this to confront nationalist religion. Simple obedience (wash seven times) is the key.' },
      { phase: '3. The Fall of Israel (2 Kings 17)', description: 'Read the theological autopsy in 17:7-23 carefully. List the sins enumerated. This passage is the OT\'s clearest statement of why judgment falls. How does it apply to nations today?' },
      { phase: '4. Hezekiah and the Scroll', description: 'Read 2 Kings 18–20 and Isaiah 36–39 (parallel accounts). Note Hezekiah\'s prayer with the threatening letter (19:14). What does spreading the letter before God teach about prayer?' },
      { phase: '5. Josiah\'s Discovery', description: 'Read 2 Kings 22. Josiah\'s workers find the Book of the Law — apparently lost for generations. He tears his clothes and repents. What does it mean when a generation rediscovers the Word of God?' },
    ],
  },
};

Object.assign(BOOK_STUDIES, {
  '1chronicles': {
    overview: `1 Chronicles retells Israel's history from Adam to David from a priestly perspective, written for the post-exilic community returning from Babylon. Unlike Samuel-Kings (which focuses on political history), Chronicles focuses on worship, the Levitical priesthood, and the temple. The Chronicler's goal is to give the restored community an identity: you are the covenant people of God, heirs of David's promise, called to rebuild the worship of YHWH.`,
    howWritten: `Written by Ezra the priest (the same person who wrote the book of Ezra), c. 450–425 BC. The book opens with nine chapters of genealogies — seemingly dry, but they are a theological statement: God has preserved a people from Adam to the returnees. The genealogies are selective, not exhaustive, focused on the Davidic and Levitical lines. Chronicles largely omits David's failures (Bathsheba, Absalom) — not because they didn't happen, but because the Chronicler's purpose is encouragement, not moral critique.`,
    structure: [
      'Genealogies (1–9) — Adam to the returnees; Davidic and Levitical lines emphasized',
      'Saul\'s Death (10) — Sets the stage for David',
      'David\'s Reign (11–29) — Jerusalem captured; Ark brought; temple preparations; David\'s last words',
    ],
    themes: [
      { title: 'Worship and the Temple', description: 'David\'s chief concern in Chronicles is not military conquest but preparing for the temple. He gathers materials, organizes the Levites, and writes temple music. The temple is the meeting place between God and his people.' },
      { title: 'The Davidic Line', description: 'Chronicles repeatedly emphasizes the promise to David (17:7-14). For the returnees from exile, the Davidic covenant is still in force — the Messiah is still coming.' },
      { title: 'Seeking God', description: '"Seek the LORD" appears repeatedly as the key criterion for a good king. Those who seek God prosper; those who forsake him fall. This is the book\'s practical theology.' },
      { title: 'Priestly Identity', description: 'The Levites, musicians, gatekeepers, and temple servants receive detailed attention. Worship is not casual or improvised — it is ordered, beautiful, and belongs to those set apart for it.' },
    ],
    highlights: [
      { verse: '1 Chronicles 16:11', text: '"Seek the LORD and his strength, seek his face continually."' },
      { verse: '1 Chronicles 17:14', text: '"But I will settle him in mine house and in my kingdom for ever: and his throne shall be established for evermore." — The Davidic Covenant restated' },
      { verse: '1 Chronicles 28:9', text: '"And thou, Solomon my son, know thou the God of thy father, and serve him with a perfect heart and with a willing mind: for the LORD searcheth all hearts."' },
      { verse: '1 Chronicles 29:11', text: '"Thine, O LORD, is the greatness, and the power, and the glory, and the victory, and the majesty: for all that is in the heaven and in the earth is thine."' },
    ],
    deepPath: [
      { phase: '1. The Genealogies as Theology', description: 'Read 1:1-4 (Adam to Noah) and 3:1-24 (Davidic line extended to post-exile). The genealogies say: God is tracking history. No exile breaks the covenant line.' },
      { phase: '2. David\'s Preparation for the Temple', description: 'Read chapters 22–28. David prepares what Solomon will build. The NT applies this: David (a man of war/blood) could not build it, but prepared for the one who would bring peace — a type of Christ.' },
      { phase: '3. David\'s Final Prayer', description: 'Read 29:10-19. This prayer is a model of doxology and humility. "All things come of thee, and of thine own have we given thee" (29:14). Everything we give God was first his.' },
      { phase: '4. Compare with Samuel-Kings', description: 'Notice what Chronicles omits: David\'s sin, Absalom\'s rebellion, Solomon\'s foreign wives. Why? Chronicles is not propaganda — it\'s pastoral encouragement for a discouraged community.' },
      { phase: '5. The Musicians', description: 'Read 25:1-8. The musicians prophesy with harps and lyres. Worship and prophecy are inseparable. Asaph, Heman, and Jeduthun are the worship leaders whose names appear on Psalms.' },
    ],
  },

  '2chronicles': {
    overview: `2 Chronicles covers Solomon's reign and the entire history of Judah's kings from Rehoboam to the exile and the decree of Cyrus. Unlike 2 Kings, it largely ignores the Northern Kingdom (Israel) — the Chronicler's focus is on the legitimate Davidic kings of Judah and the Jerusalem temple. The book ends with Cyrus of Persia decreeing the return of the exiles — an ending full of hope that mirrors its opening of Solomon's glory.`,
    howWritten: `Ezra, c. 450–425 BC. The Chronicler is consistent in his theological framework: kings who seek God prosper; kings who forsake God fall. This is illustrated repeatedly through "immediate retribution" — a king's spiritual state directly correlates with their circumstances. The book contains a famous verse quoted in countless revivals: "If my people, which are called by my name, shall humble themselves, and pray, and seek my face, and turn from their wicked ways; then will I hear from heaven" (7:14).`,
    structure: [
      'Solomon\'s Reign (1–9) — Wisdom; temple built and dedicated; Queen of Sheba; death',
      'Rehoboam to Uzziah (10–27) — Division; reforms and failures; prophets active',
      'Hezekiah\'s Revival (28–32) — Great Passover; Sennacherib; Hezekiah\'s prayer',
      'Manasseh to the Exile (33–36) — Manasseh\'s sin and repentance; Josiah\'s reform; fall of Jerusalem; Cyrus\'s decree',
    ],
    themes: [
      { title: 'Prayer and Revival', description: 'The great revivals in Chronicles (Asa, Jehoshaphat, Hezekiah, Josiah) all begin with prayer and seeking God. 7:14 is the Bible\'s foundational promise for national revival.' },
      { title: 'The Temple as Focal Point', description: 'Every king is evaluated partly by their relationship to the temple. Repairing it, honoring it, and maintaining its worship is central to covenant faithfulness.' },
      { title: 'Immediate Retribution', description: 'The Chronicler emphasizes that spiritual choices have immediate consequences — more than Samuel-Kings. This is a pastoral choice: for the returnees, there is always hope if they return to God now.' },
      { title: 'Manasseh\'s Repentance', description: 'Manasseh, the worst king of Judah (53 years of evil), repents in exile and is restored (33:12-13). This is the most surprising conversion in the OT. No one is beyond God\'s reach.' },
      { title: 'The Persistence of Grace', description: 'Despite multiple waves of apostasy, God repeatedly sends prophets, raises up reformers, and defers judgment. His patience is extraordinary — he sends messenger after messenger (36:15-16) before judgment falls.' },
    ],
    highlights: [
      { verse: '2 Chronicles 7:14', text: '"If my people, which are called by my name, shall humble themselves, and pray, and seek my face, and turn from their wicked ways; then will I hear from heaven, and will forgive their sin, and will heal their land."' },
      { verse: '2 Chronicles 16:9', text: '"For the eyes of the LORD run to and fro throughout the whole earth, to shew himself strong in the behalf of them whose heart is perfect toward him."' },
      { verse: '2 Chronicles 20:17', text: '"Ye shall not need to fight in this battle: set yourselves, stand ye still, and see the salvation of the LORD with you."' },
      { verse: '2 Chronicles 36:23', text: '"Thus saith Cyrus king of Persia, All the kingdoms of the earth hath the LORD God of heaven given me; and he hath charged me to build him an house in Jerusalem."' },
    ],
    deepPath: [
      { phase: '1. Solomon\'s Dedicatory Prayer', description: 'Read 2 Chronicles 6–7. What does Solomon ask God to do when his people sin and pray toward the temple? Then read the NT: Jesus\' body is the new temple (John 2:21). Where do we pray now?' },
      { phase: '2. Seven Revivals', description: 'Identify the seven revivals in Chronicles: Asa (15), Jehoshaphat (20), Joash (23-24), Hezekiah (29-31), Manasseh (33), Josiah (34-35). What are the common elements? Prayer, the Word, public repentance.' },
      { phase: '3. Jehoshaphat\'s Battle', description: 'Read 2 Chronicles 20. Jehoshaphat appoints singers to lead the army, praising God before the battle begins. The enemy destroys themselves. What does "worship as warfare" mean for the Christian life?' },
      { phase: '4. Manasseh\'s Repentance', description: 'Read 33:10-17. Manasseh was responsible for filling Jerusalem with innocent blood (2 Kings 21:16) yet he repented and was restored. Read Luke 15 alongside this. How far does God\'s mercy reach?' },
      { phase: '5. The Exile and the Cyrus Decree', description: 'Read 36:14-23. The Chronicler ends with Cyrus\' decree — a pagan king fulfilling the prophecy of Isaiah 44:28 (written 150 years earlier). History is God\'s story.' },
    ],
  },

  ezra: {
    overview: `Ezra records the first two waves of Jewish exiles returning from Babylon to Jerusalem under Zerubbabel (538 BC) and Ezra (458 BC). The first return focuses on rebuilding the temple (completed 516 BC despite fierce opposition). The second focuses on spiritual reform — Ezra the scribe brings the Law and leads a sweeping purification of the community. The book models what genuine spiritual renewal looks like: returning to the Word of God, confessing sin, and separating from that which corrupts.`,
    howWritten: `Written by Ezra the priest and scribe, c. 440 BC. The book was originally one book with Nehemiah in the Hebrew canon. Ezra introduces himself in the third person initially (ch. 1–6) and then shifts to first person ("Ezra memoirs," 7:27–9:15) for the most personal material. The book contains official Persian royal decrees and letters in Aramaic, lending historical authenticity. Ezra is described as "a ready scribe in the law of Moses" (7:6) — a model Bible teacher.`,
    structure: [
      'First Return (1–6) — Cyrus\'s decree; Zerubbabel leads 50,000 home; temple foundations laid; opposition; temple completed (516 BC)',
      'Second Return (7–10) — Ezra\'s credentials; 1,754 men return with him; spiritual crisis over mixed marriages; repentance and reform',
    ],
    themes: [
      { title: 'The Sovereign Hand of God', description: '"The hand of the LORD my God was upon me" (7:6, 9, 28; 8:18, 22, 31) — Ezra attributes everything to God\'s directing hand. Even a pagan Persian king (Cyrus) is God\'s instrument.' },
      { title: 'The Word of God as Foundation', description: 'Ezra\'s reformation is word-centered: he "had prepared his heart to seek the law of the LORD, and to do it, and to teach in Israel statutes and judgments" (7:10). The sequence: study, obey, then teach.' },
      { title: 'Opposition Does Not Stop God', description: 'The rebuilding faces fierce political opposition (ch. 4–5) and is delayed for 16 years — yet the temple is completed exactly as God promised through Haggai and Zechariah.' },
      { title: 'Intermarriage and Spiritual Purity', description: 'The crisis of mixed marriages (ch. 9–10) is not racial prejudice but spiritual protection: the covenant community was being absorbed into the surrounding idolatrous culture. Boundaries matter for holiness.' },
    ],
    highlights: [
      { verse: 'Ezra 1:1', text: '"Now in the first year of Cyrus king of Persia, that the word of the LORD by the mouth of Jeremiah might be fulfilled, the LORD stirred up the spirit of Cyrus king of Persia."' },
      { verse: 'Ezra 7:10', text: '"For Ezra had prepared his heart to seek the law of the LORD, and to do it, and to teach in Israel statutes and judgments."' },
      { verse: 'Ezra 8:21', text: '"Then I proclaimed a fast there, at the river of Ahava, that we might afflict ourselves before our God, to seek of him a right way for us."' },
      { verse: 'Ezra 9:6', text: '"And said, O my God, I am ashamed and blush to lift up my face to thee, my God: for our iniquities are increased over our head."' },
    ],
    deepPath: [
      { phase: '1. Ezra\'s Self-Description', description: 'Read 7:6-10. Ezra identifies himself as a "ready scribe in the law of Moses." The order in 7:10 is crucial: seek → do → teach. You cannot rightly teach what you don\'t first live.' },
      { phase: '2. Cyrus as God\'s Instrument', description: 'Read Ezra 1:1-4 and then Isaiah 44:28–45:4 (written ~150 years before Cyrus). God named Cyrus before he was born. How does this affect your view of political history and God\'s sovereignty?' },
      { phase: '3. Ezra\'s Intercessory Prayer', description: 'Read Ezra 9:5-15. Ezra is not personally guilty of intermarriage but he prays as if he is: "we have sinned." This is identificational repentance — the model of Daniel, Nehemiah, and ultimately Jesus.' },
      { phase: '4. The Temple Completion', description: 'Read Ezra 6:14-22. The temple is completed and they celebrate Passover. The returnees keep Passover for the first time since Solomon. What does it mean to re-establish the ordinances of worship after a long gap?' },
      { phase: '5. Opposition Strategy', description: 'Read Ezra 4. The opponents use: discouragement (4:4), intimidation (4:4), bribery of counselors (4:5), legal accusations (4:6-16). These are still the tactics used against kingdom work today.' },
    ],
  },

  nehemiah: {
    overview: `Nehemiah is the story of prayer, leadership, and perseverance. A Jewish cupbearer to the Persian king Artaxerxes, Nehemiah receives news that Jerusalem's walls are still broken after 90 years. He prays, plans, receives permission, leads 50,000 people, rebuilds the walls in 52 days despite fierce opposition — then leads spiritual reformation alongside Ezra. The book is the practical manual for leadership: prayer first, then planning, then perseverance, then community renewal.`,
    howWritten: `Written by Nehemiah as a personal memoir (first person throughout), c. 445–420 BC. Nehemiah writes with the directness of a leader and the intimacy of a prayer journal — his "arrow prayers" (short, urgent prayers shot to God in the middle of conversations) are scattered throughout. The book also contains Ezra's reading of the Law (ch. 8), one of the Bible's most detailed descriptions of a Bible teaching event.`,
    structure: [
      'Nehemiah\'s Commission (1–2) — News; prayer; request to Artaxerxes; journey; night inspection',
      'Building the Wall (3–7) — Workers listed; opposition and response; wall completed in 52 days',
      'Spiritual Revival (8–10) — Ezra reads the Law; people weep; Feast of Tabernacles; confession',
      'Settlement and Dedication (11–13) — Repopulating Jerusalem; wall dedicated; Nehemiah\'s reforms',
    ],
    themes: [
      { title: 'Prayer and Action', description: 'Nehemiah prays before he acts: he prays four months before speaking to the king (1:4–2:1); he shoots arrow prayers in the middle of conversations (2:4; 4:9; 5:19; 6:9). Prayer is not an alternative to action — it is the engine of action.' },
      { title: 'Perseverance Under Opposition', description: 'Sanballat and Tobiah use every tactic to stop the work: ridicule (4:3), conspiracy (4:8), discouragement (4:10), compromise (6:2), slander (6:6), fake prophecy (6:12). Nehemiah answers each one without leaving the wall.' },
      { title: 'Community Leadership', description: 'Nehemiah rebuilds not as a contractor but as a leader who mobilizes a whole community. Each family builds the section of wall in front of their own house (ch. 3). Everyone has a part; everyone has ownership.' },
      { title: 'The Word of God and Weeping', description: 'When Ezra reads the Law (ch. 8), the people weep because they understand what they hear. Nehemiah\'s famous instruction: "the joy of the LORD is your strength" (8:10) — joy, not guilt, is the foundation of obedience.' },
      { title: 'Godly Grief over Sin', description: 'Nehemiah\'s intercessory prayers (1:4-11; 9:5-37) are models of honest, humble, covenant-based confession. He identifies with the sins of his ancestors and pleads God\'s covenant promises.' },
    ],
    highlights: [
      { verse: 'Nehemiah 1:4', text: '"And it came to pass, when I heard these words, that I sat down and wept, and mourned certain days, and fasted, and prayed before the God of heaven."' },
      { verse: 'Nehemiah 2:4-5', text: '"Then the king said unto me, For what dost thou make request? So I prayed to the God of heaven. And I said unto the king..."' },
      { verse: 'Nehemiah 6:3', text: '"And I sent messengers unto them, saying, I am doing a great work, so that I cannot come down: why should the work cease, whilst I leave it, and come down to you?"' },
      { verse: 'Nehemiah 8:10', text: '"The joy of the LORD is your strength."' },
    ],
    deepPath: [
      { phase: '1. Nehemiah\'s Prayer (ch. 1)', description: 'Read Nehemiah 1 as a prayer model. Note the structure: he fasts and weeps; praises God\'s character; confesses sin (his own and his people\'s); reminds God of his promise (Deut 30:4); makes his specific request. Apply this structure.' },
      { phase: '2. The Sanballat Tactics', description: 'Read chapters 4–6. List every tactic the opposition used. How did Nehemiah respond to each one? Which tactics does the enemy still use today against God\'s work?' },
      { phase: '3. The Genealogical Register', description: 'Chapter 3 lists who built what section of the wall. Why is this in Scripture? God remembers names and acts of service. Compare with Revelation 3:5; 20:12. Nothing done for God is forgotten.' },
      { phase: '4. Ezra\'s Reading of the Law', description: 'Read Nehemiah 8 carefully. Ezra stands on a wooden platform; Levites help people understand; the people weep; they celebrate. This is a model of genuine Bible teaching. What made it so powerful?' },
      { phase: '5. "I Am Doing a Great Work"', description: 'Nehemiah 6:3 is one of the great statements of focused purpose in all Scripture. He refuses to be distracted from kingdom priorities. What "great work" has God given you, and what distractions pull you down from it?' },
    ],
  },

  esther: {
    overview: `Esther is one of only two books in the Bible that never explicitly mention the name of God (along with Song of Solomon). Yet the entire book is saturated with his providence. Set in the Persian court of Susa under Xerxes (Ahasuerus), it tells how a Jewish orphan girl becomes queen and saves her people from a genocide plot by the wicked Haman. "For such a time as this" (4:14) has become one of the most quoted phrases in the Bible for providential calling.`,
    howWritten: `Authorship is traditionally attributed to Mordecai, c. 483–473 BC. The book is read aloud in its entirety at the Jewish feast of Purim each year — the congregation boos at every mention of Haman's name. The book is masterfully written as a comedic reversal: every plot of the villain is turned against himself. The name "Esther" possibly comes from the Hebrew "to hide" (the hiddenness of God) or from the Persian/Babylonian word for "star."`,
    structure: [
      'Esther Becomes Queen (1–2) — Vashti deposed; Esther chosen; Mordecai discovers plot',
      'Haman\'s Conspiracy (3–5) — Mordecai refuses to bow; Haman plots genocide; Esther approaches king',
      'The Great Reversal (6–8) — Haman honoring Mordecai; Esther\'s banquet; Haman hanged on his own gallows',
      'Deliverance and Purim (9–10) — Jewish self-defense; Purim feast established; Mordecai\'s greatness',
    ],
    themes: [
      { title: 'Providence', description: 'God\'s name is absent but his fingerprints are everywhere: Esther "happens" to be chosen queen; Mordecai "happens" to overhear the assassination plot; the king "happens" to have insomnia the night before Mordecai\'s honor. Providence is God behind the scenes.' },
      { title: 'Courage in the Moment', description: '"For if thou altogether holdest thy peace at this time, then shall there enlargement and deliverance arise to the Jews from another place; but thou and thy father\'s house shall be destroyed: and who knoweth whether thou art come to the kingdom for such a time as this?" (4:14) — Mordecai\'s challenge to Esther is a paradigm for courageous calling.' },
      { title: 'The Great Reversal', description: 'In Esther, everything that Haman plots for Israel\'s destruction turns back on him: the gallows he builds for Mordecai hangs Haman; the honor he plans for himself is given to Mordecai. This reversal is a picture of the Cross (Col 2:15).' },
      { title: 'Fasting and Prayer', description: 'Though God is not mentioned, Esther calls a three-day fast before approaching the king (4:16). The implicit theology: serious intercession precedes serious action.' },
    ],
    highlights: [
      { verse: 'Esther 4:14', text: '"For if thou altogether holdest thy peace at this time, then shall there enlargement and deliverance arise to the Jews from another place... and who knoweth whether thou art come to the kingdom for such a time as this?"' },
      { verse: 'Esther 4:16', text: '"Go, gather together all the Jews that are present in Shushan, and fast ye for me, and neither eat nor drink three days, night or day: I also and my maidens will fast likewise; and so will I go in unto the king, which is not according to the law: and if I perish, I perish."' },
      { verse: 'Esther 6:3', text: '"And the king said, What honour and dignity hath been done to Mordecai for this? Then said the king\'s servants that ministered unto him, There is nothing done for him."' },
      { verse: 'Esther 9:22', text: '"...days of feasting and joy, and of sending portions one to another, and gifts to the poor."' },
    ],
    deepPath: [
      { phase: '1. The Hidden God', description: 'Read Esther 1–2 and note every "coincidence." Then read it again and name God\'s action at each point. Practice seeing providence in your own life\'s "coincidences."' },
      { phase: '2. "For Such a Time as This"', description: 'Study Esther 4:14. The Hebrew implies both: the opportunity and the danger. Mordecai says deliverance will come with or without Esther — but she will lose her purpose if she misses her moment. What is your "such a time as this"?' },
      { phase: '3. The Great Reversal as Gospel', description: 'Trace every reversal in Esther: who rises, who falls, who is honored, who is destroyed. Then read Colossians 2:15 and Luke 1:52-53. The cross is the ultimate reversal — the death of the enemy of God\'s people through the very instrument he used.' },
      { phase: '4. Fasting in Esther', description: 'Read 4:16 and 9:31. Fasting is the natural response to crisis in the Bible. It is not mentioned as a special technique — it is assumed as normal practice. Compare with Matthew 6:16-18; Acts 13:2-3.' },
      { phase: '5. Esther and Christ', description: 'Esther risks death to intercede for her people before the king. She is not compelled — she volunteers: "if I perish, I perish." This voluntary self-offering for the salvation of her people makes her a profound type of Christ.' },
    ],
  },

  job: {
    overview: `Job is the Bible's most direct engagement with the hardest question in theology: why do the righteous suffer? A blameless man loses everything — children, wealth, health — through no fault of his own. Three friends offer sophisticated but wrong theodicies. A young man offers a different view. Then God speaks from the whirlwind — not to answer Job's questions, but to reframe them entirely. The book ends not with an explanation of suffering but with an encounter with the living God.`,
    howWritten: `Possibly the oldest book in the Bible — Job may have been a contemporary of Abraham, c. 2000–1800 BC, based on details of patriarchal life (sacrifice offered by family heads, long life spans, wealth measured in livestock). Moses may have written or compiled it. The book is a literary masterpiece: a prose prologue (ch. 1–2) and epilogue (ch. 42) frame a lengthy poetic drama (ch. 3–41) of astonishing sophistication — dialogues, speeches, even legal disputation in the Hebrew style.`,
    structure: [
      'Prologue (1–2) — The heavenly court; Job\'s testing; three friends arrive',
      'Three Rounds of Dialogue (3–31) — Job and friends debate (Eliphaz, Bildad, Zophar reply; Job answers)',
      'Elihu\'s Speech (32–37) — The young man rebukes all four; introduces the concept of suffering as discipline',
      'God\'s Answer (38–41) — The divine speeches from the whirlwind; Job humbled',
      'Epilogue (42) — Job\'s restoration; friends rebuked; Job prays for his friends',
    ],
    themes: [
      { title: 'The Problem of Innocent Suffering', description: 'Job is explicitly called "blameless and upright" (1:1). His suffering is not punishment for sin. The book demolishes the retribution principle (good people prosper, bad people suffer) as simplistic and false.' },
      { title: 'The Sovereignty of God', description: 'God\'s speeches (ch. 38–41) do not explain Job\'s suffering — they demonstrate God\'s incomprehensible greatness. The answer to suffering is not an explanation but a Person: do you know the God behind it?' },
      { title: 'Suffering as Testing', description: 'The heavenly court scene (ch. 1–2) reveals what Job cannot see: his suffering is part of a cosmic drama of faith. Satan\'s accusation ("he only serves you because you bless him") is answered by Job\'s faithfulness.' },
      { title: 'The Redeemer', description: '"I know that my redeemer liveth, and that he shall stand at the latter day upon the earth" (19:25) — in the depths of his suffering, Job confesses a coming Redeemer who will vindicate him after death. This is the most remarkable messianic statement in wisdom literature.' },
      { title: 'True Friendship in Suffering', description: 'Job\'s three friends are famous for saying the wrong thing — but they came, they sat, they stayed silent for seven days (2:13). Presence without words is sometimes more valuable than explanation.' },
    ],
    highlights: [
      { verse: 'Job 1:21', text: '"Naked came I out of my mother\'s womb, and naked shall I return thither: the LORD gave, and the LORD hath taken away; blessed be the name of the LORD."' },
      { verse: 'Job 19:25-26', text: '"For I know that my redeemer liveth, and that he shall stand at the latter day upon the earth: And though after my skin worms destroy this body, yet in my flesh shall I see God."' },
      { verse: 'Job 38:4', text: '"Where wast thou when I laid the foundations of the earth? declare, if thou hast understanding."' },
      { verse: 'Job 42:5', text: '"I have heard of thee by the hearing of the ear: but now mine eye seeth thee."' },
    ],
    deepPath: [
      { phase: '1. The Heavenly Court', description: 'Read Job 1–2. The scene in heaven is not visible to Job. How does this change how you read the rest of the book? How does this perspective on suffering (it may be part of a larger story you cannot see) change how you respond to your own pain?' },
      { phase: '2. The Three Friends\' Arguments', description: 'Summarize each friend\'s argument: Eliphaz (experience-based), Bildad (tradition-based), Zophar (dogma-based). Then read God\'s verdict on them (42:7): "ye have not spoken of me the thing that is right." Why are they wrong?' },
      { phase: '3. Job\'s Redeemer', description: 'Read 19:23-27 slowly. What does Job mean by "Redeemer"? How does Handel\'s Messiah use this? How does the resurrection answer Job\'s cry for vindication?' },
      { phase: '4. God\'s Answer from the Whirlwind', description: 'Read chapters 38–41. God never explains why Job suffered. He asks ~70 questions. What is the effect of this? How does encountering God\'s greatness change Job\'s questions? Compare with Romans 8:28.' },
      { phase: '5. Job and the New Testament', description: 'James 5:11 commends Job\'s patience. Jesus is described as "a man of sorrows" (Isa 53:3) — acquainted with grief. How does Christ\'s suffering reframe the question of innocent suffering? The cross is God\'s answer to Job\'s cry.' },
    ],
  },

  proverbs: {
    overview: `Proverbs is the Bible's practical handbook for wise living — covering everything from business ethics to sexual purity, from the use of the tongue to the training of children. It is not a collection of magical promises but a distillation of wisdom about how God's ordered creation works: life generally goes better when you live by God's design. The book's introduction (1:7) announces the key: "The fear of the LORD is the beginning of wisdom."`,
    howWritten: `Written primarily by Solomon (who composed 3,000 proverbs, 1 Kings 4:32), with contributions from the men of Hezekiah (25:1), Agur (ch. 30), and Lemuel (ch. 31). Compiled c. 971–686 BC, reaching its final form under Hezekiah's editors (700 BC). Proverbs belongs to the ANE wisdom tradition — Israel shared wisdom literature with Egypt and Mesopotamia (Proverbs 22:17–24:22 parallels the Egyptian "Instruction of Amenemope"), but Israel's wisdom is grounded in the covenant God, not impersonal principles.`,
    structure: [
      'Prologue — The Call of Wisdom (1–9) — Poems contrasting Wisdom and Folly as women calling to the young man',
      'Solomon\'s Proverbs I (10–22:16) — Individual proverbs on every aspect of life',
      'Words of the Wise (22:17–24:34) — Ethical instructions',
      'Solomon\'s Proverbs II (25–29) — Collected by Hezekiah\'s men',
      'Words of Agur and Lemuel (30–31) — Numerical proverbs; the Virtuous Woman',
    ],
    themes: [
      { title: 'The Fear of the LORD', description: '"The fear of the LORD is the beginning of wisdom" (1:7; 9:10; 15:33). This is not terror but reverent awe — the orientation of the whole person toward God as the ultimate reality. All wisdom flows from this posture.' },
      { title: 'Wisdom vs. Folly', description: 'Wisdom and Folly are personified as two women calling out to the young man in the street (ch. 8–9). Every choice is a response to one of these two callings. Wisdom is not just intelligence — it is moral discernment aligned with God\'s order.' },
      { title: 'The Tongue', description: 'More proverbs deal with speech than any other subject: the lying tongue, the gentle answer, the word in season, the backbiter, the flatterer, the gossip. "Death and life are in the power of the tongue" (18:21).' },
      { title: 'Work and Diligence', description: 'Proverbs has no patience for laziness (the sluggard appears at least seven times). Work is dignified, necessary, and a reflection of God\'s own creative labor.' },
      { title: 'The Virtuous Woman (ch. 31)', description: 'Proverbs ends with an acrostic poem (each verse begins with successive Hebrew letters) celebrating a woman of extraordinary virtue, enterprise, and godliness. She is wisdom embodied in daily life.' },
    ],
    highlights: [
      { verse: 'Proverbs 1:7', text: '"The fear of the LORD is the beginning of wisdom: but fools despise wisdom and instruction."' },
      { verse: 'Proverbs 3:5-6', text: '"Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths."' },
      { verse: 'Proverbs 8:22-23', text: '"The LORD possessed me at the beginning of his work... I was set up from everlasting, from the beginning, or ever the earth was." — Wisdom speaking; echoed in John 1:1' },
      { verse: 'Proverbs 22:6', text: '"Train up a child in the way he should go: and when he is old, he will not depart from it."' },
    ],
    deepPath: [
      { phase: '1. Personified Wisdom (ch. 8)', description: 'Read Proverbs 8:22-36. Wisdom existed before creation; was beside God as a master workman. Then read John 1:1-14 and Colossians 1:15-17. The NT identifies Jesus as the Wisdom of God (1 Cor 1:24).' },
      { phase: '2. Study a Theme', description: 'Pick one theme and collect every proverb on it: the tongue (10:19; 12:18; 15:1; 17:27-28; 18:21), money and generosity, or parenting. What consistent picture emerges?' },
      { phase: '3. The Sluggard', description: 'Find all seven "sluggard" passages. How does Proverbs describe him? What are the consequences? How does the biblical theology of work (Gen 2:15) ground the ethic of diligence?' },
      { phase: '4. Proverbs and the New Testament', description: 'Trace NT quotations from Proverbs: 3:7 → Romans 12:16; 3:11-12 → Hebrews 12:5-6; 3:34 → James 4:6; 11:31 → 1 Peter 4:18; 25:21-22 → Romans 12:20. Proverbs is deeply embedded in NT ethics.' },
      { phase: '5. The Virtuous Woman (ch. 31)', description: 'Read 31:10-31 as both a portrait of godly womanhood and as a picture of the church (the bride of Christ). How does each characteristic connect to spiritual virtues?' },
    ],
  },

  ecclesiastes: {
    overview: `Ecclesiastes is the Bible's most honest book about the futility of life "under the sun" — apart from God. The "Preacher" (Qohelet) exhaustively investigates every source of meaning available to a wealthy, powerful, wise man — pleasure, work, wisdom, wealth — and finds them all "vanity" (hebel — vapor, breath, emptiness). But this is not nihilism. The conclusion (12:13-14) is the most focused in Scripture: "Fear God and keep his commandments, for this is the whole duty of man."`,
    howWritten: `Written by Solomon (implied by the description "son of David, king in Jerusalem," 1:1), c. 935 BC. The Hebrew title Qohelet means "the Assembler" or "the Preacher." Ecclesiastes is one of the Megilloth (five scrolls) read at Jewish festivals — read on the Feast of Tabernacles (Sukkot), the festival of joy, as a counterbalance: joy must be rooted in eternity, not circumstance. The word "vanity" (hebel) appears 38 times. The word "joy" or "rejoice" appears 17 times — Ecclesiastes is not pessimistic but realistic.`,
    structure: [
      'Theme Statement (1:1-11) — "Vanity of vanities, all is vanity"',
      'The Royal Experiment (1:12–2:26) — Testing wisdom, pleasure, work; all is vanity',
      'Life\'s Observations (3–11) — Times and seasons; injustice; death; the limitations of wisdom',
      'The Conclusion (12) — Remember God in youth; the whole duty of man',
    ],
    themes: [
      { title: 'Vanity (Hebel)', description: 'The Hebrew hebel (vapor, breath) captures the elusive emptiness of things pursued as ends in themselves. Money, pleasure, fame, wisdom — all slip through the fingers like fog when divorced from God.' },
      { title: 'A Time for Everything', description: '"To every thing there is a season, and a time to every purpose under the heaven" (3:1-8) — Ecclesiastes insists that life has rhythms given by God. Resisting the season you\'re in is resisting God\'s ordering of time.' },
      { title: 'Joy as Gift', description: 'Despite the "vanity" refrain, Ecclesiastes six times commends joy in eating, drinking, work, and love (2:24; 3:12-13; 3:22; 5:18-20; 8:15; 9:7-9). These are God\'s gifts to be received, not achieved.' },
      { title: 'The Reality of Death', description: 'Ecclesiastes is unusually direct about death: "there is no work, nor device, nor knowledge, nor wisdom, in the grave" (9:10). This is not hopelessness but an argument for living fully and wisely now.' },
      { title: 'Fear God', description: 'The final conclusion (12:13-14) cuts through all the searching: the answer is not more wisdom, wealth, or experience — it is simple covenant relationship: fear God, keep his commandments. This is the whole of human life.' },
    ],
    highlights: [
      { verse: 'Ecclesiastes 1:2', text: '"Vanity of vanities, saith the Preacher, vanity of vanities; all is vanity."' },
      { verse: 'Ecclesiastes 3:1', text: '"To every thing there is a season, and a time to every purpose under the heaven."' },
      { verse: 'Ecclesiastes 9:11', text: '"The race is not to the swift, nor the battle to the strong... but time and chance happeneth to them all."' },
      { verse: 'Ecclesiastes 12:13-14', text: '"Fear God, and keep his commandments: for this is the whole duty of man. For God shall bring every work into judgment, with every secret thing, whether it be good, or whether it be evil."' },
    ],
    deepPath: [
      { phase: '1. The Royal Experiment', description: 'Read 1:12–2:26. Solomon tests wisdom, pleasure, great works, and accumulation. What did each "experiment" reveal? Apply the same test to modern pursuits: career, education, entertainment, wealth.' },
      { phase: '2. Ecclesiastes 3 — Seasons', description: 'Read 3:1-15. Then read Paul\'s "contentment in all circumstances" (Phil 4:11-13). How does accepting God\'s timing produce peace? How does resisting the "season" you\'re in produce the anxiety Ecclesiastes describes?' },
      { phase: '3. The NT\'s Use of Ecclesiastes', description: 'Jesus\' parable of the rich fool (Luke 12:16-21) echoes Ecclesiastes 2:18-19. "For what is your life? It is even a vapour" (James 4:14) quotes Ecclesiastes 1. Trace the NT\'s wrestling with "vanity."' },
      { phase: '4. The Six Joy Passages', description: 'Find all six passages where Qohelet commends joy (2:24; 3:12-13; 3:22; 5:18-20; 8:15; 9:7-9). What kind of joy is commended? How is it different from hedonism?' },
      { phase: '5. "Fear God and Keep His Commandments"', description: 'Read 12:13-14 in the context of the whole book. After all the searching, why is this the conclusion? Compare with Matthew 22:37-40. All of wisdom comes down to relationship with God.' },
    ],
  },

  songofsolomon: {
    overview: `The Song of Solomon (Song of Songs) is the Bible's great celebration of human love and intimacy — a poetic collection of love songs exchanged between a bride and her bridegroom. It affirms that physical love, within the covenant of marriage, is a good gift from God. Jewish tradition reads it as an allegory of God's love for Israel; Christian tradition reads it as Christ's love for the church. Both readings are valid because human marriage is explicitly designed to image the divine-human covenant (Eph 5:31-32).`,
    howWritten: `Written by Solomon ("The Song of Songs, which is Solomon's," 1:1), c. 965 BC. The Hebrew title "Shir HaShirim" means "The Greatest Song" — a Hebrew superlative. It is read at Passover (celebrating God's love for Israel in the Exodus). The book has been interpreted in three main ways: (1) allegory only (God/Israel, Christ/church), (2) literal only (human marriage), (3) both (human love genuinely images divine love). The third interpretation does the most justice to the text.`,
    structure: [
      'The First Meeting (1:1–2:7) — The Beloved praises her Shepherd-King; mutual admiration',
      'Springtime of Love (2:8–3:5) — The Beloved seeks her lover; love\'s urgency',
      'The Wedding (3:6–5:1) — The procession; wedding night celebrated',
      'Love Tested and Renewed (5:2–8:14) — Separation; searching; reunion; the power of love',
    ],
    themes: [
      { title: 'The Goodness of Human Love', description: 'The Song celebrates physical attraction, emotional intimacy, and sexual love within marriage as unambiguously good. Against all asceticism: the body is not shameful, love is not sinful, desire is not fallen in itself.' },
      { title: 'Covenant Love', description: '"I am my beloved\'s, and my beloved is mine" (6:3) is the covenant formula of mutual belonging — the same language as God\'s covenant with Israel: "I will be their God, and they shall be my people."' },
      { title: 'Christ and the Church', description: 'Paul quotes Genesis 2:24 and adds: "This is a great mystery: but I speak concerning Christ and the church" (Eph 5:32). The entire love story of Scripture — from Genesis to Revelation\'s wedding feast — is the story of God pursuing a bride.' },
      { title: 'The Power of Love', description: '"Love is strong as death; jealousy is cruel as the grave... Many waters cannot quench love, neither can the floods drown it" (8:6-7). The Song\'s climax is a declaration of love\'s invincibility.' },
    ],
    highlights: [
      { verse: 'Song of Solomon 2:4', text: '"He brought me to the banqueting house, and his banner over me was love."' },
      { verse: 'Song of Solomon 2:16', text: '"My beloved is mine, and I am his: he feedeth among the lilies."' },
      { verse: 'Song of Solomon 6:3', text: '"I am my beloved\'s, and my beloved is mine: he feedeth among the lilies."' },
      { verse: 'Song of Solomon 8:6-7', text: '"Set me as a seal upon thine heart... for love is strong as death... Many waters cannot quench love, neither can the floods drown it."' },
    ],
    deepPath: [
      { phase: '1. Two-Level Reading', description: 'Read Song 2:1-13. On the literal level: a woman describing her beloved\'s arrival. On the allegorical level: the coming of Christ to his church. Both are beautiful. Practice reading the passage on both levels.' },
      { phase: '2. The Covenant Formula', description: 'Find the three "I am my beloved\'s / my beloved is mine" phrases (2:16; 6:3; 7:10). Note the subtle progression in wording. Compare with Jeremiah 31:33: "I will be their God, and they shall be my people."' },
      { phase: '3. Ephesians 5 and the Song', description: 'Read Ephesians 5:25-32. Paul directly connects human marriage to Christ-church relationship. How does this give marriage a cosmic significance? How does this change how you view romantic love?' },
      { phase: '4. The Wedding Feast of the Lamb', description: 'Read Revelation 19:7-9 and 21:2, 9. The entire Bible ends with a wedding. The Song is the love poetry of this eternal relationship. How does reading the Bible as a love story change how you engage with it?' },
      { phase: '5. The Seal upon the Heart', description: 'Read 8:6-7. A seal in the ancient world was the sign of ownership and identity. "Set me as a seal upon your heart" — this is total claim, total surrender, total belonging. Apply to Christ\'s claim on the believer (Eph 1:13).' },
    ],
  },
});

Object.assign(BOOK_STUDIES, {
  isaiah: {
    overview: `Isaiah is the greatest of the writing prophets — his 66 chapters mirror the 66 books of the Bible (OT themes in ch. 1–39, NT themes in ch. 40–66). Called in the year King Uzziah died (ch. 6), he ministered for 60 years in Jerusalem. The book's two halves are united by the servant motif: a nation (Israel) who failed to be God's servant, and a coming individual Servant who would succeed where they failed. Isaiah 53 — the Suffering Servant — is the most detailed prophecy of Christ's crucifixion in the entire Bible.`,
    howWritten: `Written by Isaiah the prophet, 740–700 BC. Some scholars argue for two or three authors (proto-, deutero-, trito-Isaiah), but the NT quotes Isaiah 40–66 and attributes the words to Isaiah (John 12:38-41; Romans 10:16-21). The book was written in classical Hebrew of the highest literary quality. Isaiah was a court prophet who had direct access to kings. He was, according to tradition, martyred by being sawn in two under Manasseh (Hebrews 11:37).`,
    structure: [
      'Book of Judgment (1–39) — Oracles against Judah, nations; the Immanuel prophecies (7, 9, 11)',
      'Comfort (40–55) — "Comfort ye my people"; the Servant Songs; Cyrus named; redemption',
      'Restoration (56–66) — New covenant community; Suffering Servant (52–53); new creation',
    ],
    themes: [
      { title: 'The Holy One of Israel', description: 'Isaiah\'s title for God — "the Holy One of Israel" — appears 25 times. After his vision of God\'s holiness in ch. 6 ("Holy, holy, holy is the LORD of hosts"), this becomes the defining reality of his entire ministry.' },
      { title: 'The Suffering Servant', description: 'Four "Servant Songs" (42:1-9; 49:1-13; 50:4-11; 52:13–53:12) trace the career of God\'s Servant — a figure who suffers vicariously for the sins of others. Isaiah 53 is quoted or alluded to more than any other OT passage in the NT.' },
      { title: 'The New Exodus', description: 'Isaiah 40–55 frames Israel\'s return from Babylon as a new Exodus — a greater deliverance than the one from Egypt. "Prepare ye the way of the LORD in the wilderness" (40:3) is quoted in all four Gospels of John the Baptist.' },
      { title: 'Messianic Prophecy', description: 'Isaiah contains the most detailed OT Messianic prophecies: Immanuel (7:14), the Child born (9:6-7), the Branch from Jesse (11:1-5), the Servant (42; 49; 50; 53), the anointed one (61:1-2 — Jesus reads this in Luke 4:18).' },
      { title: 'New Creation', description: 'Isaiah 65:17-25 and 66:22-24 introduce the concept of a "new heavens and new earth" — God\'s final renewal of all creation. John quotes this vision directly in Revelation 21.' },
    ],
    highlights: [
      { verse: 'Isaiah 6:3', text: '"Holy, holy, holy, is the LORD of hosts: the whole earth is full of his glory."' },
      { verse: 'Isaiah 9:6', text: '"For unto us a child is born, unto us a son is given: and the government shall be upon his shoulder: and his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace."' },
      { verse: 'Isaiah 40:31', text: '"But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint."' },
      { verse: 'Isaiah 53:5', text: '"But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed."' },
    ],
    deepPath: [
      { phase: '1. Isaiah\'s Call (ch. 6)', description: 'Read Isaiah 6. Note: vision of God → awareness of sin → cleansing → commissioning → difficult assignment. This is the template for every prophetic calling. Compare with Revelation 4–5 (John sees the same scene).' },
      { phase: '2. The Four Servant Songs', description: 'Read 42:1-9; 49:1-13; 50:4-11; 52:13–53:12 sequentially. The Servant\'s identity progressively narrows from Israel to a specific individual who suffers for Israel and the nations. Who is he?' },
      { phase: '3. Isaiah 53 in Detail', description: 'Read 52:13–53:12 alongside the Gospel passion narratives. List every detail: despised (Matt 27:30), stricken for our transgressions (Rom 4:25), by his stripes we are healed (1 Pet 2:24). How many details were fulfilled literally?' },
      { phase: '4. Isaiah 40 and the Gospels', description: 'Read Isaiah 40:1-8. Then read Matthew 3:1-3, Mark 1:2-3, Luke 3:4-6, John 1:23. All four Gospels open with Isaiah 40 applied to John the Baptist. What does "comfort" mean after 70 years of exile?' },
      { phase: '5. Isaiah\'s New Creation', description: 'Read Isaiah 65:17-25. Then read Revelation 21:1-5. John is consciously drawing on Isaiah. What does "no more" mean in both passages? What is the deepest human longing that the new creation answers?' },
    ],
  },

  jeremiah: {
    overview: `Jeremiah is the "weeping prophet" — called to preach judgment in Jerusalem for 40 years (627–586 BC), mostly to an audience that rejected, imprisoned, and persecuted him. He witnesses the destruction of Jerusalem and the temple in 586 BC. His message is two-sided: inevitable judgment (the exile is coming; don't fight Babylon) and ultimate hope (the new covenant). The NT quotes Jeremiah 31:31-34 in Hebrews 8 as the fullest OT statement of what the new covenant means.`,
    howWritten: `Written by Jeremiah with the assistance of his scribe Baruch (ch. 36), c. 627–586 BC with editing afterward. The book is not in strict chronological order — it is organized thematically and biographically. The "Confessions of Jeremiah" (11:18–12:6; 15:10-21; 17:14-18; 18:18-23; 20:7-18) are the most intimate prophetic self-disclosure in Scripture — Jeremiah argues with God, complains, despairs, and is sustained.`,
    structure: [
      'Oracles of Judgment (1–25) — Jeremiah\'s call; against Judah and Jerusalem; against various sins',
      'The Book of Consolation (26–33) — Narratives of conflict; the new covenant promise (31)',
      'Historical Narrative (34–45) — Siege of Jerusalem; Jeremiah\'s imprisonment; fall of city',
      'Oracles Against Nations (46–51) — Egypt, Philistia, Moab, Ammon, Edom, Babylon',
      'Historical Appendix (52) — Parallel account of Jerusalem\'s fall; Jehoiachin\'s release',
    ],
    themes: [
      { title: 'The New Covenant', description: '"Behold, the days come, saith the LORD, that I will make a new covenant with the house of Israel" (31:31-34). This is the only explicit use of "new covenant" in the OT — quoted in Hebrews 8 as the theological center of the NT.' },
      { title: 'The Deceitfulness of the Heart', description: '"The heart is deceitful above all things, and desperately wicked: who can know it?" (17:9). Jeremiah\'s diagnosis of human nature leads to the new covenant\'s promise: God will write his law on the heart, not just on stone.' },
      { title: 'Prophetic Suffering', description: 'Jeremiah is the most self-revealing of all the prophets. He did not want his calling, was mocked, thrown in a pit, put in stocks, imprisoned, and threatened with death. His suffering anticipated Christ\'s.' },
      { title: 'Submit to God\'s Discipline', description: 'Jeremiah\'s controversial message was: submit to Babylon\'s conquest — it is God\'s judgment, not Babylon\'s strength. Seeking God in exile (29:7, 11-13) rather than resisting it is the path through.' },
    ],
    highlights: [
      { verse: 'Jeremiah 1:5', text: '"Before I formed thee in the belly I knew thee; and before thou camest forth out of the womb I sanctified thee, and I ordained thee a prophet unto the nations."' },
      { verse: 'Jeremiah 17:9', text: '"The heart is deceitful above all things, and desperately wicked: who can know it?"' },
      { verse: 'Jeremiah 29:11', text: '"For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end."' },
      { verse: 'Jeremiah 31:31-33', text: '"Behold, the days come, saith the LORD, that I will make a new covenant... I will put my law in their inward parts, and write it in their hearts."' },
    ],
    deepPath: [
      { phase: '1. The Confessions of Jeremiah', description: 'Read 20:7-18 — Jeremiah curses the day he was born. This is not failure of faith; it is the faith that is honest about pain. Compare with Job, Elijah (1 Kings 19), and the Psalms of lament. God can handle our raw complaint.' },
      { phase: '2. The New Covenant (ch. 31)', description: 'Read 31:31-34 and then Hebrews 8:6-13. What are the four features of the new covenant? Inward law, relational knowledge of God, complete forgiveness, universality. How is each better than the old covenant?' },
      { phase: '3. Jeremiah\'s Letter to the Exiles', description: 'Read Jeremiah 29:4-14. In the midst of exile, "seek the peace of the city where I have caused you to be carried away captive" (29:7). How is this countercultural? How does 29:11 fit in context (it\'s addressed to exiles, not to comfortable people)?' },
      { phase: '4. The Potter and the Clay', description: 'Read Jeremiah 18:1-10 and then Romans 9:20-21. God is the potter; Israel is the clay. But the clay has the ability to respond — if the nation repents, God relents. What does this say about God\'s sovereignty and human responsibility?' },
      { phase: '5. Baruch and Jeremiah', description: 'Read Jeremiah 36 and 45. Baruch is the scribe who writes and reads Jeremiah\'s words at great personal risk. He despairs (45:3) and is encouraged. What does God\'s word to Baruch (45:5) say about seeking personal greatness in a time of national collapse?' },
    ],
  },

  lamentations: {
    overview: `Lamentations consists of five funeral poems (qinah — lament poems with a falling rhythm) written in the immediate aftermath of Jerusalem's destruction in 586 BC. The city that was once "great among the nations" is now desolate. The poet sits among the ruins and does what faith does in the darkest hour: it mourns without pretending, it confesses that God's judgment is just, and it dares — in the central poem — to hope: "It is of the LORD's mercies that we are not consumed, because his compassions fail not. They are new every morning" (3:22-23).`,
    howWritten: `Attributed to Jeremiah (following Jewish and early Christian tradition), written 586 BC. The book is an artistic masterpiece: chapters 1, 2, 4, and 5 are acrostics (each verse begins with successive letters of the 22-letter Hebrew alphabet); chapter 3 is a triple acrostic (3 verses per letter = 66 verses). This elaborate artistry in grief is significant: even in ruins, ordered beauty is possible. Form itself is a protest against chaos.`,
    structure: [
      'Lament 1 — Jerusalem speaks of her desolation',
      'Lament 2 — God\'s wrath described; the destruction is real',
      'Lament 3 — The central poem; individual suffering; the turn to hope (3:21-33)',
      'Lament 4 — Contrast: Jerusalem then and now',
      'Lament 5 — Community prayer for restoration',
    ],
    themes: [
      { title: 'Grief Without Denial', description: 'Lamentations gives the church permission to grieve honestly. There is no quick pivot to comfort — the devastation is described in detail. Biblical faith does not require pretending everything is fine.' },
      { title: 'God\'s Judgment Is Just', description: 'The poet does not blame Babylon, bad luck, or political failure. He confesses: "The LORD is righteous; for I have rebelled against his commandment" (1:18). Accepting responsibility for consequences is part of genuine repentance.' },
      { title: 'Mercy in the Midst of Judgment', description: 'The turn in 3:21-33 is one of the Bible\'s most breathtaking pivots. From the depths of despair: "This I recall to my mind, therefore have I hope." God\'s mercies are new every morning. His compassions do not fail.' },
      { title: 'The Suffering of Christ', description: 'The individual sufferer of Lamentations 3 ("I am the man that hath seen affliction," 3:1) has been read as a type of Christ. "Is it nothing to you, all ye that pass by? behold, and see if there be any sorrow like unto my sorrow" (1:12) — early Christians heard the voice of Christ from the cross.' },
    ],
    highlights: [
      { verse: 'Lamentations 1:12', text: '"Is it nothing to you, all ye that pass by? behold, and see if there be any sorrow like unto my sorrow."' },
      { verse: 'Lamentations 3:22-23', text: '"It is of the LORD\'s mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness."' },
      { verse: 'Lamentations 3:26', text: '"It is good that a man should both hope and quietly wait for the salvation of the LORD."' },
      { verse: 'Lamentations 3:40', text: '"Let us search and try our ways, and turn again to the LORD."' },
    ],
    deepPath: [
      { phase: '1. Sitting in the Ruins', description: 'Read Lamentations 1 slowly. Let the devastation land. Do not rush to the hope of chapter 3. What does it mean to be a people of faith in a time of national disaster? How is honest mourning different from faithlessness?' },
      { phase: '2. The Acrostic Structure', description: 'Notice that the most grief-stricken book in Scripture is written in the most ordered poetic form. What does this say? Even in ruins, God\'s Word is not chaotic. Form is an act of defiance against despair.' },
      { phase: '3. The Pivot in Chapter 3', description: 'Read 3:1-20 (deep in despair) and then 3:21: "This I recall to my mind, therefore have I hope." What does he recall? Not his own strength, but God\'s character — mercy, faithfulness. The turn to hope is a choice of memory, not a change of circumstances.' },
      { phase: '4. "Great Is Thy Faithfulness"', description: 'The hymn by Thomas Chisholm (1923) is based on Lamentations 3:22-23. Read the passage; then read the hymn. The song of faithfulness was written from the middle of ruins. How does knowing the context change how you hear the hymn?' },
      { phase: '5. Lament as Christian Practice', description: 'The church largely lost the practice of corporate lament. Read Psalms 44, 74, 80 alongside Lamentations. What would it look like for the church today to write and pray lament over genuine losses — death, injustice, cultural exile?' },
    ],
  },

  ezekiel: {
    overview: `Ezekiel is the prophet of divine glory — his book opens and closes with visions of God's overwhelming splendor. A priest-prophet taken to Babylon in the first deportation (597 BC), Ezekiel ministers to the exiles. His message is structured around the departure and return of God's glory (the Shekinah): the glory leaves the corrupt temple (ch. 8–11), judgment falls (ch. 12–24, 25–32), and the glory returns to a restored temple in the Messianic age (ch. 43). Ezekiel 37 (the valley of dry bones) is one of the most vivid resurrection images in Scripture.`,
    howWritten: `Written by Ezekiel the priest, 593–571 BC, in Babylon. Ezekiel is the most systematically organized of the prophets — the book is organized chronologically by specific dates. It is also the most visionary: the book opens with a four-faced, wheeled cherubic chariot (the merkabah vision) that Jewish mystics spent centuries meditating on. Ezekiel uses extensive allegory, symbolism, and dramatic sign-acts (lying on his side 390 days, cooking over dung, shaving his hair).`,
    structure: [
      'Ezekiel\'s Call and the Glory (1–3) — Throne-chariot vision; commissioning',
      'Oracles of Judgment on Judah (4–24) — Sign-acts; the glory departing the temple',
      'Oracles Against Nations (25–32) — Ammon, Moab, Edom, Philistia, Tyre, Egypt',
      'Restoration Oracles (33–48) — Valley of dry bones; the shepherd; new covenant; the new temple',
    ],
    themes: [
      { title: 'The Glory of God (Kabod)', description: 'Ezekiel\'s four-faced chariot vision (ch. 1) is a vision of God\'s mobile, cosmic throne. The glory departs the temple (10:18-19; 11:23) because of Israel\'s sin — and returns to the restored temple in the Messianic age (43:1-5).' },
      { title: 'Individual Responsibility', description: '"The soul that sinneth, it shall die. The son shall not bear the iniquity of the father" (18:20). Ezekiel corrects the fatalistic proverb "the fathers have eaten sour grapes, and the children\'s teeth are set on edge." Each person is responsible for their own choices.' },
      { title: 'The New Heart', description: '"A new heart also will I give you, and a new spirit will I put within you: and I will take away the stony heart out of your flesh, and I will give you an heart of flesh" (36:26-27). This is Ezekiel\'s new covenant promise — the divine surgery of regeneration.' },
      { title: 'The Valley of Dry Bones', description: 'Ezekiel 37 — Israel reduced to a field of bones, then breath comes and a great army rises. This image of resurrection is applied historically (Israel\'s national restoration) and theologically (individual spiritual resurrection — Eph 2:1-5).' },
      { title: 'The Messianic Shepherd', description: 'Ezekiel 34 — God condemns the false shepherds (Israel\'s leaders) and promises: "I will seek that which was lost... I will set up one shepherd over them... my servant David" (34:16, 23). Jesus directly applies this to himself: "I am the good shepherd" (John 10).' },
    ],
    highlights: [
      { verse: 'Ezekiel 18:20', text: '"The soul that sinneth, it shall die. The son shall not bear the iniquity of the father, neither shall the father bear the iniquity of the son."' },
      { verse: 'Ezekiel 33:11', text: '"As I live, saith the Lord GOD, I have no pleasure in the death of the wicked; but that the wicked turn from his way and live: turn ye, turn ye from your evil ways; for why will ye die, O house of Israel?"' },
      { verse: 'Ezekiel 36:26', text: '"A new heart also will I give you, and a new spirit will I put within you: and I will take away the stony heart out of your flesh, and I will give you an heart of flesh."' },
      { verse: 'Ezekiel 37:3', text: '"And he said unto me, Son of man, can these bones live? And I answered, O Lord GOD, thou knowest."' },
    ],
    deepPath: [
      { phase: '1. The Merkabah Vision (ch. 1)', description: 'Read Ezekiel 1 carefully. Four living creatures, four wheels, and the throne above. Compare with Isaiah 6 and Revelation 4. What is God communicating to exiles about his nature? He is not confined to Jerusalem.' },
      { phase: '2. The Departure of the Glory', description: 'Trace the glory in ch. 8–11: 9:3 (door of temple), 10:18 (threshold), 10:19 (east gate), 11:23 (mountain east of city). The glory leaves slowly, reluctantly. Then trace its return in 43:1-5. What caused the departure? What brings it back?' },
      { phase: '3. Ezekiel 36 and John 3', description: 'Read 36:24-27. Then read John 3:1-8. Jesus tells Nicodemus "you must be born of water and Spirit" — Ezekiel 36 is the OT background. Jesus was surprised Nicodemus didn\'t know this (3:10): "Are you the teacher of Israel?" This was in the Scriptures.' },
      { phase: '4. The Valley of Dry Bones', description: 'Read Ezekiel 37:1-14. The bones are Israel ("our hope is lost"). The sequence: prophesy → wind/spirit comes → breath enters → they stand. Apply to spiritual deadness: what is God\'s answer to a church that has become dry bones?' },
      { phase: '5. The New Temple (ch. 40–48)', description: 'These chapters are the most debated in Ezekiel. The temple described is larger than the geography allows. Is it literal (Millennial), symbolic (the church), or eschatological (new creation)? Compare with Revelation 21 — there is no temple in the New Jerusalem. Why?' },
    ],
  },

  daniel: {
    overview: `Daniel is the book of divine sovereignty over world history. Written from the Babylonian court, it interweaves court narratives (ch. 1–6) with apocalyptic visions (ch. 7–12). The narratives show God protecting faithful servants in the lion's den and the fiery furnace; the visions show the succession of world empires (Babylon, Persia, Greece, Rome) climaxing in the eternal kingdom of "the Son of Man." Daniel 7:13-14 — the Son of Man receiving universal authority from the Ancient of Days — is the most important OT source for Jesus' self-understanding.`,
    howWritten: `Written by Daniel, c. 605–530 BC. The book is unique in being written in two languages: Hebrew (1:1–2:4; 8:1–12:13) and Aramaic (2:4–7:28), the international diplomatic language of the era. The division roughly corresponds to the Jewish material (Hebrew) and universal material (Aramaic). Jesus quotes Daniel repeatedly ("abomination of desolation," Matt 24:15; "Son of Man coming on clouds," Matt 24:30). The early dating is defended by Jesus' own quotation of it as predictive prophecy.`,
    structure: [
      'Court Tales (1–6) — Dietary test; Nebuchadnezzar\'s statue; fiery furnace; handwriting on wall; lion\'s den',
      'Four Visions (7–12) — Four beasts; ram and goat; 70 weeks; the final vision',
    ],
    themes: [
      { title: 'God\'s Sovereignty Over Empires', description: '"The most High ruleth in the kingdom of men, and giveth it to whomsoever he will" (4:17). Nebuchadnezzar the greatest emperor on earth learns through insanity that the God of Israel controls history.' },
      { title: 'Faithful Under Pressure', description: 'Daniel and his friends refuse to eat the king\'s food (ch. 1), refuse to worship the statue (ch. 3), and refuse to stop praying (ch. 6). Their faithfulness under threat models the NT call to resist the world\'s pressure (Romans 12:2).' },
      { title: 'The Son of Man', description: '"One like the Son of Man came with the clouds of heaven... and there was given him dominion, and glory, and a kingdom, that all people, nations, and languages, should serve him" (7:13-14). Jesus adopts this title — "the Son of Man" — as his primary self-designation.' },
      { title: 'The 70 Weeks', description: 'Daniel 9:24-27 — the most precise predictive chronological prophecy in Scripture. Seventy "weeks" (hebdomads of years = 490 years) are decreed from the command to restore Jerusalem to the Messiah\'s coming.' },
      { title: 'Resurrection Hope', description: '"And many of them that sleep in the dust of the earth shall awake, some to everlasting life, and some to shame and everlasting contempt" (12:2) — one of the clearest OT statements of bodily resurrection.' },
    ],
    highlights: [
      { verse: 'Daniel 2:44', text: '"And in the days of these kings shall the God of heaven set up a kingdom, which shall never be destroyed... it shall stand for ever."' },
      { verse: 'Daniel 3:18', text: '"But if not, be it known unto thee, O king, that we will not serve thy gods, nor worship the golden image which thou hast set up."' },
      { verse: 'Daniel 6:10', text: '"Now when Daniel knew that the writing was signed, he went into his house; and his windows being open in his chamber toward Jerusalem, he kneeled upon his knees three times a day, and prayed."' },
      { verse: 'Daniel 7:13-14', text: '"One like the Son of Man came with the clouds of heaven... and there was given him dominion, and glory, and a kingdom, that all people, nations, and languages, should serve him."' },
    ],
    deepPath: [
      { phase: '1. The Statue of Kingdoms (ch. 2)', description: 'Read Daniel 2:31-45. The statue represents successive world empires. The stone not cut by human hands (2:34) is Christ\'s kingdom. Compare with Daniel 7\'s four beasts — the same four empires from a heavenly perspective.' },
      { phase: '2. "But If Not" (ch. 3)', description: 'Read 3:16-18. Shadrach, Meshach, Abednego say God is able to save them — "but if not, we will still not bow." This is perfect faith: trusting God\'s power AND his sovereign right to choose differently. How does this apply to unanswered prayer?' },
      { phase: '3. The Son of Man (ch. 7)', description: 'Read Daniel 7:9-14. The "Ancient of Days" seated on a fiery throne; the Son of Man approaches and receives eternal dominion. Then read Matthew 26:64 — Jesus quotes this to the High Priest at his trial. What is he claiming?' },
      { phase: '4. The 70 Weeks (ch. 9)', description: 'Read Daniel 9:24-27 alongside the Medo-Persian chronology. From the decree to rebuild Jerusalem (Nehemiah 2, 445 BC) to the Messiah\'s cutting off (crucifixion) = 483 years (69 "weeks" of years). The precision is extraordinary.' },
      { phase: '5. Pray Toward Jerusalem', description: 'Read 6:10. Daniel prays three times daily toward Jerusalem — in defiance of the decree, with his window open (not hiding), kneeling. Prayer as public testimony, regular rhythm, perseverance despite cost. Model this.' },
    ],
  },

  hosea: {
    overview: `Hosea is commanded by God to marry an unfaithful wife (Gomer) as a living parable of Israel's spiritual adultery. His marriage — with its betrayal, heartbreak, and relentless pursuit of the unfaithful spouse — becomes the lens through which he preaches. God is the husband; Israel is the wife who has run after other gods (Baals). Yet even the judgment oracles end in extraordinary tenderness: "How can I give thee up, Ephraim? ... my heart is turned within me, my repentings are kindled together" (11:8).`,
    howWritten: `Written by Hosea, prophet to the Northern Kingdom (Israel), c. 755–715 BC. His ministry spanned the reigns of Uzziah through Hezekiah. Hosea's style is emotional, lyrical, and at times difficult — the text is full of wordplays, sudden shifts, and abrupt transitions that reflect the anguish of his experience. The marriage metaphor he introduces becomes central to the entire prophetic tradition (Jeremiah, Ezekiel, and ultimately the book of Revelation with the Lamb and his bride).`,
    structure: [
      'Hosea\'s Marriage (1–3) — Gomer\'s unfaithfulness; Israel\'s unfaithfulness; restoration',
      'Oracles of Judgment (4–10) — Israel\'s sins catalogued; priests failed; Ephraim like a silly dove',
      'God\'s Anguish and Love (11–14) — "Out of Egypt I called my son"; God\'s torn heart; call to return',
    ],
    themes: [
      { title: 'Covenant Love (Hesed)', description: '"For I desired mercy (hesed), and not sacrifice; and the knowledge of God more than burnt offerings" (6:6) — quoted twice by Jesus (Matt 9:13; 12:7). Ritual without relationship is worthless; God wants loyal love, not religious performance.' },
      { title: 'Spiritual Adultery', description: 'Israel\'s worship of Baals is described as adultery against their covenant husband YHWH. The metaphor makes idolatry intensely personal — it is not just wrong; it is betrayal of love.' },
      { title: 'God\'s Pursuing Love', description: 'Despite Israel\'s unfaithfulness, God promises: "Therefore, behold, I will allure her, and bring her into the wilderness, and speak comfortably unto her" (2:14). God woos back his unfaithful people — like Hosea buying back Gomer in ch. 3.' },
      { title: '"Out of Egypt I Called My Son"', description: 'Hosea 11:1 refers historically to Israel\'s Exodus from Egypt. Matthew 2:15 quotes this verse of Jesus\'s return from Egypt. Matthew sees in Jesus the recapitulation of Israel\'s history — he is the true Israel.' },
    ],
    highlights: [
      { verse: 'Hosea 2:19-20', text: '"And I will betroth thee unto me for ever; yea, I will betroth thee unto me in righteousness, and in judgment, and in lovingkindness, and in mercies."' },
      { verse: 'Hosea 6:3', text: '"Then shall we know, if we follow on to know the LORD: his going forth is prepared as the morning; and he shall come unto us as the rain, as the latter and former rain unto the earth."' },
      { verse: 'Hosea 6:6', text: '"For I desired mercy, and not sacrifice; and the knowledge of God more than burnt offerings."' },
      { verse: 'Hosea 11:8', text: '"How shall I give thee up, Ephraim? how shall I deliver thee, Israel?... mine heart is turned within me, my repentings are kindled together."' },
    ],
    deepPath: [
      { phase: '1. The Marriage of Hosea (ch. 1–3)', description: 'Read all three chapters carefully. Hosea\'s marriage is not primarily about Hosea — it is a divine object lesson. God is showing Israel his own heart through a human marriage. How does knowing God as a wronged husband change how you read the prophets?' },
      { phase: '2. Hesed in Hosea', description: 'Find every use of hesed in Hosea (2:19; 4:1; 6:4, 6; 10:12; 12:6). Hesed is the word that encompasses steadfast love, loyalty, faithfulness, and kindness. Jesus quotes 6:6 twice. Study its meaning carefully.' },
      { phase: '3. Hosea 11 — The Father\'s Anguish', description: 'Read 11:1-11. The metaphor shifts from husband/wife to father/child. "When Israel was a child, then I loved him, and called my son out of Egypt." God taught Ephraim to walk, took him in his arms — and he still turned away. The anguish of parental love rejected.' },
      { phase: '4. Matthew\'s Use of Hosea', description: 'Matthew 2:15 quotes Hosea 11:1 of Jesus\' flight to and return from Egypt. Matthew 9:13 and 12:7 quote Hosea 6:6. Hosea\'s theology is woven into the Gospel. How does Hosea\'s background enrich Matthew\'s portrait of Jesus?' },
      { phase: '5. The Call to Return', description: 'Read Hosea 14 — the final chapter is an exquisite call to repentance and a promise of restoration. Note the words given to pray (14:2-3). God provides the very words with which to return to him. Apply this to prayer in seasons of spiritual coldness.' },
    ],
  },
});

Object.assign(BOOK_STUDIES, {
  joel: {
    overview: `Joel uses a devastating locust plague as the occasion to announce the coming "Day of the LORD" — God's intervention in history to judge sin and restore his people. The locust army is a foretaste of cosmic judgment. But the center of Joel's message is the extraordinary promise of the Spirit poured out on all flesh (2:28-29), quoted by Peter on the day of Pentecost as being fulfilled in Acts 2. Joel thus bridges the OT's localized experiences of the Spirit with the NT's universal outpouring.`,
    howWritten: `Written by Joel (whose name means "YHWH is God"), probably during Judah's early monarchy, c. 835–796 BC (making him one of the earliest writing prophets). The book is brief (73 verses) but extraordinarily dense in theological content. Its influence on later prophets is enormous: Amos, Isaiah, Ezekiel, Zephaniah, and Revelation all draw on Joel's Day of the LORD imagery.`,
    structure: [
      'The Locust Plague (1:1–2:11) — Description of devastation; call to lament; the Day of the LORD',
      'Call to Repentance (2:12-17) — Return to the LORD with fasting and weeping',
      'Promise of Restoration (2:18-3:21) — Rain restored; the Spirit poured out; judgment on the nations; blessing on Zion',
    ],
    themes: [
      { title: 'The Day of the LORD', description: '"Blow ye the trumpet in Zion, and sound an alarm in my holy mountain: let all the inhabitants of the land tremble: for the day of the LORD cometh" (2:1). The Day of the LORD is both imminent (the locusts) and ultimate (the final judgment).' },
      { title: 'Genuine Repentance', description: '"Rend your heart, and not your garments" (2:13) — Joel calls for internal transformation, not external ritual. The OT prophets consistently value broken-heartedness over religious ceremony.' },
      { title: 'The Outpouring of the Spirit', description: '"And it shall come to pass afterward, that I will pour out my spirit upon all flesh; and your sons and your daughters shall prophesy" (2:28) — Peter stands up at Pentecost and quotes this as being fulfilled. The Spirit is no longer restricted to prophets and kings; he is given to all believers.' },
      { title: 'Restoration After Judgment', description: '"I will restore to you the years that the locust hath eaten" (2:25) — God\'s promise to replace what judgment destroyed. This is one of the Bible\'s most powerful promises for those who have experienced devastating loss.' },
    ],
    highlights: [
      { verse: 'Joel 2:12-13', text: '"Yet even now, saith the LORD, turn ye even to me with all your heart... rend your heart, and not your garments, and turn unto the LORD your God: for he is gracious and merciful."' },
      { verse: 'Joel 2:25', text: '"And I will restore to you the years that the locust hath eaten."' },
      { verse: 'Joel 2:28-29', text: '"And it shall come to pass afterward, that I will pour out my spirit upon all flesh; and your sons and your daughters shall prophesy, your old men shall dream dreams, your young men shall see visions."' },
      { verse: 'Joel 3:14', text: '"Multitudes, multitudes in the valley of decision: for the day of the LORD is near in the valley of decision."' },
    ],
    deepPath: [
      { phase: '1. The Locust Army', description: 'Read Joel 1:4–2:11. The locusts are both a natural disaster and a metaphor for divine judgment. Each insect metaphor (gnawing locust, swarming locust, etc.) suggests different waves of judgment. How does creation itself become God\'s instrument of correction?' },
      { phase: '2. Joel 2:28 at Pentecost', description: 'Read Joel 2:28-32 and then Acts 2:17-21. Peter says "this is that" — Pentecost is the fulfillment of Joel\'s promise. Note: Peter quotes "all flesh" — old/young, male/female, slave/free. The Spirit is universally given. What does this mean for the church?' },
      { phase: '3. "I Will Restore"', description: 'Read Joel 2:25-26. Make a list of what the locusts ate (years of progress, harvest, effort, hope). What is God promising to restore? Apply this promise to areas of your life where "locusts" have eaten — what has been lost that God can restore?' },
      { phase: '4. The Valley of Decision', description: 'Read Joel 3:14. The "valley of decision" is not about human choosing — it is the valley where God\'s verdict (his decision) will be rendered on the nations. How does this correct the common misuse of the verse?' },
      { phase: '5. Joel\'s Influence on Revelation', description: 'Compare Joel 2:31 with Revelation 6:12; Joel 3:13 with Revelation 14:15-16; Joel 3:16 with Revelation 19:15. Joel\'s imagery saturates Revelation. He established the prophetic vocabulary of the end.' },
    ],
  },

  amos: {
    overview: `Amos is the prophet of social justice — a shepherd and fig farmer from Tekoa in Judah who is sent to preach to the prosperous but corrupt Northern Kingdom of Israel during the reign of Jeroboam II (c. 760–753 BC). Israel was at its economic peak but morally bankrupt: the wealthy oppressed the poor, sold the needy for a pair of sandals, exploited the vulnerable, and then attended religious festivals. Amos thunders: God is not impressed by religious activity divorced from justice.`,
    howWritten: `Written by Amos (whose name means "burden-bearer"), c. 760–753 BC. Amos is explicit that he was not a professional prophet (7:14): "I was no prophet, neither was I a prophet's son; but I was an herdman, and a gatherer of sycomore fruit: and the LORD took me as I followed the flock." His outsider status gives him freedom to speak without fear of losing a professional position. The book opens with a series of judgment oracles against the surrounding nations before zeroing in on Israel itself — a rhetorical trap the audience walked into.`,
    structure: [
      'Oracles Against Nations (1:1–2:5) — Syria, Philistia, Tyre, Edom, Ammon, Moab, Judah',
      'Oracle Against Israel (2:6–4:13) — Three oracles against Israel\'s social sins',
      'Calls to Repentance (5:1–6:14) — Laments; "seek the LORD and live"; woe oracles',
      'Five Visions (7:1–9:10) — Locusts, fire, plumb line, summer fruit, the altar',
      'Restoration Promise (9:11-15) — "I will raise up the tabernacle of David"',
    ],
    themes: [
      { title: 'Social Justice', description: '"But let judgment run down as waters, and righteousness as a mighty stream" (5:24). Amos\' most famous line. God\'s justice is not a trickle — it is a mighty river. Injustice to the poor is an affront to the God of all creation.' },
      { title: 'Empty Religion Condemned', description: '"I hate, I despise your feast days... Take thou away from me the noise of thy songs; for I will not hear the melody of thy viols" (5:21, 23). God rejects worship that is not backed by justice. Singing to God while exploiting the poor is hypocrisy.' },
      { title: 'Privilege Means Greater Responsibility', description: '"You only have I known of all the families of the earth: therefore I will punish you for all your iniquities" (3:2). To be the covenant people is not privilege without responsibility — it is responsibility precisely because of privilege.' },
      { title: 'God\'s Universal Sovereignty', description: 'Amos addresses seven Gentile nations before addressing Israel. God judges all nations, not just Israel. He controls history, raises up nations, and holds all peoples accountable.' },
    ],
    highlights: [
      { verse: 'Amos 3:3', text: '"Can two walk together, except they be agreed?"' },
      { verse: 'Amos 5:21-24', text: '"I hate, I despise your feast days... But let judgment run down as waters, and righteousness as a mighty stream."' },
      { verse: 'Amos 8:11', text: '"Behold, the days come, saith the Lord GOD, that I will send a famine in the land, not a famine of bread... but of hearing the words of the LORD."' },
      { verse: 'Amos 9:11', text: '"In that day will I raise up the tabernacle of David that is fallen." — Quoted by James at the Jerusalem Council (Acts 15:16)' },
    ],
    deepPath: [
      { phase: '1. The Rhetorical Trap (ch. 1–2)', description: 'Read the oracles against the nations in order. Imagine Israel applauding each condemnation of their enemies — and then Amos turns the same spotlight on Israel. How does this preaching technique expose self-deception? How might it apply today?' },
      { phase: '2. Amos 5:21-24 and Worship', description: 'God says he "hates" their worship. The Hebrew is visceral — the same word used for detesting. How can genuine worship become detestable? What is the connection between worship and how we treat the vulnerable?' },
      { phase: '3. The Plumb Line (7:7-9)', description: 'God holds a plumb line against Israel — not against their enemies, but against themselves. The plumb line is the standard of God\'s covenant law. What does it mean when a church or nation is measured against God\'s standard and found off-center?' },
      { phase: '4. The Famine of God\'s Word', description: 'Read 8:11-12. The worst judgment is not economic collapse but the absence of God\'s Word. When God removes prophetic voice from a society, people wander searching and find nothing. Compare 1 Samuel 3:1.' },
      { phase: '5. Acts 15 and Amos 9', description: 'Read Amos 9:11-12 and Acts 15:15-18. James quotes Amos to defend including Gentiles in the church without requiring circumcision. The "tabernacle of David" rebuilt = the restored Messianic community open to all nations.' },
    ],
  },

  obadiah: {
    overview: `Obadiah, the shortest book of the OT (21 verses), pronounces judgment on Edom — the nation descended from Esau, Jacob's twin brother. When Babylon destroyed Jerusalem in 586 BC, Edom not only celebrated but actively participated: blocking Jewish refugees, handing over survivors, and looting the city. Obadiah's oracle is a declaration that pride and betrayal of a brother have a reckoning. "As thou hast done, it shall be done unto thee" (v. 15) is the law of divine retribution applied to nations.`,
    howWritten: `Written by Obadiah (whose name means "servant of YHWH"), likely c. 586 BC after Jerusalem's fall. Obadiah is an example of a tight, focused prophetic oracle: one subject (Edom), one message (judgment for pride and brotherly betrayal). The book has parallels with Jeremiah 49:14-16, suggesting either common source material or interdependence. Edom as a symbol of proud human opposition to God continues throughout the prophets and reaches its climax in Revelation's "Babylon."`,
    structure: [
      'Edom\'s Judgment Announced (1-9) — Pride; their strongholds will fall',
      'Edom\'s Sin Described (10-14) — Violence against Judah; betrayal in the day of disaster',
      'The Day of the LORD (15-21) — All nations judged; Edom falls; Israel restored',
    ],
    themes: [
      { title: 'The Sin of Pride', description: '"The pride of thine heart hath deceived thee, thou that dwellest in the clefts of the rock... that saith in his heart, Who shall bring me down to the ground?" (v. 3). Edom\'s mountain fortress bred arrogance. Pride deceives before it destroys.' },
      { title: 'Brotherly Betrayal', description: 'Edom and Israel were literal brothers (Esau and Jacob). Betraying a brother in his hour of need is doubly condemned. The phrase "in the day of" is repeated in verses 11-14 — Edom stood by on the worst day.' },
      { title: 'Divine Retribution', description: '"As thou hast done, it shall be done unto thee: thy reward shall return upon thine own head" (v. 15). This principle of proportional justice runs through Scripture (Gal 6:7; Rev 13:10).' },
      { title: 'The Kingdom of God', description: '"And the kingdom shall be the LORD\'s" (v. 21) — the book ends with the ultimate hope: despite the wickedness of nations, God\'s kingdom will prevail. Even a book about one small nation\'s judgment ends with cosmic hope.' },
    ],
    highlights: [
      { verse: 'Obadiah 1:3', text: '"The pride of thine heart hath deceived thee, thou that dwellest in the clefts of the rock, whose habitation is high; that saith in his heart, Who shall bring me down to the ground?"' },
      { verse: 'Obadiah 1:4', text: '"Though thou exalt thyself as the eagle, and though thou set thy nest among the stars, thence will I bring thee down, saith the LORD."' },
      { verse: 'Obadiah 1:15', text: '"For the day of the LORD is near upon all the heathen: as thou hast done, it shall be done unto thee: thy reward shall return upon thine own head."' },
      { verse: 'Obadiah 1:21', text: '"And saviours shall come up on mount Zion to judge the mount of Esau; and the kingdom shall be the LORD\'s."' },
    ],
    deepPath: [
      { phase: '1. Edom\'s History', description: 'Read Genesis 25:19-34 and 27 (Esau and Jacob\'s conflict). Then Numbers 20:14-21 (Edom refuses Israel passage in the desert). The conflict is ancient and deep. How does Obadiah\'s oracle make sense in this context?' },
      { phase: '2. Pride as Deception', description: 'Verse 3: "the pride of thine heart hath deceived thee." Pride is first a cognitive failure — it gives a false map of reality. Edom thought their mountain stronghold was security; God thought differently. How does pride distort our perception of our own safety?' },
      { phase: '3. "In the Day Of"', description: 'Read verses 11-14. The phrase "in the day" repeats seven times. Edom\'s sin was not just action but inaction and celebration when their brother was suffering. What does this say about our response to others\' suffering?' },
      { phase: '4. Amos 9 and Obadiah 18', description: 'Both Amos (9:11-12) and Obadiah (1:17-21) speak of restored Israel possessing "Edom" and "Esau." In the Messianic age, the ancient hostility is resolved. James quotes Amos 9 of the church\'s inclusion of Gentiles — Edom/Esau become part of the family.' },
      { phase: '5. "The Kingdom Shall Be the LORD\'s"', description: 'Read the final verse in the context of the entire book. A 21-verse judgment oracle ends with the broadest possible horizon: God\'s kingdom over all. How does this trajectory from historical judgment to cosmic hope define prophetic literature?' },
    ],
  },

  jonah: {
    overview: `Jonah is the most unusual of the prophetic books — it is almost entirely narrative about the prophet rather than his oracles. God calls Jonah to preach repentance to Nineveh, the capital of the brutal Assyrian empire. He runs the other direction. Swallowed by a great fish, he repents and is recommissioned. He preaches; Nineveh repents. Then Jonah is furious — he didn't want them to be saved. The book's real subject is not the whale but the narrowness of a prophet's heart compared to the expansiveness of God's mercy.`,
    howWritten: `Written by Jonah son of Amittai (mentioned in 2 Kings 14:25 as a real prophet), c. 785–775 BC. Jesus explicitly references Jonah as historical fact: "For as Jonas was three days and three nights in the whale's belly; so shall the Son of Man be three days and three nights in the heart of the earth" (Matt 12:40). The book is a masterpiece of ironic narrative: the pagan sailors pray more earnestly than the prophet; the Ninevites repent more thoroughly than Israel ever did; even the fish obeys God.`,
    structure: [
      'First Commission: Flight (1) — Jonah called; runs; storm; thrown overboard; the fish',
      'Jonah\'s Prayer (2) — Prayer from the fish\'s belly; vomited out',
      'Second Commission: Preaching (3) — Jonah preaches; Nineveh repents from king to animals',
      'Jonah\'s Anger and God\'s Reply (4) — Jonah\'s complaint; the gourd; God\'s question',
    ],
    themes: [
      { title: 'God\'s Universal Mercy', description: 'Jonah is a Jew sent to Israel\'s most feared enemy. When they repent, God relents. The scandal of the book is not the fish — it is that God cares about Nineveh as much as Israel. This is the missionary heart of God.' },
      { title: 'The Reluctant Servant', description: 'Jonah\'s character is consistently ironic: he sleeps in a storm while pagan sailors pray; he is angry at God\'s mercy; he cares more about a plant than 120,000 people. His story is a mirror for any narrowly nationalistic faith.' },
      { title: 'Repentance Is Possible', description: 'Nineveh\'s repentance (ch. 3) is the most thorough in Scripture — king, people, and even animals fasted. Jesus calls it the paradigm of repentance: "the men of Nineveh shall rise in judgment with this generation, and shall condemn it" (Matt 12:41).' },
      { title: 'The Sign of Jonah', description: '"As Jonas was three days and three nights in the whale\'s belly; so shall the Son of Man be three days and three nights in the heart of the earth" (Matt 12:40). Jesus himself provides the key typological interpretation: Jonah is a sign of his death and resurrection.' },
    ],
    highlights: [
      { verse: 'Jonah 1:3', text: '"But Jonah rose up to flee unto Tarshish from the presence of the LORD."' },
      { verse: 'Jonah 2:9', text: '"But I will sacrifice unto thee with the voice of thanksgiving; I will pay that that I have vowed. Salvation is of the LORD."' },
      { verse: 'Jonah 3:10', text: '"And God saw their works, that they turned from their evil way; and God repented of the evil, that he had said that he would do unto them; and he did it not."' },
      { verse: 'Jonah 4:2', text: '"For I knew that thou art a gracious God, and merciful, slow to anger, and of great kindness, and repentest thee of the evil."' },
    ],
    deepPath: [
      { phase: '1. The Obedient Fish vs. the Disobedient Prophet', description: 'Read ch. 1–2. The sailors, the storm, and the fish all obey God immediately. Jonah alone resists. This irony is the book\'s central lesson: creation obeys its Creator; God\'s people can choose not to. What does this say about the gift of freedom?' },
      { phase: '2. The Sign of Jonah', description: 'Read Matthew 12:38-41 and Luke 11:29-32. Jesus says the only sign given is the "sign of Jonah." He applies it to his death and resurrection (Matt 12:40) AND to the call to repentance (Luke 11:32). Both dimensions are present.' },
      { phase: '3. Jonah\'s Theology vs. God\'s Theology', description: 'Read 4:2. Jonah knows the theology perfectly: "gracious, merciful, slow to anger, abundant in lovingkindness." He is angry precisely because God is who he knows him to be. How is it possible to have correct theology and still be spiritually wrong?' },
      { phase: '4. The Gourd and the City', description: 'Read 4:6-11. Jonah cares deeply about a gourd that sheltered him for one day. God asks: "Shall I not spare Nineveh, that great city, wherein are more than sixscore thousand persons that cannot discern between their right hand and their left hand?" What is God\'s value system?' },
      { phase: '5. The Unfinished Ending', description: 'Notice: the book ends with a question (4:11) — and Jonah never answers. The reader must answer. Do you share God\'s concern for people who don\'t know their right hand from their left? The book is not about Jonah; it is about you.' },
    ],
  },

  micah: {
    overview: `Micah is a rural prophet from Moresheth (southwest Judah) who brings God's lawsuit against Samaria and Jerusalem. Contemporary with Isaiah, he preaches during the reigns of Jotham, Ahaz, and Hezekiah (742–687 BC). His oracles alternate between judgment and hope in a clear three-cycle structure. Micah 6:8 — "He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?" — is the Bible's most concise summary of the ethical life.`,
    howWritten: `Written by Micah of Moresheth, c. 742–687 BC. The book is organized in three cycles of judgment-and-hope, each introduced by "Hear" (1:2; 3:1; 6:1). Micah 5:2 — "But thou, Bethlehem Ephratah, though thou be little among the thousands of Judah, yet out of thee shall he come forth unto me that is to be ruler in Israel; whose goings forth have been from of old, from everlasting" — is the OT's most precise prediction of the Messiah's birthplace, quoted by the chief priests when the Magi came to Herod (Matt 2:5-6).`,
    structure: [
      'Cycle 1 (1–2) — Judgment on Samaria and Judah; hope (2:12-13)',
      'Cycle 2 (3–5) — Against false leaders; the future kingdom; Bethlehem (5:2)',
      'Cycle 3 (6–7) — God\'s lawsuit; 6:8; confession and hope; "Who is a God like unto thee?"',
    ],
    themes: [
      { title: 'Justice, Mercy, Humility', description: 'Micah 6:8 summarizes the whole law into three requirements: justice (treat others rightly), mercy/steadfast love (live with covenant faithfulness), and humility (walk in dependent relationship with God). Jesus calls these "the weightier matters of the law" (Matt 23:23).' },
      { title: 'False Prophets and Leaders', description: 'Micah 3 is a withering indictment of prophets who preach for money ("they bite with their teeth, and cry, Peace") and priests who teach for payment. The test of a true prophet is not popular acclaim but faithfulness to God\'s word.' },
      { title: 'The Bethlehem Prophecy', description: '"But thou, Bethlehem Ephratah... out of thee shall he come forth unto me that is to be ruler in Israel; whose goings forth have been from of old, from everlasting" (5:2). Written 700 years before Christmas — the precision is extraordinary.' },
      { title: 'God\'s Incomparable Forgiveness', description: '"Who is a God like unto thee, that pardoneth iniquity, and passeth by the transgression of the remnant of his heritage? he retaineth not his anger for ever, because he delighteth in mercy" (7:18). Micah\'s own name (Mi-ca-yah = who is like YHWH?) is answered here.' },
    ],
    highlights: [
      { verse: 'Micah 5:2', text: '"But thou, Bethlehem Ephratah, though thou be little among the thousands of Judah, yet out of thee shall he come forth unto me that is to be ruler in Israel; whose goings forth have been from of old, from everlasting."' },
      { verse: 'Micah 6:8', text: '"He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?"' },
      { verse: 'Micah 7:7', text: '"Therefore I will look unto the LORD; I will wait for the God of my salvation: my God will hear me."' },
      { verse: 'Micah 7:18-19', text: '"Who is a God like unto thee, that pardoneth iniquity... thou wilt cast all their sins into the depths of the sea."' },
    ],
    deepPath: [
      { phase: '1. The Three Requirements (6:8)', description: 'Study each word: mishpat (justice — legal, structural rightness), hesed (steadfast love/mercy — relational faithfulness), tsana (walk humbly — the opposite of self-sufficiency). How do all three relate? Can you have one without the others?' },
      { phase: '2. Micah 5:2 and Matthew 2', description: 'Read Micah 5:2 and Matthew 2:5-6. The chief priests knew immediately which verse to quote when Herod asked where the Messiah would be born. They knew the answer — but didn\'t go to Bethlehem. Knowledge without response is the most dangerous spiritual state.' },
      { phase: '3. God\'s Lawsuit Against Israel (6:1-7)', description: 'Read the covenant lawsuit format (rib) in 6:1-7. God is the plaintiff; the mountains are witnesses; Israel is the defendant. God lists what he has done for Israel. What is Israel\'s response? How does this lawsuit form appear in the NT (e.g., Romans 1–3)?' },
      { phase: '4. False Prophets (ch. 3)', description: 'Read 3:5-12. False prophets "bite with their teeth and cry, Peace" — they tell people what they want to hear for financial reward. Then compare with Jeremiah 23:16-17; Ezekiel 13:10; 2 Timothy 4:3-4. What distinguishes the true from the false?' },
      { phase: '5. "Who Is a God Like Thee?"', description: 'Read 7:18-20. This is a doxology of forgiveness. "He delighteth in mercy" — forgiveness is not reluctant or minimal; it is God\'s delight. "Cast all their sins into the depths of the sea" — not buried, not shelved, but buried at the deepest, darkest, most inaccessible place.' },
    ],
  },

  nahum: {
    overview: `Nahum proclaims the destruction of Nineveh, capital of the Assyrian empire — the most powerful and feared empire of its day. About 150 years after Jonah's mission to Nineveh, the city has returned to violence, idolatry, and oppression. Nahum's oracle is both a declaration of divine justice against evil and a word of profound comfort to the nations that Assyria has terrorized. "Behold upon the mountains the feet of him that bringeth good tidings, that publisheth peace!" (1:15) — good news is the announcement of the oppressor's fall.`,
    howWritten: `Written by Nahum of Elkosh, c. 663–612 BC (after Thebes fell, 663 BC, and before Nineveh's actual fall, 612 BC). Nahum's Hebrew is among the most vivid and poetic in the prophets — his description of Nineveh's fall (ch. 2–3) is a cinematically detailed battle scene. The book opens with an acrostic poem on God's character (1:2-8 traces roughly through the first half of the Hebrew alphabet) before launching into the specific judgment of Nineveh.`,
    structure: [
      'God\'s Character (1:1-8) — Jealous, avenging, slow to anger, great in power, good',
      'Judgment Announced (1:9–2:2) — Nineveh condemned; Judah comforted',
      'Nineveh\'s Fall (2:3–3:19) — Vivid battle scene; prostitute city unmasked; no healing for your wound',
    ],
    themes: [
      { title: 'God\'s Jealousy and Justice', description: '"The LORD is a jealous God, and avengeth; the LORD is furious; the LORD will take vengeance on his adversaries" (1:2). Nahum begins with God\'s character — not arbitrary wrath but covenantal jealousy protecting his people.' },
      { title: 'God\'s Goodness Amid Judgment', description: '"The LORD is good, a strong hold in the day of trouble; and he knoweth them that trust in him" (1:7) — inserted in the middle of the wrath passage. Even the God of judgment is the refuge of those who trust him.' },
      { title: 'The End of Oppression as Good News', description: 'The fall of Nineveh — the fall of the oppressor — is called "good tidings" and "peace" (1:15). The gospel is not just the announcement of forgiveness; it is the announcement that evil will not have the last word.' },
      { title: 'The Limits of Evil Empire', description: 'Assyria seemed invincible — yet fell in 612 BC exactly as Nahum predicted. Every human empire that sets itself against God has an end date. "There is no healing of thy bruise; thy wound is grievous" (3:19).' },
    ],
    highlights: [
      { verse: 'Nahum 1:3', text: '"The LORD is slow to anger, and great in power, and will not at all acquit the wicked: the LORD hath his way in the whirlwind and in the storm, and the clouds are the dust of his feet."' },
      { verse: 'Nahum 1:7', text: '"The LORD is good, a strong hold in the day of trouble; and he knoweth them that trust in him."' },
      { verse: 'Nahum 1:15', text: '"Behold upon the mountains the feet of him that bringeth good tidings, that publisheth peace! O Judah, keep thy solemn feasts, perform thy vows: for the wicked shall no more pass through thee."' },
      { verse: 'Nahum 3:1', text: '"Woe to the bloody city! it is all full of lies and robbery; the prey departeth not."' },
    ],
    deepPath: [
      { phase: '1. Assyrian Atrocities', description: 'Research Assyrian warfare practices (pyramids of skulls, flaying of skin, impalement). This background transforms Nahum from seemingly harsh to understandable. God\'s anger against Assyria was not capricious but a response to genuine evil.' },
      { phase: '2. The Jealousy of God', description: 'Read 1:2 alongside Exodus 20:5; 34:14. Divine jealousy is covenantal — it is the exclusive claim of a marriage covenant. Idolatry is adultery. God\'s anger at idolatry is the anger of a faithful husband. How does this reframe jealousy as a virtue in God?' },
      { phase: '3. Good and Wrathful', description: 'Read 1:2-8. God is described as both "jealous and avenging" (1:2) AND "good" (1:7) in the same passage. These are not contradictions — they are two sides of the same character. How does the cross demonstrate both simultaneously?' },
      { phase: '4. Nahum 1:15 and Romans 10', description: 'Read Nahum 1:15 alongside Isaiah 52:7 and Romans 10:15. Paul quotes Isaiah 52:7 (which closely parallels Nahum) of the gospel preachers. What is the "peace" being published? The defeat of the ultimate oppressor — sin and death.' },
      { phase: '5. The Fall of Nineveh as History', description: 'Nineveh fell in 612 BC to a Babylonian-Median coalition — exactly as described. The city was so thoroughly destroyed it was not rediscovered until 1845. What does the precision of biblical prophecy\'s historical fulfillment say about the reliability of its eschatological promises?' },
    ],
  },

  habakkuk: {
    overview: `Habakkuk is the only prophet who primarily argues with God rather than preaching to the people. He opens with a complaint: "O LORD, how long shall I cry, and thou wilt not hear? even cry out unto thee of violence, and thou wilt not save?" (1:2). God answers that he is raising up the Babylonians to judge Judah. This provokes a deeper complaint: how can a holy God use a more wicked nation to judge a less wicked one? God's answer — "the just shall live by his faith" (2:4) — becomes the theological foundation of Romans, Galatians, and Hebrews.`,
    howWritten: `Written by Habakkuk (whose name possibly means "wrestle" or "embrace"), c. 612–589 BC, just before Babylon's rise to dominance. The book is structured as a dialogue between prophet and God, followed by a magnificent psalm (ch. 3) that moves from complaint to confession of faith. Martin Luther's rediscovery of "the just shall live by faith" (2:4 → Romans 1:17) was the spark of the Reformation.`,
    structure: [
      'First Complaint (1:1-4) — Why does God allow wickedness in Judah?',
      'First Answer (1:5-11) — God is raising up Babylon',
      'Second Complaint (1:12–2:1) — How can God use wicked Babylon?',
      'Second Answer (2:2-20) — The just live by faith; woe to Babylon; God is in his temple',
      'Habakkuk\'s Psalm (3) — God\'s power in history; "Yet I will rejoice in the LORD"',
    ],
    themes: [
      { title: 'Wrestling with God\'s Ways', description: 'Habakkuk models faith that is honest about confusion. He does not pretend to understand God\'s ways — he argues, questions, and stakes out a watching post (2:1). God honors this kind of wrestling far more than passive acceptance.' },
      { title: 'The Just Shall Live by Faith', description: '"Behold, his soul which is lifted up is not upright in him: but the just shall live by his faith" (2:4). This single verse is quoted three times in the NT (Rom 1:17; Gal 3:11; Heb 10:38) and undergirds the entire NT doctrine of justification by faith.' },
      { title: 'Divine Sovereignty Over Evil', description: 'God\'s use of Babylon to judge Israel raises the deepest theodicy question: can God use evil instruments without being complicit in evil? The book answers: God remains sovereign without becoming morally identical to the instruments he uses.' },
      { title: 'Joy Despite Circumstances', description: 'Habakkuk\'s conclusion (3:17-19) is one of the most radical confessions in Scripture: even if the fig tree doesn\'t blossom, the olive fails, the flocks are cut off — "Yet I will rejoice in the LORD." Joy rooted not in circumstances but in God\'s character.' },
    ],
    highlights: [
      { verse: 'Habakkuk 1:2', text: '"O LORD, how long shall I cry, and thou wilt not hear? even cry out unto thee of violence, and thou wilt not save?"' },
      { verse: 'Habakkuk 2:4', text: '"Behold, his soul which is lifted up is not upright in him: but the just shall live by his faith."' },
      { verse: 'Habakkuk 2:14', text: '"For the earth shall be filled with the knowledge of the glory of the LORD, as the waters cover the sea."' },
      { verse: 'Habakkuk 3:17-18', text: '"Although the fig tree shall not blossom... yet I will rejoice in the LORD, I will joy in the God of my salvation."' },
    ],
    deepPath: [
      { phase: '1. Permission to Question God', description: 'Read 1:1-4 and 1:12-17. Habakkuk\'s questions are not lack of faith — they are faith wrestling with hard reality. Compare with Psalms of lament (Ps 22, 44, 88), Job 3, Jeremiah 20. God\'s people have always been given permission to ask hard questions.' },
      { phase: '2. "The Just Shall Live by Faith"', description: 'Read 2:4, then Romans 1:17, Galatians 3:11, and Hebrews 10:38. Each NT author quotes the same verse but emphasizes a different word: Romans emphasizes "just" (who is righteous?), Galatians emphasizes "faith" (not law), Hebrews emphasizes "live" (perseverance).' },
      { phase: '3. The Five Woes (2:6-20)', description: 'God pronounces five "woe" oracles on Babylon for specific sins: greed, exploitation, violence, drunkenness/shame, and idolatry. List them. How do these five sins describe any oppressive system? How does 2:14 provide the ultimate answer?' },
      { phase: '4. The Theophany Psalm (ch. 3)', description: 'Read ch. 3 as poetry — its imagery of God striding through creation in power (earthquakes, lightning, rivers parting) deliberately echoes the Exodus. How does remembering God\'s past acts of salvation become the basis for present faith?' },
      { phase: '5. The Conclusion (3:17-19)', description: 'The "even if" structure is revolutionary: Habakkuk lists everything that could go wrong economically (crops fail, animals die) and then refuses to let circumstances define his spiritual state. What would your personal "even if" list look like? Can you still say "yet I will rejoice"?' },
    ],
  },

  zephaniah: {
    overview: `Zephaniah descends from the royal line of Hezekiah (1:1) and ministers during the early reign of Josiah (640–609 BC), before Josiah's reform. He preaches against the syncretism that flourished under the evil kings Manasseh and Amon — Jerusalem's priests worshiping Baal and Milcom on the rooftops, swearing by both YHWH and Milcom. His message is the most concentrated announcement of the Day of the LORD in the prophets — but it concludes with one of the most tender descriptions of God's love for his people anywhere in Scripture: "He will joy over thee with singing" (3:17).`,
    howWritten: `Written by Zephaniah (whose name means "YHWH hides/treasures"), c. 640–609 BC. The unusually long genealogy in 1:1 (four generations) emphasizes his royal Davidic lineage — perhaps to give him authority to speak to the royal court. His style is urgent and concentrated; the Day of the LORD fills chapters 1–2 with almost breathless intensity before the restoration oracles of chapter 3 provide relief.`,
    structure: [
      'The Day of the LORD (1–2) — Universal judgment; Jerusalem; surrounding nations',
      'Woe to Jerusalem (3:1-7) — The city\'s corruption',
      'Promise of Restoration (3:8-20) — Purified people; God singing over his people',
    ],
    themes: [
      { title: 'The Day of the LORD', description: 'Zephaniah 1:14-16 is the basis for the Dies Irae, the great medieval hymn about Judgment Day. "A day of wrath, a day of trouble and distress... a day of the trumpet and alarm against the fenced cities." The Day of the LORD is not metaphor — it is a real future event.' },
      { title: 'The Remnant', description: '"Seek ye the LORD, all ye meek of the earth, which have wrought his judgment; seek righteousness, seek meekness: it may be ye shall be hid in the day of the LORD\'s anger" (2:3). Zephaniah\'s word for "hid/hidden" echoes his own name. The humble remnant finds refuge.' },
      { title: 'God\'s Joy Over His People', description: '"The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with singing" (3:17) — the most tender description of God\'s delight in his people in the entire OT.' },
      { title: 'Universal Scope', description: 'Zephaniah\'s Day of the LORD is cosmic — it encompasses all nations. But God\'s redemptive purpose is also universal: "I will turn to the people a pure language, that they may all call upon the name of the LORD, to serve him with one consent" (3:9). Pentecost reverses Babel.' },
    ],
    highlights: [
      { verse: 'Zephaniah 1:14', text: '"The great day of the LORD is near, it is near, and hasteth greatly, even the voice of the day of the LORD: the mighty man shall cry there bitterly."' },
      { verse: 'Zephaniah 2:3', text: '"Seek ye the LORD, all ye meek of the earth, which have wrought his judgment; seek righteousness, seek meekness: it may be ye shall be hid in the day of the LORD\'s anger."' },
      { verse: 'Zephaniah 3:9', text: '"For then will I turn to the people a pure language, that they may all call upon the name of the LORD, to serve him with one consent."' },
      { verse: 'Zephaniah 3:17', text: '"The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with singing."' },
    ],
    deepPath: [
      { phase: '1. The Dies Irae', description: 'Read 1:14-18. Then listen to (or read the text of) the Dies Irae, the 13th-century Latin hymn based on this passage. How does the Catholic tradition captured the solemnity of Judgment Day from Zephaniah? How does the NT develop this further (2 Thess 1:7-10)?' },
      { phase: '2. The Seeking Imperative', description: 'Read 2:3 three times. Three imperatives: seek the LORD, seek righteousness, seek meekness. This is the posture of the faithful remnant. Compare with Matthew 5:3-12 (Beatitudes). How do "meekness" and "hidden in the day of wrath" connect?' },
      { phase: '3. Pure Language (3:9)', description: 'Read 3:9. "A pure language" — literally "a clear/pure lip" so all nations can call on God together. Compare Genesis 11 (Babel: one language corrupted and scattered) with Acts 2 (Pentecost: multiple languages unified in praise). Zephaniah sees the reversal of Babel.' },
      { phase: '4. God Singing (3:17)', description: 'Read 3:17 slowly. God is described as a mighty warrior who saves AND as one who sings. The word for "joy over with singing" (ranan) is the most exuberant word for song in Hebrew — a ringing cry of joy. Imagine the Creator of the universe singing over you by name.' },
      { phase: '5. Zephaniah and Josiah\'s Reform', description: 'Read 2 Chronicles 34:1-7. Josiah began his reform around the same time Zephaniah was preaching. The prophetic word and the political reform moved in tandem. How do prophetic preaching and structural/social change relate? Can one happen without the other?' },
    ],
  },

  haggai: {
    overview: `Haggai is the most precisely dated of all the prophetic books — his four messages are stamped with exact dates in 520 BC (fourteen years after the first return from exile). The returned exiles had laid the temple foundation in 536 BC but stopped building due to opposition. For sixteen years the temple sat unfinished while everyone built their own houses. Haggai's message is blunt: "Is it time for you, O ye, to dwell in your cieled houses, and this house lie waste?" The people obey immediately — within 23 days the work restarts.`,
    howWritten: `Written by Haggai, delivered in a four-month period: August, September, and December 520 BC. Haggai is unique in that his preaching produced immediate, measurable results — the people obeyed without a long period of resistance. Together with Zechariah (who began prophesying 2 months after Haggai), he represents the post-exilic prophetic duo who motivated the rebuilding of the second temple, completed in 516 BC (Ezra 5:1-2; 6:14).`,
    structure: [
      'First Message (1:1-15) — Consider your ways; build the temple; the people obey',
      'Second Message (2:1-9) — Encouragement for those who remember Solomon\'s glory; "the glory of this latter house shall be greater"',
      'Third Message (2:10-19) — Holiness is not contagious but defilement is; from today God will bless',
      'Fourth Message (2:20-23) — Zerubbabel as God\'s signet ring; Messianic promise',
    ],
    themes: [
      { title: 'Misplaced Priorities', description: '"Is it time for you to dwell in your cieled houses, and this house lie waste?" (1:4). The exiles were prosperous enough to panel their own ceilings but claimed there was no time or resources for God\'s house. The problem was priority, not poverty.' },
      { title: 'Consider Your Ways', description: '"Consider your ways" appears four times (1:5, 7; 2:15, 18). Haggai is asking for spiritual self-examination: why are you planting much and harvesting little? Because you have neglected God\'s house. The connection between spiritual priorities and material fruitfulness.' },
      { title: 'Greater Glory to Come', description: '"The glory of this latter house shall be greater than of the former, saith the LORD of hosts: and in this place will I give peace" (2:9). The second temple seemed humbler — Haggai promises a greater glory. Fulfilled: Jesus visited this (Herod\'s rebuilt) temple.' },
      { title: 'Zerubbabel the Signet Ring', description: '"I will make thee as a signet: for I have chosen thee" (2:23). Zerubbabel is named the signet ring — the king\'s seal of authority. He is a Davidic descendant and an ancestor of Jesus (Matt 1:12-13), connecting the Messianic hope to the post-exile rebuilding.' },
    ],
    highlights: [
      { verse: 'Haggai 1:5', text: '"Now therefore thus saith the LORD of hosts; Consider your ways."' },
      { verse: 'Haggai 1:8', text: '"Go up to the mountain, and bring wood, and build the house; and I will take pleasure in it, and I will be glorified, saith the LORD."' },
      { verse: 'Haggai 2:7-9', text: '"And I will shake all nations, and the desire of all nations shall come: and I will fill this house with glory, saith the LORD of hosts... The glory of this latter house shall be greater than of the former."' },
      { verse: 'Haggai 2:19', text: '"Is the seed yet in the barn? yea, as yet the vine, and the fig tree, and the pomegranate, and the olive tree, hath not brought forth: from this day will I bless you."' },
    ],
    deepPath: [
      { phase: '1. "Consider Your Ways"', description: 'Read 1:2-11. The people say "the time is not come." But they have time to panel their own houses. Do a personal audit: where do I invest time, money, energy? What does the pattern reveal about my actual priorities vs. stated priorities?' },
      { phase: '2. "Be Strong and Work"', description: 'Read 2:4 — "Be strong... be strong... be strong... and work: for I am with you." The Davidic formula (Josh 1:6-9; 1 Chron 28:20) is applied to ordinary building work. The presence of God makes ordinary work sacred.' },
      { phase: '3. The Greater Glory', description: 'Read 2:6-9. "I will shake the heavens... the desire of all nations shall come." Early interpreters read "desire" as the Messiah himself. Jesus visited the second temple — the greater glory came in his person. How does the incarnation fulfill this?' },
      { phase: '4. Defilement vs. Holiness', description: 'Read 2:10-19. Haggai uses a legal illustration: holiness does not spread by contact (a holy bone doesn\'t make the pot holy) but defilement does. Sin is contagious; holiness is not automatically transferable. What does this teach about spiritual community?' },
      { phase: '5. From This Day Forward', description: 'Read 2:18-19. "From this day will I bless you." The moment of obedience is the turning point of blessing. God links his blessing to a specific date of obedience. How does the principle of "from this day forward" apply to areas of delayed obedience in your own life?' },
    ],
  },

  zechariah: {
    overview: `Zechariah is the most Messianic of the minor prophets — he contains more prophecies about Christ than any other minor prophet. Beginning two months after Haggai, he prophesies to encourage the rebuilding of the temple through eight extraordinary night visions (ch. 1–6), followed by two major oracle sections (ch. 9–14). The book contains specific prophecies fulfilled in Jesus: riding into Jerusalem on a donkey (9:9), 30 pieces of silver (11:12-13), the hands pierced (12:10), the shepherd struck and the sheep scattered (13:7).`,
    howWritten: `Written by Zechariah ben Berechiah ben Iddo, a priest-prophet (Neh 12:16), c. 520–480 BC. The book divides into three clear sections: the eight night visions and their interpretations (1–6), prophetic addresses (7–8), and two major oracle collections (9–14) that are the most difficult and Messianic. The latter sections (ch. 9–14) are so full of Messianic content that Matthew quotes from them five times in the passion narrative alone.`,
    structure: [
      'Eight Night Visions (1–6) — Horses, horns, measuring line, Joshua, lampstand, scroll, ephah, chariots',
      'Questions and Answers (7–8) — Fasting; God\'s concern for justice; the promise of restoration',
      'First Burden (9–11) — Coming king; the good shepherd rejected; 30 pieces of silver',
      'Second Burden (12–14) — Jerusalem besieged; they look on him whom they pierced; the Day of the LORD',
    ],
    themes: [
      { title: 'The Branch', description: '"Behold the man whose name is The BRANCH; and he shall grow up out of his place, and he shall build the temple of the LORD" (6:12). This Messianic title (Branch/Tsemach) appears in Isaiah 11:1, Jeremiah 23:5, 33:15, and Zechariah 3:8 and 6:12.' },
      { title: 'The Humble King', description: '"Rejoice greatly, O daughter of Zion... thy King cometh unto thee: he is just, and having salvation; lowly, and riding upon an ass" (9:9). Quoted by all four Gospels of the Triumphal Entry — a king who comes in humility and salvation, not military conquest.' },
      { title: 'The Pierced One', description: '"And they shall look upon me whom they have pierced, and they shall mourn for him" (12:10). This verse is quoted by John 19:37 at the crucifixion and Revelation 1:7. It is one of the most explicit prophecies of the crucifixion in the OT.' },
      { title: '"Not by Might Nor by Power"', description: '"Not by might, nor by power, but by my spirit, saith the LORD of hosts" (4:6). The golden lampstand is filled by oil from the olive trees — divine supply, not human effort. The temple will be completed by God\'s Spirit, not human strength.' },
    ],
    highlights: [
      { verse: 'Zechariah 4:6', text: '"Not by might, nor by power, but by my spirit, saith the LORD of hosts."' },
      { verse: 'Zechariah 9:9', text: '"Rejoice greatly, O daughter of Zion; shout, O daughter of Jerusalem: behold, thy King cometh unto thee: he is just, and having salvation; lowly, and riding upon an ass."' },
      { verse: 'Zechariah 12:10', text: '"And I will pour upon the house of David, and upon the inhabitants of Jerusalem, the spirit of grace and of supplications: and they shall look upon me whom they have pierced."' },
      { verse: 'Zechariah 13:7', text: '"Awake, O sword, against my shepherd, and against the man that is my fellow, saith the LORD of hosts: smite the shepherd, and the sheep shall be scattered." — Quoted by Jesus of his own arrest (Matt 26:31)' },
    ],
    deepPath: [
      { phase: '1. The Eight Night Visions (ch. 1–6)', description: 'Read the eight visions in sequence. They were given in one night (1:8) — a sustained revelation. The overarching message: God is watching over his people; the nations that oppressed Israel will themselves be judged; God will return to Jerusalem.' },
      { phase: '2. "Not by Might" (4:6)', description: 'Read 4:1-14. The lampstand is fed by olive oil from the trees — continuous, direct supply from God. The temple will not be completed by military power or political maneuvering but by divine Spirit. Apply to all God-given tasks.' },
      { phase: '3. Zechariah 9:9 and the Triumphal Entry', description: 'Read 9:9 and then all four Gospel accounts of the Triumphal Entry (Matt 21:1-11; Mark 11:1-11; Luke 19:28-44; John 12:12-19). How did the crowds misread the prophecy? They expected a military messiah; Jesus came as a king of peace.' },
      { phase: '4. The Thirty Pieces of Silver', description: 'Read 11:12-13 — "They weighed for my price thirty pieces of silver... I cast them to the potter in the house of the LORD." Then read Matthew 26:15; 27:3-10. The precision of the fulfillment (amount, location, purpose) is extraordinary.' },
      { phase: '5. "Him Whom They Pierced"', description: 'Read 12:10-14. Zechariah sees a future day when Israel will mourn over the one they pierced — a mourning as great as the mourning for Josiah (the greatest tragedy of Judah). Then read John 19:37 and Revelation 1:7. What does this tell us about Israel\'s future recognition of Jesus?' },
    ],
  },

  malachi: {
    overview: `Malachi is the last voice of the OT — and his final words anticipate 400 years of prophetic silence. Writing around 430 BC (contemporary with Nehemiah's second visit to Jerusalem), Malachi confronts a community that has grown spiritually complacent after returning from exile. The tone is disputatious — each section is structured as a divine accusation, the people's denial, and God's rebuttal. His final words promise the return of "Elijah the prophet" before the great and dreadful Day of the LORD — fulfilled in John the Baptist (Matt 11:14; 17:12-13).`,
    howWritten: `Written by Malachi (whose name means "my messenger"), c. 430 BC. The name may be a title rather than a proper name ("my messenger" — the same word used in 3:1). The book's six disputations (rib-speech form) each follow the same structure: divine statement → human challenge ("wherein?") → God's expanded answer. This legal dialogue format dramatizes Israel's covenant lawsuit. Malachi quotes Deuteronomy more than any other book — the covenant is the framework for all his accusations.`,
    structure: [
      'God\'s Love for Jacob (1:1-5) — "I have loved you, saith the LORD"',
      'Corrupt Priesthood (1:6–2:9) — Blemished offerings; priests who despise God\'s name',
      'Covenant Faithfulness in Marriage (2:10-16) — Treacherous divorce; "God hates divorce"',
      'The Messenger and Judgment (2:17–3:18) — "Ye have wearied the LORD"; the day of refining; robbing God',
      'The Coming Day (4:1-6) — The Sun of Righteousness; the return of Elijah',
    ],
    themes: [
      { title: 'God\'s Covenant Love', description: '"I have loved you, saith the LORD. Yet ye say, Wherein hast thou loved us?" (1:2). The book opens with God asserting his love and Israel questioning it. The entire OT story is evidence of this love — yet the post-exilic community struggles to see it.' },
      { title: 'Authentic Worship', description: '"Will a man rob God? Yet ye have robbed me. But ye say, Wherein have we robbed thee? In tithes and offerings" (3:8). Malachi exposes half-hearted worship: blemished sacrifices (1:8), withheld tithes (3:8-10). God deserves the best, not the leftovers.' },
      { title: 'Covenant Faithfulness in Marriage', description: '"And this have ye done again, covering the altar of the LORD with tears... because the LORD hath been witness between thee and the wife of thy youth" (2:14). God is deeply concerned with covenant faithfulness in marriage — he witnesses every marriage.' },
      { title: 'The Coming Messenger and Elijah', description: '"Behold, I will send my messenger, and he shall prepare the way before me" (3:1); "Behold, I will send you Elijah the prophet before the coming of the great and dreadful day of the LORD" (4:5). Jesus identifies John the Baptist as the fulfilment of both (Matt 11:10, 14).' },
      { title: 'The Sun of Righteousness', description: '"But unto you that fear my name shall the Sun of righteousness arise with healing in his wings" (4:2). The last OT metaphor for the Messiah: a sun that heals. The OT ends with this dawn about to break — 400 years of night, then the Morning Star rises.' },
    ],
    highlights: [
      { verse: 'Malachi 2:16', text: '"For the LORD, the God of Israel, saith that he hateth putting away: for one covereth violence with his garment, saith the LORD of hosts: therefore take heed to your spirit, that ye deal not treacherously."' },
      { verse: 'Malachi 3:1', text: '"Behold, I will send my messenger, and he shall prepare the way before me: and the LORD, whom ye seek, shall suddenly come to his temple."' },
      { verse: 'Malachi 3:10', text: '"Bring ye all the tithes into the storehouse, that there may be meat in mine house, and prove me now herewith, saith the LORD of hosts, if I will not open you the windows of heaven, and pour you out a blessing."' },
      { verse: 'Malachi 4:2', text: '"But unto you that fear my name shall the Sun of righteousness arise with healing in his wings; and ye shall go forth, and grow up as calves of the stall."' },
    ],
    deepPath: [
      { phase: '1. The Six Disputations', description: 'Map the six disputations: (1) 1:2-5 God\'s love; (2) 1:6-2:9 honor; (3) 2:10-16 faithfulness; (4) 2:17-3:6 justice; (5) 3:7-12 tithes; (6) 3:13-4:3 words against God. Notice how each "Wherein?" reveals a different form of spiritual self-deception.' },
      { phase: '2. Blemished Offerings', description: 'Read 1:6-14. Malachi condemns the offering of blind, lame, and sick animals — the opposite of the Levitical requirement of "without blemish." The question (1:8): would you offer this to your governor? Then why offer it to God? What does this principle say about modern worship?' },
      { phase: '3. The Windows of Heaven', description: 'Read 3:10. This is the only place in Scripture where God says "test me in this." The promise: pour out such blessing there is not room enough to receive it. What does faithful giving look like? Is tithing a law or a grace response?' },
      { phase: '4. The Messenger of the Covenant', description: 'Read 3:1-4 and 4:5-6. Compare with Matthew 11:10-14; Luke 1:17; 7:27. Jesus explicitly identifies John the Baptist as the Elijah-messenger of Malachi. How did John fulfil the "preparing the way" function? How does his ministry bridge OT and NT?' },
      { phase: '5. Ending with Promise, Not Curse', description: 'Read 4:1-6 — the last three chapters of the Protestant OT. "He shall turn the heart of the fathers to the children, and the heart of the children to their fathers" (4:6). Then turn to Matthew 1:1 — "The book of the generation of Jesus Christ, the son of David." How does the NT answer Malachi\'s longing?' },
    ],
  },
});

Object.assign(BOOK_STUDIES, {
  matthew: {
    overview: `Matthew presents Jesus as the promised Messiah-King of Israel, the fulfillment of every OT covenant and prophecy. Written primarily for a Jewish audience, it opens with a genealogy tracing Jesus from Abraham and David, and structures Jesus' teaching into five major discourses (echoing the five books of Moses). The Great Commission (28:19-20) — "Go therefore and make disciples of all nations" — is the book's defining conclusion: the King sends his people to extend his kingdom to the ends of the earth.`,
    howWritten: `Written by Matthew (Levi), a Jewish tax collector turned apostle, c. AD 50–70. Matthew's Jewish perspective saturates the book: he uses "kingdom of heaven" (a reverential Jewish circumlocution for "kingdom of God"), employs rabbinic argument forms, and cites the OT approximately 65 times with frequent "that it might be fulfilled" formulas. The book is organized around five major discourses: Sermon on the Mount (5–7), Mission Discourse (10), Kingdom Parables (13), Community/Church (18), Olivet Discourse (24–25).`,
    structure: [
      'Prologue (1–2) — Genealogy; birth; Magi; flight to Egypt; return',
      'Galilean Ministry (3–18) — Baptism; temptation; Sermon on the Mount; miracles; five discourses',
      'Journey to Jerusalem (19–23) — Triumphal entry; temple cleansing; debates; woes on Pharisees',
      'Passion and Resurrection (24–28) — Olivet Discourse; Last Supper; trial; crucifixion; resurrection; Great Commission',
    ],
    themes: [
      { title: 'Jesus as the New Moses', description: 'Matthew structures Jesus\' life to parallel Moses: born under threat of infanticide, called out of Egypt (2:15), baptized through water, tempted 40 days in the wilderness, gives law from a mountain (5:1). Jesus is the greater Moses who gives a better law.' },
      { title: 'The Kingdom of Heaven', description: 'The phrase "kingdom of heaven" appears 32 times in Matthew (more than all other Gospels combined). The kingdom has already come in Jesus\' person but awaits its consummation. The 13 kingdom parables show its surprising character.' },
      { title: 'Fulfillment of Prophecy', description: 'Matthew quotes OT prophecy with the formula "that it might be fulfilled" 11 times. He is making a sustained argument: Jesus is the one all the prophets spoke of. The entire OT finds its yes in Christ (2 Cor 1:20).' },
      { title: 'Discipleship', description: 'Matthew defines discipleship through obedience (7:24-27), cost (8:18-22; 10:37-39), servant leadership (20:26-28), forgiveness (18:21-35), and mission (28:19-20). To be a disciple is to become like the master.' },
      { title: 'The Church', description: 'Only Matthew uses the word "church" (ekklesia) in the Gospels (16:18; 18:17). Jesus builds his church on the confession that he is the Christ, the Son of the living God. The church is not a human institution but a Spirit-built community.' },
    ],
    highlights: [
      { verse: 'Matthew 5:3', text: '"Blessed are the poor in spirit: for theirs is the kingdom of heaven."' },
      { verse: 'Matthew 11:28-30', text: '"Come unto me, all ye that labour and are heavy laden, and I will give you rest. Take my yoke upon you, and learn of me; for I am meek and lowly in heart."' },
      { verse: 'Matthew 16:16', text: '"And Simon Peter answered and said, Thou art the Christ, the Son of the living God."' },
      { verse: 'Matthew 28:19-20', text: '"Go ye therefore, and teach all nations, baptizing them... Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world."' },
    ],
    deepPath: [
      { phase: '1. The Sermon on the Mount (5–7)', description: 'Read Matthew 5–7 in one sitting. This is the constitution of the kingdom. What does Jesus change, deepen, or fulfill? How does "You have heard... but I say unto you" function? Compare with the Sinai law-giving.' },
      { phase: '2. The Five Discourses', description: 'Identify and summarize each of the five discourses (5–7; 10; 13; 18; 24–25). Matthew ends each with "And when Jesus had finished these sayings." Why five? How does the Moses typology work?' },
      { phase: '3. The Fulfillment Quotations', description: 'Find all 11 "that it might be fulfilled" quotes. Look each one up in its OT context. How does Matthew read the OT? What does he understand "fulfillment" to mean? This is the key to understanding NT use of the OT.' },
      { phase: '4. Peter\'s Confession (16:13-20)', description: 'Read 16:13-20. Jesus\' question, Peter\'s confession, Jesus\' response. What is the "rock" on which the church is built? What are the keys of the kingdom? How do binding and loosing function?' },
      { phase: '5. The Great Commission (28:16-20)', description: 'Read 28:16-20. Note: "all authority" → "go, make disciples" → "baptizing" → "teaching" → "I am with you always." The structure: authority grounds mission; presence sustains it. How does this commission shape the entire book?' },
    ],
  },

  mark: {
    overview: `Mark is the shortest and most action-packed Gospel — the word "immediately" (euthys) appears 41 times. Written likely for a Roman audience (explaining Jewish customs, translating Aramaic phrases), Mark presents Jesus primarily as the powerful, authoritative Son of God who acts. There is no birth narrative — Mark opens with John the Baptist and Jesus' baptism and moves immediately to ministry. The central theological hinge is at 8:27-38: "Who do men say that I am?" — Peter's confession, followed immediately by the first passion prediction.`,
    howWritten: `Written by John Mark, a companion of Paul (Acts 12:25) and later interpreter for Peter (according to Papias, c. AD 110: "Mark wrote down accurately... whatever Peter remembered"). Date: c. AD 55–65, likely the earliest Gospel. Mark's vivid, eyewitness-style details (the grass was green, 6:39; Jesus sighed deeply, 7:34; he looked at them with anger, 3:5) support the Petrine connection. The "Messianic secret" — Jesus repeatedly commanding silence about his identity — is a distinctive Markan theme.`,
    structure: [
      'Preparation and Early Ministry (1:1–3:6) — Baptism; temptation; Galilean preaching; healings',
      'Expanding Ministry (3:7–8:26) — Twelve chosen; parables; miracles; feeding 5000 and 4000',
      'The Way to Jerusalem (8:27–10:52) — Peter\'s confession; three passion predictions; transfiguration',
      'Jerusalem Week and Passion (11–16) — Entry; temple; Last Supper; trial; crucifixion; resurrection',
    ],
    themes: [
      { title: 'The Authority of Jesus', description: 'Jesus\' authority over demons (1:27), disease (1:30-31), nature (4:41), sin (2:10), and death (5:41) is the core message of Mark. "What thing is this? what new doctrine is this? for with authority commandeth he even the unclean spirits" (1:27).' },
      { title: 'The Servant Son', description: '"For even the Son of Man came not to be ministered unto, but to minister, and to give his life a ransom for many" (10:45) — the key verse of Mark. Jesus is the divine King who reveals his glory through self-giving service.' },
      { title: 'Discipleship Failure and Grace', description: 'The disciples repeatedly misunderstand Jesus — they are afraid, hard-hearted, arguing about greatness, and ultimately fleeing at the arrest. Peter denies him three times. Yet the resurrection message is specifically for Peter (16:7). Grace is for failures.' },
      { title: 'The Messianic Secret', description: 'Jesus repeatedly tells those he heals or demons he casts out to be silent about his identity. This guards against a militaristic misunderstanding of messiahship — his true identity is only fully revealed from the cross (15:39).' },
    ],
    highlights: [
      { verse: 'Mark 1:15', text: '"The time is fulfilled, and the kingdom of God is at hand: repent ye, and believe the gospel."' },
      { verse: 'Mark 8:29', text: '"And he saith unto them, But whom say ye that I am? And Peter answereth and saith unto him, Thou art the Christ."' },
      { verse: 'Mark 10:45', text: '"For even the Son of Man came not to be ministered unto, but to minister, and to give his life a ransom for many."' },
      { verse: 'Mark 15:39', text: '"And when the centurion, which stood over against him, saw that he so cried out, and gave up the ghost, he said, Truly this man was the Son of God."' },
    ],
    deepPath: [
      { phase: '1. The "Immediately" Gospel', description: 'Read Mark 1 and circle every "straightway" or "immediately" (euthys). Mark\'s Jesus is not a leisurely philosopher — he is the God who acts with urgency. What does this portrait of Jesus challenge about a passive Christianity?' },
      { phase: '2. The Messianic Secret', description: 'List all the places Jesus commands silence (1:25, 34, 44; 3:12; 5:43; 7:36; 8:26, 30; 9:9). Why? The answer comes in 15:39 — a Roman soldier at the cross is the first human to publicly confess "Son of God." The cross reveals what the miracles cannot.' },
      { phase: '3. The Central Hinge (8:27-38)', description: 'Read 8:27-38 carefully. Peter confesses → Jesus predicts his death → Peter rebukes → Jesus rebukes Peter ("Get thee behind me, Satan") → the call to cross-carrying discipleship. This is the turning point of the entire Gospel.' },
      { phase: '4. The Transfiguration', description: 'Read Mark 9:1-8. Moses and Elijah (Law and Prophets) appear; the voice says "This is my beloved Son: hear him." The cloud departs and "they saw no man any more save Jesus only." How does this scene explain the whole of the OT?' },
      { phase: '5. Peter\'s Restoration in Mark 16', description: 'Read 16:1-8. The angel\'s message: "tell his disciples and Peter." Peter is specifically named after his denial. Mark (Peter\'s Gospel) includes the message specifically directed to Peter. How does this shape how you read Peter\'s later epistles?' },
    ],
  },

  luke: {
    overview: `Luke is the most literary of the four Gospels — written by "the beloved physician" (Col 4:14) as a carefully researched historical account for Theophilus. Luke has a special concern for the marginalized: women, the poor, Samaritans, tax collectors, and Gentiles all receive prominent attention. The Gospel is structured around travel (a long "journey section" 9:51–19:27) and prayer (Jesus prays at every key moment). The key verse: "The Son of Man is come to seek and to save that which was lost" (19:10).`,
    howWritten: `Written by Luke, a Gentile physician and companion of Paul, c. AD 60–61 (before Paul's trial, since Acts ends with Paul still awaiting it). Luke addresses both his volumes (Luke-Acts) to Theophilus ("lover of God"). He explicitly describes his method: carefully investigating everything from the beginning, consulting eyewitnesses (1:1-4). His Greek is the finest in the NT. Luke alone records the parables of the Good Samaritan, the Prodigal Son, the Rich Man and Lazarus, the Pharisee and Publican — the most beloved stories Jesus ever told.`,
    structure: [
      'Prologue and Birth Narratives (1–2) — Annunciation; Magnificat; birth; Simeon; age 12',
      'Preparation and Galilean Ministry (3–9) — Baptism; genealogy (to Adam); Sermon on the Plain; miracles',
      'The Journey to Jerusalem (9:51–19:27) — Discipleship teaching; great parables; lost sheep/coin/son',
      'Jerusalem, Passion, Resurrection (19:28–24:53) — Entry; debates; Last Supper; cross; Emmaus; ascension',
    ],
    themes: [
      { title: 'The Universal Gospel', description: 'Luke traces Jesus\' genealogy to Adam (not Abraham like Matthew) — Jesus is Savior of all humanity, not just Jews. The first hearers of the birth announcement are shepherds (the despised); the Great Commission targets "all nations" (24:47).' },
      { title: 'Prayer', description: 'Luke records Jesus praying at every pivotal moment: baptism (3:21), before choosing the Twelve (6:12), at the Transfiguration (9:29), in Gethsemane (22:41-44), on the cross (23:34, 46). Prayer is the breath of Jesus\' ministry.' },
      { title: 'The Holy Spirit', description: 'The Holy Spirit features prominently in Luke: at the conception (1:35), the baptism (3:22), the wilderness (4:1), the sermon at Nazareth (4:18), and Jesus\' promise of the Spirit as a gift (11:13; 24:49). Luke-Acts is the story of the Spirit.' },
      { title: 'Women and the Poor', description: 'Luke names more women than any other Gospel: Mary, Elizabeth, Anna, Mary Magdalene, Joanna, Susanna. He uniquely records Jesus\' beatitude "Blessed are ye poor" (6:20) and the woes to the rich. The gospel overturns social hierarchies.' },
      { title: 'Joy and Praise', description: 'Luke\'s Gospel opens and closes with joy (1:14; 2:10; 24:52) and is saturated with songs: the Magnificat (1:46-55), the Benedictus (1:68-79), the Gloria in Excelsis (2:14), the Nunc Dimittis (2:29-32). The gospel is good news of great joy.' },
    ],
    highlights: [
      { verse: 'Luke 1:37', text: '"For with God nothing shall be impossible."' },
      { verse: 'Luke 4:18-19', text: '"The Spirit of the Lord is upon me, because he hath anointed me to preach the gospel to the poor; he hath sent me to heal the brokenhearted." — Jesus quoting Isaiah 61:1-2' },
      { verse: 'Luke 15:20', text: '"And he arose, and came to his father. But when he was yet a great way off, his father saw him, and had compassion, and ran, and fell on his neck, and kissed him."' },
      { verse: 'Luke 19:10', text: '"For the Son of Man is come to seek and to save that which was lost."' },
    ],
    deepPath: [
      { phase: '1. The Birth Songs', description: 'Read the Magnificat (1:46-55), Benedictus (1:68-79), and Nunc Dimittis (2:29-32) as theological documents. What does Mary understand about salvation? What covenant promises does Zechariah invoke? How does Simeon resolve his life in peace?' },
      { phase: '2. Jesus\' Prayer Life', description: 'Find every instance of Jesus praying in Luke (3:21; 5:16; 6:12; 9:18, 28-29; 10:21; 11:1; 22:32, 41-44; 23:34, 46). What triggers each prayer? What is the relationship between prayer and the pivotal events of Jesus\' ministry?' },
      { phase: '3. The Three Lost Parables (15)', description: 'Read Luke 15 in its context — 15:1-2 tells you the occasion: Pharisees grumbling that Jesus eats with sinners. All three parables answer that grumble. The father who runs (v.20) is the scandalous center. The elder brother (v.25-32) represents the Pharisees. Which brother are you?' },
      { phase: '4. The Road to Emmaus (24:13-35)', description: 'Read 24:13-35. Jesus walks with two disciples who do not recognize him; he opens the Scriptures to them; their hearts burn within them; he is known in the breaking of bread. This is the Christian experience of Word and sacrament. How does it model every act of worship?' },
      { phase: '5. Women in Luke', description: 'Find all the women Luke names or features that other Gospels omit: Elizabeth (1), Anna (2), the widow of Nain (7), the women who funded Jesus\' ministry (8:1-3), Martha and Mary (10), the bent woman (13), the persistent widow (18). What is Luke saying about who Jesus came for?' },
    ],
  },

  acts: {
    overview: `Acts is volume 2 of Luke's two-part work (Luke-Acts) — "The Acts of the Holy Spirit through the Apostles." It traces the expansion of the gospel from Jerusalem to Rome in 30 years, fulfilling Jesus' promise in Acts 1:8: "ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth." The book records the birth of the church at Pentecost, the explosive spread of the gospel across ethnic and geographic boundaries, and Paul's three missionary journeys culminating in his arrival at Rome.`,
    howWritten: `Written by Luke, c. AD 61–62 (Paul is still alive and in Rome at the end). Luke was an eyewitness to much of Acts — sections using "we" (16:10-17; 20:5-15; 21:1-18; 27:1–28:16) indicate his direct participation. Acts draws heavily on speeches (about 25-30% of the book) — Peter's sermon at Pentecost, Stephen's defense, Paul's address at Mars Hill. These speeches show how early Christians explained the gospel in different cultural contexts.`,
    structure: [
      'Jerusalem (1–7) — Pentecost; early church; Peter\'s preaching; Stephen\'s martyrdom',
      'Judea and Samaria (8–12) — Philip; Saul\'s conversion; Cornelius; Peter released; Antioch',
      'Paul\'s First Journey (13–14) — Cyprus; Galatia; first Gentile churches',
      'Jerusalem Council (15) — Circumcision debate; Gentiles accepted without law',
      'Paul\'s Second and Third Journeys (16–21) — Philippi; Corinth; Ephesus; final visit to Jerusalem',
      'Paul\'s Trial and Journey to Rome (22–28) — Defense; storms; shipwreck; Rome',
    ],
    themes: [
      { title: 'The Holy Spirit', description: 'The Spirit is the main character of Acts — he falls at Pentecost (2:4), guides Philip to the Ethiopian (8:29), directs the mission to Antioch (13:2), prevents Paul from going to Bithynia (16:6-7), and is poured out on Gentiles (10:44-46). The church\'s expansion is Spirit-driven.' },
      { title: 'The Unstoppable Word', description: '"The word of God grew and multiplied" (12:24; also 6:7; 19:20) — this refrain marks six sections of the book. Despite persecution, imprisonment, and opposition, the gospel cannot be contained. "If it be of God, ye cannot overthrow it" (5:39).' },
      { title: 'The Gospel for All Peoples', description: 'Acts is the story of systematic boundary-crossing: Jews → God-fearing Gentiles → full Gentiles; Jerusalem → Judea → Samaria → Rome. Every barrier — ethnic, social, geographic — is broken down by the gospel. Peter\'s vision (ch. 10) is the theological breakthrough.' },
      { title: 'Suffering and Mission', description: 'Paul is told at his conversion: "I will shew him how great things he must suffer for my name\'s sake" (9:16). The book consistently links mission with suffering — the gospel advances precisely through persecution, not despite it (8:1-4).' },
    ],
    highlights: [
      { verse: 'Acts 1:8', text: '"But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth."' },
      { verse: 'Acts 2:42', text: '"And they continued stedfastly in the apostles\' doctrine and fellowship, and in breaking of bread, and in prayers."' },
      { verse: 'Acts 4:12', text: '"Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved."' },
      { verse: 'Acts 17:28', text: '"For in him we live, and move, and have our being; as certain also of your own poets have said, For we are also his offspring."' },
    ],
    deepPath: [
      { phase: '1. Pentecost and Joel 2 (Acts 2)', description: 'Read Acts 2:1-41. Peter quotes Joel 2:28-32 as being fulfilled. What exactly happened at Pentecost? How does "all flesh" receiving the Spirit fulfill OT prophecy? What is the ongoing significance of Pentecost for the church?' },
      { phase: '2. The Early Church\'s DNA (2:42-47)', description: 'Read Acts 2:42-47. Four practices: doctrine, fellowship (koinonia), breaking of bread, prayers. These four elements formed the skeleton of every healthy NT church. How do they function as a community DNA?' },
      { phase: '3. The Cornelius Breakthrough (ch. 10)', description: 'Read Acts 10 in full. Peter\'s vision (clean and unclean animals), the Spirit falling on Gentiles before baptism. This is the most important theological event since Pentecost — the Spirit overrules Jewish exclusivity. How does Peter\'s testimony in ch. 11 change the church?' },
      { phase: '4. Paul at Mars Hill (17:16-34)', description: 'Read 17:16-34. Paul engages Greek philosophy on its own terms: quotes their poets, starts with creation rather than Scripture. This is the model for contextual gospel engagement. What does he affirm? Where does he challenge?' },
      { phase: '5. The Jerusalem Council (ch. 15)', description: 'Read Acts 15. The first church council. The question: must Gentiles be circumcised to be saved? Peter\'s testimony, Barnabas and Paul\'s report, James\' ruling. How does the council discern: Scripture (Amos 9:11-12), Spirit (signs and wonders), and consensus. Model for church decision-making.' },
    ],
  },

  romans: {
    overview: `Romans is Paul's theological masterwork — the fullest, most systematic statement of the gospel ever written. Written to introduce himself to the Roman church before his planned visit to Spain, Romans lays out the diagnosis of humanity (all have sinned), the solution (justification by faith), the transformation (sanctification by the Spirit), and the cosmic scope (Israel and the nations in God's redemptive plan). Luther called it "the clearest gospel of all," and no letter has generated more theological reflection in church history.`,
    howWritten: `Written by Paul from Corinth, c. AD 56–57, dictated to Tertius (16:22). Unique among Paul's letters: it is written to a church he had not founded and had not yet visited. Thus it is the most carefully constructed and theologically comprehensive of his letters — an introduction to his gospel rather than a response to a specific local crisis. The letter uses the diatribe style (imaginary dialogue with an opponent) extensively in chapters 1–11, and a sustained body-of-Christ ethics in chapters 12–16.`,
    structure: [
      'All Are Guilty (1:18–3:20) — Gentiles\' guilt; Jews\' guilt; all under sin',
      'Justification by Faith (3:21–5:21) — Righteousness of God; Abraham; peace with God; Adam and Christ',
      'Sanctification and the Spirit (6–8) — Dead to sin; the Law; life in the Spirit; no condemnation',
      'Israel and the Nations (9–11) — God\'s sovereign choice; Israel\'s stumbling; the olive tree; all Israel saved',
      'Practical Christian Life (12–16) — Living sacrifice; gifts; love; government; the strong and weak',
    ],
    themes: [
      { title: 'Justification by Faith', description: '"Therefore we conclude that a man is justified by faith without the deeds of the law" (3:28). This is the center of Romans: sinners are declared righteous by God not through performance but through trusting in Christ\'s finished work. Luther\'s rediscovery of this changed history.' },
      { title: 'No Condemnation', description: '"There is therefore now no condemnation to them which are in Christ Jesus" (8:1) — the great declaration at the heart of the letter. The entire argument of 1:18–7:25 leads to this. No condemnation because all condemnation fell on Christ.' },
      { title: 'The Sovereignty of God', description: 'Romans 9–11 are the most sustained reflection on divine sovereignty in Scripture. God\'s election is not based on human merit or foreseen faith (9:11-13). Yet human responsibility is equally real (10:9-13). Both are true; the mystery is real.' },
      { title: 'The Life of the Spirit (ch. 8)', description: 'Romans 8 is the Mount Everest of Paul\'s letters — "no condemnation" (8:1), the Spirit of life (8:2-11), adoption as sons (8:14-17), groaning with creation (8:18-25), interceding Spirit (8:26-27), all things for good (8:28), more than conquerors (8:37), nothing separates (8:38-39).' },
    ],
    highlights: [
      { verse: 'Romans 1:16', text: '"For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth; to the Jew first, and also to the Greek."' },
      { verse: 'Romans 3:23-24', text: '"For all have sinned, and come short of the glory of God; Being justified freely by his grace through the redemption that is in Christ Jesus."' },
      { verse: 'Romans 8:1', text: '"There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit."' },
      { verse: 'Romans 8:38-39', text: '"For I am persuaded, that neither death, nor life, nor angels... shall be able to separate us from the love of God, which is in Christ Jesus our Lord."' },
    ],
    deepPath: [
      { phase: '1. The Universal Diagnosis (1:18–3:20)', description: 'Read the three-stage indictment: Gentiles who suppress natural revelation (1:18-32); moralistic judges who do the same (2:1-16); Jews who have the law but don\'t keep it (2:17–3:8). Paul\'s conclusion (3:9-20): "there is none righteous, no, not one." How does this diagnosis function in evangelism?' },
      { phase: '2. Justification in Abraham (ch. 4)', description: 'Paul\'s argument that Abraham was justified by faith before circumcision (4:10-11) makes Abraham the father of all who believe, not just Jews. The logic: if circumcision didn\'t save Abraham, it cannot be required for Gentiles. Trace this argument\'s anti-works logic.' },
      { phase: '3. Romans 6 — Dead to Sin', description: 'Read Romans 6:1-14. "How shall we that are dead to sin, live any longer therein?" (6:2). The logic: baptism unites us with Christ\'s death and resurrection. We are "dead to sin" — not that it no longer affects us but that we are no longer under its domination. What does "reckon yourselves dead to sin" (6:11) mean practically?' },
      { phase: '4. Romans 8 — Chapter by Chapter', description: 'Read Romans 8 in five parts: condemnation/Spirit (1-11), adoption (12-17), creation\'s groaning (18-25), Spirit\'s intercession (26-27), God\'s purpose (28-39). How do these build on each other? What is the rhetorical climax (38-39)?' },
      { phase: '5. The Living Sacrifice (12:1-2)', description: 'Read 12:1-2. "Therefore" — in light of all of chapters 1–11. The entire doctrinal section becomes the motivation for the ethical section. "Present your bodies a living sacrifice" — what does this mean? How does "renewing of your mind" relate to transformation?' },
    ],
  },
});

Object.assign(BOOK_STUDIES, {
  '1corinthians': {
    overview: `1 Corinthians addresses one of the most troubled churches in the NT — a cosmopolitan, gifted, and deeply divided congregation in one of the Roman world's most morally permissive cities. Paul had planted the church and now writes to correct divisions, sexual immorality, lawsuits between believers, abuse of spiritual gifts, and confusion about the resurrection. Yet the letter contains some of the most sublime passages in Scripture: the hymn to love (ch. 13) and the resurrection chapter (ch. 15).`,
    howWritten: `Written by Paul from Ephesus, c. AD 55, during his third missionary journey. Paul had received reports from Chloe's people (1:11) and a letter from the Corinthians with questions (7:1). The letter is Paul's most wide-ranging — he addresses church divisions, sexual ethics, food offered to idols, worship order, spiritual gifts, and the resurrection. The letter's organizing principle is not topical but practical: the cross as the wisdom that reorders every value the Corinthians hold.`,
    structure: [
      'Divisions in the Church (1–4) — The cross vs. wisdom; Paul\'s apostleship; the church as God\'s temple',
      'Sexual Immorality and Lawsuits (5–6) — Church discipline; lawsuits; the body is for the Lord',
      'Marriage and Singleness (7) — Principles for each state',
      'Food Offered to Idols (8–10) — Liberty vs. love; the Lord\'s Supper; flee idolatry',
      'Worship Order and Spiritual Gifts (11–14) — Head coverings; the Lord\'s Supper; gifts; love; tongues and prophecy',
      'The Resurrection (15) — Christ rose; appearances; the nature of the resurrection body',
      'Conclusion (16) — The collection; travel plans; greetings',
    ],
    themes: [
      { title: 'The Foolishness of the Cross', description: '"For the preaching of the cross is to them that perish foolishness; but unto us which are saved it is the power of God" (1:18). Paul\'s answer to Corinthian pride and wisdom-seeking: the cross upends all human hierarchies of wisdom, power, and status.' },
      { title: 'Love as the Greatest Gift', description: '"And now abideth faith, hope, charity (agape), these three; but the greatest of these is charity" (13:13). Chapter 13 is not a romantic poem — it is the standard for community life. Love is the more excellent way that makes all gifts meaningful.' },
      { title: 'The Body of Christ', description: '"Now ye are the body of Christ, and members in particular" (12:27). Every member, however humble, is essential. The Corinthians were ranking gifts by status; Paul shows that the body metaphor requires mutual honor and interdependence.' },
      { title: 'The Resurrection (ch. 15)', description: '"But if there be no resurrection of the dead, then is Christ not risen... ye are yet in your sins" (15:13, 17). Paul argues that the resurrection is the load-bearing wall of the Christian faith. Without it, everything collapses.' },
    ],
    highlights: [
      { verse: '1 Corinthians 1:18', text: '"For the preaching of the cross is to them that perish foolishness; but unto us which are saved it is the power of God."' },
      { verse: '1 Corinthians 13:4-5', text: '"Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up... seeketh not her own."' },
      { verse: '1 Corinthians 15:3-4', text: '"For I delivered unto you first of all that which I also received, how that Christ died for our sins according to the scriptures; And that he rose again the third day according to the scriptures."' },
      { verse: '1 Corinthians 15:55-57', text: '"O death, where is thy sting? O grave, where is thy victory?... But thanks be to God, which giveth us the victory through our Lord Jesus Christ."' },
    ],
    deepPath: [
      { phase: '1. The Wisdom of the Cross (1:18–2:16)', description: 'Read 1:18–2:5. Paul deliberately refused to use rhetorical eloquence in Corinth so their faith would rest on "the power of God" not human persuasion. Then 2:6-16: true wisdom is Spirit-revealed. How does this shape Christian preaching and education?' },
      { phase: '2. The Love Chapter in Context', description: 'Read ch. 12, then 13, then 14. Chapter 13 is surrounded by teaching on spiritual gifts. Paul\'s point: gifts exercised without love are worthless noise (13:1). Love is not one gift among others — it is the environment in which all gifts function properly.' },
      { phase: '3. The Lord\'s Supper (11:17-34)', description: 'Read 11:17-34. The Corinthians were eating the Lord\'s Supper in a way that shamed the poor (the rich ate first and got drunk while the poor went hungry). Paul says this judgment is why some are sick and dying (11:30). Communion has social ethics built into it.' },
      { phase: '4. The Resurrection Chapter (ch. 15)', description: 'Read 15:1-58 in one sitting. Paul\'s argument: (1) Christ rose (eyewitnesses named, 15:3-8); (2) if no resurrection then Christianity is false (15:12-19); (3) resurrection is the pattern for all believers (15:20-28); (4) the resurrection body (15:35-58). This is the bedrock.' },
      { phase: '5. 15:58 as Application', description: 'Read 15:58: "be ye stedfast, unmoveable, always abounding in the work of the Lord, forasmuch as ye know that your labour is not in vain in the Lord." This verse is the application of the entire resurrection argument. How does resurrection hope produce present-tense diligence?' },
    ],
  },

  '2corinthians': {
    overview: `2 Corinthians is the most autobiographically revealing of Paul's letters — a window into the interior life of an apostle. Written after a painful visit and a severe letter (now lost), it defends the authenticity of his apostleship against "super-apostles" who peddled a triumphalist, powerful-looking gospel. Paul's answer: genuine ministry is marked by weakness, suffering, and dependence on God. "My grace is sufficient for thee: for my strength is made perfect in weakness" (12:9) is the letter's theological summit.`,
    howWritten: `Written by Paul from Macedonia, c. AD 55–56, after receiving good news from Titus that the Corinthians had repented (7:6-13). The letter divides naturally around Paul's defense of his ministry and his opponents, the collection for Jerusalem (which occupied much of 8–9), and the painful self-disclosure of chapters 10–13. The "thorn in the flesh" (12:7-10) — whatever it was — is the most intensely personal passage in all Paul's letters.`,
    structure: [
      'Comfort in Affliction (1–2) — Paul\'s changed plans; forgiveness for the offender',
      'The Glory of the New Covenant Ministry (3–5) — Veiled/unveiled; jars of clay; the ministry of reconciliation',
      'Paul\'s Defense and Reconciliation (6–7) — Not receiving grace in vain; Titus\' good news',
      'The Collection for Jerusalem (8–9) — Generous giving; "God loveth a cheerful giver"',
      'Paul\'s Defense Against False Apostles (10–13) — Boasting in weakness; the thorn; signs of an apostle',
    ],
    themes: [
      { title: 'Strength in Weakness', description: '"Most gladly therefore will I rather glory in my infirmities, that the power of Christ may rest upon me" (12:9). Paul\'s theology of weakness is the direct opposite of the triumphalist, prosperity-gospel version of Christianity. Power is perfected precisely in acknowledged weakness.' },
      { title: 'The Ministry of Reconciliation', description: '"God was in Christ, reconciling the world unto himself, not imputing their trespasses unto them; and hath committed unto us the word of reconciliation" (5:19). Every Christian is an ambassador of reconciliation — the mission of the church flows from the cross.' },
      { title: 'Jars of Clay', description: '"But we have this treasure in earthen vessels, that the excellency of the power may be of God, and not of us" (4:7). The treasure (the gospel, the glory of Christ) is placed in the most fragile container — a human being. This is God\'s intentional design, to display his power, not ours.' },
      { title: 'Generous Giving', description: 'Chapters 8–9 contain the NT\'s fullest teaching on Christian generosity: the Macedonians gave out of poverty (8:2-3), giving is participatory (8:4), giving enables the receiver to give to others (9:8-11), "God loveth a cheerful giver" (9:7).' },
    ],
    highlights: [
      { verse: '2 Corinthians 4:7', text: '"But we have this treasure in earthen vessels, that the excellency of the power may be of God, and not of us."' },
      { verse: '2 Corinthians 5:17', text: '"Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new."' },
      { verse: '2 Corinthians 5:21', text: '"For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him."' },
      { verse: '2 Corinthians 12:9', text: '"My grace is sufficient for thee: for my strength is made perfect in weakness."' },
    ],
    deepPath: [
      { phase: '1. Jars of Clay (4:7-18)', description: 'Read 4:7-18. Paul lists the apostolic paradoxes: troubled but not distressed; perplexed but not despairing; persecuted but not forsaken; struck down but not destroyed (4:8-9). In each case, the human vulnerability is the container for divine power. How does this reframe your weaknesses?' },
      { phase: '2. The New Covenant Ministry (3:1-18)', description: 'Read ch. 3. Paul compares the Mosaic covenant (letter, condemnation, fading glory) with the new covenant (Spirit, righteousness, increasing glory). Moses wore a veil; Christians behold the Lord with unveiled faces and are transformed (3:18). What is the veil removed by Christ?' },
      { phase: '3. The Ministry of Reconciliation (5:17-21)', description: 'Read 5:17-21. The new creation, the reconciliation, the ambassador, the great exchange (5:21). "He made him who knew no sin to be sin for us, that we might become the righteousness of God in him." This is the most compressed statement of substitutionary atonement in Scripture.' },
      { phase: '4. The Thorn in the Flesh (12:1-10)', description: 'Read 12:1-10. Paul was given an extraordinary revelation (caught up to the third heaven) and then an extraordinary affliction (a thorn — skolops, literally a stake). What is the relationship between the revelation and the thorn? Why does God refuse to remove it?' },
      { phase: '5. Generous Giving (8–9)', description: 'Read ch. 8:1-15. The Macedonians gave "beyond their ability" (8:3). They gave themselves first (8:5), then their money. Paul uses the "grace" (charis) of giving — generosity is not duty but overflow. How does the incarnation (8:9) motivate giving?' },
    ],
  },

  galatians: {
    overview: `Galatians is Paul's fiercest letter — written "with what large letters" (6:11) in white-hot anger that the Galatian churches are deserting the gospel for a "different gospel" (1:6). Jewish-Christian teachers (Judaizers) were insisting that Gentile converts must be circumcised and observe the Mosaic Law to be fully saved. Paul's response is absolute: "if any man preach any other gospel unto you than that ye have received, let him be accursed" (1:9). Justification by faith alone — not faith plus law-keeping — is the gospel's non-negotiable center.`,
    howWritten: `Written by Paul, c. AD 48–49 (possibly the earliest of Paul's letters). The identity of the "Galatian churches" is debated (north or south Galatia), but the theological urgency is clear regardless. Paul writes with unusual personal intensity — no thanksgiving section at the opening (unique in his letters), personal confrontation with Peter included (2:11-14), and a personal concluding section in his own handwriting (6:11). This is not a calm theological treatise — it is a crisis letter.`,
    structure: [
      'Paul\'s Gospel Defended (1–2) — No other gospel; Paul\'s apostolic authority; confronting Peter at Antioch',
      'Justification by Faith Argued (3–4) — Abraham justified by faith; the Law as tutor; sons of God; allegory of Hagar and Sarah',
      'Freedom in the Spirit (5–6) — Stand in liberty; the flesh vs. the Spirit; the fruit of the Spirit; bear one another\'s burdens',
    ],
    themes: [
      { title: 'Justification by Faith Alone', description: '"Knowing that a man is not justified by the works of the law, but by the faith of Jesus Christ... for by the works of the law shall no flesh be justified" (2:16). The Greek word for "justified" (dikaioo) appears 8 times. This is Paul\'s battle cry.' },
      { title: 'The Gospel Cannot Be Adjusted', description: '"But though we, or an angel from heaven, preach any other gospel unto you than that which we have preached unto you, let him be accursed" (1:8). Twice in two verses. The gospel is not a cultural product that can be revised — it is a fixed revelation.' },
      { title: 'Freedom from the Law', description: '"Stand fast therefore in the liberty wherewith Christ hath made us free, and be not entangled again with the yoke of bondage" (5:1). Christian freedom is not license (5:13) but liberation from the law as a system of earning God\'s favor.' },
      { title: 'The Fruit of the Spirit', description: '"But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance: against such there is no law" (5:22-23). The Spirit produces what the Law could only demand. Character is the organic result of union with Christ.' },
    ],
    highlights: [
      { verse: 'Galatians 2:20', text: '"I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me: and the life which I now live in the flesh I live by the faith of the Son of God, who loved me, and gave himself for me."' },
      { verse: 'Galatians 3:28', text: '"There is neither Jew nor Greek, there is neither bond nor free, there is neither male nor female: for ye are all one in Christ Jesus."' },
      { verse: 'Galatians 5:1', text: '"Stand fast therefore in the liberty wherewith Christ hath made us free, and be not entangled again with the yoke of bondage."' },
      { verse: 'Galatians 5:22-23', text: '"But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance: against such there is no law."' },
    ],
    deepPath: [
      { phase: '1. The Anathema (1:6-9)', description: 'Read 1:6-9 twice. Paul says "anathema" (let him be accursed) TWICE — of anyone, even an angel, who preaches a different gospel. What does this intensity reveal about the gospel\'s importance? How does this correct theological relativism?' },
      { phase: '2. Crucified with Christ (2:20)', description: 'Read 2:20 word by word. "I am crucified" (past tense, completed action); "yet I live" (present reality); "not I, but Christ" (the subject has changed); "by the faith of the Son of God" (source is external). Unpack the grammar of the Christian life.' },
      { phase: '3. Abraham\'s Justification (3:6-14)', description: 'Paul\'s argument: Abraham was justified by faith (Gen 15:6) before circumcision and before Sinai. Therefore faith, not law-keeping, has always been the basis of justification. And Christ became a "curse" (Deut 21:23) to redeem us from the law\'s curse. How does this cross-reference OT and NT?' },
      { phase: '4. The Law as Tutor (3:23-4:7)', description: 'Read 3:23–4:7. The law was a "schoolmaster" (paidagogos — a slave who escorted children to school) to bring us to Christ. Now that faith has come, we are no longer under the tutor but adopted sons with full inheritance. How does this framework change how Christians relate to OT law?' },
      { phase: '5. The Fruit vs. the Works', description: 'Read 5:16-26. "Works of the flesh" (5:19-21) are produced by effort and rebellion; "fruit of the Spirit" (5:22-23) is produced organically by abiding in the Spirit. You don\'t make fruit — you bear it. What does this say about sanctification and spiritual disciplines?' },
    ],
  },

  ephesians: {
    overview: `Ephesians is the most exalted of Paul's letters — soaring theological heights in chapters 1–3 (the church in the heavenly realms) followed by earthly practical application in chapters 4–6 (the church in daily life). Written from prison, Paul meditates on the cosmic purpose of the church: to display the manifold wisdom of God to rulers and authorities in the heavenly places (3:10). Every major theme of the NT is present: election, grace, the atonement, the Spirit, the church, marriage, spiritual warfare.`,
    howWritten: `Written by Paul from prison (Rome or Caesarea), c. AD 60–62. Unlike most of Paul's letters, Ephesians contains no personal greetings or local problems to solve — many manuscripts lack "in Ephesus" (1:1), suggesting it may have been a circular letter sent to multiple churches. It is paired with Colossians (many parallel passages) but where Colossians focuses on Christ's supremacy over creation, Ephesians focuses on Christ's headship over the church. The prayer of 1:17-23 and 3:14-21 are among the richest in Scripture.`,
    structure: [
      'Our Position in Christ (1–3) — Chosen, adopted, redeemed, sealed; prayer; dead made alive; one new man',
      'Our Practice in Christ (4–6) — Unity; gifts; put off/put on; family roles; spiritual armor',
    ],
    themes: [
      { title: 'Election and Grace', description: '"He hath chosen us in him before the foundation of the world, that we should be holy and without blame before him in love: Having predestinated us unto the adoption of children" (1:4-5). Salvation is entirely initiated and sustained by God\'s sovereign love.' },
      { title: 'The Church as the Body of Christ', description: 'The church is not a human institution but a divine organism — Christ\'s body and fullness (1:22-23), his bride (5:25-27), a holy temple (2:21-22), and the arena for displaying God\'s wisdom to the cosmos (3:10). The church is the centerpiece of God\'s eternal purpose.' },
      { title: 'Spiritual Warfare', description: '"For we wrestle not against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this world" (6:12). The Christian life is not merely ethical improvement — it is war against unseen spiritual forces. The armor of God is the believer\'s combat equipment.' },
      { title: 'The Mystery of the Church', description: '"That the Gentiles should be fellowheirs, and of the same body, and partakers of his promise in Christ by the gospel" (3:6). The "mystery" hidden for ages is that Jews and Gentiles are one body in Christ — the most socially and racially divided boundary of the ancient world is abolished in Christ.' },
    ],
    highlights: [
      { verse: 'Ephesians 2:8-9', text: '"For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast."' },
      { verse: 'Ephesians 3:20', text: '"Now unto him that is able to do exceeding abundantly above all that we ask or think, according to the power that worketh in us."' },
      { verse: 'Ephesians 4:32', text: '"And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ\'s sake hath forgiven you."' },
      { verse: 'Ephesians 6:12', text: '"For we wrestle not against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this world, against spiritual wickedness in high places."' },
    ],
    deepPath: [
      { phase: '1. The Three Prayers', description: 'Read Paul\'s three prayers: 1:15-23 (knowing the hope, the riches, the power); 3:14-21 (strengthened in the inner man, rooted in love, filled with all the fullness of God). These are models of intercession for believers. What does Paul pray for that we rarely pray?' },
      { phase: '2. Dead Made Alive (2:1-10)', description: 'Read 2:1-10. "Dead in trespasses and sins" (2:1) — not sick, not weak, but dead. What can a dead man do toward God? Nothing — that is Paul\'s point. God makes alive (2:4-5) those who are completely unable to respond. Then 2:10: we are his workmanship (poiema) created for good works.' },
      { phase: '3. The One New Man (2:11-22)', description: 'Read 2:11-22. The "dividing wall" between Jews and Gentiles in the temple was a literal stone barrier. Christ abolished it — not just metaphorically but theologically. The "one new man" is a new ethnos, neither Jewish nor Gentile but the church. How does this shape our approach to racial reconciliation?' },
      { phase: '4. Marriage as Mystery (5:22-33)', description: 'Read 5:22-33. Paul quotes Genesis 2:24 and then says "this is a great mystery: I speak concerning Christ and the church." Human marriage was designed from creation to be a living parable of Christ\'s covenant love for the church. How does this elevate and reframe marriage?' },
      { phase: '5. The Armor of God (6:10-18)', description: 'Read 6:10-18. Each piece of armor is not new equipment but a description of Christ himself (Isaiah 11:5; 59:17). You "put on the Lord Jesus Christ" (Romans 13:14) — the armor is the character of Christ appropriated in prayer. How does "praying always" (6:18) activate the armor?' },
    ],
  },

  philippians: {
    overview: `Philippians is Paul's most joyful letter — written from prison. The word "joy" or "rejoice" appears 16 times in four chapters. The church at Philippi was Paul's first European church, founded through the conversion of Lydia and a jailer, and it held a special place in his heart as his most faithful partner in the gospel. The letter's purpose: encourage a church facing internal division (Euodia and Syntyche, ch. 4) and external persecution, by pointing them to the mind of Christ — the ultimate model of self-giving humility.`,
    howWritten: `Written by Paul from prison (probably Rome), c. AD 60–62. Epaphroditus, the Philippians' messenger, had brought a financial gift and was nearly dying when Paul wrote. The letter is a thank-you and an update, but Paul weaves into it deep theological teaching — particularly the Christ Hymn of 2:5-11, one of the most debated and significant Christological passages in the NT. The "kenosis" (self-emptying) of Christ is the ethical model for Christian community.`,
    structure: [
      'Gratitude and Prayer (1) — Partnership in the gospel; Paul\'s chains advancing the gospel; to live is Christ',
      'The Mind of Christ (2) — Humility; the Christ Hymn (2:5-11); Epaphroditus',
      'Warnings and the Goal (3) — Beware the dogs; Paul\'s credentials abandoned; pressing toward the goal',
      'Peace and Provision (4) — Euodia and Syntyche; rejoice always; contentment; the peace of God',
    ],
    themes: [
      { title: 'Joy in Suffering', description: '"Rejoice in the Lord alway: and again I say, Rejoice" (4:4) — written from prison. Paul\'s joy is not circumstantial happiness but settled confidence in God\'s purpose (1:6) and the sufficiency of Christ (4:13). Joy is not a feeling to pursue but a posture to choose.' },
      { title: 'The Christ Hymn (2:5-11)', description: 'The pre-existent Christ "made himself of no reputation" (kenoo — emptied himself) by taking the form of a servant, becoming obedient unto death, even the death of the cross. Because of this, God exalted him. Humility leads to exaltation — in Christ and in his followers.' },
      { title: 'Knowing Christ', description: '"Yea doubtless, and I count all things but loss for the excellency of the knowledge of Christ Jesus my Lord" (3:8). Paul lists his impressive religious credentials — and calls them all dung compared to knowing Christ. The Christian life is personal knowledge, not religious performance.' },
      { title: 'Contentment', description: '"I have learned, in whatsoever state I am, therewith to be content" (4:11). Contentment is not given — it is learned (mathein — a process of education through experience). Paul learned it "both to be abased, and to abound." It is a trained spiritual muscle.' },
    ],
    highlights: [
      { verse: 'Philippians 1:21', text: '"For to me to live is Christ, and to die is gain."' },
      { verse: 'Philippians 2:5-8', text: '"Let this mind be in you, which was also in Christ Jesus: Who, being in the form of God, thought it not robbery to be equal with God: But made himself of no reputation... and became obedient unto death, even the death of the cross."' },
      { verse: 'Philippians 4:6-7', text: '"Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus."' },
      { verse: 'Philippians 4:13', text: '"I can do all things through Christ which strengtheneth me."' },
    ],
    deepPath: [
      { phase: '1. The Christ Hymn (2:5-11)', description: 'Read 2:5-11 as liturgical poetry. Note the movement: equal with God → self-emptying → servant → obedience → death → death of the cross → EXALTATION → every knee bows → every tongue confesses. This is the entire gospel in eight verses. How does 2:12-18 apply the hymn practically?' },
      { phase: '2. Rubbish for the Sake of Christ (3:4-14)', description: 'Read 3:4-14. Paul\'s credentials are extraordinary — if anyone had reason for religious confidence, it was Paul. He calls it all "skubala" (dung, excrement). The contrast: "the righteousness of the law" vs. "the righteousness which is of God by faith" (3:9). What does it mean to have no confidence in the flesh?' },
      { phase: '3. Euodia and Syntyche (4:2-3)', description: 'Two women who "laboured with me in the gospel" (4:3) are in conflict. Paul names them publicly and asks a third party to help. What does this show about conflict resolution in the early church? Why name them? Why ask for a mediator? Apply this to church conflict today.' },
      { phase: '4. The Peace of God (4:6-9)', description: 'Read 4:6-9. The sequence: stop anxiety → prayer with thanksgiving → the peace of God guards the heart/mind → think on whatever is true, noble, just, pure, lovely... (4:8) → the God of peace will be with you (4:9). What is the role of gratitude in transforming anxiety into peace?' },
      { phase: '5. "I Have Learned Contentment"', description: 'Read 4:11-13. Paul was not always content — he "learned" it (past tense, completed learning) through the experience of both plenty and poverty. 4:13 is not a motivational slogan about athletic achievement — it is Paul\'s declaration that Christ strengthens him to be content in prison. Apply it to your actual circumstances.' },
    ],
  },

  colossians: {
    overview: `Colossians addresses a church Paul had not personally founded (4:12), facing a syncretistic "philosophy" that blended Jewish ritual, angelic veneration, and ascetic practices with Christianity. Paul's response is the most concentrated Christology in his letters: Christ is not one element in a spiritual system — he is the fullness of the Godhead, the one in whom all the treasures of wisdom and knowledge are hidden, the head of every power and authority. There is no need for angelic mediators, dietary rules, or esoteric knowledge — Christ is all and in all.`,
    howWritten: `Written by Paul from prison (Rome), c. AD 60–62, delivered along with Philemon and Ephesians by Tychicus. Epaphras, who had founded the Colossian church (1:7), had brought word of the Colossian heresy to Paul. The Christ Hymn of 1:15-20 is one of the highest Christological statements in all of Scripture — possibly an early Christian hymn Paul cites and applies.`,
    structure: [
      'Thanksgiving and Prayer (1:1-14)',
      'The Supremacy of Christ (1:15-23) — Christ Hymn; all things created in him, through him, for him',
      'Paul\'s Ministry (1:24–2:5) — The mystery: Christ in you the hope of glory',
      'Warning Against False Teaching (2:6-23) — Don\'t be robbed of your prize; fullness in Christ',
      'The New Life in Christ (3:1–4:6) — Set your mind on things above; put off/put on; household code',
      'Final Greetings (4:7-18)',
    ],
    themes: [
      { title: 'The Supremacy of Christ', description: '"He is the image of the invisible God, the firstborn of every creature: For by him were all things created, that are in heaven, and that are in earth... all things were created by him, and for him" (1:15-16). Christ is not part of creation — he is its architect, sustainer, and goal.' },
      { title: 'Fullness in Christ Alone', description: '"For in him dwelleth all the fulness of the Godhead bodily. And ye are complete in him" (2:9-10). The Colossian heresy offered supplementary spiritual experiences. Paul\'s answer: you are already full — in Christ. Adding anything to Christ is subtracting from him.' },
      { title: 'Christ in You', description: '"To whom God would make known what is the riches of the glory of this mystery among the Gentiles; which is Christ in you, the hope of glory" (1:27). The great mystery of the NT: not merely Christ for us (Romans) or Christ above us (Ephesians) but Christ in us — indwelling, transforming presence.' },
      { title: 'Set Your Mind Above', description: '"Set your affection on things above, not on things on the earth" (3:2). The risen Christ is the center of a new value system. "Mind above" is not escapism — Paul immediately applies it to marriage, parenting, and work (3:18–4:1).' },
    ],
    highlights: [
      { verse: 'Colossians 1:15-17', text: '"Who is the image of the invisible God, the firstborn of every creature: For by him were all things created... and he is before all things, and by him all things consist."' },
      { verse: 'Colossians 1:27', text: '"To whom God would make known what is the riches of the glory of this mystery among the Gentiles; which is Christ in you, the hope of glory."' },
      { verse: 'Colossians 2:9-10', text: '"For in him dwelleth all the fulness of the Godhead bodily. And ye are complete in him, which is the head of all principality and power."' },
      { verse: 'Colossians 3:1-2', text: '"If ye then be risen with Christ, seek those things which are above, where Christ sitteth on the right hand of God. Set your affection on things above, not on things on the earth."' },
    ],
    deepPath: [
      { phase: '1. The Christ Hymn (1:15-20)', description: 'Read 1:15-20 as poetry. Note the parallel structure: Christ and creation (1:15-17) / Christ and the church (1:18-20). He is "firstborn" (prototokos) — not first created but preeminent in rank. How does "by him all things consist" (1:17) describe Christ\'s sustaining role in the cosmos right now?' },
      { phase: '2. The Mystery Revealed (1:24-27)', description: 'Paul uses "mystery" (mysterion) four times in Colossians. In the NT, a mystery is not something unknowable but something that was hidden and is now revealed. The mystery: "Christ in you, the hope of glory" — Gentile inclusion in the promise. How does this change how you understand the OT/NT relationship?' },
      { phase: '3. The Colossian Heresy (2:8-23)', description: 'Paul identifies the heresy\'s features: philosophy (2:8), ritual observance (2:16), angel worship (2:18), asceticism (2:21-23). Each feature tries to add to Christ. Paul\'s counter to each: you are complete in Christ (2:10). What modern equivalents of these additions do you encounter?' },
      { phase: '4. The Household Code (3:18–4:1)', description: 'Read 3:18–4:1. Each relationship (wife/husband, children/parents, slaves/masters) is reoriented by "as unto the Lord" or "unto God." How does the presence of Christ transform the power dynamics of everyday relationships?' },
      { phase: '5. Let the Word Dwell Richly (3:16)', description: 'Read 3:16-17. "Let the word of Christ dwell in you richly in all wisdom; teaching and admonishing one another in psalms and hymns and spiritual songs, singing with grace in your hearts to the Lord." This is the Colossian alternative to the false teachers\' "philosophy" — the indwelling Word expressed in community worship.' },
    ],
  },

  '1thessalonians': {
    overview: `1 Thessalonians is one of Paul's earliest letters, written to a young church that had been founded just weeks before Paul was forced to leave by mob violence (Acts 17). He writes with intense pastoral affection — relieved that the Thessalonians are standing firm in persecution, and addressing their chief anxiety: what has happened to believers who have died before Christ's return? The letter contains the NT's most detailed description of the Second Coming (4:13-18).`,
    howWritten: `Written by Paul from Corinth, c. AD 51, just months after founding the church. Timothy had just returned with good news from Thessalonica (3:6). The letter is warm, personal, and relatively free of theological controversy — the church is healthy and Paul is deeply grateful. He uses the language of family throughout: "as a father doth his children" (2:11), "as a nurse cherisheth her children" (2:7). The eschatological sections (4:13-5:11) are the most detailed in any NT letter.`,
    structure: [
      'Thanksgiving and History (1–3) — The church\'s faith; Paul\'s ministry among them; Timothy\'s report',
      'Practical Holiness (4:1-12) — Sexual purity; brotherly love; working with your hands',
      'The Second Coming (4:13-5:11) — The dead in Christ rise first; the Day of the Lord; children of light',
      'Final Instructions (5:12-28) — Respect leaders; rejoice, pray, give thanks; test all things',
    ],
    themes: [
      { title: 'Hope in the Face of Death', description: '"But I would not have you to be ignorant, brethren, concerning them which are asleep, that ye sorrow not, even as others which have no hope" (4:13). The resurrection hope transforms grief — it does not eliminate it, but it transforms it from despair to expectation.' },
      { title: 'The Second Coming', description: '4:13-18 is the most vivid NT description of the Parousia: the Lord descends with a shout, with the voice of the archangel, with the trump of God; the dead in Christ rise; the living are caught up (harpazō — rapture) together with them.' },
      { title: 'Holiness in a Pagan Culture', description: '"For this is the will of God, even your sanctification, that ye should abstain from fornication" (4:3). In sexually permissive Thessalonica (a major port city), holy living was counter-cultural. God\'s will is not primarily a career path — it begins with personal holiness.' },
      { title: 'Rejoice, Pray, Give Thanks', description: '"Rejoice evermore. Pray without ceasing. In every thing give thanks: for this is the will of God in Christ Jesus concerning you" (5:16-18). Three commands in fourteen Greek words — the most concentrated ethical summary in Scripture.' },
    ],
    highlights: [
      { verse: '1 Thessalonians 4:13-14', text: '"But I would not have you to be ignorant, brethren, concerning them which are asleep, that ye sorrow not, even as others which have no hope. For if we believe that Jesus died and rose again, even so them also which sleep in Jesus will God bring with him."' },
      { verse: '1 Thessalonians 4:16-17', text: '"For the Lord himself shall descend from heaven with a shout... and the dead in Christ shall rise first: Then we which are alive and remain shall be caught up together with them in the clouds, to meet the Lord in the air."' },
      { verse: '1 Thessalonians 5:16-18', text: '"Rejoice evermore. Pray without ceasing. In every thing give thanks: for this is the will of God in Christ Jesus concerning you."' },
      { verse: '1 Thessalonians 5:23', text: '"And the very God of peace sanctify you wholly; and I pray God your whole spirit and soul and body be preserved blameless unto the coming of our Lord Jesus Christ."' },
    ],
    deepPath: [
      { phase: '1. Paul as Pastor (2:1-12)', description: 'Read 2:1-12. Paul uses three images: the nursing mother (2:7), the father (2:11), and the orphan (2:17). He shared not just the gospel but his own life (2:8). What does this reveal about the nature of authentic pastoral ministry? How does it contrast with platform-driven ministry?' },
      { phase: '2. The Second Coming and Grief', description: 'Read 4:13-18. What exactly happens? Note: the purpose is not to frighten but to comfort (4:18). The resurrection of the dead precedes the rapture of the living. How does hope of Christ\'s return transform how we handle the deaths of those we love?' },
      { phase: '3. Children of Light and Day (5:1-11)', description: 'Read 5:1-11. Paul contrasts "children of darkness" (the Day of the Lord will surprise them like a thief) with "children of light" (for whom the Day is not unexpected). What does "you are not in darkness" mean? How does eschatological awareness shape daily behavior?' },
      { phase: '4. "Pray Without Ceasing"', description: 'Read 5:17 — two words in Greek (adialeiptos proseuchesthe). This does not mean never stop speaking prayers — it means maintain a constant prayerful orientation toward God, like a radio continuously transmitting. Compare with Luke 18:1 and Ephesians 6:18. What does this look like practically?' },
      { phase: '5. The Three-Part Benediction (5:23)', description: 'Read 5:23. "Spirit, soul, and body" — the totality of human personhood is included in God\'s sanctification. Holiness is not just spiritual; it involves the whole person. The God of peace does this work; we do not sanctify ourselves. What is our role in the process?' },
    ],
  },

  '2thessalonians': {
    overview: `2 Thessalonians corrects two errors that arose from Paul's first letter: (1) some believers thought the Day of the Lord had already come, leading to panic; (2) some used the imminence of Christ's return as an excuse to stop working and become idle. Paul addresses both: certain events must precede the Day of the Lord (the "man of lawlessness" must be revealed first), and waiting for Christ is no excuse for laziness — "if any would not work, neither should he eat" (3:10).`,
    howWritten: `Written by Paul from Corinth, c. AD 51–52, just months after 1 Thessalonians. A forged letter claiming to be from Paul had apparently circulated (2:2), creating panic that the Day of the Lord had arrived. Paul writes to correct this, and the letter contains the most detailed NT passage about the "man of lawlessness" — a figure who precedes Christ's return by exalting himself above every god and sitting in the temple of God.`,
    structure: [
      'Thanksgiving (1:1-12) — Perseverance in persecution; Christ\'s return will bring justice',
      'The Man of Lawlessness (2:1-12) — The apostasy comes first; the restrainer removed; the lawless one revealed',
      'Stand Firm (2:13-17) — Chosen for salvation; hold the traditions',
      'Work While Waiting (3:1-18) — Prayer for Paul; discipline for the idle; never tire of doing good',
    ],
    themes: [
      { title: 'The Necessity of Accurate Eschatology', description: '"Let no man deceive you by any means: for that day shall not come, except there come a falling away first, and that man of sin be revealed" (2:3). Correct understanding of end-time events protects against both complacency and panic.' },
      { title: 'The Man of Lawlessness', description: 'The "man of lawlessness" (anomias) sits in God\'s temple, opposing everything divine, performing false miracles. He is "restrained" until the appointed time. This figure connects to Daniel\'s "little horn" (7:8) and Revelation\'s beast (13:1-8).' },
      { title: 'Faithful Work as Witness', description: '"For even when we were with you, this we commanded you, that if any would not work, neither should he eat" (3:10). Eschatological hope does not produce passivity — it produces purposeful diligence. Idleness is a theological problem, not just a practical one.' },
      { title: 'Never Tire of Doing Good', description: '"But ye, brethren, be not weary in well doing" (3:13). The discipline of the idle and the encouragement to perseverance are two sides of the same coin: the Christian life requires sustained, consistent obedience regardless of circumstances.' },
    ],
    highlights: [
      { verse: '2 Thessalonians 1:7-8', text: '"And to you who are troubled rest with us, when the Lord Jesus shall be revealed from heaven with his mighty angels, In flaming fire taking vengeance on them that know not God."' },
      { verse: '2 Thessalonians 2:3', text: '"Let no man deceive you by any means: for that day shall not come, except there come a falling away first, and that man of sin be revealed, the son of perdition."' },
      { verse: '2 Thessalonians 3:3', text: '"But the Lord is faithful, who shall stablish you, and keep you from evil."' },
      { verse: '2 Thessalonians 3:10', text: '"For even when we were with you, this we commanded you, that if any would not work, neither should he eat."' },
    ],
    deepPath: [
      { phase: '1. The Man of Lawlessness (2:1-12)', description: 'Read 2:1-12 alongside Daniel 7:8, 11:36-45, and Revelation 13:1-10. These passages all describe a singular figure of concentrated evil who precedes Christ\'s return. What is "the restrainer" (2:6-7)? Study the main interpretations: the Roman empire, the Holy Spirit, the church.' },
      { phase: '2. Standing Firm (2:13-17)', description: 'Read 2:13-17. After the fearsome passage about the lawless one, Paul grounds the Thessalonians: "God hath from the beginning chosen you to salvation through sanctification of the Spirit and belief of the truth." Election is comfort in spiritual crisis.' },
      { phase: '3. Orderly Work as Theology', description: 'Read 3:6-15. The idle members were probably not malicious — they were theological. If Christ is coming soon, why work? Paul answers with his own example (3:7-9) and the creation mandate (work is not a result of the Fall but a pre-Fall gift). How does resurrection hope produce diligence, not passivity?' },
      { phase: '4. Church Discipline', description: 'Read 3:14-15. Paul instructs the church to "note" the disobedient person and not associate, so they may be ashamed — but treat him as a brother, not an enemy. This is the NT\'s most specific instruction on corrective church discipline. What is the goal? What prevents it from becoming punitive?' },
      { phase: '5. The Faithfulness of God (3:3)', description: 'Read 3:3: "the Lord is faithful." After warning about the man of lawlessness, false doctrine, and idle members, Paul anchors everything in God\'s own faithfulness. Compare 1 Thessalonians 5:24: "Faithful is he that calleth you, who also will do it." What is the role of God\'s faithfulness in sustaining Christian perseverance?' },
    ],
  },

  '1timothy': {
    overview: `1 Timothy is Paul's instruction manual to his young pastoral protégé in Ephesus — how to lead a church in the face of false teaching, how to organize its leadership and order its worship, and how to conduct himself as God's man. The book is pastoral theology compressed into six chapters: sound doctrine, godly character, church leadership structures, and the call to "fight the good fight of faith" (6:12). It is the most comprehensive NT text on pastoral ministry.`,
    howWritten: `Written by Paul, c. AD 62–64, after his release from his first Roman imprisonment. Timothy was a young pastor ("let no man despise thy youth," 4:12) serving in Ephesus, facing specific false teachers who were promoting "myths and endless genealogies" (1:4) and forbidding marriage and certain foods (4:3). The letter is intensely practical but rests on theological foundations: the purpose of the letter is godliness that flows from "the truth which is after godliness" (1:1).`,
    structure: [
      'Warning Against False Teachers (1) — Paul\'s commission; the law\'s proper use; the gospel entrusted to Timothy',
      'Prayer and Worship Order (2) — Pray for all; the one mediator; order in worship',
      'Qualifications for Leaders (3) — Overseers; deacons; the mystery of godliness',
      'Warning of Apostasy (4) — Deceiving spirits; bodily training vs. godliness; a good minister',
      'Care for the Community (5–6) — Widows; elders; slaves; contentment; Timothy\'s charge; the love of money',
    ],
    themes: [
      { title: 'Sound Doctrine', description: '"This is a faithful saying, and worthy of all acceptation" (1:15; 3:1; 4:9; and similar phrases appear four times). Sound teaching (hugiainō — healthy) produces godly character. Doctrine is not academic — it is the food that produces spiritual health or disease.' },
      { title: 'Godly Character', description: 'The qualifications for overseers (3:1-7) and deacons (3:8-13) are almost entirely character-based, not skill-based. The church\'s health depends not primarily on the leader\'s gifts or charisma but on his godliness.' },
      { title: 'The One Mediator', description: '"For there is one God, and one mediator between God and men, the man Christ Jesus; who gave himself a ransom for all" (2:5-6). This verse, in the context of a call to pray for all people, grounds the church\'s intercessory mission in the universal scope of the atonement.' },
      { title: 'The Love of Money', description: '"For the love of money is the root of all evil" (6:10) — not money itself but its love. "Godliness with contentment is great gain" (6:6). Paul calls Timothy to "flee these things" (6:11) and "fight the good fight of faith" (6:12) — the contrast is deliberate.' },
    ],
    highlights: [
      { verse: '1 Timothy 1:15', text: '"This is a faithful saying, and worthy of all acceptation, that Christ Jesus came into the world to save sinners; of whom I am chief."' },
      { verse: '1 Timothy 2:5-6', text: '"For there is one God, and one mediator between God and men, the man Christ Jesus; Who gave himself a ransom for all."' },
      { verse: '1 Timothy 4:12', text: '"Let no man despise thy youth; but be thou an example of the believers, in word, in conversation, in charity, in spirit, in faith, in purity."' },
      { verse: '1 Timothy 6:12', text: '"Fight the good fight of faith, lay hold on eternal life, whereunto thou art also called, and hast professed a good profession before many witnesses."' },
    ],
    deepPath: [
      { phase: '1. The Mystery of Godliness (3:16)', description: 'Read 3:16 — this is likely an early Christian hymn or creed: six balanced lines summarizing the gospel (incarnation, vindication by Spirit, seen by angels, preached to nations, believed in the world, received up into glory). How does each line describe Christ\'s work?' },
      { phase: '2. The Leader\'s Character (3:1-13)', description: 'List every quality required of an overseer (3:1-7) and deacon (3:8-13). Count how many are character-based versus competence-based. What does this reveal about God\'s priorities in church leadership? How different is this from how organizations typically select leaders?' },
      { phase: '3. Training in Godliness (4:6-16)', description: 'Read 4:6-16. "Bodily exercise profiteth little: but godliness is profitable unto all things" (4:8). Paul does not dismiss physical training — he uses it as an analogy for spiritual discipline. What is Paul\'s training regimen for a pastor? What is the goal?' },
      { phase: '4. Contentment as Great Gain (6:1-19)', description: 'Read 6:6-19. Godliness with contentment (autarkeia — self-sufficiency, independence from circumstances) is the greatest wealth. Paul gives the logic (we brought nothing into the world, 6:7) and the warning (the love of money). Then 6:17-19: those who are rich are commanded to be rich in good works.' },
      { phase: '5. Timothy\'s Youth and Calling', description: 'Read 4:12 and 6:11-16. Timothy was apparently hesitant about his youth and perhaps his timidity (2 Tim 1:6-7). Paul does not tell him to feel more confident — he tells him to "be an example" and "flee" and "fight" and "lay hold on eternal life." What is the relationship between obedience and confidence in ministry?' },
    ],
  },
});

Object.assign(BOOK_STUDIES, {
  '2timothy': {
    overview: `2 Timothy is Paul's final letter — written from his second Roman imprisonment, facing imminent execution ("the time of my departure is at hand," 4:6). It is his spiritual last will and testament to Timothy: guard the deposit of the faith, suffer hardship as a good soldier, preach the Word in season and out of season, and finish the course. Against the backdrop of abandonment by almost everyone (4:16), Paul's triumphant declaration — "I have kept the faith" (4:7) — is one of the most moving sentences in Scripture.`,
    howWritten: `Written by Paul from Rome, c. AD 67, during his second imprisonment — conditions far harsher than the first (a dungeon, not house arrest). He mentions specific individuals: Demas who deserted him (4:10), Luke who stayed (4:11), and the cloak and books he left at Troas (4:13). The letter has the feel of a deathbed conversation. Paul is not bitter but resolved, not despairing but confident: "I know whom I have believed, and am persuaded that he is able to keep that which I have committed unto him against that day" (1:12).`,
    structure: [
      'Fan into Flame (1) — The gift of God; guard the deposit; Paul\'s chains are not shameful',
      'A Good Soldier (2) — Hardness; the workman who handles the word correctly; flee youthful lusts',
      'Last Days Warning (3) — Perilous times; the character of apostasy; the Scripture\'s sufficiency',
      'Final Charge (4) — Preach the Word; the crown of righteousness; Paul\'s farewell',
    ],
    themes: [
      { title: 'Guarding the Deposit', description: '"Guard the good deposit that was entrusted to you—guard it with the help of the Holy Spirit who lives in us" (1:14). The gospel is a treasure to be protected and transmitted, not revised. Each generation is a steward of something received, not an innovator of something new.' },
      { title: 'The Sufficiency of Scripture', description: '"All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness: That the man of God may be perfect, throughly furnished unto all good works" (3:16-17). The Bible is sufficient for everything the minister of God needs.' },
      { title: 'Faithful Suffering', description: '"Yea, and all that will live godly in Christ Jesus shall suffer persecution" (3:12). Paul\'s theology of suffering: it is not an aberration but the normal pattern for godly ministers. The antidote is not to avoid it but to endure it through the strength of Christ (4:17).' },
      { title: 'Finishing the Course', description: '"I have fought a good fight, I have finished my course, I have kept the faith: Henceforth there is laid up for me a crown of righteousness" (4:7-8). Paul does not measure success by results — his churches were troubled, his partners deserted him — but by faithfulness.' },
    ],
    highlights: [
      { verse: '2 Timothy 1:7', text: '"For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind."' },
      { verse: '2 Timothy 1:12', text: '"For I know whom I have believed, and am persuaded that he is able to keep that which I have committed unto him against that day."' },
      { verse: '2 Timothy 3:16-17', text: '"All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness: That the man of God may be perfect, throughly furnished unto all good works."' },
      { verse: '2 Timothy 4:7-8', text: '"I have fought a good fight, I have finished my course, I have kept the faith: Henceforth there is laid up for me a crown of righteousness."' },
    ],
    deepPath: [
      { phase: '1. Timothy\'s Timidity', description: 'Read 1:6-14. Paul urges Timothy to "stir up" (anazōpyrein — to rekindle a dying flame) the gift of God in him. The reason for boldness: "God hath not given us the spirit of fear; but of power, and of love, and of a sound mind" (1:7). What are the three gifts that replace fear? How do they function?' },
      { phase: '2. The Faithful Sayings of 2:11-13', description: 'Read 2:11-13 — another early creedal statement in four lines: died with Christ → live with him; endure → reign; deny him → denied; faithless → he remains faithful. Notice: even our faithlessness cannot cancel his faithfulness. What is the gospel logic of 2:13?' },
      { phase: '3. The Worker Approved (2:14-26)', description: 'Read 2:15: "rightly dividing the word of truth" (orthotomounta — cutting straight). This is the call to careful biblical interpretation, not just enthusiastic preaching. Paul pairs it with character: "flee youthful lusts" (2:22). Skill and character are both required.' },
      { phase: '4. The Inspiration of Scripture (3:16-17)', description: 'Read 3:16-17. "Theopneustos" — God-breathed. The entire OT is Paul\'s reference. It is profitable for four things: doctrine (what to believe), reproof (where you\'re wrong), correction (how to get right), training in righteousness (habit formation). These four cover the whole of spiritual formation.' },
      { phase: '5. Paul\'s Farewell (4:6-22)', description: 'Read 4:6-22 as a deathbed speech. The personal details are striking: only Luke with him (4:11), the cloak and books at Troas (4:13), the lion\'s mouth (probably Nero\'s court), all at my first defense abandoned me (4:16) — but the Lord stood with him (4:17). How does Paul\'s final season model facing death with faith?' },
    ],
  },

  titus: {
    overview: `Titus is Paul's instruction to his Greek convert and co-worker left on the island of Crete to "set in order the things that are wanting, and ordain elders in every city" (1:5). The Cretans had a notorious reputation for dishonesty and laziness (Paul quotes their own poet against them, 1:12). Titus' task: establish sound church leadership, teach sound doctrine, and model godly living. The theological foundation: the grace of God "that bringeth salvation hath appeared to all men, Teaching us that... we should live soberly, righteously, and godly" (2:11-12). Doctrine produces life.`,
    howWritten: `Written by Paul, c. AD 63–64, between his two Roman imprisonments. Titus is the shortest of the Pastoral Epistles but structurally the most elegant: each section moves from theological foundation to practical application. The two "faithful sayings" of the letter (3:5-8) contain compressed theology about regeneration by the Spirit. Paul had left Titus in Crete after missionary work there and wrote this letter to guide his ministry.`,
    structure: [
      'Qualifications for Elders (1) — Titus\' task; the elder\'s character; the Cretan problem',
      'Sound Doctrine for All Groups (2) — Older men; older women; young women; young men; servants; the grace of God',
      'Grace that Transforms (3) — Be subject to rulers; good works; the washing of regeneration; avoid divisive people',
    ],
    themes: [
      { title: 'Grace Transforms Behavior', description: '"For the grace of God that bringeth salvation hath appeared to all men, Teaching us that, denying ungodliness and worldly lusts, we should live soberly, righteously, and godly, in this present world" (2:11-12). Grace is not just justification — it is a teacher that transforms daily conduct.' },
      { title: 'Good Works as Evidence', description: '"This is a faithful saying, and these things I will that thou affirm constantly, that they which have believed in God might be careful to maintain good works" (3:8). Good works do not earn salvation but they authenticate it. In Crete\'s reputation for dishonesty, the church\'s integrity was its witness.' },
      { title: 'The Washing of Regeneration', description: '"Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of regenerating, and renewing of the Holy Ghost" (3:5). One of the clearest NT statements of the Spirit\'s regenerating work — salvation is washing and renewing by the Spirit, not human achievement.' },
      { title: 'Character-Based Leadership', description: 'Titus 1:6-9 lists elder qualifications almost entirely in terms of character. The one theological qualification is that he must "hold fast the faithful word as he hath been taught, that he may be able by sound doctrine both to exhort and to convince the gainsayers" (1:9).' },
    ],
    highlights: [
      { verse: 'Titus 2:11-12', text: '"For the grace of God that bringeth salvation hath appeared to all men, Teaching us that, denying ungodliness and worldly lusts, we should live soberly, righteously, and godly, in this present world."' },
      { verse: 'Titus 2:13', text: '"Looking for that blessed hope, and the glorious appearing of the great God and our Saviour Jesus Christ."' },
      { verse: 'Titus 3:5', text: '"Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of regeneration, and renewing of the Holy Ghost."' },
      { verse: 'Titus 3:8', text: '"This is a faithful saying, and these things I will that thou affirm constantly, that they which have believed in God might be careful to maintain good works."' },
    ],
    deepPath: [
      { phase: '1. Crete\'s Reputation and the Church\'s Calling', description: 'Read 1:12-13. Paul quotes Epimenides: "The Cretians are alway liars, evil beasts, slow bellies." He then says "this witness is true." The church at Crete was embedded in a culture of dishonesty. How does sound doctrine produce a community that contradicts its culture? What is the equivalent challenge for the church today?' },
      { phase: '2. The Social Texture of Sound Teaching (2:1-10)', description: 'Read 2:1-10. Paul applies "sound doctrine" to every demographic: older men, older women, younger women, younger men, servants. Notice how doctrine filters into relational and social textures. What does it mean to "adorn the doctrine of God" (2:10)?' },
      { phase: '3. The Two Appearings (2:11-14)', description: 'Read 2:11-14. The grace of God "appeared" (epiphanē) in Christ\'s first coming — this is our motivation to live godly now. We are "looking for" (prosdechomenoi) his "glorious appearing" (epiphaneia) — this is our future hope. The two appearings bracket Christian living. How does the second appearing shape present behavior?' },
      { phase: '4. Regeneration and Renewal (3:3-7)', description: 'Read 3:3-7. First Paul describes who we were (foolish, disobedient, hateful, 3:3) — then "but when the kindness and love of God appeared, Not by works of righteousness... but according to his mercy he saved us." The contrast is total: our wickedness → his mercy. What are the three aspects of salvation in 3:5-7?' },
      { phase: '5. Avoid Divisive People (3:10-11)', description: 'Read 3:10-11. The "heretic" (hairetikon anthrōpon — factious person) is to be warned once, twice, then avoided. Paul\'s reason: "he that is such is subverted, and sinneth, being condemned of himself" (3:11). How does this principle protect church unity without being uncharitable?' },
    ],
  },

  philemon: {
    overview: `Philemon is the shortest of Paul's letters and the most intensely personal — a private appeal to his wealthy friend Philemon on behalf of Onesimus, Philemon's runaway slave who had become a Christian through Paul's ministry in prison. Paul does not demand but appeals to love: receive Onesimus "not now as a servant, but above a servant, a brother beloved" (v. 16). The letter is a pastoral masterpiece of tact, warmth, and spiritual persuasion — and a profound statement about how the gospel transforms social relationships.`,
    howWritten: `Written by Paul from prison (Rome or Caesarea), c. AD 60–62, delivered by Onesimus himself along with Colossians (both letters mention Onesimus). The letter is 335 words in Greek — the shortest Pauline letter. It is entirely personal and never theological in the abstract, yet it contains some of Paul's deepest theological thinking embedded in the request: in Christ Jesus, the social distinction between master and slave is relativized. Paul "could enjoin" (v. 8) — he has apostolic authority to command — but he prefers love.`,
    structure: [
      'Greeting and Thanksgiving (1-7) — Paul, Timothy, Philemon; thanksgiving for Philemon\'s love and faith',
      'The Appeal (8-22) — Paul\'s request for Onesimus; the transformation; charge any debt to Paul',
      'Closing (23-25)',
    ],
    themes: [
      { title: 'Appeal Rather Than Command', description: '"Yet for love\'s sake I rather beseech thee... having confidence in thy obedience I wrote unto thee, knowing that thou wilt also do more than I say" (vv. 9, 21). Paul had apostolic authority to command, but chooses to appeal on the basis of love. This models Christian leadership at its best.' },
      { title: 'The Gospel and Social Structures', description: 'Paul does not explicitly demand that Philemon free Onesimus, but the logic of his appeal — "receive him as myself" (v. 17), "a brother beloved" (v. 16) — places Philemon in an impossible position if he holds Onesimus as a slave. The gospel does not immediately abolish slavery but it plants the seed of its destruction from within.' },
      { title: 'Substitutionary Logic', description: '"If he hath wronged thee, or oweth thee ought, put that on mine account; I Paul have written it with mine own hand, I will repay it" (vv. 18-19). Paul\'s offer to cover Onesimus\' debt is a small-scale enacted picture of the atonement. Luther saw in this letter the image of Christ interposing himself for the sinner before God.' },
      { title: 'The Transformation of the Useless', description: '"Which in time past was to thee unprofitable, but now profitable to thee and to me" (v. 11) — a pun on the name Onesimus (which means "profitable" or "useful"). Onesimus was a runaway who had been useless; now, transformed by Christ, he lives up to his name.' },
    ],
    highlights: [
      { verse: 'Philemon 1:10-11', text: '"I beseech thee for my son Onesimus, whom I have begotten in my bonds: Which in time past was to thee unprofitable, but now profitable to thee and to me."' },
      { verse: 'Philemon 1:16', text: '"Not now as a servant, but above a servant, a brother beloved, specially to me, but how much more unto thee, both in the flesh, and in the Lord?"' },
      { verse: 'Philemon 1:18-19', text: '"If he hath wronged thee, or oweth thee ought, put that on mine account; I Paul have written it with mine own hand, I will repay it."' },
      { verse: 'Philemon 1:21', text: '"Having confidence in thy obedience I wrote unto thee, knowing that thou wilt also do more than I say."' },
    ],
    deepPath: [
      { phase: '1. The Tact of the Letter', description: 'Read the entire letter in one sitting (it takes less than 3 minutes). Notice every piece of rhetorical tact Paul uses: flattery of Philemon\'s character (vv. 4-7), the appeal to love not authority (v. 9), the name pun (v. 11), "as myself" (v. 17), the offer to pay (v. 18), the implied pressure (v. 21). This is pastoral persuasion at its finest.' },
      { phase: '2. The Letter as the Gospel in Miniature', description: 'Luther said this letter shows us what Christ does for us before God: just as Paul intercedes for Onesimus and offers to bear his debt, Christ intercedes for us and bore our debt. Apply every verse to Christ\'s work on our behalf. This devotional exercise illuminates both Philemon and the gospel.' },
      { phase: '3. "More Than I Say" (v. 21)', description: 'Paul says he is "confident" Philemon will do "more than I say." What is the "more"? Most scholars think he is implying that Philemon should free Onesimus and perhaps send him back to Paul. Paul does not command it but makes it the only spiritually coherent response. How does the gospel work by creating moral inevitability rather than external coercion?' },
      { phase: '4. The Gospel and Slavery', description: 'Read Philemon v. 16 and then Galatians 3:28 and 1 Corinthians 7:21-23. Paul does not directly abolish slavery — but he places a spiritual bomb under it. "A brother in the flesh and in the Lord" — the same person, in the same household, is both slave and brother. How long can this contradiction survive the gospel?' },
      { phase: '5. Koinonia (Fellowship)', description: 'The word "fellowship" (koinonia) appears in verse 6: "the communication of thy faith." And Paul\'s appeal is that Philemon would receive Onesimus as a partner (koinonon, v. 17) — the same word. The gospel creates genuine community between the most socially unequal people. What does true koinonia look like in a class-stratified world?' },
    ],
  },

  hebrews: {
    overview: `Hebrews is the NT's most sophisticated theological argument — a sustained demonstration that Jesus Christ is the final and perfect fulfilment of everything in the OT: better than angels, better than Moses, better than the Aaronic priesthood, establishing a better covenant with better promises on the basis of a better sacrifice. Written to Jewish Christians tempted to return to Judaism under persecution, Hebrews answers: don't go back — the old covenant was always a shadow pointing forward to Christ, the substance. Chapter 11 (the faith hall of fame) and chapter 12 (run the race) complete the argument with pastoral urgency.`,
    howWritten: `Author unknown — the most debated authorship question in the NT. Candidates include Paul, Apollos (Luther's suggestion, widely held), Priscilla, Barnabas. The style is the most polished Greek in the NT, suggesting an extremely educated author. Date: c. AD 64–69, before the destruction of the temple (the present-tense language about temple sacrifice suggests the temple is still standing). The book is structured as a sermon (homilos) with alternating theological sections and practical exhortations.`,
    structure: [
      'Christ Superior to Angels and Moses (1–4) — The Son; the great salvation; enter the rest',
      'Christ the Superior High Priest (4:14–7:28) — Better than Aaron; after the order of Melchizedek',
      'The New Covenant (8–10) — Better covenant; better sanctuary; better sacrifice; once for all',
      'Faith (11) — The cloud of witnesses; definition of faith; examples from Abel to the Maccabees',
      'Run the Race (12–13) — Endure discipline; look to Jesus; practical exhortations',
    ],
    themes: [
      { title: 'The Superiority of Christ', description: 'The word "better" (kreitton) appears 13 times. Christ is better than every OT institution because he is the reality those institutions pointed to: he is both the priest who offers the sacrifice AND the sacrifice itself — once for all (ephapax).' },
      { title: 'The High Priestly Ministry of Christ', description: '"Seeing then that we have a great high priest, that is passed into the heavens, Jesus the Son of God, let us hold fast our profession" (4:14). Jesus is not a former priest — he is a present, active, interceding High Priest at the right hand of God.' },
      { title: 'The Warning Passages', description: 'Hebrews contains five major warning passages (2:1-4; 3:7-4:13; 5:11-6:12; 10:19-39; 12:25-29). Each warns against apostasy — drifting, hardening, falling away, trampling the Son of God. These passages are among the most sobering in Scripture.' },
      { title: 'Faith That Perseveres', description: '"Faith is the substance of things hoped for, the evidence of things not seen" (11:1). The heroes of faith all died without receiving the promised Messiah — but they lived and died oriented toward him. This is the model: faith is forward-looking, not backward-looking.' },
    ],
    highlights: [
      { verse: 'Hebrews 4:15-16', text: '"For we have not an high priest which cannot be touched with the feeling of our infirmities... Let us therefore come boldly unto the throne of grace, that we may obtain mercy, and find grace to help in time of need."' },
      { verse: 'Hebrews 11:1', text: '"Now faith is the substance of things hoped for, the evidence of things not seen."' },
      { verse: 'Hebrews 12:1-2', text: '"Wherefore seeing we also are compassed about with so great a cloud of witnesses, let us lay aside every weight... and let us run with patience the race that is set before us, Looking unto Jesus the author and finisher of our faith."' },
      { verse: 'Hebrews 13:8', text: '"Jesus Christ the same yesterday, and to day, and for ever."' },
    ],
    deepPath: [
      { phase: '1. Read Leviticus First', description: 'Read Leviticus 16 (Day of Atonement) and then Hebrews 9–10. Hebrews is incomprehensible without Leviticus. Every detail of the tabernacle/temple system finds its fulfilment in Christ. What does "once for all" (ephapax) mean compared to the annual repetition of the Day of Atonement?' },
      { phase: '2. The Melchizedek Argument (5–7)', description: 'Read Genesis 14:17-20 and Psalm 110 and Hebrews 7. Who is Melchizedek? The argument: he had no recorded ancestry — thus a type of the eternal priesthood. Jesus is a priest after his order, not Aaron\'s order. This makes his priesthood permanent, not limited to one tribe.' },
      { phase: '3. The Warning Passages', description: 'Read Hebrews 6:4-8 and 10:26-31. These are the most disputed passages in the NT. Who are described? Can true believers fall away? Study the major interpretations: they describe genuine apostasy; hypothetical scenario; people who appeared saved but were not. What is the pastoral purpose of the warnings?' },
      { phase: '4. Faith Hall of Fame (ch. 11)', description: 'Read ch. 11. Notice: every hero acted before they received the promise. Abel, Abraham, Moses — they all "died in faith, not having received the promises, but having seen them afar off" (11:13). What is the author saying about the relationship between faith and the fulfillment of promises?' },
      { phase: '5. Jesus as the Pioneer (12:1-3)', description: 'Read 12:1-3. "Looking unto Jesus the author (archēgon — pioneer, trailblazer) and finisher of our faith; who for the joy that was set before him endured the cross." Jesus ran the race before us and finished it. He is not just the example — he is the pioneer who opened the path. What is the "joy set before him"?' },
    ],
  },

  james: {
    overview: `James is the most practical book in the NT — the "Proverbs of the New Testament." Written by James the brother of Jesus (who was initially skeptical of Jesus' claims, John 7:5, but became a pillar of the Jerusalem church), it addresses Jewish Christians scattered in the diaspora. Its central thesis: authentic faith produces visible works. "Faith without works is dead" (2:26) is not a contradiction of Paul's "justification by faith" but a necessary complement: Paul addresses how a person is justified before God; James addresses how faith is evidenced before men and in the world.`,
    howWritten: `Written by James the brother of Jesus (leader of the Jerusalem church), c. AD 44–49 — possibly the earliest NT letter. James writes in excellent Greek but with Hebrew wisdom influences — the book is more similar to the Sermon on the Mount than to Paul's letters. Martin Luther famously called it an "epistle of straw" for its apparent tension with Romans; subsequent scholarship has shown James and Paul are addressing different questions with the same answer (both insist on genuine faith; they differ on what faith they are defending).`,
    structure: [
      'Trials and Wisdom (1) — Testing produces endurance; wisdom given freely; the mirror of the word',
      'Faith Without Favoritism (2) — No partiality; faith without works is dead; Abraham and Rahab',
      'Taming the Tongue (3) — The tongue is a fire; wisdom from above vs. below',
      'Worldliness and Pride (4) — Friendship with the world; "God resists the proud"; submit to God; do not slander',
      'Patience and Prayer (5) — The rich warned; patience of Job; prayer of Elijah; restoring the wandering',
    ],
    themes: [
      { title: 'Faith That Works', description: '"What doth it profit, my brethren, though a man say he hath faith, and have not works? can faith save him?" (2:14). James does not contradict Paul — he attacks dead orthodoxy. The test of genuine faith is not a theological statement but a transformed life.' },
      { title: 'The Tongue', description: '"The tongue is a fire, a world of iniquity" (3:6) and "no man can tame the tongue" (3:8). James devotes more attention to the dangers of speech than any other NT writer. The inability to tame the tongue is evidence of the heart\'s need for divine transformation.' },
      { title: 'The Prayer of Faith', description: '"The effectual fervent prayer of a righteous man availeth much" (5:16). The example is Elijah — a man of "like passions as we are" (5:17) whose prayer shut up and opened the heavens. Prayer is the most powerful thing the ordinary person can do.' },
      { title: 'Wisdom from Above', description: '"But the wisdom that is from above is first pure, then peaceable, gentle, and easy to be intreated, full of mercy and good fruits, without partiality, and without hypocrisy" (3:17). True wisdom has a distinctive character. Compare with earthly wisdom: bitter envy, strife, lies.' },
    ],
    highlights: [
      { verse: 'James 1:5', text: '"If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him."' },
      { verse: 'James 1:22', text: '"But be ye doers of the word, and not hearers only, deceiving your own selves."' },
      { verse: 'James 2:26', text: '"For as the body without the spirit is dead, so faith without works is dead also."' },
      { verse: 'James 5:16', text: '"Confess your faults one to another, and pray one for another, that ye may be healed. The effectual fervent prayer of a righteous man availeth much."' },
    ],
    deepPath: [
      { phase: '1. James and Paul on Justification', description: 'Read James 2:14-26 and Romans 3:28 alongside Galatians 2:16. Both use Abraham (Gen 15:6). Paul says Abraham was justified before God by faith; James says Abraham was "justified" (vindicated) before men by works. They answer different questions. Study how both are necessary.' },
      { phase: '2. The Mirror of the Word (1:22-25)', description: 'Read 1:22-25. The Word is a mirror. The hearer who forgets is like a man who looks in a mirror and immediately forgets his face. The doer looks intently, remembers, and acts. What does it mean to "look into the perfect law of liberty" rather than glancing? How is the Word a mirror?' },
      { phase: '3. The Tongue as a World (3:1-12)', description: 'Read 3:1-12. The tongue controls the whole body (like a ship\'s rudder), can set a great fire, can both bless and curse. "Out of the same mouth proceedeth blessing and cursing. My brethren, these things ought not so to be" (3:10). What does James propose as the solution (implicitly, from the rest of the chapter)?' },
      { phase: '4. Submit, Draw Near, Resist (4:6-10)', description: 'Read 4:6-10 — ten rapid imperatives in five verses. Note the sequence: "Submit yourselves therefore to God. Resist the devil, and he will flee from you. Draw nigh to God, and he will draw nigh to you." Submission to God enables resistance to the devil enables nearness to God. How do these three movements relate?' },
      { phase: '5. Elijah\'s Prayer (5:17-18)', description: 'Read 5:17-18. Elijah is presented not as a superhero but as a man "subject to like passions as we are" — he was ordinary. Yet his prayer shut the rain for 3.5 years and opened it again. What is the "effectual fervent prayer" that achieves this? Compare with Luke 18:1-8 (persistent prayer).' },
    ],
  },

  '1peter': {
    overview: `1 Peter is written to "strangers and pilgrims" — Jewish Christians scattered throughout Asia Minor facing social ostracism and coming persecution. Peter writes from Rome (referred to as "Babylon," 5:13) to encourage believers to hold their identity in Christ, live holy lives that silence slander, submit to authority not out of fear but as free people, and endure suffering by fixing their eyes on Christ who also suffered unjustly and was vindicated. The letter is saturated with OT imagery — Peter applies Israel's covenant identity to the new covenant community.`,
    howWritten: `Written by Peter the apostle, c. AD 64–65, likely shortly before his martyrdom under Nero. Silvanus (Silas) served as his secretary (5:12), which accounts for the polished Greek despite Peter's Galilean background. The letter engages directly with the Roman imperial context — the call to "honour the king" (2:17) and honor to all authority (2:13-17) was particularly relevant for a community under Nero's eye.`,
    structure: [
      'The Living Hope (1) — Election; imperishable inheritance; holy living because God is holy',
      'The Living Stone and Holy Nation (2) — Christ the cornerstone; the priestly community; submission as witness',
      'Suffering as Witness (3–4) — Wives and husbands; ready to give an answer; suffering for righteousness',
      'Leadership and Humility (5) — Shepherd the flock; resist the devil; God\'s care; benediction',
    ],
    themes: [
      { title: 'The Living Hope', description: '"Blessed be the God and Father of our Lord Jesus Christ, which according to his abundant mercy hath begotten us again unto a lively hope by the resurrection of Jesus Christ from the dead, To an inheritance incorruptible, and undefiled, and that fadeth not away" (1:3-4). The resurrection is not just a past event — it is the present basis of an indestructible hope.' },
      { title: 'Holy Conduct Among the Nations', description: '"Having your conversation honest among the Gentiles: that, whereas they speak against you as evildoers, they may by your good works, which they shall behold, glorify God in the day of visitation" (2:12). The best apologetic is a holy life. Peter calls for conduct so undeniably good that even slanders are silenced.' },
      { title: 'The Priesthood of All Believers', description: '"Ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people" (2:9) — applying Exodus 19:6 to the church. Every believer has direct access to God and the calling to be a priest — mediating between God and the world through prayer, proclamation, and presence.' },
      { title: 'Suffering as the Path to Glory', description: '"But rejoice, inasmuch as ye are partakers of Christ\'s sufferings; that, when his glory shall be revealed, ye may be glad also with exceeding joy" (4:13). Suffering and glory are inseparable in Peter\'s theology — as in Christ\'s. The cross precedes the crown.' },
    ],
    highlights: [
      { verse: '1 Peter 1:3-4', text: '"Blessed be the God and Father of our Lord Jesus Christ, which according to his abundant mercy hath begotten us again unto a lively hope by the resurrection of Jesus Christ from the dead, To an inheritance incorruptible."' },
      { verse: '1 Peter 2:9', text: '"But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people; that ye should shew forth the praises of him who hath called you out of darkness into his marvellous light."' },
      { verse: '1 Peter 3:15', text: '"But sanctify the Lord God in your hearts: and be ready always to give an answer to every man that asketh you a reason of the hope that is in you with meekness and fear."' },
      { verse: '1 Peter 5:7', text: '"Casting all your care upon him; for he careth for you."' },
    ],
    deepPath: [
      { phase: '1. OT Imagery Applied to the Church', description: 'Read 2:4-10. Peter applies Exodus 19:6 and Hosea 2:23 directly to Gentile Christians. What did it mean to call Gentiles "a holy nation" and "my people"? How does this expand the covenant community? What responsibilities come with this identity?' },
      { phase: '2. The Harrowing of Hell (3:18-22)', description: 'Read 3:18-22 — one of the most debated passages in Scripture. "He went and preached unto the spirits in prison." What does this mean? Main views: (1) Christ preached through Noah\'s generation; (2) Christ proclaimed victory to fallen angels; (3) Christ offered a second chance to the dead. Study the options carefully.' },
      { phase: '3. Always Ready to Give an Answer (3:15)', description: 'Read 3:15-16 — the locus classicus for Christian apologetics. Note: "sanctify the Lord in your hearts" comes before "be ready to give an answer." Apologetics flows from personal holiness, not academic preparation alone. "With meekness and fear" — how does the manner of the answer matter as much as the content?' },
      { phase: '4. The Elders and the Flock (5:1-4)', description: 'Read 5:1-4. Peter calls himself a "fellow elder" not a supreme authority. Three contrasts for shepherding: not by compulsion but willingly; not for money but eagerly; not by lording but by example. How do these three contrasts address the three main temptations of church leadership?' },
      { phase: '5. "God Careth for You" (5:6-11)', description: 'Read 5:6-11. "Humble yourselves under the mighty hand of God... casting all your care upon him; for he careth for you." The sequence: humility → casting anxiety onto God → watchfulness against the devil → resistance → steadfastness → God himself will restore you. Trace the logic of this passage.' },
    ],
  },

  '2peter': {
    overview: `2 Peter is Peter's final letter — a "second epistle" (3:1) written in the awareness of his approaching death (1:14), summarizing and intensifying his concerns. His primary targets: false teachers who will arise within the church, deny the Lord who bought them, and promise liberty while themselves being enslaved to corruption. Peter's antidote: grow in the knowledge of Christ (3:18), hold fast to the prophetic word (1:19-21), and remember that the delay of Christ's return is not indifference but patience — God is waiting for more to repent (3:9).`,
    howWritten: `Written by Peter, c. AD 65–68, just before his martyrdom. The letter borrows significantly from Jude (much of chapters 2 is parallel to Jude 4-18 — either Peter quotes Jude or Jude quotes Peter). The eyewitness claim in 1:16-18 (the Transfiguration) is one of the most important first-person historical claims in the NT. The letter's style is notably different from 1 Peter, possibly because Silvanus was not available as secretary.`,
    structure: [
      'Growth in Grace (1) — Divine power for life and godliness; the Transfiguration as eyewitness confirmation; Scripture\'s divine origin',
      'False Teachers (2) — Their character; judgment examples; their condemnation',
      'The Day of the Lord (3) — Scoffers; God\'s patience; the elements dissolve; new heavens and earth',
    ],
    themes: [
      { title: 'Divine Power for Godliness', description: '"According as his divine power hath given unto us all things that pertain unto life and godliness, through the knowledge of him that hath called us" (1:3). God has provided everything necessary for holy living. The call to "add to your faith" (1:5-7) is a response to provision, not an attempt to earn it.' },
      { title: 'The Reliability of Scripture', description: '"Holy men of God spake as they were moved by the Holy Ghost" (1:21). Scripture\'s origin is divine breath — not the prophet\'s own interpretation or desire but divine inspiration. This is the bedrock of biblical authority.' },
      { title: 'False Teaching from Within', description: 'Peter\'s false teachers are not external persecutors but people who infiltrate the church, exploit the vulnerable, and "deny the Lord that bought them" (2:1) while promising freedom. They are more dangerous than external threats because they look like believers.' },
      { title: 'God\'s Patience, Not Tardiness', description: '"The Lord is not slack concerning his promise, as some men count slackness; but is longsuffering to us-ward, not willing that any should perish, but that all should come to repentance" (3:9). The delay of Christ\'s return is an act of grace — every day of delay is an opportunity for more to be saved.' },
    ],
    highlights: [
      { verse: '2 Peter 1:3', text: '"According as his divine power hath given unto us all things that pertain unto life and godliness, through the knowledge of him that hath called us to glory and virtue."' },
      { verse: '2 Peter 1:20-21', text: '"Knowing this first, that no prophecy of the scripture is of any private interpretation. For the prophecy came not in old time by the will of man: but holy men of God spake as they were moved by the Holy Ghost."' },
      { verse: '2 Peter 3:9', text: '"The Lord is not slack concerning his promise... but is longsuffering to us-ward, not willing that any should perish, but that all should come to repentance."' },
      { verse: '2 Peter 3:18', text: '"But grow in grace, and in the knowledge of our Lord and Saviour Jesus Christ. To him be glory both now and for ever. Amen."' },
    ],
    deepPath: [
      { phase: '1. The Divine Nature (1:3-4)', description: 'Read 1:3-4. "Partakers of the divine nature" (theias koinōnoi physeōs) is one of the most extraordinary phrases in the NT. What does it mean? Peter connects it with escaping "the corruption that is in the world through lust" — the divine nature is moral transformation. How does this relate to theosis in Eastern Orthodox theology?' },
      { phase: '2. The Eyewitness Testimony (1:16-18)', description: 'Read 1:16-18. Peter is writing near the end of his life and appeals to his eyewitness account of the Transfiguration as the ground for prophetic certainty. "We were eyewitnesses of his majesty." Why is the historical, eyewitness nature of the gospel foundational? Compare with 1 John 1:1-3.' },
      { phase: '3. The False Teachers\' Profile (2:1-22)', description: 'Read ch. 2. List the false teachers\' characteristics: secretly destructive (2:1), exploit with fabricated stories (2:3), promise freedom while enslaved (2:19), worse off than before they believed (2:20-21). How does this profile help identify false teaching today? What is the key diagnostic?' },
      { phase: '4. The Day of the Lord (3:1-13)', description: 'Read 3:3-13. The scoffers argue that nothing has changed since creation — Peter answers: they deliberately forget the Flood. The Day of the Lord will come suddenly. "What manner of persons ought ye to be?" (3:11) — the expected dissolution of the present order is an argument for holiness, not despair.' },
      { phase: '5. Grow in Grace', description: 'Read 3:18 — the final verse. "Grow in grace and in the knowledge of our Lord." Peter\'s summary of the Christian life: growth. Not perfection, not performance, but progressive growth in grace (favor, gift — it is growing in something given) and knowledge (relational, experiential knowledge of Christ).' },
    ],
  },

  '1john': {
    overview: `1 John is a sustained meditation on three tests of genuine Christian faith: the moral test (do you keep his commandments?), the social test (do you love your brothers?), and the doctrinal test (do you confess that Jesus Christ has come in the flesh?). Written against proto-Gnostic teachers who denied the incarnation, John insists that the Christian life is simultaneously relational, ethical, and doctrinal. The letter is the most repetitive in the NT — John circles and returns to his themes because he wants them to stick. Its central declaration: "God is love" (4:8, 16).`,
    howWritten: `Written by John the apostle from Ephesus, c. AD 85–95. The secessionists (those who "went out from us," 2:19) were likely Docetists or early Gnostics who taught that Jesus only appeared to be human — thus denying the incarnation. John wrote to assure the community that had been shaken by this departure (2:26-27) and to give them objective tests for assurance of salvation. The letter contains the clearest expression of assurance in the NT: "These things have I written unto you that believe on the name of the Son of God; that ye may know that ye have eternal life" (5:13).`,
    structure: [
      'The Word of Life (1:1-4) — Eyewitness testimony; fellowship',
      'Walking in the Light (1:5–2:27) — Confession of sin; the commandments; love; the antichrists',
      'Children of God (2:28–4:6) — Practicing righteousness; love one another; the Spirit of truth vs. error',
      'Love and Assurance (4:7–5:21) — God is love; perfect love casts out fear; the three witnesses; assurance',
    ],
    themes: [
      { title: 'God Is Love', description: '"He that loveth not knoweth not God; for God is love" (4:8) and "God is love; and he that dwelleth in love dwelleth in God, and God in him" (4:16). John makes the most profound theological statement about God\'s essence in Scripture. Love is not merely what God does — it is what he is.' },
      { title: 'The Three Tests of Genuine Faith', description: 'The moral test: do you obey? (2:3-6; 5:2-3); The social test: do you love? (2:9-11; 3:14-18; 4:20-21); The doctrinal test: do you confess Christ come in the flesh? (4:2-3; 5:1). These three tests form John\'s diagnostic for authentic Christianity.' },
      { title: 'Perfect Love Casts Out Fear', description: '"There is no fear in love; but perfect love casteth out fear: because fear hath torment. He that feareth is not made perfect in love" (4:18). The mature Christian life moves from fear (performance-based obedience) to love (relationship-based obedience). Fear and love are not equally valid motivations — love matures beyond fear.' },
      { title: 'Assurance of Salvation', description: '"These things have I written unto you that believe on the name of the Son of God; that ye may know that ye have eternal life" (5:13). The purpose of 1 John is assurance. Against those who generate false assurance (the secessionists) and against those who generate false doubt, John gives objective grounds for certainty.' },
    ],
    highlights: [
      { verse: '1 John 1:9', text: '"If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness."' },
      { verse: '1 John 4:8', text: '"He that loveth not knoweth not God; for God is love."' },
      { verse: '1 John 4:18', text: '"There is no fear in love; but perfect love casteth out fear: because fear hath torment. He that feareth is not made perfect in love."' },
      { verse: '1 John 5:13', text: '"These things have I written unto you that believe on the name of the Son of God; that ye may know that ye have eternal life."' },
    ],
    deepPath: [
      { phase: '1. The Three Tests Applied to Yourself', description: 'Read the letter and apply the three tests to your own life: (1) Moral test: do I keep his commandments — not perfectly, but habitually? (2) Social test: do I love Christians genuinely, including those I find difficult? (3) Doctrinal test: do I confess the full humanity and divinity of Jesus? These three tests are not for condemning others but for your own assurance.' },
      { phase: '2. "God Is Light" and "God Is Love"', description: 'John uses two great declarations about God\'s nature: "God is light" (1:5) and "God is love" (4:8, 16). How do these two statements relate? Light speaks to holiness and truth; love speaks to relatedness and self-giving. How does the cross hold both together?' },
      { phase: '3. The Secessionists (2:18-27)', description: 'Read 2:18-27. The "antichrists" are people who left the community. Their departure proves they were never truly part of it (2:19). John\'s pastoral response: the community has the "anointing" (chrisma — the Spirit) which enables them to know truth without needing the false teachers\' superior "knowledge."' },
      { phase: '4. Love One Another (3:11-18)', description: 'Read 3:11-18. John\'s most radical statement: "We know that we have passed from death unto life, because we love the brethren. He that loveth not his brother abideth in death" (3:14). Love for other Christians is the evidence of regeneration. Then 3:16-18 defines love concretely: laying down life, sharing material goods.' },
      { phase: '5. The Three Witnesses (5:6-12)', description: 'Read 5:6-12. "The water and the blood" refers to Jesus\' baptism and crucifixion — John is insisting against the Docetists that Jesus was truly human at both points (not just appearing human). The three witnesses (Spirit, water, blood) testify to the reality of the incarnate Son.' },
    ],
  },

  '2john': {
    overview: `2 John is the shortest book in the NT (13 verses, 245 Greek words). Written by "the elder" (John) to "the elect lady and her children" (probably a specific church and its members), it summarizes the Christian life in two imperatives: walk in love (v. 6), and hold fast to the truth about Christ (vv. 7-11). The letter adds a practical warning absent from 1 John: do not extend hospitality to false teachers, for doing so makes you a participant in their evil work (v. 11).`,
    howWritten: `Written by John the apostle, c. AD 85–95, probably from Ephesus. The "elect lady" is most naturally a metaphor for a local church (as "Babylon" = Rome in 1 Peter 5:13); "her children" are its members. The letter is structured as a miniature 1 John: greeting, rejoicing in truth-keeping, the love commandment, the antichrist warning, the prohibition of hospitality to false teachers, and a closing with personal greetings.`,
    structure: [
      'Greeting (1-3) — The elder to the elect lady; truth, grace, mercy, peace',
      'Walk in Love and Truth (4-6) — Some of your children walk in truth; love one another',
      'Warning Against False Teachers (7-11) — Deceivers deny Christ; do not receive them',
      'Closing (12-13) — Personal visit; greetings from the elect sister',
    ],
    themes: [
      { title: 'Truth and Love Together', description: '"Grace, mercy, and peace, from God the Father... in truth and love" (v. 3). John always holds truth and love together. They are not competing values — truth without love is harshness; love without truth is sentimentality. The Christian community requires both.' },
      { title: 'Walking in Truth', description: '"I rejoiced greatly that I found of thy children walking in truth" (v. 4). "Walking in truth" is not merely believing correct doctrine — it is a lifestyle shaped by divine reality. Truth is not just information; it is a path to walk.' },
      { title: 'The Limits of Hospitality', description: '"Receive him not into your house, neither bid him God speed: For he that biddeth him God speed is partaker of his evil deeds" (vv. 10-11). Christian hospitality has limits — extending it to false teachers is not love but complicity. This was especially relevant in an era when traveling teachers depended on hospitality.' },
    ],
    highlights: [
      { verse: '2 John 1:6', text: '"And this is love, that we walk after his commandments. This is the commandment, That, as ye have heard from the beginning, ye should walk in it."' },
      { verse: '2 John 1:7', text: '"For many deceivers are entered into the world, who confess not that Jesus Christ is come in the flesh. This is a deceiver and an antichrist."' },
      { verse: '2 John 1:9', text: '"Whosoever transgresseth, and abideth not in the doctrine of Christ, hath not God. He that abideth in the doctrine of Christ, he hath both the Father and the Son."' },
      { verse: '2 John 1:12', text: '"Having many things to write unto you, I would not write with paper and ink: but I trust to come unto you, and speak face to face, that our joy may be full."' },
    ],
    deepPath: [
      { phase: '1. The Elect Lady as the Church', description: 'Study the question of whether "the elect lady" is an individual or a church. Read alongside 1 Peter 5:13 (Babylon = Rome) and Revelation 12:1 (the woman = the people of God). How does the feminine metaphor for the church in Scripture reflect the bride/Christ-church relationship?' },
      { phase: '2. Truth Is a Walk', description: 'Read vv. 4-6. "Walking in truth" and "walking in love" and "walking after his commandments." What does it mean for truth to be something you walk in? Compare with Ephesians 4:15: "speaking the truth in love, we are to grow up into him." Truth is dynamic and relational, not static and propositional.' },
      { phase: '3. The Doctrine of Christ (v. 9)', description: 'Read v. 9: "the doctrine of Christ." Does this mean doctrine about Christ (objective genitive) or doctrine that Christ himself taught (subjective genitive)? In context, it refers to the incarnation — the full humanity and divinity of Christ. Why is this the line that cannot be crossed?' },
      { phase: '4. Hospitality and Responsibility', description: 'Read vv. 10-11. The prohibition targets itinerant teachers who rely on household hospitality to spread false teaching. To house and "speed" (say "go well" — bless their journey) them is to partner in their ministry. What does responsible discernment of who to platform or support look like in the contemporary church context?' },
      { phase: '5. Letters vs. Face-to-Face', description: 'Read v. 12. John says he has much more to say but prefers face-to-face conversation for "full joy." Even inspired apostolic letters are seen as incomplete substitutes for presence. What does this say about the irreplaceable value of embodied Christian community? The church is not a text exchange.' },
    ],
  },

  '3john': {
    overview: `3 John is the most personal of the NT letters — a private note from John to Gaius, a faithful church member commended for his hospitality to traveling missionaries. The letter contrasts three characters: Gaius (faithful and hospitable), Diotrephes (proud and controlling, who refuses to receive John's letters and expels those who show hospitality to the brothers), and Demetrius (well-spoken of by everyone). The letter is a window into the tensions of early church leadership and the importance of receiving those who serve the gospel.`,
    howWritten: `Written by John the apostle, c. AD 85–95. The letter is 219 Greek words — the shortest letter in the NT. Diotrephes appears to be a local church leader who had effectively cut his church off from apostolic oversight. He "loves to have the preeminence" (v. 9) — the desire for control is the root of his behavior. Gaius, by contrast, represents faithful partnership in the truth regardless of political cost.`,
    structure: [
      'Greeting to Gaius (1-4) — Beloved; joy over walking in truth; body and soul thriving',
      'Commendation of Gaius (5-8) — Faithful hospitality to strangers; send them forward worthily',
      'Rebuke of Diotrephes (9-11) — Loves preeminence; refuses John; expels the hospitable',
      'Commendation of Demetrius (11-12) — Everyone speaks well of him',
      'Closing (13-15)',
    ],
    themes: [
      { title: 'Thriving in Body and Soul', description: '"Beloved, I wish above all things that thou mayest prosper and be in health, even as thy soul prospereth" (v. 2). John\'s wish for Gaius is holistic: physical wellbeing aligned with soul-wellbeing. This is the most explicit NT statement connecting spiritual health with overall human flourishing.' },
      { title: 'Hospitality as Partnership in the Truth', description: '"We therefore ought to receive such, that we might be fellowhelpers to the truth" (v. 8). Supporting traveling missionaries (who "took nothing of the Gentiles," v. 7) makes you a co-worker with them. Hospitality is a form of mission partnership.' },
      { title: 'The Danger of Loving Preeminence', description: '"Diotrephes, who loveth to have the preeminence among them" (v. 9) — John identifies this as the root of all Diotrephes\' sins. He is not a heretic but a control-seeker. The desire for preeminence in the church is one of its most destructive forces.' },
      { title: 'Walk in Truth', description: '"I have no greater joy than to hear that my children walk in truth" (v. 4). This phrase from 3 John is inscribed on many missionaries\' hearts. The greatest joy of a spiritual parent is not that their disciples know the truth intellectually but that they walk in it practically.' },
    ],
    highlights: [
      { verse: '3 John 1:2', text: '"Beloved, I wish above all things that thou mayest prosper and be in health, even as thy soul prospereth."' },
      { verse: '3 John 1:4', text: '"I have no greater joy than to hear that my children walk in truth."' },
      { verse: '3 John 1:9', text: '"I wrote unto the church: but Diotrephes, who loveth to have the preeminence among them, receiveth us not."' },
      { verse: '3 John 1:11', text: '"Beloved, follow not that which is evil, but that which is good. He that doeth good is of God: but he that doeth evil hath not seen God."' },
    ],
    deepPath: [
      { phase: '1. Soul Prosperity and Body Prosperity (v. 2)', description: 'Read v. 2. John connects physical health with soul health as analogous. A thriving soul is the measure and model. What does "soul prosperity" look like? How does genuine spiritual health affect the rest of a person\'s life? This verse is often misused to promise wealth; what does it actually say?' },
      { phase: '2. The Strangers Who Preach (vv. 5-8)', description: 'Read vv. 5-8. The traveling brothers were missionaries who depended entirely on the hospitality of churches because they "took nothing of the Gentiles" (v. 7) — they would not accept support from unbelievers to maintain the gospel\'s integrity. What does this say about financial boundaries in ministry?' },
      { phase: '3. Diotrephes — A Character Study', description: 'Read vv. 9-10. Four sins: loves preeminence, does not receive John, spreads false accusations, refuses hospitality and expels those who show it. These all flow from the first sin: pride. Study how a single root produces many toxic fruits. Compare with 3 John\'s model leaders (Gaius, Demetrius).' },
      { phase: '4. "Follow Not Evil but Good"', description: 'Read v. 11. The simple imperative: don\'t imitate evil (Diotrephes) but imitate good (Demetrius). How does the church form people through imitation? Compare with Paul\'s "be followers of me, even as I also am of Christ" (1 Cor 11:1) and Hebrews 13:7 (imitate your leaders\' faith).' },
      { phase: '5. Short Letters and Long Impact', description: 'Compare the three tiny letters of John (2 John, 3 John, Jude) with the longest letters (Romans, Hebrews). What does the presence of these brief personal letters in the canon tell you about what God considers worth preserving? Every act of faithful hospitality, every commendation, every warning is eternally significant.' },
    ],
  },

  jude: {
    overview: `Jude is one of the most urgent letters in the NT — a passionate appeal to "earnestly contend for the faith which was once delivered unto the saints" (v. 3). Jude had intended to write about "our common salvation" but changed course when false teachers infiltrated the church: immoral people who "turned the grace of our God into lasciviousness" (v. 4) — using grace as a license for sin. Jude's letter is a theological counterattack, loading historical examples of judgment and a doxology of astonishing power (vv. 24-25).`,
    howWritten: `Written by Jude, the brother of James and of Jesus (v. 1; Matthew 13:55), c. AD 65–80. Jude quotes from the non-canonical 1 Enoch (v. 14) and The Assumption of Moses (v. 9), demonstrating that NT authors could quote true statements from extra-biblical sources without endorsing the whole document. The letter shares extensive material with 2 Peter 2, suggesting literary dependence (in either direction). Despite its brevity (25 verses), it contains more historical examples per verse than almost any other NT letter.`,
    structure: [
      'Greeting and Purpose (1-4) — Contend for the faith; the intruders described',
      'Historical Examples of Judgment (5-16) — Israel, angels, Sodom; Cain, Balaam, Korah; prophetic condemnation',
      'Call to Stand Firm (17-23) — Remember the apostles\' warning; show mercy; save some',
      'Doxology (24-25) — "To him who is able to keep you from stumbling"',
    ],
    themes: [
      { title: 'Contend for the Faith', description: '"Earnestly contend for the faith which was once delivered unto the saints" (v. 3). The Greek epagōnizomai means to struggle against, to fight for. The faith is a fixed deposit — it was delivered, not discovered by each generation. Each generation is a custodian, not a reviser.' },
      { title: 'Grace Is Not a License', description: 'The false teachers "turn the grace of our God into lasciviousness" (v. 4) — they use the doctrine of grace to justify moral license. This is antinomianism: because we are forgiven, anything goes. Paul faced the same accusation (Romans 6:1) and John addressed it (1 John 3:6-8).' },
      { title: 'Historical Patterns of Judgment', description: 'Jude lines up three groups who experienced judgment: Israel in the wilderness (unbelief), fallen angels (transgression of assigned order), Sodom and Gomorrah (sexual immorality). These three categories correspond to the three sins of the false teachers. History is a warning.' },
      { title: 'The Doxology (vv. 24-25)', description: '"Now unto him that is able to keep you from falling, and to present you faultless before the presence of his glory with exceeding joy..." — The greatest doxology in Scripture in terms of its scope. God is able to keep, to present, and to be glorified. The Christian\'s security rests in God\'s ability, not human performance.' },
    ],
    highlights: [
      { verse: 'Jude 1:3', text: '"Beloved, when I gave all diligence to write unto you of the common salvation, it was needful for me to write unto you, and exhort you that ye should earnestly contend for the faith which was once delivered unto the saints."' },
      { verse: 'Jude 1:20-21', text: '"But ye, beloved, building up yourselves on your most holy faith, praying in the Holy Ghost, Keep yourselves in the love of God, looking for the mercy of our Lord Jesus Christ unto eternal life."' },
      { verse: 'Jude 1:24-25', text: '"Now unto him that is able to keep you from falling, and to present you faultless before the presence of his glory with exceeding joy, To the only wise God our Saviour, be glory and majesty, dominion and power, both now and ever. Amen."' },
      { verse: 'Jude 1:22-23', text: '"And of some have compassion, making a difference: And others save with fear, pulling them out of the fire; hating even the garment spotted by the flesh."' },
    ],
    deepPath: [
      { phase: '1. The Three Historical Warnings', description: 'Read vv. 5-7. Three types of sin, three examples of judgment: (1) Unbelief — Israel who believed the report of the spies (v. 5); (2) Rebellion against divine order — angels who left their assigned domain (v. 6); (3) Sexual immorality — Sodom (v. 7). Apply each to the false teachers and to contemporary temptations.' },
      { phase: '2. Michael and the Devil (v. 9)', description: 'Read v. 9. Michael "durst not bring against him a railing accusation, but said, The Lord rebuke thee." Even the archangel deferred to God in rebuking the devil rather than doing so in his own authority. What does this say about how we engage spiritual opposition? Compare with Zechariah 3:2.' },
      { phase: '3. Three Categories of Compromised People (vv. 12-13)', description: 'Read vv. 12-13. Five vivid metaphors for the false teachers: spots at love feasts, waterless clouds, fruitless trees twice dead, wild waves, wandering stars. What does each metaphor communicate about the consequences of apostasy? These are people who promise what they cannot deliver.' },
      { phase: '4. Rescue Mission (vv. 22-23)', description: 'Read vv. 22-23. Three categories of people: those in doubt (show mercy), those in danger (save with fear, pulling from fire), those corrupted (mercy with caution). Jude requires pastoral discernment about how to engage different kinds of spiritual danger. How do you apply these three approaches?' },
      { phase: '5. The Doxology as Doctrine', description: 'Read vv. 24-25 in full. Unpack each phrase: "able to keep you from stumbling" — his power, not ours; "present you faultless" — forensic standing; "before his glory with exceeding joy" — not terror but joy. "Dominion and power, both now and ever" — his sovereignty is already established, not future. How does this doxology change how you face apostasy?' },
    ],
  },

  revelation: {
    overview: `Revelation is "the Apocalypse" — the ultimate unveiling of Jesus Christ (1:1, the "Revelation of Jesus Christ"). Written to seven real churches in Asia Minor facing Roman imperial persecution, it answers the believer's deepest crisis: does God still rule when his people are being killed? The answer is thundered in visions, symbols, and celestial liturgy: yes, the Lamb who was slain reigns on the throne; every power that opposes him will be destroyed; God will make all things new. Revelation is not primarily about prediction — it is about worship: who is truly Lord?`,
    howWritten: `Written by John the apostle from exile on Patmos, c. AD 94–96, under Domitian's persecution. Revelation belongs to the genre of apocalyptic literature (also seen in Daniel, Ezekiel, and portions of Isaiah and Zechariah). Its imagery is not to be decoded as a literal prediction of modern technology but read as a symbolic code using OT imagery (approximately 278 of 404 verses allude to the OT). There are four major interpretive frameworks: Preterist (past fulfillment), Historicist (church history), Futurist (end times), Idealist (timeless principles). Most evangelical scholars hold modified futurist views.`,
    structure: [
      'Letters to the Seven Churches (1–3) — Jesus walks among the lampstands; seven letters with praise, rebuke, promise',
      'The Heavenly Throne Room (4–5) — The Lion who is the Lamb; the sealed scroll; cosmic worship',
      'The Seven Seals (6–8) — Four horsemen; martyrs\' cry; cosmic signs; the seventh seal',
      'The Seven Trumpets (8–11) — Judgments; the two witnesses; the seventh trumpet',
      'The Dragon and the Beasts (12–14) — The woman, the child, the dragon; the two beasts; Babylon',
      'The Seven Bowls (15–18) — The final plagues; the fall of Babylon',
      'The Final Victory (19–22) — The Marriage Supper; Christ\'s return; the millennium; final judgment; new creation',
    ],
    themes: [
      { title: 'The Slain Lamb Reigns', description: 'The central image of Revelation is the Lamb (arnion — a slaughtered lamb) who stands at the center of the throne (5:6). The one who was killed is the one who holds all power. The cross is the pivot of cosmic history; it is how God defeats evil — not by overpowering it but by absorbing it.' },
      { title: 'Worship as Resistance', description: 'The Roman empire demanded emperor worship. Revelation responds with a vision of heavenly worship — the only one worthy of worship is the one on the throne and the Lamb. Every act of Christian worship in Revelation is an act of political resistance.' },
      { title: 'Judgment and Justice', description: 'The cry of the martyrs (6:10) — "How long, O Lord?" — is answered throughout the book. God\'s judgment is not wrath for its own sake but the vindication of the innocent, the liberation of the oppressed, and the final no to evil.' },
      { title: 'The New Jerusalem', description: '"And I John saw the holy city, new Jerusalem, coming down from God out of heaven, prepared as a bride adorned for her husband" (21:2). The new creation is not escapism but the renewal of the whole earth. God comes down to humanity; the home of God is with man (21:3). The garden-city replaces all exile.' },
      { title: 'Come, Lord Jesus', description: '"He which testifieth these things saith, Surely I come quickly. Amen. Even so, come, Lord Jesus" (22:20). The entire book has been building to this prayer — the earliest Christian prayer preserved (Maranatha — 1 Cor 16:22). Revelation ends with longing and invitation.' },
    ],
    highlights: [
      { verse: 'Revelation 1:7', text: '"Behold, he cometh with clouds; and every eye shall see him, and they also which pierced him: and all kindreds of the earth shall wail because of him. Even so, Amen."' },
      { verse: 'Revelation 5:9', text: '"And they sung a new song, saying, Thou art worthy to take the book, and to open the seals thereof: for thou wast slain, and hast redeemed us to God by thy blood out of every kindred, and tongue, and people, and nation."' },
      { verse: 'Revelation 21:3-4', text: '"Behold, the tabernacle of God is with men, and he will dwell with them... and God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain."' },
      { verse: 'Revelation 22:20', text: '"He which testifieth these things saith, Surely I come quickly. Amen. Even so, come, Lord Jesus."' },
    ],
    deepPath: [
      { phase: '1. The Seven Letters (ch. 2–3)', description: 'Read each letter individually. Each follows the same structure: description of Christ drawn from ch. 1, commendation, rebuke, call to repentance, promise to the overcomer. Which letter speaks most to your own church? Which overcomer promise resonates with where you are spiritually?' },
      { phase: '2. The Throne Room (ch. 4–5)', description: 'Read ch. 4–5 as a liturgical vision. The four living creatures, the 24 elders, the sealed scroll, the Lamb who opens it. The question of 5:2 ("who is worthy?") and its answer (5:5-6: the Lion is a Lamb who was slain) is the theological center of the entire book. How does this vision redefine power?' },
      { phase: '3. The Four Horsemen (6:1-8)', description: 'Read 6:1-8. Conquest, war, famine, death — the four agents of history\'s suffering. They are released by the Lamb himself. God does not prevent these; he ordains them as instruments within his sovereign plan. How does this reframe the suffering of history without minimizing it?' },
      { phase: '4. Babylon the Great (ch. 17–18)', description: 'Read ch. 17–18. Babylon is the symbol of every empire that sets itself against God and exploits human beings for profit. The merchants of the earth weep; heaven rejoices. What does "come out of her, my people" (18:4) mean for Christians embedded in economic systems that are "Babylon" in nature?' },
      { phase: '5. The New Jerusalem (ch. 21–22)', description: 'Read 21:1–22:5. Note what is absent: sea (chaos), night (darkness), temple (mediation — God himself is the temple), sun and moon (Christ is the light), curse (Gen 3 is reversed). The new creation is the old creation healed, not destroyed. How does this vision shape Christian hope and environmental responsibility?' },
    ],
  },
});

Object.assign(BOOK_STUDIES, {
  psalms: {
    overview: `The Psalter is the hymnbook and prayerbook of ancient Israel and the most quoted OT book in the NT. Its 150 psalms span approximately 1,000 years of composition (from Moses to the post-exilic period). Organized into five books (echoing the five books of Moses), the Psalms cover the full range of human experience before God — joy, sorrow, doubt, praise, lament, confession, thanksgiving, and messianic hope. Martin Luther called it "a little Bible and a summary of the Old Testament."`,
    howWritten: `The Psalms were composed by multiple authors over centuries: David (73 psalms), the Sons of Korah (11), Asaph (12), Solomon (2), Moses (Psalm 90), Ethan (1), Heman (1), and anonymous authors (49). They were used in Israel's temple worship as processional hymns, penitential psalms, Royal Psalms, and Hallel psalms (113–118) sung at Passover. The Hebrew title is Tehillim — "Praises." Ancient Hebrew poetic forms include parallelism (synonymous, antithetical, synthetic), acrostic structures (Psalm 119, with all 22 Hebrew letters), and chiasm.`,
    structure: [
      'Book I (Psalms 1–41) — Davidic psalms; creation and individual relationship with God',
      'Book II (Psalms 42–72) — Deliverance and kingdom themes; ends with "the prayers of David the son of Jesse are ended"',
      'Book III (Psalms 73–89) — Asaph and Korah; the destruction of Jerusalem and God\'s faithfulness',
      'Book IV (Psalms 90–106) — Moses; God\'s eternal kingship over all creation',
      'Book V (Psalms 107–150) — Praise and restoration; the Great Hallel; concluding doxology',
    ],
    themes: [
      { title: 'Praise and Worship', description: 'The Psalms model authentic worship — not performance but personal encounter. God is praised for who he is (doxology) and for what he has done (thanksgiving). The command to praise is both a call and a gift.' },
      { title: 'Lament', description: 'One-third of the Psalms are laments — bold, honest complaints to God. They teach that authentic faith includes bringing pain, confusion, and even anger honestly before God. Lament is not lack of faith; it is faith speaking truthfully.' },
      { title: 'Messianic Prophecy', description: 'Key psalms (2, 22, 45, 69, 110, 118) are explicitly quoted in the NT as fulfilled in Jesus. Psalm 22 describes crucifixion in graphic detail — written 1,000 years before Christ and before crucifixion was invented as a method of execution.' },
      { title: 'Torah Meditation', description: 'Psalm 1 and the great Psalm 119 (the longest chapter in the Bible — 176 verses) celebrate the Word of God as the source of blessing, wisdom, and life. Meditating on Scripture day and night is the foundation of the blessed life.' },
      { title: 'The Good Shepherd', description: 'Psalm 23 — the best-known psalm — portrays the Lord as the perfect shepherd who provides, guides, comforts, and promises eternal dwelling. Jesus explicitly fulfills this in John 10: "I am the good shepherd."' },
    ],
    highlights: [
      { verse: 'Psalm 1:1-2', text: '"Blessed is the man that walketh not in the counsel of the ungodly... but his delight is in the law of the LORD; and in his law doth he meditate day and night."' },
      { verse: 'Psalm 22:1', text: '"My God, my God, why hast thou forsaken me?" — Quoted by Jesus on the cross (Matthew 27:46); the entire psalm anticipates the crucifixion.' },
      { verse: 'Psalm 23:1', text: '"The LORD is my shepherd; I shall not want."' },
      { verse: 'Psalm 119:105', text: '"Thy word is a lamp unto my feet, and a light unto my path."' },
    ],
    deepPath: [
      { phase: '1. Read the Five Books', description: 'Begin with the psalms at the opening of each book: 1, 42, 73, 90, 107. Each introduces a new theme. Then read the closing doxologies (41:13; 72:18-20; 89:52; 106:48; 150). The book is structured as a deliberate theological whole.' },
      { phase: '2. Study the Psalm Types', description: 'Categorize: Hymns of praise (8, 19, 29, 104), Laments (individual: 22, 69; corporate: 44, 74, 80), Thanksgivings (30, 116), Royal Psalms (2, 45, 72, 110), Wisdom Psalms (1, 37, 119), Pilgrimage Psalms (Songs of Ascent, 120–134).' },
      { phase: '3. The Messianic Psalms', description: 'Study Psalms 2, 22, 45, 69, 110, 118 alongside their NT quotations. How does Jesus read his own story in these psalms? The disciples after the resurrection "searched the scriptures" (Luke 24:27) — the psalms were their primary text.' },
      { phase: '4. Hebrew Poetry', description: 'Learn parallelism: synonymous (line 2 repeats line 1), antithetical (line 2 contrasts line 1), synthetic (line 2 completes line 1). See how Psalm 119\'s acrostic works — 22 Hebrew letters × 8 verses each = 176 verses, each section focused on God\'s word.' },
      { phase: '5. Pray the Psalms', description: 'Luther called the Psalms "a little Bible" — use them as a school of prayer. Pray Psalm 51 when you need to confess; Psalm 121 when you need reassurance; Psalm 22 when you feel forsaken; Psalm 100 when you need to praise. The psalms give us the words when we have none.' },
    ],
  },

  john: {
    overview: `The Gospel of John stands apart from the Synoptic Gospels (Matthew, Mark, Luke) in its elevated theological perspective. Written likely in Ephesus around AD 85–90, John's purpose is explicit: "But these are written, that ye might believe that Jesus is the Christ, the Son of God; and that believing ye might have life through his name" (John 20:31). John selects seven miracles ("signs") and seven "I AM" discourses to prove Jesus' divine identity, framing the entire ministry with a prologue of breathtaking depth: "In the beginning was the Word, and the Word was with God, and the Word was God."`,
    howWritten: `John was written by the Apostle John, son of Zebedee, "the disciple whom Jesus loved." Composed in Koine Greek and addressed to a broad audience — possibly primarily Gentile believers in Asia Minor — the book explains Jewish customs for non-Jewish readers. John uses distinctive vocabulary: light/darkness, believe, eternal life, love, truth, Word (Logos). The prologue (1:1–18) is a theological poem introducing the Logos who became flesh, drawing on Jewish Wisdom literature and Greek philosophical concepts to make a radical claim: the divine Logos became a particular Jewish man, Jesus of Nazareth.`,
    structure: [
      'Prologue (1:1–18) — The Word became flesh; light shines in darkness',
      'Book of Signs (1:19–12:50) — Seven miraculous signs proving Jesus\' identity',
      'Book of Glory (13:1–20:31) — The Upper Room Discourse; arrest; cross; resurrection',
      'Epilogue (21:1–25) — Restoration of Peter; John\'s witness',
    ],
    themes: [
      { title: 'Belief / Faith', description: 'The verb "believe" (pisteuō) appears 98 times in John — more than any other NT book. John portrays salvation as a matter of personal trust in Jesus as the Son of God. Faith is not intellectual assent but personal commitment.' },
      { title: 'Light and Darkness', description: 'Jesus is "the light of the world" (8:12). John frames the human condition as darkness — moral blindness and spiritual ignorance — into which the light of Christ breaks. Darkness cannot overcome it (1:5).' },
      { title: 'Eternal Life', description: 'John uses "eternal life" (zōē aiōnios) 17 times — more than any other Gospel. This is not merely endless duration but a qualitative life in relationship with God: "And this is life eternal, that they might know thee the only true God, and Jesus Christ" (17:3).' },
      { title: 'The "I AM" Sayings', description: 'Seven declarations of Jesus beginning "I am" (egō eimi): Bread of Life (6:35), Light of the World (8:12), Gate (10:9), Good Shepherd (10:11), Resurrection and Life (11:25), Way/Truth/Life (14:6), True Vine (15:1). Each echoes God\'s self-revelation to Moses in Exodus 3:14.' },
      { title: 'Love (Agapē)', description: 'The new commandment — "love one another as I have loved you" (13:34) — introduces a radically new standard: the measure of love is Christ\'s own self-giving sacrifice. This is the distinctive mark of the disciples.' },
    ],
    highlights: [
      { verse: 'John 1:1', text: '"In the beginning was the Word, and the Word was with God, and the Word was God."' },
      { verse: 'John 3:16', text: '"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."' },
      { verse: 'John 11:25-26', text: '"I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live: And whosoever liveth and believeth in me shall never die."' },
      { verse: 'John 14:6', text: '"I am the way, the truth, and the life: no man cometh unto the Father, but by me."' },
    ],
    deepPath: [
      { phase: '1. The Prologue (1:1–18)', description: 'Read the prologue 10 times. Then read it in Greek (or a word study). "Logos" (Word), "light," "life," "grace and truth" — every word is loaded. John is writing a new Genesis: "In the beginning" echoes Genesis 1:1. The Logos is the agent of both first creation and new creation.' },
      { phase: '2. The Seven Signs', description: 'Study each miracle: Cana (2:1-11), Nobleman\'s Son (4:46-54), Pool of Bethesda (5:1-15), Feeding 5,000 (6:1-14), Walking on Water (6:15-21), Man Born Blind (9:1-41), Lazarus (11:1-44). Each sign reveals an aspect of Jesus\' identity and provokes a faith/unbelief decision.' },
      { phase: '3. The "I AM" Sayings', description: 'Study each of the seven "I AM" declarations in context. Compare with Exodus 3:14 and Isaiah 43:10-11. Why did the Jewish authorities pick up stones when Jesus said "Before Abraham was, I am" (8:58)? What is the divine claim being made?' },
      { phase: '4. The Upper Room Discourse (13–17)', description: 'Chapters 13–17 contain Jesus\' most intimate teaching to his disciples. The Paraclete (Helper/Comforter) is promised four times (14:16-17; 14:26; 15:26; 16:7-11). The High Priestly Prayer of ch. 17 is Jesus praying for you specifically (17:20-21).' },
      { phase: '5. Greek Word Study', description: 'Study the key John-vocabulary: pisteúō (believe, G4100 — 98 times), agápē (love, G26 — qualitative, self-giving love), zōē (life, G2222 — the God-kind of life), logos (word, G3056 — reason, speech, the divine mind expressed), alētheia (truth, G225 — absolute reality).' },
    ],
  },
});
