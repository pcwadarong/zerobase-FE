import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import SpecialListing from '@/components/productList/SpecialListing';

interface SpecialProductsProps {
  index: string; // Props의 타입을 정확히 지정
}

export default function SpecialProducts({ index }: SpecialProductsProps) {
  return (
    <div>
      <Nav />
      <div className="pt-28"></div>
      <div className=''>
        <h1 className="text-2xl font-bold p-20">
          {index === 'new' ? 'NEW PRODUCTS' : 'BEST PRODUCTS'}
        </h1>
        <SpecialListing index={index} />
      </div>
      <Footer />
    </div>
  );
}
