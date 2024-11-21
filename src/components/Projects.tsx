import Image from 'next/image';
import { SectionTitle, SectionWrapper } from '../components/SectionComps';
import { getProjects } from '@/lib/actions';
import { ProjectsProps } from '@/lib/types';
import { GoArrowUpRight } from 'react-icons/go';

export default async function Projects() {
  const projects = await getProjects();

  return (
    <SectionWrapper>
      <SectionTitle title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
        {projects.data?.map((project: ProjectsProps) => (
          <div
            key={project.id}
            className="flex flex-col justify-between border border-neutral-300 shadow rounded-lg p-2 md:p-4"
          >
            <Image
              src={project.image}
              alt={project.title}
              title={project.title}
              width={100}
              height={100}
              className="w-full h-[180px] object-cover object-center rounded-md"
            />
            <h2 className="text-[0.9rem] md:text-[1rem] font-semibold text-neutral-900 mt-2">
              {project.title}
            </h2>
            <p className="text-[0.8rem] md:text-[0.9rem] text-neutral-700">
              {project.description.length > 100
                ? project.description.substring(0, 100) + '...'
                : project.description}
            </p>
            <div className="flex flex-wrap items-center gap-1 mt-4">
              {project.techs.map((tech) => (
                <Image
                  key={tech.id}
                  src={tech.image}
                  alt={tech.name}
                  title={tech.name}
                  height={50}
                  width={50}
                  className="size-5 object-cover"
                />
              ))}
            </div>
          </div>
        ))}
        <BeTheNext />
      </div>
    </SectionWrapper>
  );
}

const BeTheNext = () => {
  return (
    <div className="flex flex-col justify-between border border-neutral-300 shadow rounded-lg p-2 md:p-4">
      <div>
        <div
          title="Be the Next"
          className="bg-neutral-200 h-[180px] text-neutral-700 text-[1.2rem] md:text-[1.3rem] font-semibold flex items-center justify-center rounded-md"
        >
          Be the Next
        </div>
        <h2 className="text-[0.9rem] md:text-[1rem] font-semibold text-neutral-900 mt-2">
          Let&apos;s Build Something Cool
        </h2>
        <p className="text-[0.8rem] md:text-[0.9rem] text-neutral-700">
          Transform your ideas into reality with me!
        </p>
      </div>
      <button className="w-fit flex items-start self-end bg-neutral-900 text-[0.8rem] md:text-[0.9rem] text-neutral-100 py-[2px] pl-8 pr-7 mt-4 md:mt-0 rounded-md">
        Contact Me
        <GoArrowUpRight className="size-3 text-neutral-300" />
      </button>
    </div>
  );
};
