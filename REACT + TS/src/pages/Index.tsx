import Carousel from '../components/common/Carousel/Carousel';
import Nav from '../components/layout/Nav';
import Footer from '@/components/layout/Footer';
import IndexItems from '@/components/common/IndexItems';
import { carouselList } from '@/utils/carouselImg';

const Index = (): JSX.Element => {
  return (
    <>
      <section>
        <Nav />
        <div className="pt-28"></div>
        <Carousel carouselList={carouselList} />
      </section>
      <section className="py-20 flex flex-col items-center">
        <IndexItems title={`Today's Best`} />
        <IndexItems title={`New In`} />
      </section>
      <Footer />
    </>
  );
};

export default Index;
