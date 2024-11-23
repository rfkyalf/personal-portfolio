import { dataGetInTouch } from '@/lib/data/dataGetInTouch';
import { NextResponse } from 'next/server';

const getInTouch = dataGetInTouch;

export async function GET() {
  try {
    return NextResponse.json({
      message: 'Success',
      status: 200,
      data: getInTouch,
    });
  } catch (error) {
    return NextResponse.json({
      message: 'Internal server error',
      status: 500,
      data: error,
    });
  }
}
