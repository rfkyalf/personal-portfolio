import { getSummary } from '@/lib/actions';
import { MotionElement } from '@/lib/framer';
import { SummaryProps } from '@/lib/types';
import Link from 'next/link';

export default async function Summary() {
  const data = await getSummary();
  const summary: SummaryProps = data.data;

  return (
    <MotionElement
      as="section"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-y-[15px] md:gap-y-[20px] lg:gap-y-[25px] border-b border-neutral-300 pb-[25px] md:pb-[30px] lg:pb-[35px]"
    >
      <div>
        <h1 className="text-[1.7rem] md:text-[1.8rem] lg:text-[1.9rem] font-bold text-neutral-950">
          {summary?.name}
        </h1>
        <p className="text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] text-neutral-500">
          {summary?.role}
        </p>
      </div>
      <p className="text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] text-neutral-800 text-pretty">
        {summary?.summary}
      </p>
      <Link
        className="w-fit text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] text-neutral-800 hover:underline"
        href={summary?.cv_link}
      >
        Download CV
      </Link>
    </MotionElement>
  );
}
