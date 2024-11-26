import { SectionTitle } from '@/components/SectionComps';
import { getGetInTouch } from '@/lib/actions';
import { MotionElement } from '@/lib/framer';
import { GetInTouchProps } from '@/lib/types';
import Link from 'next/link';
import Icon from '../Icon';

export default async function GetInTouch() {
  const data = await getGetInTouch();
  const getInTouch: GetInTouchProps = data.data;

  return (
    <MotionElement
      as="section"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-[25px] md:py-[30px] lg:py-[35px] flex flex-col items-center"
    >
      <SectionTitle title={getInTouch?.title} style="text-center" />
      <p className="text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] text-neutral-800 text-pretty text-center">
        {getInTouch?.text}
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
        {getInTouch?.socials.map((social) => {
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
