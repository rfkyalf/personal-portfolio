import { NAV_LIST } from '@/lib/constants';
import { NavbarProps } from '@/lib/types';
import Link from 'next/link';
import Icon from '../Icon';

export function Nav({ pathname }: { pathname: string }) {
  return (
    <nav className="md:flex hidden items-center gap-x-8 ">
      {NAV_LIST.map((nav: NavbarProps, index: number) => {
        const isActive = pathname === nav.href;
        return (
          <Link
            key={index}
            href={nav.href}
            className={`md:text-[0.9rem] lg:text-[1rem] text-neutral-800 hover:underline ${
              isActive ? 'underline' : ''
            }`}
          >
            {nav.name}
          </Link>
        );
      })}
    </nav>
  );
}

export function MobileNav({
  pathname,
  isOpen,
  onClick,
}: {
  pathname: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <nav
      className={`fixed pt-safe-top pb-safe-bottom z-50 top-0 bottom-0 left-0 right-0 min-h-screen w-[80%] bg-neutral-50 shadow flex md:hidden flex-col justify-between px-2 py-4 transition-transform duration-500 ease-in-out ${
        !isOpen ? '-translate-x-full' : 'translate-x-0'
      }`}
    >
      <div className="flex flex-col">
        <div className="border-b border-neutral-300 pb-4">
          <h2 className="text-[1.2rem] text-neutral-950 font-bold">
            Rifky Alfarez
          </h2>
          <p className="text-[0.8rem] text-neutral-600">Frontend Developer</p>
        </div>
        <div className="flex flex-col gap-y-2 pt-4 text-[0.9rem] text-neutral-800">
          {NAV_LIST.map((nav: NavbarProps, index: number) => {
            const isActive = pathname === nav.href;
            return (
              <Link
                onClick={onClick}
                key={index}
                href={nav.href}
                className={`hover:underline ${isActive ? 'underline' : ''}`}
              >
                {nav.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div>
        <h2 className="text-[0.9rem] text-neutral-800">Let&apos;s Connect</h2>
        <div className="flex items-center gap-x-1 mt-1">
          <Link
            href={'https://www.linkedin.com/in/rifkyalfarez/'}
            aria-label="Linkedin"
          >
            <Icon icon="linkedin" style="size-6 text-neutral-800" />
          </Link>
          <Link href={'https://github.com/rfkyalf'} aria-label="Github">
            <Icon icon="github" style="size-6 text-neutral-800" />
          </Link>
          <Link
            href={'https://www.instagram.com/rfkyalf/'}
            aria-label="Instagram"
          >
            <Icon icon="instagram" style="size-6 text-neutral-800" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
