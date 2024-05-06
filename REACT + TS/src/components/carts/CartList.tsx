import { Separator } from '../ui/separator';
import Xbutton from '../../assets/xButton.svg';
import { useRecoilState } from 'recoil';
import { cartState } from '@/types/Recoil';
import QuantityControl from '../common/quantityControl';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { ICartState } from '@/types/globalTypes';
import { useNavigate } from 'react-router-dom';

export default function CartList() {
  const nav = useNavigate();
  const [cartItemsData, setCartItemData] = useRecoilState(cartState);
  const cartItems = useMemo<ICartState | undefined>(
    () => (cartItemsData ? cartItemsData.items : {}),
    [cartItemsData],
  );

  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  const calculateValue = useCallback(
    (type: string): number => {
      if (!cartItems) return 0;

      switch (type) {
        case 'subtotal': {
          return Object.values(cartItems).reduce((acc, item) => {
            return acc + Math.floor(item.custom) * item.count;
          }, 0);
        }
        case 'shipping': {
          const totalPrice = calculateValue('totalPrice');
          return totalPrice > 1000 ? 0 : 2;
        }
        case 'discount': {
          const totalPrice = calculateValue('totalPrice');
          const subtotal = calculateValue('subtotal');
          return subtotal - totalPrice;
        }
        case 'total': {
          const totalPrice = calculateValue('totalPrice');
          const shipping = calculateValue('shipping');
          return totalPrice + shipping;
        }
        case 'totalPrice': {
          return Object.values(cartItems).reduce((acc, item) => {
            return acc + Math.floor(item.price) * item.count;
          }, 0);
        }
        default:
          return 0;
      }
    },
    [cartItems],
  );

  useEffect(() => {
    setSubtotal(calculateValue('subtotal'));
    setShipping(calculateValue('shipping'));
    setDiscount(calculateValue('discount'));
    setTotal(calculateValue('total'));
  }, [calculateValue]);

  const handleCheckout = () => {
    const userInfo = localStorage.getItem('account');
    if (userInfo) {
      alert('Payment has been made');
    } else {
      alert('Need to login first.');
      nav('/member/login');
    }
  };

  const handleAmountChange = (index: number, newAmount: number) => {
    setCartItemData((prevData) => {
      if (!prevData || !prevData.items) return prevData;

      const updatedItems = { ...prevData.items };
      const currentItem = updatedItems[index];

      if (currentItem) {
        const updatedItem = { ...currentItem, count: newAmount };
        updatedItems[index] = updatedItem;
      }

      return { ...prevData, items: updatedItems };
    });
  };

  const removeFromCart = (indexToRemove: number) => {
    setCartItemData((prevData) => {
      if (!prevData || !prevData.items) return prevData;

      const updatedItems = { ...prevData.items };
      delete updatedItems[indexToRemove];

      return { ...prevData, items: updatedItems };
    });
  };

  return (
    <div className="w-full md:w-11/12 lg:w-9/12 min-h-[35rem] py-16 px-3">
      <h1 className="text-2xl font-bold mb-10">Shopping Cart</h1>
      <div className="sm:flex justify-between gap-16">
        <div className="w-full">
          <Separator />
          <div className="flex p-2 gap-3">
            <p className="w-full">ITEM</p>
            <p className="w-20 shrink-0 text-center">QUANTITY</p>
            <p className="w-20 shrink-0 text-center">PRICE</p>
            <p className="w-20 shrink-0 text-center">TOTAL</p>
            <div className="w-8 shrink-0"></div>
          </div>
          <Separator />
          {cartItems ? (
            Object.values(cartItems).map((item, index) => (
              <div
                key={index}
                className="flex p-2 relative items-center gap-3 justify-between mb-10"
              >
                <div className="w-20 h-20 border-[1px] flex justify-center items-center shrink-0">
                  <img src={item.image} alt={item.title} width="50px" />
                </div>
                <span className="w-full truncate">{item.title}</span>
                <span className="w-20 shrink-0 text-center">
                  <QuantityControl
                    initialAmount={item.count}
                    onAmountChange={(newAmount) =>
                      handleAmountChange(index, newAmount)
                    }
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
            ))
          ) : (
            <div>Search your Item</div>
          )}
        </div>
        <div className="sm:w-80 shrink-0">
          <div className="bg-gray-100 p-8 flex flex-col gap-4">
            <h2 className="text-xl font-bold">Order Summary</h2>
            <Separator />
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{`$${subtotal}`}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{`$${shipping}`}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span>{`$${discount}`}</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span>Total</span>
              <span>{`$${total}`}</span>
            </div>
          </div>
          <button
            className="border-gray-400 border-[1px] py-3 w-full mt-8"
            onClick={handleCheckout}
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}
