import Image from 'next/image';
import { SectionTitle, SectionWrapper } from '../components/SectionComps';

export default function Certificates() {
  return (
    <SectionWrapper>
      <SectionTitle title="Certificates" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col border border-neutral-300 shadow rounded-lg p-2 md:p-4"
          >
            <span className="w-fit bg-indigo-400 text-[0.7rem] text-neutral-100 border border-indigo-500 rounded-full px-2">
              Bootstrap
            </span>
            <h2 className="text-[0.9rem] md:text-[1rem] font-semibold text-neutral-900 mt-2">
              Bootstrap CSS : Pemula sampai Mahir
            </h2>
            <p className="text-[0.7rem] md:text-[0.8rem] text-neutral-500">
              Udemy
            </p>
            <Image
              src={'/certif/certif1.webp'}
              alt=""
              width={100}
              height={100}
              className="w-full h-full object-cover rounded-md mt-2"
            />
            <p className="self-end text-[0.8rem] md:text-[0.9rem] text-neutral-900 mt-2 md:mt-3 lg:mt-4">
              Aug 2024
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
