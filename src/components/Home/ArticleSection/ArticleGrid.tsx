import Icon from '@/components/Icon';
import { ArticlesProps } from '@/lib/types';
import Image from 'next/image';

export default function ArticleGrid({
  articles,
}: {
  articles: { data: ArticlesProps[] };
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
      {articles?.data.map((data) => (
        <div
          key={data.id}
          className="flex flex-col justify-between gap-y-1 md:gap-y-2 border border-neutral-300 rounded-lg shadow p-2 md:p-4"
        >
          <Image
            src={data.thumbnail}
            alt={data.title}
            title={data.title}
            width={1000}
            height={1000}
            className="w-full h-[120px] md:h-[100px] lg:h-[130px] object-cover rounded-md"
          />
          <TitleDescription title={data.title} description={data.description} />
          <div className="w-full flex justify-between items-center mt-1 md:mt-2">
            <AuthorDate author={data.author} created_at={data.created_at} />
            <Icon icon="bookmark" style="size-4 md:size-5" />
          </div>
        </div>
      ))}
    </div>
  );
}

const AuthorDate = ({
  author,
  created_at,
}: {
  author: string;
  created_at: string;
}) => {
  return (
    <div className="flex items-center gap-x-1 md:gap-x-2">
      <div className="size-6 md:size-8 rounded-full bg-neutral-300" />
      <div>
        <p className="text-[0.8rem] md:text-[0.9rem] text-neutral-900 font-medium">
          {author}
        </p>
        <p className="text-[0.6rem] md:text-[0.7rem] text-neutral-700">
          {created_at}
        </p>
      </div>
    </div>
  );
};

const TitleDescription = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-[0.9rem] md:text-[1rem] font-semibold text-neutral-900 hover:underline">
        {title}
      </h3>
      <p className="text-[0.8rem] md:text-[0.9rem] text-neutral-700 text-pretty">
        {description}
      </p>
    </div>
  );
};
