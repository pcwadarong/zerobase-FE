import { IProduct } from '@/types/globalTypes';
import SkeletonUi from './SkeletonUi';
import { getSortedData } from '@/utils/getSortedData';
import SortSelect from '../ui/SortSelect';
import { useState, useCallback, useEffect } from 'react';
import ListItem from './ListItem';
import { useRecoilValue } from 'recoil';
import { isLoadingState } from '@/types/Recoil';

interface Props {
  index: string;
  data: IProduct[];
  setData: (value: IProduct[]) => void;
}

export default function ProductsSpecial({ index, data, setData }: Props) {
  const isLoading = useRecoilValue(isLoadingState);
  const [total, setTotal] = useState(0);
  const [sortType, setSortType] = useState('id');
  const [filteredData, setFilteredData] = useState<IProduct[]>([]);

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
    const filteredData = filterProducts(index, data);
    setFilteredData(filteredData);
    setTotal(filteredData.length);
  }, [index, data, filterProducts]);

  const onChangeSortType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortType(e.target.value);
    const sortedData = getSortedData(data, sortType);
    setData(sortedData);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold p-20 text-center">
        {index === 'new' ? 'NEW PRODUCTS' : 'BEST PRODUCTS'}
      </h1>
      <div className="flex justify-between items-center px-4 pb-2">
        {isLoading ? `Counting..` : `Total: ${total} items`}
        <SortSelect onChangeSortType={onChangeSortType} />
      </div>
      {isLoading ? (
        <SkeletonUi />
      ) : (
        <div className="flex flex-wrap space-around overflow-hidden">
          {filteredData.map((product) => (
            <div
              key={product.id}
              className="flex flex-col grow border-slate-400 border-[1px] items-center md:w-1/2 lg:w-1/3  p-12"
            >
              <ListItem {...product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
