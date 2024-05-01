import ItemList from './ListItem';
import SkeletonUi from './SkeletonUi';

import { useState, useEffect, useCallback } from 'react';
import { useRecoilValueLoadable, useRecoilState } from 'recoil';

import { getProductsList } from '@/utils/getProducts';
import { IProduct } from '@/types/globalTypes';
import { isLoadingState } from '@/types/Recoil';
import SortingSelect from '../common/sorting';

interface SpecialListingProps {
  index: string;
}

export default function SpecialListing({ index }: SpecialListingProps) {
  const [data, setData] = useState<IProduct[]>([]);
  const [isLoading, setLoading] = useRecoilState(isLoadingState);
  const productsListLoadable = useRecoilValueLoadable(getProductsList);
  const [total, setTotal] = useState(0);

  const filterProducts = useCallback(
    (index: string) => {
      if (productsListLoadable.state === 'hasValue') {
        if (index === 'new') {
          return productsListLoadable.contents.filter((item) => item.id >= 10);
        } else {
          return productsListLoadable.contents.filter(
            (item) => item.rating.rate && item.rating.rate >= 4.0,
          );
        }
      }
      return [];
    },
    [productsListLoadable],
  );

  useEffect(() => {
    if (productsListLoadable.state === 'hasValue') {
      const filteredData = filterProducts(index);
      setData(filteredData);
      setTotal(filteredData.length);
      setLoading(false);
    } else if (productsListLoadable.state === 'loading') {
      setLoading(true);
    }
  }, [productsListLoadable, setLoading, filterProducts, index]);

  return (
    <div>
      <div className="flex justify-between items-center px-4 pb-2">
        {isLoading ? `Counting..` : `Total: ${total} items`}
        <SortingSelect />
      </div>
      {isLoading ? (
        <SkeletonUi />
      ) : (
        <div className="flex flex-wrap space-around overflow-hidden">
          {data.map((product) => (
            <div
              key={product.id}
              className={`flex flex-col grow border-slate-400 border-[1px] items-center md:w-1/2 lg:w-1/3  p-12`}
            >
              <ItemList {...product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
