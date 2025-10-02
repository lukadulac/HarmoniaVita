import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/Header";



export const metadata: Metadata = {
  title: "HarmoniaVita",
  description: "Psihoterapija i savjetovanje",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body >
        <Header />
        <main id="site-wrap">
          {children}
        </main>
      </body>
    </html>
  );
}
