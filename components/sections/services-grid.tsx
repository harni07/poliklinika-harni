import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  {
    id: "ginekologija",
    title: "Ginekologija",
    description: "Redoviti pregledi, PAPA test, ultrazvuk, kolposkopija, liječenje upala i bolnih stanja",
    href: "/ginekologija",
  },
  {
    id: "neplodnost",
    title: "Neplodnost i hormoni",
    description: "Detaljna dijagnostika uzroka neplodnosti i personalizirani plan liječenja",
    href: "/neplodnost-hormoni",
  },
  {
    id: "trudnoca",
    title: "Trudnoća",
    description: "Praćenje trudnoće, fetalni ultrazvuk, prenatalna dijagnostika, podrška kroz sve faze",
    href: "/trudnoca",
  },
  {
    id: "laserski",
    title: "Laserski tretmani",
    description: "Minimalno invazivne metode za vaginalnu suhoću, ožiljke, inkontinenciju i estetske korekcije",
    href: "/ginekologija",
  },
  {
    id: "karcinomi",
    title: "Prevencija i onkologija",
    description: "Rani screening i praćenje liječenja ginekoloških karcinoma",
    href: "/ginekoloski-karcinomi",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Naslov */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Što radimo
          </h2>
          <p className="text-muted-foreground">
            Cjelovita skrb za žene u svim fazama života
          </p>
        </div>

        {/* Grid kartica */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Link 
              key={service.id}
              href={service.href}
              className="group"
            >
              <Card className="h-full hover:shadow-lg transition-shadow border">
                <CardContent className="p-8 space-y-3">
                  <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center text-sm text-primary pt-2">
                    <span>Saznajte više</span>
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

