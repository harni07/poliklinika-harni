import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WHATSAPP_LINK, PHONE_LINK, EMAIL_LINK, TEAM_MEMBERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Neplodnost, hormoni i menopauza – dijagnostika i liječenje | Poliklinika Harni",
  description: "Cjeloviti pristup hormonskoj ravnoteži i plodnosti. Menstrualni ciklus, PCOS, menopauza i personalizirano liječenje neplodnosti.",
  keywords: [
    'neplodnost i hormoni',
    'hormonski poremećaji žena',
    'menstrualni ciklus',
    'kontracepcija i hormonska terapija',
    'hormoni i menopauza',
    'neplodnost liječenje',
    'hormonska neravnoteža',
    'PCOS i plodnost',
    'hormonalna analiza',
    'ginekolog endokrinolog Zagreb',
    'ginekološka poliklinika Harni',
  ],
  openGraph: {
    title: 'Neplodnost, hormoni i menopauza | Poliklinika Harni',
    description: 'Cjeloviti pristup hormonskoj ravnoteži i plodnosti. Menstrualni ciklus, PCOS, menopauza.',
    url: 'https://poliklinika-harni.hr/neplodnost-hormoni',
    images: [{ url: '/image.jpg', width: 1200, height: 630, alt: 'Neplodnost i hormoni - Poliklinika Harni' }],
  },
  alternates: {
    canonical: 'https://poliklinika-harni.hr/neplodnost-hormoni',
  },
};

// Hero Section
function HeroSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px]">
      <Image
        src="/image.jpg"
        alt="Neplodnost i hormoni - Poliklinika Harni Zagreb"
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
              Neplodnost i hormoni
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Ravnoteža hormona i reproduktivno zdravlje žene
            </p>
            <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Hormoni upravljaju svakim dijelom ženskog života — od prve menstruacije, preko plodnih godina i trudnoće, do menopauze. U Poliklinici Harni pružamo cjelovitu dijagnostiku, savjetovanje i terapiju hormonskih poremećaja te sveobuhvatnu obradu neplodnosti uz individualni pristup svakoj pacijentici.
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

// Menstrual Cycle Section
function MenstrualCycleSection() {
  const reasons = [
    "Neredovite ili izostale menstruacije",
    "Obilna ili bolna krvarenja",
    "Predmenstrualni sindrom (PMS)",
    "Hormonalne promjene nakon poroda ili u perimenopauzi",
  ];

  const articles = [
    { title: "Menstrualni ciklus i hormonska ravnoteža", href: "/neplodnost-hormoni/menstrualni-ciklus" },
    { title: "PMS i predmenstrualni poremećaji", href: "/neplodnost-hormoni/pms" },
    { title: "Bolne menstruacije i dismenoreja", href: "/neplodnost-hormoni/dismenoreja" },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Menstrualni ciklus — ogledalo hormonalne ravnoteže
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Menstrualni ciklus odražava složenu ravnotežu hormona estrogena, progesterona, FSH-a i LH-a. Nepravilnosti u ciklusu mogu biti prvi znak poremećaja štitnjače, hiperprolaktinemije, PCOS-a ili inzulinske rezistencije.
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <p className="text-foreground font-medium">Najčešći razlozi za poremećaj ciklusa:</p>
            <div className="grid gap-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-secondary/10 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{reason}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground pt-4">
              U Poliklinici Harni provodimo detaljnu hormonsku i ultrazvučnu dijagnostiku, uz analizu štitnjače, nadbubrežnih i spolnih hormona.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <p className="text-foreground font-medium text-center">Saznajte više:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {articles.map((article, index) => (
                <Link key={index} href={article.href}>
                  <Button variant="outline" size="sm">
                    {article.title}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                Zatražite hormonsku analizu
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contraception Section
function ContraceptionSection() {
  const methods = [
    "Oralnim kontraceptivima i njihovom hormonskom učinku",
    "Intrauterinim ulošcima (spiralama), s ili bez hormona",
    "Implantatima i vaginalnim prstenovima",
    "Prirodnim metodama planiranja trudnoće",
    "Postkontraceptivnim pregledima i kontroli ciklusa",
  ];

  const articles = [
    { title: "Vrste kontracepcije – prednosti i rizici", href: "/neplodnost-hormoni/kontracepcija" },
    { title: "Hormonska kontracepcija i zdravlje žene", href: "/neplodnost-hormoni/hormonska-kontracepcija" },
    { title: "Prirodne metode planiranja trudnoće", href: "/neplodnost-hormoni/prirodne-metode" },
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Kontracepcija — više od zaštite
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Kontracepcija nije samo način sprječavanja trudnoće, već i alat za regulaciju ciklusa, liječenje akni, cisti, bolnih menstruacija i hormonske neravnoteže. Odabir metode ovisi o dobi, zdravstvenom statusu i planovima za trudnoću.
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <p className="text-foreground font-medium">U Poliklinici Harni dostupno je stručno savjetovanje o:</p>
            <div className="grid gap-3">
              {methods.map((method, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-foreground">{method}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <p className="text-foreground font-medium text-center">Saznajte više:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {articles.map((article, index) => (
                <Link key={index} href={article.href}>
                  <Button variant="outline" size="sm">
                    {article.title}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <a href={EMAIL_LINK}>
                <Mail className="h-5 w-5 mr-2" />
                Zatražite savjet o kontracepciji
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Infertility Section
function InfertilitySection() {
  const diagnostics = [
    "Detaljnu hormonsku obradu (FSH, LH, estradiol, AMH, prolaktin, TSH)",
    "Ultrazvučni prikaz ovulacije i folikulometriju",
    "Procjenu prohodnosti jajovoda",
    "Analizu štitnjače i inzulinske rezistencije",
    "Savjetovanje o plodnim danima i prirodnim metodama začeća",
  ];

  const articles = [
    { title: "Neplodnost – uzroci i dijagnostika", href: "/neplodnost-hormoni/neplodnost" },
    { title: "Hormonalni uzroci neplodnosti", href: "/neplodnost-hormoni/hormonalni-uzroci" },
    { title: "Endometrioza i plodnost", href: "/neplodnost-hormoni/endometrioza" },
    { title: "Štitnjača i reprodukcija", href: "/neplodnost-hormoni/stitnjaca" },
    { title: "Psihološki aspekti neplodnosti", href: "/neplodnost-hormoni/psiholoski-aspekti" },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Neplodnost — razumijevanje i rješenja
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Neplodnost pogađa svaku petu ženu u reproduktivnoj dobi, a uzroci su najčešće hormonski disbalans, poremećaj ovulacije, endometrioza ili imunološki čimbenici. U Poliklinici Harni provodimo sveobuhvatnu obradu neplodnosti i nudimo personalizirane terapijske protokole.
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <p className="text-foreground font-medium">Naš pristup uključuje:</p>
            <div className="grid gap-4">
              {diagnostics.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-secondary/10 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <p className="text-foreground font-medium text-center">Saznajte više:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {articles.map((article, index) => (
                <Link key={index} href={article.href}>
                  <Button variant="outline" size="sm">
                    {article.title}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                Dogovorite konzultaciju o neplodnosti
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Menopause Section
function MenopauseSection() {
  const symptoms = [
    "Valunge i noćno znojenje",
    "Nesanicu i promjene raspoloženja",
    "Suhoću rodnice i smetnje pri odnosu",
    "Smanjenu gustoću kostiju",
    "Debljanje i promjene metabolizma",
  ];

  const articles = [
    { title: "Menopauza i hormonska terapija", href: "/neplodnost-hormoni/menopauza" },
    { title: "Prirodni prijelaz i perimenopauza", href: "/neplodnost-hormoni/perimenopauza" },
    { title: "Vaginalna suhoća i laserska terapija", href: "/neplodnost-hormoni/vaginalna-suhoca" },
    { title: "Menopauza i zdravlje srca i kostiju", href: "/neplodnost-hormoni/menopauza-zdravlje" },
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Menopauza — novo životno poglavlje
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Menopauza označava kraj reproduktivnog razdoblja, ali ne i kraj vitalnosti. U tom razdoblju dolazi do smanjene proizvodnje estrogena i progesterona, što može uzrokovati razne simptome.
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <p className="text-foreground font-medium">Najčešći simptomi:</p>
            <div className="grid gap-3 md:grid-cols-2">
              {symptoms.map((symptom, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{symptom}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground pt-4">
              U Poliklinici Harni pristup menopauzi uključuje hormonsku analizu, lasersku terapiju, nutritivnu potporu i individualiziranu hormonsku terapiju kad je potrebna.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <p className="text-foreground font-medium text-center">Saznajte više:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {articles.map((article, index) => (
                <Link key={index} href={article.href}>
                  <Button variant="outline" size="sm">
                    {article.title}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <a href={EMAIL_LINK}>
                <Mail className="h-5 w-5 mr-2" />
                Zatražite pregled i savjet
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
    "Više od 25 godina iskustva u dijagnostici i liječenju hormonskih poremećaja",
    "Cjelovit pristup — od puberteta do menopauze",
    "Napredna dijagnostika — laboratorijska, ultrazvučna i metabolička analiza",
    "Integrativna medicina — hormonska ravnoteža, prehrana i infuzijska terapija",
    "Brza dostupnost i diskrecija",
  ];

  const teamMembers = [
    {
      name: "Dr. Vesna Harni",
      role: "Rekonstruktivna i estetska ginekologija",
      description: "Ekspert za kolposkopiju, rekonstruktivnu i estetsku ginekologiju",
    },
    {
      name: "Dr. Tatjana Mioč-Pranić",
      role: "Hormoni i reproduktivno zdravlje",
      description: "Specijalistica za hormonske poremećaje menstrualnog ciklusa i hormonsko liječenje, PCOS i menopauzu",
    },
    {
      name: "Dr. Snješka Vitošević",
      role: "Trudnoća i hormonske promjene",
      description: "Vodi praćenje trudnoća i hormonalne promjene u ranoj gestaciji",
    },
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

          <div className="grid gap-4 mb-16">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-secondary/10 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                  {index + 1}
                </div>
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
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center space-y-3">
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
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{member.description}</p>
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

// Articles Section
function ArticlesSection() {
  const articles = [
    {
      title: "Menstrualni ciklus i hormonalni ritmovi",
      href: "/neplodnost-hormoni/menstrualni-ciklus",
    },
    {
      title: "Kontracepcija i hormonska ravnoteža",
      href: "/neplodnost-hormoni/kontracepcija",
    },
    {
      title: "Neplodnost – suvremene metode liječenja",
      href: "/neplodnost-hormoni/neplodnost",
    },
    {
      title: "Menopauza – prilagodba i terapijski pristupi",
      href: "/neplodnost-hormoni/menopauza",
    },
    {
      title: "Hormoni štitnjače i žensko zdravlje",
      href: "/neplodnost-hormoni/stitnjaca",
    },
    {
      title: "Prehrana i hormonska ravnoteža",
      href: "/neplodnost-hormoni/prehrana",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Pročitajte više: stručni članci o hormonima i reproduktivnom zdravlju
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <Link key={index} href={article.href} className="group">
                <Card className="h-full border hover:shadow-md hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
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
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
              Neplodnost i hormoni — ravnoteža koja mijenja život
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              U Poliklinici Harni vjerujemo da je svaka žena jedinstvena.
            </p>
            <p className="text-foreground text-lg">
              Naš je cilj vratiti hormonalnu ravnotežu, olakšati simptome i podržati reproduktivno zdravlje — znanjem, iskustvom i pažnjom.
            </p>
            <p className="text-base text-foreground font-medium">
              Poliklinika Harni — jer hormoni upravljaju životom, a znanje donosi ravnotežu
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
export default function NeplodnostHormoniPage() {
  return (
    <div>
      <HeroSection />
      <MenstrualCycleSection />
      <ContraceptionSection />
      <InfertilitySection />
      <MenopauseSection />
      <WhyChooseUsSection />
      <ArticlesSection />
      <FinalCTASection />
    </div>
  );
}

