import { getExperiences, getProjects } from '@/lib/actions';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects('');
  const projectsUrl = projects.data.map((project: { slug: string }) => ({
    url: `https://www.rifkyalfarez.my.id/projects/${project.slug}`,
  }));

  const experiences = await getExperiences();
  const experiencesUrl = experiences.data.map(
    (experience: { slug: string }) => ({
      url: `https://www.rifkyalfarez.my.id/experiences/${experience.slug}`,
    })
  );
  return [
    {
      url: 'https://www.rifkyalfarez.my.id/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `https://www.rifkyalfarez.my.id/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `https://www.rifkyalfarez.my.id/certificates`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    ...projectsUrl,
    ...experiencesUrl,
  ];
}
