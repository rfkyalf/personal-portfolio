import Image from 'next/image';
import { SectionTitle, SectionWrapper } from '../components/SectionComps';

export default function Skills() {
  return (
    <SectionWrapper>
      <SectionTitle title="Skills" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-x-4 border border-neutral-300 shadow rounded-lg p-2 md:p-4"
          >
            <Image
              src={'/tech/html.webp'}
              alt=""
              height={50}
              width={50}
              className="size-8 md:size-10 object-cover"
            />
            <h2 className="text-[0.9rem] md:text-[1rem] font-semibold text-neutral-900">
              HTML
            </h2>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
