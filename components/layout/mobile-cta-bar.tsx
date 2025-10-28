"use client";

import { Phone, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK, PHONE_LINK, EMAIL_LINK } from "@/lib/constants";

export function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t shadow-lg">
      <div className="flex items-center justify-around p-2 gap-1">
        {/* Telefon */}
        <Button
          asChild
          variant="outline"
          size="sm"
          className="flex-1 gap-1.5 h-12"
        >
          <a href={PHONE_LINK} className="flex flex-col items-center">
            <Phone className="h-4 w-4" />
            <span className="text-xs">Poziv</span>
          </a>
        </Button>

        {/* WhatsApp */}
        <Button
          asChild
          size="sm"
          className="flex-1 gap-1.5 h-12 bg-primary hover:bg-primary/90"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="text-xs">WhatsApp</span>
          </a>
        </Button>

        {/* Email */}
        <Button
          asChild
          variant="outline"
          size="sm"
          className="flex-1 gap-1.5 h-12"
        >
          <a href={EMAIL_LINK} className="flex flex-col items-center">
            <Mail className="h-4 w-4" />
            <span className="text-xs">E-mail</span>
          </a>
        </Button>
      </div>
    </div>
  );
}

