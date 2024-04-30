import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import ItemList from '@/components/common/ItemList';
import { productsList } from '@/components/store/products';
import { useSearchParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Category } from '@/components/constants/category';
import { useState } from 'react';


export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const list = useRecoilValue(productsList);
  const [selectedCategory, setSelectedCategory] = useState('all');

  if (!searchParams.get('q')) {
    setSearchParams({ q: 'all' });
  }

  const ChangeData = (category: string) => {
    setSelectedCategory(category);
    setSearchParams({ q: category.toLowerCase() });
  };

  return (
    <div>
      <Nav />
      <div className="pt-28"></div>
      <div className="flex flex-col p-20 gap-5 items-center">
        <h2 className='text-lg font-bold tracking-wider'>CATEGORY</h2>
        <ul className="flex gap-5">
          {Object.entries(Category).map(([key, value]) => (
            <li
              key={value}
              className={`cursor-pointer p-2 ${selectedCategory === value ? 'border-b-2' : ''}`}
              onClick={() => ChangeData(value)}
            >
              {value.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="ml-10">
          {list.map((product) => (
            <ItemList key={product.id} {...product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
