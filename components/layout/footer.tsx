import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { CONTACT_INFO, NAV_LINKS, EMAIL_LINK, PHONE_LINK } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-background border-t-4 border-primary pb-24 md:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo i opis */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Poliklinika Harni"
                width={180}
                height={60}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-background/70">
              Više od 25 godina posvećeni zdravlju, ravnoteži i dobrobiti žena.
            </p>
          </div>

          {/* Brzi Linkovi */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-semibold text-primary">
              Brzi linkovi
            </h3>
            <nav className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Kontakt */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-semibold text-primary">
              Kontakt
            </h3>
            <div className="space-y-3 text-sm text-background/70">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <div>
                  <p>{CONTACT_INFO.address.street}</p>
                  <p>{CONTACT_INFO.address.city}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <div>
                  <a 
                    href={PHONE_LINK}
                    className="hover:text-primary transition-colors block"
                  >
                    {CONTACT_INFO.phones.mobile}
                  </a>
                  <p className="text-xs">{CONTACT_INFO.phones.tel1}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <a
                  href={EMAIL_LINK}
                  className="hover:text-primary transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Radno Vrijeme */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-semibold text-primary">
              Radno vrijeme
            </h3>
            <div className="space-y-2 text-sm text-background/70">
              <div>
                <p className="font-medium text-background">Pon - Pet</p>
                <p>{CONTACT_INFO.workingHours.weekdaysPatients}</p>
              </div>
              <div>
                <p className="font-medium text-background">Subota</p>
                <p>{CONTACT_INFO.workingHours.saturdayPatients}</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-background/50 md:flex-row">
          <p>
            © {currentYear} {CONTACT_INFO.name}. Sva prava pridržana.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link
              href="/privatnost"
              className="hover:text-primary transition-colors"
            >
              Privatnost
            </Link>
            <Link
              href="/uvjeti"
              className="hover:text-primary transition-colors"
            >
              Uvjeti
            </Link>
            <span>OIB: {CONTACT_INFO.business.oib}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

