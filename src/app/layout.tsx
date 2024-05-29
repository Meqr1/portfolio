import { Button, NextUIProvider } from "@nextui-org/react";
import Navbar from "./Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth", overflow: "hidden" }}>
      <body style={{ overflow: "hidden", height: "100vh" }}>
        <NextUIProvider className="dark">
          <Navbar />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
