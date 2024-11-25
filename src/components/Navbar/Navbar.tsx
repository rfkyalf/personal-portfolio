'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MobileNav, Nav } from './Nav';

const Hamburger = dynamic(() => import('./Hamburger'), { ssr: false });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <section className="fixed top-0 w-full z-50 shadow bg-neutral-50">
        <div className="w-[90%] md:w-[650px] lg:w-[850px] xl:w-[1050px] mx-auto flex items-center justify-between py-4">
          {/* Logo */}
          <NavLogo />
          {/* Hamburger */}
          <Hamburger onclick={handleOpen} />
          {/* Navigation */}
          <Nav pathname={pathname} />
        </div>
      </section>
      {/* Mobile Nav */}
      <div
        onClick={handleOpen}
        className={`fixed z-50 top-0 left-0 bottom-0 right-0 min-h-screen w-full bg-neutral-950/40 backdrop-blur-sm transition-opacity duration-500 ease-in-out md:hidden ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      />
      <MobileNav pathname={pathname} isOpen={isOpen} onClick={handleOpen} />
    </>
  );
}

const NavLogo = () => {
  return (
    <Link
      href={'/'}
      className="text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] font-bold text-neutral-900"
    >
      RA
    </Link>
  );
};
