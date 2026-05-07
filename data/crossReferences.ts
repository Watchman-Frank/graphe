export interface CrossRef {
  ref: string;  // "{bookId}+{chapter}:{verse}" — matches app book IDs
  label: string; // display label e.g. "John 3:16"
}

// Keys use app book IDs (no spaces): "john+3:16", "1corinthians+13:4"
export const CROSS_REFERENCES: Record<string, CrossRef[]> = {
  // ── GENESIS 1 ──────────────────────────────────────────────────────────────
  'genesis+1:1': [
    { ref: 'john+1:1', label: 'John 1:1' },
    { ref: 'hebrews+11:3', label: 'Heb 11:3' },
    { ref: 'colossians+1:16', label: 'Col 1:16' },
  ],
  'genesis+1:2': [
    { ref: 'psalms+104:30', label: 'Ps 104:30' },
    { ref: 'genesis+8:1', label: 'Gen 8:1' },
  ],
  'genesis+1:3': [
    { ref: '2corinthians+4:6', label: '2 Cor 4:6' },
    { ref: 'psalms+33:6', label: 'Ps 33:6' },
  ],
  'genesis+1:26': [
    { ref: 'colossians+1:15', label: 'Col 1:15' },
    { ref: 'james+3:9', label: 'Jas 3:9' },
  ],
  'genesis+1:27': [
    { ref: 'matthew+19:4', label: 'Matt 19:4' },
    { ref: 'mark+10:6', label: 'Mark 10:6' },
  ],
  'genesis+1:31': [
    { ref: '1timothy+4:4', label: '1 Tim 4:4' },
    { ref: 'ecclesiastes+7:29', label: 'Eccl 7:29' },
  ],
  'genesis+3:15': [
    { ref: 'revelation+12:17', label: 'Rev 12:17' },
    { ref: 'galatians+4:4', label: 'Gal 4:4' },
  ],
  'genesis+5:24': [
    { ref: 'hebrews+11:5', label: 'Heb 11:5' },
    { ref: 'jude+1:14', label: 'Jude 1:14' },
  ],
  'genesis+12:1': [
    { ref: 'hebrews+11:8', label: 'Heb 11:8' },
    { ref: 'acts+7:2', label: 'Acts 7:2' },
  ],
  'genesis+15:6': [
    { ref: 'romans+4:3', label: 'Rom 4:3' },
    { ref: 'galatians+3:6', label: 'Gal 3:6' },
    { ref: 'james+2:23', label: 'Jas 2:23' },
  ],
  'genesis+22:16': [
    { ref: 'hebrews+6:13', label: 'Heb 6:13' },
    { ref: 'romans+8:32', label: 'Rom 8:32' },
  ],
  'genesis+50:20': [
    { ref: 'romans+8:28', label: 'Rom 8:28' },
    { ref: 'acts+2:23', label: 'Acts 2:23' },
  ],

  // ── PSALMS ──────────────────────────────────────────────────────────────────
  'psalms+23:1': [
    { ref: 'john+10:11', label: 'John 10:11' },
    { ref: 'hebrews+13:20', label: 'Heb 13:20' },
    { ref: 'isaiah+40:11', label: 'Isa 40:11' },
  ],
  'psalms+23:2': [
    { ref: 'revelation+7:17', label: 'Rev 7:17' },
    { ref: 'ezekiel+34:14', label: 'Ezek 34:14' },
  ],
  'psalms+23:3': [
    { ref: 'matthew+18:11', label: 'Matt 18:11' },
    { ref: 'proverbs+8:20', label: 'Prov 8:20' },
  ],
  'psalms+23:4': [
    { ref: 'isaiah+43:2', label: 'Isa 43:2' },
    { ref: 'romans+8:35', label: 'Rom 8:35' },
    { ref: 'deuteronomy+31:6', label: 'Deut 31:6' },
  ],
  'psalms+23:5': [
    { ref: 'luke+22:20', label: 'Luke 22:20' },
    { ref: 'romans+8:31', label: 'Rom 8:31' },
  ],
  'psalms+23:6': [
    { ref: 'john+14:2', label: 'John 14:2' },
    { ref: 'revelation+22:5', label: 'Rev 22:5' },
  ],
  'psalms+27:14': [
    { ref: 'isaiah+40:31', label: 'Isa 40:31' },
    { ref: 'romans+8:25', label: 'Rom 8:25' },
  ],
  'psalms+33:6': [
    { ref: 'genesis+1:3', label: 'Gen 1:3' },
    { ref: 'hebrews+11:3', label: 'Heb 11:3' },
  ],
  'psalms+37:5': [
    { ref: 'proverbs+3:5', label: 'Prov 3:5' },
    { ref: '1peter+5:7', label: '1 Pet 5:7' },
  ],
  'psalms+46:1': [
    { ref: 'hebrews+13:6', label: 'Heb 13:6' },
    { ref: 'isaiah+41:10', label: 'Isa 41:10' },
  ],
  'psalms+51:10': [
    { ref: 'ezekiel+36:26', label: 'Ezek 36:26' },
    { ref: '2corinthians+5:17', label: '2 Cor 5:17' },
  ],
  'psalms+103:12': [
    { ref: 'micah+7:19', label: 'Mic 7:19' },
    { ref: 'isaiah+43:25', label: 'Isa 43:25' },
  ],
  'psalms+119:105': [
    { ref: '2timothy+3:16', label: '2 Tim 3:16' },
    { ref: 'proverbs+6:23', label: 'Prov 6:23' },
  ],

  // ── PROVERBS ────────────────────────────────────────────────────────────────
  'proverbs+3:5': [
    { ref: 'psalms+37:5', label: 'Ps 37:5' },
    { ref: 'isaiah+55:8', label: 'Isa 55:8' },
  ],
  'proverbs+3:6': [
    { ref: 'psalms+25:9', label: 'Ps 25:9' },
    { ref: 'romans+8:28', label: 'Rom 8:28' },
  ],

  // ── ISAIAH ──────────────────────────────────────────────────────────────────
  'isaiah+40:31': [
    { ref: 'psalms+27:14', label: 'Ps 27:14' },
    { ref: 'hebrews+12:1', label: 'Heb 12:1' },
    { ref: '2corinthians+4:16', label: '2 Cor 4:16' },
  ],
  'isaiah+41:10': [
    { ref: 'deuteronomy+31:6', label: 'Deut 31:6' },
    { ref: 'hebrews+13:5', label: 'Heb 13:5' },
  ],
  'isaiah+53:1': [
    { ref: 'john+12:38', label: 'John 12:38' },
    { ref: 'romans+10:16', label: 'Rom 10:16' },
  ],
  'isaiah+53:3': [
    { ref: 'mark+9:12', label: 'Mark 9:12' },
    { ref: 'luke+23:18', label: 'Luke 23:18' },
  ],
  'isaiah+53:4': [
    { ref: 'matthew+8:17', label: 'Matt 8:17' },
    { ref: '1peter+2:24', label: '1 Pet 2:24' },
  ],
  'isaiah+53:5': [
    { ref: 'romans+5:8', label: 'Rom 5:8' },
    { ref: '1peter+2:24', label: '1 Pet 2:24' },
    { ref: '2corinthians+5:21', label: '2 Cor 5:21' },
  ],
  'isaiah+53:6': [
    { ref: 'romans+3:23', label: 'Rom 3:23' },
    { ref: '1peter+2:25', label: '1 Pet 2:25' },
  ],
  'isaiah+53:7': [
    { ref: 'john+1:29', label: 'John 1:29' },
    { ref: 'acts+8:32', label: 'Acts 8:32' },
  ],
  'isaiah+53:10': [
    { ref: 'hebrews+10:10', label: 'Heb 10:10' },
    { ref: 'romans+5:10', label: 'Rom 5:10' },
  ],
  'isaiah+53:12': [
    { ref: 'luke+22:37', label: 'Luke 22:37' },
    { ref: 'hebrews+9:28', label: 'Heb 9:28' },
    { ref: 'mark+15:28', label: 'Mark 15:28' },
  ],
  'isaiah+55:1': [
    { ref: 'john+4:14', label: 'John 4:14' },
    { ref: 'revelation+22:17', label: 'Rev 22:17' },
  ],

  // ── JEREMIAH ────────────────────────────────────────────────────────────────
  'jeremiah+29:11': [
    { ref: 'romans+8:28', label: 'Rom 8:28' },
    { ref: 'philippians+4:6', label: 'Phil 4:6' },
    { ref: 'psalms+37:23', label: 'Ps 37:23' },
  ],
  'jeremiah+31:31': [
    { ref: 'hebrews+8:8', label: 'Heb 8:8' },
    { ref: 'luke+22:20', label: 'Luke 22:20' },
  ],

  // ── MATTHEW ─────────────────────────────────────────────────────────────────
  'matthew+5:3': [
    { ref: 'isaiah+57:15', label: 'Isa 57:15' },
    { ref: 'luke+6:20', label: 'Luke 6:20' },
  ],
  'matthew+5:4': [
    { ref: 'isaiah+61:2', label: 'Isa 61:2' },
    { ref: 'revelation+21:4', label: 'Rev 21:4' },
  ],
  'matthew+5:5': [
    { ref: 'psalms+37:11', label: 'Ps 37:11' },
    { ref: 'isaiah+11:4', label: 'Isa 11:4' },
  ],
  'matthew+5:6': [
    { ref: 'isaiah+55:1', label: 'Isa 55:1' },
    { ref: 'john+6:35', label: 'John 6:35' },
  ],
  'matthew+5:7': [
    { ref: 'matthew+18:33', label: 'Matt 18:33' },
    { ref: 'james+2:13', label: 'Jas 2:13' },
  ],
  'matthew+5:8': [
    { ref: 'psalms+24:4', label: 'Ps 24:4' },
    { ref: '1john+3:2', label: '1 John 3:2' },
  ],
  'matthew+5:9': [
    { ref: 'james+3:18', label: 'Jas 3:18' },
    { ref: 'romans+12:18', label: 'Rom 12:18' },
  ],
  'matthew+5:14': [
    { ref: 'john+8:12', label: 'John 8:12' },
    { ref: 'philippians+2:15', label: 'Phil 2:15' },
  ],
  'matthew+5:17': [
    { ref: 'luke+16:17', label: 'Luke 16:17' },
    { ref: 'romans+3:31', label: 'Rom 3:31' },
  ],
  'matthew+5:44': [
    { ref: 'luke+6:27', label: 'Luke 6:27' },
    { ref: 'romans+12:20', label: 'Rom 12:20' },
  ],
  'matthew+5:48': [
    { ref: 'leviticus+19:2', label: 'Lev 19:2' },
    { ref: '1peter+1:15', label: '1 Pet 1:15' },
  ],
  'matthew+6:9': [
    { ref: 'luke+11:2', label: 'Luke 11:2' },
    { ref: 'john+17:1', label: 'John 17:1' },
  ],
  'matthew+6:33': [
    { ref: 'psalms+37:4', label: 'Ps 37:4' },
    { ref: '1kings+3:13', label: '1 Kgs 3:13' },
  ],
  'matthew+11:28': [
    { ref: 'hebrews+4:3', label: 'Heb 4:3' },
    { ref: 'john+7:37', label: 'John 7:37' },
  ],
  'matthew+28:18': [
    { ref: 'daniel+7:14', label: 'Dan 7:14' },
    { ref: 'ephesians+1:21', label: 'Eph 1:21' },
  ],
  'matthew+28:19': [
    { ref: 'mark+16:15', label: 'Mark 16:15' },
    { ref: 'acts+1:8', label: 'Acts 1:8' },
  ],
  'matthew+28:20': [
    { ref: 'john+14:16', label: 'John 14:16' },
    { ref: 'hebrews+13:5', label: 'Heb 13:5' },
  ],

  // ── JOHN 1 ──────────────────────────────────────────────────────────────────
  'john+1:1': [
    { ref: 'genesis+1:1', label: 'Gen 1:1' },
    { ref: 'colossians+1:17', label: 'Col 1:17' },
    { ref: '1john+1:1', label: '1 John 1:1' },
  ],
  'john+1:3': [
    { ref: 'colossians+1:16', label: 'Col 1:16' },
    { ref: 'hebrews+1:2', label: 'Heb 1:2' },
    { ref: '1corinthians+8:6', label: '1 Cor 8:6' },
  ],
  'john+1:12': [
    { ref: 'romans+8:15', label: 'Rom 8:15' },
    { ref: 'galatians+3:26', label: 'Gal 3:26' },
    { ref: '1john+3:1', label: '1 John 3:1' },
  ],
  'john+1:14': [
    { ref: 'philippians+2:7', label: 'Phil 2:7' },
    { ref: 'colossians+2:9', label: 'Col 2:9' },
    { ref: '1timothy+3:16', label: '1 Tim 3:16' },
  ],
  'john+1:17': [
    { ref: 'romans+6:14', label: 'Rom 6:14' },
    { ref: 'galatians+3:24', label: 'Gal 3:24' },
  ],
  'john+1:29': [
    { ref: 'isaiah+53:7', label: 'Isa 53:7' },
    { ref: 'hebrews+9:26', label: 'Heb 9:26' },
    { ref: 'revelation+5:6', label: 'Rev 5:6' },
  ],

  // ── JOHN 3 ──────────────────────────────────────────────────────────────────
  'john+3:3': [
    { ref: '1peter+1:23', label: '1 Pet 1:23' },
    { ref: 'titus+3:5', label: 'Titus 3:5' },
    { ref: 'james+1:18', label: 'Jas 1:18' },
  ],
  'john+3:5': [
    { ref: 'titus+3:5', label: 'Titus 3:5' },
    { ref: 'acts+2:38', label: 'Acts 2:38' },
    { ref: 'ezekiel+36:25', label: 'Ezek 36:25' },
  ],
  'john+3:6': [
    { ref: 'genesis+6:3', label: 'Gen 6:3' },
    { ref: 'romans+8:7', label: 'Rom 8:7' },
  ],
  'john+3:7': [
    { ref: 'john+3:3', label: 'John 3:3' },
    { ref: 'matthew+18:3', label: 'Matt 18:3' },
  ],
  'john+3:14': [
    { ref: 'numbers+21:9', label: 'Num 21:9' },
    { ref: 'john+12:32', label: 'John 12:32' },
  ],
  'john+3:16': [
    { ref: 'romans+5:8', label: 'Rom 5:8' },
    { ref: '1john+4:9', label: '1 John 4:9' },
    { ref: 'romans+8:32', label: 'Rom 8:32' },
  ],
  'john+3:17': [
    { ref: 'luke+9:56', label: 'Luke 9:56' },
    { ref: '1john+4:14', label: '1 John 4:14' },
  ],
  'john+3:18': [
    { ref: 'john+5:24', label: 'John 5:24' },
    { ref: 'mark+16:16', label: 'Mark 16:16' },
  ],
  'john+3:36': [
    { ref: 'john+5:24', label: 'John 5:24' },
    { ref: 'romans+1:18', label: 'Rom 1:18' },
    { ref: 'hebrews+3:11', label: 'Heb 3:11' },
  ],

  // ── JOHN (other chapters) ────────────────────────────────────────────────────
  'john+10:10': [
    { ref: 'john+10:28', label: 'John 10:28' },
    { ref: 'romans+8:37', label: 'Rom 8:37' },
  ],
  'john+10:11': [
    { ref: 'psalms+23:1', label: 'Ps 23:1' },
    { ref: 'hebrews+13:20', label: 'Heb 13:20' },
  ],
  'john+10:28': [
    { ref: 'romans+8:39', label: 'Rom 8:39' },
    { ref: 'john+17:12', label: 'John 17:12' },
  ],
  'john+11:25': [
    { ref: '1corinthians+15:22', label: '1 Cor 15:22' },
    { ref: 'revelation+1:18', label: 'Rev 1:18' },
  ],
  'john+14:6': [
    { ref: 'acts+4:12', label: 'Acts 4:12' },
    { ref: '1timothy+2:5', label: '1 Tim 2:5' },
    { ref: 'hebrews+10:19', label: 'Heb 10:19' },
  ],
  'john+14:16': [
    { ref: 'john+16:7', label: 'John 16:7' },
    { ref: 'romans+8:26', label: 'Rom 8:26' },
  ],
  'john+14:27': [
    { ref: 'philippians+4:7', label: 'Phil 4:7' },
    { ref: 'isaiah+26:3', label: 'Isa 26:3' },
  ],
  'john+15:5': [
    { ref: 'philippians+4:13', label: 'Phil 4:13' },
    { ref: 'galatians+2:20', label: 'Gal 2:20' },
  ],
  'john+16:33': [
    { ref: 'romans+8:37', label: 'Rom 8:37' },
    { ref: '1john+5:4', label: '1 John 5:4' },
  ],

  // ── ACTS ────────────────────────────────────────────────────────────────────
  'acts+1:8': [
    { ref: 'matthew+28:19', label: 'Matt 28:19' },
    { ref: 'luke+24:48', label: 'Luke 24:48' },
  ],
  'acts+2:38': [
    { ref: 'john+3:5', label: 'John 3:5' },
    { ref: 'romans+6:3', label: 'Rom 6:3' },
  ],
  'acts+4:12': [
    { ref: 'john+14:6', label: 'John 14:6' },
    { ref: '1timothy+2:5', label: '1 Tim 2:5' },
  ],

  // ── ROMANS 8 ────────────────────────────────────────────────────────────────
  'romans+8:1': [
    { ref: 'john+3:18', label: 'John 3:18' },
    { ref: 'galatians+3:28', label: 'Gal 3:28' },
    { ref: 'romans+8:34', label: 'Rom 8:34' },
  ],
  'romans+8:2': [
    { ref: 'galatians+5:1', label: 'Gal 5:1' },
    { ref: 'john+8:36', label: 'John 8:36' },
  ],
  'romans+8:3': [
    { ref: 'hebrews+2:14', label: 'Heb 2:14' },
    { ref: 'philippians+2:7', label: 'Phil 2:7' },
  ],
  'romans+8:6': [
    { ref: 'galatians+5:22', label: 'Gal 5:22' },
    { ref: 'isaiah+26:3', label: 'Isa 26:3' },
  ],
  'romans+8:11': [
    { ref: '1corinthians+15:45', label: '1 Cor 15:45' },
    { ref: 'ezekiel+37:14', label: 'Ezek 37:14' },
  ],
  'romans+8:14': [
    { ref: 'galatians+5:18', label: 'Gal 5:18' },
    { ref: 'psalms+143:10', label: 'Ps 143:10' },
  ],
  'romans+8:15': [
    { ref: 'galatians+4:5', label: 'Gal 4:5' },
    { ref: 'john+1:12', label: 'John 1:12' },
    { ref: '2timothy+1:7', label: '2 Tim 1:7' },
  ],
  'romans+8:16': [
    { ref: 'galatians+4:6', label: 'Gal 4:6' },
    { ref: '1john+3:24', label: '1 John 3:24' },
  ],
  'romans+8:17': [
    { ref: 'galatians+4:7', label: 'Gal 4:7' },
    { ref: 'revelation+21:7', label: 'Rev 21:7' },
  ],
  'romans+8:18': [
    { ref: '2corinthians+4:17', label: '2 Cor 4:17' },
    { ref: '1peter+5:10', label: '1 Pet 5:10' },
  ],
  'romans+8:26': [
    { ref: 'zechariah+12:10', label: 'Zech 12:10' },
    { ref: 'hebrews+7:25', label: 'Heb 7:25' },
  ],
  'romans+8:28': [
    { ref: 'genesis+50:20', label: 'Gen 50:20' },
    { ref: 'philippians+1:6', label: 'Phil 1:6' },
    { ref: 'jeremiah+29:11', label: 'Jer 29:11' },
  ],
  'romans+8:29': [
    { ref: 'colossians+3:10', label: 'Col 3:10' },
    { ref: '1john+3:2', label: '1 John 3:2' },
  ],
  'romans+8:31': [
    { ref: 'psalms+23:5', label: 'Ps 23:5' },
    { ref: 'psalms+118:6', label: 'Ps 118:6' },
  ],
  'romans+8:32': [
    { ref: 'john+3:16', label: 'John 3:16' },
    { ref: 'genesis+22:16', label: 'Gen 22:16' },
  ],
  'romans+8:34': [
    { ref: 'hebrews+7:25', label: 'Heb 7:25' },
    { ref: '1john+2:1', label: '1 John 2:1' },
  ],
  'romans+8:35': [
    { ref: 'psalms+23:4', label: 'Ps 23:4' },
    { ref: '2corinthians+11:23', label: '2 Cor 11:23' },
  ],
  'romans+8:37': [
    { ref: '1corinthians+15:57', label: '1 Cor 15:57' },
    { ref: '2corinthians+2:14', label: '2 Cor 2:14' },
  ],
  'romans+8:38': [
    { ref: 'ephesians+1:21', label: 'Eph 1:21' },
    { ref: 'colossians+1:16', label: 'Col 1:16' },
  ],
  'romans+8:39': [
    { ref: 'john+10:28', label: 'John 10:28' },
    { ref: 'philippians+4:7', label: 'Phil 4:7' },
  ],

  // ── ROMANS (other) ──────────────────────────────────────────────────────────
  'romans+1:16': [
    { ref: '1corinthians+1:18', label: '1 Cor 1:18' },
    { ref: 'mark+8:38', label: 'Mark 8:38' },
  ],
  'romans+3:23': [
    { ref: 'isaiah+53:6', label: 'Isa 53:6' },
    { ref: 'ecclesiastes+7:20', label: 'Eccl 7:20' },
  ],
  'romans+5:8': [
    { ref: 'john+3:16', label: 'John 3:16' },
    { ref: '1john+4:10', label: '1 John 4:10' },
  ],
  'romans+6:23': [
    { ref: 'genesis+2:17', label: 'Gen 2:17' },
    { ref: 'john+3:36', label: 'John 3:36' },
    { ref: 'john+10:28', label: 'John 10:28' },
  ],
  'romans+10:9': [
    { ref: 'acts+2:38', label: 'Acts 2:38' },
    { ref: 'matthew+10:32', label: 'Matt 10:32' },
  ],
  'romans+12:1': [
    { ref: 'hebrews+13:15', label: 'Heb 13:15' },
    { ref: '1corinthians+6:20', label: '1 Cor 6:20' },
  ],
  'romans+12:2': [
    { ref: 'ephesians+4:23', label: 'Eph 4:23' },
    { ref: '2corinthians+3:18', label: '2 Cor 3:18' },
  ],

  // ── 1 CORINTHIANS 13 ────────────────────────────────────────────────────────
  '1corinthians+13:1': [
    { ref: 'matthew+7:22', label: 'Matt 7:22' },
    { ref: 'romans+12:6', label: 'Rom 12:6' },
  ],
  '1corinthians+13:4': [
    { ref: 'romans+12:10', label: 'Rom 12:10' },
    { ref: 'philippians+2:3', label: 'Phil 2:3' },
  ],
  '1corinthians+13:5': [
    { ref: 'romans+12:17', label: 'Rom 12:17' },
    { ref: 'philippians+4:11', label: 'Phil 4:11' },
  ],
  '1corinthians+13:7': [
    { ref: '1peter+4:8', label: '1 Pet 4:8' },
    { ref: 'romans+15:1', label: 'Rom 15:1' },
  ],
  '1corinthians+13:8': [
    { ref: '1peter+1:25', label: '1 Pet 1:25' },
    { ref: 'matthew+24:35', label: 'Matt 24:35' },
  ],
  '1corinthians+13:12': [
    { ref: '2corinthians+5:7', label: '2 Cor 5:7' },
    { ref: '1john+3:2', label: '1 John 3:2' },
  ],
  '1corinthians+13:13': [
    { ref: 'romans+5:1', label: 'Rom 5:1' },
    { ref: 'galatians+5:5', label: 'Gal 5:5' },
    { ref: '1peter+1:21', label: '1 Pet 1:21' },
  ],

  // ── GALATIANS ───────────────────────────────────────────────────────────────
  'galatians+2:20': [
    { ref: 'colossians+3:3', label: 'Col 3:3' },
    { ref: 'john+15:5', label: 'John 15:5' },
  ],
  'galatians+5:22': [
    { ref: 'romans+8:6', label: 'Rom 8:6' },
    { ref: 'colossians+3:12', label: 'Col 3:12' },
  ],

  // ── EPHESIANS 2 ─────────────────────────────────────────────────────────────
  'ephesians+2:1': [
    { ref: 'colossians+2:13', label: 'Col 2:13' },
    { ref: 'luke+15:24', label: 'Luke 15:24' },
  ],
  'ephesians+2:4': [
    { ref: 'romans+5:8', label: 'Rom 5:8' },
    { ref: 'titus+3:5', label: 'Titus 3:5' },
    { ref: 'john+3:16', label: 'John 3:16' },
  ],
  'ephesians+2:5': [
    { ref: 'romans+6:4', label: 'Rom 6:4' },
    { ref: 'colossians+2:12', label: 'Col 2:12' },
  ],
  'ephesians+2:8': [
    { ref: 'galatians+2:16', label: 'Gal 2:16' },
    { ref: 'romans+3:28', label: 'Rom 3:28' },
    { ref: 'acts+15:11', label: 'Acts 15:11' },
  ],
  'ephesians+2:9': [
    { ref: 'romans+3:27', label: 'Rom 3:27' },
    { ref: '2timothy+1:9', label: '2 Tim 1:9' },
  ],
  'ephesians+2:10': [
    { ref: 'titus+2:14', label: 'Titus 2:14' },
    { ref: 'philippians+2:13', label: 'Phil 2:13' },
  ],
  'ephesians+2:14': [
    { ref: 'colossians+3:11', label: 'Col 3:11' },
    { ref: 'galatians+3:28', label: 'Gal 3:28' },
  ],

  // ── PHILIPPIANS ─────────────────────────────────────────────────────────────
  'philippians+4:4': [
    { ref: '1thessalonians+5:16', label: '1 Thess 5:16' },
    { ref: 'psalms+37:4', label: 'Ps 37:4' },
  ],
  'philippians+4:6': [
    { ref: '1peter+5:7', label: '1 Pet 5:7' },
    { ref: 'matthew+6:25', label: 'Matt 6:25' },
    { ref: 'jeremiah+29:11', label: 'Jer 29:11' },
  ],
  'philippians+4:7': [
    { ref: 'romans+5:1', label: 'Rom 5:1' },
    { ref: 'john+14:27', label: 'John 14:27' },
  ],
  'philippians+4:13': [
    { ref: '2corinthians+12:9', label: '2 Cor 12:9' },
    { ref: 'john+15:5', label: 'John 15:5' },
  ],

  // ── 1 THESSALONIANS 5 ───────────────────────────────────────────────────────
  '1thessalonians+5:16': [
    { ref: 'philippians+4:4', label: 'Phil 4:4' },
    { ref: 'romans+12:12', label: 'Rom 12:12' },
  ],
  '1thessalonians+5:17': [
    { ref: 'luke+18:1', label: 'Luke 18:1' },
    { ref: 'ephesians+6:18', label: 'Eph 6:18' },
  ],
  '1thessalonians+5:18': [
    { ref: 'ephesians+5:20', label: 'Eph 5:20' },
    { ref: 'romans+8:28', label: 'Rom 8:28' },
  ],

  // ── HEBREWS 11 ──────────────────────────────────────────────────────────────
  'hebrews+11:1': [
    { ref: 'romans+8:24', label: 'Rom 8:24' },
    { ref: '2corinthians+4:18', label: '2 Cor 4:18' },
    { ref: 'john+20:29', label: 'John 20:29' },
  ],
  'hebrews+11:3': [
    { ref: 'genesis+1:1', label: 'Gen 1:1' },
    { ref: 'psalms+33:6', label: 'Ps 33:6' },
  ],
  'hebrews+11:4': [
    { ref: 'genesis+4:4', label: 'Gen 4:4' },
    { ref: '1john+3:12', label: '1 John 3:12' },
  ],
  'hebrews+11:5': [
    { ref: 'genesis+5:24', label: 'Gen 5:24' },
    { ref: 'jude+1:14', label: 'Jude 1:14' },
  ],
  'hebrews+11:6': [
    { ref: 'james+1:6', label: 'Jas 1:6' },
    { ref: 'matthew+21:22', label: 'Matt 21:22' },
  ],
  'hebrews+11:7': [
    { ref: 'genesis+6:14', label: 'Gen 6:14' },
    { ref: '1peter+3:20', label: '1 Pet 3:20' },
  ],
  'hebrews+11:8': [
    { ref: 'genesis+12:1', label: 'Gen 12:1' },
    { ref: 'acts+7:2', label: 'Acts 7:2' },
  ],
  'hebrews+11:17': [
    { ref: 'genesis+22:1', label: 'Gen 22:1' },
    { ref: 'james+2:21', label: 'Jas 2:21' },
  ],

  // ── 1 PETER ─────────────────────────────────────────────────────────────────
  '1peter+5:7': [
    { ref: 'philippians+4:6', label: 'Phil 4:6' },
    { ref: 'psalms+55:22', label: 'Ps 55:22' },
  ],
  '1peter+1:23': [
    { ref: 'james+1:18', label: 'Jas 1:18' },
    { ref: 'john+3:3', label: 'John 3:3' },
  ],

  // ── REVELATION ──────────────────────────────────────────────────────────────
  'revelation+3:20': [
    { ref: 'john+14:23', label: 'John 14:23' },
    { ref: 'john+10:9', label: 'John 10:9' },
  ],
  'revelation+21:4': [
    { ref: 'matthew+5:4', label: 'Matt 5:4' },
    { ref: 'isaiah+25:8', label: 'Isa 25:8' },
  ],
  'revelation+22:17': [
    { ref: 'isaiah+55:1', label: 'Isa 55:1' },
    { ref: 'john+7:37', label: 'John 7:37' },
  ],
};

export function getCrossReferences(bookId: string, chapter: number, verse: number): CrossRef[] {
  const key = `${bookId}+${chapter}:${verse}`;
  return CROSS_REFERENCES[key] ?? [];
}

export function parseCrossRef(ref: string): { book: string; chapter: number; verse: number } | null {
  // ref format: "john+3:16" or "1corinthians+13:4"
  const colonIdx = ref.lastIndexOf(':');
  if (colonIdx === -1) return null;
  const verse = parseInt(ref.slice(colonIdx + 1), 10);
  const beforeColon = ref.slice(0, colonIdx);
  const lastPlus = beforeColon.lastIndexOf('+');
  if (lastPlus === -1) return null;
  const book = beforeColon.slice(0, lastPlus);
  const chapter = parseInt(beforeColon.slice(lastPlus + 1), 10);
  if (isNaN(verse) || isNaN(chapter)) return null;
  return { book, chapter, verse };
}
