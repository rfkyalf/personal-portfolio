import { dataArticles } from '@/lib/data/dataArticles';
import { NextRequest, NextResponse } from 'next/server';

const articles = dataArticles;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query')?.toLowerCase() || '';

  try {
    const filteredArticles = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query)
    );

    return NextResponse.json({
      message: 'Success',
      status: 200,
      query: query,
      total_item: filteredArticles.length,
      data: filteredArticles,
    });
  } catch (error) {
    return NextResponse.json({
      message: 'Internal server error',
      status: 500,
      data: error,
    });
  }
}
