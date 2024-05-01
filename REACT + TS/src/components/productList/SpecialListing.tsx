import ItemList from './ListItem';
import { getProductsList } from '@/utils/getProducts';
import { useRecoilValue } from 'recoil';
import LoadingIndicator from '@/components/ui/LoadingIndicator';
import { useState, useEffect, Suspense, useCallback } from 'react';
import { IProduct } from '@/types/globalTypes';
import SortingSelect from '../common/sorting';

interface SpecialListingProps {
  index: string;
}

export default function SpecialListing({ index }: SpecialListingProps) {
  const productList = useRecoilValue(getProductsList);
  const [filteredList, setFilteredList] = useState<IProduct[]>([]);

  const filterProducts = useCallback(
    (index: string) => {
      if (index === 'new') {
        return productList.filter((item) => item.id >= 10);
      } else {
        return productList.filter(
          (item) => item.rating.rate && item.rating.rate >= 3.5,
        );
      }
    },
    [productList],
  );

  useEffect(() => {
    setFilteredList(filterProducts(index));
  }, [filterProducts, index]);

  const total = filteredList.length;

  return (
    <Suspense fallback={<LoadingIndicator />}>
      <div className='flex justify-between items-center px-4 pb-2'>
        {`Total: ${total} items`}
        <SortingSelect />
        </div>
      <div className="flex flex-wrap space-around overflow-hidden">
        {filteredList.map((product) => (
          <div
            key={product.id}
            className={`flex flex-col grow border-slate-400 border-[1px] items-center md:w-1/2 lg:w-1/3  p-12`}
          >
            <ItemList {...product} />
          </div>
        ))}
      </div>
    </Suspense>
  );
}