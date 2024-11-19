import Image from 'next/image';
import { SectionTitle, SectionWrapper } from '../components/SectionComps';
import { getProjects } from '@/lib/actions';
import { ProjectsProps } from '@/lib/types';

export default async function Projects() {
  const projects = await getProjects();

  return (
    <SectionWrapper>
      <SectionTitle title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
        {projects.data?.map((project: ProjectsProps) => (
          <div
            key={project.id}
            className="flex flex-col border border-neutral-300 shadow rounded-lg p-2 md:p-4"
          >
            <Image
              src={project.image}
              alt={project.title}
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
            <div className="flex items-center gap-x-1 mt-4">
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
      </div>
    </SectionWrapper>
  );
}
