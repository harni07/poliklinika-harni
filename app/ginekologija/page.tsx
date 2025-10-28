import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WHATSAPP_LINK, PHONE_LINK, EMAIL_LINK, TEAM_MEMBERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ginekolog Zagreb – Pregledi, ultrazvuk, PAPA test | Poliklinika Harni",
  description: "Stručni ginekološki pregledi, kolposkopija, vulvoskopija, LETZ i laserski tretmani. Dogovorite pregled bez čekanja i s potpunom diskrecijom.",
  keywords: [
    'ginekolog Zagreb',
    'ginekološki pregled bez čekanja',
    'ginekološki ultrazvuk',
    'PAPA test Zagreb',
    'kolposkopija i vulvoskopija',
    'laserski tretmani u ginekologiji',
    'LETZ zahvati',
    'liječenje vaginalne suhoće',
    'menopauza i hormoni',
    'miomi, ciste, endometrioza',
    'inkontinencija',
    'urinarna inkontinencija',
    'lasersko liječenje inkontinencije',
    'ginekološka poliklinika Zagreb',
  ],
  openGraph: {
    title: 'Ginekolog Zagreb – Pregledi, ultrazvuk, PAPA test | Poliklinika Harni',
    description: 'Stručni ginekološki pregledi, kolposkopija, vulvoskopija, LETZ i laserski tretmani. Bez čekanja.',
    url: 'https://poliklinika-harni.hr/ginekologija',
    images: [{ url: '/image.jpg', width: 1200, height: 630, alt: 'Ginekologija - Poliklinika Harni' }],
  },
  alternates: {
    canonical: 'https://poliklinika-harni.hr/ginekologija',
  },
};

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px]">
      <Image
        src="/image.jpg"
        alt="Ginekologija - Poliklinika Harni Zagreb"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 w-full">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              Ginekologija
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Stručnost, sigurnost i povjerenje u svakoj fazi ženskog života
            </p>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
              U Poliklinici Harni brinemo o ženskom zdravlju više od 25 godina. Naš ginekološki tim pruža preciznu dijagnostiku, suvremeno liječenje i individualni pristup svakoj pacijentici.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/90 shadow-lg">
                <a href={PHONE_LINK}>
                  <Phone className="h-5 w-5" />
                  Nazovite odmah
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto gap-2 bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Pošaljite WhatsApp poruku
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto gap-2 bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm">
                <a href={EMAIL_LINK}>
                  <Mail className="h-5 w-5" />
                  Zatražite termin e-mailom
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Regular Checkup Section
function RegularCheckupSection() {
  const services = [
    "Ginekološki pregled i ultrazvuk",
    "PAPA test, cervikalne briseve i bris na HPV",
    "Kolposkopiju i vulvoskopiju, LETZ i lasersku terapiju prekanceroza",
    "Hormonsku i endokrinološku obradu",
    "3D/4D ultrazvuk maternice i jajnika",
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Redoviti ginekološki pregled — temelj zdravlja
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg">
              Preventivni pregledi ključ su ranog otkrivanja promjena i očuvanja plodnosti.
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <p className="text-foreground font-medium">Kod nas možete obaviti:</p>
            <div className="grid gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-secondary/10 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{service}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground text-center pt-4">
              Pregled se može dogovoriti u kratkom roku, bez uputnice i bez čekanja.
            </p>
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                Dogovorite pregled odmah
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Specialized Treatments Section
function SpecializedTreatmentsSection() {
  const treatments = [
    {
      title: "Laserski tretmani",
      description: "Za vaginalnu suhoću, ožiljke, urinarno curenje (inkontinenciju) i estetske korekcije",
    },
    {
      title: "Kolposkopija i vulvoskopija",
      description: "Precizna dijagnostika promjena vrata maternice i vulve",
    },
    {
      title: "Elektrokirurški / LETZ zahvati",
      description: "Minimalno invazivno, uz brži oporavak i visoku učinkovitost",
    },
    {
      title: "Menopauza i hormonska ravnoteža",
      description: "Terapije prilagođene svakoj fazi života",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Specijalizirani tretmani i dijagnostika
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg">
              Naš pristup ginekologiji temelji se na suvremenim tehnologijama i dugogodišnjem iskustvu.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {treatments.map((treatment, index) => (
              <Card key={index} className="border hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {treatment.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {treatment.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg" variant="outline">
              <a href={EMAIL_LINK}>
                <Mail className="h-5 w-5 mr-2" />
                Pošaljite upit za termin
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Why Choose Us + Team Section
function WhyChooseUsSection() {
  const reasons = [
    "Stručan tim ginekologinja s višedesetljetnim iskustvom",
    "Napredna dijagnostika i laserske metode liječenja",
    "Bez čekanja i u potpunoj diskreciji",
    "Osobni pristup svakoj pacijentici",
    "Brza komunikacija putem WhatsAppa, e-maila ili telefona",
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Zašto odabrati Polikliniku Harni
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 mb-16">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-secondary/10 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{reason}</p>
              </div>
            ))}
          </div>

          {/* Team */}
          <div className="space-y-8">
            <h3 className="font-serif text-2xl font-semibold text-foreground text-center">
              Naš tim
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              {TEAM_MEMBERS.map((member) => (
                <div key={member.slug} className="text-center space-y-3">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden bg-muted">
                    <Image
                      src="/image.jpg"
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>
                  <div>
                    <p className="font-serif text-lg font-semibold text-foreground">{member.name}</p>
                    <p className="text-sm text-primary font-medium">{member.role}</p>
                    <p className="text-sm text-muted-foreground mt-2">{member.specialization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                Kontaktirajte nas odmah
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Common Reasons Section
function CommonReasonsSection() {
  const reasons = [
    "Redovitog ginekološkog pregleda",
    "Sumnje na upalu ili infekciju",
    "Neurednih PAPA nalaza",
    "Bolnih odnosa ili vaginalne suhoće",
    "Menstrualnih poremećaja",
    "Simptoma menopauze",
    "Urinarne inkontinencije",
    "Praćenja trudnoće",
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Naši pacijenti najčešće dolaze zbog
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid gap-3 md:grid-cols-2 mb-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                </div>
                <p className="text-foreground">{reason}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mb-8">
            U Poliklinici Harni pružamo potpunu dijagnostiku i liječenje na jednom mjestu, uz točan termin i stručan pristup.
          </p>

          <div className="text-center">
            <Button asChild size="lg">
              <a href={PHONE_LINK}>
                <Phone className="h-5 w-5 mr-2" />
                Nazovite i rezervirajte pregled
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Topics Section
function TopicsSection() {
  const topics = [
    {
      title: "Prvi ginekološki pregled",
      description: "Što očekivati na prvom pregledu, kako se pripremiti i zašto je važan u adolescenciji i ranoj odrasloj dobi.",
      href: "/ginekologija/prvi-pregled",
    },
    {
      title: "Ginekološka dijagnostika",
      description: "Sve o ultrazvuku, kolposkopiji, PAPA testu, vulvoskopiji i suvremenim metodama rane detekcije bolesti.",
      href: "/ginekologija/dijagnostika",
    },
    {
      title: "Spolno prenosive bolesti",
      description: "Najčešće infekcije, njihovi simptomi i mogućnosti liječenja — uz poseban naglasak na HPV i prevenciju cervikalnih promjena.",
      href: "/ginekologija/spolno-prenosive-bolesti",
    },
    {
      title: "Miomi, ciste i endometrioza",
      description: "Kako prepoznati i liječiti benigne promjene maternice i jajnika. Minimalno invazivne metode i personalizirani pristup.",
      href: "/ginekologija/miomi-ciste-endometrioza",
    },
    {
      title: "Inkontinencija urina",
      description: "Suvremene laserske tretmane i funkcionalnu rehabilitaciju dna zdjelice — bez boli, bez operacije, uz obnovljeno samopouzdanje.",
      href: "/ginekologija/inkontinencija",
    },
    {
      title: "Prehrana kod ginekoloških oboljenja",
      description: "Uloga prehrane u regulaciji hormona, smanjenju upala i potpori reproduktivnom zdravlju.",
      href: "/ginekologija/prehrana",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Izdvojene teme iz ginekologije
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              U Poliklinici Harni vjerujemo da je informirana pacijentica – zdrava pacijentica. Zato smo pripremili niz edukativnih tekstova koji detaljno objašnjavaju najvažnije teme ženskog zdravlja.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {topics.map((topic, index) => (
              <Link key={index} href={topic.href} className="group">
                <Card className="h-full border hover:shadow-md hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {topic.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 space-y-4">
            <p className="text-muted-foreground">
              Saznajte više o temama koje vas zanimaju
            </p>
            <Button asChild size="lg" variant="outline">
              <a href={EMAIL_LINK}>
                <Mail className="h-5 w-5 mr-2" />
                Pošaljite pitanje našem timu
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTASection() {
  return (
    <section className="py-20 md:py-28 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
              Ginekologija s povjerenjem
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Naše pacijentice najviše cijene stručnost, diskreciju i brze rezultate.
            </p>
            <p className="text-foreground text-lg">
              Vaše zdravlje zaslužuje pažnju, znanje i iskustvo — bez stresa i dugog čekanja.
            </p>
            <p className="text-base text-foreground font-medium">
              Poliklinika Harni — jer povjerenje počinje znanjem
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Button asChild size="lg" className="w-full sm:w-auto gap-2">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Pošaljite poruku putem WhatsAppa
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto gap-2">
              <a href={EMAIL_LINK}>
                <Mail className="h-5 w-5" />
                Zatražite termin e-mailom
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto gap-2">
              <a href={PHONE_LINK}>
                <Phone className="h-5 w-5" />
                Nazovite nas odmah
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Page Component
export default function GinekologijaPage() {
  return (
    <div>
      <HeroSection />
      <RegularCheckupSection />
      <SpecializedTreatmentsSection />
      <WhyChooseUsSection />
      <CommonReasonsSection />
      <TopicsSection />
      <FinalCTASection />
    </div>
  );
}

