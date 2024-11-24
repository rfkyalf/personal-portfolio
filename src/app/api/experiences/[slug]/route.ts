import { dataExperiences } from '@/lib/data/dataExperiences';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = await params;

  try {
    const experience = dataExperiences.find(
      (experience) => experience.slug === slug.slug
    );

    if (!experience) {
      return NextResponse.json({
        message: 'Project not found',
        status: 404,
      });
    }

    return NextResponse.json({
      message: 'Success',
      status: 200,
      data: experience,
    });
  } catch (error) {
    return NextResponse.json({
      message: 'Internal server error',
      status: 500,
      data: error,
    });
  }
}
