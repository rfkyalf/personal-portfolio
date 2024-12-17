import TopLoadingProviders from '@/providers/TopLoadingProvider';
import type { Metadata, Viewport } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';
import { Person, WebPage, WithContext } from 'schema-dts';
import Script from 'next/script';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rifkyalfarez.my.id'),
  verification: {
    google: 'd03zfWKgHg7jCr3AYJWtkEDpbrIDy6kPQgQJupyOqp4',
  },
  applicationName: 'Rifky Alfarez | Personal Website',
  manifest: '/manifest.json',
  appleWebApp: {
    title: 'Rifky Alfarez | Personal Website',
    statusBarStyle: 'default',
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
    url: 'https://www.rifkyalfarez.my.id',
    siteName: 'Rifky Alfarez | Personal Website',
    locale: 'en-US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.rifkyalfarez.my.id',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

const schemaData: WithContext<WebPage | Person> = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Rifky Alfarez | Personal Website',
  url: 'https://www.rifkyalfarez.my.id/',
  description:
    'Rifky Alfarez personal website, discover my portfolio, projects, and professional journey in technology.',
  mainEntity: {
    '@type': 'Person',
    name: 'Rifky Alfarez',
    jobTitle: 'Frontend Developer',
    url: 'https://www.rifkyalfarez.my.id/',
    alumniOf: 'Universitas Siliwangi',
    sameAs: [
      'https://www.linkedin.com/in/rifkyalfarez',
      'https://github.com/rfkyalf',
    ],
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${lato.className} antialiased bg-neutral-50`}>
        <Script
          id="home-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
        <TopLoadingProviders>{children}</TopLoadingProviders>
      </body>
    </html>
  );
}
