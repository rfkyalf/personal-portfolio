import { getProjects } from '@/lib/actions';
import { SectionTitle, SectionWrapper } from '../components/SectionComps';
import ProjectsGrid from './ProjectsGrid';
import ViewMoreButton from './ViewMoreButton';

export default async function Projects() {
  const projects = await getProjects('');

  return (
    <SectionWrapper>
      <SectionTitle title="Projects" />
      <ProjectsGrid projects={projects} />
      <ViewMoreButton href="/projects" />
    </SectionWrapper>
  );
}
