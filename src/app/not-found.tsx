import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="w-[90%] md:w-[650px] lg:w-[850px] xl:w-[1050px] min-h-screen mx-auto flex flex-col items-center justify-center">
      <h2 className="text-[6rem] text-neutral-950 font-bold text-center">
        Oops!
      </h2>
      <p className="text-[1.5rem] text-neutral-800 text-center">
        it seems this page doesn&apos;t exist. Let&apos;s find our way back!
      </p>
      <Link
        href="/"
        className="bg-neutral-950 hover:bg-neutral-800 px-8 py-1 rounded-md text-neutral-50 mt-8"
      >
        Home
      </Link>
    </div>
  );
}
