import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WHATSAPP_LINK, PHONE_LINK, EMAIL_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Rano otkrivanje i prevencija ginekoloških karcinoma | Poliklinika Harni",
  description: "HPV test, kolposkopija, vulvoskopija, LETZ i laserska dijagnostika. Rano otkrivanje spašava život – dogovorite pregled u Poliklinici Harni.",
  keywords: [
    'ginekološki karcinomi',
    'rak vrata maternice',
    'HPV infekcija i prevencija',
    'kolposkopija i vulvoskopija',
    'prekanceroze i CIN promjene',
    'LETZ zahvati',
    'laserska dijagnostika',
    'rak endometrija',
    'rak jajnika',
    'rak vulve',
    'prehrana kod ginekoloških karcinoma',
    'nutritivna potpora kod raka',
    'ginekološka onkologija Zagreb',
    'ginekološka poliklinika Harni',
  ],
  openGraph: {
    title: 'Rano otkrivanje i prevencija ginekoloških karcinoma | Poliklinika Harni',
    description: 'HPV test, kolposkopija, vulvoskopija, LETZ i laserska dijagnostika. Rano otkrivanje spašava život.',
    url: 'https://poliklinika-harni.hr/ginekoloski-karcinomi',
    images: [{ url: '/image.jpg', width: 1200, height: 630, alt: 'Ginekološki karcinomi - Poliklinika Harni' }],
  },
  alternates: {
    canonical: 'https://poliklinika-harni.hr/ginekoloski-karcinomi',
  },
};

// Hero Section
function HeroSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px]">
      <Image
        src="/image.jpg"
        alt="Ginekološki karcinomi - Prevencija i rana dijagnostika - Poliklinika Harni"
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
              Ginekološki karcinomi
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Rano otkrivanje spašava život
            </p>
            <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Rak vrata maternice, endometrija, jajnika ili vulve može se otkriti na vrijeme — ako se provodi redoviti ginekološki nadzor. U Poliklinici Harni provodimo ranu dijagnostiku i praćenje ginekoloških karcinoma, koristeći najpreciznije metode kolposkopije, vulvoskopije, HPV testiranja i laserske dijagnostike.
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

// Early Diagnostics Section
function EarlyDiagnosticsSection() {
  const procedures = [
    "PAPA test — osnovni screening za promjene na vratu maternice (klasični i tekućinski LBC test)",
    "HPV tipizaciju — detekcija visokorizičnih tipova virusa",
    "Kolposkopiju i vulvoskopiju — pregled vulve, vagine i cerviksa pod povećanjem i visokom rezolucijom",
    "Tri prstena vulve, Emla test i \"O znak\" — inovativne metode razlikovanja kronične vulvarne boli i prekanceroza (prema DATRIV studiji)",
    "LETZ — minimalno invazivni zahvati za dijagnostiku i terapiju CIN promjena",
    "COLPOSCAN — laserski poštedni zahvat za liječenje preinvazivnih promjena vagine i vulve",
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Rana dijagnostika ginekoloških karcinoma
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Rano otkrivanje malignih promjena značajno povećava uspješnost liječenja. Naš dijagnostički program temelji se na suvremenim, neinvazivnim metodama i dugogodišnjem iskustvu u prepoznavanju premalignih lezija.
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <p className="text-foreground font-medium">Dijagnostički postupci uključuju:</p>
            <div className="grid gap-4">
              {procedures.map((procedure, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-secondary/10 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{procedure}</p>
                </div>
              ))}
            </div>
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

// HPV Prevention Section
function HPVPreventionSection() {
  const articles = [
    { title: "HPV infekcija i prevencija raka vrata maternice", href: "/ginekoloski-karcinomi/hpv-prevencija" },
    { title: "CIN promjene i liječenje prekanceroza", href: "/ginekoloski-karcinomi/cin-promjene" },
    { title: "LETZ zahvati i oporavak", href: "/ginekoloski-karcinomi/letz-zahvati" },
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              HPV infekcija i prevencija karcinoma vrata maternice
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              HPV infekcija uzrokuje više od 90% slučajeva raka vrata maternice. U Poliklinici Harni provodimo HPV testiranje, genotipizaciju i praćenje promjena vrata maternice, te nudimo savjetovanje o cijepljenju i jačanju imunosne zaštite.
            </p>
            <p className="text-foreground text-base mt-4">
              Naš cilj je otkriti promjene dok su još reverzibilne, spriječiti napredovanje i omogućiti potpun oporavak.
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
                Zatražite termin za HPV test
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Colposcopy Section
function ColposcopySection() {
  const benefits = [
    "Rano prepoznavanje dermatoza, prekanceroza i karcinoma vulve",
    "Preciznu diferencijaciju vulvodinije, upalnih i displastičnih promjena",
    "Ciljano uzorkovanje i izradu individualnog terapijskog plana",
  ];

  const articles = [
    { title: "Kolposkopija – dijagnostika i interpretacija nalaza", href: "/ginekoloski-karcinomi/kolposkopija" },
    { title: "Vulvoskopija \"tri prstena\" – DATRIV pristup", href: "/ginekoloski-karcinomi/vulvoskopija" },
    { title: "\"O znak\" – dijagnostički marker vulvodinije", href: "/ginekoloski-karcinomi/o-znak" },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Kolposkopija i vulvoskopija — precizna dijagnostika promjena
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Poliklinika Harni poznata je po stručnom tumačenju kolposkopskih i vulvoskopskih nalaza, uz primjenu inovativne metode "tri prstena vulve" (NSP shema) za klasifikaciju lezija.
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <p className="text-foreground font-medium">Ovaj pristup omogućuje:</p>
            <div className="grid gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-secondary/10 rounded-lg">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-foreground">{benefit}</p>
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
                Pošaljite upit za termin
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Other Cancers Section
function OtherCancersSection() {
  const cancers = [
    {
      title: "Rak endometrija (maternice)",
      description: "Često uzrokuje neredovita ili postmenopauzalna krvarenja",
      href: "/ginekoloski-karcinomi/rak-endometrija",
    },
    {
      title: "Rak jajnika",
      description: "Često otkriven u kasnijem stadiju; važni su redoviti ultrazvuk i onkomarkeri",
      href: "/ginekoloski-karcinomi/rak-jajnika",
    },
    {
      title: "Rak vulve i vagine",
      description: "Povezan s HPV infekcijom, kroničnim dermatozama i upalama",
      href: "/ginekoloski-karcinomi/rak-vulve",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Karcinomi maternice, jajnika i vulve
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Osim vrata maternice, zloćudne promjene mogu zahvatiti i druge dijelove reproduktivnog sustava.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-8">
            {cancers.map((cancer, index) => (
              <Link key={index} href={cancer.href} className="group">
                <Card className="h-full border hover:shadow-md hover:border-primary/50 transition-all">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {cancer.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cancer.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <p className="text-center text-muted-foreground mb-8">
            U Poliklinici Harni svaka pacijentica ima pristup multidisciplinarnoj skrbi — ginekolog, patolog, onkolog i psihološka podrška surađuju u svim fazama liječenja i praćenja.
          </p>

          <div className="text-center">
            <Button asChild size="lg">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                Dogovorite onkološku konzultaciju
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Nutrition Section
function NutritionSection() {
  const recommendations = [
    "Antioksidansima (vitamin C, E, cink, selen)",
    "Fitonutrijentima (kurkumin, resveratrol)",
    "Vlaknima, omega-3 masnim kiselinama i prirodnim izvorima proteina",
  ];

  const articles = [
    { title: "Prehrana kod ginekoloških karcinoma", href: "/ginekoloski-karcinomi/prehrana" },
    { title: "Antioksidansi i prehrana nakon terapije", href: "/ginekoloski-karcinomi/antioksidansi" },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Prehrana kod ginekoloških karcinoma
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Prehrana ima ključnu ulogu u prevenciji i oporavku kod ginekoloških karcinoma. Zdrava, uravnotežena prehrana može poboljšati imunološki odgovor, smanjiti upalu i podržati regeneraciju nakon terapije.
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <p className="text-foreground font-medium">Preporučujemo prehranu bogatu:</p>
            <div className="grid gap-3">
              {recommendations.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-secondary/10 rounded-lg">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground pt-4">
              U Poliklinici Harni provodimo nutritivno savjetovanje i metaboličku potporu ženama koje prolaze kroz liječenje ili se oporavljaju nakon onkoloških terapija. Savjetujemo izbjegavanje rafiniranih šećera, prerađene hrane i alkohola, uz dodatnu podršku infuzijskim terapijama za obnovu imunosne i metaboličke ravnoteže.
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
                Zatražite nutricionističko savjetovanje
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
    "Više od 25 godina iskustva u dijagnostici i praćenju ginekoloških karcinoma",
    "Precizna dijagnostika kolposkopijom, vulvoskopijom, LBC testom i biopsijom",
    "Laserski i poštedni tretmani (LETZ, COLPOSCAN) s brzim oporavkom",
    "Surađujemo s vodećim onkološkim centrima u Hrvatskoj i inozemstvu",
    "Empatičan pristup, diskrecija i kontinuitet skrbi",
  ];

  const teamMembers = [
    {
      name: "Dr. Vesna Harni",
      role: "Vulvoskopija i laserska dijagnostika",
      description: "Ekspert za vulvoskopiju, kolposkopiju i lasersku dijagnostiku prekanceroza",
    },
    {
      name: "Dr. Tatjana Mioč-Pranić",
      role: "Kolposkopija i LETZ zahvati",
      description: "Specijalistica ginekologije, kolposkopije i LETZ zahvata",
    },
    {
      name: "Dr. Snješka Vitošević",
      role: "Praćenje nakon onkološkog liječenja",
      description: "Vodi nadzor trudnoća i praćenje žena nakon onkološkog liječenja",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary/20">
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
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg">
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
      title: "HPV infekcija i rak vrata maternice",
      href: "/ginekoloski-karcinomi/hpv-prevencija",
    },
    {
      title: "Kolposkopija i vulvoskopija – DATRIV studija",
      href: "/ginekoloski-karcinomi/datriv-studija",
    },
    {
      title: "N-S-P shema u vulvoskopiji",
      href: "/ginekoloski-karcinomi/nsp-shema",
    },
    {
      title: "Rani karcinomi i histopatološki nalazi",
      href: "/ginekoloski-karcinomi/histopatologija",
    },
    {
      title: "Prehrana kod ginekoloških karcinoma",
      href: "/ginekoloski-karcinomi/prehrana",
    },
    {
      title: "Život nakon liječenja – hormonska i emocionalna ravnoteža",
      href: "/ginekoloski-karcinomi/zivot-nakon-lijecenja",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Pročitajte više: stručni članci o prevenciji i dijagnostici
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
              Saznajte više o prevenciji i oporavku
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
              Briga, znanje i podrška u najvažnijem trenutku
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Rak nije samo dijagnoza — to je put koji zahtijeva stručnost, suosjećanje i kontinuitet praćenja.
            </p>
            <p className="text-foreground text-lg">
              U Poliklinici Harni pružamo točnu dijagnozu, jasno vođenje i dugoročnu podršku, u sigurnom i empatičnom okruženju.
            </p>
            <p className="text-base text-foreground font-medium">
              Poliklinika Harni — jer rana dijagnostika znači život
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
export default function GinekoskiKarcinomiPage() {
  return (
    <div>
      <HeroSection />
      <EarlyDiagnosticsSection />
      <HPVPreventionSection />
      <ColposcopySection />
      <OtherCancersSection />
      <NutritionSection />
      <WhyChooseUsSection />
      <ArticlesSection />
      <FinalCTASection />
    </div>
  );
}

