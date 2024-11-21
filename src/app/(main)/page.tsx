import Certificates from '@/components/Certificates';
import Experience from '@/components/Experience';
import GetInTouch from '@/components/GetInTouch';
import Projects from '@/components/Projects';

import Skills from '@/components/Skills';
import Summary from '@/components/Summary';

export default function Home() {
  return (
    <main className="w-[95%] md:w-[650px] lg:w-[850px] xl:w-[1050px] min-h-screen mx-auto flex flex-col pt-[80px] md:pt-[85px] lg:pt-[90px]">
      <Summary />
      <Experience />
      <Projects />
      <Skills />
      <Certificates />
      <GetInTouch />
    </main>
  );
}
