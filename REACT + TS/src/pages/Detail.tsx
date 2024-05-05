import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import ItemDetail from '@/components/item/ItemDetail';

const Detail = (): JSX.Element => {
  return (
    <div>
      <Nav />
      <div className="pt-28"></div>
      <ItemDetail />
      <Footer />
    </div>
  );
};

export default Detail;
