import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import CartView from './CartView';
import { Separator } from '../ui/separator';

import { cartState } from '@/types/Recoil';
import { ICartState } from '@/types/globalTypes';

import { calculateValue } from '@/utils/calculateValue';

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

  const handleCheckout = () => {
    const userInfo = localStorage.getItem('account');
    if (userInfo) {
      alert('Payment has been made');
      setCartItemData({});
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

        const newSubtotal = calculateValue('subtotal', updatedItems);
        const newShipping = calculateValue('shipping', updatedItems);
        const newDiscount = calculateValue('discount', updatedItems);
        const newTotal = calculateValue('total', updatedItems);

        setSubtotal(newSubtotal);
        setShipping(newShipping);
        setDiscount(newDiscount);
        setTotal(newTotal);
      }

      return { ...prevData, items: updatedItems };
    });
  };

  const removeFromCart = (indexToRemove: number) => {
    if (confirm('Do you want to remove this item?')) {
      setCartItemData((prevData) => {
        if (!prevData || !prevData.items) return prevData;

        const updatedItems = { ...prevData.items };
        delete updatedItems[indexToRemove];

        if (Object.keys(updatedItems).length === 0) {
          return {};
        } else {
          return { ...prevData, items: updatedItems };
        }
      });
    }
  };

  return (
    <div className="w-full md:w-11/12 lg:w-9/12 min-h-[35rem] py-16 px-3">
      <h1 className="text-2xl font-bold mb-10">Shopping Cart</h1>
      <div className="sm:flex justify-between gap-16">
        <div className="w-full  mb-10">
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
            Object.values(cartItems).map((item) => (
              <CartView
                key={item.id}
                item={item}
                handleAmountChange={handleAmountChange}
                removeFromCart={removeFromCart}
              />
            ))
          ) : (
            <div className="p-5 text-center">Search your Item</div>
          )}
        </div>
        <div className="sm:w-80 shrink-0">
          <div className="bg-gray-100 dark:bg-gray-600 p-8 flex flex-col gap-4">
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
