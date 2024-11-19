import { dataSummary } from '@/lib/data/dataSummary';
import { NextResponse } from 'next/server';

const summary = dataSummary;

export async function GET() {
  try {
    return NextResponse.json({
      message: 'Success',
      status: 200,
      data: summary,
    });
  } catch (error) {
    return NextResponse.json({
      message: 'Internal server error',
      status: 500,
      data: error,
    });
  }
}
