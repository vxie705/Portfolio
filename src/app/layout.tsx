import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Bitter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const bitter = Bitter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bitter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Josue — Ingeniería de software & sistemas de alto rendimiento",
  description:
    "Construyo desde el kernel hasta la nube. Arquitectura de sistemas, seguridad ofensiva/defensiva e integración de IA.",
  keywords: [
    "ingeniería de software",
    "arquitectura de sistemas",
    "seguridad informática",
    "alto rendimiento",
    "Rust",
    "C",
    "TypeScript",
    "AI engineer",
  ],
  openGraph: {
    title: "Josue — Ingeniería de software & sistemas de alto rendimiento",
    description:
      "Construyo desde el kernel hasta la nube. Arquitectura de sistemas, seguridad ofensiva/defensiva e integración de IA.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable} ${bitter.variable}`}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}