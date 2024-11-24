import { getCertificates } from '@/lib/actions';
import { SectionTitle, SectionWrapper } from '../SectionComps';
import CertificatesGrid from '../CertificatesGrid';
import ViewMoreButton from '../ViewMoreButton';
import { MotionElement } from '@/lib/framer';

export default async function Certificates() {
  const certificates = await getCertificates('');

  return (
    <MotionElement
      as="section"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <SectionWrapper>
        <SectionTitle title="Certificates" />
        <CertificatesGrid certificates={certificates} slice_item={3} />
        <ViewMoreButton href="/certificates" />
      </SectionWrapper>
    </MotionElement>
  );
}
