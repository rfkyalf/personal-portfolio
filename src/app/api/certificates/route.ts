import { dataCertificates } from '@/lib/data/dataCertificates';
import { NextRequest, NextResponse } from 'next/server';

const certificates = dataCertificates;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query')?.toLowerCase() || '';

  try {
    const filteredCertificates = certificates.filter(
      (certificate) =>
        certificate.title.toLowerCase().includes(query) ||
        certificate.company.toLowerCase().includes(query)
    );
    return NextResponse.json({
      message: 'Success',
      status: 200,
      query: query,
      total_item: filteredCertificates.length,
      data: filteredCertificates,
    });
  } catch (error) {
    return NextResponse.json({
      message: 'Internal server error',
      status: 500,
      data: error,
    });
  }
}
