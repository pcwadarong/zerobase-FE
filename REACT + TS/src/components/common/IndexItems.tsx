import ListItem from '../productList/ListItem';
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
        let filteredData = [];
        if (title === `New In`) {
          filteredData = productsListLoadable.contents
            .filter((item) => item.id > 16)
            .slice(-4);
        } else {
          filteredData = productsListLoadable.contents
            .filter((item) => item.rating.rate && item.rating.rate >= 4.6)
            .slice(-4);
        }
        return filteredData;
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
    <div className="py-20 w-full md:w-11/12 lg:w-9/12">
      <h2 className="text-xl font-extra pl-10 pb-10">{title}</h2>
      {isLoading ? (
        <SkeletonUi />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {data.map((product) => (
            <div key={product.id} className="flex justify-center">
              <div className="flex flex-col border-[1px] items-center h-[30rem] py-8 grow">
                <ListItem {...product} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
