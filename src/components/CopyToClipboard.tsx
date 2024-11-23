'use client';

import useClipboard from '@/hooks/useClipboard';
import { LuCopy, LuCopyCheck } from 'react-icons/lu';

export default function CopyToClipboard({ text }: { text: string }) {
  const [copied, handleCopy] = useClipboard();

  const copy = () => handleCopy(text);

  return (
    <button
      onClick={copy}
      className="hover:scale-105 transition duration-100 relative"
    >
      {copied ? (
        <>
          <LuCopyCheck className="size-4 md:size-5 flex-shrink-0 text-green-700" />
          <span className="absolute left-[-60px] top-1/2 translate-y-[-50%] bg-neutral-500 text-[0.7rem] text-neutral-50 px-2 md:py-1 rounded-sm">
            Copied
          </span>
        </>
      ) : (
        <LuCopy className="size-4 md:size-5 flex-shrink-0 text-neutral-700" />
      )}
    </button>
  );
}
