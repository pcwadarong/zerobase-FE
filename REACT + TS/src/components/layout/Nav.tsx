import { useNavigate } from 'react-router-dom';
import Toggle from '../common/MenuToggle';
import search from '../../assets/search.svg';
import user from '../../assets/user.svg';
import shopping from '../../assets/shooping.svg';
import sun from '../../assets/sun.svg';
// import moon from '../../assets/moon.svg';

export default function Nav() {
  const nav = useNavigate();

  return (
    <div className="flex justify-between p-7 items-center">
      <div className="flex gap-8 w-1/4 text-right items-center">
        <Toggle />
        <button className='text-lg'>BEST</button>
        <button className='text-lg'>NEW</button>
      </div>
      <img
        onClick={() => nav('/')}
        src="/logo.png"
        alt="logo"
        width="40px"
        className="cursor-pointer"
      />
      <ul className="flex gap-8 w-1/4 justify-end">
        <img src={search} alt="search icon" width="30px" />
        <img src={user} alt="search icon" width="32px" />
        <img src={shopping} alt="search icon" width="32px" />
        <button>
          <img src={sun} alt="search icon" width="33px" />
          {/* <img src={moon} alt="search icon" width="33px" /> */}
        </button>
      </ul>
    </div>
  );
}
