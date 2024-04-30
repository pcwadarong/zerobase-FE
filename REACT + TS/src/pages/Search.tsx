import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export default function Search() {

  return (
    <div>
      <Nav />
      <div className="pt-28"></div>
      <div className="flex p-20 items-center justify-center space-x-2">
        <Input type="text" placeholder="Search Products..." />
        <Button type="submit">Search</Button>
      </div>
      <Separator />
      <Footer />
    </div>
  );
}
