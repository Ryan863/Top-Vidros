import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#070708",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Top Vidros | Arquitetura em Vidro & Vidraçaria de Alto Padrão em Campos - RJ",
  description:
    "Projetos arquitetônicos em vidro, box de alto padrão, portas e janelas de vidro temperado, espelhos bisotados e decorativos com LED, e manutenção especializada com plantão 24h em Campos dos Goytacazes - RJ.",
  keywords: [
    "vidraçaria em campos dos goytacazes",
    "top vidros",
    "box para banheiro campos rj",
    "vidro temperado campos",
    "espelho com led campos",
    "portas de vidro campos rj",
    "fachadas de vidro pele de vidro",
    "manutenção de blindex 24h",
    "arquitetura em vidro rj",
  ],
  authors: [{ name: "Top Vidros" }],
  creator: "Top Vidros",
  publisher: "Top Vidros",
  metadataBase: new URL("https://topvidros.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Top Vidros | Arquitetura em Vidro de Alto Padrão",
    description:
      "Transformamos ambientes com luz natural e acabamentos impecáveis. Vidros temperados, esquadrias e espelhos sob medida em Campos dos Goytacazes.",
    url: "https://topvidros.com.br",
    siteName: "Top Vidros",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/FUNDOINICIAL.jpg",
        width: 1920,
        height: 1080,
        alt: "Top Vidros - Fachada Residencial Moderna em Vidro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Vidros | Arquitetura em Vidro em Campos - RJ",
    description:
      "Projetos em vidro que transformam espaços e valorizam a luz natural. Box, portas, janelas e espelhos de luxo.",
    images: ["/FUNDOINICIAL.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Top Vidros",
    "image": "https://topvidros.com.br/FUNDOINICIAL.jpg",
    "telephone": "+5522998227120",
    "email": "topvidroscampos@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Benedito Queiroz, 92",
      "addressLocality": "Campos dos Goytacazes",
      "addressRegion": "RJ",
      "postalCode": "28024-040",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -21.7642,
      "longitude": -41.3289
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "priceRange": "$$$",
    "url": "https://topvidros.com.br",
    "sameAs": [
      "https://www.instagram.com/top_vidros3"
    ]
  };

  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#070708] text-white font-sans selection:bg-rose-600/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
