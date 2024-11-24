import type { Metadata } from 'next';
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
  title: {
    default: 'Rifky Alfarez | Personal Website',
    template: '%s | Rifky Alfarez',
  },
  description: 'TODO: Add description',
  openGraph: {
    title: 'Rifky Alfarez | Personal Website',
    description: 'TODO: Add description',
    images: '/opengraph-image.png',
    url: `${BASE_URL}`,
    siteName: 'Rifky Alfarez | Personal Website',
    locale: 'en-US',
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
      <body className={`${lato.className} antialiased bg-neutral-50`}>
        <TopLoadingProviders>{children}</TopLoadingProviders>
      </body>
    </html>
  );
}
