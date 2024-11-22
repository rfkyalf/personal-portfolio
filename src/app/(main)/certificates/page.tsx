import CertificatesGrid from '@/components/CertificatesGrid';
import Search from '@/components/Search';
import { getCertificates } from '@/lib/actions';

export default async function CertificatesPage(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const certificates = await getCertificates(query);

  return (
    <main className="w-[95%] md:w-[650px] lg:w-[850px] xl:w-[1050px] min-h-screen mx-auto flex flex-col pt-[80px] md:pt-[85px] lg:pt-[90px]">
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-[1.5rem] md:text-[1.6rem] lg:text-[1.7rem] font-bold text-neutral-950">
          Certificates
        </h1>
        <Search placeholder="Search certificates..." />
      </div>
      <div className="py-2 md:py-4">
        <CertificatesGrid certificates={certificates} />
      </div>
    </main>
  );
}
