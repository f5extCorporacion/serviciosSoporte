import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Título principal (máx. 60 caracteres recomendado)
  title: {
    default: "Phoenix Legend | Venta, Reparación de PC y Redes",
    template: "%s | Phoenix Legend",
  },

  // Descripción (máx. 160 caracteres recomendado)
  description:
    "Venta y reparación de computadores, instalación de Windows y Linux, eliminación de virus, configuración de redes Wi-Fi, instalación de cámaras de seguridad y soporte técnico por videollamada. Servicios desde 100 mil pesos.",

  // Palabras clave (aunque Google ya no las usa directamente, ayudan a otros motores)
  keywords: [
    "venta de computadores",
    "reparación de PC",
    "arreglo de computadores",
    "instalación de Windows",
    "instalación de Linux",
    "eliminación de virus",
    "mantenimiento de computadores",
    "configuración de redes Wi-Fi",
    "instalación de cámaras de seguridad",
    "soporte técnico remoto",
    "videollamada soporte",
    "servicio técnico computadores",
    "Phoenix Legend",
  ],

  // Autoría
  authors: [{ name: "Phoenix Legend" }],
  creator: "Phoenix Legend",
  publisher: "Phoenix Legend",

  // Metadatos base
  metadataBase: new URL("https://phoenixlegend.com"), // ← cambia por tu dominio real
  alternates: {
    canonical: "/",
  },

  // Open Graph (para compartir en Facebook, WhatsApp, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://phoenixlegend.com", // ← cambia por tu dominio real
    siteName: "Phoenix Legend",
    title: "Phoenix Legend | Venta, Reparación de PC y Redes",
    description:
      "Servicios técnicos desde 100 mil pesos: venta y reparación de computadores, instalación de sistemas operativos, eliminación de virus, redes Wi-Fi y cámaras de seguridad.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&q=80&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Phoenix Legend - Servicios técnicos de computadores",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Phoenix Legend | Venta, Reparación de PC y Redes",
    description:
      "Venta y reparación de computadores, instalación de Windows/Linux, antivirus, redes y cámaras. Servicios desde 100 mil pesos.",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&q=80&auto=format&fit=crop",
    ],
  },

  // Robots (para que Google indexe)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Iconos
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  // Verificación de Google Search Console (opcional pero recomendado)
  // verification: {
  //   google: "TU_CODIGO_DE_VERIFICACION",
  // },

  // Categoría
  category: "technology",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
