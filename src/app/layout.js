"use client";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { usePathname } from "next/navigation";
import Navbar from "../components/layout/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <html lang="en">
      <body className={inter.className}>
        {pathname != "/auth/signIn" ? <Navbar /> : null}
        {children}
      </body>
    </html>
  );
}
