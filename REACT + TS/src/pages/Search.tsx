import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import { Separator } from '@/components/ui/separator';
import SearchedList from '../components/search/SearchedList';

export default function Search() {
  
  return (
    <div>
      <Nav />
      <div className="pt-28"></div>
      <SearchedList />
      <Separator />
      <Footer />
    </div>
  );
}
