import { useState, useEffect, useCallback } from 'react';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { getProductsList } from '@/utils/getProducts';
import { IProduct } from '@/types/globalTypes';
import { isLoadingState } from '@/types/Recoil';
import ItemList from './ListItem';
import SkeletonUi from './SkeletonUi';

interface SpecialListingProps {
  index: string;
}

export default function SpecialListing({ index }: SpecialListingProps) {
  const [isLoading, setLoading] = useRecoilState(isLoadingState);
  const productsListLoadable = useRecoilValueLoadable(getProductsList);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState<IProduct[]>([]);
  const [sortType, setSortType] = useState('id');

  const filterProducts = useCallback((index: string, products: IProduct[]) => {
    if (index === 'new') {
      return products.filter((item) => item.id >= 10);
    } else {
      return products.filter(
        (item) => item.rating.rate && item.rating.rate >= 4.0,
      );
    }
  }, []);

  useEffect(() => {
    if (productsListLoadable.state === 'hasValue') {
      const filteredData = filterProducts(index, productsListLoadable.contents);
      setData(filteredData);
      setTotal(filteredData.length);
      setLoading(false);
    } else if (productsListLoadable.state === 'loading') {
      setLoading(true);
    }
  }, [productsListLoadable, setLoading, filterProducts, index]);

  const onChangeSortType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortType(e.target.value);
    const sortedData = getSortedData(data, sortType);
    setData(sortedData);
  };

  const getSortedData = (data: IProduct[], sortType: string) => {
    return [...data].sort((a, b) => {
      if (sortType === 'Recommendations') {
        return (b.rating.rate || 0) - (a.rating.rate || 0);
      } else if (sortType === 'New Item') {
        return b.id - a.id;
      } else if (sortType === 'Price ascending') {
        return a.price - b.price;
      } else if (sortType === 'Price descending') {
        return b.price - a.price;
      } else {
        return 0;
      }
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center px-4 pb-2">
        {isLoading ? `Counting..` : `Total: ${total} items`}
        <select className="dark:bg-gray-900" onChange={onChangeSortType}>
          <option className="option" value="Recommendations">
            Recommendations
          </option>
          <option value="New Item">New Item</option>
          <option value="Price ascending">Price ascending</option>
          <option value="Price descending">Price descending</option>
        </select>
      </div>
      {isLoading ? (
        <SkeletonUi />
      ) : (
        <div className="flex flex-wrap space-around overflow-hidden">
          {data.map((product) => (
            <div
              key={product.id}
              className="flex flex-col grow border-slate-400 border-[1px] items-center md:w-1/2 lg:w-1/3  p-12"
            >
              <ItemList {...product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
