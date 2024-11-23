'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { usePathname } from 'next/navigation';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideNavFoot = /^\/projects\/[^/]+$/.test(pathname);

  return (
    <>
      {!hideNavFoot && <Navbar />}
      {children}
      {!hideNavFoot && <Footer />}
    </>
  );
}
