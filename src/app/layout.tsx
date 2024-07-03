import { Button, NextUIProvider } from "@nextui-org/react";
import Navbar from "./Navbar";
import "./globals.css";
import { Head } from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ overflowX: "hidden" }}>
      <Head>
        <meta name="google-site-verification" content="na_tZta5zaB_Xxa0FQIp6p8Ul908Y2rjpRNgysQ_OBc" />
        <title>MQuery, Meqr, Ayan Mahajan full stack developer portfolio website</title>
        <meta name="description" content="MQuery, Meqr, Ayan Mahajan who is the full stack developer behind the app NuraNote's portfolio website" />
        <meta name="keywords" content="MQuery, Meqr, Ayan Mahajan, full stack developer, portfolio, who is Ayan Mahjahan?, who is Meqr?, who is MQuery?" />
        <meta name="author" content="Ayan Mahajan" />
      </Head>
      <body style={{ overflowX: "hidden" }}>
        <NextUIProvider>
          <Navbar />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
