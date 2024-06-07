import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { NavBar } from "../components/NavBar";
import React from "react";
import { preload } from "react-dom";
// import FadeInWrapper from "./FadeInWrapper";

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
  // preload images
  preload("/images/tree.PNG", { as: "image" });
  preload("/images/cars.PNG", { as: "image" });
  preload("/images/door.PNG", { as: "image" });
  preload("/images/sun.PNG", { as: "image" });
  preload("/images/grass.PNG", { as: "image" });
  preload("/images/floor.PNG", { as: "image" });
  preload("/images/moon.PNG", { as: "image" });
  preload("/images/tree-dark.PNG", { as: "image" });
  // preload("/images/cars-dark.png", { as: "image" });
  preload("/images/door-dark.PNG", { as: "image" });
  preload("/images/grass-dark.PNG", { as: "image" });
  preload("/images/floor-dark.PNG", { as: "image" });

  return (
    <html lang="en" data-theme="mytheme">
      <body className={`${inter.className} font-sans`}>
        <div className="overflow-hidden">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
