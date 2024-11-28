export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  'https://rifkyalfarez.vercel.app' ||
  'http://localhost:3000';

export const NAV_LIST = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Articles',
    href: '/articles',
  },
  {
    name: 'Certificates',
    href: '/certificates',
  },
];
