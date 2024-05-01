import CategoryList from './CategoryList';
import ItemList from './ListItem';
import SkeletonUi from './SkeletonUi';

import { useState, useEffect, useCallback } from 'react';
import { useRecoilValueLoadable, useRecoilState } from 'recoil';
import { useSearchParams } from 'react-router-dom';

import { getProductsList } from '@/utils/getProducts';
import { getCateProductUrl } from '@/utils/getProducts';
import { IProduct } from '@/types/globalTypes';
import { isLoadingState } from '@/types/Recoil';
import SortingSelect from '../common/sorting';

export default function ProductListing() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [data, setData] = useState<IProduct[]>([]);
  const [filteredList, setFilteredList] = useState<IProduct[]>([]);
  const [isLoading, setLoading] = useRecoilState(isLoadingState);
  const productsListLoadable = useRecoilValueLoadable(getProductsList);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (productsListLoadable.state === 'hasValue') {
      setData(productsListLoadable.contents);
      setLoading(false);
    } else if (productsListLoadable.state === 'loading') {
      setLoading(true);
    }
  }, [productsListLoadable, setLoading]);

  const filterProducts = useCallback(
    (category: string) => {
      if (productsListLoadable.state === 'hasValue') {
        const filteredData = data.filter((item) => {
          const filter = getCateProductUrl(category.toLowerCase());
          return filter === 'default' || item.category === filter;
        });
        setFilteredList(filteredData);
        setSearchParams({ sort: category });
        setTotal(filteredData.length);
      }
    },
    [productsListLoadable, data, setSearchParams],
  );

  useEffect(() => {
    const category = searchParams.get('sort') || 'all';
    setSelectedCategory(category);
    filterProducts(category);
  }, [searchParams, filterProducts]);

  const handleChangeCategory = (category: string) => {
    setSelectedCategory(category);
    filterProducts(category);
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
        <SortingSelect />
      </div>
      {isLoading ? (
        <SkeletonUi />
      ) : (
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
      )}
    </div>
  );
}
