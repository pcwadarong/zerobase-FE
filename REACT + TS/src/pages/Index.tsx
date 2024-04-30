import Carousel from '../components/common/Carousel/Carousel';
import Nav from '../components/layout/Nav';
import Footer from '@/components/layout/Footer';
import CategoryBox from '@/components/common/ItemSection';
import { carouselList } from '@/lib/carouselImg';
import { Category } from '@/components/constants/category';

const Index = (): JSX.Element => {
  return (
    <>
      <section className="overflow-hidden">
        <Nav />
        <div className="pt-28"></div>
        <Carousel carouselList={carouselList} />
      </section>
      <section>
        <CategoryBox title={`Today's Best`} />
        <CategoryBox title={`Best Sellers`} />
      </section>
      <Footer />
    </>
  );
};

export default Index;
