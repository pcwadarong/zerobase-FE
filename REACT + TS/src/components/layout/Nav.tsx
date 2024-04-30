import { useNavigate } from 'react-router-dom';
import NavSearchBar from './NavSearchBar';
import Toggle from './MenuToggle';
import user from '../../assets/user.svg';
import shopping from '../../assets/shooping.svg';
import sun from '../../assets/sun.svg';
// import moon from '../../assets/moon.svg';

export default function Nav() {
  const nav = useNavigate();

  return (
    <div className="flex h-28 justify-between p-7 items-center fixed z-10 drop-shadow-lg bg-white/90 w-full backdrop-blur-sm">
      <div className="flex gap-8 w-5/12 text-right items-center">
        <Toggle />
        <button onClick={() => nav('/best')} className="text-lg">BEST</button>
        <button onClick={() => nav('/new')} className="text-lg">NEW</button>
      </div>
      <img
        onClick={() => nav('/')}
        src="/logo.png"
        alt="logo"
        width="40px"
        className="cursor-pointer"
      />
      <ul className="flex gap-8 w-5/12 justify-end">
        <button onClick={() => nav('/')}>
          <img src={user} alt="search icon" width="32px" />
        </button>
        <button onClick={() => nav('/')}>
          <img src={shopping} alt="search icon" width="32px" />
        </button>
        <button onClick={() => nav('/')}>
          <img src={sun} alt="search icon" width="33px" />
          {/* <img src={moon} alt="search icon" width="33px" /> */}
        </button>
        <NavSearchBar />
      </ul>
    </div>
  );
}