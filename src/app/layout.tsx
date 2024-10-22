import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./Navbar";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MQuery, Meqr, Ayan Mahajan full stack developer portfolio website",
  description: "MQuery, Meqr, Ayan Mahajan who is the full stack developer behind the app NuraNote's portfolio website",
  keywords: "MQuery, Meqr, Ayan Mahajan, full stack developer, portfolio, who is Ayan Mahjahan?, who is Meqr?, who is MQuery?",
  authors: { 'url': 'https://meqr.vercel.app', name: 'Ayan Mahajan' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ overflowX: "hidden" }}>
      <body style={{ }}>
        <NextUIProvider>
          <Navbar />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
