import { atom } from 'recoil';

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
    'userID': '',
    'password': '',
    'email': '',
  },
});
