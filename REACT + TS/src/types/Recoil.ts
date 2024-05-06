import { atom } from 'recoil';
import { ICartState } from './globalTypes';
import { CART_ITEM } from '@/components/constants/constants';

export const isLoadingAtom = atom({
  key: 'isLoadingAtom',
  default: true,
});

export const themeState = atom({
  key: 'themeState',
  default: 'light',
});

export const isLoadingState = atom({
  key: 'isLoadingData',
  default: true,
});

export const searchState = atom({
  key: 'searchedData',
  default: '',
});

export const isLoginState = atom({
  key: 'isLoginData',
  default: false,
});

export const userAccount = atom({
  key: 'userAccount',
  default: {
    userID: '',
    password: '',
    email: '',
  },
});

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