import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

const GOOGLE_SITE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION ?? "";

export const metadata: Metadata = {
  title: "お客様の声カルーセル",
  description:
    "日本の企業サイト向けに設計した、お客様の声カルーセルのプロトタイプ。Next.js・Tailwind CSS v4・TypeScriptで構築。",
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const isProduction = process.env.NODE_ENV === "production";

  return (
    <html lang="ja" className={cn(notoSansJP.variable, "antialiased")}>
      <body>
        {children}
        {isProduction && GA_ID && <GoogleAnalytics gaId={GA_ID} />}
      </body>
    </html>
  );
}
