import { Separator } from '../ui/separator';
import QuantityControl from '../common/quantityControl';
import { useParams } from 'react-router-dom';
import { isLoadingState } from '@/types/Recoil';
import { getProductsList } from '@/utils/getProducts';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { useEffect, useState } from 'react';
import { IProduct } from '@/types/globalTypes';
import LoadingIndicator from '@/components/ui/LoadingIndicator';
import { useNavigate } from 'react-router-dom';
import AddToCart from '../carts/AddtoCart';

export default function ItemDetail() {
  const [isLoading, setLoading] = useRecoilState(isLoadingState);
  const { id } = useParams();
  const productsListLoadable = useRecoilValueLoadable(getProductsList);
  const [data, setData] = useState<IProduct | null>(null);
  const [amount, setAmount] = useState(1);
  const nav = useNavigate();

  useEffect(() => {
    if (productsListLoadable.state === 'hasValue' && id) {
      const product = productsListLoadable.contents.find(
        (product: IProduct) => product.id === parseInt(id),
      );
      if (product) {
        setData(product);
        setLoading(false);
      } else {
        alert('error');
      }
    } else if (productsListLoadable.state === 'loading') {
      setLoading(true);
    }
  }, [id, productsListLoadable, setLoading]);

  if (isLoading || !data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingIndicator />
      </div>
    );
  }
  const handleAmountChange = (newAmount: number) => {
    setAmount(newAmount);
  };

  return (
    <div className="flex justify-center">
      <div className="flex items-center justify-center h-screen gap-20 max-w-[80rem]">
        <img
          src={data.image}
          alt="item image"
          className="w-96 border-[1px] border-gray-400 p-20 bg-white"
        />
        <div className="flex flex-col gap-7">
          <h1 className="text-lg font-regular">{data.title}</h1>
          <Separator />
          <div className="flex leading-6">
            <p className="min-w-20 font-regular">{'INFO'}</p>
            <p>{data.description}</p>
          </div>
          <div className="flex">
            <p className="w-20 font-regular">{'CUSTOM'}</p>
            <p className="line-through">{`$ ${data.price}`}</p>
          </div>
          <div className="flex">
            <p className="w-20 font-regular">{'RPICE'}</p>
            <p>{`$ ${Math.floor(data.price * 0.97)}`}</p>
          </div>
          <QuantityControl
            initialAmount={amount}
            onAmountChange={handleAmountChange}
            size={'big'}
          />
          <Separator />
          <p className="font-regular">{`TOTAL PRICE : $ ${Math.floor(data.price * 0.97) * amount} (${amount} item(s))`}</p>
          <div className="flex gap-3">
            <AddToCart data={data} amount={amount} />
            <button
              className="border-[1px] border-gray-400 px-5 py-3"
              onClick={() => nav('/cart')}
            >
              ORDER NOW
            </button>
            <button
              className="border-[1px] border-gray-400 px-5 py-3"
              onClick={() => {
                alert('Item is added to wish');
              }}
            >
              ADD TO WISH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
