import { useEffect, useState } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { getProductsList } from '@/utils/getProducts';
import ItemList from '../productList/ListItem';
import SkeletonUi from '../productList/SkeletonUi';
import { IProduct } from '@/types/globalTypes';

const AllProducts = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const productsListLoadable = useRecoilValueLoadable(getProductsList);

  useEffect(() => {
    if (productsListLoadable.state === 'hasValue') {
      setData(productsListLoadable.contents);
    }
  }, [productsListLoadable]);

  return (
    <>
      {productsListLoadable.state === 'loading' ? (
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
    </>
  );
};

export default AllProducts;
