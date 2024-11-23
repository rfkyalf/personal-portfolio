import { dataProjects } from '@/lib/data/dataProjects';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  try {
    const project = dataProjects.find((project) => project.slug === slug);

    if (!project) {
      return NextResponse.json({
        message: 'Project not found',
        status: 404,
      });
    }

    return NextResponse.json({
      message: 'Success',
      status: 200,
      data: project,
    });
  } catch (error) {
    return NextResponse.json({
      message: 'Internal server error',
      status: 500,
      data: error,
    });
  }
}
