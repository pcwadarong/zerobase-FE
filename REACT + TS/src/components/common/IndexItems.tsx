import ItemList from '../productList/ListItem';
import SkeletonUi from '../productList/SkeletonUi';

import { useState, useEffect, useCallback } from 'react';
import { useRecoilValueLoadable, useRecoilState } from 'recoil';

import { getProductsList } from '@/utils/getProducts';
import { IProduct } from '@/types/globalTypes';
import { isLoadingState } from '@/types/Recoil';

interface IndexSort {
  title: string;
}

export default function IndexItems({ title }: IndexSort) {
  const [data, setData] = useState<IProduct[]>([]);
  const [isLoading, setLoading] = useRecoilState(isLoadingState);
  const productsListLoadable = useRecoilValueLoadable(getProductsList);

  const filterProducts = useCallback(
    (title: string) => {
      if (productsListLoadable.state === 'hasValue') {
        if (title === `New In`) {
          return productsListLoadable.contents.filter((item) => item.id > 16);
        } else {
          return productsListLoadable.contents.filter(
            (item) => item.rating.rate && item.rating.rate >= 4.7,
          );
        }
      }
      return [];
    },
    [productsListLoadable],
  );

  useEffect(() => {
    if (productsListLoadable.state === 'hasValue') {
      const filteredData = filterProducts(title);
      setData(filteredData);
      setLoading(false);
    } else if (productsListLoadable.state === 'loading') {
      setLoading(true);
    }
  }, [productsListLoadable, setLoading, filterProducts, title]);

  return (
    <div className="p-20 flex flex-col gap-10 justify-center">
      <h2 className="text-xl font-extra">{title}</h2>
      {isLoading ? (
        <SkeletonUi />
      ) : (
        <div className="flex gap-6 flex-nowrap space-between overflow-auto">
          {data.map((product) => (
            <div
              key={product.id}
              className={`flex flex-col border-[1px] items-center w-96 py-8 px-32`}
            >
              <ItemList {...product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
