import { getSummary } from '@/lib/actions';
import Link from 'next/link';

export default async function Summary() {
  const summary = await getSummary();

  return (
    <section className="flex flex-col gap-y-[15px] md:gap-y-[20px] lg:gap-y-[25px] border-b border-neutral-300 pb-[25px] md:pb-[30px] lg:pb-[35px]">
      <div>
        <h1 className="text-[1.7rem] md:text-[1.8rem] lg:text-[1.9rem] font-bold text-neutral-950">
          {summary?.data.name}
        </h1>
        <p className="text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] text-neutral-500">
          {summary?.data.role}
        </p>
      </div>
      <p className="text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] text-neutral-800 text-pretty">
        {summary?.data.summary}
      </p>
      <Link
        className="w-fit text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] text-neutral-800 hover:underline"
        href={summary?.data.cv_link}
      >
        Download CV
      </Link>
    </section>
  );
}
