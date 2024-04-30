import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
import { IProduct } from '@/types/globalTypes';

interface Props extends IProduct {}

export default function ItemList({ title, price, image }: Props) {
  return (
    <>
      <Suspense fallback={<SkeletonLoading />}>
        <a href="#" className="flex justify-center h-96">
          <img
            src={`${image}`}
            alt="product image"
            className="max-w-56 max-h-72"
          />
        </a>
        <p className="text-lg text-center truncate max-w-96 mb-4">{title}</p>
        <p className="text-center">{'$ ' + Math.round(price)}</p>
      </Suspense>
    </>
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
