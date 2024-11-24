import BackButton from '@/components/BackButton';
import InstallationSteps from '@/components/Project/InstallationSteps';
import Introduction from '@/components/Project/Introduction';
import KeyFeatures from '@/components/Project/KeyFeatures';
import { TitleProject } from '@/components/Project/ProjectComps';
import ProjectImageSection from '@/components/Project/ProjectImageSection';
import Usage from '@/components/Project/Usage';
import { getProject } from '@/lib/actions';
import { MotionElement } from '@/lib/framer';
import { ProjectsProps } from '@/lib/types';
import { notFound } from 'next/navigation';

export default async function page(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const data = await getProject(slug);

  if (data.status === 404) return notFound();

  const project: ProjectsProps = data.data;

  return (
    <MotionElement
      as="main"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-[95%] md:w-[650px] lg:w-[850px] xl:w-[1050px] min-h-screen mx-auto flex flex-col gap-y-4 md:gap-y-6 py-4 md:py-6"
    >
      <BackButton />
      <TitleProject title={project.title} />
      <ProjectImageSection project={project} />
      <Introduction description={project.description} />
      <KeyFeatures features={project.features} />
      <InstallationSteps project={project} />
      <Usage
        localhost={project.localhost}
        sourceCode={project.source_code || ''}
      />
    </MotionElement>
  );
}
