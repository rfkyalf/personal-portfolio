'use client';

import { useRouter } from 'next-nprogress-bar';
import Icon from './Icon';

export default function BackButton() {
  const router = useRouter();

  const routerBack = () => {
    router.back();
  };

  return (
    <button onClick={routerBack} className="flex items-center gap-x-2">
      <Icon icon="arrow-left" style="size-4 md:size-5 text-neutral-800" />
      <span className="text-[0.9rem] md:text-[1rem] text-neutral-800">
        Back
      </span>
    </button>
  );
}
