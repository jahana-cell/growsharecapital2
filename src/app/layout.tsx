import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Montserrat, Pinyon_Script } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const pinyonScript = Pinyon_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pinyon-script',
  display: 'swap',
});

const canonicalUrl = 'https://www.growsharecapital.com';
const siteTitle = 'GrowShare Capital';
const siteDescription = 'A premier American private equity and impact investment platform building resilient communities through intelligent, ethical, and high-yield investments.';
const logoUrl = '/logo.png';
const previewImageUrl = '/preview.png';

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: [
      { url: logoUrl, sizes: '180x180' },
    ],
  },
  appleWebApp: {
    title: 'GrowShare Capital',
    statusBarStyle: 'default',
    capable: true,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: siteTitle,
    images: [
      {
        url: previewImageUrl,
        width: 1200,
        height: 630,
        alt: 'GrowShare Capital - High-yield, principled investments in resilient communities.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [previewImageUrl],
  },
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${montserrat.variable} ${pinyonScript.variable} scroll-smooth`}>
      <body className="bg-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
