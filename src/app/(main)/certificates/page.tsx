import CertificatesGrid from '@/components/CertificatesGrid';
import Search from '@/components/Search';
import { getCertificates } from '@/lib/actions';
import { MotionElement } from '@/lib/framer';

export const metadata = {
  title: 'Certificates',
  description:
    'A collection of my certifications that reflect my commitment to continuous learning and professional development.',
  openGraph: {
    description:
      'A collection of my certifications that reflect my commitment to continuous learning and professional development.',
  },
};

export default async function CertificatesPage(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const certificates = await getCertificates(query);

  return (
    <main className="w-[90%] md:w-[650px] lg:w-[850px] xl:w-[1050px] min-h-screen mx-auto flex flex-col pt-[80px] md:pt-[85px] lg:pt-[90px]">
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-[1.5rem] md:text-[1.6rem] lg:text-[1.7rem] font-bold text-neutral-950">
          Certificates
        </h1>
        <Search placeholder="Search certificates..." />
      </div>
      <MotionElement
        as="div"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-2 md:py-4"
      >
        <CertificatesGrid certificates={certificates} />
      </MotionElement>
    </main>
  );
}
