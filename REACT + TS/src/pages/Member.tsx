import MemberInfo from '@/components/account/MemberInfo';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';

export default function Member() {
  return (
    <div>
      <Nav />
      <div className="pt-28"></div>
      <MemberInfo />
      <Footer />
    </div>
  );
}
