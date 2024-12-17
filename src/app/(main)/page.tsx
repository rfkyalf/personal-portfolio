// import Articles from '@/components/Home/Articles';
// import Certificates from '@/components/Home/Certificates';
// import Experience from '@/components/Home/Experience';
// import GetInTouch from '@/components/Home/GetInTouch';
// import Projects from '@/components/Home/Projects';
// import Skills from '@/components/Home/Skills';
// import Summary from '@/components/Home/Summary';

import dynamic from 'next/dynamic';

const Summary = dynamic(() => import('@/components/Home/Summary'));
const Experience = dynamic(() => import('@/components/Home/Experience'));
const Projects = dynamic(() => import('@/components/Home/Projects'));
const Articles = dynamic(() => import('@/components/Home/Articles'));
const Skills = dynamic(() => import('@/components/Home/Skills'));
const Certificates = dynamic(() => import('@/components/Home/Certificates'));
const GetInTouch = dynamic(() => import('@/components/Home/GetInTouch'));

// export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main className="w-[90%] md:w-[650px] lg:w-[850px] xl:w-[1050px] min-h-screen mx-auto flex flex-col pt-[80px] md:pt-[85px] lg:pt-[90px]">
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
