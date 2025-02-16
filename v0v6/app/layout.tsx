import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Study Smarter, Not Harder | Nord Program",
  description: "Get better grades in half the time with science-backed study methods. Join the Nord community to unlock your unique learner type and transform your academic success.",
  openGraph: {
    title: "Study Smarter, Not Harder | Nord Program",
    description: "Get better grades in half the time with science-backed study methods. Join the Nord community to unlock your unique learner type and transform your academic success.",
    images: ["https://6s32vsspft6xcd13.public.blob.vercel-storage.com/head%20stencil-W1B06DLAzIjQlgYMxzVSjeaIAGsVtx.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study Smarter, Not Harder | Nord Program",
    description: "Get better grades in half the time with science-backed study methods. Join the Nord community to unlock your unique learner type and transform your academic success.",
    images: ["https://6s32vsspft6xcd13.public.blob.vercel-storage.com/head%20stencil-W1B06DLAzIjQlgYMxzVSjeaIAGsVtx.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
