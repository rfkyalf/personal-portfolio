export default function KeyFeatures({
  features,
}: {
  features: { id: number; emoji: string; title: string; description: string }[];
}) {
  return (
    <div>
      <h2 className="text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] font-bold text-neutral-950 border-b border-neutral-300 pb-1 md:pb-2">
        Key Features
      </h2>
      <div className="flex flex-col gap-y-1 md:gap-y-2 mt-1 md:mt-2">
        {features.map((feature) => (
          <p
            key={feature.id}
            className="text-[0.9rem] md:text-[1rem] text-neutral-700 text-pretty"
          >
            {feature.emoji}
            <span className="font-bold">&nbsp;{feature.title}:&nbsp;</span>
            {feature.description}
          </p>
        ))}
      </div>
    </div>
  );
}
