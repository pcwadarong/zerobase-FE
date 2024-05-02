import CategoryList from './CategoryList';
import ItemList from './ListItem';
import SkeletonUi from './SkeletonUi';
import SortSelect from '../ui/SortSelect';

import { useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { IProduct } from '@/types/globalTypes';
import { isLoadingState } from '@/types/Recoil';
import { getSortedData } from '@/utils/getSortedData';
import { getCateProductUrl } from '@/utils/getProducts';

interface Props {
  data: IProduct[];
  setData: (value: IProduct[]) => void;
}

export default function ProductsByCategory({ data, setData }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categoryList, setCategoryList] = useState<IProduct[]>([]);
  const isLoading = useRecoilValue(isLoadingState);
  const [total, setTotal] = useState(0);
  const [sortType, setSortType] = useState('id');

  const filterProductsByCategory = useCallback(
    (category: string) => {
      const filteredData = data.filter((item) => {
        const filter = getCateProductUrl(category.toLowerCase());
        return filter === 'default' || item.category === filter;
      });
      setCategoryList(filteredData);
      setSearchParams({ sort: category });
      setTotal(filteredData.length);
    },
    [data, setSearchParams],
  );

  useEffect(() => {
    const category = searchParams.get('sort') || 'all';
    setSelectedCategory(category);
    filterProductsByCategory(category);
  }, [searchParams, filterProductsByCategory]);

  const handleChangeCategory = (category: string) => {
    setSelectedCategory(category);
    filterProductsByCategory(category);
  };

  const onChangeSortType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortType(e.target.value);
    const sortedData = getSortedData(data, sortType);
    setData(sortedData);
  };

  return (
    <div>
      <div className="flex flex-col p-20 gap-5 items-center">
        <h2 className="text-lg font-bold tracking-wider">CATEGORY</h2>
        <CategoryList
          selectedCategory={selectedCategory}
          onChange={handleChangeCategory}
        />
      </div>
      <div className="flex justify-between items-center px-4 pb-2">
        {isLoading ? `Counting..` : `Total: ${total} items`}
        <SortSelect onChangeSortType={onChangeSortType} />
      </div>
      {isLoading ? (
        <SkeletonUi />
      ) : (
        <div className="flex flex-wrap space-around overflow-hidden">
          {categoryList.map((product) => (
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
