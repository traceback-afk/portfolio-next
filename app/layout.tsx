import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Portfolio",
  description: "Khashayar Khosrosourmi's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className="dark">
      <body
        className={`${inter.className} antialiased
        relative bg-zinc-900 overflow-x-hidden`}
      >
        <div className="absolute inset-0 bg-black/18 -z-1"></div>
        <Navbar/>
        <div className="flex justify-center">
          <div className="w-10/12">
            <Analytics/>

            {children}
          </div>
        </div>

      </body>
    </html>
  );
}
