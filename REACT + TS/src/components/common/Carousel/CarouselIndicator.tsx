interface Props {
  carouselList: string[];
  currIndex: number;
}

export default function Indicator({ carouselList, currIndex }: Props) {
  return (
    <div>
      <ul className="absolute bottom-2 flex z-0 w-full justify-center items-center">
        {carouselList.map((_, index) => (
          <li
            style={{
              transition: 'all 0.5s ease-in-out',
            }}
            key={index}
            className={`w-1 h-1 rounded-full my-4 mx-1.5 z-10 ${index === currIndex ? 'bg-black/80' :  `bg-slate-400/80`}`}
          ></li>
        ))}
      </ul>
    </div>
  );
}
