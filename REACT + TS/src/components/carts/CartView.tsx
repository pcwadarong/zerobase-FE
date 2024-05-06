import QuantityControl from '../common/quantityControl';
import Xbutton from '../../assets/xButton.svg';
import { ICartItems } from '@/types/globalTypes';
import { useNavigate } from 'react-router-dom';

interface Props {
  item: ICartItems;
  index: number;
  handleAmountChange: (index: number, newAmount: number) => void;
  removeFromCart: (index: number) => void;
}

export default function CartView({
  item,
  index,
  handleAmountChange,
  removeFromCart,
}: Props) {
  const nav = useNavigate();
  const moveToItemDetail = () => {
    nav(`/products/detail/${item.id}`);
  };
  
  return (
    <div
      key={index}
      className="flex p-2 relative items-center gap-3 justify-between"
    >
      <div
        onClick={moveToItemDetail}
        className="w-20 h-20 border-[1px] flex justify-center items-center shrink-0 cursor-pointer"
      >
        <img src={item.image} alt={item.title} width="50px" />
      </div>
      <span
        onClick={moveToItemDetail}
        className="w-full truncate cursor-pointer"
      >
        {item.title}
      </span>
      <span className="w-20 shrink-0 text-center">
        <QuantityControl
          initialAmount={item.count}
          onAmountChange={(newAmount) => handleAmountChange(index, newAmount)}
          size={'small'}
        />
      </span>
      <span className="w-20 shrink-0 text-center">${item.price}</span>
      <span className="w-20 shrink-0 text-center">
        ${item.price * item.count}
      </span>
      <div className="w-8 shrink-0"></div>
      <button
        className="absolute w-4 right-3 top-0 flex items-center h-full"
        onClick={() => removeFromCart(index)}
      >
        <Xbutton />
      </button>
    </div>
  );
}
