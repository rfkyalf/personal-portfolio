import { dataCertificates } from '@/lib/data/dataCertificates';
import { NextResponse } from 'next/server';

const certificates = dataCertificates;

export async function GET() {
  const total_item = certificates.length;

  try {
    return NextResponse.json({
      message: 'Success',
      status: 200,
      total_item,
      data: certificates,
    });
  } catch (error) {
    return NextResponse.json({
      message: 'Internal server error',
      status: 500,
      data: error,
    });
  }
}
