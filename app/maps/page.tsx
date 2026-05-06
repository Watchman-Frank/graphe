'use client';
import { useState } from 'react';

const MEASUREMENTS = {
  Length: [
    { ancient: 'Finger (Digit)', hebrewGreek: 'אֶצְבַּע (etsba)', cm: 1.85, modern: '≈ ¾ inch' },
    { ancient: 'Handbreadth', hebrewGreek: 'טֶפַח (tepach)', cm: 7.4, modern: '≈ 3 inches' },
    { ancient: 'Span', hebrewGreek: 'זֶרֶת (zeret)', cm: 22.2, modern: '≈ 9 inches (half cubit)' },
    { ancient: 'Cubit', hebrewGreek: 'אַמָּה (ammah) / πῆχυς (pēchys)', cm: 44.5, modern: '≈ 18 inches / 1.5 ft' },
    { ancient: 'Reed / Rod', hebrewGreek: 'קָנֶה (qaneh)', cm: 267, modern: '≈ 8.75 feet (6 cubits)' },
    { ancient: 'Sabbath day\'s journey', hebrewGreek: 'Acts 1:12 reference', cm: 80000, modern: '≈ ½ mile (800 m)' },
    { ancient: 'Stadion (Furlong)', hebrewGreek: 'στάδιον (stadion)', cm: 18500, modern: '≈ 600 feet (185 m)' },
    { ancient: 'Roman Mile', hebrewGreek: 'μίλιον (milion)', cm: 147800, modern: '≈ 4,854 feet (0.92 miles)' },
    { ancient: 'Day\'s Journey', hebrewGreek: 'דֶּרֶך יוֹם (derekh yom)', cm: 3300000, modern: '≈ 20–25 miles' },
  ],
  Weight: [
    { ancient: 'Gerah', hebrewGreek: 'גֵּרָה (gerah)', g: 0.57, modern: '≈ 1/50 oz (smallest silver unit)' },
    { ancient: 'Beka', hebrewGreek: 'בֶּקַע (beqa)', g: 5.7, modern: '≈ 0.2 oz (half shekel)' },
    { ancient: 'Shekel', hebrewGreek: 'שֶׁקֶל (sheqel) / σίκλος', g: 11.4, modern: '≈ 0.4 oz' },
    { ancient: 'Mina (Maneh)', hebrewGreek: 'מָנֶה (maneh) / μνᾶ (mna)', g: 570, modern: '≈ 1.25 lbs (50 shekels)' },
    { ancient: 'Talent', hebrewGreek: 'כִּכָּר (kikkar) / τάλαντον', g: 34200, modern: '≈ 75 lbs (60 minas)' },
  ],
  Volume: [
    { ancient: 'Log', hebrewGreek: 'לֹג (log)', L: 0.31, modern: '≈ ⅔ pint (smallest liquid unit)' },
    { ancient: 'Hin', hebrewGreek: 'הִין (hin)', L: 3.67, modern: '≈ 1 gallon' },
    { ancient: 'Bath / Ephah', hebrewGreek: 'בַּת (bat) / אֵיפָה (ephah)', L: 22, modern: '≈ 5.8 gallons' },
    { ancient: 'Homer / Kor', hebrewGreek: 'חֹמֶר (homer) / כֹּר (kor)', L: 220, modern: '≈ 58 gallons (10 baths)' },
    { ancient: 'Cab', hebrewGreek: 'קַב (qab)', L: 1.2, modern: '≈ 2½ pints' },
    { ancient: 'Seah', hebrewGreek: 'סְאָה (seah)', L: 7.3, modern: '≈ 2 gallons' },
  ],
  Currency: [
    { ancient: 'Gerah (silver)', hebrewGreek: 'Smallest OT coin unit', modern: 'Approx. daily wage / 20th of shekel' },
    { ancient: 'Shekel of silver', hebrewGreek: 'שֶׁקֶל כֶּסֶף', modern: '≈ 4 days\' wages (common trading weight)' },
    { ancient: 'Mina (50 shekels)', hebrewGreek: 'μνᾶ — Luke 19 parable', modern: '≈ 3 months\' wages' },
    { ancient: 'Talent (3,000 shekels)', hebrewGreek: 'τάλαντον — Matthew 25', modern: '≈ 20 years\' wages (enormous sum)' },
    { ancient: 'Denarius (Roman)', hebrewGreek: 'δηνάριον — one day\'s wage (Matthew 20:2)', modern: '≈ 1 day\'s labourer\'s wage' },
    { ancient: 'Widow\'s Mite (2 Lepta)', hebrewGreek: 'λεπτόν — Mark 12:42', modern: '≈ 1/128 of a denarius — nearly nothing' },
  ],
};

const MAPS = [
  {
    id: 'ancient-israel',
    title: 'Ancient Israel & Surrounding Nations',
    description: 'The geography of the promised land: Canaan, Philistia, Edom, Moab, Ammon, Aram (Syria), and the major cities.',
    era: 'Patriarchal – Kingdom Period',
    locations: ['Jerusalem', 'Bethlehem', 'Hebron', 'Jericho', 'Samaria', 'Nazareth', 'Capernaum', 'Jordan River', 'Dead Sea', 'Sea of Galilee'],
  },
  {
    id: 'exodus-route',
    title: 'The Exodus Route',
    description: 'Israel\'s journey from Egypt through the Sinai wilderness to the Promised Land, as recorded in Exodus and Numbers.',
    era: '1446 BC (Early Date) or 1270 BC (Late Date)',
    locations: ['Goshen (Egypt)', 'Pi-Ramesses', 'Red Sea crossing', 'Marah', 'Elim', 'Mt. Sinai (Horeb)', 'Kadesh-Barnea', 'Plains of Moab'],
  },
  {
    id: 'paul-journeys',
    title: 'Paul\'s Missionary Journeys',
    description: 'The four journeys of the Apostle Paul across the Mediterranean world, planting churches from Jerusalem to Rome.',
    era: 'AD 46–62',
    locations: ['Antioch', 'Cyprus', 'Galatia', 'Philippi', 'Thessalonica', 'Corinth', 'Ephesus', 'Jerusalem', 'Rome'],
  },
  {
    id: 'nt-world',
    title: 'The World of the New Testament',
    description: 'The Roman Empire at the time of Christ — provinces, roads, cities and the spread of the gospel.',
    era: '1st Century AD',
    locations: ['Rome', 'Alexandria', 'Antioch', 'Athens', 'Corinth', 'Ephesus', 'Jerusalem', 'Caesarea Maritima'],
  },
];

export default function MapsPage() {
  const [activeMap, setActiveMap] = useState(MAPS[0]);
  const [activeMeasurement, setActiveMeasurement] = useState<keyof typeof MEASUREMENTS>('Length');

  return (
    <div className="px-4 py-8 md:px-10 md:py-12">
      <div className="mb-10">
        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--gold-400)' }}>Historical Resources</p>
        <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia,serif' }}>
          Maps & Measurements
        </h1>
        <p className="text-sm" style={{ color: 'var(--shell-400)' }}>
          Ancient world geography and biblical units of measurement with modern equivalents.
        </p>
      </div>

      {/* Maps section */}
      <div className="mb-12">
        <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--gold-400)' }}>Historical Maps</h2>

        {/* Map selector */}
        <div className="flex gap-2 flex-wrap mb-6">
          {MAPS.map(map => (
            <button
              key={map.id}
              onClick={() => setActiveMap(map)}
              className="px-3 py-2 rounded-xl border text-xs font-bold transition-all"
              style={
                activeMap.id === map.id
                  ? { background: 'rgba(201,168,76,0.18)', borderColor: 'rgba(201,168,76,0.4)', color: 'var(--gold-300)' }
                  : { background: 'var(--shell-800)', borderColor: 'rgba(255,255,255,0.07)', color: 'var(--shell-400)' }
              }
            >
              {map.title.split(' ').slice(0, 3).join(' ')}…
            </button>
          ))}
        </div>

        {/* Map display */}
        <div className="rounded-2xl overflow-hidden border" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.15)' }}>
          {/* Map SVG placeholder */}
          <div
            className="h-64 md:h-80 flex items-center justify-center relative"
            style={{ background: 'linear-gradient(135deg, #1a2a1a, #0f1f2a)' }}
          >
            {/* Decorative map-like grid */}
            <svg width="100%" height="100%" className="absolute inset-0 opacity-20">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              {/* Stylized landmass shapes */}
              <ellipse cx="35%" cy="55%" rx="18%" ry="25%" fill="rgba(184,232,123,0.12)" stroke="rgba(184,232,123,0.3)" strokeWidth="1" />
              <ellipse cx="60%" cy="45%" rx="12%" ry="18%" fill="rgba(184,232,123,0.08)" stroke="rgba(184,232,123,0.2)" strokeWidth="1" />
              <ellipse cx="50%" cy="30%" rx="25%" ry="8%" fill="rgba(201,168,76,0.1)" stroke="rgba(201,168,76,0.2)" strokeWidth="1" />
              {/* Rivers */}
              <path d="M 42% 20% Q 44% 45% 40% 75%" stroke="rgba(123,184,232,0.4)" strokeWidth="1.5" fill="none" />
              {/* Location dots */}
              {activeMap.locations.slice(0, 6).map((loc, i) => {
                const x = 25 + (i * 13) % 55;
                const y = 25 + (i * 17) % 50;
                return (
                  <g key={loc}>
                    <circle cx={`${x}%`} cy={`${y}%`} r="4" fill="var(--gold-400)" opacity="0.8" />
                    <text x={`${x}%`} y={`${y - 4}%`} textAnchor="middle" fontSize="9" fill="var(--gold-300)" fontFamily="sans-serif">{loc.split('(')[0].trim()}</text>
                  </g>
                );
              })}
            </svg>

            <div className="text-center z-10">
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--gold-400)' }}>
                {activeMap.era}
              </p>
              <p className="text-sm font-bold" style={{ color: 'var(--parchment-200)' }}>{activeMap.title}</p>
              <p className="text-xs mt-1" style={{ color: 'var(--shell-400)' }}>
                Interactive map — full version coming soon
              </p>
            </div>
          </div>

          {/* Map info */}
          <div className="p-5">
            <h3 className="font-bold mb-1" style={{ color: 'var(--parchment-100)' }}>{activeMap.title}</h3>
            <p className="text-sm mb-3 leading-relaxed" style={{ color: 'var(--shell-400)' }}>{activeMap.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {activeMap.locations.map(loc => (
                <span key={loc} className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(201,168,76,0.08)', color: 'var(--gold-400)', border: '1px solid rgba(201,168,76,0.15)' }}>
                  {loc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Measurements */}
      <div>
        <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--gold-400)' }}>
          Biblical Measurements & Modern Equivalents
        </h2>

        {/* Category tabs */}
        <div className="flex gap-2 mb-5 flex-wrap">
          {(Object.keys(MEASUREMENTS) as (keyof typeof MEASUREMENTS)[]).map(cat => (
            <button
              key={cat}
              onClick={() => setActiveMeasurement(cat)}
              className="px-4 py-2 rounded-xl border text-sm font-bold transition-all"
              style={
                activeMeasurement === cat
                  ? { background: 'rgba(201,168,76,0.18)', borderColor: 'rgba(201,168,76,0.4)', color: 'var(--gold-300)' }
                  : { background: 'var(--shell-800)', borderColor: 'rgba(255,255,255,0.07)', color: 'var(--shell-400)' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(201,168,76,0.12)' }}>
          <table className="w-full">
            <thead>
              <tr style={{ background: 'var(--shell-700)' }}>
                {['Ancient Unit', 'Hebrew / Greek', activeMeasurement === 'Length' ? 'Centimetres' : activeMeasurement === 'Weight' ? 'Grams' : activeMeasurement === 'Volume' ? 'Litres' : '', 'Modern Equivalent'].filter(Boolean).map(h => (
                  <th key={h} className="text-left px-4 py-2.5 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--shell-400)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MEASUREMENTS[activeMeasurement].map((row: any, i: number) => (
                <tr
                  key={i}
                  className="border-t"
                  style={{ background: i % 2 === 0 ? 'var(--shell-900)' : 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.08)' }}
                >
                  <td className="px-4 py-3 text-sm font-semibold" style={{ color: 'var(--parchment-200)' }}>{row.ancient}</td>
                  <td className="px-4 py-3 text-xs" style={{ color: 'var(--gold-400)' }}>{row.hebrewGreek}</td>
                  {activeMeasurement !== 'Currency' && (
                    <td className="px-4 py-3 text-xs font-mono" style={{ color: 'var(--shell-400)' }}>
                      {row.cm ? `${row.cm} cm` : row.g ? `${row.g} g` : row.L ? `${row.L} L` : ''}
                    </td>
                  )}
                  <td className="px-4 py-3 text-xs" style={{ color: 'var(--parchment-200)' }}>{row.modern}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
