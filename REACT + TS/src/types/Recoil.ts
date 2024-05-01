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
  default: true, // 초기 로딩 상태는 true로 설정
});
