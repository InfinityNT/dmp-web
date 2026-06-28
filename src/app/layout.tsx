import type { Metadata } from "next";
import { Schibsted_Grotesk, Public_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const display = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DMP — Device Management Platform",
  description:
    "Self-hosted IT asset management. Track devices, people, and who has what — with approvals, reports, and instant search. Runs on your own machine, no cloud required.",
  openGraph: {
    title: "DMP — Device Management Platform",
    description:
      "Self-hosted IT asset management. Track devices, people, and who has what.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
