import { ProjectsProps } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectImageSection({
  project,
}: {
  project: ProjectsProps;
}) {
  return (
    <div className="w-full flex flex-col">
      <Image
        src={project.large_image}
        alt={project.title}
        title={project.title}
        priority
        width={2000}
        height={2000}
        className="w-full h-[200px] md:h-[380px] lg:h-[480px] xl:h-[600px] object-cover object-center rounded-md"
      />
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-1 md:mt-2">
        <TechStacks techs={project.techs} />
        <ProjectLinks
          sourceCode={project.source_code || ''}
          demo={project.demo || ''}
        />
      </div>
    </div>
  );
}

const TechStacks = ({
  techs,
}: {
  techs: { id: number; name: string; image: string }[];
}) => {
  return (
    <div className="flex items-center gap-x-1">
      <span className="text-[0.9rem] md:text-[1rem] text-neutral-800">
        Tech Stacks:
      </span>
      <div className="flex flex-wrap items-center gap-x-1">
        {techs.map((tech) => (
          <Image
            key={tech.id}
            src={tech.image}
            alt={tech.name}
            title={tech.name}
            width={100}
            height={100}
            className="size-4 md:size-5 object-cover object-center"
          />
        ))}
      </div>
    </div>
  );
};

const ProjectLinks = ({
  sourceCode,
  demo,
}: {
  sourceCode: string;
  demo: string;
}) => {
  if (!sourceCode && !demo) return '';

  return (
    <div className="flex items-center gap-x-2">
      {sourceCode && (
        <Link
          href={sourceCode}
          target="_blank"
          className="text-[0.9rem] md:text-[1rem] text-neutral-800 hover:underline"
        >
          Source Code
        </Link>
      )}
      {sourceCode && demo && (
        <span className="text-[0.9rem] md:text-[1rem] text-neutral-800">|</span>
      )}
      {demo && (
        <Link
          href={demo}
          target="_blank"
          className="text-[0.9rem] md:text-[1rem] text-neutral-800 hover:underline"
        >
          Live Demo
        </Link>
      )}
    </div>
  );
};
