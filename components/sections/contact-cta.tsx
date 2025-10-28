import { Phone, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK, PHONE_LINK, EMAIL_LINK } from "@/lib/constants";

export function ContactCTA() {
  return (
    <section className="py-20 md:py-28 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Naslov i Opis */}
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
              Vaše zdravlje, naš prioritet
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Poliklinika Harni pruža sve što vam treba na jednom mjestu — stručnost, sigurnost i razumijevanje.
            </p>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Brzi odgovori, diskretna komunikacija, pristup bez čekanja.
            </p>
            <p className="text-base text-foreground font-medium">
              Poliklinika Harni — jer povjerenje počinje znanjem
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto gap-2"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Kontaktirajte nas putem WhatsAppa
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto gap-2"
            >
              <a href={PHONE_LINK}>
                <Phone className="h-5 w-5" />
                Nazovite i dogovorite pregled
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto gap-2"
            >
              <a href={EMAIL_LINK}>
                <Mail className="h-5 w-5" />
                Pošaljite e-mail upit
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

