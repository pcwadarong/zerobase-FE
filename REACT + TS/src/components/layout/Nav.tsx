import { Link, useNavigate } from 'react-router-dom';
import NavSearchBar from './NavSearchBar';
import ThemeToggle from '../common/ThemeToggle';
import Toggle from './MenuToggle';
import User from '../../assets/user.svg';
import Shopping from '../../assets/shooping.svg';
import Logo from '../../assets/logo.svg';

export default function Nav() {
  const nav = useNavigate();

  return (
    <div className="h-28 fixed z-10 drop-shadow-lg flex items-center justify-center bg-white/90 w-full backdrop-blur-sm dark:bg-gray-900/90">
      <div className="flex justify-between p-7 items-center text-md" style={{ width: "1600px" }}>
        <div className="flex gap-4 w-5/12 text-right items-center xl:gap-8">
          <Toggle />
          <Link to="/best">베스트</Link>
          <Link to="/new">신상품</Link>
        </div>
        <button className="w-10" onClick={() => nav('/')}>
          <Logo />
        </button>
        <ul className="flex gap-4 w-5/12 justify-end xl:gap-8">
          <button onClick={() => nav('/user/login')} className="flex items-center gap-1">
            <div className="w-7" role="button">
              <User />
            </div>
            <span className="hidden xl:block">USER</span>
          </button>
          <button onClick={() => nav('/')} className="flex items-center gap-1">
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
