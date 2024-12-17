import Icon from '@/components/Icon';

export default function loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center animate-spin">
      <Icon icon="spinner" style="size-10" />
    </div>
  );
}
