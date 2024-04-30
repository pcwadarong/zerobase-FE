import { selector } from 'recoil';
import axios from 'axios';
import CONSTANTS from '../components/constants/constants';
import { IProduct } from '@/types/globalTypes';

const productsURL = `${CONSTANTS.IS_DEV ? `/proxy` : `${import.meta.env.VITE_FAKE_STORE_API}`}/products`;
// const productsURL = `https://fakestoreapi.com/products`;

export function getCateProductUrl(category: string) {
  switch (category) {
    case 'all':
      return 'default';
    case 'digital':
      return 'electronics';
    case 'accessory':
      return 'jewelery';
    case 'men':
      return "men's clothing";
    case 'women':
      return "women's clothing";
    default:
      return 'default';
  }
}

export const getProductsList = selector<IProduct[]>({
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
