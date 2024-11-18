import { dataProjects } from '@/lib/data/dataProjects';
import { NextResponse } from 'next/server';

const projects = dataProjects;

export async function GET() {
  const total_item = projects.length;

  try {
    return NextResponse.json({
      message: 'Success',
      status: 200,
      total_item,
      data: projects,
    });
  } catch (error) {
    return NextResponse.json({
      message: 'Internal server error',
      status: 500,
      data: error,
    });
  }
}
