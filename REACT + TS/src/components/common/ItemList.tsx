import { Skeleton } from '@/components/ui/skeleton';

export default function ItemList() {
  return (
    <div className="flex flex-col gap-3 justify-center">
      <Skeleton className="h-96" />
      <Skeleton className="h-6" />
      <Skeleton className="h-6 w-1/2" />
    </div>
  );
}
