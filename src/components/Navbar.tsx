'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaLinkedin, FaSquareGithub, FaSquareInstagram } from 'react-icons/fa6';

const NAV_LIST = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Certificates',
    href: '/certificates',
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="fixed top-0 w-full z-50 shadow bg-neutral-50">
      <div className="w-[95%] md:w-[650px] lg:w-[850px] xl:w-[1050px] mx-auto flex items-center justify-between py-4">
        <Link
          href={'/'}
          className="text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] font-bold text-neutral-900"
        >
          RA
        </Link>
        <div onClick={handleOpen} className="space-y-1 block md:hidden">
          <div className="w-[20px] h-[2px] bg-neutral-900 rounded-md" />
          <div className="w-[20px] h-[2px] bg-neutral-900 rounded-md" />
          <div className="w-[20px] h-[2px] bg-neutral-900 rounded-md" />
        </div>
        <div
          onClick={handleOpen}
          className={`absolute top-0 left-0 bottom-0 h-screen w-full bg-neutral-950/40 backdrop-blur-sm transition-opacity duration-300 md:hidden
            ${
              isOpen
                ? 'opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none'
            }
            `}
        />
        <nav
          className={`absolute top-0 left-0 w-[80%] h-screen bg-neutral-50 shadow flex flex-col justify-between px-2 py-4 transition-transform duration-300 md:hidden
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}
        >
          <div>
            <div className="border-b border-neutral-300 pb-4">
              <h1 className="text-[1.2rem] text-neutral-950 font-bold">
                Rifky Alfarez
              </h1>
              <p className="text-[0.8rem] text-neutral-600">
                Frontend Developer
              </p>
            </div>
            <div className="flex flex-col gap-y-2 pt-4 text-[0.9rem] text-neutral-800">
              {NAV_LIST.map(
                (
                  { name, href }: { name: string; href: string },
                  index: number
                ) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      onClick={handleOpen}
                      key={index}
                      href={href}
                      className={`hover:underline ${
                        isActive ? 'underline' : ''
                      }`}
                    >
                      {name}
                    </Link>
                  );
                }
              )}
            </div>
          </div>
          <div>
            <h2 className="text-[0.9rem] text-neutral-800">
              Let&apos;s Connect
            </h2>
            <div className="flex items-center gap-x-1 mt-1">
              <FaLinkedin className="size-6 text-neutral-800" />
              <FaSquareGithub className="size-6 text-neutral-800" />
              <FaSquareInstagram className="size-6 text-neutral-800" />
            </div>
          </div>
        </nav>
        <nav className="md:flex hidden items-center gap-x-8 md:text-[0.9rem] lg:text-[1rem] text-neutral-800">
          {NAV_LIST.map(
            ({ name, href }: { name: string; href: string }, index: number) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={index}
                  href={href}
                  className={`hover:underline ${isActive ? 'underline' : ''}`}
                >
                  {name}
                </Link>
              );
            }
          )}
        </nav>
      </div>
    </section>
  );
}
