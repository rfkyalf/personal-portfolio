import Image from 'next/image';
import { SectionTitle, SectionWrapper } from '../components/SectionComps';
import { getSkills } from '@/lib/actions';
import { SkillsProps } from '@/lib/types';

export default async function Skills() {
  const skills = await getSkills();

  return (
    <SectionWrapper>
      <SectionTitle title="Skills" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
        {skills?.data.map((skill: SkillsProps) => (
          <div
            key={skill.id}
            className="flex items-center gap-x-4 border border-neutral-300 shadow rounded-lg p-2 md:p-4"
          >
            <Image
              src={skill.image}
              alt={skill.name}
              height={50}
              width={50}
              className="size-8 md:size-10 object-cover"
            />
            <h2 className="text-[0.9rem] md:text-[1rem] font-semibold text-neutral-900">
              {skill.name}
            </h2>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
