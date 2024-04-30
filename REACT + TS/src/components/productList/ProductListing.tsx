import CategoryList from './CategoryList';
import ItemList from './ListItem';
import LoadingIndicator from '@/components/ui/LoadingIndicator';

import { useState, useEffect, Suspense, useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { useSearchParams } from 'react-router-dom';

import { getProductsList } from '@/utils/getProducts';
import { getCateProductUrl } from '@/utils/getProducts';
import { IProduct } from '@/types/globalTypes';


export default function ProductListing() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredList, setFilteredList] = useState<IProduct[]>([]);
  const productList = useRecoilValue(getProductsList);

  const filterProducts = useCallback(
    (category: string) => {
      const filteredData = productList.filter((item) => {
        const filter = getCateProductUrl(category.toLowerCase());
        return filter === 'default' || item.category === filter;
      });
      setFilteredList(filteredData);
      setSearchParams({ sort: category });
    },
    [productList, setSearchParams],
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
    <Suspense fallback={<LoadingIndicator />}>
      <div className="flex flex-col p-20 gap-5 items-center">
        <h2 className="text-lg font-bold tracking-wider">CATEGORY</h2>
        <CategoryList
          selectedCategory={selectedCategory}
          onChange={handleChangeCategory}
        />
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
