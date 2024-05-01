import { Skeleton } from '@/components/ui/skeleton';
import { useState, useEffect } from 'react';

export default function SkeletonUi() {
  const [itemsCount, setItemsCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsCount(1);
      else if (window.innerWidth < 1024) setItemsCount(2);
      else setItemsCount(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const safeItemsCount = Math.max(itemsCount, 1);

  const skeletonItems = new Array(safeItemsCount).fill(null).map((_, index) => (
    <div key={index} className="flex flex-col gap-3 shrink w-full">
      <Skeleton className="h-80" />
      <Skeleton className="h-6" />
      <Skeleton className="h-6 w-1/2" />
    </div>
  ));

  return (
    <div className="flex space-around gap-8 overflow-hidden p-20">
      {skeletonItems}
    </div>
  );
}
