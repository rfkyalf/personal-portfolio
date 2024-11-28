import { SectionTitle, SectionWrapper } from '../SectionComps';
import ArticleGrid from './ArticleSection/ArticleGrid';

export default function Articles() {
  return (
    <SectionWrapper>
      <SectionTitle title="Articles" />
      <ArticleGrid />
    </SectionWrapper>
  );
}
