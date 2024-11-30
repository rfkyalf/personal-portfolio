import { getArticles } from '@/lib/actions';
import { SectionTitle, SectionWrapper } from '../SectionComps';
import ArticleGrid from '../ArticleGrid';

export default async function Articles() {
  const articles = await getArticles('');

  return (
    <SectionWrapper>
      <SectionTitle title="Articles" />
      <ArticleGrid articles={articles} />
    </SectionWrapper>
  );
}
