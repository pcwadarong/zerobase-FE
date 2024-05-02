import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Detail = (): JSX.Element => {
  const nav = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex h-10 items-center space-x-4 sm:mb-8 text-lg sm:text-2xl">
        <div className="text-sm">{'This page could not be found.'}</div>
      </div>
      <div className="text-center ">
        <Button variant="outline" onClick={()=>{nav('/')}}>{'Go to Home'}</Button>
      </div>
    </div>
  );
};

export default Detail;
