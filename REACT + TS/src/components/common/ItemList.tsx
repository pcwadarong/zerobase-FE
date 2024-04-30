import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';

export default function ItemList() {
  const isLoading = true;
  
  return (
    <Suspense fallback={<SkeletonLoading />}>
      <div className="flex flex-col gap-3 justify-center">
        
      </div>
    </Suspense>
  );
}

function SkeletonLoading() {
  return (
    <div className="flex flex-col gap-3 justify-center">
      <Skeleton className="h-96" />
      <Skeleton className="h-6" />
      <Skeleton className="h-6 w-1/2" />
    </div>
  );
}