import Image from "next/image";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK, PHONE_LINK, EMAIL_LINK } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px]">
      {/* Background Image */}
      <Image
        src="/image.jpg"
        alt="Poliklinika Harni - Vrhunska ginekološka skrb u Zagrebu"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 w-full">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            {/* H1 Naslov */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-tight">
              Vrhunska ginekološka skrb s povjerenjem i iskustvom
            </h1>

            {/* Podnaslov */}
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed">
              Više od 25 godina brinemo o zdravlju i ravnoteži žena.<br/>
              Naše ginekologinje pružaju stručne, diskretne i personalizirane preglede — bez čekanja.
            </p>

            {/* CTA Gumbi */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-6">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
              >
                <a href={PHONE_LINK}>
                  <Phone className="h-5 w-5" />
                  Nazovite odmah
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto gap-2 bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Pošaljite WhatsApp poruku
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto gap-2 bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
              >
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

