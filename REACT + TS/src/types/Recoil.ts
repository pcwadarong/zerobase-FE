import { atom, selector } from 'recoil';

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

export const userIDState = selector({
  key: 'userIDState',
  get: ({ get }) => {
    const userAccountState = get(userAccount);
    return userAccountState.userID;
  },
  set: ({ set }, newValue) => {
    if (typeof newValue === 'string') {
      set(userAccount, (prevState) => ({
        ...prevState,
        userID: newValue,
      }));
    }
  },
});

export const passwordState = selector({
  key: 'passwordState',
  get: ({ get }) => {
    const userAccountState = get(userAccount);
    return userAccountState.password;
  },
  set: ({ set }, newValue) => {
    if (typeof newValue === 'string') {
      set(userAccount, (prevState) => ({
        ...prevState,
        password: newValue,
      }));
    }
  },
});

export const emailState = selector({
  key: 'emailState',
  get: ({ get }) => {
    const userAccountState = get(userAccount);
    return userAccountState.email;
  },
  set: ({ set }, newValue) => {
    if (typeof newValue === 'string') {
      set(userAccount, (prevState) => ({
        ...prevState,
        email: newValue,
      }));
    }
  },
});
