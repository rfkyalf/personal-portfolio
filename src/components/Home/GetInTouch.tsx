import { SectionTitle } from '@/components/SectionComps';
import { MotionElement } from '@/lib/framer';
import Link from 'next/link';
import Icon from '../Icon';

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

export default function GetInTouch() {
  return (
    <MotionElement
      as="section"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-[25px] md:py-[30px] lg:py-[35px] flex flex-col items-center"
    >
      <SectionTitle title={GET_IN_TOUCH.title} style="text-center" />
      <p className="text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] text-neutral-800 text-pretty text-center">
        {GET_IN_TOUCH.text}
      </p>
      <Link
        href={'mailto:alfarez2325@gmail.com'}
        className="w-fit flex items-start bg-neutral-900 hover:bg-neutral-700 transition-colors duration-300 text-[0.8rem] md:text-[0.9rem] text-neutral-100 py-1 pl-8 pr-7 rounded-md mt-2"
      >
        Say Hello!
        <Icon icon="arrow-right-up" style="size-3 text-neutral-300" />
      </Link>
      <p className="text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] text-neutral-800 text-center mt-4 md:mt-5 lg:mt-6">
        or find me on
      </p>
      <div className="flex items-center gap-x-2 mt-1">
        {GET_IN_TOUCH.socials.map((social) => {
          return (
            <Link
              key={social.id}
              href={social.link}
              aria-label={social.name}
              target="_blank"
              className="hover:scale-95 transition duration-300 group"
            >
              <Icon icon={social.icon} style="size-6 md:size-7" />
            </Link>
          );
        })}
      </div>
    </MotionElement>
  );
}
