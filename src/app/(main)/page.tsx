import Experience from '@/components/Experience';
import Summary from '@/components/Summary';

export default function Home() {
  return (
    <main className="w-[95%] md:w-[650px] lg:w-[850px] xl:w-[1050px] min-h-screen mx-auto flex flex-col">
      <Summary />
      <Experience />
    </main>
  );
}
