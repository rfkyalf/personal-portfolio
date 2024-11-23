import Link from 'next/link';
import CopyToClipboard from '../CopyToClipboard';
import { TitleProject } from './ProjectComps';

export default function Usage({
  localhost,
  sourceCode,
}: {
  localhost: string;
  sourceCode: string;
}) {
  if (!sourceCode) return '';

  return (
    <div className="flex flex-col">
      <TitleProject title="Usage" />
      <div className="flex flex-col gap-y-1 md:gap-y-2 mt-1 md:mt-2">
        <div className="flex flex-col gap-y-1 md:gap-y-2 px-2 md:px-4">
          <p className="text-[0.9rem] md:text-[1rem] text-neutral-700">
            1. Start the development server:
          </p>
          <div className="bg-neutral-300 p-2 md:p-4 flex items-center justify-between gap-x-2 rounded-md">
            <code className="text-[0.9rem] md:text-[1rem] text-neutral-700 overflow-x-auto whitespace-nowrap">
              npm run dev
            </code>
            <CopyToClipboard text={'npm run dev'} />
          </div>
        </div>
        <p className="text-[0.9rem] md:text-[1rem] text-neutral-700 px-2 md:px-4">
          2. Access the application in your browser at&nbsp;
          <Link href={localhost} className="hover:underline">
            {localhost}
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
