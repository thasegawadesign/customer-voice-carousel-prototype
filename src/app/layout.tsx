import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "Customer Voice Carousel",
  description:
    "A responsive testimonial carousel prototype designed for Japanese corporate websites. Built with Next.js, Tailwind CSS v4, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={cn(notoSansJP.variable, "antialiased")}>
      <body>{children}</body>
    </html>
  );
}
