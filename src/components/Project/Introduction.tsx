import { TitleProject } from './ProjectComps';

export default function Introduction({ description }: { description: string }) {
  return (
    <div className="flex flex-col">
      <TitleProject title="Introduction" />
      <p className="text-[0.9rem] md:text-[1rem] text-neutral-700 pt-1 md:pt-2 text-pretty">
        {description}
      </p>
    </div>
  );
}
