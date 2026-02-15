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
  title: "GGMULIVE - Nonton Manchester United Gratis & Live Streaming HD",
  description: "Aplikasi streaming khusus fans Manchester United. Nonton MU live gratis, update skor, jadwal pertandingan, dan tanpa iklan yang mengganggu. Download GGMULIVE APK sekarang!",
  keywords: ["nonton mu gratis", "streaming man united", "ggmulive", "manchester united live stream", "apk nonton bola", "mu live hd"],
  openGraph: {
    title: "GGMULIVE - App Nonton MU Gratis Live Streaming",
    description: "Streaming MU lancar, HD, dan Gratis selamanya. Download APK-nya di sini!",
    siteName: "GGMULIVE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
