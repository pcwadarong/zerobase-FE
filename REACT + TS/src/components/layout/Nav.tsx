import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import {
  faMagnifyingGlass,
  faUser,
  faBagShopping,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
import Toggle from '../common/MenuToggle';

export default function Nav() {
  const nav = useNavigate();

  return (
    <div className="flex justify-between p-7 items-center ">
      <div className="flex gap-8 w-1/4 text-right items-center">
        <Toggle />
        <button>BEST</button>
        <button>NEW</button>
      </div>
      <img
        onClick={() => nav('/')}
        src="/logo.png"
        alt="logo"
        width="40px"
        className="cursor-pointer"
      />
      <ul className="flex gap-8 w-1/4 justify-end">
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
        <FontAwesomeIcon icon={faUser} size="lg" />
        <FontAwesomeIcon icon={faBagShopping} size="lg" />
        <button><FontAwesomeIcon icon={faMoon} size="lg" /></button>
      </ul>
    </div>
  );
}
