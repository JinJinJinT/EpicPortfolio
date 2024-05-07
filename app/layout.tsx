import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavbarDemo } from "../components/NavBar";

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
    <html lang="en" data-theme="business">
      <body className={inter.className}>
        <NavbarDemo />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
