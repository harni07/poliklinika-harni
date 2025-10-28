/**
 * Konstante i konfiguracija za Polikliniku Harni web stranicu
 */

export const CONTACT_INFO = {
  name: "Poliklinika Harni",
  fullName: "Ginekološka poliklinika Dr. med. Vesna Harni",
  address: {
    street: "Bukovačka 1 / III kat",
    city: "10 000 Zagreb",
    country: "Hrvatska",
  },
  email: "info@poliklinika-harni.hr",
  phones: {
    tel1: "+385 1 29 23 648",
    tel2: "+385 1 29 21 599",
    mobile: "+385 98 458 114",
    fax: "+385 1 29 21 603",
  },
  business: {
    oib: "04688087369",
    mb: "01395785",
  },
  workingHours: {
    weekdays: "7:00 - 21:00 h",
    weekdaysPatients: "7:30 - 20:30 h",
    saturday: "7:30 - 12:30 h",
    saturdayPatients: "8:00 - 12:00 h",
  },
} as const;

// WhatsApp link
export const WHATSAPP_LINK = `https://wa.me/385984581140`;

// Phone link (glavni broj)
export const PHONE_LINK = `tel:+385129236480`;

// Email link
export const EMAIL_LINK = `mailto:${CONTACT_INFO.email}`;

// Navigacijski linkovi
export const NAV_LINKS = [
  {
    label: "Ginekologija",
    href: "/ginekologija",
  },
  {
    label: "Neplodnost i hormoni",
    href: "/neplodnost-hormoni",
  },
  {
    label: "Trudnoća",
    href: "/trudnoca",
  },
  {
    label: "Ginekološki karcinomi",
    href: "/ginekoloski-karcinomi",
  },
  {
    label: "Novosti",
    href: "/novosti",
  },
  {
    label: "O nama",
    href: "/o-nama",
  },
  {
    label: "Kontakt",
    href: "/kontakt",
  },
] as const;

// Tim liječnica
export const TEAM_MEMBERS = [
  {
    name: "Dr. Vesna Harni",
    role: "Rekonstruktivna i estetska ginekologija",
    specialization: "Kolposkopija, vulvoskopija i laserski tretmani",
    image: "/images/team/dr-vesna-harni.jpg",
    slug: "dr-vesna-harni",
  },
  {
    name: "Dr. Snješka Vitošević",
    role: "Trudnoće i prenatalna dijagnostika",
    specialization: "Praćenje trudnoće, fetalni ultrazvuk i prenatalni testovi",
    image: "/images/team/dr-snjeska-vitosevic.jpg",
    slug: "dr-snjeska-vitosevic",
  },
  {
    name: "Dr. Tatjana Mioč-Pranić",
    role: "Kolposkopija, hormoni i menopauza",
    specialization: "Hormonska ravnoteža i reproduktivno zdravlje",
    image: "/images/team/dr-tatjana-mioc-pranic.jpg",
    slug: "dr-tatjana-mioc-pranic",
  },
] as const;

// Područja stručnosti (za naslovnu stranicu)
export const SERVICE_CATEGORIES = [
  {
    title: "Ginekologija",
    description: "Redoviti pregledi, PAPA test, ultrazvuk, kolposkopija i liječenje upala",
    href: "/ginekologija",
    icon: "stethoscope",
  },
  {
    title: "Neplodnost i hormoni",
    description: "Dijagnostika uzroka neplodnosti i personalizirani plan liječenja",
    href: "/neplodnost-hormoni",
    icon: "heart-pulse",
  },
  {
    title: "Trudnoća",
    description: "Praćenje trudnoće, fetalni ultrazvuk i prenatalna dijagnostika",
    href: "/trudnoca",
    icon: "baby",
  },
  {
    title: "Laserski tretmani",
    description: "Minimalno invazivne metode za vaginalnu suhoću, ožiljke i inkontinenciju",
    href: "/ginekologija#laserski-tretmani",
    icon: "sparkles",
  },
  {
    title: "Prevencija i onkologija",
    description: "Rani screening i praćenje liječenja ginekoloških karcinoma",
    href: "/ginekoloski-karcinomi",
    icon: "shield-check",
  },
] as const;

// SEO metadata za glavne stranice
export const PAGE_METADATA = {
  home: {
    title: "Poliklinika Harni Zagreb – Stručnost, povjerenje i briga o ženskom zdravlju",
    description: "Više od 25 godina iskustva u ginekologiji, trudnoći, hormonima i onkologiji. Dogovorite pregled – bez čekanja i s potpunim povjerenjem.",
  },
  ginekologija: {
    title: "Ginekolog Zagreb – Pregledi, ultrazvuk, PAPA test | Poliklinika Harni",
    description: "Stručni ginekološki pregledi, kolposkopija, vulvoskopija, LETZ i laserski tretmani. Dogovorite pregled bez čekanja i s potpunom diskrecijom.",
  },
  neplodnost: {
    title: "Neplodnost, hormoni i menopauza – dijagnostika i liječenje | Poliklinika Harni",
    description: "Cjeloviti pristup hormonskoj ravnoteži i plodnosti. Menstrualni ciklus, PCOS, menopauza i personalizirano liječenje neplodnosti.",
  },
  trudnoca: {
    title: "Trudnoća i prenatalna dijagnostika – skrb i sigurnost | Poliklinika Harni",
    description: "Praćenje trudnoće, 3D/4D ultrazvuk, NIPT test i prenatalna dijagnostika. Brinite o sebi i svojoj bebi uz stručan tim Poliklinike Harni.",
  },
  karcinomi: {
    title: "Rano otkrivanje i prevencija ginekoloških karcinoma | Poliklinika Harni",
    description: "HPV test, kolposkopija, vulvoskopija, LETZ i laserska dijagnostika. Rano otkrivanje spašava život – dogovorite pregled u Poliklinici Harni.",
  },
  novosti: {
    title: "Novosti i stručni članci o ženskom zdravlju | Poliklinika Harni",
    description: "Pratite najnovije vijesti, istraživanja i stručne članke iz ginekologije, onkologije i hormonalne medicine. Znanje donosi zdravlje.",
  },
  oNama: {
    title: "O nama – Tim stručnjakinja Poliklinike Harni Zagreb",
    description: "Dr. Vesna Harni i tim ginekologinja s više od 25 godina iskustva u dijagnostici, liječenju i prevenciji ženskih bolesti.",
  },
  kontakt: {
    title: "Kontakt – Poliklinika Harni Zagreb | Dogovorite pregled",
    description: "Kontaktirajte nas putem e-maila, WhatsAppa ili telefonom. Brzi termini bez čekanja, diskrecija i osobni pristup svakoj pacijentici.",
  },
} as const;

