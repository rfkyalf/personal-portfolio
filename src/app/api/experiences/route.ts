import { dataExperiences } from '@/lib/data/dataExperiences';
import { NextResponse } from 'next/server';

const experiences = dataExperiences;

export async function GET() {
  const total_item = experiences.length;

  try {
    return NextResponse.json({
      message: 'Success',
      status: 200,
      total_item,
      data: experiences,
    });
  } catch (error) {
    return NextResponse.json({
      message: 'Internal server error',
      status: 500,
      data: error,
    });
  }
}
