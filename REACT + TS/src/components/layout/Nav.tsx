import { useNavigate } from 'react-router-dom';
import NavSearchBar from './NavSearchBar';
import ThemeToggle from '../common/ThemeToggle';
import Toggle from './MenuToggle';
import User from '../../assets/user.svg';
import Shopping from '../../assets/shooping.svg';

export default function Nav() {
  const nav = useNavigate();

  return (
    <div className="flex h-28 justify-between p-7 items-center text-md fixed z-10 drop-shadow-lg bg-white/90 w-full backdrop-blur-sm dark:bg-gray-900/90">
      <div className="flex gap-4 w-5/12 text-right items-center xl:gap-8">
        <Toggle />
        <button onClick={() => nav('/best')}>BEST</button>
        <button onClick={() => nav('/new')}>NEW</button>
      </div>
      <img
        onClick={() => nav('/')}
        src="/logo.png"
        alt="logo"
        width="40px"
        className="cursor-pointer"
      />
      <ul className="flex gap-4 w-5/12 justify-end xl:gap-8">
        <button onClick={() => nav('/')} className="flex items-center gap-1">
          <div  className='w-7'><User /></div>
          <span className="hidden xl:block">USER</span>
        </button>
        <button onClick={() => nav('/')} className="flex items-center gap-1">
          <div className='w-7'><Shopping /></div>
          <span className="hidden xl:block">CART</span>
        </button>
        <ThemeToggle />
        <NavSearchBar />
      </ul>
    </div>
  );
}
