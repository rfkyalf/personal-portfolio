import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Lato } from 'next/font/google';
import TopLoadingProviders from '@/providers/TopLoadingProvider';
import { BASE_URL } from '@/lib/constants';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL(`${BASE_URL}`),
  applicationName: 'Rifky Alfarez | Personal Website',
  manifest: '/manifest.json',
  appleWebApp: {
    title: 'Rifky Alfarez | Personal Website',
    statusBarStyle: 'default',
    capable: true,
  },
  creator: 'Rifky Alfarez',
  title: {
    default: 'Rifky Alfarez | Personal Website',
    template: '%s | Rifky Alfarez',
  },
  description:
    'Rifky Alfarez personal website, discover my portfolio, projects, and professional journey in technology.',
  openGraph: {
    title: 'Rifky Alfarez | Personal Website',
    description:
      'Rifky Alfarez personal website, discover my portfolio, projects, and professional journey in technology.',
    images: '/opengraph-image.png',
    url: `${BASE_URL}`,
    siteName: 'Rifky Alfarez | Personal Website',
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased bg-neutral-50`}>
        <TopLoadingProviders>{children}</TopLoadingProviders>
      </body>
    </html>
  );
}
