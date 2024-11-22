import { CertificatesProps } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

export default function CertificatesGrid({
  certificates,
  slice_item,
}: {
  certificates: { data: CertificatesProps[] };
  slice_item?: number;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
      {certificates?.data.length === 0 ? (
        <p className="text-[0.9rem] md:text-[1rem] text-neutral-500">
          No results found. Please check your spelling...
        </p>
      ) : (
        certificates?.data
          .slice(0, slice_item ?? certificates.data.length)
          .map((cert: CertificatesProps) => (
            <Link
              href={cert.url}
              target="_blank"
              key={cert.id}
              className="flex flex-col justify-between border border-neutral-300 shadow rounded-lg p-2 md:p-4 hover:scale-95 transition duration-300"
            >
              <div className="flex flex-wrap items-center gap-2">
                {cert.skills.map((skill) => {
                  return (
                    <span
                      key={skill.id}
                      className="w-fit text-[0.7rem] text-neutral-100 border rounded-full px-2"
                      style={{
                        backgroundColor: skill.bg_color,
                        borderColor: skill.border_color,
                      }}
                    >
                      {skill.name}
                    </span>
                  );
                })}
              </div>
              <h2 className="text-[0.9rem] md:text-[1rem] font-semibold text-neutral-900 mt-2">
                {cert.title}
              </h2>
              <p className="text-[0.7rem] md:text-[0.8rem] text-neutral-500">
                {cert.company}
              </p>
              <Image
                src={cert.image}
                alt={cert.title}
                title={cert.title}
                width={100}
                height={100}
                priority
                className="w-full h-[200px] md:h-[220px] object-cover rounded-md mt-2"
              />
              <p className="self-end text-[0.8rem] md:text-[0.9rem] text-neutral-900 mt-2 md:mt-3 lg:mt-4">
                {cert.date}
              </p>
            </Link>
          ))
      )}
    </div>
  );
}
