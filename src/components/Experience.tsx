import Image from 'next/image';
import { SectionTitle, SectionWrapper } from '../components/SectionComps';

export default function Experience() {
  return (
    <SectionWrapper>
      <SectionTitle title="Experience" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="flex items-start gap-x-4 border border-neutral-300 rounded-lg p-4"
          >
            <Image
              src="/exp/exp1.webp"
              alt="PT. Quadra Karya Santosa"
              width={100}
              height={100}
              className="size-14 object-contain"
            />
            <div>
              <h2 className="text-[0.9rem] md:text-[1rem] font-semibold text-neutral-900">
                PT. Quadra Karya Santosa
              </h2>
              <p className="text-[0.8rem] md:text-[0.9rem] text-neutral-700">
                Frontend Web Developer (Intern)
              </p>
              <p className="text-[0.8rem] md:text-[0.9rem] text-neutral-900 mt-2 md:mt-3 lg:mt-4">
                Sep 2023 - Nov 2023
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
