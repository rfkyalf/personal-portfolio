export function TitleProject({
  style,
  title,
}: {
  style?: string;
  title: string;
}) {
  return (
    <h1
      className={`text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] font-bold text-neutral-950 border-b border-neutral-300 pb-1 md:pb-2 ${style}`}
    >
      {title}
    </h1>
  );
}
