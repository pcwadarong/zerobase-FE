//import Slider from "../components/common/Slider";
import Carousel from '../components/common/Carousel/Carousel';
import Nav from '../components/layout/Nav';
import Footer from '@/components/layout/Footer';
import { carouselList } from '@/lib/carouselImg';

const Index = (): JSX.Element => {
  return (
    <>
      <section>
        <Nav />
        <Carousel carouselList={carouselList} />
      </section>
      <section>

      </section>
      <Footer />
    </>
  );
};

export default Index;
