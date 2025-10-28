import type { Metadata } from "next";
import { Playfair_Display, Lato, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileCTABar } from "@/components/layout/mobile-cta-bar";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://poliklinika-harni.hr'),
  title: "Poliklinika Harni Zagreb – Vrhunska ginekološka skrb s povjerenjem i iskustvom",
  description: "Više od 25 godina iskustva u ginekologiji, trudnoći, neplodnosti i hormonima. Stručne ginekologinje pružaju diskretne preglede bez čekanja. Brzi termin putem WhatsAppa!",
  keywords: [
    'ginekolog Zagreb',
    'ginekološki pregled bez čekanja',
    'liječenje neplodnosti',
    'vođenje trudnoće',
    'hormoni i menopauza',
    'laserski tretmani u ginekologiji',
    'prenatalna dijagnostika',
    'ginekološka poliklinika Zagreb',
    'kolposkopija Zagreb',
    'PAPA test Zagreb',
    'ultrazvuk trudnoća',
    'ginekolog privatna praksa',
  ],
  authors: [{ name: 'Poliklinika Harni' }],
  creator: 'Poliklinika Harni',
  publisher: 'Poliklinika Harni',
  openGraph: {
    type: 'website',
    locale: 'hr_HR',
    url: 'https://poliklinika-harni.hr',
    siteName: 'Poliklinika Harni',
    title: 'Poliklinika Harni Zagreb – Vrhunska ginekološka skrb',
    description: 'Više od 25 godina iskustva u ginekologiji, trudnoći, neplodnosti i hormonima. Stručne ginekologinje pružaju diskretne preglede bez čekanja.',
    images: [
      {
        url: '/image.jpg',
        width: 1200,
        height: 630,
        alt: 'Poliklinika Harni Zagreb',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poliklinika Harni Zagreb – Vrhunska ginekološka skrb',
    description: 'Više od 25 godina iskustva u ginekologiji. Pregledi bez čekanja.',
    images: ['/image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://poliklinika-harni.hr',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD for Local Business
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Poliklinika Harni",
    "description": "Vrhunska ginekološka skrb s povjerenjem i iskustvom. Više od 25 godina brinemo o zdravlju i ravnoteži žena.",
    "url": "https://poliklinika-harni.hr",
    "logo": "https://poliklinika-harni.hr/logo.png",
    "image": "https://poliklinika-harni.hr/image.jpg",
    "telephone": "+385-1-29-23-648",
    "email": "info@poliklinika-harni.hr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bukovačka 1, III kat",
      "addressLocality": "Zagreb",
      "postalCode": "10000",
      "addressCountry": "HR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "45.8150",
      "longitude": "15.9819"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:30",
        "closes": "20:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "12:00"
      }
    ],
    "priceRange": "$$",
    "medicalSpecialty": ["Gynecology", "Obstetrics", "Reproductive Health"],
    "sameAs": []
  };

  return (
    <html lang="hr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${lato.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
