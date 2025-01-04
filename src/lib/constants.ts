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

export const GET_IN_TOUCH = {
  title: 'Get In Touch',
  text: 'I am currently seeking job opportunities to gain more experience in the industry. Whether you have any questions or simply want to say hi, I will do my best to get back to you!',
  socials: [
    {
      id: 1,
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/rifkyalfarez/',
      icon: 'linkedin',
    },
    {
      id: 2,
      name: 'Github',
      link: 'https://github.com/rfkyalf',
      icon: 'github',
    },
    {
      id: 3,
      name: 'Instagram',
      link: 'https://www.instagram.com/rfkyalf/',
      icon: 'instagram',
    },
  ],
};

export const SELF_DESC = {
  name: 'Rifky Alfarez',
  role: 'Frontend Developer',
  summary:
    'An enthusiastic and motivated Informatics Engineering graduate with a strong passion for web development. Skilled in developing websites using modern technologies such as Vue.js, React.js, and Next.js. Supported by hands-on experience from an internship as a Frontend Developer and various web development projects.',
  cv_link:
    'https://drive.google.com/file/d/1HE9rEIjQWAgj8eFe6aeFIAupgVw81J8b/view?usp=sharing',
};
