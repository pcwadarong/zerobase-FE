import { useEffect, useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  carouselList: string[];
}

export default function Carousel({ carouselList }: Props) {
  const [currIndex, setCurrIndex] = useState(0);
  const carouselRef = useRef<HTMLUListElement>(null);

  const moveToSlide = (index: number) => {
    setCurrIndex(index);
    if (carouselRef.current) {
      //carouselRef.current.style.transition = 'all 0.5s ease-in-out';
      carouselRef.current.style.transform = `translateX(-${index * 30}%)`;
    }
  };

  const handleSwipe = (direction: number) => {
    const newIndex = currIndex + direction;
    if (newIndex < 0) {
      moveToSlide(carouselList.length - 1);
    } else if (newIndex >= carouselList.length) {
      moveToSlide(0);
    } else {
      moveToSlide(newIndex);
    }
  };

  useEffect(() => {
    moveToSlide(currIndex);
  }, [carouselList, currIndex]);

  return (
      <div className="w-full py-2 relative bg-slate-200 overflow-hidden h-1/6">
        <ul
          ref={carouselRef}
          className="flex"
          style={{
            width: `${carouselList.length * 100}%`,
            transition: 'all 2s ease-in-out',
          }}
        >
          {carouselList.map((image, index) => (
            <li
              key={index}
              className="flex-shrink-0 w-full h-full"
              style={{ flex: `0 0 ${100 / carouselList.length}%` }}
            >
              <img
                src={image}
                alt={`carousel-${index}`}
                className="w-full h-full object-cover"
              />
            </li>
          ))}
        </ul>
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-1 top-2/4 z-1"
          onClick={() => handleSwipe(-1)}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-1 top-2/4 z-1"
          onClick={() => handleSwipe(1)}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
  );
}
