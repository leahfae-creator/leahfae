import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { EB_Garamond } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const displayFont = localFont({
  src: '../public/fonts/Amsterdam2.woff2',
  variable: '--font-display',
  display: 'swap',
});

const bodyFont = localFont({
  src: '../public/fonts/Arcadian.woff2',
  variable: '--font-body',
  display: 'swap',
});

const serifFont = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const siteTitle = 'Soul Medicine Meditation';
const siteDescription = 'A calm, elevated space to begin your Soul Medicine journey through a discovery call.';
const siteUrl = 'https://example.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: siteTitle,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable} ${serifFont.variable} min-h-screen antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
