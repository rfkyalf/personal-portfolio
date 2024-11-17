import Link from 'next/link';

const SUMMARY_TEXT =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil hic quas ut esse perspiciatis magni quia numquam id dolorem? A ut nobis explicabo ipsam recusandae impedit eaque labore sed, debitis unde minima doloribus similique temporibus totam pariatur fugit rerum doloremque esse accusantium quis nam sapiente excepturi? Maiores tenetur veniam commodi.';

export default function Summary() {
  return (
    <section className="flex flex-col gap-y-[15px] md:gap-y-[20px] lg:gap-y-[25px] border-b border-neutral-300 pb-[25px] md:pb-[30px] lg:pb-[35px]">
      <div>
        <h1 className="text-[1.7rem] md:text-[1.8rem] lg:text-[1.9rem] font-bold text-neutral-950">
          Rifky Alfarez
        </h1>
        <p className="text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] text-neutral-500">
          Frontend Developer
        </p>
      </div>
      <p className="text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] text-neutral-800 text-pretty">
        {SUMMARY_TEXT}
      </p>
      <Link
        className="w-fit text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] text-neutral-800 hover:underline"
        href={'TODO: link to resume'}
      >
        Download CV
      </Link>
    </section>
  );
}
