import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:gap-16 md:grid-cols-2 items-center">
          {/* Tekst */}
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
              Tko smo
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-base">
                Poliklinika Harni jedna je od vodećih ginekoloških ustanova u Hrvatskoj, 
                poznata po stručnosti, visokoj dijagnostičkoj preciznosti i individualnom pristupu.
              </p>
              <p className="text-base">
                Naš tim čine liječnice s dugogodišnjim iskustvom i uskom specijalizacijom 
                iz područja ginekologije, perinatologije, endokrinologije i onkologije.
              </p>
            </div>
            <Button asChild variant="outline" size="lg">
              <Link href="/o-nama">
                Upoznajte naš tim
              </Link>
            </Button>
          </div>

          {/* Slika */}
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-muted">
            <Image
              src="/image.jpg"
              alt="Tim Poliklinike Harni"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

