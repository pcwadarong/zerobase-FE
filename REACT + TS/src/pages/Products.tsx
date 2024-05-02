import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import LoadProducts from '@/components/productList/LoadProducts';

interface ListingType {
  index: string;
}

export default function Products({ index }: ListingType) {
  return (
    <div>
      <Nav />
      <div className="pt-28"></div>
      <LoadProducts index={index} />
      <Footer />
    </div>
  );
}
