import { useState, useRef } from 'react';
import { Category } from '../constants/category';
import XButton from './../../assets/xButton.svg';
import Hamburger from '../../assets/hamburger.svg';
import RightArrow from '../../assets/rightArrow.svg';
import { useNavigate } from 'react-router-dom';

export default function Toggle() {
  const [isOpened, setOpen] = useState(false);
  const nav = useNavigate();

  const toggleMenu = () => {
    setOpen((isOpened) => !isOpened);
  };

  const menuRef = useRef<HTMLDivElement>(null);

  const moveToCategory = (categoryName: string) => {
    nav(`/products?sort=${categoryName}`);
    setOpen(false);
  };

  return (
    <div>
      <ul className="pl-6 hidden xl:flex gap-8">
        {Object.entries(Category).map(([key]) => (
          <li
            key={key}
            className={`cursor-pointer hover:text-gray-500 tracking-wider`}
            onClick={() => moveToCategory(key)}
          >
            {key.toUpperCase()}
          </li>
        ))}
      </ul>
      <div className="xl:hidden">
        <div
          onClick={toggleMenu}
          className={`z-40 bg-black/50 absolute inset-0 h-screen duration-500 ease-in-out ${isOpened ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          style={{ transitionProperty: 'opacity, visibility' }}
        />
        <button onClick={toggleMenu} className='w-10'>
          <Hamburger /> 
        </button>
        <div
          className="menuToggle"
          style={{
            left: isOpened ? '0px' : '-450px',
            transition: 'left 0.5s ease-in-out',
          }}
        >
          <button onClick={toggleMenu} className="w-8 self-end">
            <XButton />
          </button>
          <ul className="text-start text-2xl pt-9">
            {Object.entries(Category).map(([key]) => (
              <div
                key={key}
                ref={menuRef}
                className="flex justify-between w-11/12 hover:text-gray-500 tracking-wider"
              >
                <li
                  className={`cursor-pointer p-3`}
                  onClick={() => moveToCategory(key)}
                >
                  {key.toUpperCase()}
                </li>
                <button className='w-6 hover:fill-gray-500'>
                  <RightArrow />
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
