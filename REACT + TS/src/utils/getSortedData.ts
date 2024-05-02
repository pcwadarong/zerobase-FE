// Sort Datas according to select
import { IProduct } from "@/types/globalTypes";

export const getSortedData = (data: IProduct[], sortType: string) => {
  return [...data].sort((a, b) => {
    if (sortType === 'Recommendations') {
      return (b.rating.count || 0) - (a.rating.count || 0);
    } else if (sortType === 'New Item') {
      return b.id - a.id;
    } else if (sortType === 'Price ascending') {
      return a.price - b.price;
    } else if (sortType === 'Price descending') {
      return b.price - a.price;
    } else {
      return 0;
    }
  });
};