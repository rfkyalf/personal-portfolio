import { dataSkills } from '@/lib/data/dataSkills';
import { NextResponse } from 'next/server';

const skills = dataSkills;

export async function GET() {
  const total_item = skills.length;

  try {
    return NextResponse.json({
      message: 'Success',
      status: 200,
      total_item,
      data: skills,
    });
  } catch (error) {
    return NextResponse.json({
      message: 'Internal server error',
      status: 500,
      data: error,
    });
  }
}
