import { useEffect, useState } from 'react';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { getProductsList } from '@/utils/getProducts';
import ItemList from '../productList/ListItem';
import SkeletonUi from '../productList/SkeletonUi';
import { IProduct } from '@/types/globalTypes';
import SearchImg from '../../assets/search.svg';
import { Input } from '@/components/ui/input';
import { searchState } from '@/types/Recoil';

const AllProducts = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const productsListLoadable = useRecoilValueLoadable(getProductsList);
  const initialSearchValue = useRecoilValue(searchState);
  const [search, setSearch] = useState(initialSearchValue);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === '') {
      return data;
    } else {
      return data.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      });
    }
  };

  useEffect(() => {
    if (productsListLoadable.state === 'hasValue') {
      setData(productsListLoadable.contents);
    }
  }, [productsListLoadable]);

  useEffect(() => {
    setSearch(initialSearchValue);
  }, [initialSearchValue]);

  const searchedItems = getFilteredData();

  return (
    <div>
      <div
        className="max-w-sm md:max-w-xl flex items-center relative"
        style={{ margin: '80px auto' }}
      >
        <div className="w-7 absolute left-3 fill-gray-500 dark:fill-white">
          <SearchImg />
        </div>
        <Input
          type="text"
          placeholder="Search Products..."
          onChange={onChangeSearch}
          value={search}
          className="pl-12 dark:border-2 dark:border-white"
        />
      </div>
      {productsListLoadable.state === 'loading' ? (
        <SkeletonUi />
      ) : (
        <div className="flex flex-wrap space-around overflow-hidden">
          {searchedItems.map((product) => (
            <div
              key={product.id}
              className="flex flex-col grow border-slate-400 border-[1px] items-center md:w-1/2 lg:w-1/3 p-12"
            >
              <ItemList {...product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProducts;
