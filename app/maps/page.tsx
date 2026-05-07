'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import type { BibleMapData } from '@/components/maps/BibleMap';
import { MapPin, Loader2 } from 'lucide-react';

// Leaflet uses browser APIs — must be client-only
const BibleMap = dynamic(() => import('@/components/maps/BibleMap'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full" style={{ minHeight: 420, background: '#1a1a2e' }}>
      <div className="flex flex-col items-center gap-3">
        <Loader2 size={28} className="animate-spin" style={{ color: '#C9A84C' }} />
        <p className="text-sm" style={{ color: '#7a6a4f' }}>Loading map…</p>
      </div>
    </div>
  ),
});

// ── Map datasets with real GPS coordinates ────────────────────────────────────

const MAPS: (BibleMapData & { description: string; era: string })[] = [
  {
    id: 'ancient-israel',
    title: 'Ancient Israel & the Promised Land',
    description: 'The geography of the Promised Land — Canaan, the tribal territories, and the major cities of the Old Testament.',
    era: 'Patriarchal – Kingdom Period (2000–586 BC)',
    center: [31.8, 35.2],
    zoom: 8,
    locations: [
      { name: 'Jerusalem', lat: 31.7683, lng: 35.2137, type: 'city', description: 'The holy city — capital of Israel under David and Solomon. Site of the Temple and the cross.', passages: ['2 Sam 5:7', 'Ps 122:1', 'Luke 19:41'] },
      { name: 'Bethlehem', lat: 31.7054, lng: 35.2024, type: 'city', description: 'City of David. Birthplace of David and of Jesus the Messiah.', passages: ['Ruth 1:1', 'Mic 5:2', 'Luke 2:4'] },
      { name: 'Hebron', lat: 31.5326, lng: 35.0998, type: 'city', description: 'Ancient city where Abraham settled. David was crowned king here before moving to Jerusalem.', passages: ['Gen 13:18', '2 Sam 2:1', 'Gen 23:19'] },
      { name: 'Jericho', lat: 31.8667, lng: 35.4500, type: 'city', description: 'The first city conquered by Joshua. The oldest continuously inhabited city in the world.', passages: ['Josh 6:1', 'Luke 19:1', 'Heb 11:30'] },
      { name: 'Samaria', lat: 32.2795, lng: 35.1926, type: 'city', description: 'Capital of the northern kingdom of Israel. Built by King Omri. Later Herod the Great rebuilt it as Sebaste.', passages: ['1 Kgs 16:24', 'John 4:4', 'Acts 8:5'] },
      { name: 'Nazareth', lat: 32.6996, lng: 35.3035, type: 'city', description: 'Hometown of Jesus, where he grew up and began his ministry before being rejected.', passages: ['Luke 2:51', 'Luke 4:16', 'Matt 2:23'] },
      { name: 'Capernaum', lat: 32.8810, lng: 35.5746, type: 'city', description: 'Jesus\' ministry headquarters on the Sea of Galilee. Peter\'s house was here.', passages: ['Matt 4:13', 'Mark 1:21', 'John 6:59'] },
      { name: 'Sea of Galilee', lat: 32.8321, lng: 35.6008, type: 'water', description: 'Fresh water lake where Jesus walked on water, calmed the storm, and called his disciples.', passages: ['Matt 14:25', 'Luke 5:1', 'John 21:1'] },
      { name: 'Dead Sea', lat: 31.5000, lng: 35.5000, type: 'water', description: 'The lowest point on earth. Its saltiness (10× ocean) made it the "Sea of Salt" in Hebrew.', passages: ['Gen 14:3', 'Ezek 47:8'] },
      { name: 'Jordan River', lat: 32.0000, lng: 35.5500, type: 'water', description: 'Israel crossed it miraculously to enter Canaan. Jesus was baptised here by John.', passages: ['Josh 3:17', 'Matt 3:13', '2 Kgs 5:14'] },
      { name: 'Bethel', lat: 31.9287, lng: 35.2201, type: 'city', description: 'Jacob\'s dream of the ladder to heaven occurred here. Later a centre of idolatry in the north.', passages: ['Gen 28:19', 'Amos 7:13', '1 Kgs 12:29'] },
      { name: 'Beer-sheba', lat: 31.2516, lng: 34.7993, type: 'city', description: 'The southernmost city of Israel — "from Dan to Beer-sheba" meant the whole land.', passages: ['Gen 21:31', 'Judg 20:1', 'Amos 5:5'] },
      { name: 'Mt. Carmel', lat: 32.7397, lng: 34.9684, type: 'mountain', description: 'Where Elijah confronted the 450 prophets of Baal and called down fire from heaven.', passages: ['1 Kgs 18:19', '2 Kgs 4:25'] },
      { name: 'Mt. Hermon', lat: 33.4136, lng: 35.8566, type: 'mountain', description: 'The highest peak in the region. Likely the site of Jesus\' transfiguration.', passages: ['Ps 133:3', 'Matt 17:1', 'Deut 3:8'] },
    ],
  },
  {
    id: 'exodus-route',
    title: 'The Exodus Route',
    description: 'Israel\'s journey from slavery in Egypt through the Sinai wilderness to the border of the Promised Land.',
    era: '1446 BC (Early Date) / 1270 BC (Late Date)',
    center: [29.5, 33.5],
    zoom: 7,
    locations: [
      { name: 'Goshen', lat: 30.7000, lng: 31.9000, type: 'region', description: 'The fertile Nile Delta region given to Jacob\'s family. Israel lived here for 430 years.', passages: ['Gen 47:6', 'Exod 8:22', 'Exod 12:41'] },
      { name: 'Pi-Ramesses', lat: 30.7869, lng: 31.8208, type: 'city', description: 'The Egyptian store-city built by Hebrew slaves. Likely the starting point of the Exodus.', passages: ['Exod 1:11', 'Exod 12:37', 'Num 33:3'] },
      { name: 'Succoth', lat: 30.5000, lng: 32.2000, type: 'city', description: 'First campsite after leaving Egypt. Approx. 600,000 men plus women and children departed.', passages: ['Exod 12:37', 'Num 33:5'] },
      { name: 'Red Sea Crossing', lat: 29.9500, lng: 32.5000, type: 'landmark', description: 'God divided the waters and Israel crossed on dry ground. Pharaoh\'s army was destroyed.', passages: ['Exod 14:21', 'Exod 15:1', 'Heb 11:29'] },
      { name: 'Marah', lat: 28.3000, lng: 32.8000, type: 'landmark', description: 'Bitter water made sweet by God. First test of Israel\'s trust after the crossing.', passages: ['Exod 15:23', 'Num 33:8'] },
      { name: 'Elim', lat: 28.1000, lng: 33.1000, type: 'landmark', description: 'Oasis with twelve springs and seventy palm trees. A place of refreshing for Israel.', passages: ['Exod 15:27', 'Num 33:9'] },
      { name: 'Mt. Sinai', lat: 28.5388, lng: 33.9754, type: 'mountain', description: 'Where God descended in fire, gave the Ten Commandments, and established the covenant with Israel.', passages: ['Exod 19:18', 'Exod 20:1', 'Gal 4:24'] },
      { name: 'Wilderness of Paran', lat: 30.0000, lng: 34.5000, type: 'region', description: 'The vast wilderness where Israel wandered for 38 years after the failure at Kadesh-Barnea.', passages: ['Num 13:3', 'Num 10:12', '1 Sam 25:1'] },
      { name: 'Kadesh-Barnea', lat: 30.7000, lng: 34.4000, type: 'city', description: 'Where the twelve spies returned. Israel\'s unbelief led to 40 years of wandering.', passages: ['Num 13:26', 'Deut 1:19', 'Num 20:1'] },
      { name: 'Plains of Moab', lat: 31.8000, lng: 35.6000, type: 'region', description: 'The final campsite before entering Canaan. Moses gave his final speeches (Deuteronomy) here.', passages: ['Num 22:1', 'Deut 34:1', 'Josh 1:2'] },
    ],
  },
  {
    id: 'paul-journeys',
    title: 'Paul\'s Missionary Journeys',
    description: 'The Apostle Paul\'s three missionary journeys and his journey to Rome, planting churches across the Greco-Roman world.',
    era: 'AD 46–62',
    center: [38.0, 26.0],
    zoom: 5,
    locations: [
      { name: 'Jerusalem', lat: 31.7683, lng: 35.2137, type: 'city', description: 'Starting point of the church. Paul was saved near Damascus, then met the apostles here.', passages: ['Acts 9:26', 'Gal 1:18', 'Acts 21:17'] },
      { name: 'Antioch (Syria)', lat: 36.2021, lng: 36.1605, type: 'city', description: 'The first Gentile church. It was here that believers were first called Christians. Paul\'s home base.', passages: ['Acts 11:26', 'Acts 13:1', 'Gal 2:11'] },
      { name: 'Cyprus', lat: 34.9145, lng: 33.0000, type: 'region', description: 'First stop of the 1st journey. Barnabas\' homeland. Sergius Paulus, the proconsul, was converted.', passages: ['Acts 13:4', 'Acts 4:36', 'Acts 15:39'] },
      { name: 'Pisidian Antioch', lat: 38.2967, lng: 30.9197, type: 'city', description: 'Paul preached his great synagogue sermon here. Jews rejected him, turning to the Gentiles.', passages: ['Acts 13:14', 'Acts 13:46'] },
      { name: 'Lystra', lat: 37.5765, lng: 32.3396, type: 'city', description: 'Paul healed a lame man, was hailed as Zeus, then stoned and left for dead. Timothy was from here.', passages: ['Acts 14:8', 'Acts 14:19', '2 Tim 3:11'] },
      { name: 'Philippi', lat: 41.0126, lng: 24.2867, type: 'city', description: 'First European church. Lydia was converted. Paul and Silas were imprisoned and an earthquake freed them.', passages: ['Acts 16:12', 'Acts 16:25', 'Phil 1:1'] },
      { name: 'Thessalonica', lat: 40.6401, lng: 22.9444, type: 'city', description: 'Paul preached three weeks, many believed, but a mob formed and he was forced to leave.', passages: ['Acts 17:1', '1 Thess 1:1', 'Acts 17:5'] },
      { name: 'Athens', lat: 37.9838, lng: 23.7275, type: 'city', description: 'Paul preached at the Areopagus (Mars Hill), presenting the unknown God to Greek philosophers.', passages: ['Acts 17:16', 'Acts 17:22', 'Acts 17:34'] },
      { name: 'Corinth', lat: 37.9089, lng: 22.8763, type: 'city', description: 'Paul spent 18 months here, founding a church to which he later wrote two major epistles.', passages: ['Acts 18:1', '1 Cor 1:2', 'Acts 18:11'] },
      { name: 'Ephesus', lat: 37.9395, lng: 27.3419, type: 'city', description: 'Paul\'s greatest base (3 years). Site of Diana\'s temple. A riot nearly killed him. Wrote 1 Corinthians here.', passages: ['Acts 19:10', 'Acts 19:23', 'Eph 1:1'] },
      { name: 'Troas', lat: 39.7548, lng: 26.1650, type: 'city', description: 'Paul received the Macedonian vision here. Eutychus fell from a window and was raised.', passages: ['Acts 16:8', 'Acts 20:9', '2 Cor 2:12'] },
      { name: 'Rome', lat: 41.9028, lng: 12.4964, type: 'city', description: 'Paul\'s ultimate destination. He arrived as a prisoner but preached freely for two years.', passages: ['Acts 28:16', 'Rom 1:7', 'Acts 28:30'] },
      { name: 'Malta', lat: 35.9375, lng: 14.3754, type: 'region', description: 'Paul was shipwrecked here. He survived a viper bite and healed many islanders.', passages: ['Acts 28:1', 'Acts 28:3'] },
    ],
  },
  {
    id: 'nt-world',
    title: 'The World of the New Testament',
    description: 'The Roman Empire at the time of Christ — provinces, roads, and cities where the Gospel spread in the 1st century.',
    era: '1st Century AD',
    center: [37.0, 22.0],
    zoom: 5,
    locations: [
      { name: 'Jerusalem', lat: 31.7683, lng: 35.2137, type: 'city', description: 'The holy city. Site of the crucifixion, resurrection, and Pentecost. Starting point of the church.', passages: ['Luke 24:47', 'Acts 2:1', 'Acts 1:8'] },
      { name: 'Rome', lat: 41.9028, lng: 12.4964, type: 'city', description: 'Capital of the Empire. Paul wrote his greatest epistle to the church here. Martyrdom site of Peter and Paul.', passages: ['Rom 1:7', 'Acts 28:16', 'Rom 16:1'] },
      { name: 'Alexandria', lat: 31.2001, lng: 29.9187, type: 'city', description: 'Major intellectual centre of the ancient world. Home of Apollos and the Septuagint translation.', passages: ['Acts 18:24', 'Acts 27:6', 'Acts 6:9'] },
      { name: 'Antioch (Syria)', lat: 36.2021, lng: 36.1605, type: 'city', description: 'First Gentile church. First called Christians. Paul and Barnabas sent out from here.', passages: ['Acts 11:26', 'Acts 13:1'] },
      { name: 'Athens', lat: 37.9838, lng: 23.7275, type: 'city', description: 'Intellectual capital of Greece. Paul preached the unknown God at the Areopagus.', passages: ['Acts 17:22', 'Acts 17:34'] },
      { name: 'Corinth', lat: 37.9089, lng: 22.8763, type: 'city', description: 'Prosperous port city. A large but troubled church. Paul wrote two major letters here.', passages: ['Acts 18:1', '1 Cor 1:2'] },
      { name: 'Ephesus', lat: 37.9395, lng: 27.3419, type: 'city', description: 'One of the largest cities in the Empire. Paul spent three years here; John later led the church.', passages: ['Acts 19:1', 'Rev 2:1', 'Eph 1:1'] },
      { name: 'Caesarea Maritima', lat: 32.5022, lng: 34.8906, type: 'city', description: 'Roman administrative capital of Judea. Paul was imprisoned here for two years before sailing to Rome.', passages: ['Acts 10:1', 'Acts 23:33', 'Acts 24:27'] },
      { name: 'Damascus', lat: 33.5138, lng: 36.2765, type: 'city', description: 'Where Paul was converted by a blinding vision of the risen Christ on the road.', passages: ['Acts 9:3', 'Gal 1:17', 'Acts 22:6'] },
      { name: 'Antioch (Pisidia)', lat: 38.2967, lng: 30.9197, type: 'city', description: 'Inland city in modern Turkey. Paul\'s first recorded synagogue sermon — turning point to Gentile mission.', passages: ['Acts 13:14', 'Acts 13:46'] },
      { name: 'Philippi', lat: 41.0126, lng: 24.2867, type: 'city', description: 'First church in Europe. A Roman colony and military city. Paul and Silas imprisoned here.', passages: ['Acts 16:12', 'Phil 1:1'] },
      { name: 'Thessalonica', lat: 40.6401, lng: 22.9444, type: 'city', description: 'Important port city in Macedonia. A thriving church despite persecution.', passages: ['Acts 17:1', '1 Thess 1:1'] },
    ],
  },
];

// ── Measurements data (unchanged) ──────────────────────────────────────────────

const MEASUREMENTS = {
  Length: [
    { ancient: 'Finger (Digit)', hebrewGreek: 'אֶצְבַּע (etsba)', metric: '1.85 cm', modern: '≈ ¾ inch' },
    { ancient: 'Handbreadth', hebrewGreek: 'טֶפַח (tepach)', metric: '7.4 cm', modern: '≈ 3 inches' },
    { ancient: 'Span', hebrewGreek: 'זֶרֶת (zeret)', metric: '22.2 cm', modern: '≈ 9 inches (half cubit)' },
    { ancient: 'Cubit', hebrewGreek: 'אַמָּה (ammah) / πῆχυς (pēchys)', metric: '44.5 cm', modern: '≈ 18 inches / 1.5 ft' },
    { ancient: 'Reed / Rod', hebrewGreek: 'קָנֶה (qaneh)', metric: '267 cm', modern: '≈ 8.75 feet (6 cubits)' },
    { ancient: 'Sabbath day\'s journey', hebrewGreek: 'Acts 1:12 reference', metric: '~880 m', modern: '≈ ½ mile' },
    { ancient: 'Stadion', hebrewGreek: 'στάδιον (stadion)', metric: '185 m', modern: '≈ 600 feet' },
    { ancient: 'Roman Mile', hebrewGreek: 'μίλιον (milion)', metric: '1,478 m', modern: '≈ 4,854 feet (0.92 miles)' },
    { ancient: 'Day\'s Journey', hebrewGreek: 'דֶּרֶך יוֹם (derekh yom)', metric: '~33 km', modern: '≈ 20–25 miles' },
  ],
  Weight: [
    { ancient: 'Gerah', hebrewGreek: 'גֵּרָה (gerah)', metric: '0.57 g', modern: '1/20 shekel (smallest silver unit)' },
    { ancient: 'Beka', hebrewGreek: 'בֶּקַע (beqa)', metric: '5.7 g', modern: '≈ 0.2 oz (half shekel)' },
    { ancient: 'Shekel', hebrewGreek: 'שֶׁקֶל (sheqel)', metric: '11.4 g', modern: '≈ 0.4 oz' },
    { ancient: 'Mina (Maneh)', hebrewGreek: 'מָנֶה (maneh) / μνᾶ (mna)', metric: '570 g', modern: '≈ 1.25 lbs (50 shekels)' },
    { ancient: 'Talent', hebrewGreek: 'כִּכָּר (kikkar) / τάλαντον', metric: '34.2 kg', modern: '≈ 75 lbs (3,000 shekels)' },
  ],
  Volume: [
    { ancient: 'Log', hebrewGreek: 'לֹג (log)', metric: '0.31 L', modern: '≈ ⅔ pint' },
    { ancient: 'Cab', hebrewGreek: 'קַב (qab)', metric: '1.2 L', modern: '≈ 2½ pints' },
    { ancient: 'Hin', hebrewGreek: 'הִין (hin)', metric: '3.67 L', modern: '≈ 1 gallon' },
    { ancient: 'Seah', hebrewGreek: 'סְאָה (seah)', metric: '7.3 L', modern: '≈ 2 gallons' },
    { ancient: 'Bath / Ephah', hebrewGreek: 'בַּת (bat) / אֵיפָה (ephah)', metric: '22 L', modern: '≈ 5.8 gallons' },
    { ancient: 'Homer / Kor', hebrewGreek: 'חֹמֶר (homer) / כֹּר (kor)', metric: '220 L', modern: '≈ 58 gallons (10 baths)' },
  ],
  Currency: [
    { ancient: 'Gerah (silver)', hebrewGreek: 'Smallest OT coin unit', metric: '—', modern: '≈ 1/20 shekel' },
    { ancient: 'Shekel of silver', hebrewGreek: 'שֶׁקֶל כֶּסֶף', metric: '—', modern: '≈ 4 days\' wages' },
    { ancient: 'Mina (50 shekels)', hebrewGreek: 'μνᾶ — Luke 19', metric: '—', modern: '≈ 3 months\' wages' },
    { ancient: 'Talent (3,000 shekels)', hebrewGreek: 'τάλαντον — Matt 25', metric: '—', modern: '≈ 20 years\' wages' },
    { ancient: 'Denarius (Roman)', hebrewGreek: 'δηνάριον — Matt 20:2', metric: '—', modern: '1 day\'s labourer\'s wage' },
    { ancient: 'Widow\'s Mite (2 Lepta)', hebrewGreek: 'λεπτόν — Mark 12:42', metric: '—', modern: '1/128 of a denarius' },
  ],
};

const LEGEND = [
  { type: 'city', color: '#C9A84C', label: 'City' },
  { type: 'landmark', color: '#E87B7B', label: 'Landmark / Event' },
  { type: 'water', color: '#7BB8E8', label: 'Body of Water' },
  { type: 'mountain', color: '#B8E87B', label: 'Mountain' },
  { type: 'region', color: '#A87BE8', label: 'Region' },
];

export default function MapsPage() {
  const [activeMap, setActiveMap] = useState(MAPS[0]);
  const [activeMeasurement, setActiveMeasurement] = useState<keyof typeof MEASUREMENTS>('Length');

  return (
    <div className="px-4 py-8 md:px-10 md:py-12">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--gold-400)' }}>Historical Resources</p>
        <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia,serif' }}>
          Maps & Measurements
        </h1>
        <p className="text-sm" style={{ color: 'var(--shell-400)' }}>
          Interactive biblical geography with real coordinates. Click any pin for details.
        </p>
      </div>

      {/* Map section */}
      <div className="mb-12">
        <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--gold-400)' }}>Historical Maps</h2>

        {/* Map selector tabs */}
        <div className="flex gap-2 flex-wrap mb-4">
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
              {map.title.split(' ').slice(0, 3).join(' ')}
            </button>
          ))}
        </div>

        {/* Map container */}
        <div className="rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(201,168,76,0.2)' }}>
          {/* Live Leaflet map */}
          <div style={{ height: 460 }}>
            <BibleMap mapData={activeMap} />
          </div>

          {/* Map info panel */}
          <div className="p-5 border-t" style={{ background: 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.12)' }}>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="font-bold mb-1" style={{ color: 'var(--parchment-100)', fontFamily: 'Georgia,serif' }}>{activeMap.title}</h3>
                <p className="text-xs mb-1" style={{ color: 'var(--gold-400)' }}>{activeMap.era}</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--shell-400)' }}>{activeMap.description}</p>
              </div>

              {/* Legend */}
              <div className="flex flex-col gap-1.5 shrink-0">
                {LEGEND.map(l => (
                  <div key={l.type} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full border-2 border-white" style={{ background: l.color }} />
                    <span className="text-xs" style={{ color: 'var(--shell-400)' }}>{l.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location list */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              <p className="text-xs font-bold uppercase tracking-widest w-full mb-1" style={{ color: 'var(--shell-500)' }}>
                <MapPin size={10} className="inline mr-1" />
                {activeMap.locations.length} locations — click any pin on the map
              </p>
              {activeMap.locations.map(loc => (
                <span key={loc.name} className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(201,168,76,0.07)', color: 'var(--gold-400)', border: '1px solid rgba(201,168,76,0.15)' }}>
                  {loc.name}
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

        <div className="rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(201,168,76,0.12)' }}>
          <table className="w-full">
            <thead>
              <tr style={{ background: 'var(--shell-700)' }}>
                {['Ancient Unit', 'Hebrew / Greek', 'Metric', 'Modern Equivalent'].map(h => (
                  <th key={h} className="text-left px-4 py-2.5 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--shell-400)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MEASUREMENTS[activeMeasurement].map((row, i) => (
                <tr
                  key={i}
                  className="border-t"
                  style={{ background: i % 2 === 0 ? 'var(--shell-900)' : 'var(--shell-800)', borderColor: 'rgba(201,168,76,0.08)' }}
                >
                  <td className="px-4 py-3 text-sm font-semibold" style={{ color: 'var(--parchment-200)' }}>{row.ancient}</td>
                  <td className="px-4 py-3 text-xs" style={{ color: 'var(--gold-400)' }}>{row.hebrewGreek}</td>
                  <td className="px-4 py-3 text-xs font-mono" style={{ color: 'var(--shell-400)' }}>{row.metric}</td>
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
