import { userAccount } from "@/types/Recoil";
import { selector } from "recoil";

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