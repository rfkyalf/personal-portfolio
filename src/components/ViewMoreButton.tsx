import Link from 'next/link';
import Icon from './Icon';

export default function ViewMoreButton({
  href,
  label = 'View More',
}: {
  href: string;
  label?: string;
}) {
  return (
    <Link
      href={href}
      className="text-[0.9rem] md:text-[1rem] text-neutral-900 font-semibold flex items-center justify-center gap-x-1"
    >
      {label}
      <Icon icon="chevrons-right" style="size-4 text-neutral-900" />
    </Link>
  );
}
