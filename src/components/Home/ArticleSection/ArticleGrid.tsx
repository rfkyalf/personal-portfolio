import Icon from '@/components/Icon';
import Image from 'next/image';

export default function ArticleGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
      <div className="flex flex-col justify-between gap-y-1 md:gap-y-2 border border-neutral-300 rounded-lg shadow p-2 md:p-4">
        <Image
          src={'/prj/kanabagi.webp'}
          alt="article"
          title="article"
          width={1000}
          height={1000}
          className="w-full h-[200px] md:h-[160px] lg:h-[180px] object-cover rounded-md"
        />
        <TitleDescription />
        <div className="w-full flex justify-between items-center mt-1 md:mt-2">
          <AuthorDate />
          <Icon icon="bookmark" style="size-4 md:size-5" />
        </div>
      </div>
    </div>
  );
}

const AuthorDate = () => {
  return (
    <div className="flex items-center gap-x-1 md:gap-x-2">
      <div className="size-6 md:size-8 rounded-full bg-neutral-300" />
      <div>
        <p className="text-[0.8rem] md:text-[0.9rem] text-neutral-900 font-medium">
          Rifky Alfarez
        </p>
        <p className="text-[0.6rem] md:text-[0.7rem] text-neutral-700">
          Nov 28, 2024
        </p>
      </div>
    </div>
  );
};

const TitleDescription = () => {
  return (
    <div className="flex flex-col">
      <h3 className="text-[0.9rem] md:text-[1rem] font-semibold text-neutral-900 hover:underline">
        Lorem, ipsum.
      </h3>
      <p className="text-[0.8rem] md:text-[0.9rem] text-neutral-700 text-pretty">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quasi
        nobis similique ad explicabo dolore id laboriosam expedita autem velit!
      </p>
    </div>
  );
};
