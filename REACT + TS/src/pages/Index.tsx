//import Slider from "../components/common/Slider";
import Carousel from '../components/common/Carousel/Carousel';
import Nav from '../components/layout/Nav';
import { carouselList } from '@/lib/carouselImg';

const Index = (): JSX.Element => {
  return (
    <>
      <section className="">
        <Nav />
        <Carousel carouselList={carouselList} />
      </section>
      <h1>hiheloo</h1>
      <p>this sis p</p>
    </>
  );
};

export default Index;
