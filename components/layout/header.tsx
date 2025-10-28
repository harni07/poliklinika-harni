"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { NAV_LINKS, WHATSAPP_LINK, PHONE_LINK } from "@/lib/constants";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-20 items-center justify-between px-4 md:px-6 lg:px-8">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center transition-opacity hover:opacity-90"
          >
            <Image
              src="/logo.png"
              alt="Poliklinika Harni"
              width={180}
              height={60}
              priority
              className="h-12 w-auto md:h-14"
            />
          </Link>

          {/* Desktop Navigacija */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Gumbi */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              size="default"
              className="gap-2 hover:bg-secondary"
            >
              <a href={PHONE_LINK}>
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">Nazovite</span>
              </a>
            </Button>
            <Button
              asChild
              size="default"
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                <span className="hidden lg:inline">WhatsApp</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Otvori meni</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md p-0 flex flex-col [&>button]:hidden">
              {/* Header isti kao glavni - logo i X u istoj poziciji */}
              <div className="flex h-20 items-center justify-between px-4 border-b">
                <Image
                  src="/logo.png"
                  alt="Poliklinika Harni"
                  width={180}
                  height={60}
                  className="h-12 w-auto md:h-14"
                />
                {/* X gumb - ista pozicija i veličina kao hamburger */}
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Zatvori</span>
                  </Button>
                </SheetClose>
              </div>

              {/* Navigacijski linkovi - centrirani, bez linija */}
              <nav className="flex flex-col items-center px-6 py-8">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="w-full text-center py-4 text-base font-medium text-foreground active:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* CTA Gumbi - centrirani, vertikalno */}
              <div className="px-6 pb-8 flex flex-col items-center gap-3">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full max-w-xs gap-2"
                >
                  <a href={PHONE_LINK}>
                    <Phone className="h-5 w-5" />
                    Nazovite
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="w-full max-w-xs gap-2 bg-primary hover:bg-primary/90"
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

