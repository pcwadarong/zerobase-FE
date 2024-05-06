import { Link, useNavigate } from 'react-router-dom';
import NavSearchBar from './NavSearchBar';
import ThemeToggle from '../common/ThemeToggle';
import Toggle from './MenuToggle';
import User from '../../assets/user.svg';
import Shopping from '../../assets/shooping.svg';
import Logo from '../../assets/logo.svg';

export default function Nav() {
  const nav = useNavigate();
  const isLogin = localStorage.getItem('isLogin');

  const handleMovement = () => {
    if (isLogin !== null) {
      nav('/member/info');
    } else {
      nav('/member/login');
    }
  };

  return (
    <div className="h-28 fixed z-10 drop-shadow-lg flex items-center justify-center bg-white/90 w-full backdrop-blur-sm dark:bg-gray-900/90">
      <div className="flex justify-between p-7 items-center text-md w-[100rem]">
        <div className="flex gap-4 sm:w-5/12 text-right items-center xl:gap-8">
          <Toggle />
          <Link className="hidden sm:flex" to="/best">
            BEST
          </Link>
          <Link className="hidden sm:flex" to="/new">
            NEW
          </Link>
        </div>
        <button className="w-10" onClick={() => nav('/')}>
          <Logo />
        </button>
        <ul className="flex gap-4 w-9/12 sm:w-5/12 justify-end xl:gap-8">
          <button onClick={handleMovement} className="flex items-center gap-1">
            <div className="w-7" role="button">
              <User />
            </div>
            <span className="hidden xl:block">
              {isLogin ? 'MY PAGE' : 'LOG IN'}
            </span>
          </button>
          <button
            onClick={() => nav('/cart')}
            className="flex items-center gap-1"
          >
            <div className="w-7" role="button">
              <Shopping />
            </div>
            <span className="hidden xl:block">CART</span>
          </button>
          <ThemeToggle />
          <NavSearchBar />
        </ul>
      </div>
    </div>
  );
}
