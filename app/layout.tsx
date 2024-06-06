import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "../components/NavBar";
import React from "react";
import FadeInWrapper from "./FadeInWrapper";

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
    <html lang="en" data-theme="mytheme">
      <body className={`${inter.className} font-sans`}>
        <div className="overflow-hidden">
          <FadeInWrapper>{children}</FadeInWrapper>
        </div>
      </body>
    </html>
  );
}
