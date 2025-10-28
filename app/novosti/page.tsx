import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WHATSAPP_LINK, PHONE_LINK, EMAIL_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Novosti i stručni članci o ženskom zdravlju | Poliklinika Harni",
  description: "Pratite najnovije vijesti, stručne članke i istraživanja iz ginekologije, onkologije i hormonalne medicine. Znanje donosi zdravlje.",
  keywords: [
    'novosti iz ginekologije',
    'stručni članci o ženskom zdravlju',
    'ginekologija Zagreb',
    'prenatalna dijagnostika',
    'laserska terapija u ginekologiji',
    'HPV i prevencija',
    'hormoni i neplodnost',
    'prehrana kod karcinoma',
    'menopauza i hormonalna ravnoteža',
    'Poliklinika Harni',
  ],
  openGraph: {
    title: 'Novosti i stručni članci o ženskom zdravlju | Poliklinika Harni',
    description: 'Pratite najnovije vijesti, stručne članke i istraživanja iz ginekologije.',
    url: 'https://poliklinika-harni.hr/novosti',
    images: [{ url: '/image.jpg', width: 1200, height: 630, alt: 'Novosti - Poliklinika Harni' }],
  },
  alternates: {
    canonical: 'https://poliklinika-harni.hr/novosti',
  },
};

// Hero Section
function HeroSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px]">
      <Image
        src="/image.jpg"
        alt="Novosti - Poliklinika Harni Zagreb"
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
              Novosti
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Znanje, iskustvo i novosti iz svijeta ginekologije
            </p>
            <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              U Poliklinici Harni vjerujemo da je informirana žena — zdrava žena. Na ovoj stranici možete pratiti najnovije vijesti, stručne članke i istraživanja iz područja ginekologije, reproduktivnog zdravlja, onkologije, hormonske ravnoteže i laserske terapije.
            </p>
            <p className="text-base text-white/70">
              Naš je cilj učiniti medicinu razumljivom, dostupnom i korisnom za svaku ženu.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/90 shadow-lg">
                <a href="#subscribe">
                  <MessageCircle className="h-5 w-5" />
                  Primajte obavijesti o novim člancima
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto gap-2 bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm">
                <a href={EMAIL_LINK}>
                  <Mail className="h-5 w-5" />
                  Pošaljite pitanje našem timu
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto gap-2 bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm">
                <a href={PHONE_LINK}>
                  <Phone className="h-5 w-5" />
                  Nazovite nas odmah
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Current Topics Section
function CurrentTopicsSection() {
  const topics = [
    {
      title: "Laserska terapija u ginekologiji — nove mogućnosti i indikacije",
      description: "Saznajte kako laserska tehnologija mijenja pristup liječenju inkontinencije, suhoće rodnice, ožiljaka i estetskih problema.",
      href: "/novosti/laserska-terapija",
    },
    {
      title: "HPV infekcija i prevencija ginekoloških karcinoma",
      description: "Najnovije spoznaje o prevenciji HPV-a, važnosti cijepljenja i ranom otkrivanju prekanceroza.",
      href: "/novosti/hpv-prevencija",
    },
    {
      title: "Neplodnost i lifestyle",
      description: "Hormonska ravnoteža, prehrana i personalizirani pristupi liječenju neplodnosti.",
      href: "/neplodnost-hormoni",
    },
    {
      title: "Trudnoća i prenatalna dijagnostika — što svaka buduća mama treba znati",
      description: "Najvažnije informacije o prenatalnim testovima, ultrazvučnim pregledima i skrbi za trudnice.",
      href: "/trudnoca",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Aktualne teme i istraživanja
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg">
              Ovdje možete pronaći članke o najnovijim temama iz kliničke prakse i znanosti, nastale u suradnji s našim timom liječnica i istraživača.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {topics.map((topic, index) => (
              <Link key={index} href={topic.href} className="group">
                <Card className="h-full border hover:shadow-md hover:border-primary/50 transition-all">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {topic.description}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      Pročitajte više →
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Popular Articles Section
function PopularArticlesSection() {
  const articles = [
    { title: "Menstrualni ciklus i hormonska ravnoteža", href: "/neplodnost-hormoni/menstrualni-ciklus" },
    { title: "Kontracepcija – vrste, djelovanje i sigurnost", href: "/neplodnost-hormoni/kontracepcija" },
    { title: "Vaginalna suhoća – uzroci i liječenje", href: "/novosti/vaginalna-suhoca" },
    { title: "Inkontinencija urina – lasersko liječenje i rehabilitacija", href: "/novosti/inkontinencija" },
    { title: "Endometrioza – uzroci, simptomi i terapija", href: "/novosti/endometrioza" },
    { title: "Miomi maternice – suvremeni pristupi liječenju", href: "/novosti/miomi" },
    { title: "Menopauza i hormonska terapija", href: "/neplodnost-hormoni/menopauza" },
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Najčitaniji članci i edukativni vodiči
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {articles.map((article, index) => (
              <Link key={index} href={article.href} className="group">
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-all">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg" variant="outline">
              <a href="#subscribe">
                <MessageCircle className="h-5 w-5 mr-2" />
                Saznajte više o temi koja vas zanima
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Clinic News Section
function ClinicNewsSection() {
  const news = [
    {
      date: "2025",
      title: "Novi laserski sustav za preciznu vulvoskopiju i kolposkopiju",
      description: "Poliklinika Harni uvela je najnoviji laserski uređaj za dijagnostiku i terapiju prekanceroza vrata maternice i vulve.",
      href: "/novosti/novi-laserski-sustav",
    },
    {
      date: "2025",
      title: "Proširenje tima – dr. Tatjana Mioč-Pranić i dr. Snješka Vitošević",
      description: "Naš tim obogaćen je stručnjakinjama za hormonalnu regulaciju, perinatologiju i prenatalnu dijagnostiku.",
      href: "/o-nama",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Vijesti iz Poliklinike Harni
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {news.map((item, index) => (
              <Link key={index} href={item.href} className="group">
                <Card className="h-full border hover:shadow-md hover:border-primary/50 transition-all">
                  <CardContent className="p-6 space-y-3">
                    <p className="text-xs text-primary font-semibold uppercase tracking-wider">
                      {item.date}
                    </p>
                    <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      Pročitajte više →
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Categories Section
function CategoriesSection() {
  const categories = [
    {
      icon: "📂",
      title: "Ginekologija i dijagnostika",
      description: "PAPA test, HPV, vulvoskopija, laserski zahvati",
      href: "/ginekologija",
    },
    {
      icon: "📂",
      title: "Trudnoća i prenatalna medicina",
      description: "Ultrazvuk, morfologija, NIPT test, planiranje trudnoće",
      href: "/trudnoca",
    },
    {
      icon: "📂",
      title: "Neplodnost i hormoni",
      description: "PCOS, hormonska regulacija, menopauza, prehrana",
      href: "/neplodnost-hormoni",
    },
    {
      icon: "📂",
      title: "Onkologija i prevencija",
      description: "Prekanceroze, karcinomi, prehrana, imunitet",
      href: "/ginekoloski-karcinomi",
    },
    {
      icon: "📂",
      title: "Zdravlje i životni stil",
      description: "Prehrana i bolest, tjelovježba, antioksidansi, stres, regeneracija",
      href: "/novosti/zdravlje-i-zivotni-stil",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Kategorije novosti
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Link key={index} href={category.href} className="group">
                <Card className="h-full border hover:shadow-md hover:border-primary/50 transition-all">
                  <CardContent className="p-6 space-y-3 text-center">
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg">
              <a href="#subscribe">
                <MessageCircle className="h-5 w-5 mr-2" />
                Pretplatite se na obavijesti o novim člancima
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Education Section
function EducationSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Edukacija i prevencija
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Naš cilj nije samo liječenje, već edukacija i prevencija.
            </p>
            <p className="text-muted-foreground mt-4">
              Zato redovito objavljujemo članke o važnim temama ženskog zdravlja — od adolescencije do postmenopauze. Svaki tekst temelji se na znanstvenim dokazima, ali je napisan razumljivim i pristupačnim jezikom.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild size="lg" variant="outline">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                Pošaljite pitanje liječnici
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={EMAIL_LINK}>
                <Mail className="h-5 w-5 mr-2" />
                Predložite temu za novi članak
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Why Read Section
function WhyReadSection() {
  const reasons = [
    "Autorski članci stručnjaka s dugogodišnjim iskustvom",
    "Aktualne teme iz ginekologije, onkologije i hormonalne medicine",
    "Pouzdane informacije temeljene na znanstvenim dokazima",
    "Jedinstven spoj kliničke prakse i edukacije",
    "Redovito ažurirane vijesti i istraživanja",
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Zašto čitati Novosti Poliklinike Harni
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid gap-4">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Subscribe Section
function SubscribeSection() {
  return (
    <section id="subscribe" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
              Ostanite informirani i povezani
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Primajte kratke obavijesti o novim člancima i istraživanjima
            </p>
            
            {/* Subscription Options */}
            <div className="bg-secondary/10 rounded-lg p-8 text-left max-w-2xl mx-auto">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6 text-center">
                Odaberite način primanja obavijesti:
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                  <MessageCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">WhatsApp obavijesti</p>
                    <p className="text-sm text-muted-foreground">Poruka s naslovom i linkom - brzo i jednostavno</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">E-mail obavijesti</p>
                    <p className="text-sm text-muted-foreground">Kratki sažetak i poveznica na članak</p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center mb-6">
                Označivanjem polja dajem privolu Poliklinici Harni da moje osobne podatke koristi isključivo za slanje kratkih informativnih obavijesti. Privolu mogu povući u bilo kojem trenutku.
              </p>

              <div className="text-center space-y-3">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Pretplatite se na WhatsApp obavijesti
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">ili</p>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                  <a href={EMAIL_LINK}>
                    <Mail className="h-5 w-5 mr-2" />
                    Primajte e-mail obavijesti
                  </a>
                </Button>
              </div>
            </div>

            <p className="text-base text-foreground font-medium pt-4">
              Poliklinika Harni — jer znanje donosi zdravlje
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Page Component
export default function NovostiPage() {
  return (
    <div>
      <HeroSection />
      <CurrentTopicsSection />
      <PopularArticlesSection />
      <ClinicNewsSection />
      <CategoriesSection />
      <EducationSection />
      <WhyReadSection />
      <SubscribeSection />
    </div>
  );
}

