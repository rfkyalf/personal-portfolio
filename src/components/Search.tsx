'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import Icon from './Icon';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term.trim()) {
      params.set('query', term.trim());
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <div className="relative">
      <Icon
        icon="search"
        style="absolute size-5 top-1/2 left-3 -translate-y-1/2 text-neutral-400"
      />
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
        className="w-full bg-neutral-50 border border-neutral-300 rounded-md pl-10 py-1 text-[0.9rem] md:text-[1rem] placeholder:text-neutral-400 text-neutral-800"
      />
    </div>
  );
}
