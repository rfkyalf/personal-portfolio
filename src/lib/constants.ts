export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  'http://localhost:3000' ||
  'https://rifkyalfarez.my.id';

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
    name: 'Certificates',
    href: '/certificates',
  },
];
