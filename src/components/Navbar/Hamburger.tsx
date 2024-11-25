export default function Hamburger({ onclick }: { onclick: () => void }) {
  return (
    <button onClick={onclick} className="flex md:hidden flex-col gap-y-1">
      <span className="w-[20px] h-[2px] bg-neutral-900 rounded-md"></span>
      <span className="w-[20px] h-[2px] bg-neutral-900 rounded-md"></span>
      <span className="w-[20px] h-[2px] bg-neutral-900 rounded-md"></span>
    </button>
  );
}
