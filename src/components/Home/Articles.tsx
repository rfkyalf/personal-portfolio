import { getArticles } from '@/lib/actions';
import { SectionTitle, SectionWrapper } from '../SectionComps';
import ArticleGrid from '../ArticleGrid';
import ViewMoreButton from '../ViewMoreButton';

export default async function Articles() {
  const articles = await getArticles('');

  return (
    <SectionWrapper>
      <SectionTitle title="Articles" />
      <ArticleGrid articles={articles} isSliced />
      <ViewMoreButton href="/articles" />
    </SectionWrapper>
  );
}
