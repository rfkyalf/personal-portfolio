import Image from 'next/image';
import { SectionTitle, SectionWrapper } from '../SectionComps';
import { getSkills } from '@/lib/actions';
import { SkillsProps } from '@/lib/types';
import { MotionElement } from '@/lib/framer';

export default async function Skills() {
  const skills = await getSkills();

  return (
    <MotionElement
      as="section"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <SectionWrapper>
        <SectionTitle title="Skills" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {skills?.data.map((skill: SkillsProps) => (
            <div
              key={skill.id}
              title={skill.name}
              className="flex items-center gap-x-4 border border-neutral-300 shadow rounded-lg p-2 md:p-4 hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
            >
              <Image
                src={skill.image}
                alt={skill.name}
                title={skill.name}
                height={200}
                width={200}
                className="size-6 md:size-8 lg:size-10 object-contain"
              />
              <p className="text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] font-semibold text-neutral-900">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </MotionElement>
  );
}
