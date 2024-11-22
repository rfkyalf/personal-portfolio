import ProjectsGrid from '@/components/ProjectsGrid';
import { getProjects } from '@/lib/actions';

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <main className="w-[95%] md:w-[650px] lg:w-[850px] xl:w-[1050px] min-h-screen mx-auto flex flex-col pt-[80px] md:pt-[85px] lg:pt-[90px]">
      <div>
        <h1 className="text-[1.5rem] md:text-[1.6rem] lg:text-[1.7rem] font-bold text-neutral-950">
          Projects
        </h1>
      </div>
      <div className="py-2 md:py-4">
        <ProjectsGrid projects={projects} />
      </div>
    </main>
  );
}
