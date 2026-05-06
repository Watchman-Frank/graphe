export interface KeyScripture {
  reference: string;
  text: string;
  significance: string;
}

export interface TimelineEvent {
  event: string;
  reference: string;
  year?: string;
}

export interface Character {
  id: string;
  name: string;
  hebrewGreek?: string;
  transliteration?: string;
  nameMeaning: string;
  testament: 'OT' | 'NT' | 'Both';
  category: string;
  era: string;
  keyBooks: string[];
  oneLiner: string;
  biography: string;
  historicalContext: string;
  keyScriptures: KeyScripture[];
  traits: string[];
  failures: string[];
  faithLessons: string[];
  typologyOfChrist?: string;
  theologicalSignificance: string;
  timeline: TimelineEvent[];
  relationships: string[];
  relatedCharacters: string[];
}

export const CHARACTERS: Character[] = [
  {
    id: 'adam',
    name: 'Adam',
    hebrewGreek: 'אָדָם',
    transliteration: 'Adam',
    nameMeaning: 'Man / Human / From the ground (adamah)',
    testament: 'OT',
    category: 'Patriarch',
    era: 'Creation (~4000 BC)',
    keyBooks: ['Genesis', 'Romans', '1 Corinthians'],
    oneLiner: 'The first man, whose disobedience brought sin into the world — and whose story points to the Last Adam who reverses the fall.',
    biography: `Adam was the first human being, formed by God from the dust of the ground (Genesis 2:7). God breathed life into him and placed him in the Garden of Eden to tend and keep it. He was created in the image of God (imago Dei) — a unique dignity shared by no other creature.

God declared it was not good for man to be alone, so he formed Eve from Adam's rib as his "suitable helper." Together they were commanded to be fruitful, multiply, and rule over creation as God's vice-regents.

The pivotal event of Adam's life was his disobedience. Eve was deceived by the serpent and ate the forbidden fruit; Adam, present with her (Genesis 3:6), deliberately chose to eat despite knowing God's command. This act of rebellion — theologians call it "the Fall" — brought sin, death, toil, and relational fracture into the whole human race. Paul writes: "By one man sin entered the world, and death through sin, and thus death spread to all men, because all sinned" (Romans 5:12).

Yet even in judgment, God gave the first gospel promise — the protoevangelium — that the seed of the woman would crush the head of the serpent (Genesis 3:15). This promise, given directly after Adam's sin, is the first whisper of Christ in the entire Bible.

Adam lived 930 years (Genesis 5:5) and fathered many children, including Cain, Abel, and Seth — through whose line the promised Messiah would eventually come.`,
    historicalContext: `The narrative of Adam is set in the ancient Near East, likely in a region near the Tigris and Euphrates rivers (the land of Eden, Genesis 2:14). Ancient Near Eastern cultures had their own creation myths (Enuma Elish, Atrahasis Epic) but Genesis sharply distinguishes itself: humanity is not an accident or a servant of bored gods, but the deliberate, dignified creation of one sovereign God, made to bear his image.

The word *adamah* (ground/earth) is a wordplay on *adam* (man), emphasizing humanity's creatureliness and dependence. Yet the same creature is given the breath of God (*nishmat chayyim*) — making Adam a being who straddles heaven and earth.`,
    keyScriptures: [
      { reference: 'Genesis 1:26-27', text: 'So God created man in his own image, in the image of God he created him; male and female he created them.', significance: 'The foundation of human dignity — every person bears the imago Dei, which sin mars but does not erase.' },
      { reference: 'Genesis 2:7', text: 'Then the LORD God formed man of dust from the ground and breathed into his nostrils the breath of life, and man became a living being.', significance: 'Adam\'s dual nature: earthy (dust) yet divine (God-breathed). He is creature elevated by grace, not a god by nature.' },
      { reference: 'Genesis 3:6', text: 'She took of its fruit and ate, and she also gave some to her husband who was with her, and he ate.', significance: 'Adam\'s sin was not deception but deliberate choice — making him more culpable. Paul uses this to explain why sin is credited to Adam (Romans 5), not Eve.' },
      { reference: 'Genesis 3:15', text: 'I will put enmity between you and the woman, and between your offspring and her offspring; he shall bruise your head, and you shall bruise his heel.', significance: 'The protoevangelium — the first gospel promise. The entire redemptive story begins here, in response to Adam\'s failure.' },
      { reference: 'Romans 5:12', text: 'Therefore, just as sin came into the world through one man, and death through sin, so death spread to all men because all sinned.', significance: 'Paul establishes the doctrine of original sin: Adam\'s sin has federal (representative) consequences for all humanity.' },
      { reference: '1 Corinthians 15:45', text: 'The first man Adam became a living being; the last Adam became a life-giving spirit.', significance: 'The Adam-Christ typology: Adam brought death through disobedience; Christ the Last Adam brings life through obedience.' },
    ],
    traits: ['Created in God\'s image', 'Given dominion over creation', 'Capacity for moral choice', 'Prone to blame-shifting (Genesis 3:12)', 'Father of all humanity'],
    failures: ['Disobeyed God\'s clear command', 'Was passively present when Eve was deceived, failing to protect', 'Blamed Eve (and implicitly God) when confronted', 'Hid from God rather than repenting immediately'],
    faithLessons: [
      'Human dignity is rooted in being made in God\'s image — not in achievement, beauty, or strength.',
      'Sin is rarely impulsive — Adam knew the command and still chose to disobey, warning us against slow, deliberate drift.',
      'When we fall, our instinct is to hide and blame. The gospel calls us to come out of hiding into God\'s presence.',
      'One person\'s choices affect many — leadership and responsibility are serious stewardships.',
      'Even in the darkest judgment, God provides covering (Genesis 3:21 — the first sacrifice) and promise (3:15).',
    ],
    typologyOfChrist: `Paul explicitly calls Jesus "the Last Adam" (1 Corinthians 15:45) and "the second man" (15:47). The contrast is total: Adam disobeyed in a garden and brought death; Jesus obeyed in a garden (Gethsemane) and brought life. Adam's sin meant condemnation for all in him; Christ's obedience means justification for all in him (Romans 5:18-19). Adam was made from dust; Christ came down from heaven. Adam failed the test; Christ passed every test. As Adam's sin was imputed to all his descendants, Christ's righteousness is imputed to all who believe.`,
    theologicalSignificance: `Adam is theologically central to the doctrines of original sin, the Fall, federal (representative) headship, and redemption. The entire logic of the gospel depends on the historicity of Adam: if death came through one man's sin (Romans 5:12), then life through one man's obedience (5:19) is necessary and coherent. The imago Dei doctrine — that every human bears God's image — flows from Adam's creation and grounds human rights, dignity, and value.`,
    timeline: [
      { event: 'Created from the dust of the ground', reference: 'Genesis 2:7' },
      { event: 'Placed in Eden; given the command not to eat from the tree of knowledge', reference: 'Genesis 2:15-17' },
      { event: 'Names all the animals', reference: 'Genesis 2:19-20' },
      { event: 'Eve created from his rib', reference: 'Genesis 2:21-22' },
      { event: 'The Fall — eats the forbidden fruit', reference: 'Genesis 3:6' },
      { event: 'God pronounces judgment; the protoevangelium given', reference: 'Genesis 3:14-19' },
      { event: 'God makes garments of skin — first sacrifice', reference: 'Genesis 3:21' },
      { event: 'Expelled from Eden', reference: 'Genesis 3:23-24' },
      { event: 'Cain and Abel born', reference: 'Genesis 4:1-2' },
      { event: 'Seth born after Abel\'s murder', reference: 'Genesis 4:25' },
      { event: 'Dies at age 930', reference: 'Genesis 5:5' },
    ],
    relationships: ['Eve (wife)', 'Cain (son)', 'Abel (son — murdered by Cain)', 'Seth (son — the line of promise)', 'God (creator and covenant partner)'],
    relatedCharacters: ['eve', 'noah', 'abraham'],
  },

  {
    id: 'moses',
    name: 'Moses',
    hebrewGreek: 'מֹשֶׁה',
    transliteration: 'Mosheh',
    nameMeaning: 'Drawn out (from water) — from Egyptian ms: "born of"',
    testament: 'OT',
    category: 'Prophet / Lawgiver',
    era: '~1526–1406 BC',
    keyBooks: ['Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Hebrews'],
    oneLiner: 'The great deliverer, lawgiver and prophet of Israel — a mediator between God and his people, whose life in every way foreshadows Jesus Christ.',
    biography: `Moses is the towering figure of the Old Testament. Born a Hebrew slave in Egypt during a time when Pharaoh had ordered the murder of all Hebrew male infants, he was hidden by his mother for three months, then placed in a basket on the Nile. Providentially discovered by Pharaoh's daughter, he was raised in the Egyptian royal palace — educated in "all the wisdom of the Egyptians" (Acts 7:22) while his own mother nursed him.

At forty, Moses saw an Egyptian beating a Hebrew slave. He killed the Egyptian and fled to Midian when the act became known, spending the next forty years as a shepherd — a dramatic reversal for a prince of Egypt. This "school of the desert" formed the character God required: humility, patience, and dependence.

At the burning bush (Exodus 3), God called Moses to return to Egypt and lead his people out of slavery. Moses objected five times — an extraordinary picture of a man who knew his own inadequacy. Yet this same man would become the most significant prophet in all of Hebrew history.

The ten plagues Moses called down upon Egypt, the Passover, the crossing of the Red Sea, the giving of the Law at Sinai, the construction of the Tabernacle, the forty years in the wilderness — these events form the backbone of Israel's national identity and the theological framework for understanding the gospel.

Moses spoke with God "face to face, as a man speaks with his friend" (Exodus 33:11). Yet even he was not permitted to see God's full glory (33:20-23). He was the mediator of the Old Covenant, but the New Testament presents Jesus as the superior mediator of a better covenant (Hebrews 8:6).

Moses died on Mount Nebo at 120 years old, within sight of the Promised Land he could not enter — a consequence of his sin at Meribah (Numbers 20). He was buried by God himself (Deuteronomy 34:6).`,
    historicalContext: `Moses lived in the context of Egyptian imperial power at its height (likely Thutmose III or Ramesses II as the Pharaoh of the Exodus). Egypt's state religion, bureaucracy, and agriculture were built on slave labour — including Semitic peoples like the Hebrews. The plagues are not random: each one directly attacks a specific Egyptian deity (the Nile — Hapi; frogs — Heqet; darkness — Ra; firstborn — the divine Pharaoh). God was not only delivering Israel but demonstrating his supremacy over every god of Egypt.

The Sinai covenant follows the pattern of ancient Near Eastern suzerainty treaties — a great king binds himself to a lesser vassal people. This helps explain the structure of Deuteronomy and why Israel's unfaithfulness is framed as covenant-breaking (adultery, treachery).`,
    keyScriptures: [
      { reference: 'Exodus 3:14', text: 'God said to Moses, "I AM WHO I AM." And he said, "Say this to the people of Israel: I AM has sent me to you."', significance: 'The great divine name — YHWH — is revealed to Moses. This name declares God\'s absolute self-existence and is the basis of the entire covenant relationship with Israel.' },
      { reference: 'Exodus 20:2-3', text: 'I am the LORD your God, who brought you out of the land of Egypt, out of the house of slavery. You shall have no other gods before me.', significance: 'The Ten Commandments begin not with command but with grace — God first identifies himself as Deliverer before he gives his law. Obedience flows from redemption.' },
      { reference: 'Numbers 12:3', text: 'Now the man Moses was very meek, more than all people who were on the face of the earth.', significance: 'The paradox of greatness in God\'s kingdom: the most powerful leader in Hebrew history is described by his humility, not his power.' },
      { reference: 'Deuteronomy 18:15', text: 'The LORD your God will raise up for you a prophet like me from among you, from your brothers — it is to him you shall listen.', significance: 'Moses himself predicted the coming of the Messiah-Prophet. Acts 3:22 and 7:37 identify Jesus as the fulfillment of this prophecy.' },
      { reference: 'Deuteronomy 34:10', text: 'And there has not arisen a prophet since in Israel like Moses, whom the LORD knew face to face.', significance: 'The epitaph of Moses: his unique intimacy with God. Yet Jesus would surpass even this — as the very Word of God made flesh.' },
      { reference: 'Hebrews 3:3', text: 'For Jesus has been counted worthy of more glory than Moses — as much more glory as the builder of a house has more honor than the house itself.', significance: 'Hebrews\' central argument: Moses was the servant in God\'s house; Jesus is the Son over God\'s house.' },
    ],
    traits: ['Humility (Numbers 12:3)', 'Intercessory passion for his people', 'Intimacy with God', 'Obedience under pressure', 'Courage before Pharaoh', 'Long-suffering patience with Israel\'s rebellion'],
    failures: ['Killed the Egyptian (acted in his own strength, not God\'s time)', 'Five-fold objection at the burning bush (unbelief)', 'Anger at Meribah — struck the rock instead of speaking to it (Numbers 20:11), costing him entry to Canaan', 'Briefly hid his identity as a Hebrew (disputed)', 'Yielded to the people\'s request for quail in anger (Numbers 11)'],
    faithLessons: [
      'God often prepares his greatest servants through the longest seasons of obscurity (40 years in Midian).',
      'When God calls, our sense of inadequacy is not a disqualification — it is the starting point. God meets it with his own sufficiency ("I AM").',
      'Intercession is one of the highest callings — Moses stood between God\'s wrath and a rebellious people, as Christ eternally intercedes for us.',
      'Even the greatest saints have moments of faithless anger (Meribah). God is gracious but consequences are real.',
      'The Law cannot bring us into the Promised Land — only grace (Joshua/Jesus) can do that. Moses pointing to the land but unable to enter is deeply theological.',
    ],
    typologyOfChrist: `Moses is the richest OT type of Christ. Both were: threatened as infants by evil rulers; both spent time in Egypt; both fasted 40 days; both gave God's law from a mountain; both were mediators between God and the people; both interceded for those who had sinned. Jesus is the "prophet like Moses" (Deuteronomy 18:15) but infinitely greater: Moses gave the law written on stone, Jesus writes it on hearts (Jeremiah 31:33); Moses' face shone with reflected glory, Jesus IS the glory of God (John 1:14); Moses sprinkled the blood of the old covenant, Jesus inaugurated a new covenant with his own blood (Hebrews 9:15).`,
    theologicalSignificance: `Moses stands at the centre of Old Testament theology. The Sinai covenant, the Law, the Tabernacle, and the entire sacrificial system come through him. He gives Israel its identity as a covenant people. His prophetic office defines what a prophet is (Deuteronomy 18:15-22). His intercession models what prayer looks like in covenant relationship. And in his ultimate inability to bring Israel into Canaan, he dramatizes the truth that the Law cannot save — that takes a Joshua (= Jesus) to accomplish.`,
    timeline: [
      { event: 'Born in Egypt during Pharaoh\'s genocide of Hebrew male infants', reference: 'Exodus 1:22–2:2', year: '~1526 BC' },
      { event: 'Placed in a basket on the Nile; discovered by Pharaoh\'s daughter', reference: 'Exodus 2:3-6' },
      { event: 'Raised in Egyptian court, educated in wisdom of Egypt', reference: 'Acts 7:22' },
      { event: 'Kills an Egyptian; flees to Midian', reference: 'Exodus 2:12-15', year: '~1486 BC' },
      { event: 'Marries Zipporah; becomes a shepherd in Midian for 40 years', reference: 'Exodus 2:21' },
      { event: 'Burning bush: God reveals himself as YHWH and calls Moses', reference: 'Exodus 3:1-4:17', year: '~1446 BC' },
      { event: 'Ten plagues on Egypt', reference: 'Exodus 7-12' },
      { event: 'The Passover', reference: 'Exodus 12' },
      { event: 'Exodus from Egypt; crossing of the Red Sea', reference: 'Exodus 14' },
      { event: 'Law given at Mount Sinai; the Ten Commandments', reference: 'Exodus 20' },
      { event: 'Golden calf incident; Moses intercedes and shatters tablets', reference: 'Exodus 32' },
      { event: 'God reveals his glory to Moses — the "back of God"', reference: 'Exodus 33:18-23' },
      { event: 'Tabernacle constructed and dedicated', reference: 'Exodus 40' },
      { event: 'Sin at Meribah — strikes the rock', reference: 'Numbers 20:11' },
      { event: 'Moses\' farewell addresses (Deuteronomy)', reference: 'Deuteronomy 1-33', year: '~1406 BC' },
      { event: 'Dies on Mount Nebo, viewing the Promised Land', reference: 'Deuteronomy 34:1-8' },
      { event: 'Appears with Elijah at the Transfiguration of Jesus', reference: 'Matthew 17:1-8' },
    ],
    relationships: ['Jochebed (mother)', 'Aaron (brother — spokesman)', 'Miriam (sister — prophetess)', 'Zipporah (wife)', 'Gershom (son)', 'Joshua (successor)', 'Pharaoh (adversary)'],
    relatedCharacters: ['aaron', 'joshua', 'elijah', 'david'],
  },

  {
    id: 'david',
    name: 'David',
    hebrewGreek: 'דָּוִד',
    transliteration: 'David',
    nameMeaning: 'Beloved / Darling',
    testament: 'OT',
    category: 'King / Poet / Prophet',
    era: '~1040–970 BC',
    keyBooks: ['1 Samuel', '2 Samuel', '1 Kings', 'Psalms', 'Matthew', 'Acts'],
    oneLiner: 'The shepherd-king after God\'s own heart — poet, warrior, sinner, and the royal ancestor through whom the Messiah would come.',
    biography: `David is one of the most fully-drawn human beings in all of Scripture — warrior and poet, sinner and worshipper, king and fugitive. His story spans nearly the entire narrative of 1 Samuel 16 through 1 Kings 2.

Born the youngest of Jesse's eight sons in Bethlehem, David spent his formative years as a shepherd — learning to trust God in solitude, killing lions and bears with his bare hands (1 Samuel 17:34-36), and composing the songs that would become the book of Psalms.

Samuel anointed him king in secret while Saul still reigned. Years of preparation followed: service in Saul's court, friendship with Jonathan, flight from Saul's jealousy (1 Samuel 18-31). During these years as a fugitive, David had two opportunities to kill Saul and take the kingdom by force — and refused both times, saying "I will not put out my hand against the LORD's anointed" (1 Samuel 26:11). This is the foundation of his character: an absolute commitment to God's sovereignty over timing and method.

David's greatest triumphs were military, political, and spiritual: defeating Goliath (1 Samuel 17), uniting the 12 tribes (2 Samuel 5), conquering Jerusalem and making it his capital, bringing the Ark of the Covenant to Jerusalem (2 Samuel 6), and receiving the Davidic Covenant — the promise of an eternal throne and a greater son who would reign forever (2 Samuel 7:12-16).

His greatest failure was his adultery with Bathsheba and the murder of Uriah (2 Samuel 11) — a catastrophic fall from which the consequences (the sword never leaving his house, 12:10) followed him to his death. Yet his response to Nathan's confrontation — "I have sinned against the LORD" (12:13) — and Psalm 51 show us what genuine repentance looks like.

David's reign lasted 40 years. He established Jerusalem as Israel's eternal capital, organized the temple worship, collected materials for the Temple his son Solomon would build, and left Israel at the height of its power and influence.`,
    historicalContext: `David's kingdom (c. 1010–970 BC) emerged at a unique geopolitical window: Egypt was weak, Assyria had not yet risen, and the Philistine threat had grown urgent. Israel's transition from tribal confederacy under judges to a centralized monarchy was politically necessary but theologically fraught. The tension between human kingship and God's kingship runs through the entire narrative. Jerusalem (Jebus), which David captured, had strategic geographic brilliance — a neutral city belonging to no tribe, making it the ideal capital for a unified nation.`,
    keyScriptures: [
      { reference: '1 Samuel 13:14', text: 'The LORD has sought out a man after his own heart, and the LORD has commanded him to be prince over his people.', significance: 'The defining phrase for David\'s life — not "a man with a pure heart" (he wasn\'t) but a man whose heart was oriented toward God, who repented when he fell.' },
      { reference: '2 Samuel 7:12-13', text: 'When your days are fulfilled and you lie down with your fathers, I will raise up your offspring after you... and I will establish the throne of his kingdom forever.', significance: 'The Davidic Covenant — the pivot of Old Testament prophecy. Every subsequent prophet builds on this promise of an eternal Davidic king (fulfilled in Jesus, Luke 1:32-33).' },
      { reference: 'Psalm 23:1', text: 'The LORD is my shepherd; I shall not want.', significance: 'The most beloved psalm — David, himself a shepherd, describes God as his shepherd. Every image comes from lived experience.' },
      { reference: 'Psalm 51:10', text: 'Create in me a clean heart, O God, and renew a right spirit within me.', significance: 'Written after Nathan\'s confrontation over Bathsheba. The most profound prayer of repentance in Scripture, teaching us what genuine contrition looks like.' },
      { reference: '2 Samuel 11:4', text: 'So David sent messengers and took her, and she came to him, and he lay with her.', significance: 'David\'s catastrophic fall — beginning with idleness (2 Sam 11:1, he stayed in Jerusalem when kings go to war), then looking, then desiring, then acting. Sin\'s progressive pattern.' },
      { reference: 'Acts 13:22', text: 'I have found in David the son of Jesse a man after my heart, who will do all my will.', significance: 'Paul\'s sermon applies the divine verdict to David centuries later — showing that being "after God\'s heart" was about directional orientation and repentance, not sinless perfection.' },
    ],
    traits: ['Worshipper with abandon (2 Samuel 6:14)', 'Courageous trust in God against all odds', 'Loyalty to covenants (Jonathan)', 'Generosity to enemies (Mephibosheth, 2 Samuel 9)', 'Poetic sensitivity', 'Fierce in battle, tender in worship'],
    failures: ['Adultery with Bathsheba', 'Murder of Uriah the Hittite by proxy', 'Numbering the people in pride (1 Chronicles 21)', 'Failure to discipline his sons (Amnon, Absalom)', 'Passivity at key moments of family crisis'],
    faithLessons: [
      '"After God\'s own heart" is about trajectory, not perfection. David fell horribly — what distinguished him was that he always returned to God.',
      'Repentance must be specific and without excuse (Psalm 51 never blames Bathsheba).',
      'Idleness is dangerous for leaders — David\'s fall began when he stayed home instead of going to battle.',
      'God\'s grace can redeem catastrophic failure, but earthly consequences remain. The sword did not leave David\'s house.',
      'True worship is uninhibited by what others think (2 Samuel 6:21-22 — David dancing "before the LORD").',
    ],
    typologyOfChrist: `The Davidic Covenant (2 Samuel 7) makes David the most direct royal type of Christ. Every prophet from Isaiah to Malachi describes the coming Messiah as a "son of David." Jesus is born in Bethlehem (David's city), is called "Son of David" throughout the Gospels, and enters Jerusalem on a donkey — deliberately evoking Solomonic kingship (1 Kings 1:33). The genealogies in Matthew and Luke trace Jesus' lineage through David. Revelation 5:5 calls Jesus "the Lion of the tribe of Judah, the Root of David." Where David was shepherd of Israel, Jesus is the Good Shepherd of all humanity (John 10:11). David's tabernacle of worship points to the new worship in Spirit and truth (Amos 9:11; Acts 15:16).`,
    theologicalSignificance: `David is theologically foundational for messianism, psalmic theology, and typological interpretation of the OT. The Davidic Covenant creates the expectation of an eternal royal son that drives the entire prophetic tradition (Isaiah 9:6-7; 11:1; Jeremiah 23:5; Ezekiel 34:23-24; Micah 5:2; Zechariah 9:9). His psalms gave Israel (and give us) the vocabulary of prayer — covering every human emotion and experience. His life teaches that God chooses "the despised things of the world" (1 Corinthians 1:28) — the youngest, the shepherd boy, the one no one expected.`,
    timeline: [
      { event: 'Born in Bethlehem, youngest of Jesse\'s 8 sons', reference: '1 Samuel 16:1-13', year: '~1040 BC' },
      { event: 'Secretly anointed king by Samuel while still a youth', reference: '1 Samuel 16:13' },
      { event: 'Appointed as Saul\'s court musician and armour-bearer', reference: '1 Samuel 16:21-22' },
      { event: 'Kills Goliath with a sling and stone', reference: '1 Samuel 17:49' },
      { event: 'Covenant of friendship with Jonathan', reference: '1 Samuel 18:3' },
      { event: 'Flees Saul\'s murderous jealousy; years as fugitive', reference: '1 Samuel 19-26' },
      { event: 'Twice spares Saul\'s life', reference: '1 Samuel 24; 26' },
      { event: 'Saul dies; David anointed king over Judah', reference: '2 Samuel 2:4', year: '~1010 BC' },
      { event: 'Anointed king over all Israel; captures Jerusalem', reference: '2 Samuel 5:3-7', year: '~1003 BC' },
      { event: 'Brings the Ark of the Covenant to Jerusalem, dances before the LORD', reference: '2 Samuel 6:14' },
      { event: 'The Davidic Covenant given', reference: '2 Samuel 7:12-16' },
      { event: 'Adultery with Bathsheba; murder of Uriah', reference: '2 Samuel 11', year: '~990 BC' },
      { event: 'Confronted by Nathan; repents (Psalm 51)', reference: '2 Samuel 12; Psalm 51' },
      { event: 'Absalom\'s rebellion; David flees Jerusalem', reference: '2 Samuel 15-17' },
      { event: 'Absalom defeated and killed', reference: '2 Samuel 18' },
      { event: 'Census taken in pride; 70,000 die', reference: '2 Samuel 24; 1 Chronicles 21' },
      { event: 'Charges Solomon; dies at age 70', reference: '1 Kings 2:1-10', year: '~970 BC' },
    ],
    relationships: ['Jesse (father)', 'Samuel (anointer/mentor)', 'Jonathan (covenant friend)', 'Saul (king/adversary)', 'Bathsheba (wife, mother of Solomon)', 'Solomon (son and successor)', 'Nathan (prophet/conscience)', 'Abigail (wife of wisdom)'],
    relatedCharacters: ['solomon', 'elijah', 'moses', 'peter'],
  },

  {
    id: 'paul',
    name: 'Paul (Saul of Tarsus)',
    hebrewGreek: 'Παῦλος / שָׁאוּל',
    transliteration: 'Paulos / Shaul',
    nameMeaning: 'Paul: Small / Humble. Saul: Asked for / Prayed for',
    testament: 'NT',
    category: 'Apostle',
    era: 'AD ~5–67',
    keyBooks: ['Acts', 'Romans', 'Galatians', '1-2 Corinthians', 'Ephesians', 'Philippians', 'Colossians', '1-2 Timothy', 'Titus', 'Philemon'],
    oneLiner: 'The most unlikely apostle — a persecutor of the church transformed by an encounter with the risen Christ into the greatest missionary theologian in history.',
    biography: `Paul of Tarsus towers above every other NT figure except Jesus himself. Born a Jew in Tarsus (in modern Turkey) with Roman citizenship — a rare and valuable combination — he was educated in Jerusalem under Gamaliel, the most respected rabbi of his generation. He was a Pharisee of the strictest order, "blameless" in legal righteousness (Philippians 3:6), and he was zealous to the point of violence against the new Jesus movement.

Paul presided over the stoning of Stephen (Acts 7:58) and was "breathing threats and murder against the disciples of the Lord" (Acts 9:1) when the risen Christ appeared to him on the road to Damascus. Blinded by light, he heard the voice: "Saul, Saul, why are you persecuting me?" Three days blind in Damascus, he fasted and prayed. Then Ananias came, healed him, and Paul was baptised — and the greatest reversal in church history was complete.

After years of preparation in Arabia and Damascus (Galatians 1:17-18), Paul began three extraordinary missionary journeys across the Roman Empire (Acts 13-20), planting churches in Galatia, Macedonia, Achaia, Asia Minor, and eventually reaching Rome. He preached in synagogues, public squares, private homes, on ships, and in prison — and was beaten, stoned, shipwrecked, imprisoned, and rejected.

His letters — 13 epistles in the New Testament — form the theological spine of Christian doctrine: justification by faith (Romans, Galatians), the nature of the church (Ephesians), resurrection (1 Corinthians 15), the sufficiency of Christ (Colossians), and the pastoral care of young churches (Timothy, Titus).

Paul was executed in Rome under Nero around AD 67. His last words preserved in Scripture: "I have fought the good fight, I have finished the race, I have kept the faith" (2 Timothy 4:7).`,
    historicalContext: `Paul ministered in the heart of the Roman Empire at its height. The Pax Romana (Roman Peace) created remarkable conditions for the spread of the gospel: a unified road system, a common Greek language (koine Greek), relative political stability, and the freedom of religious movement under Roman law. Roman citizenship, which Paul possessed, gave him legal protections that proved crucial (Acts 16:37; 22:25-28). The cities he targeted — Corinth, Ephesus, Antioch, Rome — were the largest and most strategically connected in the world.`,
    keyScriptures: [
      { reference: 'Acts 9:4-5', text: '"Saul, Saul, why are you persecuting me?" And he said, "Who are you, Lord?" And he said, "I am Jesus, whom you are persecuting."', significance: 'The Damascus Road encounter — the hinge of Paul\'s entire life. Note Jesus says "you are persecuting me" — identifying entirely with his church.' },
      { reference: 'Romans 1:16-17', text: 'For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes... For in it the righteousness of God is revealed from faith for faith.', significance: 'Paul\'s thesis statement for his greatest letter — and arguably the most important sentence in Christian theology.' },
      { reference: 'Galatians 2:20', text: 'I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me.', significance: 'The most concentrated statement of union with Christ in all of Paul\'s letters — the foundation of sanctification.' },
      { reference: 'Philippians 3:7-8', text: 'But whatever gain I had, I counted as loss for the sake of Christ. Indeed, I count everything as loss because of the surpassing worth of knowing Christ Jesus my Lord.', significance: 'Paul explicitly contrasts his former Pharisaic achievements with the surpassing value of Christ — the ultimate repudiation of merit-based righteousness.' },
      { reference: '2 Corinthians 12:9', text: '"My grace is sufficient for you, for my power is made perfect in weakness." Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me.', significance: 'Paul\'s theology of weakness — perhaps the most countercultural teaching in the NT. God\'s strength is most visible through human inadequacy.' },
      { reference: '2 Timothy 4:7', text: 'I have fought the good fight, I have finished the race, I have kept the faith.', significance: 'Paul\'s deathbed testimony — three metaphors for a life fully given. Arguably the greatest final words of any human in Scripture.' },
    ],
    traits: ['Intellectual brilliance combined with passionate devotion', 'Fearless in the face of persecution', 'Tenderness toward his spiritual children', 'Absolute commitment to the truth of the gospel', 'Prayer warrior (Ephesians 1:15-23; 3:14-21)', 'Self-sacrificial servant'],
    failures: ['Pre-conversion: consented to Stephen\'s murder; persecuted the church with violent zeal', 'Conflict with Barnabas over John Mark (Acts 15:39)', 'Withstood by Peter at Antioch (Galatians 2:11) — showing no leader is beyond error', 'Possibly lacked patience with certain co-workers'],
    faithLessons: [
      'The most violent enemy of the gospel can become its most passionate herald. No one is beyond the reach of grace.',
      'Paul\'s theology was forged in the furnace of suffering — his deepest insights came in prison, under beatings, in shipwrecks.',
      '"I have learned, in whatever state I am, to be content" (Philippians 4:11) — contentment is learned, not given. It comes through experience of God\'s faithfulness.',
      'The mark of genuine ministry is not crowds but faithfulness over decades, in obscurity and in public.',
      'Paul shows us how to hold doctrine and devotion together — he never separated theology from doxology.',
    ],
    typologyOfChrist: `Paul uniquely helps us understand Christ rather than typify him. He is a "type" of the converted sinner — going from chief persecutor to chief apostle, as a pattern for all who come to Christ from far away (1 Timothy 1:16: "as an example to those who were to believe in him for eternal life"). His suffering for the gospel participates in "filling up what is lacking in Christ's afflictions" (Colossians 1:24) — not adding to atonement, but embodying in his body what it costs to bring the gospel to the world.`,
    theologicalSignificance: `Paul is the theologian of the New Covenant. The doctrines of justification by faith, imputed righteousness, union with Christ, the body of Christ, spiritual gifts, the new creation, the mystery of the church — all find their fullest NT expression in Paul's letters. Martin Luther's rediscovery of Romans 1:17 lit the fire of the Protestant Reformation. Every major Christian theological tradition draws deeply from Paul.`,
    timeline: [
      { event: 'Born in Tarsus (Cilicia) with Roman citizenship', reference: 'Acts 22:3', year: '~AD 5' },
      { event: 'Trained under Gamaliel in Jerusalem', reference: 'Acts 22:3' },
      { event: 'Present at and approves Stephen\'s stoning', reference: 'Acts 7:58; 8:1', year: '~AD 34' },
      { event: 'Persecutes the church in Jerusalem and beyond', reference: 'Acts 8:3; 9:1-2' },
      { event: 'Damascus Road: encounter with the risen Christ; converted and baptised', reference: 'Acts 9:1-19', year: '~AD 35' },
      { event: 'Three years in Arabia and Damascus', reference: 'Galatians 1:17-18' },
      { event: 'First visit to Jerusalem; meets Peter and James', reference: 'Galatians 1:18-19' },
      { event: 'Years of ministry in Syria and Cilicia', reference: 'Galatians 1:21' },
      { event: 'First Missionary Journey with Barnabas (Cyprus, Galatia)', reference: 'Acts 13-14', year: '~AD 46-47' },
      { event: 'Jerusalem Council on circumcision', reference: 'Acts 15; Galatians 2', year: '~AD 49' },
      { event: 'Second Missionary Journey (Macedonia, Corinth, Athens)', reference: 'Acts 15:36–18:22', year: '~AD 49-51' },
      { event: 'Third Missionary Journey (Ephesus — 3 years)', reference: 'Acts 18:23–21:16', year: '~AD 53-57' },
      { event: 'Arrested in Jerusalem; two years imprisoned in Caesarea', reference: 'Acts 21-26', year: '~AD 57-59' },
      { event: 'Voyage to Rome; shipwrecked on Malta', reference: 'Acts 27-28', year: '~AD 60' },
      { event: 'Two years under house arrest in Rome', reference: 'Acts 28:30-31', year: '~AD 60-62' },
      { event: 'Executed in Rome under Nero', reference: '2 Timothy 4:6-8', year: '~AD 67' },
    ],
    relationships: ['Barnabas (first missionary partner)', 'Silas (second journey partner)', 'Timothy (son in the faith)', 'Luke (beloved physician, travel companion)', 'Priscilla & Aquila (co-workers)', 'Titus (son in the faith)', 'Lydia (first European convert)', 'Peter (fellow apostle, occasional sparring partner)'],
    relatedCharacters: ['peter', 'stephen', 'barnabas', 'timothy'],
  },

  {
    id: 'abraham',
    name: 'Abraham',
    hebrewGreek: 'אַבְרָהָם',
    transliteration: 'Abraham',
    nameMeaning: 'Father of a Multitude (originally Abram: Exalted Father)',
    testament: 'OT',
    category: 'Patriarch',
    era: '~2166–1991 BC',
    keyBooks: ['Genesis', 'Romans', 'Galatians', 'Hebrews', 'James'],
    oneLiner: 'The father of faith — called from paganism to follow an unknown God, receiving the covenant promises on which the entire Bible\'s story of redemption is built.',
    biography: `Abraham (originally Abram) was a native of Ur of the Chaldees — a sophisticated, prosperous city in Mesopotamia whose inhabitants worshipped the moon god Nanna. His family had already begun moving toward Canaan when God appeared to him with an extraordinary command: "Go from your country and your kindred and your father's house to the land that I will show you" (Genesis 12:1).

What makes this call remarkable is what it lacked: a map, a timeline, a clear destination, a guarantee of success. Abraham "went out, not knowing where he was going" (Hebrews 11:8) — which is precisely what makes his obedience the paradigm of faith in both the OT and NT.

God's covenant with Abraham came in stages. The initial call in Genesis 12 came with three promises: a land, a nation (great name), and blessing to all nations. In Genesis 15, God ratified this covenant in the ancient suzerainty ritual of cutting animals in two — but crucially, God alone passed between the pieces as a smoking fire pot (15:17), making the covenant unconditional and unilateral. In Genesis 17, circumcision was given as the covenant sign.

The supreme test came in Genesis 22 — the Akedah (binding of Isaac). God commanded Abraham to offer his only son, the son through whom all the promises would come, as a burnt offering. Abraham obeyed, reasoning that "God was able even to raise [Isaac] from the dead" (Hebrews 11:19). At the last moment, God provided a ram as a substitute — and this event becomes the OT's richest picture of substitutionary atonement.

Abraham died at 175 years (Genesis 25:7), owning only the cave he purchased for Sarah's burial in Canaan — yet the author of Hebrews says he "was looking forward to the city that has foundations, whose designer and builder is God" (11:10). He is called "the friend of God" (James 2:23).`,
    historicalContext: `Ur of the Chaldees (modern Tell el-Muqayyar in Iraq) was one of the great cities of Mesopotamia in ~2100 BC, with a population of perhaps 65,000, sophisticated temple worship, written records, and urban infrastructure. Abraham's migration follows historically attested patterns of semi-nomadic movement in the ancient Near East. The covenant forms God uses with Abraham mirror second-millennium BC legal and treaty documents discovered in archaeology, lending historical credibility to the narrative.`,
    keyScriptures: [
      { reference: 'Genesis 12:1-3', text: 'Now the LORD said to Abram, "Go from your country and your kindred and your father\'s house to the land that I will show you. And I will make of you a great nation..."', significance: 'The Abrahamic call and covenant — the pivot of all redemptive history. Everything from here to Revelation is the story of God fulfilling these three promises.' },
      { reference: 'Genesis 15:6', text: 'And he believed the LORD, and he counted it to him as righteousness.', significance: 'The most important single verse about faith in the OT. Paul quotes it three times (Romans 4:3; Galatians 3:6) to prove justification by faith predates the Law.' },
      { reference: 'Genesis 22:8', text: 'Abraham said, "God will provide for himself the lamb for the burnt offering, my son."', significance: 'Abraham\'s faith at its apex — an unconscious prophecy of what God would do at Calvary: provide his own Son as the lamb.' },
      { reference: 'Romans 4:3', text: 'For what does the Scripture say? "Abraham believed God, and it was counted to him as righteousness."', significance: 'Paul uses Abraham as the test case for justification by faith alone — showing that the gospel is not a NT novelty but the original pattern of salvation.' },
      { reference: 'Hebrews 11:8', text: 'By faith Abraham obeyed when he was called to go out to a place that he was to receive as an inheritance. And he went out, not knowing where he was going.', significance: 'The definition of faith applied to Abraham: action in obedience to God\'s word without full information or visible evidence.' },
      { reference: 'Galatians 3:8', text: 'And the Scripture, foreseeing that God would justify the Gentiles by faith, preached the gospel beforehand to Abraham, saying, "In you shall all the nations be blessed."', significance: 'The Abrahamic covenant WAS the gospel — Paul says Genesis 12:3 is the gospel preached in advance. Salvation for all nations was always the plan.' },
    ],
    traits: ['Faith that acts without seeing the destination', 'Generous hospitality (Genesis 18)', 'Intercessory boldness (Genesis 18:23-32 — negotiating for Sodom)', 'Obedience under extreme test', 'Tendency toward self-protection over trust (twice lied about Sarah being his wife)'],
    failures: ['Lied about Sarah being his sister — twice (Genesis 12:13; 20:2)', 'Fathered Ishmael through Hagar at Sarah\'s suggestion — taking matters into his own hands rather than waiting for God\'s timing', 'Briefly wavered in the covenant (circumcision delayed? Genesis 17)'],
    faithLessons: [
      'Faith is not certainty about the destination — it is trust in the One who is leading. Abraham "went out, not knowing where he was going."',
      'Waiting for God\'s timing is itself an act of faith. The Ishmael mistake shows what happens when we engineer our own fulfillment of God\'s promises.',
      'Justification is by faith, not works — Abraham was declared righteous before circumcision (Romans 4:10), before the Law, before the sacrificial system.',
      'Intercession for the wicked (Abraham\'s pleading for Sodom) is not weakness — it is godliness.',
      'The greatest test often comes after the greatest promise. God tested Abraham with Isaac after decades of covenant faithfulness.',
    ],
    typologyOfChrist: `Genesis 22 is the OT's most explicit picture of the substitutionary atonement. Abraham and Isaac together prefigure God the Father and God the Son: a father sacrificing his only son, on a mountain (Moriah = the region of Jerusalem, 2 Chronicles 3:1), carrying wood (as Jesus carried his cross), with a ram caught in a thicket by its head (thorns — as Jesus wore a crown of thorns) as a substitute. Jesus said "Abraham rejoiced that he would see my day" (John 8:56). The Abrahamic covenant is fulfilled in Christ, "who is the offspring" to whom all the promises were made (Galatians 3:16).`,
    theologicalSignificance: `Abraham is the theological foundation for three world religions (Judaism, Christianity, Islam) and the doctrinal ground of justification by faith. Paul's argument in Romans 4 and Galatians 3 hinges entirely on Abraham: if the Father of Israel was justified by faith before circumcision and before the Law, then circumcision and law-keeping cannot be required for justification. The Abrahamic covenant (land, nation, universal blessing) maps the entire OT narrative and finds its fulfillment in Christ and the Church as "Abraham's offspring, heirs according to promise" (Galatians 3:29).`,
    timeline: [
      { event: 'Born in Ur of the Chaldees', reference: 'Genesis 11:27-28', year: '~2166 BC' },
      { event: 'Family migrates from Ur toward Canaan; settles in Haran', reference: 'Genesis 11:31' },
      { event: 'Father Terah dies in Haran', reference: 'Genesis 11:32' },
      { event: 'God\'s call — Abram leaves Haran for Canaan at age 75', reference: 'Genesis 12:1-4', year: '~2091 BC' },
      { event: 'First visit to Egypt; lies about Sarai being his sister', reference: 'Genesis 12:10-20' },
      { event: 'Separates from Lot; God renews the land promise', reference: 'Genesis 13' },
      { event: 'Defeats the four kings; meets Melchizedek', reference: 'Genesis 14' },
      { event: 'Covenant of the pieces — God alone passes through', reference: 'Genesis 15', year: '~2081 BC' },
      { event: 'Ishmael born through Hagar (Abram age 86)', reference: 'Genesis 16:16', year: '~2080 BC' },
      { event: 'Covenant of circumcision; name changed to Abraham', reference: 'Genesis 17', year: '~2067 BC' },
      { event: 'Three visitors; Sarah told she will conceive', reference: 'Genesis 18' },
      { event: 'Abraham intercedes for Sodom', reference: 'Genesis 18:23-32' },
      { event: 'Sodom destroyed; Lot rescued', reference: 'Genesis 19' },
      { event: 'Isaac born (Abraham age 100)', reference: 'Genesis 21:5', year: '~2066 BC' },
      { event: 'The Akedah — binding of Isaac on Mount Moriah', reference: 'Genesis 22', year: '~2050 BC' },
      { event: 'Sarah dies (age 127); Abraham purchases cave of Machpelah', reference: 'Genesis 23' },
      { event: 'Isaac marries Rebekah', reference: 'Genesis 24' },
      { event: 'Abraham dies at 175', reference: 'Genesis 25:7-8', year: '~1991 BC' },
    ],
    relationships: ['Sarah (wife)', 'Lot (nephew)', 'Ishmael (son by Hagar)', 'Isaac (son of promise)', 'Melchizedek (priest-king, mysterious figure)', 'Hagar (servant)'],
    relatedCharacters: ['moses', 'david', 'joseph'],
  },

  {
    id: 'peter',
    name: 'Peter (Simon)',
    hebrewGreek: 'Πέτρος / שִׁמְעוֹן',
    transliteration: 'Petros / Shimon',
    nameMeaning: 'Peter: Rock. Simon: He who hears / God has heard',
    testament: 'NT',
    category: 'Apostle',
    era: 'AD ~1–68',
    keyBooks: ['Matthew', 'Mark', 'Luke', 'John', 'Acts', '1-2 Peter'],
    oneLiner: 'The impulsive fisherman Jesus renamed "Rock" — who denied his Lord three times and became the unshakeable foundation of the early church.',
    biography: `Simon Peter is the most vividly human of all the apostles. A fisherman by trade from Bethsaida, later living in Capernaum with his wife and mother-in-law (Mark 1:30), he was brought to Jesus by his brother Andrew who said simply, "We have found the Messiah" (John 1:41-42). At their first meeting, Jesus renamed him Cephas/Peter — "Rock" — a name that was more prophecy than description at the time.

Peter was always first — first to confess Jesus as Messiah (Matthew 16:16), first to object when Jesus foretold his death (16:22), first to step out of the boat on water (14:29), first to reach the empty tomb (John 20:4-6). He was part of the inner three (with James and John) who witnessed the Transfiguration (Matthew 17) and Jesus' agony in Gethsemane (26:37).

His greatest failure was also his most defining: three times in the courtyard of the high priest, as Jesus was being tried, Peter denied knowing him — the last time with cursing and swearing (Matthew 26:74). Jesus had predicted it (26:34) and had prayed for Peter specifically: "that your faith may not fail" (Luke 22:32). The rooster crowed. Peter went out and "wept bitterly" (Matthew 26:75).

The resurrection and the threefold restoration on the beach (John 21:15-17 — "Do you love me... feed my sheep") is one of Scripture's most profound scenes: grace restoring failure, commission following repentance.

At Pentecost (Acts 2), the man who once cowered before a servant girl preached to thousands with fearless authority. Acts 1-12 centres on Peter's leadership of the early Jerusalem church. He healed the lame man (Acts 3), confronted Ananias and Sapphira (Acts 5), brought the gospel to Cornelius the Gentile (Acts 10) — a pivotal moment. He was imprisoned twice, miraculously delivered, and ultimately crucified upside down in Rome under Nero (tradition holds he requested this, deeming himself unworthy to die as his Lord did).`,
    historicalContext: `Capernaum, Peter's home base, was a fishing village on the northern shore of the Sea of Galilee — a prosperous region under the tetrarch Herod Antipas. Fishing was a viable middle-class trade (Peter owned his boat and had hired servants, Mark 1:20). The Sea of Galilee's sudden storms are legendary even today, making Peter's occupation one of genuine danger and skill. Rome's occupation created political tension; Galilee was seen as a hotbed of messianic expectation.`,
    keyScriptures: [
      { reference: 'Matthew 16:16-18', text: 'Simon Peter replied, "You are the Christ, the Son of the living God." And Jesus answered him, "Blessed are you, Simon Bar-Jonah!... You are Peter, and on this rock I will build my church."', significance: 'The great confession — and Jesus\' affirmation that the church will be built on this revelation (Christ as Son of God), exemplified in Peter.' },
      { reference: 'Luke 22:31-32', text: '"Simon, Simon, behold, Satan demanded to have you... but I have prayed for you that your faith may not fail."', significance: 'Jesus\' intercessory prayer for Peter before his denial — showing that Peter\'s restoration was secured by Christ\'s prayer, not Peter\'s own strength.' },
      { reference: 'John 21:15-17', text: '"Simon, son of John, do you love me?... Feed my lambs... Tend my sheep... Feed my sheep."', significance: 'The threefold restoration mirrors the threefold denial. Jesus restores Peter by recommissioning him — grace doesn\'t just forgive; it restores to purpose.' },
      { reference: 'Acts 2:14', text: 'But Peter, standing with the eleven, lifted up his voice and addressed them: "Men of Judea and all who dwell in Jerusalem, let this be known to you, and give ear to my words."', significance: 'Pentecost transforms Peter: the man who denied Jesus before a servant girl now boldly proclaims him before thousands. The power of the Spirit.' },
      { reference: '1 Peter 5:7', text: 'Cast all your anxieties on him, because he cares for you.', significance: 'A man who once tried to manage everything himself — walking on water, sword in the garden — has learned to cast his cares on God.' },
    ],
    traits: ['Impulsive courage', 'Passionate devotion', 'Leadership capacity', 'Teachable (changed his position on Gentile inclusion, Acts 10)', 'Vulnerability and transparency (never hid his failures)', 'Pastoral heart (1 Peter)'],
    failures: ['Rebuked Jesus ("Far be it from you, Lord!" Matthew 16:22)', 'Fell asleep in Gethsemane', 'Cut off Malchus\'s ear (acting in the flesh)', 'Denied Jesus three times with cursing', 'Withdrew from table fellowship with Gentiles at Antioch under pressure (Galatians 2:11-14)'],
    faithLessons: [
      'God uses impulsive, flawed people — Peter never stopped being bold and impulsive, but the Spirit redirected these traits toward the gospel.',
      'Failure is not the end of calling. Peter\'s denial did not disqualify him — it deepened his dependence on grace.',
      'Jesus prays for us before we fail (Luke 22:32). Our restoration is not dependent on our faithfulness but on his.',
      'The Holy Spirit transforms cowardice into boldness. The difference between Acts 2-Peter and Passion week-Peter is Pentecost.',
      'Even apostles can be wrong and need correction (Galatians 2:11). Walk in humility regardless of position.',
    ],
    typologyOfChrist: `Peter's life does not typify Christ but powerfully illustrates the effect of Christ. His transformation from Simon (he who hears) to Peter (Rock) pictures what regeneration does: it makes unstable things solid, gives the fearful boldness, turns deniers into proclaimers. His threefold denial followed by threefold restoration by the risen Christ is a microcosm of the gospel: our deepest failures met by grace and recommissioning.`,
    theologicalSignificance: `Peter's life grounds the doctrines of perseverance of the saints (Jesus prayed his faith would not ultimately fail) and the grace of restoration. His opening of the gospel to Gentiles (Acts 10-11) is a theological watershed that shapes Paul's entire ministry. His letters contribute foundational teaching on suffering (1 Peter), false teaching (2 Peter), and eschatology (2 Peter 3). The Rock on which the church is built (Matthew 16:18) is debated — whether it is Peter himself, his confession, or Christ as the one confessed — but all views agree that Peter's life embodies the church's foundational dependence on the confession "You are the Christ."`,
    timeline: [
      { event: 'Born in Bethsaida; works as fisherman in Capernaum', reference: 'John 1:44; Mark 1:29' },
      { event: 'Andrew brings him to Jesus; renamed Cephas/Peter', reference: 'John 1:41-42' },
      { event: 'Called from fishing nets to follow Jesus', reference: 'Mark 1:16-18' },
      { event: 'His mother-in-law healed by Jesus', reference: 'Mark 1:30-31' },
      { event: 'Walks on water; sinks in doubt', reference: 'Matthew 14:28-31' },
      { event: 'Great Confession at Caesarea Philippi', reference: 'Matthew 16:16' },
      { event: 'Witnesses the Transfiguration', reference: 'Matthew 17:1-8' },
      { event: 'Pledges to die with Jesus; Jesus predicts denial', reference: 'Matthew 26:33-35' },
      { event: 'Falls asleep in Gethsemane', reference: 'Matthew 26:40' },
      { event: 'Cuts off Malchus\'s ear', reference: 'John 18:10' },
      { event: 'Denies Jesus three times', reference: 'Matthew 26:69-75' },
      { event: 'Weeps bitterly; first apostle to reach the empty tomb', reference: 'Luke 22:62; John 20:6' },
      { event: 'Restored by the risen Jesus; recommissioned', reference: 'John 21:15-17' },
      { event: 'Pentecost sermon: 3,000 converted', reference: 'Acts 2' },
      { event: 'Heals lame man; imprisoned by Sanhedrin', reference: 'Acts 3-4' },
      { event: 'Vision: sheet of unclean animals; Cornelius converted', reference: 'Acts 10' },
      { event: 'Imprisoned by Herod; miraculously freed by angel', reference: 'Acts 12' },
      { event: 'Jerusalem Council', reference: 'Acts 15' },
      { event: 'Confronted by Paul at Antioch over Jew-Gentile fellowship', reference: 'Galatians 2:11' },
      { event: 'Crucified upside down in Rome under Nero (tradition)', reference: 'John 21:18-19', year: '~AD 68' },
    ],
    relationships: ['Andrew (brother)', 'James & John (inner circle)', 'Jesus (Lord, friend, restorer)', 'Paul (fellow apostle, occasional corrector)', 'Cornelius (first Gentile convert under his ministry)', 'Mark (called "my son", 1 Peter 5:13)'],
    relatedCharacters: ['paul', 'john', 'james', 'barnabas'],
  },

  {
    id: 'esther',
    name: 'Esther',
    hebrewGreek: 'אֶסְתֵּר',
    transliteration: 'Ester',
    nameMeaning: 'Star (Persian) / possibly related to Hebrew Hadassah: Myrtle',
    testament: 'OT',
    category: 'Queen',
    era: '~483–473 BC (reign of Xerxes I of Persia)',
    keyBooks: ['Esther'],
    oneLiner: 'The Jewish queen who risked her life to intercede for her people — and whose courage demonstrates that God\'s providential hand guides every "coincidence."',
    biography: `Esther is one of only two books of the Bible named after a woman (with Ruth). It is also notable for never directly mentioning God — yet the entire narrative pulses with his providential sovereignty.

Esther (Hebrew name Hadassah, meaning "myrtle") was a Jewish orphan raised by her older cousin Mordecai in Susa, the capital of the Persian Empire. When King Xerxes (Ahasuerus) deposed Queen Vashti for refusing to display herself before his drunken guests, a kingdom-wide search was conducted for a replacement. Esther was selected — her Jewish identity concealed on Mordecai's advice.

The crisis came when Haman, the king's chief minister, a man of Agagite descent (an ancient enemy of Israel, 1 Samuel 15), nursed a personal grudge against Mordecai (who refused to bow to him) into a genocidal decree against all Jews in the Persian Empire. The decree was irrevocable under Persian law.

Mordecai urged Esther to intervene with the king. Her response captures the terror: "All the king's servants and the people of the king's provinces know that if any man or woman goes to the king inside the inner court without being called, there is but one law — to be put to death" (Esther 4:11). Persian court protocol was absolute and pitiless.

Mordecai's response is one of the most famous speeches in Scripture: "Who knows whether you have not come to the kingdom for such a time as this?" (4:14). Esther called a three-day fast, then went to the king uninvited — "If I perish, I perish" (4:16). The king extended his sceptre. With extraordinary wisdom, she handled the situation over two banquets, ultimately exposing Haman's plot. Haman was hanged on the gallows he had built for Mordecai. The Jews were given the right to defend themselves. Purim — the feast of deliverance — was established.`,
    historicalContext: `The Persian Empire under Xerxes I (~486-465 BC) was the largest empire the world had yet seen, stretching from India to Ethiopia. The Jewish community in Persia was a diaspora community — descendants of those deported by Nebuchadnezzar in 605-586 BC. The book of Esther gives us a vivid picture of Persian court life: the 180-day feast (Esther 1:4), the elaborate beauty treatments (2:12 — twelve months!), the irreversibility of royal decrees (3:12), and the absolute power of the king. Archaeology has confirmed the layout of Susa's palace, Xerxes' actual name, and the customs described in the book.`,
    keyScriptures: [
      { reference: 'Esther 4:14', text: '"For if you keep silent at this time, relief and deliverance will rise for the Jews from another place, but you and your father\'s house will perish. And who knows whether you have not come to the kingdom for such a time as this?"', significance: 'The theological heartbeat of the book — God\'s purposes will be accomplished regardless, but each person is called to participate in them. This is the call of providential calling.' },
      { reference: 'Esther 4:16', text: '"Go, gather all the Jews... and hold a fast on my behalf... I will go to the king, though it is against the law, and if I perish, I perish."', significance: 'Esther\'s turning point — pure courage. She moves from self-preservation to sacrificial intercession. The willingness to die for others echoes throughout redemptive history.' },
      { reference: 'Esther 7:3', text: 'Then Queen Esther answered, "If I have found favour in your sight, O king, and if it please the king, let my life be granted me for my plea, and my people for my request."', significance: 'Esther finally reveals her identity and makes her request — staking everything on the king\'s favour. A picture of intercession in the throne room.' },
    ],
    traits: ['Courage in the face of mortal danger', 'Wisdom and patient strategy (two banquets before making her request)', 'Self-sacrificial intercession', 'Obedience to her spiritual guardian', 'Humility under extraordinary privilege', 'Community solidarity — she fasted with her people'],
    failures: ['Initial reluctance to go to the king (human but understandable)', 'Long concealment of her Jewish identity (though this was by instruction)'],
    faithLessons: [
      '"For such a time as this" — every believer has a unique position in history through which God wants to work. Our circumstances are not accidental.',
      'Esther\'s three-day fast before action shows that courage must be rooted in prayer, not personality.',
      'God\'s name is absent from Esther, yet his fingerprints are everywhere — teaching us to see his providence in the "ordinary" events of our lives.',
      'Intercession may cost us everything. Esther\'s "if I perish, I perish" is the spirit of all true intercessors.',
      'Preparation and opportunity meet in the life of those who are faithful in obscurity. Esther had been faithful to Mordecai long before she was ever in a position to save anyone.',
    ],
    typologyOfChrist: `Esther is a powerful type of Christ as intercessor. She: approached a throne of grace at mortal risk; identified completely with her people (revealing her Jewish identity, 7:4); interceded between her people and a death sentence; and won their deliverance through her own willingness to die. Christ our great High Priest "approaches the throne of grace" on our behalf (Hebrews 4:16), has fully identified with humanity (John 1:14), and won our deliverance through his death. Haman on the gallows he built for Mordecai foreshadows the enemy's own weapons turned against him at the cross (Colossians 2:15).`,
    theologicalSignificance: `The book of Esther is the OT's great text on divine providence — that God governs history through ordinary human choices without overriding human freedom. Its absence of explicit God-language is a literary device teaching discernment: to see God in events that do not announce themselves as divine. Esther grounds the theology of calling: God places his people in specific contexts for specific purposes.`,
    timeline: [
      { event: 'Vashti deposed by Xerxes', reference: 'Esther 1', year: '~483 BC' },
      { event: 'Kingdom-wide search for new queen; Esther enters the harem', reference: 'Esther 2:8' },
      { event: 'Esther chosen as queen; Jewish identity concealed', reference: 'Esther 2:17' },
      { event: 'Mordecai uncovers assassination plot; recorded in the chronicles', reference: 'Esther 2:21-23' },
      { event: 'Haman promoted; Mordecai refuses to bow', reference: 'Esther 3:1-6' },
      { event: 'Haman\'s decree to destroy all Jews issued', reference: 'Esther 3:13', year: '~474 BC' },
      { event: 'Mordecai confronts Esther: "for such a time as this"', reference: 'Esther 4:14' },
      { event: 'Esther calls a three-day fast', reference: 'Esther 4:16' },
      { event: 'Esther approaches the king uninvited; he extends the sceptre', reference: 'Esther 5:2' },
      { event: 'First banquet; Esther delays her request', reference: 'Esther 5:4-8' },
      { event: 'Haman builds gallows for Mordecai', reference: 'Esther 5:14' },
      { event: 'Sleepless night: king reads the chronicles — Mordecai\'s forgotten deed remembered', reference: 'Esther 6:1' },
      { event: 'Second banquet: Esther reveals the plot; Haman exposed', reference: 'Esther 7:3-6' },
      { event: 'Haman hanged on his own gallows', reference: 'Esther 7:10' },
      { event: 'Jews given right to defend themselves; many Persians convert', reference: 'Esther 8:11-17' },
      { event: 'Purim feast established', reference: 'Esther 9:20-28', year: '~473 BC' },
    ],
    relationships: ['Mordecai (cousin and guardian)', 'Xerxes/Ahasuerus (husband, king)', 'Haman (adversary)', 'Hegai (eunuch who favoured her)'],
    relatedCharacters: ['ruth', 'deborah', 'mary'],
  },

  {
    id: 'ruth',
    name: 'Ruth',
    hebrewGreek: 'רוּת',
    transliteration: 'Ruth',
    nameMeaning: 'Friend / Companion / Refreshment',
    testament: 'OT',
    category: 'Other',
    era: '~1100 BC (Period of the Judges)',
    keyBooks: ['Ruth', 'Matthew'],
    oneLiner: 'A Moabite widow whose extraordinary loyalty to her mother-in-law and faith in Israel\'s God made her an ancestor of David and of Jesus himself.',
    biography: `The book of Ruth is a short, perfectly crafted story set in the period of the Judges — a dark time in Israel's history. Yet against that dark backdrop shines one of Scripture's most luminous narratives of loyalty, love, and redemption.

Ruth was a Moabite woman who married the son of Naomi and Elimelech, Israelites who had migrated to Moab during a famine. When both her husband and his brother died, Naomi released her daughters-in-law to return to their own people. Orpah left — but Ruth "clung to her" (Ruth 1:14). Her speech to Naomi (1:16-17) is one of the greatest declarations of loyalty in literature: "Where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God."

This was not merely loyalty to a person — it was a declaration of faith. Ruth abandoned the gods of Moab and the security of her homeland to follow YHWH and his people into an uncertain future.

In Bethlehem, Ruth gleaned in the fields of Boaz — a wealthy kinsman-redeemer (*goel* in Hebrew). Boaz showed her extraordinary kindness, recognising her character: "All my fellow townsmen know that you are a worthy woman" (3:11). Under Naomi's guidance, Ruth proposed to Boaz (3:9 — "spread your wings over your servant"), invoking his role as kinsman-redeemer.

Boaz went to the city gate (the ancient courthouse), arranged for the nearer kinsman to decline his right of redemption, and publicly took Ruth as his wife. Their son Obed became the grandfather of David — placing Ruth, a Moabite outsider, in the direct messianic line (Matthew 1:5).`,
    historicalContext: `The period of the Judges (~1380–1050 BC) was characterised by moral and spiritual chaos — "everyone did what was right in his own eyes" (Judges 21:25). Ruth stands as a deliberate contrast: a foreigner who shows more loyalty, more *hesed* (steadfast love), than most Israelites in the surrounding narratives. The law of gleaning (Leviticus 19:9-10; Deuteronomy 24:19-22) that Ruth benefits from shows how God's law protected the vulnerable. The kinsman-redeemer institution (*go'el*) was Israel's social safety net for widows who had lost their land.`,
    keyScriptures: [
      { reference: 'Ruth 1:16-17', text: '"Where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God. Where you die I will die, and there will I be buried."', significance: 'One of the most beautiful vows of loyalty in Scripture — and a model of what conversion looks like: the abandonment of former loyalties for a new identity in God\'s community.' },
      { reference: 'Ruth 2:12', text: '"The LORD repay you for what you have done, and a full reward be given you by the LORD, the God of Israel, under whose wings you have come to take refuge!"', significance: 'Boaz\'s blessing over Ruth — recognising her faith. The "wings" image (Hebrew: kanaf) is the same word Ruth uses in 3:9 when she asks Boaz to spread his wings over her. Refuge in God leads to human protection.' },
      { reference: 'Ruth 3:9', text: '"I am Ruth, your servant. Spread your wings over your servant, for you are a redeemer."', significance: 'Ruth\'s bold proposal invokes the kinsman-redeemer role — a profound picture of a sinner coming to Christ the Redeemer and saying: "You are my kinsman; cover me."' },
      { reference: 'Matthew 1:5', text: 'Salmon the father of Boaz by Rahab, and Boaz the father of Obed by Ruth, and Obed the father of Jesse, and Jesse the father of David the king.', significance: 'Ruth — a Moabite, an outsider, a woman — is named in the genealogy of Jesus Christ. The gospel of inclusion runs through Israel\'s bloodline from the beginning.' },
    ],
    traits: ['Extraordinary loyalty (*hesed*)', 'Courage in the face of insecurity', 'Humility ("I am not even as one of your servants," 2:13)', 'Industry and diligence ("she has been working from early morning," 2:7)', 'Wisdom in following Naomi\'s guidance'],
    failures: ['No significant failures recorded — Ruth is one of Scripture\'s rare wholly positive characters'],
    faithLessons: [
      'Loyalty (*hesed*) — the covenant-love that keeps going even when it costs everything — is the character of God, and it is the character he calls his people to embody.',
      'Being an outsider is never a disqualification in God\'s kingdom. Ruth the Moabite, Rahab the Canaanite — God has always included the nations.',
      'Godly character is recognized by godly people. Boaz saw Ruth\'s faithfulness to Naomi before he ever met her.',
      'The kinsman-redeemer institution is a beautiful picture of how Christ redeems us: he takes our poverty as his own, pays our debt, and restores what was lost.',
      '"Your people shall be my people, and your God my God" — every convert makes this same declaration. Faith is communal and covenantal, not just personal.',
    ],
    typologyOfChrist: `Boaz, not Ruth, is the primary Christ-type in this book — the kinsman-redeemer who goes beyond his legal obligation (3:10, Boaz praises Ruth for not going after younger men), publicly commits at the city gate, and receives the Gentile outsider as his bride. But Ruth's story illustrates the Church: a people without covenant standing who come in poverty, attach themselves to the family of God, and are received, provided for, and elevated to royal status. Ruth the outsider becoming the ancestor of King David and ultimately of Jesus shows that God's plan of redemption always included the nations.`,
    theologicalSignificance: `Ruth is the OT's great text on *hesed* (steadfast, loyal love) — the word appears three times in Ruth and is the same word used to describe God's covenant faithfulness throughout the Psalms. Ruth grounds the theology of inclusion: God's covenant was never ethnically exclusive (contra certain narrow readings). The kinsman-redeemer institution (*go'el*) is one of the richest OT pictures of Christ's atoning work — taking on the obligation of the nearest relative to redeem property, marry the widow, and restore the family line.`,
    timeline: [
      { event: 'Marries Mahlon, son of Naomi, in Moab', reference: 'Ruth 1:4' },
      { event: 'Elimelech, then Mahlon and Chilion all die', reference: 'Ruth 1:3-5' },
      { event: 'Naomi decides to return to Bethlehem; Ruth refuses to leave her', reference: 'Ruth 1:6-18' },
      { event: 'Arrives in Bethlehem at the beginning of barley harvest', reference: 'Ruth 1:22' },
      { event: 'Gleans in Boaz\'s field; Boaz shows exceptional favour', reference: 'Ruth 2' },
      { event: 'Naomi reveals Boaz is their kinsman-redeemer', reference: 'Ruth 2:20' },
      { event: 'Ruth goes to the threshing floor; asks Boaz to cover her', reference: 'Ruth 3' },
      { event: 'Boaz negotiates at the city gate; takes Ruth as wife', reference: 'Ruth 4:1-12' },
      { event: 'Obed born — Naomi restored, David\'s line established', reference: 'Ruth 4:13-17' },
    ],
    relationships: ['Naomi (mother-in-law)', 'Mahlon (first husband, deceased)', 'Boaz (kinsman-redeemer and second husband)', 'Obed (son — grandfather of David)', 'Orpah (sister-in-law who returned to Moab)'],
    relatedCharacters: ['esther', 'deborah', 'mary', 'david'],
  },

  {
    id: 'elijah',
    name: 'Elijah',
    hebrewGreek: 'אֵלִיָּהוּ',
    transliteration: 'Eliyahu',
    nameMeaning: 'My God is YHWH / YHWH is my God',
    testament: 'OT',
    category: 'Prophet',
    era: '~875–848 BC (reign of Ahab)',
    keyBooks: ['1 Kings', '2 Kings', 'Malachi', 'Matthew', 'James'],
    oneLiner: 'The fire-prophet of Israel who called down rain and fire from heaven, faced down 850 false prophets, fled in despair, and was taken to heaven without dying.',
    biography: `Elijah the Tishbite appears suddenly in 1 Kings 17 with no genealogy, no backstory, and no introduction — bursting into Ahab's court with a single word: "As the LORD, the God of Israel, lives, before whom I stand, there shall be neither dew nor rain these years, except by my word" (17:1). He announced a three-and-a-half-year drought on a nation that had abandoned YHWH for Baal (the Canaanite storm-god) — a direct theological confrontation with Baal's supposed domain.

During the drought, God sustained Elijah by ravens (17:4-6) and by miraculous provision through a widow of Zarephath, whose flour and oil never ran out (17:14). When the widow's son died, Elijah raised him — the first recorded resurrection in Scripture (17:22).

The Mount Carmel confrontation (1 Kings 18) is one of the great dramatic moments in Scripture: Elijah vs. 450 prophets of Baal and 400 prophets of Asherah. The test was simple: call on your god to send fire on the sacrifice. Baal's prophets cried out all day — Elijah mocked them ("Perhaps he is asleep and must be awakened," 18:27). When Elijah prayed, fire fell from heaven and consumed the sacrifice, the water, the wood, and the stone altar. The people fell on their faces: "The LORD, he is God" (18:39). The false prophets were executed. The drought ended.

Then, inexplicably, Elijah fled from the threats of Jezebel (19:3) — the same man who had just stood before 850 prophets alone. Exhausted, despairing ("It is enough; now, O LORD, take away my life," 19:4), he slept under a juniper tree. Here we see one of Scripture's most tender portraits of God's care for burned-out servants: an angel, bread and water, rest, and the still small voice at Horeb (19:12).

Elijah was taken to heaven in a whirlwind without dying (2 Kings 2:11) — one of only two men in Scripture (with Enoch) to bypass physical death. Malachi 4:5 prophesied his return before the Day of the LORD. Jesus identifies John the Baptist as Elijah come in spirit (Matthew 11:14), and Elijah himself appeared with Moses at the Transfiguration (Matthew 17:3).`,
    historicalContext: `Ahab's reign (~874-853 BC) was politically successful but spiritually catastrophic. His marriage to Jezebel, a Phoenician princess and devotee of Baal, introduced systematic Baal worship with state support — 850 pagan prophets fed at Jezebel's table (1 Kings 18:19). This was not merely private religious deviation but the deliberate replacement of YHWH with Baal as Israel's national deity. Baal was believed to control rain and fertility — the drought was a direct challenge to this claim.`,
    keyScriptures: [
      { reference: '1 Kings 18:21', text: '"How long will you go limping between two different opinions? If the LORD is God, follow him; but if Baal, then follow him."', significance: 'The great confrontation question — applicable to every generation. Syncretism (mixing YHWH worship with pagan practice) is condemned as decisively as outright idolatry.' },
      { reference: '1 Kings 18:36-37', text: '"O LORD, God of Abraham, Isaac, and Israel, let it be known this day that you are God in Israel, and that I am your servant... Answer me, O LORD, answer me, so that this people may know that you, O LORD, are God."', significance: 'Elijah\'s prayer was for God\'s glory, not personal vindication. The fire was not a magic trick but a revelation of the living God to a nation that had forgotten him.' },
      { reference: '1 Kings 19:4', text: '"It is enough; now, O LORD, take away my life, for I am no better than my fathers."', significance: 'The prophet at his lowest point — teaching us that depression and burnout can follow even the greatest victories. God\'s response is not rebuke but bread, rest, and gentle voice.' },
      { reference: '1 Kings 19:12', text: 'And after the fire the sound of a low whisper [still small voice, KJV]. And when Elijah heard it, he wrapped his face in his cloak and went out and stood at the entrance of the cave.', significance: 'God communicates in the still small voice, not the spectacular. A crucial corrective for those who seek God only in the dramatic.' },
      { reference: 'James 5:17', text: 'Elijah was a man with a nature like ours, and he prayed fervently that it might not rain, and for three years and six months it did not rain on the earth.', significance: 'James deliberately emphasises Elijah\'s ordinariness — he was "a man of like passions" (KJV). His powerful prayer life was not superhuman — it is available to every believer.' },
    ],
    traits: ['Fearless public confrontation of evil', 'Deep intimacy with God ("before whom I stand," 17:1)', 'Intercessory prayer of extraordinary power', 'Vulnerability and human weakness', 'Zeal for God\'s honour'],
    failures: ['Fled from Jezebel\'s threat in fear after the greatest victory of his life (19:3)', 'Asked to die under the juniper tree', 'Falsely claimed to be the only faithful Israelite (19:10,14) — God told him there were 7,000 who had not bowed to Baal'],
    faithLessons: [
      'Spectacular victory does not immunise against depression and spiritual exhaustion. Care for your physical body — Elijah needed sleep and food before he could hear God.',
      'God sometimes whispers what he won\'t shout. The still small voice requires us to be still.',
      'We are never as alone as we feel. "I am the only one left" — but there were 7,000 faithful. The church is larger and more faithful than our discouragement perceives.',
      'Prayer is the engine of spiritual power. Elijah\'s prayer shut and opened the heavens — not his personality, not his office, but his believing prayer.',
      'God never despises the exhausted servant. He restores before he recommissions.',
    ],
    typologyOfChrist: `Elijah typifies the prophetic ministry of Christ: he raised the dead (1 Kings 17:22; Jesus raised Lazarus, Jairus's daughter, the widow's son at Nain), he fed the hungry (the widow's provision; Jesus fed 5,000), and he appeared at the Transfiguration alongside Moses, representing the Law and the Prophets being fulfilled in Christ. The "Elijah to come" prophecy (Malachi 4:5) and its fulfilment in John the Baptist's ministry shows how the OT prophetic tradition pointed forward to the one greater prophet (Deuteronomy 18:15), Jesus.`,
    theologicalSignificance: `Elijah is the defining figure of the OT prophetic tradition. His name — "YHWH is my God" — is his message. The Carmel confrontation establishes that true prophecy is not predictive fortune-telling but covenant advocacy: calling the nation back to YHWH. His translation to heaven without death (2 Kings 2:11) becomes the basis for the eschatological hope of Elijah's return (Malachi 4:5), fulfilled in John the Baptist (Luke 1:17; Matthew 11:14). His appearance at the Transfiguration with Moses represents the entire OT witness bearing testimony to Jesus.`,
    timeline: [
      { event: 'Suddenly appears before Ahab; announces drought', reference: '1 Kings 17:1', year: '~875 BC' },
      { event: 'Fed by ravens at the brook Cherith', reference: '1 Kings 17:2-6' },
      { event: 'Sent to the widow at Zarephath; her flour and oil miraculously sustained', reference: '1 Kings 17:8-16' },
      { event: 'Raises the widow\'s son — first resurrection in Scripture', reference: '1 Kings 17:22' },
      { event: 'Returns to Ahab; proposes the Mount Carmel contest', reference: '1 Kings 18:1-19' },
      { event: 'Carmel: 450 prophets of Baal defeated; fire falls; drought ends', reference: '1 Kings 18:20-46', year: '~872 BC' },
      { event: 'Flees Jezebel\'s threat; collapses under juniper tree', reference: '1 Kings 19:1-4' },
      { event: 'Angel brings bread and water; Elijah journeys to Horeb (Mount Sinai)', reference: '1 Kings 19:5-8' },
      { event: 'Still small voice at Horeb; commission renewed; finds Elisha', reference: '1 Kings 19:9-21' },
      { event: 'Confronts Ahab over murder of Naboth', reference: '1 Kings 21:17-29' },
      { event: 'Calls fire on Ahaziah\'s soldiers', reference: '2 Kings 1:10-12' },
      { event: 'Taken to heaven in a whirlwind; Elisha receives double portion', reference: '2 Kings 2:11', year: '~848 BC' },
      { event: 'Appears with Moses at the Transfiguration of Jesus', reference: 'Matthew 17:3' },
    ],
    relationships: ['Elisha (successor, spiritual son)', 'Ahab (king, adversary)', 'Jezebel (adversary who sought his life)', 'Obadiah (faithful servant of Ahab who hid prophets)', 'The widow of Zarephath'],
    relatedCharacters: ['elisha', 'moses', 'david', 'johnbaptist'],
  },

  {
    id: 'mary',
    name: 'Mary (Mother of Jesus)',
    hebrewGreek: 'Μαρία / מִרְיָם',
    transliteration: 'Maria / Miryam',
    nameMeaning: 'Beloved / Bitter / Strong waters (debated) — related to Miriam',
    testament: 'NT',
    category: 'Other',
    era: '~20 BC – AD 45 (estimated)',
    keyBooks: ['Luke', 'Matthew', 'John'],
    oneLiner: 'The young Jewish woman who said "yes" to the impossible — and whose obedience to God\'s call shaped the entire history of redemption.',
    biography: `Mary of Nazareth is the most celebrated woman in church history — and the most misunderstood. The NT presents her as a young Jewish woman of Galilee, likely a teenager by the standards of the time, engaged to a carpenter named Joseph.

The Annunciation (Luke 1:26-38) is among the most momentous encounters in Scripture. The angel Gabriel came to Mary with news that defied all natural possibility: she would conceive by the Holy Spirit and bear the Son of God. Mary's response — after a single, honest question ("How can this be?") — was one of the purest acts of faith in the Bible: "Behold, I am the servant of the Lord; let it be to me according to your word" (1:38).

The Magnificat (Luke 1:46-55) — her song of praise upon visiting Elizabeth — is a theological masterpiece: saturated with OT allusion (Hannah's prayer, 1 Samuel 2; psalms of the poor), politically subversive ("He has brought down the mighty from their thrones and exalted those of humble estate," v.52), and personally joyful. It reveals that Mary was a woman of deep scriptural formation, not naive innocence.

Mary gave birth in Bethlehem under scandalous circumstances (engaged but not yet married, visibly pregnant). She "treasured up all these things, pondering them in her heart" (Luke 2:19) — a characteristic phrase that tells us she processed her extraordinary experiences through deep, quiet reflection rather than public display.

She is present at key moments: finding Jesus in the temple (Luke 2:41-51), the wedding at Cana where she prompted his first miracle ("Do whatever he tells you," John 2:5), and at the cross (John 19:25-27), where Jesus committed her to the apostle John's care.

At Pentecost (Acts 1:14), Mary was among the disciples gathered in the upper room, waiting for the Holy Spirit — praying alongside the apostles she had known since her son's ministry began.`,
    historicalContext: `First-century Galilee was a Jewish region under Roman occupation, regarded with some suspicion by Judean Jews as religiously mixed ("Galilee of the Gentiles," Matthew 4:15). Nazareth was a village of perhaps 200-400 people — insignificant enough that Nathanael asked "Can anything good come out of Nazareth?" (John 1:46). An unmarried woman's pregnancy in this culture carried enormous social stigma, which makes Mary's act of faith — saying yes knowing the social cost — all the more remarkable.`,
    keyScriptures: [
      { reference: 'Luke 1:38', text: '"Behold, I am the servant of the Lord; let it be to me according to your word."', significance: 'The supreme model of human submission to God\'s will. Mary\'s "let it be" is the opposite of Adam\'s "I will" — a new humanity beginning with a young woman\'s obedience.' },
      { reference: 'Luke 1:46-49', text: '"My soul magnifies the Lord, and my spirit rejoices in God my Saviour, for he has looked on the humble estate of his servant..."', significance: 'The Magnificat — Mary\'s spiritual depth is evident here. She calls God her "Saviour," implying her own need of salvation (contra any doctrine of her sinlessness).' },
      { reference: 'Luke 2:19', text: 'But Mary treasured up all these things, pondering them in her heart.', significance: 'Mary\'s character — she receives extraordinary experiences not with boasting but with quiet, deep reflection. A model of contemplative discipleship.' },
      { reference: 'John 2:5', text: 'His mother said to the servants, "Do whatever he tells you."', significance: 'Mary\'s finest instruction, and the last recorded words of hers in John. If she is a model of anything, it is this: point people to Jesus and tell them to obey him.' },
      { reference: 'John 19:25-27', text: 'Standing by the cross of Jesus were his mother... When Jesus saw his mother and the disciple whom he loved standing nearby, he said to his mother, "Woman, behold, your son!"', significance: 'Mary at the cross — Simeon\'s prophecy ("a sword will pierce through your own soul also," Luke 2:35) fulfilled. The depth of what it cost her to be Jesus\' mother.' },
    ],
    traits: ['Profound obedient faith ("let it be according to your word")', 'Deep scriptural literacy (evident in the Magnificat)', 'Reflective, pondering spirit (Luke 2:19,51)', 'Courage under social stigma', 'Maternal tenacity (present at the cross)'],
    failures: ['Briefly misunderstood Jesus\' mission (Luke 2:48 — "your father and I have been searching for you in great distress")', 'Possibly involved in suggesting Jesus was out of his mind (Mark 3:21 — though some dispute Mary\'s inclusion in "his family")'],
    faithLessons: [
      '"Highly favoured" does not mean life will be easy — Mary\'s "yes" led to social scandal, refugee flight to Egypt, and watching her son die on a cross.',
      'The best direction we can give anyone is Mary\'s: "Do whatever he tells you" (John 2:5).',
      'Deep faith is often quiet and reflective rather than loud and demonstrative. Mary treasured and pondered.',
      'God chooses the humble and lowly estate (Luke 1:52) — Mary\'s insignificance as a Galilean village girl was the setting for the greatest event in history.',
      'Saying yes to God\'s call requires trust in what we cannot yet see or understand. Mary asked one question, received one answer, and said yes.',
    ],
    typologyOfChrist: `Mary does not typify Christ but provides the context for his incarnation. Her role in redemptive history is unique and unrepeatable: she is theotokos (God-bearer) — the one through whom the eternal Word took on human flesh (John 1:14). In one sense, every type and shadow in the OT was preparing for this moment: a woman would bear the promised seed (Genesis 3:15), a virgin would conceive (Isaiah 7:14), and the Son of David would be born in Bethlehem (Micah 5:2). Mary is the intersection of all these threads.`,
    theologicalSignificance: `Mary grounds the incarnation — without her "yes," there is no Jesus in the flesh. Her Magnificat is one of the NT's great theological poems on grace, justice, and reversal. She calls God her "Saviour" (Luke 1:47), establishing that she, too, was a recipient of grace — not its dispensary. Eastern and Western traditions differ sharply on her ongoing role, but the NT consistently presents her as a model disciple (present at Pentecost, Acts 1:14) rather than a co-redemptrix.`,
    timeline: [
      { event: 'Annunciation — Gabriel appears; Mary says yes', reference: 'Luke 1:26-38' },
      { event: 'Visits Elizabeth; sings the Magnificat', reference: 'Luke 1:39-56' },
      { event: 'Jesus born in Bethlehem; shepherds visit', reference: 'Luke 2:1-20' },
      { event: 'Presentation in the temple; Simeon\'s prophecy', reference: 'Luke 2:22-35' },
      { event: 'Flight to Egypt to escape Herod', reference: 'Matthew 2:13-15' },
      { event: 'Return to Nazareth', reference: 'Matthew 2:19-23' },
      { event: 'Jesus found in the temple at age 12', reference: 'Luke 2:41-51' },
      { event: 'Wedding at Cana; prompts Jesus\' first miracle', reference: 'John 2:1-11' },
      { event: 'Seeks Jesus while he is teaching (family concern)', reference: 'Mark 3:31-35' },
      { event: 'Stands at the cross; committed to John\'s care', reference: 'John 19:25-27' },
      { event: 'Present with disciples in the upper room at Pentecost', reference: 'Acts 1:14' },
    ],
    relationships: ['Joseph (betrothed/husband)', 'Jesus (son)', 'Elizabeth (cousin)', 'John (apostle who cared for her after the cross)', 'James (half-brother of Jesus, leader of Jerusalem church)'],
    relatedCharacters: ['joseph', 'elizabeth', 'peter', 'paul'],
  },

  {
    id: 'joseph',
    name: 'Joseph (Son of Jacob)',
    hebrewGreek: 'יוֹסֵף',
    transliteration: 'Yosef',
    nameMeaning: 'He will add / May God add',
    testament: 'OT',
    category: 'Patriarch',
    era: '~1915–1805 BC',
    keyBooks: ['Genesis'],
    oneLiner: 'The beloved son who was betrayed, enslaved, and imprisoned — whose suffering providentially placed him in position to save the world, in one of the most complete types of Christ in Scripture.',
    biography: `Joseph is the longest narrative in Genesis (chapters 37-50), and one of the most carefully constructed stories in the entire Bible. He is the eleventh of Jacob's twelve sons, the firstborn of Rachel (Jacob's beloved wife), and from early childhood he occupied a special place in his father's affection — symbolised by the famous coat of many colours (Genesis 37:3).

This favouritism, combined with Joseph's two prophetic dreams (in which his brothers bowed before him) and his reports to his father about his brothers' behaviour, bred murderous jealousy. His brothers sold him to Ishmaelite traders for twenty pieces of silver, presented his blood-stained coat to Jacob, and allowed their father to believe a wild animal had killed him.

In Egypt, Joseph served in the house of Potiphar (an officer of Pharaoh), excelling in everything — "The LORD was with Joseph" (39:2). Then Potiphar's wife accused him of assault after he refused her advances. Imprisoned unjustly, he again excelled — the prison warden put everything in his hands (39:22).

Two more years of waiting followed the interpretation of the butler's and baker\'s dreams. Then Pharaoh\'s own dreams of seven fat and seven thin cows, seven full and seven blighted ears of grain required interpretation. The butler finally remembered Joseph. In a single day, Joseph went from prison to the second throne of Egypt.

During the seven-year famine, Joseph's brothers came to Egypt twice seeking food. Joseph — recognising them, unrecognised by them — tested them, wept in private, and eventually revealed himself: "I am Joseph... it was not you who sent me here, but God" (45:4-8). His interpretation of his own suffering is the theological climax of the narrative: "You intended to harm me, but God intended it for good, to accomplish what is now being done, the saving of many lives" (50:20).`,
    historicalContext: `The Hyksos period in Egypt (c. 1650-1550 BC) involved Semitic peoples ruling the Nile Delta — making it historically plausible that a Semitic foreigner could rise to high office. Egyptian records confirm the use of grain storage, the position of vizier (second only to Pharaoh), and the practice of storing grain against famine. The price of twenty shekels for a slave (Genesis 37:28) is consistent with the average slave price in texts from c. 1700 BC.`,
    keyScriptures: [
      { reference: 'Genesis 39:2', text: 'The LORD was with Joseph, and he became a successful man, and he was in the house of his Egyptian master.', significance: 'The phrase "the LORD was with Joseph" recurs through the darkest periods of his life — his success was not circumstantial. God\'s presence transforms any situation.' },
      { reference: 'Genesis 39:9', text: '"How then can I do this great wickedness and sin against God?"', significance: 'Joseph\'s refusal of Potiphar\'s wife grounds his sexual ethics in his relationship with God, not social convention. A model for all moral decisions.' },
      { reference: 'Genesis 45:5-7', text: '"And now do not be distressed or angry with yourselves because you sold me here, for God sent me before you to preserve life."', significance: 'Joseph\'s extraordinary interpretation of his own suffering — not denial, not vengeance, but the perception of divine providence working through human evil.' },
      { reference: 'Genesis 50:20', text: '"As for you, you meant evil against me, but God meant it for good, to bring it about that many people should be kept alive, as they are today."', significance: 'The theological summit of Joseph\'s story and one of the most important verses in the Bible on theodicy (how God uses evil for good). Quoted by Paul in Romans 8:28 in principle.' },
    ],
    traits: ['Faithfulness in obscurity (slave and prisoner)', 'Sexual purity under extreme pressure', 'Forgiveness at enormous personal cost', 'Administrative brilliance', 'Spiritual discernment (dreams and interpretations)', 'Emotional depth (wept at multiple reunions)'],
    failures: ['Naively reported his dreams to his already-jealous brothers', 'Perhaps not fully wise in flaunting his father\'s favour early on'],
    faithLessons: [
      'Faithfulness in small, invisible places prepares us for large visible responsibilities.',
      'God\'s promotion comes on his timetable, not ours. Joseph waited 13 years from slavery to the throne.',
      'Sexual temptation must be fled, not negotiated (Genesis 39:12 — "he left his garment in her hand and fled").',
      'Forgiveness does not mean pretending the wound didn\'t happen — Joseph wept and tested his brothers before he revealed himself.',
      'Providence means that no human evil has the final word over those who trust God. "You meant evil, but God meant it for good."',
    ],
    typologyOfChrist: `Joseph is arguably the most complete type of Christ in the Old Testament: (1) Beloved son of his father; (2) sent to his brothers who rejected him; (3) sold for silver (20 shekels — silver being the metal of redemption; Jesus sold for 30); (4) falsely accused and condemned though innocent; (5) imprisoned with two criminals, one of whom was restored and one destroyed (the butler and baker = the two thieves); (6) exalted from the lowest place to the highest in a single day; (7) forgave those who betrayed him; (8) provided bread for the world in its famine; (9) unrecognised by his brothers at first revelation (like the disciples on the road to Emmaus). Paul doesn't explicitly call Joseph a type of Christ, but the parallels are too precise to be coincidental.`,
    theologicalSignificance: `Joseph's story is the Old Testament's richest meditation on suffering, providence, and redemption. It grounds the doctrine of divine sovereignty: God works through human evil, failure, and betrayal without endorsing them. It establishes that God's purposes are not thwarted by human unfaithfulness. And it introduces Egypt into the salvation narrative — foreshadowing the Exodus that will follow when Joseph's generation has died.`,
    timeline: [
      { event: 'Born to Rachel and Jacob; given the coat of many colours', reference: 'Genesis 30:24; 37:3', year: '~1915 BC' },
      { event: 'Dreams of sheaves and stars bowing; brothers\' jealousy deepens', reference: 'Genesis 37:5-11' },
      { event: 'Brothers plot to kill him; sold to Ishmaelites for 20 shekels of silver', reference: 'Genesis 37:18-28', year: '~1898 BC' },
      { event: 'Serves in Potiphar\'s house; excels under God\'s blessing', reference: 'Genesis 39:1-6' },
      { event: 'Falsely accused by Potiphar\'s wife; imprisoned', reference: 'Genesis 39:11-20' },
      { event: 'Interprets butler\'s and baker\'s dreams in prison', reference: 'Genesis 40' },
      { event: 'Forgotten by the butler for two more years', reference: 'Genesis 40:23-41:1' },
      { event: 'Interprets Pharaoh\'s dreams; elevated to second throne of Egypt', reference: 'Genesis 41:14-44', year: '~1885 BC' },
      { event: 'Seven years of abundance; grain stored', reference: 'Genesis 41:47-49' },
      { event: 'Famine begins; brothers arrive in Egypt (first visit)', reference: 'Genesis 42', year: '~1878 BC' },
      { event: 'Second visit; Benjamin comes; Joseph tests his brothers', reference: 'Genesis 43-44' },
      { event: 'Reveals himself to his brothers: "I am Joseph"', reference: 'Genesis 45:3-8' },
      { event: 'Jacob and family migrate to Egypt (70 people)', reference: 'Genesis 46:27' },
      { event: 'Jacob blesses Joseph\'s sons; dies in Egypt', reference: 'Genesis 48-49' },
      { event: 'Joseph forgives his brothers after Jacob\'s death', reference: 'Genesis 50:15-21' },
      { event: 'Dies at 110; requests bones be carried to Canaan', reference: 'Genesis 50:26', year: '~1805 BC' },
    ],
    relationships: ['Jacob/Israel (father)', 'Rachel (mother, died at Benjamin\'s birth)', 'Benjamin (full brother)', 'Ten half-brothers (especially Reuben and Judah)', 'Asenath (Egyptian wife)', 'Ephraim and Manasseh (sons, heads of two tribes)'],
    relatedCharacters: ['moses', 'david', 'adam'],
  },

  // ── NOAH ──────────────────────────────────────────────────────────────────
  {
    id: 'noah',
    name: 'Noah',
    hebrewGreek: 'נֹחַ',
    transliteration: 'Noach',
    nameMeaning: 'Rest / Comfort',
    testament: 'OT',
    category: 'Patriarch',
    era: 'Pre-Flood (~2400 BC)',
    keyBooks: ['Genesis', 'Hebrews', '1 Peter', '2 Peter'],
    oneLiner: 'The righteous man who found grace in the eyes of the LORD, built an ark in faith, and became the father of a new humanity after the flood.',
    biography: `Noah lived in the most morally corrupt era in human history. Every imagination of humanity's heart was "only evil continually" (Genesis 6:5), and God grieved that He had made mankind. Yet amid total moral collapse, one man stood apart: "Noah was a just man and perfect in his generations, and Noah walked with God" (Genesis 6:9).

God revealed to Noah His plan to judge the earth with a flood. He commanded Noah to build a massive ark — approximately 450 feet long, 75 feet wide, and 45 feet high — and to bring two of every kind of animal aboard, along with his family. Noah obeyed everything God commanded, a testimony to his extraordinary faith. There is no record of Noah receiving a second confirmation, no sign, no miracle to authenticate the word — only a command and his obedience.

The flood came as God said. For forty days and nights the rain fell; the fountains of the deep broke open. Every living thing on the surface of the earth perished. Only Noah, his wife, his three sons and their wives — eight souls — and the creatures on the ark survived.

After 150 days the waters receded. When Noah finally left the ark, his first act was worship: he built an altar and offered burnt offerings to God. The fragrance of that sacrifice moved God to make an unconditional covenant, sealed with the rainbow, never to destroy the earth again by flood.

Noah planted a vineyard after the flood — a fateful decision. In a scene that foreshadows the moral fragility of even the best men, Noah became drunk and lay uncovered in his tent. His son Ham dishonored him; Shem and Japheth covered him in reverence. The incident led to Noah's final prophetic word, blessing Shem and Japheth and pronouncing a curse on Canaan, Ham's son — a prophecy that echoed through the rest of biblical history.

Noah lived 950 years, 350 of them after the flood, bearing witness to the grace and judgment of God across generations.`,
    historicalContext: `The ancient Near East preserves flood narratives from Mesopotamia — the Epic of Gilgamesh and the Atrahasis Epic — which bear striking parallels to Noah's story (ark, flood, birds released, sacrifice afterward). Scholars debate the relationship, but most evangelicals see the Mesopotamian accounts as corrupted folk memory of a genuine historical event. The Table of Nations in Genesis 10, showing descendants of Shem, Ham, and Japheth, served as an ancient ethnographic map of the known world. Hebrew genealogies in Genesis 5 place Noah approximately 1,056 years after Adam and 600 years before the flood (~2348 BC by the Ussher chronology).`,
    keyScriptures: [
      { reference: 'Genesis 6:8', text: 'But Noah found grace in the eyes of the LORD.', significance: 'The first use of "grace" (chen, חֵן) in the Bible — grace precedes every act of salvation.' },
      { reference: 'Genesis 6:22', text: 'Thus did Noah; according to all that God commanded him, so did he.', significance: 'The defining statement of Noah\'s life: comprehensive, unqualified obedience.' },
      { reference: 'Hebrews 11:7', text: 'By faith Noah, being warned of God of things not seen as yet, moved with fear, prepared an ark to the saving of his house; by the which he condemned the world, and became heir of the righteousness which is by faith.', significance: 'Faith Hall of Fame — Noah\'s obedience itself was a verdict on the unbelieving world.' },
      { reference: 'Genesis 9:13', text: 'I do set my bow in the cloud, and it shall be for a token of a covenant between me and the earth.', significance: 'The Noahic Covenant — the first of the Bible\'s great covenants, unconditional and universal.' },
    ],
    traits: ['Righteous', 'Obedient', 'God-fearing', 'Patient', 'Faithful', 'A preacher of righteousness (2 Pet 2:5)'],
    failures: [
      'Became drunk on wine from his own vineyard after the flood (Genesis 9:21)',
      'His nakedness and the resulting family division led to inter-tribal cursing and conflict',
    ],
    faithLessons: [
      'Grace is always the starting point — Noah did not earn God\'s favor; God showed him unmerited kindness',
      'Faith means obeying God when nothing visible confirms what He said',
      'One righteous person can serve as a vessel of salvation for others',
      'Even those who "walk with God" can fall in moments of moral carelessness — remain vigilant',
      'God always provides a way of escape before judgment falls',
    ],
    typologyOfChrist: `Noah is one of the most powerful types of Christ in Scripture. As Noah was the instrument of salvation for all who entered the ark, so Christ is the only means of rescue from divine judgment. Peter explicitly draws this parallel: the ark carried eight souls "through water," which "now saves you — baptism" (1 Peter 3:20-21). The ark typifies union with Christ; to be "in the ark" is to be "in Christ." Noah's rest-bringing name (from nacham, "comfort") foreshadows the one who said "Come to me, all you who are weary, and I will give you rest" (Matthew 11:28). Noah's sacrifice after the flood, which produced a "sweet savor" that moved God's heart, anticipates Christ's atoning death.`,
    theologicalSignificance: `Noah is the pivot point between the Adamic world and the post-flood world. His story establishes foundational theological categories: divine judgment on sin, the remnant principle (God always preserves a faithful people), the grace of God preceding human merit, unconditional covenant, and the worship-sacrifice that restores relationship after judgment. The Noahic Covenant (Genesis 9) is the first of the Bible's major covenants and establishes the framework of common grace — God's preservation of all human life regardless of moral condition — which makes civilization and the whole subsequent history of redemption possible.`,
    timeline: [
      { event: 'Born to Lamech, who prophesied "this one will comfort us"', reference: 'Genesis 5:28-29', year: '~2948 BC' },
      { event: 'Fathers Shem, Ham, and Japheth', reference: 'Genesis 5:32', year: '~2448 BC' },
      { event: 'God reveals the flood judgment; commands Noah to build the ark', reference: 'Genesis 6:13-22' },
      { event: 'Enters the ark at age 600; seven days later the flood begins', reference: 'Genesis 7:11', year: '~2348 BC' },
      { event: 'Flood covers the mountains by 15 cubits for 150 days', reference: 'Genesis 7:24' },
      { event: 'Waters recede; ark rests on Ararat', reference: 'Genesis 8:4' },
      { event: 'Releases raven, then dove (three times)', reference: 'Genesis 8:6-12' },
      { event: 'Leaves the ark; builds altar and sacrifices burnt offerings', reference: 'Genesis 8:18-20' },
      { event: 'God makes the Noahic Covenant; sets rainbow', reference: 'Genesis 9:8-17' },
      { event: 'Vineyard incident; prophecies over Shem, Ham, Japheth', reference: 'Genesis 9:20-29' },
      { event: 'Dies at age 950', reference: 'Genesis 9:29', year: '~1998 BC' },
    ],
    relationships: ['Lamech (father)', 'Shem, Ham, Japheth (sons)', 'Canaan (grandson through Ham)'],
    relatedCharacters: ['adam', 'abraham', 'moses'],
  },

  // ── EVE ───────────────────────────────────────────────────────────────────
  {
    id: 'eve',
    name: 'Eve',
    hebrewGreek: 'חַוָּה',
    transliteration: 'Chavvah',
    nameMeaning: 'Living / Life-giver / Mother of all living',
    testament: 'OT',
    category: 'Patriarch',
    era: 'Creation (~4000 BC)',
    keyBooks: ['Genesis', '2 Corinthians', '1 Timothy'],
    oneLiner: 'The first woman, the mother of all humanity, whose listening to the Serpent brought the curse — and who received the first promise of redemption.',
    biography: `Eve was the crown of creation — the last creature formed by God's hand, and the only one taken not from the dust but from living humanity. God declared it "not good" for man to be alone, and from Adam's rib He fashioned the woman. Adam's spontaneous cry — "This is now bone of my bones and flesh of my flesh!" — expresses the wonder of recognition, the joy of completeness.

Eve was created equal in dignity to Adam, both bearing the image of God. She was his equal partner and companion, yet with a different role — the word "helper" (ezer, עֵזֶר) is used elsewhere of God Himself, and carries no implication of inferiority. Together they were given dominion over all the earth.

The fall is the central tragedy of Eve's story. The Serpent — identified in Revelation 12:9 as Satan — did not approach Adam but Eve. He began with a question designed to create doubt: "Has God really said?" The strategy was subtle: first confusion about God's word, then contradiction of it ("you will not surely die"), then a counterfeit promise ("you will be like God"). Eve "saw that the tree was good for food, and that it was pleasant to the eyes, and a tree to be desired to make one wise" — the classic threefold temptation pattern (1 John 2:16). She ate and gave to her husband who was with her.

The consequences were immediate and catastrophic: shame, hiding from God, blame-shifting, and the curse. Yet even in the curse, God addressed the Serpent first and embedded within the judgment the Bible's first messianic prophecy — the protoevangelium: "I will put enmity between you and the woman, and between your seed and her seed; it shall bruise your head, and you shall bruise his heel" (Genesis 3:15).

Eve named herself only indirectly: it is Adam who names her "Eve" (Chavvah, meaning "living"), affirming even after the fall that she is the mother of all who live. She bore Cain, Abel, and Seth. After Abel's murder and Cain's exile, at the birth of Seth she said, "God has appointed me another offspring instead of Abel, for Cain killed him" — still looking to God in her grief. Her last recorded words are a declaration of continued trust.`,
    historicalContext: `Ancient Near Eastern creation texts (Enuma Elish, Atrahasis) portray humanity as an afterthought, created to serve the gods as slaves. The Genesis account is radically different: the first man and woman are created in the very image of the Creator, given dignity, purpose, and dominion. The word "rib" (tsela, צֵלָע) can also mean "side" or "chamber," suggesting the woman was taken from the core of the man — not from his foot (to be beneath him) or his head (to rule him) but from his side (to stand alongside him). In the ancient world, Eve's story also established the monogamous marriage pattern that ran counter to polygamous cultures surrounding Israel.`,
    keyScriptures: [
      { reference: 'Genesis 1:27', text: 'So God created man in his own image, in the image of God created he him; male and female created he them.', significance: 'Both man and woman equally bear the imago Dei — the foundation of human dignity and equality.' },
      { reference: 'Genesis 2:23', text: 'This is now bone of my bones, and flesh of my flesh: she shall be called Woman, because she was taken out of Man.', significance: 'Adam\'s recognition — the joy of completed humanity, the first poem in the Bible.' },
      { reference: 'Genesis 3:15', text: 'I will put enmity between thee and the woman, and between thy seed and her seed; it shall bruise thy head, and thou shalt bruise his heel.', significance: 'The Protoevangelium — the Bible\'s first messianic prophecy, spoken directly to the Serpent, promises ultimate redemption through the woman\'s offspring.' },
      { reference: '2 Corinthians 11:3', text: 'But I fear, lest by any means, as the serpent beguiled Eve through his subtilty, so your minds should be corrupted from the simplicity that is in Christ.', significance: 'Paul uses Eve as the paradigm of spiritual deception — the danger of corrupting simple devotion to Christ.' },
    ],
    traits: ['Intellectually curious', 'Receptive to God\'s beauty', 'Relational', 'Nurturing', 'Spiritually susceptible to counterfeit wisdom'],
    failures: [
      'Listened to the Serpent\'s questioning of God\'s word rather than rejecting it immediately',
      'Added to God\'s command ("neither shall you touch it" — God had not forbidden touching)',
      'Ate the forbidden fruit and gave it to her husband',
      'Participated in blame-shifting ("the serpent deceived me")',
    ],
    faithLessons: [
      'Guard the word of God carefully — the first step toward sin is doubting what God has said',
      'Satan attacks through apparent wisdom and beauty — not everything desirable is good',
      'God\'s first response to our failure is still redemptive — He promises a Savior even in the curse',
      'Even the gravest sin does not exhaust God\'s mercy or His redemptive plan',
      'The woman\'s role in the story of redemption is not merely negative — she is the bearer of the promised Seed',
    ],
    typologyOfChrist: `Genesis 3:15, the protoevangelium, is the seed-text of all Messianic prophecy. It is addressed to the Serpent through Eve: the woman's seed (Christ) would crush the Serpent's head, even while the Serpent bruised His heel. This verse already implies the Virgin Birth — in Hebrew genealogy, seed is traced through the father; "the woman's seed" is strikingly irregular, pointing to one born of a woman without a human father. Paul draws a direct Eve-Mary parallel: as through the first woman deception entered, through the new "woman" Mary the Savior came (Galatians 4:4). The Church is also typified as a new Eve, the bride of Christ, taken from His pierced side as Eve was taken from Adam's.`,
    theologicalSignificance: `Eve is theologically significant as co-bearer of the image of God, the first sinner (alongside Adam), and the recipient of the first redemptive promise. The doctrine of original sin includes Eve's primacy in the transgression (1 Timothy 2:13-14). Yet the New Testament frames her story as background to greater grace: "where sin abounded, grace did much more abound" (Romans 5:20). Her naming as "Living" after the fall and the protoevangelium addressed through her signal that God's redemptive purpose immediately absorbs the catastrophe.`,
    timeline: [
      { event: 'Created from Adam\'s rib; placed in the Garden of Eden', reference: 'Genesis 2:22', year: '~4000 BC' },
      { event: 'Tempted by the Serpent; eats the forbidden fruit and gives to Adam', reference: 'Genesis 3:1-6' },
      { event: 'God pronounces judgment; receives protoevangelium promise', reference: 'Genesis 3:14-19' },
      { event: 'Named "Eve" (Living) by Adam after the fall', reference: 'Genesis 3:20' },
      { event: 'Expelled from Eden with Adam; cherubim guard the tree of life', reference: 'Genesis 3:23-24' },
      { event: 'Bears Cain: "I have gotten a man with the help of the LORD"', reference: 'Genesis 4:1' },
      { event: 'Bears Abel; later Cain kills Abel', reference: 'Genesis 4:2-8' },
      { event: 'Bears Seth, trusting in God\'s provision', reference: 'Genesis 4:25' },
    ],
    relationships: ['Adam (husband)', 'Cain (firstborn son)', 'Abel (son, martyred)', 'Seth (son, messianic line)'],
    relatedCharacters: ['adam', 'noah', 'mary'],
  },

  // ── SOLOMON ───────────────────────────────────────────────────────────────
  {
    id: 'solomon',
    name: 'Solomon',
    hebrewGreek: 'שְׁלֹמֹה',
    transliteration: 'Shelomoh',
    nameMeaning: 'Peaceful / His peace (from shalom)',
    testament: 'OT',
    category: 'King / Poet / Sage',
    era: 'United Monarchy (~970–930 BC)',
    keyBooks: ['1 Kings', '2 Chronicles', 'Proverbs', 'Ecclesiastes', 'Song of Solomon'],
    oneLiner: 'The wisest man who ever lived, builder of the Temple, and the king whose idolatry split a kingdom — a cautionary brilliance that still illuminates the limits of human wisdom.',
    biography: `Solomon was the son of David and Bathsheba, born under the shadow of his parents' sin yet chosen by God to succeed his father. His name, given also as Jedidiah ("beloved of the LORD"), signals divine favor from birth.

At the beginning of his reign, God appeared to Solomon at Gibeon in a dream and offered him anything he asked. Solomon's answer — "Give your servant an understanding heart to judge your people, that I may discern between good and bad" — so pleased God that He gave Solomon not only wisdom but also riches and honor beyond any king before or after him. This moment became the defining expression of Solomonic kingship: wisdom as the supreme royal virtue.

The scope of Solomon's wisdom was staggering. He spoke 3,000 proverbs, composed 1,005 songs, and discoursed on botany and zoology. The Queen of Sheba, herself a ruler of legendary sophistication, visited him and "there was no more spirit in her" when she witnessed his wisdom, his court, and his wealth. She declared, "The half was not told me" (1 Kings 10:7).

Solomon's greatest achievement was the Temple he built for the LORD in Jerusalem — the first permanent dwelling-place for the Ark of the Covenant. It took seven years to build (compared to thirteen years for his own palace). When the Temple was dedicated, Solomon\'s prayer (1 Kings 8) is one of the most theologically rich prayers in the Old Testament, covering sin, forgiveness, drought, defeat, foreign prayers, and the universality of God\'s hearing.

But the very gifts God had given Solomon became instruments of his ruin. His unprecedented wealth led to oppressive taxation. His seven hundred wives and three hundred concubines — many taken from foreign nations for political alliances — "turned away his heart" to their gods. He built high places to Chemosh, Molech, and Ashtoreth. God was angered and appeared to Solomon a second time, warning him that the kingdom would be torn from his hands. By the end of his reign, adversaries had risen against him.

Solomon's personal writings — Proverbs, Ecclesiastes, and the Song of Solomon — capture three phases of wisdom: Proverbs gives the principles of wise living, Song of Solomon celebrates its purest earthly joy (love), and Ecclesiastes records the disillusionment of a man who pursued everything under the sun and found it vanity.`,
    historicalContext: `Archaeology has confirmed remarkable aspects of Solomon's reign: massive gate complexes at Megiddo, Hazor, and Gezer bearing his architectural fingerprint; copper-smelting operations at Timna; and evidence of an extensive trade network. The period ~970–930 BC was politically favorable: Egypt was weakened, Assyria not yet imperial, allowing Solomon to dominate a land-bridge connecting Africa, Asia, and Europe. His 40-year reign represents the golden age of Israelite civilization. The Temple was modeled on Phoenician architectural conventions (with Hiram of Tyre's craftsmen), yet its theology was radically monotheistic.`,
    keyScriptures: [
      { reference: '1 Kings 3:9', text: 'Give therefore thy servant an understanding heart to judge thy people, that I may discern between good and bad.', significance: 'Solomon\'s defining request — wisdom over wealth. God\'s delight in this request reveals what heaven values most.' },
      { reference: 'Proverbs 1:7', text: 'The fear of the LORD is the beginning of knowledge: but fools despise wisdom and instruction.', significance: 'The keynote of Solomonic wisdom — all true knowledge is grounded in reverence for God.' },
      { reference: '1 Kings 8:27', text: 'But will God indeed dwell on the earth? behold, the heaven and heaven of heavens cannot contain thee; how much less this house that I have builded?', significance: 'Solomon\'s theological humility at the Temple\'s dedication — acknowledging the transcendence of a God no building can contain.' },
      { reference: 'Ecclesiastes 12:13', text: 'Fear God, and keep his commandments: for this is the whole duty of man.', significance: 'The conclusion of Ecclesiastes — after exhausting every earthly pursuit, the wisest man arrives back at the same foundation.' },
      { reference: '1 Kings 11:4', text: 'For it came to pass, when Solomon was old, that his wives turned away his heart after other gods.', significance: 'The tragedy of the fall — unchecked compromise, however gradual, corrupts the greatest gifts.' },
    ],
    traits: ['Extraordinarily wise', 'Administratively gifted', 'Poetic', 'Curious about the natural world', 'Diplomatically skilled', 'Devotionally passionate (early life)'],
    failures: [
      'Violated God\'s commandment against multiplying wives (Deuteronomy 17:17)',
      'Taxed and conscripted the people heavily, planting seeds of the kingdom\'s division',
      'Built high places for the gods of his foreign wives',
      'Heart divided in worship — the wisest man fell to the oldest temptation: idolatry through compromise',
    ],
    faithLessons: [
      'Wisdom begins with fearing God — apart from reverence, intellectual brilliance becomes self-destructive',
      'Even extraordinary giftedness does not protect against slow spiritual drift',
      'The things God gives us (gifts, relationships, wealth) can become idols if not held with open hands',
      'Ecclesiastes teaches that no created thing satisfies the soul — only the Creator can',
      'The pursuit of wisdom without obedience is vanity',
    ],
    typologyOfChrist: `Solomon is one of the richest types of Christ in the Old Testament. As the "son of David" who builds the Temple and rules a kingdom of unprecedented peace and prosperity, he prefigures the greater Son of David. Jesus explicitly claimed to be "greater than Solomon" (Matthew 12:42). The Queen of Sheba's journey from afar to seek Solomon's wisdom anticipates the nations streaming to Christ. Solomon's thousand-year kingdom of peace points to Christ's millennial and eternal reign. The Song of Solomon is traditionally read as an allegory of Christ's love for His Church — the Bridegroom's pursuit of the bride.`,
    theologicalSignificance: `Solomon completes the arc of the Davidic covenant: David desired to build a house for God; Solomon built it. His reign is the apex of Old Testament theocracy. But his failure demonstrates that no human king — however gifted — can fulfill the Davidic ideal. The split of the kingdom after his death (into Israel and Judah) became the hinge-point of Old Testament history and the cause for the prophetic longing for a restored kingdom. Proverbs, Ecclesiastes, and Song of Solomon together constitute the Hebrew wisdom tradition — three perspectives on what it means to live wisely in God's world.`,
    timeline: [
      { event: 'Born to David and Bathsheba; also called Jedidiah ("beloved of the LORD")', reference: '2 Samuel 12:24-25', year: '~990 BC' },
      { event: 'David charges Solomon to build the Temple; anointed king as David dies', reference: '1 Kings 1:28-40', year: '~970 BC' },
      { event: 'God appears at Gibeon; Solomon asks for wisdom', reference: '1 Kings 3:4-14' },
      { event: 'Famous judgment of two mothers and one living child', reference: '1 Kings 3:16-28' },
      { event: 'Construction of the Temple begins', reference: '1 Kings 6:1', year: '~966 BC' },
      { event: 'Temple completed and dedicated with prayer and sacrifice', reference: '1 Kings 8', year: '~959 BC' },
      { event: 'God\'s second appearance; conditional covenant warning', reference: '1 Kings 9:1-9' },
      { event: 'Queen of Sheba visits; marvels at his wisdom and wealth', reference: '1 Kings 10:1-13' },
      { event: 'Foreign wives lead Solomon into idolatry', reference: '1 Kings 11:1-8', year: '~940 BC' },
      { event: 'God announces kingdom will be divided after Solomon\'s death', reference: '1 Kings 11:9-13' },
      { event: 'Solomon dies after 40-year reign; Rehoboam succeeds', reference: '1 Kings 11:43', year: '~930 BC' },
    ],
    relationships: ['David (father)', 'Bathsheba (mother)', 'Nathan the prophet (counselor from birth)', 'Hiram of Tyre (trade ally)', 'Jeroboam (adversary, later first king of northern Israel)', 'Rehoboam (son and successor)'],
    relatedCharacters: ['david', 'elijah', 'isaiah'],
  },

  // ── JOHN THE BAPTIST ─────────────────────────────────────────────────────
  {
    id: 'john-the-baptist',
    name: 'John the Baptist',
    hebrewGreek: 'Ἰωάννης',
    transliteration: 'Iōannēs',
    nameMeaning: 'God is gracious / The LORD has been gracious',
    testament: 'NT',
    category: 'Prophet',
    era: 'Intertestamental / NT (~5 BC – AD 29)',
    keyBooks: ['Matthew', 'Mark', 'Luke', 'John'],
    oneLiner: 'The last prophet, the forerunner of the Messiah, who prepared Israel for Jesus — the voice crying in the wilderness who declared, "He must increase, but I must decrease."',
    biography: `John the Baptist stands at the hinge of the Testaments, straddling the Old and New. His birth was miraculous: his parents, Zacharias (a priest) and Elizabeth (a relative of Mary), were old and barren. An angel announced his coming in the Temple, and when Zacharias doubted, he was struck dumb until John was born. At John's birth, Zacharias prophesied the Benedictus — "Blessed be the Lord God of Israel" — and declared his son would "go before the face of the Lord to prepare his ways" (Luke 1:76).

John lived an ascetic desert life, wearing clothing of camel's hair with a leather belt (deliberately evoking Elijah's appearance), eating locusts and wild honey. He appeared at the Jordan River preaching "a baptism of repentance for the remission of sins" (Mark 1:4). His message was direct and unsparing: "Repent, for the kingdom of heaven is at hand." He called religious leaders "vipers" and demanded fruit worthy of repentance. Crowds from Jerusalem, Judea, and the whole Jordan region flocked to him.

John baptized Jesus in the Jordan — an event of supreme theological significance. As Jesus rose from the water, the Spirit descended as a dove and the Father's voice declared: "This is my beloved Son, in whom I am well pleased" (Matthew 3:17). John identified Jesus as "the Lamb of God, who takes away the sin of the world" (John 1:29) — the most precise messianic announcement in the Gospels.

Yet John experienced profound darkness. Imprisoned by Herod Antipas (whom he had rebuked for unlawfully marrying his brother's wife), John sent messengers to Jesus: "Are you the one who is to come, or should we look for another?" (Matthew 11:3). Jesus' answer did not reassure by explanation but by pointing to works — the blind see, the lame walk, the poor have good news preached to them. John's doubt in prison humanizes him and makes his faith all the more heroic.

Jesus spoke of John: "Among those born of women there has not risen anyone greater than John the Baptist" (Matthew 11:11). Yet "the one who is least in the kingdom of heaven is greater than he" — meaning the new covenant era, inaugurated by Christ, surpasses even the greatest figure of the old. John was beheaded at Herod's banquet through the request of Herodias's daughter. He died not knowing the resurrection, yet having faithfully finished his course.`,
    historicalContext: `Josephus, the first-century Jewish historian, corroborates John's existence and execution in Antiquities 18.5.2 — a significant extrabiblical attestation. The Intertestamental period (400 BC – AD 30) saw no prophet in Israel; Malachi was the last canonical prophet. John's arrival broke 400 years of prophetic silence. The Qumran community (Dead Sea Scrolls) also operated in the Jordan wilderness around this time, practicing purification rites and awaiting a coming figure — suggesting the spiritual climate John inhabited. Herod Antipas's marriage to Herodias (his brother Philip's wife) was politically controversial, as Herodias had left her living husband for Herod.`,
    keyScriptures: [
      { reference: 'Malachi 4:5', text: 'Behold, I will send you Elijah the prophet before the coming of the great and dreadful day of the LORD.', significance: 'The prophecy John fulfills — Jesus confirmed John came "in the spirit and power of Elijah" (Luke 1:17).' },
      { reference: 'John 1:29', text: 'Behold the Lamb of God, which taketh away the sin of the world.', significance: 'The most precise messianic identification in the Gospels — John recognized Jesus as the Passover substitute for the sin of humanity.' },
      { reference: 'Matthew 11:11', text: 'Among them that are born of women there hath not risen a greater than John the Baptist: notwithstanding he that is least in the kingdom of heaven is greater than he.', significance: 'Jesus defines John as the greatest of the old covenant prophets — and simultaneously reveals the surpassing glory of the new covenant.' },
      { reference: 'John 3:30', text: 'He must increase, but I must decrease.', significance: 'The defining motto of John\'s ministry — the posture of all authentic Christian witness.' },
    ],
    traits: ['Courageous', 'Uncompromising', 'Self-denying', 'Prophetically bold', 'Humble before Christ', 'Humanly vulnerable in suffering'],
    failures: [
      'Momentary doubt about Jesus\' identity while imprisoned (Matthew 11:3) — though this may also be understood as a pedagogical question for his disciples',
    ],
    faithLessons: [
      'The greatest calling is to point others to Christ, not to build your own platform',
      'Faithfulness may lead to prison and death — God\'s purposes are not measured by earthly outcomes',
      'Authentic ministry requires personal diminishment as Christ increases',
      'Doubt in the dark does not disqualify faith in the light — Jesus honored John\'s question with compassion, not rebuke',
      'The fire of prophetic ministry must be fueled by the desert disciplines of prayer and self-denial',
    ],
    typologyOfChrist: `John is not a type of Christ but the final forerunner who points to Him. His role in the typological structure is unique: he is the eschatological Elijah (Malachi 4:5; Matthew 17:12-13), the voice of one crying in the wilderness (Isaiah 40:3), the one who baptizes with water as Christ baptizes with the Holy Spirit (Matthew 3:11). His lamb-and-sin announcement (John 1:29) draws the entire Levitical sacrificial system to its climax in the person of Jesus. In a structural sense, John represents the entire Old Testament witness — "the Law and the Prophets were until John" (Luke 16:16).`,
    theologicalSignificance: `John is the theological bridge between the Testaments. He fulfills Isaiah 40:3 and Malachi 4:5-6, closing the loop on the Old Testament prophetic tradition. His preaching of repentance and his baptism of water prepare the way for the Spirit baptism of Pentecost. The "Lamb of God" proclamation (John 1:29) is the New Testament's most direct link between the sacrificial system and the atonement. His humility — "I am not worthy to untie his sandals" — is the model of all genuine witness.`,
    timeline: [
      { event: 'Miraculous announcement by angel Gabriel to Zacharias in the Temple', reference: 'Luke 1:11-20', year: '~6 BC' },
      { event: 'Born; Zacharias\' tongue loosened; Benedictus spoken', reference: 'Luke 1:57-79' },
      { event: 'Grew and became strong in spirit; in the deserts until his public appearance', reference: 'Luke 1:80' },
      { event: 'Begins public ministry at the Jordan; preaching repentance and baptizing', reference: 'Matthew 3:1-6', year: '~AD 27' },
      { event: 'Baptizes Jesus; sees Spirit descend; hears the Father\'s voice', reference: 'Matthew 3:13-17' },
      { event: 'Identifies Jesus as Lamb of God to his disciples', reference: 'John 1:29-36' },
      { event: 'Imprisoned by Herod Antipas for rebuking his unlawful marriage', reference: 'Matthew 14:3-4', year: '~AD 28' },
      { event: 'Sends disciples to ask Jesus: "Are you the one?"', reference: 'Matthew 11:2-3' },
      { event: 'Beheaded at Herod\'s banquet through Herodias\'s daughter\'s request', reference: 'Matthew 14:6-12', year: '~AD 29' },
    ],
    relationships: ['Zacharias (father, priest)', 'Elizabeth (mother, kinswoman of Mary)', 'Jesus (cousin, Messiah)', 'Herod Antipas (captor)', 'Herodias and her daughter Salome (cause of his death)'],
    relatedCharacters: ['moses', 'elijah', 'peter', 'paul'],
  },

  // ── DANIEL ────────────────────────────────────────────────────────────────
  {
    id: 'daniel',
    name: 'Daniel',
    hebrewGreek: 'דָּנִיֵּאל',
    transliteration: 'Daniyyel',
    nameMeaning: 'God is my judge / God is my vindicator',
    testament: 'OT',
    category: 'Prophet',
    era: 'Babylonian Exile (~605–530 BC)',
    keyBooks: ['Daniel', 'Ezekiel', 'Matthew', 'Revelation'],
    oneLiner: 'The faithful exile who refused to compromise in Babylon\'s courts, interpreted the dreams of kings, and received the most detailed apocalyptic visions in the Old Testament.',
    biography: `Daniel was taken from Jerusalem to Babylon as a young man in the first deportation of 605 BC, among the best and brightest of Judean nobility. In Babylon, he was renamed Belteshazzar and enrolled in Nebuchadnezzar's royal training program — a sophisticated attempt to reprogram his entire identity through Babylonian language, literature, and diet.

Daniel's first act of faithfulness was refusing the king's food and wine — likely because it violated Jewish dietary laws or had been offered to Babylonian idols. He proposed a ten-day test of vegetables and water, and at the end he and his three companions were healthier than all who had eaten the royal diet. God rewarded this faithfulness by giving Daniel and his friends knowledge, skill in literature and wisdom, and to Daniel specifically, understanding of all kinds of visions and dreams.

When Nebuchadnezzar had a troubling dream that none of his wise men could reproduce or interpret, Daniel sought God in prayer and received both the dream and its interpretation. The dream — a statue with golden head, silver chest, bronze belly, iron legs, and clay-iron feet — outlined four world empires followed by a divine kingdom that would crush all human kingdoms. This vision (Daniel 2) became the interpretive framework for all subsequent biblical prophecy.

Daniel interpreted another dream (the great tree) for Nebuchadnezzar (Daniel 4), predicted seven years of madness for the king's pride, and when it happened exactly as Daniel said, Nebuchadnezzar was converted and praised the God of Israel. Daniel saw the handwriting on the wall at Belshazzar\'s feast (Daniel 5) and was thrown into the lions' den under Darius the Mede for praying three times a day despite a law forbidding it. He emerged untouched, and Darius declared the God of Daniel to be the living God.

The second half of Daniel (chapters 7-12) is apocalyptic vision — among the most studied prophetic passages in the Bible. The four beasts of Daniel 7 parallel the statue of Daniel 2 and introduce the "Son of Man" coming on the clouds (7:13-14), a title Jesus applied to Himself directly. Daniel 9 contains the famous "Seventy Weeks" prophecy, which detailed the timeline to the coming of the Messiah with remarkable precision. Daniel 11 provides a detailed prophecy of the Hellenistic period that was fulfilled so precisely historians once assumed it was written after the fact (vaticinium ex eventu).`,
    historicalContext: `The Babylonian empire under Nebuchadnezzar II (605–562 BC) was the dominant superpower of the ancient Near East. Babylon's capital featured the Ishtar Gate, the Hanging Gardens, and a sophisticated intellectual culture. The Babylonian deportation policy aimed to assimilate conquered elites — renaming, re-educating, incorporating them into the imperial bureaucracy. Archaeological finds have identified Daniel-like figures in Babylonian administrative records. The Persian conquest of Babylon by Cyrus in 539 BC is explicitly mentioned in Daniel 6:28 and 10:1, and the decree of Cyrus allowing Jewish return is alluded to in Daniel 1:21 ("until the first year of King Cyrus").`,
    keyScriptures: [
      { reference: 'Daniel 1:8', text: 'But Daniel purposed in his heart that he would not defile himself with the portion of the king\'s meat.', significance: 'Daniel\'s character is defined early: he purposed before the crisis — not during it. Conviction, not convenience.' },
      { reference: 'Daniel 7:13-14', text: 'I saw in the night visions, and, behold, one like the Son of man came with the clouds of heaven...and there was given him dominion, and glory, and a kingdom...', significance: 'The foundational "Son of Man" vision — Jesus\'s most-used self-designation drawn from this passage, claiming divine authority and universal kingship.' },
      { reference: 'Daniel 9:24-27', text: 'Seventy weeks are determined upon thy people and upon thy holy city, to finish the transgression...to bring in everlasting righteousness...', significance: 'The "Seventy Weeks" prophecy — one of the most precise messianic timeline prophecies in the OT, pointing to the Messiah\'s appearance and death.' },
      { reference: 'Daniel 6:10', text: 'Now when Daniel knew that the writing was signed, he went into his house; and his windows being open in his chamber toward Jerusalem, he kneeled upon his knees three times a day, and prayed.', significance: 'Daniel\'s prayer discipline did not change under threat of death — his habits of grace were non-negotiable.' },
    ],
    traits: ['Unwavering conviction', 'Prayerful', 'Diplomatically wise', 'Interpretively gifted', 'Fearless under pressure', 'Morally consistent across multiple regimes'],
    failures: ['Scripture records no moral failure in Daniel — he stands with Joseph as one of very few biblical characters without recorded sin'],
    faithLessons: [
      'Decide your convictions before the crisis, not during it — Daniel "purposed in his heart" before the test came',
      'Faithfulness in small things (diet) prepares for faithfulness in large things (lions\' den)',
      'Prayer is not cancelled by law or threat — it is the foundation of all other courage',
      'God\'s sovereignty over empires does not require our compromise within them',
      'The apocalyptic visions of Daniel teach that human history moves toward a divine culmination that God controls',
    ],
    typologyOfChrist: `Daniel's "Son of Man" vision (Daniel 7:13-14) is the single most important Old Testament text for understanding Jesus's self-identity. Jesus claimed this title over thirty times in the Gospels. Before the Sanhedrin at His trial, He quoted Daniel 7:13 directly: "Hereafter you will see the Son of Man sitting at the right hand of Power and coming on the clouds of heaven" (Matthew 26:64). The four empires of Daniel 2 and 7 collapse before a fifth, divine kingdom — a stone cut without human hands — which is Christ's kingdom, never destroyed. Daniel himself typifies Christ as an innocent man falsely accused and thrown into a death pit (lions' den) from which he emerged alive.`,
    theologicalSignificance: `Daniel is the primary Old Testament source of apocalyptic theology. His visions form the structural foundation of the New Testament's book of Revelation. The "Son of Man" title, the resurrection of the dead (Daniel 12:2 — one of only two clear OT resurrection texts), the seventy-weeks timeline, and the four-empire schema are all critical theological contributions. Daniel also demonstrates the theology of providence: God rules over pagan empires, uses them as instruments of judgment, and controls the trajectory of history toward His appointed end.`,
    timeline: [
      { event: 'Taken to Babylon in first deportation under Nebuchadnezzar', reference: 'Daniel 1:1-6', year: '~605 BC' },
      { event: 'Refuses king\'s food; ten-day test; rewarded with wisdom', reference: 'Daniel 1:8-20' },
      { event: 'Interprets Nebuchadnezzar\'s statue dream; promoted to ruler of province of Babylon', reference: 'Daniel 2', year: '~603 BC' },
      { event: 'Interprets the great-tree dream; predicts Nebuchadnezzar\'s madness', reference: 'Daniel 4', year: '~570 BC' },
      { event: 'Reads the handwriting on Belshazzar\'s wall', reference: 'Daniel 5', year: '~539 BC' },
      { event: 'Babylon falls to the Medes and Persians; Darius makes Daniel one of three governors', reference: 'Daniel 6:1-3' },
      { event: 'Thrown into the lions\' den for praying; emerges unharmed', reference: 'Daniel 6:10-23' },
      { event: 'Receives the four-beasts and Son of Man vision', reference: 'Daniel 7', year: '~553 BC' },
      { event: 'Receives the Seventy Weeks prophecy after prayer and confession', reference: 'Daniel 9', year: '~539 BC' },
      { event: 'Final vision beside the Tigris; revelation of end-times events', reference: 'Daniel 10-12', year: '~536 BC' },
    ],
    relationships: ['Nebuchadnezzar II (master / converted admirer)', 'Belshazzar (final Babylonian king)', 'Darius the Mede (Persian governor)', 'Hananiah (Shadrach), Mishael (Meshach), Azariah (Abednego) (faithful companions)'],
    relatedCharacters: ['ezekiel', 'isaiah', 'jeremiah', 'moses'],
  },

  // ── ISAIAH ────────────────────────────────────────────────────────────────
  {
    id: 'isaiah',
    name: 'Isaiah',
    hebrewGreek: 'יְשַׁעְיָהוּ',
    transliteration: 'Yeshayahu',
    nameMeaning: 'The LORD is salvation',
    testament: 'OT',
    category: 'Prophet',
    era: 'Divided Monarchy (~740–681 BC)',
    keyBooks: ['Isaiah', 'Matthew', 'Luke', 'John', 'Acts', 'Romans'],
    oneLiner: 'The prince of prophets, whose 66-chapter book mirrors the Bible\'s 66 books and whose Servant Songs gave Israel — and the world — the most detailed portrait of the Messiah in all the Old Testament.',
    biography: `Isaiah son of Amoz ("strong") received his prophetic call in the year King Uzziah died — approximately 740 BC. His call vision (Isaiah 6) is one of the most overwhelming divine encounters in Scripture: the LORD seated on a high and exalted throne, seraphim crying "Holy, holy, holy," the temple shaking with the voice of God. Isaiah's response was immediate and shattering: "Woe is me! For I am undone; because I am a man of unclean lips." A seraph flew to him with a live coal from the altar, touched his lips: "Your iniquity is taken away, and your sin purged." Then the question: "Whom shall I send?" Isaiah's answer — "Here am I; send me" — became the model for prophetic commission across all generations.

Isaiah prophesied during the reigns of Uzziah, Jotham, Ahaz, and Hezekiah — roughly 60 years of ministry spanning one of the most turbulent periods in Judah's history. The Assyrian empire under Tiglath-Pileser III, Sargon II, and Sennacherib posed an existential threat. Isaiah challenged Israel's trust in political alliances (especially Egypt) instead of the LORD: "In returning and rest you shall be saved; in quietness and confidence shall be your strength" (Isaiah 30:15).

His ministry reached its most dramatic moment in Hezekiah's crisis (Isaiah 36-39): Sennacherib's army surrounded Jerusalem with 185,000 soldiers. Isaiah delivered the word of the LORD — the Assyrians would not enter the city. That night the angel of the LORD struck 185,000 dead in the Assyrian camp. Sennacherib withdrew and was later murdered by his own sons.

The second half of Isaiah (chapters 40-66) shifts dramatically in tone from judgment to comfort. It opens with the famous comfort passage — "Comfort, comfort my people" — and includes the four Servant Songs (42:1-9; 49:1-13; 50:4-11; 52:13–53:12). Isaiah 53 is the most precise prophecy of Christ's atoning death in the entire Bible, describing His rejection, suffering, death for sins, and ultimate vindication in language so specific it reads as eyewitness account rather than prophecy written 700 years earlier.

Jewish tradition holds that Isaiah was martyred by being sawn in two (in a hollow log) by the wicked King Manasseh — a reference possibly alluded to in Hebrews 11:37. The New Testament quotes Isaiah more than any other Old Testament book.`,
    historicalContext: `Isaiah ministered during the Syro-Ephraimite crisis (735 BC), the fall of northern Israel to Assyria (722 BC), and Sennacherib's invasion of Judah (701 BC). The Assyrian annals corroborate the siege of Jerusalem by Sennacherib (who boasts of Hezekiah "like a caged bird") but notably record no conquest of Jerusalem — the miraculous deliverance. Isaiah's references to Cyrus by name (44:28; 45:1) — written approximately 150 years before Cyrus — have caused liberal scholars to posit a "Deutero-Isaiah." Conservative scholarship holds to a single author, reading the Cyrus prophecies as evidence of genuine predictive prophecy.`,
    keyScriptures: [
      { reference: 'Isaiah 6:3', text: 'Holy, holy, holy, is the LORD of hosts: the whole earth is full of his glory.', significance: 'The only "three-fold" divine attribute in Scripture — foreshadowing Trinitarian theology and establishing holiness as God\'s supreme characteristic.' },
      { reference: 'Isaiah 9:6', text: 'For unto us a child is born, unto us a son is given: and the government shall be upon his shoulder: and his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace.', significance: 'The fourfold messianic name — the most comprehensive prophetic description of Christ\'s nature and reign.' },
      { reference: 'Isaiah 53:5', text: 'But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.', significance: 'The heart of the Suffering Servant song — substitutionary atonement described with surgical precision 700 years before the cross.' },
      { reference: 'Isaiah 40:31', text: 'But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.', significance: 'The comfort of divine sustenance for the waiting soul — one of the most beloved promises in Scripture.' },
    ],
    traits: ['Theologically profound', 'Poetically brilliant', 'Courageous before kings', 'Deeply aware of divine holiness', 'Pastoral in comfort', 'Uncompromising in truth'],
    failures: [
      'Isaiah 8 records that he fathered children as sign-messages (symbolic names), not a moral failure but an unusual prophetic lifestyle that would have been socially costly',
    ],
    faithLessons: [
      'Genuine encounter with God\'s holiness always produces deep humility before it produces bold commission',
      'The fear of man is the greatest obstacle to prophetic ministry — Isaiah challenged kings and empires',
      'God\'s word is the only sure foundation; political alliances are broken reeds',
      'The comfort passages of Isaiah (40-55) teach that God\'s redemptive purposes survive judgment',
      'Isaiah 53 teaches that God\'s justice and mercy meet at the cross — not in tension but in synthesis',
    ],
    typologyOfChrist: `Isaiah contains more Messianic prophecies than any other Old Testament book. The four Servant Songs (42; 49; 50; 52-53) present Christ as the chosen servant who brings justice, restores Israel, opens blind eyes, is rejected and suffers vicariously, and is ultimately exalted. Isaiah 7:14 (a virgin shall conceive) is cited by Matthew as fulfilled in the virgin birth. Isaiah 9:1-2 (Galilee of the nations, people walking in darkness see a great light) is fulfilled in Jesus' Galilean ministry (Matthew 4:13-16). Isaiah 61:1-2 is Jesus' own text at Nazareth: "Today this scripture is fulfilled in your hearing" (Luke 4:21).`,
    theologicalSignificance: `Isaiah is the theological summit of Old Testament prophecy. He holds together: the holiness of God (chapters 1-6), the judgment of nations (7-23), eschatological hope (24-27), covenant faithfulness (28-35), historical narrative (36-39), and the New Exodus theology of comfort, servant, and new creation (40-66). The book's structure mirrors the Bible's 66 books: 39 chapters of law and judgment (OT) + 27 chapters of comfort and gospel (NT). The New Testament quotes Isaiah over 40 times, making him the most-cited OT prophet.`,
    timeline: [
      { event: 'Receives call vision in the year King Uzziah died', reference: 'Isaiah 6:1', year: '~740 BC' },
      { event: 'Confronts King Ahaz during Syro-Ephraimite crisis; delivers Immanuel prophecy', reference: 'Isaiah 7', year: '~735 BC' },
      { event: 'Walks naked and barefoot three years as sign against Egypt and Ethiopia', reference: 'Isaiah 20', year: '~711 BC' },
      { event: 'Advises Hezekiah during Sennacherib\'s invasion; prophesies Assyrian withdrawal', reference: 'Isaiah 36-37', year: '~701 BC' },
      { event: 'Tells Hezekiah he will die; then extends his life 15 years after prayer', reference: 'Isaiah 38', year: '~701 BC' },
      { event: 'Prophesies Babylonian exile after Hezekiah shows envoys the treasury', reference: 'Isaiah 39' },
      { event: 'Continues prophetic ministry into Manasseh\'s reign', reference: '2 Kings 21:1', year: '~695–681 BC' },
      { event: 'Tradition: martyred by Manasseh, sawn in two in a hollow log', reference: 'Hebrews 11:37 (implied)', year: '~681 BC' },
    ],
    relationships: ['Uzziah, Jotham, Ahaz, Hezekiah (kings under whom he prophesied)', 'Amoz (father)', 'Shear-jashub and Maher-shalal-hash-baz (sons with prophetic names)'],
    relatedCharacters: ['jeremiah', 'ezekiel', 'daniel', 'elijah', 'paul'],
  },

  // ── MARY MAGDALENE ────────────────────────────────────────────────────────
  {
    id: 'mary-magdalene',
    name: 'Mary Magdalene',
    hebrewGreek: 'Μαρία ἡ Μαγδαληνή',
    transliteration: 'Maria hē Magdalēnē',
    nameMeaning: 'Mary of Magdala (Magdala = tower/elevated)',
    testament: 'NT',
    category: 'Disciple',
    era: 'New Testament (~AD 27–33)',
    keyBooks: ['Matthew', 'Mark', 'Luke', 'John'],
    oneLiner: 'Delivered from seven demons, she became one of Jesus\' most devoted followers — the first witness of the resurrection and the first herald of the greatest news in history.',
    biography: `Mary of Magdala is one of the most misunderstood figures in the New Testament. Popular culture has fused her with the unnamed sinful woman of Luke 7 and the woman caught in adultery — but the Gospels identify none of these as Mary Magdalene. What the Gospels do say is this: Jesus had cast seven demons out of her (Luke 8:2; Mark 16:9), and from that moment she followed Him.

Mary was among the group of women who accompanied Jesus and the twelve throughout His Galilean ministry, supporting Him "out of their own means" (Luke 8:3). This represents remarkable social countercultural behavior: respectable women of the first century did not travel with a rabbi's entourage. Her presence signals both the depth of her gratitude and the radical social inclusivity of Jesus's ministry.

At the crucifixion, when most of the male disciples had fled, Mary Magdalene was there. All four Gospels record her presence at the cross (Matthew 27:56; Mark 15:40; Luke 23:49; John 19:25). She watched where Jesus was buried and was among the women who came early Sunday morning to anoint His body.

The resurrection narrative in John 20 is extraordinary. Mary arrives at the tomb while it is still dark, finds it empty, and runs to tell Peter and John. After they leave, she stands outside weeping. She looks into the tomb and sees two angels. Then she turns and sees Jesus — but doesn't recognize Him, thinking He's the gardener. When He says her name — "Mary" — she turns and cries "Rabboni!" (Teacher). Jesus commissions her: "Go to my brethren and say to them, I am ascending to my Father and your Father, to my God and your God." She becomes the first preacher of the resurrection — apostola apostolorum, the early church called her: "apostle to the apostles."

The significance of this cannot be overstated. In a first-century culture where women's testimony was not accepted in courts, God chose a woman as the first witness and first herald of the resurrection. This deliberate divine choice affirms the dignity and importance of women in the history of redemption.`,
    historicalContext: `Magdala (Migdal) was a prosperous fishing town on the western shore of the Sea of Galilee. Archaeological excavations (2009 onward) have uncovered a first-century synagogue at Magdala with a unique stone engraved with a menorah — the oldest such carving found to date, from the Second Temple period. The discovery establishes Magdala as a significant Jewish center in Jesus's time. Luke 8:2-3 identifies several wealthy women who supported Jesus, suggesting Mary Magdalene had means, possibly from trade or property. The conflation of Mary Magdalene with the "sinful woman" began with Gregory the Great's homily in AD 591 and was not corrected in Western tradition until 1969 when the Catholic Church officially distinguished her feast day.`,
    keyScriptures: [
      { reference: 'Luke 8:2', text: 'And certain women, which had been healed of evil spirits and infirmities, Mary called Magdalene, out of whom went seven devils.', significance: 'The extent of Mary\'s deliverance — seven demons expelled — makes her complete devotion to Jesus intelligible: she had been given back her life.' },
      { reference: 'John 20:16-17', text: 'Jesus saith unto her, Mary. She turned herself, and saith unto him, Rabboni... Jesus saith unto her, Go to my brethren, and say unto them...', significance: 'The recognition by name — the Good Shepherd calls His own sheep by name. Mary is commissioned as the first resurrection witness.' },
      { reference: 'Mark 15:40-41', text: 'There were also women looking on afar off: among whom was Mary Magdalene...who also, when he was in Galilee, followed him, and ministered unto him.', significance: 'Her fidelity at the cross when others fled — the depth of love that sustained her in the hour of apparent defeat.' },
    ],
    traits: ['Deeply devoted', 'Courageous at the cross', 'First among the women disciples', 'Emotionally invested', 'Theologically recognized by Christ as the first preacher of the resurrection'],
    failures: ['No moral failure recorded; her weeping at the tomb might reflect a momentary despair, gently corrected by Jesus\'s appearance'],
    faithLessons: [
      'Gratitude for personal deliverance is one of the most powerful motivators of sacrificial discipleship',
      'Faithfulness at the cross — staying when others flee — is the truest test of love',
      'Jesus reveals Himself to those who seek Him with passionate, weeping persistence',
      'God entrusts the most important message in history to those overlooked by the world',
      'Being called by name by Jesus is the moment of recognition — He knows you personally',
    ],
    typologyOfChrist: `Mary Magdalene's story does not primarily typify Christ but receives from Him. She is the New Eve in a specific sense: as the first Eve's conversation in a garden brought death, so the first person to speak with the Risen Christ in a garden (John 20:15 — "supposing him to be the gardener") participated in the announcement of resurrection life. The garden setting is deliberate: Eden's curse is reversing. Her commission — "go and tell" — is the structure of all Christian witness: receive grace, then declare it.`,
    theologicalSignificance: `Mary Magdalene's role as the first resurrection witness is theologically loaded. The resurrection is the center of Christian faith (1 Corinthians 15:14); the one chosen to first receive and proclaim it was a woman who had been demon-possessed — an outsider by any standard of the time. This pattern — God choosing the despised to shame the proud — runs through all of Scripture (1 Corinthians 1:27-28). She also establishes the importance of women in biblical testimony, challenging the assumption that their testimony was insignificant in the early church.`,
    timeline: [
      { event: 'Delivered from seven demons by Jesus', reference: 'Luke 8:2', year: '~AD 28' },
      { event: 'Joins the group of women who follow and support Jesus\'s ministry', reference: 'Luke 8:1-3' },
      { event: 'Present at the crucifixion', reference: 'John 19:25', year: 'AD 33' },
      { event: 'Watches where Jesus is buried', reference: 'Matthew 27:61' },
      { event: 'Comes to the tomb early Sunday morning with spices', reference: 'Mark 16:1-2' },
      { event: 'Finds empty tomb; reports to Peter and John', reference: 'John 20:1-2' },
      { event: 'Meets the Risen Jesus in the garden; first resurrection witness', reference: 'John 20:11-18' },
      { event: 'Commissioned to announce the resurrection to the disciples', reference: 'John 20:17' },
    ],
    relationships: ['Jesus (Lord and deliverer)', 'Mary the mother of Jesus (companion at the cross)', 'Peter and John (to whom she reported the empty tomb)', 'Joanna and Susanna (fellow women disciples, Luke 8:3)'],
    relatedCharacters: ['mary', 'peter', 'paul', 'ruth'],
  },

  // ── JOSHUA ────────────────────────────────────────────────────────────────
  {
    id: 'joshua',
    name: 'Joshua',
    hebrewGreek: 'יְהוֹשׁוּעַ / Ἰησοῦς',
    transliteration: 'Yehoshua / Iēsous',
    nameMeaning: 'The LORD is salvation / The LORD saves',
    testament: 'OT',
    category: 'Military Leader / Prophet',
    era: 'Conquest of Canaan (~1406–1380 BC)',
    keyBooks: ['Exodus', 'Numbers', 'Deuteronomy', 'Joshua', 'Hebrews'],
    oneLiner: 'Moses\' successor who led Israel into the Promised Land — and whose very name (Yehoshua = Jesus) makes him the clearest Old Testament type of the Savior who gives His people their promised inheritance.',
    biography: `Joshua first appears in Exodus 17 as the military commander Moses chose to fight the Amalekites — while Moses held up the staff of God on the hill, Joshua won the battle below. He is introduced as a man of action and faithfulness, qualities that would define his entire life.

Joshua was Moses' personal attendant and disciple for forty years in the wilderness. He was one of twelve spies sent to scout Canaan. Ten returned with a fearful report: "We seemed like grasshoppers in our own eyes" (Numbers 13:33). Joshua and Caleb alone brought a minority report of faith: "Do not rebel against the LORD. And do not fear the people of the land, for they are bread for us. Their protection is removed from them, and the LORD is with us; do not fear them" (Numbers 14:9). As a result, only they of their generation entered the Promised Land.

When Moses died on Mount Nebo, Joshua received the divine commission: "Moses my servant is dead. Now therefore arise, go over this Jordan...Be strong and courageous" (Joshua 1:2,6). The repetition of "be strong and courageous" three times in Joshua 1 and once more from the people (1:18) frames the entire book's spiritual theme: courage grounded not in military strength but in the promise of God's presence.

The Jordan crossing was the defining miracle: the priests stepped into the Jordan at flood stage and the waters stopped upstream at Adam (a city). Israel crossed on dry ground. Twelve memorial stones were set up — a monument to miraculous provision. Then Jericho: the impregnable city fell not by siege tactics but by obedience — seven days of marching, priests blowing trumpets, and the shout. The walls collapsed (Joshua 6).

The conquest of Canaan was not total in Joshua's lifetime but established a foothold. Achan's sin (taking devoted things from Jericho) caused Israel's defeat at Ai — a costly lesson in corporate covenant accountability. The Gibeonite deception (Joshua 9) shows Joshua's one major tactical error: "they did not ask counsel from the LORD" (9:14).

Joshua's farewell speech (chapters 23-24) stands alongside Moses' farewell in Deuteronomy as one of the great covenant addresses of Scripture. "Choose this day whom you will serve...but as for me and my house, we will serve the LORD" (24:15) has become the defining statement of covenant family commitment.`,
    historicalContext: `The Conquest of Canaan is archaeologically debated but corroborated in part by the Late Bronze Age destruction layers at several Canaanite cities (~1400-1200 BC range). Jericho's archaeological evidence is complicated; excavations have found evidence of collapse and burning but dating is disputed. The Amarna Letters (~1350 BC) from Canaanite city-states to Egypt describe marauding groups called "Habiru" — possibly related to "Hebrew." The Merneptah Stele (~1208 BC) is the earliest extrabiblical mention of "Israel" as a people. The Canaanite religion Joshua encountered — with its Baal worship, fertility rites, child sacrifice to Molech — was among the most morally degraded in the ancient world, providing theological context for the severity of the conquest command.`,
    keyScriptures: [
      { reference: 'Joshua 1:8', text: 'This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night...for then thou shalt make thy way prosperous, and then thou shalt have good success.', significance: 'The source of Joshua\'s success revealed at the outset — the word of God, not military strategy, was the true weapon.' },
      { reference: 'Joshua 1:9', text: 'Have not I commanded thee? Be strong and courageous; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.', significance: 'The foundation of all biblical courage — not personality or willpower but divine presence.' },
      { reference: 'Joshua 24:15', text: 'Choose you this day whom ye will serve...but as for me and my house, we will serve the LORD.', significance: 'The covenant challenge and family commitment — one of the most quoted verses in all of Christian history.' },
      { reference: 'Hebrews 4:8', text: 'For if Jesus had given them rest, then would he not afterward have spoken of another day.', significance: 'The author of Hebrews notes that Joshua\'s rest was incomplete — pointing to the "greater rest" Christ provides.' },
    ],
    traits: ['Courageous', 'Servant-hearted', 'Obedient to God\'s word', 'Militarily competent', 'Spiritually discerning', 'Covenant-faithful'],
    failures: [
      'Did not consult God before making a covenant with the Gibeonites (Joshua 9:14)',
      'The conquest was incomplete — several Canaanite enclaves remained, later becoming sources of compromise',
    ],
    faithLessons: [
      'Courage in God\'s work is commanded, not discovered — "be strong and courageous" is an imperative, not a feeling',
      'The word of God meditated on day and night is the source of true success',
      'Always seek God\'s counsel before making covenants or major decisions',
      'Incomplete obedience produces long-term problems — finish what God assigns',
      'The family covenant renewal ("as for me and my house") is a call to every generation',
    ],
    typologyOfChrist: `Joshua is the most direct name-type of Jesus in Scripture. The Hebrew name Yehoshua (Joshua) is identical to the Greek Iēsous (Jesus) — both meaning "the LORD saves." As Joshua led Israel from wilderness wandering into Canaan (the land of rest and inheritance), so Jesus leads His people from the wilderness of sin and death into the rest of God (Hebrews 4:8-10). The Jordan crossing under Joshua (through priestly mediation, with the Ark of the Covenant) typifies Christian baptism and entry into salvation. Joshua's miraculous victories against enemies who cannot resist God's power typify Christ's defeat of sin, death, and Satan. The Rahab episode (a Gentile prostitute saved by a scarlet cord) points to salvation by faith for all nations through Christ's blood.`,
    theologicalSignificance: `Joshua completes the Pentateuchal promise: God had promised Abraham a land, and Joshua is the instrument of its fulfillment. The conquest theology is theologically complex — God using Israel as an instrument of judgment against the sin of the Canaanites (whose "iniquity was not yet full" in Abraham's day, Genesis 15:16). The book demonstrates that the land is a gift of grace, not merit; that God fights for His people; and that the "rest" of Canaan is typological (Hebrews 4), pointing to the eschatological rest Christ provides. The completeness of consecration demanded in the conquest (no making peace with idolatry) becomes the New Testament demand of total surrender to Christ.`,
    timeline: [
      { event: 'First mentioned as military commander against the Amalekites', reference: 'Exodus 17:9', year: '~1446 BC' },
      { event: 'Named as Moses\' aide; enters the Tent of Meeting', reference: 'Exodus 33:11' },
      { event: 'One of twelve spies; brings faithful minority report with Caleb', reference: 'Numbers 13-14', year: '~1443 BC' },
      { event: 'Commissioned and installed as Moses\' successor before all Israel', reference: 'Numbers 27:18-23; Deuteronomy 31:14' },
      { event: 'Moses dies; divine commission given to Joshua', reference: 'Joshua 1:1-9', year: '~1406 BC' },
      { event: 'Sends spies to Jericho; Rahab hides them', reference: 'Joshua 2' },
      { event: 'Israel crosses the Jordan on dry ground', reference: 'Joshua 3-4' },
      { event: 'Jericho falls after seven days of marching and the great shout', reference: 'Joshua 6' },
      { event: 'Defeat at Ai due to Achan\'s sin; Achan judged', reference: 'Joshua 7' },
      { event: 'Gibeonite deception — covenant made without consulting God', reference: 'Joshua 9' },
      { event: 'Battle at Gibeon; sun stands still', reference: 'Joshua 10' },
      { event: 'Land distributed among the twelve tribes', reference: 'Joshua 13-21', year: '~1399 BC' },
      { event: 'Covenant renewal at Shechem; farewell address', reference: 'Joshua 24', year: '~1380 BC' },
      { event: 'Dies at age 110; buried at Timnath-serah', reference: 'Joshua 24:29-30' },
    ],
    relationships: ['Moses (master and mentor)', 'Caleb (faithful companion spy)', 'Rahab (saved by scarlet cord)', 'Eleazar the priest (co-leader)'],
    relatedCharacters: ['moses', 'david', 'noah', 'elijah'],
  },

  // ── SAMUEL ────────────────────────────────────────────────────────────────
  {
    id: 'samuel',
    name: 'Samuel',
    hebrewGreek: 'שְׁמוּאֵל',
    transliteration: 'Shemu\'el',
    nameMeaning: 'Name of God / Heard by God / Asked of God',
    testament: 'OT',
    category: 'Prophet',
    era: 'Transition to Monarchy (~1100–1020 BC)',
    keyBooks: ['1 Samuel', '2 Samuel', 'Hebrews', 'Acts'],
    oneLiner: 'The last judge and first kingmaker — the prophet who anointed both Saul and David and held Israel\'s covenant identity together in the most turbulent transition of its history.',
    biography: `Samuel's birth is a story of answered prayer. His mother Hannah was barren and deeply distressed. At Shiloh she prayed with such intensity that Eli the priest thought she was drunk. She vowed that if God gave her a son, she would give him back to the LORD all his days. God remembered Hannah, and Samuel was born. When he was weaned, Hannah brought him to Shiloh and left him with Eli — a remarkable act of faith and covenant faithfulness.

Growing up in the Tabernacle under Eli's diminishing influence, Samuel received his call in a night vision. Three times he heard a voice calling his name and ran to Eli; three times Eli sent him back. On the third occasion, Eli recognized it was the LORD calling and instructed Samuel: "Go, lie down, and if he calls you, you shall say, 'Speak, LORD, for your servant hears.'" The LORD's message was devastating: judgment on Eli's house for his sons' wickedness, which Eli failed to restrain.

Samuel grew up and "the LORD was with him and let none of his words fall to the ground" (1 Samuel 3:19) — the biblical description of a true prophet's 100% accuracy. Israel recognized him as a prophet from Dan to Beersheba. He judged Israel for years, holding court at Bethel, Gilgal, and Mizpah.

When Samuel aged and his own sons proved corrupt judges, the elders of Israel came with the fateful request: "Give us a king to judge us like all the nations." God told Samuel: "They have not rejected you, but they have rejected me from being king over them." Samuel warned Israel of what kingship would cost — military conscription, taxation, servitude. They insisted. Saul, a Benjaminite — tall, handsome, apparently ideal — was chosen by God and anointed by Samuel.

But Saul's disobedience (offering unauthorized sacrifice, failing to completely destroy the Amalekites) led Samuel to one of Scripture's great declarations: "To obey is better than sacrifice, and to heed than the fat of rams. For rebellion is as the sin of witchcraft, and stubbornness is as iniquity and idolatry." Samuel mourned for Saul — then went to Bethlehem to anoint David, the youngest son of Jesse, whom God had chosen.

Samuel stands in the New Testament's Faith Hall of Fame (Hebrews 11:32) and Acts 3:24 calls him the first in the line of prophets who foretold "these days" — the messianic age. He is the hinge figure of Israel's history, standing between the chaotic period of the Judges and the monarchy, between theocratic government and human kingship.`,
    historicalContext: `The period of 1100–1020 BC in Israel was one of its lowest points — the Ark of the Covenant had been captured by the Philistines (1 Samuel 4-6), Eli's corrupt sons had been killed, and the Philistine threat was existential. The Late Bronze Age collapse (c. 1200 BC) had destabilized the entire region; the Philistines, who settled on the Coastal Plain, possessed iron technology that gave them military superiority. Samuel's prophetic ministry and the establishment of the monarchy were Israel's response to this crisis. Archaeological evidence (Tel Megiddo, Khirbet Qeiyafa) suggests the early Israelite monarchy was a genuine geopolitical entity by the late 11th century.`,
    keyScriptures: [
      { reference: '1 Samuel 3:10', text: 'And the LORD came, and stood, and called as at other times, Samuel, Samuel. Then Samuel answered, Speak; for thy servant heareth.', significance: 'The model of prophetic receptivity — availability to God\'s word rather than agenda-setting.' },
      { reference: '1 Samuel 15:22', text: 'Behold, to obey is better than sacrifice, and to hearken than the fat of rams.', significance: 'The Solomonic gold of prophetic theology — the heart of all Old Testament ethics: God desires obedience, not religiosity.' },
      { reference: '1 Samuel 16:7', text: 'Man looketh on the outward appearance, but the LORD looketh on the heart.', significance: 'Said at David\'s anointing — one of the most important theological principles in human self-understanding and divine election.' },
    ],
    traits: ['Prayerful', 'Obedient from childhood', 'Prophetically accurate', 'Courageous before kings', 'Mourning-prone (deep emotional connection to those he served)', 'Just and impartial as a judge'],
    failures: [
      'His own sons Joel and Abijah "turned aside after lucre, took bribes, and perverted judgment" — a parental failure analogous to Eli (1 Samuel 8:1-3)',
    ],
    faithLessons: [
      '"Speak, LORD, for your servant hears" — availability is the beginning of prophetic ministry',
      'Obedience to God\'s word matters more than impressive religious performance',
      'Praying parents shape destinies — Hannah\'s prayer gave Israel its greatest transitional prophet',
      'God looks at the heart, not external impressiveness — this principle should govern every assessment of people',
      'Faithful leaders grieve their failures deeply — Samuel mourned for Saul, as God Himself grieved (1 Samuel 15:35)',
    ],
    typologyOfChrist: `Samuel's birth to a barren woman through prayer (like Isaac, like John the Baptist) is part of the miraculous-birth pattern that culminates in Christ's virgin birth. As Samuel stood between the period of Judges and the monarchy — announcing and anointing the king — so John the Baptist stood between the Testaments announcing Christ the King. Samuel's anointing of David prefigures God the Father's declaration "This is my beloved Son" at Jesus' baptism. Samuel's intercessory role (1 Samuel 7:5 — "I will pray for you to the LORD") and his role as prophet, priest, and judge foreshadows Christ's threefold office.`,
    theologicalSignificance: `Samuel represents the prophetic office at its most foundational. He established "schools of prophets" (1 Samuel 19:20) that became the training institutions for the prophetic movement in Israel. His theology of obedience-over-sacrifice (15:22) is the root of prophetic critique of mere ritual religion that runs through Amos, Hosea, Isaiah, and Micah. His role in anointing David makes him the indirect originator of the Davidic covenant and the messianic line.`,
    timeline: [
      { event: 'Born to Hannah after her prayer; dedicated to the LORD', reference: '1 Samuel 1:20-28', year: '~1105 BC' },
      { event: 'Ministers before the LORD as a child under Eli', reference: '1 Samuel 2:11' },
      { event: 'Receives call from the LORD; delivers judgment oracle against Eli\'s house', reference: '1 Samuel 3:1-18', year: '~1090 BC' },
      { event: 'Recognized as prophet throughout Israel', reference: '1 Samuel 3:20' },
      { event: 'Leads Israel in repentance at Mizpah; Philistines defeated', reference: '1 Samuel 7:5-13' },
      { event: 'Israel demands a king; God grants the request through Samuel', reference: '1 Samuel 8', year: '~1050 BC' },
      { event: 'Anoints Saul as first king of Israel', reference: '1 Samuel 10:1' },
      { event: 'Rebukes Saul for unauthorized sacrifice at Gilgal', reference: '1 Samuel 13:8-14' },
      { event: 'Declares Saul\'s rejection for sparing Agag', reference: '1 Samuel 15:10-31' },
      { event: 'Anoints David as king-elect in Bethlehem', reference: '1 Samuel 16:12-13', year: '~1025 BC' },
      { event: 'Dies; all Israel mourns; buried at Ramah', reference: '1 Samuel 25:1', year: '~1020 BC' },
    ],
    relationships: ['Hannah (mother)', 'Elkanah (father)', 'Eli (mentor and priestly guardian)', 'Saul (anointed and rejected)', 'David (anointed king)'],
    relatedCharacters: ['david', 'moses', 'elijah', 'john-the-baptist'],
  },

  // ── JOB ──────────────────────────────────────────────────────────────────
  {
    id: 'job',
    name: 'Job',
    hebrewGreek: 'אִיּוֹב',
    transliteration: 'Iyyov',
    nameMeaning: 'Persecuted / Hated / Where is my father?',
    testament: 'OT',
    category: 'Patriarch',
    era: 'Patriarchal (~2100–1800 BC)',
    keyBooks: ['Job', 'Ezekiel', 'James'],
    oneLiner: 'The man who suffered without explanation, wrestled with God in the darkness, and emerged vindicated — the supreme biblical model of suffering faith.',
    biography: `Job was a man of incomparable character — "blameless and upright, one who feared God and turned away from evil" (Job 1:1). He was also enormously wealthy: seven sons, three daughters, seven thousand sheep, three thousand camels, five hundred pairs of oxen, five hundred female donkeys, and very many servants. He was "the greatest of all the people of the east."

Then came the cosmic courtroom scene: the accuser (the satan, meaning "adversary") presenting himself before God and challenging the authenticity of Job's faith. "Does Job fear God for no reason? Have you not put a hedge around him and his house and all that he has?" The implication: Job\'s piety was purchased, not genuine. God\'s response was to allow the accuser to test Job — first by removing all his wealth and children, then (in a second wave) by afflicting Job himself with painful sores from head to foot.

In a single day, Job lost everything. His response is one of the most magnificent in all of Scripture: "The LORD gave, and the LORD has taken away; blessed be the name of the LORD." In all this, Job did not sin or charge God with wrong.

Then began the long darkness of Job's suffering. His three friends — Eliphaz, Bildad, and Zophar — sat with him in silence for seven days, which is their finest hour. Then they opened their mouths and spent thirty-six chapters systematically arguing the retributive theology of their time: your suffering proves your sin. Their arguments are sophisticated, their poetry beautiful, and their theology wrong.

Job's response is a sustained, passionate, sometimes shocking argument with God. He accuses God of being his enemy, of hiding from him, of unjust treatment. Yet even in his darkest speeches, Job insists on bringing his case directly to God — not abandoning faith but refusing to let go of God even in his bewilderment. "Though he slay me, yet will I trust in him" (13:15). His famous cry from the depths: "I know that my Redeemer lives, and at the last he will stand upon the earth" (19:25) is one of the most luminous moments of faith in the entire Bible.

The resolution comes not in an explanation but in a theophany: God speaks from the whirlwind. The divine speeches (chapters 38-41) are an overwhelming tour of creation — the foundation of the earth, the morning stars, the Pleiades, the leviathan. God's point is not cruelty but glory: there is a vast, ordered reality that Job cannot perceive, and within that reality, his suffering has a place. Job repents "in dust and ashes" — not for sin, but for speaking about things beyond his comprehension. Then God rebukes the friends, vindicates Job, and restores his fortunes double.`,
    historicalContext: `Job's setting appears to be the Patriarchal period, outside the Israelite covenant structure — his land of Uz may be in Edom or northern Arabia, and he offers sacrifices himself (without a priest), consistent with pre-Mosaic practice. There are no references to the Exodus, the Law, or the Temple. The book addresses questions universal to all humans across all cultures: why do the righteous suffer? Is faith mercenary? Can God be trusted when His ways are incomprehensible? The retribution theology of Job's friends was not unique to Israel — similar ideas appear in Babylonian wisdom literature (the Babylonian Job, "Ludlul bel nemeqi"). The book of Job deliberately engages and ultimately dismantles simplistic retributive theology.`,
    keyScriptures: [
      { reference: 'Job 1:21', text: 'The LORD gave, and the LORD hath taken away; blessed be the name of the LORD.', significance: 'The most God-glorifying response to total loss in all of Scripture — worship without explanation.' },
      { reference: 'Job 13:15', text: 'Though he slay me, yet will I trust in him: but I will maintain mine own ways before him.', significance: 'The paradox of faith under suffering — trust held simultaneously with complaint and self-advocacy.' },
      { reference: 'Job 19:25', text: 'For I know that my redeemer liveth, and that he shall stand at the latter day upon the earth.', significance: 'One of the most remarkable messianic confessions in the OT — a resurrection and redeemer hope articulated from the depths of suffering.' },
      { reference: 'Job 38:4', text: 'Where wast thou when I laid the foundation of the earth? declare, if thou hast understanding.', significance: 'God\'s answer to Job — not an explanation of suffering but an encounter with divine majesty that reframes the question entirely.' },
    ],
    traits: ['Blameless and upright', 'Generous (cared for the poor, widows, orphans)', 'Honest in prayer', 'Persistent in seeking God', 'Ultimately humble before divine mystery'],
    failures: [
      'His speeches, while understandable, at times accused God of injustice ("He has made me a byword of the peoples" — 17:6)',
      'God rebuked Job for "darkening counsel by words without knowledge" (Job 38:2), though ultimately vindicating him over the friends',
    ],
    faithLessons: [
      'Suffering is not always punishment — God permits suffering for purposes beyond human sight',
      'Honest lament before God is not faithlessness; bringing raw pain to God honors Him more than polished pretense',
      'Simplistic theology (good deeds = good outcomes) is refuted by both Job\'s life and Jesus\'s cross',
      '"Though he slay me, yet will I trust in him" — faith anchored in the character of God, not in circumstances',
      'God sometimes answers suffering not with explanation but with encounter — and encounter is enough',
    ],
    typologyOfChrist: `Job is a profound type of Christ in his role as the suffering innocent. As Job suffered without sin being the cause, so Christ suffered entirely without sin — the only truly innocent man. Job's cry "I know that my Redeemer lives" (19:25) points forward to Christ as the Go'el (kinsman-redeemer) who stands on the earth at the resurrection. The heavenly courtroom scene of Job 1-2 parallels the cosmic dimension of the atonement: Satan accuses; God vindicates; the innocent one suffers while the accuser is ultimately defeated. Job's twofold restoration (receiving back double, Job 42:10) typifies the eschatological reversal Christ brings — beauty for ashes, the oil of joy for mourning (Isaiah 61:3).`,
    theologicalSignificance: `Job is the Bible's most sustained treatment of theodicy (the problem of evil and suffering in a world governed by a good God). It demolishes retributive theology as an explanation for all suffering, making room for the categories of testing, refinement, and mysterious divine purpose. Job's insistence on the direct, unmediated presence of God — "I desire to argue my case before God" — establishes the legitimacy of honest lament as a form of prayer. James 5:11 cites Job's perseverance as the model of endurance: "the Lord is very compassionate and merciful." The book's resolution in a theophany rather than an explanation establishes that the answer to suffering is encounter with God — "now my eye sees you" (42:5).`,
    timeline: [
      { event: 'Lives as the greatest man in the east — blameless, wealthy, worshipful', reference: 'Job 1:1-5', year: '~2000 BC (estimated)' },
      { event: 'The adversary challenges Job\'s integrity before God; God grants permission to test', reference: 'Job 1:6-12' },
      { event: 'All his property and children are destroyed in one day; Job worships', reference: 'Job 1:13-22' },
      { event: 'Second test: Job afflicted with painful sores from head to foot', reference: 'Job 2:7' },
      { event: 'Three friends — Eliphaz, Bildad, Zophar — sit in silence with him seven days', reference: 'Job 2:11-13' },
      { event: 'Job curses the day of his birth; the long debate with his friends begins', reference: 'Job 3' },
      { event: 'Three cycles of debate; young Elihu speaks last', reference: 'Job 4-37' },
      { event: 'God speaks from the whirlwind; two speeches; Job repents', reference: 'Job 38-42:6' },
      { event: 'God rebukes the three friends; vindicates Job; Job prays for his friends', reference: 'Job 42:7-9' },
      { event: 'Fortunes restored double; new children; lives 140 more years', reference: 'Job 42:10-17' },
    ],
    relationships: ['Three friends: Eliphaz (Temanite), Bildad (Shuhite), Zophar (Naamathite)', 'Elihu (young man who speaks last)', 'Wife (who told him to curse God and die)'],
    relatedCharacters: ['moses', 'david', 'paul', 'elijah'],
  },

  // ── DEBORAH ──────────────────────────────────────────────────────────────
  {
    id: 'deborah',
    name: 'Deborah',
    hebrewGreek: 'דְּבוֹרָה',
    transliteration: 'Devorah',
    nameMeaning: 'Bee / Word / Oracle',
    testament: 'OT',
    category: 'Judge / Prophet',
    era: 'Period of Judges (~1200 BC)',
    keyBooks: ['Judges'],
    oneLiner: 'The only female judge in Israel\'s history — prophetess, military strategist, and poet — who led Israel to its greatest military victory in the period of the Judges.',
    biography: `Deborah is introduced with remarkable economy and authority: she was a prophetess, the wife of Lapidoth, and she was judging Israel at that time. She held court under the Palm of Deborah between Ramah and Bethel in the hill country of Ephraim, and the people of Israel came up to her for judgment. No other judge is introduced this way — with a defined, ongoing judicial role and a specific location where the people voluntarily came to her.

Israel had been oppressed for twenty years by Jabin, king of Canaan, and his general Sisera, who commanded nine hundred iron chariots — a formidable military force. The nation cried out to God. Deborah sent for Barak son of Abinoam from Kedesh-naphtali and delivered God's command: take ten thousand men to Mount Tabor, and God would give Sisera into his hand.

Barak's response has been both criticized and understood: "If you will go with me, I will go, but if you will not go with me, I will not go" (Judges 4:8). Deborah agreed to go, but told Barak the honor of killing Sisera would go to a woman — a word fulfilled when Jael drove a tent peg through Sisera's temple.

The battle was a rout. The stars fought from heaven; the river Kishon swept the chariots away (Judges 5:20-21). Sisera fled on foot and was killed by Jael. The land had rest for forty years.

Deborah and Barak then sang one of the oldest poems in the Bible — the Song of Deborah (Judges 5) — a magnificent victory ode comparable in antiquity and power to the Song of Moses (Exodus 15). The song celebrates God's intervention, names the tribes who fought and those who stayed home, describes the battle, recounts Jael\'s act, and closes with a devastating picture of Sisera\'s mother waiting for a son who will never return.

Deborah is called "a mother in Israel" (Judges 5:7) — a title of highest honor, indicating her role as national nurturer, protector, and leader.`,
    historicalContext: `The period of Judges (~1200-1050 BC) was one of cyclical faithlessness: Israel worshipped Canaanite gods, was oppressed by enemies, cried out to God, and was delivered by a judge — only to repeat the cycle. The Canaanite threat in Deborah's day was centered in the Jezreel Valley, the great agricultural and military corridor of Canaan. Iron chariots gave the Canaanites a decisive technological advantage on open ground — which makes the battle's outcome in Israel's favor all the more miraculous. Deborah's leadership challenges ancient Near Eastern norms: women in leadership roles were rare in political and military contexts, making her calling all the more remarkable.`,
    keyScriptures: [
      { reference: 'Judges 4:4', text: 'And Deborah, a prophetess, the wife of Lapidoth, she judged Israel at that time.', significance: 'The authoritative introduction — no apology, no qualification. Israel\'s only female judge introduced simply as prophetess and judge.' },
      { reference: 'Judges 5:7', text: 'The inhabitants of the villages ceased, they ceased in Israel, until that I Deborah arose, that I arose a mother in Israel.', significance: 'Her self-description — "mother in Israel" — the highest leadership title for a woman in Hebrew culture.' },
      { reference: 'Judges 5:31', text: 'So let all thine enemies perish, O LORD: but let them that love him be as the sun when he goeth forth in his might.', significance: 'The close of the Song of Deborah — one of Scripture\'s most beautiful images of the righteous person: radiant as the rising sun.' },
    ],
    traits: ['Prophetically gifted', 'Judicially wise', 'Courageous', 'Poetically brilliant', 'Spiritually decisive', '"Mother in Israel"'],
    failures: ['Scripture records no failure for Deborah'],
    faithLessons: [
      'God calls whom He chooses — gender does not limit His use of a life fully surrendered to Him',
      'Leadership in crisis requires courage to act on God\'s word when others hesitate',
      'Victory belongs to God; human instruments should not seek personal glory',
      'The Song of Deborah models the right response to God\'s deliverance: immediate, poetic worship',
      'A "mother in Israel" — one who nurtures, protects, and leads — is one of the highest callings available',
    ],
    typologyOfChrist: `Deborah does not primarily typify Christ but participates in a pattern: she is a judge who delivers Israel from oppression, a theme that runs through all the judges and ultimately finds its fulfillment in Christ the ultimate Judge-Deliverer. Her combination of prophetic, judicial, and military roles in one person anticipates the threefold office of Christ (Prophet, Priest, King). The fact that Sisera was ultimately killed by a woman (Jael) echoes the protoevangelium (Genesis 3:15 — "her seed shall crush your head"), a recurring biblical motif of the seemingly weak defeating the powerful enemy.`,
    theologicalSignificance: `Deborah demonstrates that the Spirit of God is not constrained by gender in calling and equipping His servants. She is the only judge in Israel who was a woman, and also the only one described simultaneously as a prophet, judge, and military strategist. Her story, preserved without embarrassment or special pleading in the canon, is a theological statement about divine sovereignty in choosing instruments. The Song of Deborah (Judges 5) is one of the oldest Hebrew poems in the Bible and is studied as a window into early Israelite theology, language, and culture.`,
    timeline: [
      { event: 'Judging Israel from under the Palm of Deborah', reference: 'Judges 4:4-5', year: '~1200 BC' },
      { event: 'Receives divine command to summon Barak', reference: 'Judges 4:6-7' },
      { event: 'Accompanies Barak to Mount Tabor with ten thousand men', reference: 'Judges 4:9-10' },
      { event: 'Israel defeats Sisera\'s army; Sisera flees', reference: 'Judges 4:15-17' },
      { event: 'Jael kills Sisera with a tent peg', reference: 'Judges 4:21' },
      { event: 'Deborah and Barak sing the Song of Deborah', reference: 'Judges 5' },
      { event: 'Land has rest for forty years', reference: 'Judges 5:31' },
    ],
    relationships: ['Lapidoth (husband)', 'Barak son of Abinoam (military commander)', 'Jael wife of Heber (who killed Sisera)'],
    relatedCharacters: ['moses', 'samuel', 'elijah', 'esther'],
  },

  // ── STEPHEN ──────────────────────────────────────────────────────────────
  {
    id: 'stephen',
    name: 'Stephen',
    hebrewGreek: 'Στέφανος',
    transliteration: 'Stephanos',
    nameMeaning: 'Crown / Wreath',
    testament: 'NT',
    category: 'Martyr / Deacon',
    era: 'Early Church (~AD 33–34)',
    keyBooks: ['Acts'],
    oneLiner: 'The first Christian martyr, whose death scattered the church into the world and whose accuser Saul of Tarsus became the apostle Paul — a death that proved more fruitful than most lives.',
    biography: `Stephen appears suddenly in Acts 6 as one of seven men chosen to administer the distribution of food to Greek-speaking Jewish widows who were being neglected in the Jerusalem church. The qualifications stated were "of good reputation, full of the Spirit and of wisdom." Stephen is described immediately as "a man full of faith and of the Holy Spirit" — and then as performing "great wonders and signs among the people."

His opponents from the Synagogue of the Freedmen (Hellenistic Jews from Cyrene, Alexandria, Cilicia, and Asia) could not withstand the wisdom and the Spirit with which he spoke. Unable to win the argument, they suborned false witnesses to charge him with blasphemy against Moses and God — an eerie echo of the false witnesses at Jesus's trial.

Before the Sanhedrin, Stephen delivered what is arguably the most sweeping theological address in Acts and one of the longest speeches in the New Testament (Acts 7, 52 verses). His address is a comprehensive retelling of Israel's history — Abraham, Joseph, Moses, the Tabernacle, Solomon and the Temple — building to a devastating climax: Israel has always resisted the Holy Spirit, always killed the prophets, and now has betrayed and murdered the Righteous One, Jesus.

The Sanhedrin erupted in rage. But Stephen, "full of the Holy Spirit, gazed into heaven and saw the glory of God, and Jesus standing at the right hand of God." He declared what he saw. They rushed him out of the city and stoned him. His last words echoed Christ's: "Lord Jesus, receive my spirit" and "Lord, do not hold this sin against them" — forgiveness for his murderers.

The text records that "the witnesses laid down their garments at the feet of a young man named Saul" (Acts 7:58). Saul "was consenting to his death" (8:1). Yet seeds were being sown. Some scholars suggest Stephen's speech and death were among the factors that God used in the eventual conversion of Paul. The subsequent scattering of the church because of persecution led to the gospel reaching Judea, Samaria, and the uttermost parts of the earth — exactly as Jesus had commanded in Acts 1:8.`,
    historicalContext: `The "Hellenists" (Acts 6:1) were Greek-speaking Jewish Christians, likely from the Diaspora who had returned to Jerusalem. Their conflict with the "Hebrews" (Aramaic-speaking Jewish Christians) over widow care reflects real ethnic and linguistic tensions in the early Jerusalem church. The Synagogue of the Freedmen likely included descendants of Jews taken captive to Rome by Pompey in 63 BC who had been freed. Stephen's execution by stoning followed the prescribed Mosaic penalty for blasphemy (Leviticus 24:14-16). Remarkably, the normal Roman prohibition against Jewish capital punishment (John 18:31) was apparently overlooked — suggesting either a mob action or a period when Roman oversight was absent (Pontius Pilate had temporarily been recalled to Rome, ~AD 33-35).`,
    keyScriptures: [
      { reference: 'Acts 6:15', text: 'And all that sat in the council, looking stedfastly on him, saw his face as it had been the face of an angel.', significance: 'The divine radiance on Stephen\'s face — like Moses at Sinai — signals that he stood in the presence of God.' },
      { reference: 'Acts 7:56', text: 'Behold, I see the heavens opened, and the Son of man standing on the right hand of God.', significance: 'The only place in the NT (outside Revelation) where Jesus is seen standing (not seated) at God\'s right hand — rising to receive His first martyr.' },
      { reference: 'Acts 7:60', text: 'And he kneeled down, and cried with a loud voice, Lord, lay not this sin to their charge. And when he had said this, he fell asleep.', significance: 'The Christlike forgiveness of his murderers — the pattern of the cross reproduced in His servant.' },
    ],
    traits: ['Full of faith', 'Full of the Holy Spirit', 'Wise and eloquent', 'Fearless in proclamation', 'Forgiving at death', 'Theologically brilliant in his history of Israel'],
    failures: ['No failure recorded — Stephen is one of Scripture\'s few characters presented without moral compromise'],
    faithLessons: [
      'Faithfulness in small things (serving tables) leads to greater spiritual responsibility',
      'The Spirit gives wisdom that arguments cannot overcome',
      'A martyr\'s death is not a tragedy in God\'s economy — it scatters the seed of the gospel',
      'Forgiveness of enemies is the most Christlike response in any suffering',
      'Seeing Jesus clearly gives courage to face death without fear',
    ],
    typologyOfChrist: `Stephen's martyrdom is deliberately modeled on Christ's passion: false witnesses, trial before the Sanhedrin, charge of attacking the Temple, final prayer to Jesus ("receive my spirit" parallels Luke 23:46 "into your hands I commit my spirit"), and intercession for his killers (parallels Luke 23:34). His death is a reenactment of Christ's — the servant suffering as his master suffered. The crown (stephanos) of his name is the crown of martyrdom that Christ promised to the faithful (Revelation 2:10).`,
    theologicalSignificance: `Stephen's death marks the decisive transition of Christianity from a Jerusalem-centered Jewish movement to a world-crossing faith. The scattering of Acts 8:1 is the fulfillment of Acts 1:8. His speech (Acts 7) is the New Testament's fullest engagement with Jewish history and is a theological watershed: the Temple is not the permanent dwelling of God (Acts 7:48-50, quoting Isaiah 66:1-2); the Spirit cannot be confined to a building — He moves where He will. His death also providentially positioned Saul of Tarsus as a witness, potentially planting seeds that bore fruit at his Damascus Road conversion.`,
    timeline: [
      { event: 'Chosen as one of seven deacons to serve the Hellenistic widows', reference: 'Acts 6:5', year: '~AD 33' },
      { event: 'Performs great signs and wonders among the people', reference: 'Acts 6:8' },
      { event: 'Debates in the Synagogue of the Freedmen; opponents cannot refute him', reference: 'Acts 6:9-10' },
      { event: 'False witnesses brought; charged with blasphemy', reference: 'Acts 6:11-14' },
      { event: 'Face shines like an angel before the Sanhedrin', reference: 'Acts 6:15' },
      { event: 'Delivers the great speech reviewing Israel\'s history', reference: 'Acts 7:1-53' },
      { event: 'Sees the heavens opened and Jesus standing at God\'s right hand', reference: 'Acts 7:55-56' },
      { event: 'Stoned outside the city; Saul consents; Stephen forgives', reference: 'Acts 7:57-60', year: '~AD 34' },
      { event: 'Persecution scatters church; gospel spreads to Judea and Samaria', reference: 'Acts 8:1-4' },
    ],
    relationships: ['Saul/Paul (witness to his martyrdom; later converted)', 'Philip (fellow deacon)', 'The Jerusalem apostles (who appointed him)', 'The Sanhedrin and High Priest (accusers)'],
    relatedCharacters: ['paul', 'peter', 'john-the-baptist'],
  },

  // ── JOHN THE APOSTLE ──────────────────────────────────────────────────────
  {
    id: 'john',
    name: 'John the Apostle',
    hebrewGreek: 'Ἰωάννης',
    transliteration: 'Iōannēs',
    nameMeaning: 'God is gracious / The LORD has been gracious',
    testament: 'NT',
    category: 'Apostle',
    era: 'New Testament (~AD 27–100)',
    keyBooks: ['John', '1 John', '2 John', '3 John', 'Revelation'],
    oneLiner: 'The "beloved disciple," fisherman turned theologian — who witnessed the Transfiguration, the Last Supper, and the resurrection, and who gave the Church its deepest theology of love and incarnation.',
    biography: `John was the son of Zebedee, a Galilean fisherman, and Salome (likely a sister of Jesus's mother, making John Jesus's cousin). With his brother James, he was called from mending fishing nets — and their decisive leave-taking ("they immediately left the boat and their father and followed him") set the tone for a life of radical discipleship.

Jesus named John and James "Boanerges" — sons of thunder (Mark 3:17). The nickname captures their early temperament: they asked Jesus to command fire from heaven on a Samaritan village (Luke 9:54), and they sent their mother to ask for the seats of honor in the kingdom (Matthew 20:20-24). They were ambitious, passionate, and sometimes misguided — entirely human.

But John was also the disciple "whom Jesus loved" (John 13:23; 19:26; 20:2; 21:7,20). He reclined next to Jesus at the Last Supper. He alone among the twelve was present at the crucifixion, where Jesus entrusted His mother to John's care: "Woman, behold your son!...Behold your mother!" (John 19:26-27). From that moment, John took Mary into his own home.

John was among the inner three (Peter, James, John) who witnessed the Transfiguration on the mountain (Matthew 17:1-8), who were closest to Jesus in Gethsemane (Matthew 26:37), and who ran to the tomb on resurrection morning (John 20:3-8).

After Pentecost, John was a pillar of the Jerusalem church (Galatians 2:9). He and Peter healed the lame man at the Temple gate (Acts 3) and were imprisoned together (Acts 4). His later ministry was centered at Ephesus, where tradition says he cared for Mary until her death and was later exiled to the island of Patmos during Domitian's persecution.

On Patmos he received the Revelation — the culminating vision of all biblical prophecy. The aged John, who had walked with Jesus as a young man, saw His glory in apocalyptic fullness and fell as dead at His feet. The one who had rested on Jesus's breast at supper now prostrated himself before the glorified Christ.

John is the only apostle not martyred — he died of old age in Ephesus, "the beloved disciple" to the end. His epistles, written in great age, return again and again to one theme: "Beloved, let us love one another, for love is from God" (1 John 4:7).`,
    historicalContext: `Zebedee's fishing business on the Sea of Galilee was apparently substantial enough to employ hired workers (Mark 1:20), suggesting John's family was not destitute. Salome's presence at the crucifixion and her possible kinship to Mary would explain John's access to the High Priest's courtyard (John 18:16 — he was "known to the high priest"). John's Ephesian ministry (~AD 65-100) placed him in one of the Roman Empire's greatest cities. Eusebius and Irenaeus both report John living in Ephesus until extreme old age. His exile to Patmos (Revelation 1:9) fits the Domitian persecution (~AD 95-96). John's Gospel, written late (likely AD 85-95), shows a distinctly theological character compared to the synoptics — reflecting sixty years of meditating on Jesus.`,
    keyScriptures: [
      { reference: 'John 1:1', text: 'In the beginning was the Word, and the Word was with God, and the Word was God.', significance: 'The most theologically dense opening in all Scripture — John\'s Logos prologue establishes the eternal pre-existence and full deity of Christ.' },
      { reference: 'John 13:34', text: 'A new commandment I give unto you, That ye love one another; as I have loved you, that ye also love one another.', significance: 'The core of John\'s entire theological witness — agape love as the defining mark of the Christian community.' },
      { reference: '1 John 4:8', text: 'He that loveth not knoweth not God; for God is love.', significance: 'John\'s ultimate theological summary — not just that God loves but that love is His very nature (ontology, not merely attribute).' },
      { reference: 'Revelation 1:17-18', text: 'And when I saw him, I fell at his feet as dead. And he laid his right hand upon me, saying unto me, Fear not; I am the first and the last: I am he that liveth, and was dead; and, behold, I am alive for evermore.', significance: 'The glorified Christ\'s self-disclosure — the "beloved disciple" who knew Jesus intimately now beholds His transcendent glory.' },
    ],
    traits: ['Deeply contemplative', 'Loving', 'Theologically profound', 'Loyal (present at the cross)', 'Initially passionate and ambitious', 'Eventually characterized entirely by love'],
    failures: [
      'Ambition: sent his mother to ask for the seats of honor at Jesus\'s right and left (Matthew 20:20-24)',
      'Intolerance: rebuked a man casting out demons in Jesus\'s name because "he does not follow with us" (Luke 9:49)',
      'Sectarianism: wanted to call fire down on the Samaritan village (Luke 9:54)',
    ],
    faithLessons: [
      'The "sons of thunder" become the apostle of love — character transformation is possible under the influence of Jesus',
      'Being loved by Jesus is the foundation of all authentic ministry — not performance but relationship',
      'Love is not merely an emotion but the defining ontological reality of God\'s nature and the Christian community',
      'The most theological insights come from those who were closest to Jesus personally',
      'Old age in Christ can be characterized by greater love and deeper simplicity: "little children, love one another"',
    ],
    typologyOfChrist: `John's Gospel presents the most fully developed Christology in the New Testament. The Logos (Word) theology of John 1 identifies Jesus as the pre-existent, creator-mediating, incarnate God — drawing on both Old Testament Wisdom literature and Hellenistic philosophy. John's seven "I AM" statements (bread of life, light of the world, gate, good shepherd, resurrection and life, way/truth/life, true vine) are systematic self-disclosures by Jesus of His divine identity. John 3:16 is the gospel in miniature: God's love, the gift of the Son, faith, eternal life.`,
    theologicalSignificance: `John's five writings (Gospel, three epistles, Revelation) form the most theologically unified corpus in the New Testament, organized around the themes of light/darkness, love, eternal life, truth, and the Word. His Logos Christology (John 1) became foundational for all subsequent Trinitarian theology. His incarnation theology ("the Word became flesh and dwelt among us," 1:14) is the supreme statement of the Incarnation. His "God is love" (1 John 4:8,16) is the most compact theological summary of the divine nature. Revelation's cosmic vision ties the entire arc of Scripture — from "in the beginning" (Genesis 1:1 / John 1:1) to "behold, I make all things new" (Revelation 21:5).`,
    timeline: [
      { event: 'Called from his fishing nets with brother James', reference: 'Matthew 4:21-22', year: '~AD 27' },
      { event: 'Named "Boanerges" (son of thunder) among the twelve apostles', reference: 'Mark 3:17' },
      { event: 'Present at the Transfiguration with Peter and James', reference: 'Matthew 17:1-8', year: '~AD 29' },
      { event: 'Mother asks for seats of honor; Jesus teaches servant leadership', reference: 'Matthew 20:20-28' },
      { event: 'Reclines next to Jesus at the Last Supper', reference: 'John 13:23', year: 'AD 33' },
      { event: 'Present at Gethsemane; sleeps while Jesus prays', reference: 'Matthew 26:36-41' },
      { event: 'At the cross; receives Mary as mother by Jesus\'s command', reference: 'John 19:26-27' },
      { event: 'Races Peter to the empty tomb; believes', reference: 'John 20:2-8' },
      { event: 'Pillar of the Jerusalem church with Peter and James', reference: 'Galatians 2:9', year: '~AD 48' },
      { event: 'Heals lame man with Peter at the Temple; imprisoned', reference: 'Acts 3-4' },
      { event: 'Ministry in Ephesus; cares for Mary', reference: 'Eusebius, Ecclesiastical History', year: '~AD 65' },
      { event: 'Exiled to Patmos; receives Revelation', reference: 'Revelation 1:9', year: '~AD 95' },
      { event: 'Dies of natural causes in Ephesus — the only apostle not martyred', reference: 'Eusebius', year: '~AD 100' },
    ],
    relationships: ['Zebedee (father)', 'Salome (mother)', 'James (brother, martyred by Herod Agrippa)', 'Mary the mother of Jesus (entrusted to his care)', 'Peter (closest companion in ministry)'],
    relatedCharacters: ['peter', 'paul', 'james', 'mary', 'john-the-baptist'],
  },
];

export const CHARACTER_CATEGORIES = [
  'Patriarch', 'King / Poet / Sage', 'Prophet', 'Apostle', 'Judge / Prophet', 'Military Leader / Prophet', 'Disciple', 'Martyr / Deacon', 'Queen', 'Other',
];

export const ALL_CHARACTER_IDS = CHARACTERS.map(c => c.id);

export function getCharacterById(id: string): Character | undefined {
  return CHARACTERS.find(c => c.id === id);
}

// Summary list for the characters page
export const CHARACTER_SUMMARIES = CHARACTERS.map(({ id, name, hebrewGreek, nameMeaning, testament, category, era, oneLiner, keyBooks }) => ({
  id, name, hebrewGreek, nameMeaning, testament, category, era, oneLiner, keyBooks,
}));
