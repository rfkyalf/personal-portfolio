import ArticleGrid from '@/components/Home/ArticleSection/ArticleGrid';
import Search from '@/components/Search';
import { getArticles } from '@/lib/actions';

export default async function ArticlesPage() {
  const articles = await getArticles('');

  return (
    <main className="w-[90%] md:w-[650px] lg:w-[850px] xl:w-[1050px] min-h-screen mx-auto flex flex-col pt-[80px] md:pt-[85px] lg:pt-[90px]">
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-[1.5rem] md:text-[1.6rem] lg:text-[1.7rem] font-bold text-neutral-950">
          Articles
        </h1>
        <Search placeholder="Search articles..." />
      </div>
      <div className="py-2 md:py-4">
        <ArticleGrid articles={articles} />
      </div>
    </main>
  );
}