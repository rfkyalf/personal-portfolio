import { FaLinkedin, FaSquareGithub, FaSquareInstagram } from 'react-icons/fa6';
import { GoArrowUpRight } from 'react-icons/go';
import { SectionTitle } from '@/components/SectionComps';

export default function GetInTouch() {
  return (
    <section className="py-[25px] md:py-[30px] lg:py-[35px] flex flex-col items-center">
      <SectionTitle title="Get in Touch" style="text-center" />
      <p className="text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] text-neutral-800 text-pretty text-center">
        I am currently seeking job opportunities to gain more experience in the
        industry. Whether you have any questions or simply want to say hi, I
        will do my best to get back to you!
      </p>
      <button className="w-fit flex items-start bg-neutral-900 text-[0.8rem] md:text-[0.9rem] text-neutral-100 py-1 pl-8 pr-7 rounded-md mt-2">
        Say Hello!
        <GoArrowUpRight className="size-3 text-neutral-300" />
      </button>
      <p className="text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] text-neutral-800 text-center mt-4 md:mt-5 lg:mt-6">
        or find me on
      </p>
      <div className="flex items-center gap-x-2 mt-1">
        <FaLinkedin className="size-6 md:size-7 text-neutral-800" />
        <FaSquareGithub className="size-6 md:size-7 text-neutral-800" />
        <FaSquareInstagram className="size-6 md:size-7 text-neutral-800" />
      </div>
    </section>
  );
  <div></div>;
}
