import Image from 'next/image';
import { SectionTitle, SectionWrapper } from '../SectionComps';
import { GoArrowUpRight } from 'react-icons/go';
import { getExperiences } from '@/lib/actions';
import { ExperiencesProps } from '@/lib/types';
import Link from 'next/link';
import { MotionElement } from '@/lib/framer';

export default async function Experience() {
  const experiences = await getExperiences();

  return (
    <MotionElement
      as="section"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionWrapper>
        <SectionTitle title="Experience" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
          {experiences.data?.map((exp: ExperiencesProps) => (
            <Link
              href={`/experiences/${exp.slug}`}
              key={exp.id}
              className="flex items-start gap-x-4 border border-neutral-300 shadow rounded-lg p-4 transition duration-300 hover:scale-95"
            >
              <Image
                src={exp.image}
                alt={exp.company}
                title={exp.company}
                width={100}
                height={100}
                className="size-12 md:size-14 object-contain"
              />
              <div>
                <h2 className="text-[0.9rem] md:text-[1rem] font-semibold text-neutral-900">
                  {exp.company}
                </h2>
                <p className="text-[0.8rem] md:text-[0.9rem] text-neutral-700">
                  {exp.role} &nbsp; ({exp.status})
                </p>
                <p className="text-[0.8rem] md:text-[0.9rem] text-neutral-900 mt-2 md:mt-3 lg:mt-4">
                  {exp.date}
                </p>
              </div>
            </Link>
          ))}
          <OpenToWork />
        </div>
      </SectionWrapper>
    </MotionElement>
  );
}

const OpenToWork = () => {
  return (
    <div className="flex items-start justify-center gap-x-4 border border-neutral-300 shadow rounded-lg p-4 cursor-pointer">
      <Image
        src="/exp/job-search.webp"
        alt="Open to Work"
        title="Open to Work"
        width={100}
        height={100}
        className="size-12 md:size-14 object-contain"
      />
      <div className="flex flex-col">
        <h2 className="text-[0.9rem] md:text-[1rem] font-semibold text-neutral-900">
          Open to Work
        </h2>
        <p className="text-[0.8rem] md:text-[0.9rem] text-neutral-700">
          Ready to contribute as a Frontend Developer
        </p>
        <Link
          href={'mailto:alfarez2325@gmail.com'}
          className="w-fit flex items-start self-end bg-neutral-900 text-[0.8rem] md:text-[0.9rem] text-neutral-100 py-[2px] pl-8 pr-7 mt-2 md:mt-0 rounded-md hover:bg-neutral-700 transition-colors duration-300"
        >
          Hire Me
          <GoArrowUpRight className="size-3 text-neutral-300" />
        </Link>
      </div>
    </div>
  );
};
