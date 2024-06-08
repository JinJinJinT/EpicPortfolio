import { NavBar } from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { NavbarProvider } from "./NavbarProvider";
import { preload } from "react-dom";
import Script from "next/script";
import ThemeSwitcher from "@/components/ThemeSwitcher";
// import scrollScript from "../public/scripts/disable-scroll.js";

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
  // preload("/_next/static/chunks/main-app.js", {
  //   as: "script",
  //   fetchPriority: "high",
  // });
  // preload images (possibly get rid of this)
  // preload("/images/tree.PNG", { as: "image" });
  // preload("/images/cars.PNG", { as: "image" });
  // preload("/images/door.PNG", { as: "image" });
  // preload("/images/sun.PNG", { as: "image" });
  // preload("/images/grass.PNG", { as: "image" });
  // preload("/images/floor.PNG", { as: "image" });

  return (
    <NavbarProvider>
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
    </NavbarProvider>
  );
}
