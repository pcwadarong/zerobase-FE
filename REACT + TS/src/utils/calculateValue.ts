import { ICartState } from '@/types/globalTypes';

export const calculateValue = (type: string, cartItems: ICartState): number => {
  if (!cartItems) return 0;

  switch (type) {
    case 'subtotal': {
      return Object.values(cartItems).reduce((acc, item) => {
        return acc + Math.floor(item.custom) * item.count;
      }, 0);
    }
    case 'shipping': {
      const totalPrice = calculateValue('totalPrice', cartItems);
      return totalPrice > 1000 ? 0 : 2;
    }
    case 'discount': {
      const totalPrice = calculateValue('totalPrice', cartItems);
      const subtotal = calculateValue('subtotal', cartItems);
      return subtotal - totalPrice;
    }
    case 'total': {
      const totalPrice = calculateValue('totalPrice', cartItems);
      const shipping = calculateValue('shipping', cartItems);
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
};
