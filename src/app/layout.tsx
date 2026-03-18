import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Customer Voice Carousel',
  description:
    'A responsive testimonial carousel prototype designed for Japanese corporate websites. Built with Next.js, Tailwind CSS v4, and TypeScript.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
