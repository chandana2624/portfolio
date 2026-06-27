import './globals.css';
import type { Metadata } from 'next';
import LayoutWrapper from '@/components/LayoutWrapper';
import { Playfair_Display, Cormorant_Garamond, Inter } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pottipally Chandana – Data Analyst & ML Portfolio',
  description: 'B.Tech Computer Science student passionate about Machine Learning, Data Analytics, Python development, and Open Source contributions.',
  openGraph: {
    title: 'Pottipally Chandana Portfolio',
    description: 'AI Engineer, Machine Learning Enthusiast, Full‑Stack Developer.',
    url: 'https://your-domain.com',
    siteName: 'Portfolio',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  robots: 'index, follow',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-pastel-off-white text-gray-900 antialiased">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
