import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
import { IProduct } from '../store/products';

interface Props extends IProduct {}

export default function ItemList({ id }: Props) {
  return (
    <div className="flex flex-col gap-3 justify-center">
      <Suspense fallback={<SkeletonLoading />}>{id}</Suspense>
    </div>
  );
}

function SkeletonLoading() {
  return (
    <>
      <Skeleton className="h-96" />
      <Skeleton className="h-6" />
      <Skeleton className="h-6 w-1/2" />
    </>
  );
}