import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import CartList from '@/components/carts/CartList';

export default function Cart() {
  return (
    <div>
      <Nav />
      <div className="pt-28"></div>
      <CartList />
      <Footer />
    </div>
  );
}
