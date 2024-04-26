import { useRef, useState, useEffect, useCallback } from 'react';
import Indicator from './CarouselIndicator';
import CarouselBtn from './CarouselBtn';

interface Props {
  carouselList: string[];
}

export default function Carousel({ carouselList }: Props) {
  const [currIndex, setCurrIndex] = useState(0);
  const carouselRef = useRef<HTMLUListElement>(null);

  const moveToSlide = useCallback(
    (index: number) => {
      setCurrIndex(index);
      if (carouselRef.current) {
        carouselRef.current.style.transition = 'all 0.5s ease-in-out';
        carouselRef.current.style.transform = `translateX(-${index * (100 / carouselList.length)}%)`;
      }
    },
    [carouselList.length],
  );

  const handleSwipe = (direction: number) => {
    const newIndex = currIndex + direction;
    if (carouselRef.current) {
      // If the first slide is reached
      if (newIndex === -1) {
        moveToSlide(carouselList.length - 1); // Move to the last slide
        carouselRef.current.style.transition = '';
        carouselRef.current.style.transform = `translateX(-${newIndex * (100 / carouselList.length)}%)`;
        setCurrIndex(carouselList.length - 1);
      } else if (newIndex === carouselList.length) {
        moveToSlide(0); // Move to the first slide
        carouselRef.current.style.transition = '';
        carouselRef.current.style.transform = `translateX(0%)`;
        setCurrIndex(0);
      } else {
        moveToSlide(newIndex);
      }
    }
  };

  useEffect(() => {
    const carouselRefCurrent = carouselRef.current; // ref 값을 변수에 복사

    const handleSlideEnd = () => {
      // If the last slide is reached, move to the first slide after a delay
      if (currIndex === carouselList.length - 1) {
        setTimeout(() => {
          moveToSlide(0); // Move to the first slide
          carouselRef.current!.style.transition = '';
          carouselRef.current!.style.transform = `translateX(0%)`;
          setCurrIndex(0);
        }, 300);
      } else if (currIndex === 0) {
        setTimeout(() => {
          moveToSlide(carouselList.length - 1); // Move to the last slide
          carouselRef.current!.style.transition = '';
          carouselRef.current!.style.transform = `translateX(-${(carouselList.length - 1) * (100 / carouselList.length)}%)`;
          setCurrIndex(carouselList.length - 1);
        }, 300);
      }
    };

    // Comfirm the transition is over
    carouselRefCurrent?.addEventListener('transitionend', handleSlideEnd);
    return () => {
      carouselRefCurrent?.removeEventListener('transitionend', handleSlideEnd);
    };
  }, [currIndex, moveToSlide, carouselList.length]);

  return (
    <div className="w-full relative bg-slate-200" style={{ height: '37.5rem' }}>
      <ul
        ref={carouselRef}
        className="flex h-full justify-center items-end"
        style={{
          width: `${carouselList.length * 100}%`,
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
      <CarouselBtn handleSwipe={handleSwipe} />
      <Indicator carouselList={carouselList} currIndex={currIndex} />
      <div className="absolute top-0 left-0 w-full h-full z-1 bg-white/35"></div>
    </div>
  );
}
