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
};

export const ALL_PORT_SLUGS = Object.keys(PORT_CONFIG);
