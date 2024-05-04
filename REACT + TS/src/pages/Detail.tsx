import { Button } from '@/components/ui/button';
import { useParams } from 'react-router-dom';
import { isLoadingState } from '@/types/Recoil';
import { getProductsList } from '@/utils/getProducts';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { useEffect, useState } from 'react';
import { IProduct } from '@/types/globalTypes';

const Detail = (): JSX.Element => {
  const [isLoading, setLoading] = useRecoilState(isLoadingState);
  const { id } = useParams();
  const productsListLoadable = useRecoilValueLoadable(getProductsList);
  const [data, setData] = useState<IProduct | null>(null);

  useEffect(() => {
    if (productsListLoadable.state === 'hasValue' && id) {
      const product = productsListLoadable.contents.find(
        (product: IProduct) => product.id === parseInt(id),
      );
      if (product) {
        setData(product);
        setLoading(false);
      } else {
        alert('error'); // handle error or not found case
      }
    } else if (productsListLoadable.state === 'loading') {
      setLoading(true);
    }
  }, [id, productsListLoadable, setLoading]);

  if (isLoading || !data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>{data.title}</h1>
      <p>{data.price}</p>
    </div>
  );
};

export default Detail;
