import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "./globals.css";

const GOOGLE_SITE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  title: "お客様の声カルーセル",
  description:
    "日本のコーポレートサイト向けに設計した、レスポンシブ対応の「お客様の声（Customer Voice）」カルーセルのプロトタイプ。Next.js・Tailwind CSS v4・TypeScriptで構築。",
  verification: GOOGLE_SITE_VERIFICATION
    ? {
        google: GOOGLE_SITE_VERIFICATION,
      }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const isProduction = process.env.NODE_ENV === "production";

  return (
    <html lang="ja" className={cn("font-sans antialiased")}>
      <body>
        {children}
        {isProduction && GA_ID && <GoogleAnalytics gaId={GA_ID} />}
        <Analytics />
      </body>
    </html>
  );
}
