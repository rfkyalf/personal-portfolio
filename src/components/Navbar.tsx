'use client';

import { NAV_LIST } from '@/lib/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from './Icon';
import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const handleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !(event.target as HTMLElement).closest('nav')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="fixed top-0 w-full z-50 shadow bg-neutral-50">
      <div className="w-[90%] md:w-[650px] lg:w-[850px] xl:w-[1050px] mx-auto flex items-center justify-between py-2">
        <h2 className="text-[1.8rem] md:text-[1.9rem] lg:text-[2rem] font-bold text-neutral-900 font-[gloock]">
          <Link href={'/'}>RA</Link>
        </h2>
        <button
          onClick={handleOpen}
          aria-label="hamburger"
          className="md:hidden focus:outline"
        >
          <Icon icon="hamburger" style="size-6" />
        </button>
        <nav
          ref={navRef}
          className={`md:hidden absolute top-10 right-4 bg-neutral-50 shadow border px-4 py-3 rounded-lg transition-all duration-300
            ${
              isOpen
                ? 'opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none'
            }
            `}
        >
          <ul className="flex flex-col gap-y-2">
            {NAV_LIST.map((nav, index) => {
              const isActive = nav.href === pathname;
              return (
                <li key={index}>
                  <Link
                    href={nav.href}
                    onClick={handleOpen}
                    className={`text-[0.9rem] text-neutral-800 hover:underline 
                      ${isActive ? 'underline' : ''}`}
                  >
                    {nav.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-x-8">
            {NAV_LIST.map((nav, index) => {
              const isActive = nav.href === pathname;
              return (
                <li key={index}>
                  <Link
                    href={nav.href}
                    className={`md:text-[0.9rem] lg:text-[1rem] text-neutral-800 hover:underline 
                      ${isActive ? 'underline' : ''}`}
                  >
                    {nav.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
}
