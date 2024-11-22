import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-center py-4 border-t border-neutral-300">
      <p className="text-[0.9rem] md:text-[1rem] text-neutral-900">
        Created by&nbsp;
        <Link
          href={'https://www.linkedin.com/in/rifkyalfarez/'}
          className="font-bold hover:underline"
        >
          Rifky Alfarez
        </Link>
        . &nbsp;All rights reserved.
      </p>
    </footer>
  );
}
