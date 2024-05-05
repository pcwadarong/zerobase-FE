import { useNavigate } from 'react-router-dom';
import { IProduct } from '@/types/globalTypes';
interface Props extends IProduct {}

export default function ListItem({ title, price, image, id }: Props) {
  const nav = useNavigate();
  return (
    <div
      onClick={() => {
        nav(`/products/detail/${id}`);
      }}
      className="flex flex-col justify-between h-full"
    >
      <a href="#" className="flex justify-center items-center h-full bg-white">
        <img
          src={`${image}`}
          alt="product image"
          className="max-w-56 max-h-72"
        />
      </a>
      <div className="flex flex-col text-center h-20 justify-center pt-5">
        <p className="text-lg pb-2 truncate max-w-64">{title}</p>
        <p>{'$ ' + Math.round(price)}</p>
      </div>
    </div>
  );
}
