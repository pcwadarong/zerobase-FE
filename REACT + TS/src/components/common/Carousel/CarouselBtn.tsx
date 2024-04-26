import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';

type Props = {
    handleSwipe: (direction: number) => void;
}

export default function CarouselBtn({ handleSwipe} : Props ) {
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-1 top-2/4 z-20"
        onClick={() => handleSwipe(-1)}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-1 top-2/4 z-20"
        onClick={() => handleSwipe(1)}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </>
  );
}
