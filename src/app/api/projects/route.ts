import { dataProjects } from '@/lib/data/dataProjects';
import { NextRequest, NextResponse } from 'next/server';

const projects = dataProjects;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query')?.toLowerCase() || '';

  try {
    const filteredProjects = projects.filter((project) => {
      return project.title.toLowerCase().includes(query);
    });

    return NextResponse.json({
      message: 'Success',
      status: 200,
      total_item: filteredProjects.length,
      data: filteredProjects,
    });
  } catch (error) {
    return NextResponse.json({
      message: 'Internal server error',
      status: 500,
      data: error,
    });
  }
}
