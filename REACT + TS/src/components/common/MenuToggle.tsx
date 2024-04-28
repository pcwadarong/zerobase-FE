import { useState, useEffect } from 'react';
import { Category } from '../constants/category';
import { Button } from '../ui/button';
import xButton from './../../assets/xButton.svg';
import hamburger from '../../assets/hamburger.svg';

export default function Toggle() {
  const [isOpened, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((isOpened) => !isOpened);
  };

  useEffect(() => {
    console.log('a');
  }, [isOpened]);

  return (
    <div>
      <div
        onClick={toggleMenu}
        className={`z-40 bg-black/50 absolute inset-0 transition-opacity duration-500 ease-in-out ${isOpened ? 'opacity-100' : 'opacity-0'}`}
        style={{ visibility: isOpened ? 'visible' : 'hidden' }}
      />
      <button onClick={toggleMenu}>
        <img src={hamburger} alt="hamburger button" width="40px" />
      </button>
      <ul
        className="menuToggle"
        style={{
          left: isOpened ? '0px' : '-450px',
          transition: 'left 0.5s ease-in-out',
        }}
      >
        <button onClick={toggleMenu} className="w-14 self-end">
          <img src={xButton} alt="X Button" width="35" />
        </button>
        <Button variant="link">{Category.all}</Button>
        <Button variant="link">{Category.men}</Button>
        <Button variant="link">{Category.women}</Button>
        <Button variant="link">{Category.accessory}</Button>
      </ul>
    </div>
  );
}
