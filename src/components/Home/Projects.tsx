import { getProjects } from '@/lib/actions';
import { SectionTitle, SectionWrapper } from '../SectionComps';
import ProjectsGrid from '../ProjectsGrid';
import ViewMoreButton from '../ViewMoreButton';
import { MotionElement } from '@/lib/framer';

export default async function Projects() {
  const projects = await getProjects('');

  return (
    <MotionElement
      as="section"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <SectionWrapper>
        <SectionTitle title="Projects" />
        <ProjectsGrid projects={projects} />
        <ViewMoreButton href="/projects" />
      </SectionWrapper>
    </MotionElement>
  );
}
