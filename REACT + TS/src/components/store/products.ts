import { selector } from 'recoil';
import axios from 'axios';
import CONSTANTS from '../constants/constants';

const productsURL = `${CONSTANTS.IS_DEV ? `/proxy` : `${import.meta.env.VITE_FAKE_STORE_API}`}/products`;

interface IRating {
  readonly rate?: number;
  readonly count?: number;
}
export interface IProduct {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly price: number;
  readonly image: string;
  readonly rating: IRating;
}

/**
 * productList는 API 1회 요청 후에 유지됩니다.
 * 디테일 페이지에서는 productDetail/id로 각각 호출하셔도 무방합니다.
 */
export const productsList = selector<IProduct[]>({
  key: 'productsList',
  get: async () => {
    try {
      const response = await axios.get(productsURL);
      return response.data || [];
    } catch (error) {
      console.log(`Error: \n${error}`);
      return [];
    }
  },
});