import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';

export default function Search() {
  return (
    <div>
      <Nav />
      <div className="pt-28"></div>
      <div>
        <input type="text" />
        <button>submit</button>
      </div>

      <Footer />
    </div>
  );
}
