import Experience from '@/components/Experience';
import { SectionTitle, SectionWrapper } from '@/components/SectionComps';
import Summary from '@/components/Summary';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="w-[95%] md:w-[650px] lg:w-[850px] xl:w-[1050px] min-h-screen mx-auto flex flex-col">
      <Summary />
      <Experience />
      <SectionWrapper>
        <SectionTitle title="Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col border border-neutral-300 shadow rounded-lg p-4"
            >
              <Image
                src={'/prj/prj1.webp'}
                alt="Project 1"
                width={100}
                height={100}
                className="w-full h-full object-cover object-center rounded-md"
              />
              <h2 className="text-[0.9rem] md:text-[1rem] font-semibold text-neutral-900 mt-2">
                Kanabagi Group
              </h2>
              <p className="text-[0.8rem] md:text-[0.9rem] text-neutral-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo quae porro voluptas placeat, distinctio dignissimos ea
                illo non inventore iste.
              </p>
              <div className="flex items-center gap-x-1 mt-4">
                <Image
                  src={'/tech/nextjs.webp'}
                  alt=""
                  height={50}
                  width={50}
                  className="size-5 object-cover"
                />
                <Image
                  src={'/tech/tailwind.webp'}
                  alt=""
                  height={50}
                  width={50}
                  className="size-5 object-cover"
                />
                <Image
                  src={'/tech/shadcn.webp'}
                  alt=""
                  height={50}
                  width={50}
                  className="size-5 object-cover"
                />
                <Image
                  src={'/tech/ts.webp'}
                  alt=""
                  height={50}
                  width={50}
                  className="size-5 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}
