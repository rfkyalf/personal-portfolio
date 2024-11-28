export function SectionWrapper({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: string;
}) {
  return (
    <section
      className={`flex flex-col gap-y-[15px] md:gap-y-[20px] lg:gap-y-[25px] border-b border-neutral-300 py-[25px] md:py-[30px] lg:py-[35px] ${style}`}
    >
      {children}
    </section>
  );
}

export function SectionTitle({
  title,
  style,
}: {
  title: string;
  style?: string;
}) {
  return (
    <h2
      className={`text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] font-semibold text-neutral-900 ${style}`}
    >
      {title}
    </h2>
  );
}
