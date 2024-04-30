import ItemList from './ItemList';
// import { productsList } from '../store/products';
// import { useEffect } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { isLoadingAtom } from '../store/loading';

interface Props {
  title: string;
}

export default function ItemSection({ title }: Props) {
  const isLoading = useRecoilValue(isLoadingAtom);
  const setLoading = useSetRecoilState(isLoadingAtom);

  // const [products, setProducts] = useRecoilState(productsList);

  // useEffect(() => {
  //   const setInitData = async () => {
  //     try {
  //       const data = await productsList.get();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //   };
  //   setInitData();
  // }, [setProducts]);
  return (
    <div className="flex flex-col gap-10 justify-center">
      <div className="w-[85rem] mx-auto grid grid-cols-4 gap-8 py-32">
        <div className="col-span-full">
          <h2 className="text-xl font-extra">{title}</h2>
        </div>
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
      </div>
    </div>
  );
}
