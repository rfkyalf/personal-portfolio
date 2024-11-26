import Image from 'next/image';

export default function Icon({ icon, style }: { icon: string; style: string }) {
  return (
    <Image
      src={`/icons/${icon}.svg`}
      alt={icon}
      width={100}
      height={100}
      className={style}
    />
  );
}
