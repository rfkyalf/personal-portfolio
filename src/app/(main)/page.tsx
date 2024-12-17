/* eslint-disable @typescript-eslint/no-unused-vars */
import StructuredData from '@/components/Schema';
import dynamic from 'next/dynamic';

const Summary = dynamic(() => import('@/components/Home/Summary'));
const Experience = dynamic(() => import('@/components/Home/Experience'));
const Projects = dynamic(() => import('@/components/Home/Projects'));
const Articles = dynamic(() => import('@/components/Home/Articles'));
const Skills = dynamic(() => import('@/components/Home/Skills'));
const Certificates = dynamic(() => import('@/components/Home/Certificates'));
const GetInTouch = dynamic(() => import('@/components/Home/GetInTouch'));

import { Person, WebPage, WithContext } from 'schema-dts';

function schemaData(): WithContext<WebPage | Person> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Rifky Alfarez | Personal Website',
    url: 'https://www.rifkyalfarez.my.id/',
    description:
      'Rifky Alfarez personal website, discover my portfolio, projects, and professional journey in technology.',
    mainEntity: {
      '@type': 'Person',
      name: 'Rifky Alfarez',
      jobTitle: 'Frontend Developer',
      url: 'https://www.rifkyalfarez.my.id/',
      alumniOf: 'Universitas Siliwangi',
      sameAs: [
        'https://www.linkedin.com/in/rifkyalfarez',
        'https://github.com/rfkyalf',
      ],
    },
  };
}

export default function Home() {
  return (
    <main className="w-[90%] md:w-[650px] lg:w-[850px] xl:w-[1050px] min-h-screen mx-auto flex flex-col pt-[80px] md:pt-[85px] lg:pt-[90px]">
      <StructuredData data={schemaData()} />
      <Summary />
      <Experience />
      <Projects />
      <Articles />
      <Skills />
      <Certificates />
      <GetInTouch />
    </main>
  );
}
