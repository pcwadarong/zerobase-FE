import { atom, selector } from 'recoil';
import { CART_ITEM } from '@/components/constants/category';
import { ICartState } from '@/types/globalTypes';

export const cartState = atom<ICartState>({
  key: 'cart',
  default: {},
  effects: [
    ({ setSelf, onSet }) => {
      localStorage.getItem(CART_ITEM) &&
        setSelf(JSON.parse(localStorage.getItem(CART_ITEM) as string));
      onSet((value) => localStorage.setItem(CART_ITEM, JSON.stringify(value)));
    },
  ],
});

/**
 * cartList를 구현 하세요.
 * id, image, count 등을 return합니다.
 */

// addToCart

// removeFromCart
// export const removeFromCart = (cart: ICartState, id: string) => {
//   const tempCart = { ...cart };
//   if (tempCart[id].count === 1) {
//     delete tempCart[id];
//     return tempCart;
//   } else {
//     return { ...tempCart, [id]: { id: id, count: cart[id].count - 1 } };
//   }
// };