import { Button, NextUIProvider } from "@nextui-org/react";
import Navbar from "./Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ overflowX: "hidden" }}>
      <body style={{ overflowX: "hidden" }}>
        <NextUIProvider className="dark">
          <Navbar />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
