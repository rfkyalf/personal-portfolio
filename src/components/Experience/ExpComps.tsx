import Image from 'next/image';

export function TitleExp({
  style,
  title,
  date,
  image,
}: {
  style?: string;
  title: string;
  date: string;
  image: string;
}) {
  return (
    <div
      className={`flex items-center justify-between border-b border-neutral-300 pb-1 md:pb-2 ${style}`}
    >
      <div>
        <h2 className="text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] font-bold text-neutral-950">
          {title}
        </h2>
        <p className="text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] text-neutral-500">
          {date}
        </p>
      </div>
      <Image
        src={image}
        alt={title}
        height={100}
        width={100}
        className="size-12 md:size-14 lg:size-16 shrink-0 object-cover object-center"
      />
    </div>
  );
}
