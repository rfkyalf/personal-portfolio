import ProjectsGrid from '@/components/ProjectsGrid';
import Search from '@/components/Search';
import { getProjects } from '@/lib/actions';
import { MotionElement } from '@/lib/framer';

export const metadata = {
  title: 'Projects',
  description:
    'Showcasing the implementation of my skills through a variety of personal and real-world projects, highlighting expertise in frontend development',
  openGraph: {
    description:
      'Showcasing the implementation of my skills through a variety of personal and real-world projects, highlighting expertise in frontend development',
  },
};

export default async function ProjectsPage(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const projects = await getProjects(query);

  return (
    <MotionElement
      as="main"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-[95%] md:w-[650px] lg:w-[850px] xl:w-[1050px] min-h-screen mx-auto flex flex-col pt-[80px] md:pt-[85px] lg:pt-[90px]"
    >
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-[1.5rem] md:text-[1.6rem] lg:text-[1.7rem] font-bold text-neutral-950">
          Projects
        </h1>
        <Search placeholder="Search projects..." />
      </div>
      <div className="py-2 md:py-4">
        <ProjectsGrid projects={projects} />
      </div>
    </MotionElement>
  );
}
