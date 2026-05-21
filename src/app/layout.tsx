import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saotyarewa.com"),
  title: "Alhaji Saoty Arewa | Official Digital Archive & Music Platform",
  description: "Experience the musical legacy of Alhaji AbdulAzeez Abdulsalam Abiodun (Saoty Arewa). Explore 30+ albums, deep moral teachings, and the legendary fusion of Islamic wisdom and Yoruba culture.",
  keywords: [
    "Saoty Arewa",
    "Alhaji Saoty Arewa",
    "Nigerian Islamic Music",
    "Yoruba Islamic Singer",
    "Islamic Music Nigeria",
    "Yoruba Fuji Islamic Music",
    "Epe Lagos Musician",
    "Islamic Yoruba Albums",
    "Saoty Arewa Songs",
    "Yoruba Muslim Music"
  ],
  authors: [{ name: "Saoty Arewa Official" }],
  openGraph: {
    title: "Alhaji Saoty Arewa | Official Website",
    description: "Official digital home of the Nigerian Islamic music legend Saoty Arewa.",
    url: "https://saotyarewa.com",
    siteName: "Saoty Arewa Official",
    images: [
      {
        url: "/og-image.jpg", // Placeholder for actual OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alhaji Saoty Arewa | Official Website",
    description: "Official digital home of the Nigerian Islamic music legend Saoty Arewa.",
    creator: "@saotyarewa",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-background text-foreground antialiased min-h-screen selection:bg-gold selection:text-black">
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              "name": "Alhaji Saoty Arewa",
              "alternateName": "Alhaji AbdulAzeez Abdulsalam Abiodun",
              "description": "Distinguished Nigerian Islamic singer-songwriter and performer.",
              "genre": ["Islamic", "Yoruba Music"],
              "originPlace": "Epe, Lagos State, Nigeria",
              "url": "https://saotyarewa.com"
            }),
          }}
        />
        <div className="fixed inset-0 islamic-pattern pointer-events-none z-0 opacity-10" />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
