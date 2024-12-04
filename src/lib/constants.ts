export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://www.rifkyalfarez.my.id'
    : 'http://localhost:3000';

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
