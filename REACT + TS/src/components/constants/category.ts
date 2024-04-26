/**
 * 자주 사용하는 카테고리
 */

export const Category: { [key: string]: string } = {
  all: 'ALL',
  men: `MEN'S`,
  women: `WOMEN'S`,
  electronics: 'ELECTRONICS',
  accessory: 'ACCESSORY',
} as const;

export const MENUS = {
  HOME: '홈',
  FASHION: '패션',
  ACCESSORY: '액세서리',
  DIGITAL: '디지털',
} as const;

export const CART_ITEM = 'CART_ITEM';
