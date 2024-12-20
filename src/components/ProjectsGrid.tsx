import { ProjectsProps } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import Icon from './Icon';

export default function ProjectsGrid({
  projects,
}: {
  projects: { data: ProjectsProps[] };
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
      {projects.data?.map((project: ProjectsProps) => (
        <div
          key={project.id}
          className="flex flex-col justify-between border border-neutral-300 shadow rounded-lg p-2 md:p-4"
        >
          <Link
            href={`/projects/${project.slug}`}
            className="relative w-full h-[180px]"
          >
            <Image
              src={project.small_image}
              alt={project.title}
              title={project.title}
              width={1000}
              height={1000}
              className="w-full h-full object-cover object-center rounded-md"
            />
          </Link>
          <Link
            href={`/projects/${project.slug}`}
            className="text-[0.9rem] md:text-[1rem] font-semibold text-neutral-900 mt-2 hover:underline"
          >
            {project.title}
          </Link>
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
                className="size-5 object-contain"
              />
            ))}
          </div>
        </div>
      ))}
      <BeTheNext />
    </div>
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
        <h3 className="text-[0.9rem] md:text-[1rem] font-semibold text-neutral-900 mt-2">
          Let&apos;s Build Something Cool
        </h3>
        <p className="text-[0.8rem] md:text-[0.9rem] text-neutral-700">
          Transform your ideas into reality with me!
        </p>
      </div>
      <Link
        href={'mailto:alfarez2325@gmail.com'}
        className="w-fit flex items-start self-end bg-neutral-900 text-[0.8rem] md:text-[0.9rem] text-neutral-100 py-[2px] pl-8 pr-7 mt-4 md:mt-0 rounded-md hover:bg-neutral-700 transition-colors duration-300"
      >
        Contact Me
        <Icon icon="arrow-right-up" style="size-3 text-neutral-300" />
      </Link>
    </div>
  );
};
