import { useState, useRef } from 'react';
import { Category } from '../constants/category';
import xButton from './../../assets/xButton.svg';
import hamburger from '../../assets/hamburger.svg';
import rightArrow from '../../assets/rightArrow.svg';
import { useNavigate } from 'react-router-dom';

export default function Toggle() {
  const [isOpened, setOpen] = useState(false);
  const nav = useNavigate();

  const toggleMenu = () => {
    setOpen((isOpened) => !isOpened);
  };

  const menuRef = useRef<HTMLDivElement>(null);

  const moveToCategory = (categoryName:string) => {
    nav(`/products?sort=${categoryName}`);
    setOpen(false);
  };

  return (
    <div>
      <div
        onClick={toggleMenu}
        className={`z-40 bg-black/50 absolute inset-0 h-screen duration-500 ease-in-out ${isOpened ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        style={{ transitionProperty: 'opacity, visibility' }}
      />
      <button onClick={toggleMenu}>
        <img src={hamburger} alt="hamburger button" width="40px" />
      </button>
      <div
        className="menuToggle"
        style={{
          left: isOpened ? '0px' : '-450px',
          transition: 'left 0.5s ease-in-out',
        }}
      >
        <button onClick={toggleMenu} className="w-14 self-end">
          <img src={xButton} alt="X Button" width="35" />
        </button>
        <ul className="text-start text-2xl pt-9">
          {Object.entries(Category).map(([key, value]) => (
            <div
              key={value}
              ref={menuRef}
              className="flex justify-between w-11/12 hover:text-gray-500 tracking-wider"
            >
              <li
                className={`cursor-pointer p-3`}
                onClick={() => moveToCategory(value)}
              >
                {value.toUpperCase()}
              </li>
              <button>
                <img src={rightArrow} alt="hamburger button" width="20px" />
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
