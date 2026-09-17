/**
 * CruiseTimetables port slugs, display names, and itinerary regex patterns.
 * Shared by import-schedules, warm-schedule-cache, and import-schedules-slow.
 */

export const PORT_CONFIG = {
  "st-thomas": {
    name: "St. Thomas",
    itineraryPortRegex:
      /St\.?\s*Thomas,\s*US Virgin Islands\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  cozumel: {
    name: "Cozumel",
    itineraryPortRegex:
      /Cozumel,\s*Mexico\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  aruba: {
    name: "Aruba",
    itineraryPortRegex:
      /Oranjestad,\s*Aruba\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  "grand-cayman": {
    name: "Grand Cayman",
    itineraryPortRegex:
      /George Town,\s*Grand Cayman\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  nassau: {
    name: "Nassau",
    itineraryPortRegex:
      /Nassau,\s*Bahamas\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  roatan: {
    name: "Roatán",
    itineraryPortRegex:
      /Roatan,\s*Honduras\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  "st-maarten": {
    name: "St. Maarten",
    itineraryPortRegex:
      /Philipsburg,\s*St\.?\s*Maarten\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  "puerto-plata": {
    name: "Puerto Plata",
    itineraryPortRegex:
      /Puerto Plata\/Amber Cove,\s*Dominican Republic\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  "costa-maya": {
    name: "Costa Maya",
    itineraryPortRegex:
      /Costa Maya,\s*Mexico\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  "ocho-rios": {
    name: "Ocho Rios",
    itineraryPortRegex:
      /Ocho Rios,\s*Jamaica\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  tortola: {
    name: "Tortola",
    itineraryPortRegex:
      /Tortola,\s*British Virgin Islands\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  "puerto-limon": {
    name: "Puerto Limón",
    itineraryPortRegex:
      /Puerto Limon,\s*Costa Rica\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  "st-kitts": {
    name: "St. Kitts",
    itineraryPortRegex:
      /Basseterre,\s*St\.?\s*Kitts\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  curacao: {
    name: "Curaçao",
    itineraryPortRegex:
      /Willemstad,\s*Curacao\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  falmouth: {
    name: "Falmouth",
    itineraryPortRegex:
      /Falmouth,\s*Jamaica\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  antigua: {
    name: "Antigua",
    itineraryPortRegex:
      /St Johns,\s*Antigua\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  "san-juan": {
    name: "San Juan",
    itineraryPortRegex:
      /San Juan,\s*Puerto Rico\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  "la-romana": {
    name: "La Romana",
    itineraryPortRegex:
      /La Romana,\s*Dominican Republic\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  "montego-bay": {
    name: "Montego Bay",
    itineraryPortRegex:
      /Montego Bay,\s*Jamaica\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  bimini: {
    name: "Bimini",
    itineraryPortRegex:
      /Bimini Islands,\s*Bahamas\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  freeport: {
    name: "Freeport",
    itineraryPortRegex:
      /Freeport,\s*Bahamas\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  progreso: {
    name: "Progreso",
    itineraryPortRegex:
      /Progreso,\s*Mexico\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  "belize-city": {
    name: "Belize City",
    itineraryPortRegex:
      /Belize City,\s*Belize\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  "puerto-quetzal": {
    name: "Puerto Quetzal",
    itineraryPortRegex:
      /Puerto Quetzal,\s*Guatemala\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  puntarenas: {
    name: "Puntarenas",
    itineraryPortRegex:
      /Puntarenas,\s*Costa Rica\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  "grand-turk": {
    name: "Grand Turk",
    itineraryPortRegex:
      /Grand Turk,\s*Turks and Caicos\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  "key-west": {
    name: "Key West",
    itineraryPortRegex:
      /Key West,\s*Florida\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  barbados: {
    name: "Barbados",
    itineraryPortRegex:
      /Bridgetown,\s*Barbados\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  martinique: {
    name: "Martinique",
    itineraryPortRegex:
      /Fort de France,\s*Martinique\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  bonaire: {
    name: "Bonaire",
    itineraryPortRegex:
      /Kralendijk,\s*Bonaire\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  grenada: {
    name: "Grenada",
    itineraryPortRegex:
      /St Georges,\s*Grenada\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  "st-lucia": {
    name: "St. Lucia",
    itineraryPortRegex:
      /Castries,\s*St Lucia\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  samana: {
    name: "Samaná",
    itineraryPortRegex:
      /Samana,\s*Dominican Republic\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
  dominica: {
    name: "Dominica",
    itineraryPortRegex:
      /Roseau,\s*Dominica\s*\(\s*(\d{1,2}\s+\w{3})\s+(\d{4})-(\d{4})\s*\)/i,
  },
};

export const ALL_PORT_SLUGS = Object.keys(PORT_CONFIG);


/**
 * Port-name safety: do not auto-merge marketing destination names into wrong sites.
 * Encode before any Tortola (or similar) CT import promotion.
 */
export const PORT_HAZARD_RULES = {
  tortola: {
    allowedCallNames: [
      /tortola/i,
      /road\s*town/i,
    ],
    rejectCallNames: [
      /jost\s*van\s*dyke/i,
      /white\s*bay/i,
      /beef\s*island/i,
      /trellis\s*bay/i,
    ],
    note: "Tortola/Road Town must never absorb Jost Van Dyke or Beef Island calls.",
  },
  "puerto-plata": {
    note: "Preserve Amber Cove vs Taino Bay / Puerto Plata distinctions when source distinguishes them.",
    distinctLocations: ["Amber Cove", "Taino Bay", "Puerto Plata"],
  },
  antigua: {
    allowedCallNames: [/antigua/i, /st\.?\s*john'?s?/i],
    rejectCallNames: [/barbuda/i, /jolly\s*harbour/i],
    note: "Antigua cruise calls are St. John's — do not absorb Barbuda or unrelated island anchorages.",
  },
  barbados: {
    allowedCallNames: [/barbados/i, /bridgetown/i],
    rejectCallNames: [/speightstown/i, /holetown/i, /oistins/i],
    note: "Barbados cruise calls are Bridgetown — do not flatten beach towns into port calls.",
  },
  "st-lucia": {
    allowedCallNames: [/st\.?\s*lucia/i, /castries/i],
    rejectCallNames: [/soufri[eè]re/i, /pitons/i],
    note: "St. Lucia cruise calls are Castries — Pitons/Soufrière are excursion geography, not cruise terminals.",
  },
  curacao: {
    allowedCallNames: [/cura[cç]ao/i, /curacao/i, /willemstad/i],
    rejectCallNames: [/klein\s*cura[cç]ao/i, /westpunt/i],
    note: "Curaçao cruise calls are Willemstad — do not invent berths or absorb Klein Curaçao day-trip geography.",
  },
  "ocho-rios": {
    allowedCallNames: [/ocho\s*rios/i],
    rejectCallNames: [/falmouth/i, /montego\s*bay/i, /negril/i, /kingston/i],
    note: "Keep Ocho Rios separate from Falmouth and Montego Bay.",
  },
  falmouth: {
    allowedCallNames: [/falmouth/i],
    rejectCallNames: [/ocho\s*rios/i, /montego\s*bay/i, /negril/i, /kingston/i],
    note: "Keep Falmouth separate from Ocho Rios and Montego Bay.",
  },
  "montego-bay": {
    allowedCallNames: [/montego\s*bay/i],
    rejectCallNames: [/ocho\s*rios/i, /falmouth/i, /negril/i, /kingston/i],
    note: "Keep Montego Bay separate from Ocho Rios and Falmouth.",
  },
  "st-kitts": {
    allowedCallNames: [/st\.?\s*kitts/i, /basseterre/i, /port\s*zante/i],
    rejectCallNames: [/south\s*friars/i, /friars?\s*bay/i, /\bnevis\b/i],
    note: "St. Kitts cruise calls are Basseterre / Port Zante — do not silently treat South Friars Bay as the same terminal.",
  },
  grenada: {
    allowedCallNames: [/grenada/i, /st\.?\s*george'?s?/i],
    rejectCallNames: [/carriacou/i, /petite?\s*martinique/i],
    note: "Grenada cruise calls are St. George's — do not absorb other island anchorages.",
  },
  martinique: {
    allowedCallNames: [/martinique/i, /fort[\s-]?de[\s-]?france/i],
    rejectCallNames: [/les?\s*trois[\s-][iî]lets/i, /st\.?\s*pierre/i, /le\s*marin/i],
    note: "Martinique cruise calls are Fort-de-France — other island towns are excursion geography.",
  },
  "san-juan": {
    allowedCallNames: [/san\s*juan/i, /puerto\s*rico/i],
    rejectCallNames: [/ponce/i, /mayag[uü]ez/i, /culebra/i, /vieques/i],
    note: "San Juan cruise calls stay in San Juan — do not invent pier assignments when sources are silent.",
  },
  "grand-turk": {
    allowedCallNames: [/grand\s*turk/i, /cruise\s*center/i],
    rejectCallNames: [/providenciales/i, /provo/i, /salt\s*cay/i],
    note: "Grand Turk cruise calls are the Grand Turk Cruise Center — not Providenciales.",
  },
  "belize-city": {
    allowedCallNames: [/belize\s*city/i, /belize/i],
    rejectCallNames: [/harvest\s*caye/i, /placencia/i, /san\s*pedro/i, /ambergris/i],
    note: "Belize City is a tender/anchorage call — do not invent a pier berth or absorb Harvest Caye.",
  },
  "key-west": {
    allowedCallNames: [/key\s*west/i],
    rejectCallNames: [/marathon/i, /key\s*largo/i, /dry\s*tortugas/i],
    note: "Key West pier labels (Mallory Square, Pier B, Outer Mole, etc.) only when source-supported — never invent berth.",
  },
};

export function passesPortHazardRule(portSlug, callLocationName) {
  const rule = PORT_HAZARD_RULES[portSlug];
  if (!rule || !callLocationName) return true;
  const name = String(callLocationName);
  if (rule.rejectCallNames?.some((re) => re.test(name))) return false;
  if (rule.allowedCallNames?.length) {
    return rule.allowedCallNames.some((re) => re.test(name));
  }
  return true;
}
