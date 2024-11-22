import { getCertificates } from '@/lib/actions';
import { SectionTitle, SectionWrapper } from '../components/SectionComps';
import CertificatesGrid from './CertificatesGrid';
import ViewMoreButton from './ViewMoreButton';

export default async function Certificates() {
  const certificates = await getCertificates('');

  return (
    <SectionWrapper>
      <SectionTitle title="Certificates" />
      <CertificatesGrid certificates={certificates} slice_item={3} />
      <ViewMoreButton href="/certificates" />
    </SectionWrapper>
  );
}
