import BackButton from '@/components/BackButton';
import { TitleExp } from '@/components/Experience/ExpComps';
import { getExperience } from '@/lib/actions';
import { MotionElement } from '@/lib/framer';
import { ExperiencesProps } from '@/lib/types';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const data = await getExperience(slug);
  const experience: ExperiencesProps = data.data;

  if (data.status === 404)
    return {
      title: { absolute: 'Experience not found' },
      description:
        'Experience not found, please check your spelling and try again',
    };

  return {
    title: experience?.company,
    description: `At ${experience.company}, based in ${experience.location}, I proudly served as a ${experience.role} contributing my expertise ${experience.work_arrangement}ly from ${experience.date}.`,
    openGraph: {
      title: experience?.company,
      description: `At ${experience.company}, based in ${experience.location}, I proudly served as a ${experience.role} contributing my expertise ${experience.work_arrangement}ly from ${experience.date}.`,
      images: experience?.image,
      url: `https://rifkyalfarez.my.id/experiences/${experience?.slug}`,
      type: 'website',
      siteName: 'Rifky Alfarez | Personal Website',
    },
  };
}

export default async function page(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const data = await getExperience(slug);

  if (data.status === 404) return notFound();

  const experience: ExperiencesProps = data.data;

  return (
    <MotionElement
      as="main"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-[95%] md:w-[650px] lg:w-[850px] xl:w-[1050px] min-h-screen mx-auto flex flex-col gap-y-4 md:gap-y-6 py-4 md:py-6"
    >
      <BackButton />
      <TitleExp
        title={experience.company}
        date={experience.date}
        image={experience.image}
      />
      <p className="text-[0.9rem] md:text-[1rem] text-neutral-800 text-pretty">
        At {experience.company}, based in {experience.location}, I proudly
        served as a <span className="font-bold">{experience.role}</span>&nbsp;
        contributing my expertise&nbsp;
        {experience.work_arrangement}ly from&nbsp;
        {experience.date}.
      </p>
      <div className="flex flex-col">
        <p className="text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] text-neutral-950 font-semibold text-pretty">
          As a {experience.role}, my contributions include:
        </p>
        <div className="flex flex-col gap-y-1 md:gap-y-2 mt-1 md:mt-2 px-2 md:px-4">
          {experience.contributions.map((contribution) => (
            <p
              key={contribution.id}
              className="text-[0.9rem] md:text-[1rem] text-neutral-800 text-pretty"
            >
              {contribution.id}.&nbsp;
              {contribution.description}
            </p>
          ))}
        </div>
      </div>
    </MotionElement>
  );
}
