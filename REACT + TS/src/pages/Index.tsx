//import Slider from "../components/common/Slider";
import Carousel from '../components/common/Carousel/Carousel';
import Nav from '../components/layout/Nav';
import Footer from '@/components/layout/Footer';
import { carouselList } from '@/lib/carouselImg';

const Index = (): JSX.Element => {
  return (
    <>
      <section className='overflow-hidden'>
        <Nav />
        <Carousel carouselList={carouselList} />
      </section>
      <section>
        <div className='h-96'>Today's Best</div>
        <div className='h-96'>Best Sellers</div>
      </section>
      <Footer />
    </>
  );
};

export default Index;
