import { getExperiences, getProjects } from '@/lib/actions';
import { BASE_URL } from '@/lib/constants';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects('');
  const projectsUrl = projects.data.map((project: { slug: string }) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
  }));

  const experiences = await getExperiences();
  const experiencesUrl = experiences.data.map(
    (experience: { slug: string }) => ({
      url: `${BASE_URL}/experiences/${experience.slug}`,
    })
  );
  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/certificates`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    ...projectsUrl,
    ...experiencesUrl,
  ];
}
