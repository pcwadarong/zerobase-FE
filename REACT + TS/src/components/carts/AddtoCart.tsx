import { useRecoilState } from 'recoil';
import { cartState } from '@/types/Recoil';
import { IProduct } from '@/types/globalTypes';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

interface Props {
  data: IProduct;
  amount: number;
}

const AddToCart = ({ data, amount }: Props) => {
  const [cart, setCart] = useRecoilState(cartState);
  const nav = useNavigate();
  const itemRef = useRef(Object.keys(cart.items || {}).length);

  const addToCart = () => {
    const existingItem = Object.values(cart.items || {}).find(
      (item) => item.id === data.id,
    );

    const newItem = {
      id: data.id,
      image: data.image,
      title: data.title,
      count: amount,
      custom: data.price,
      price: Math.floor(data.price * 0.97),
    };

    if (existingItem) {
      setCart((prevCart) => ({
        ...prevCart,
        items: {
          ...(prevCart.items || {}),
          [Object.keys(prevCart.items || {}).findIndex(
            (key) => prevCart.items![key] === existingItem,
          )]: {
            ...existingItem,
            count: existingItem.count + amount,
          },
        },
      }));
    } else {
      setCart((prevCart) => ({
        ...prevCart,
        items: {
          ...prevCart.items,
          [itemRef.current++]: newItem,
        },
      }));
    }

    if (!confirm('Do you want to move to cart?')) {
      return;
    } else {
      nav('/cart');
    }
  };

  return (
    <button
      className="border-[1px] border-gray-400 px-5 py-3"
      onClick={addToCart}
    >
      ADD TO CART
    </button>
  );
};

export default AddToCart;
