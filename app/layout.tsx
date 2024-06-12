import { NavBar } from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { ContextProvider } from "./ContextProvider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jin Portfolio",
  description: "Jin Terada White Professional Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContextProvider>
      <html lang="en" data-theme="mytheme">
        <body className={`${inter.className} font-sans overflow-hidden`}>
          <Script
            src="/scripts/disable-scroll.js"
            strategy="beforeInteractive"
          />
          <div className="overflow-hidden">
            <NavBar />
            <main>{children}</main>
          </div>
        </body>
      </html>
    </ContextProvider>
  );
}
