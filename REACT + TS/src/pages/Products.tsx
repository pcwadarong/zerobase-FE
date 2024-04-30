import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import ProductListing from '@/components/productList/ProductListing';

export default function Products() {
  return (
    <div>
      <Nav />
      <div className="pt-28"></div>
      <ProductListing />
      <Footer />
    </div>
  );
}
