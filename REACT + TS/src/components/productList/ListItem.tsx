import { IProduct } from '@/types/globalTypes';
interface Props extends IProduct {}

export default function ItemList({ title, price, image }: Props) {
  return (
    <div onClick={()=>{nav('/')}} className="flex flex-col justify-between h-full">
      <a href="#" className="flex justify-center h-full">
        <img
          src={`${image}`}
          alt="product image"
          className="max-w-56 max-h-72"
        />
      </a>
      <div className='flex flex-col text-center h-20 justify-center'>
        <p className="text-lg  truncate max-w-80">
          {title}
        </p>
        <p>{'$ ' + Math.round(price)}</p>
      </div>
    </div>
  );
}
