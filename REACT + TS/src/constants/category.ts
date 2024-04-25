/**
 * 자주 사용하는 카테고리
 */

export const Category: { [key: string]: string } = {
  ALL: '모아보기',
  "men's": '패션',
  "women's": '패션',
  electronics: '디지털',
  jewelery: '액세서리',
} as const;

export const MENUS = {
  HOME: '홈',
  FASHION: '패션',
  ACCESSORY: '액세서리',
  DIGITAL: '디지털',
} as const;

export const CART_ITEM = 'CART_ITEM';

type categoryType = (typeof Category)[keyof typeof Category];
