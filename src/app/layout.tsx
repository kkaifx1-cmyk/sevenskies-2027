import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0B2046",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  keywords: [
    "Seven Skies 2027",
    "SEVENSKIES",
    "SMAIT Ihsanul Fikri",
    "LCCI",
    "Kaligrafi",
    "MHQ",
    "Mewarnai",
    "Adzan",
    "Lomba Pelajar SD SMP",
  ],
  authors: [{ name: siteConfig.meta.organizer }],
  openGraph: {
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    url: "https://sevenskies2027.id",
    siteName: "Seven Skies 2027",
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${outfit.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-royalBlue-900 text-pureWhite antialiased selection:bg-royalBlue-600 selection:text-white min-h-screen flex flex-col bg-celestial">
        {children}
      </body>
    </html>
  );
}
