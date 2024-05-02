import { useEffect, useState } from 'react';
import { useSetRecoilState, useRecoilValueLoadable } from 'recoil';
import { getProductsList } from '@/utils/getProducts';
import { IProduct } from '@/types/globalTypes';
import { isLoadingState } from '@/types/Recoil';
import ProductsByCategory from './ProductsByCategory';
import ProductsSpecial from './ProductsSpecial';

interface Props {
  index: string;
}
export default function LoadProducts({ index }: Props) {
  const setLoading = useSetRecoilState(isLoadingState);
  const productsListLoadable = useRecoilValueLoadable(getProductsList);
  const [data, setData] = useState<IProduct[]>([]);

  useEffect(() => {
    if (productsListLoadable.state === 'hasValue') {
      setData(productsListLoadable.contents);
      setLoading(false);
    } else if (productsListLoadable.state === 'loading') {
      setLoading(true);
    }
  }, [productsListLoadable, setLoading]);

  return (
    <div>
      {index === 'category' ? (
        <ProductsByCategory data={data} setData={setData}/>
      ) : (
        <ProductsSpecial index={index} data={data} setData={setData}/>
      )}
    </div>
  );
}
