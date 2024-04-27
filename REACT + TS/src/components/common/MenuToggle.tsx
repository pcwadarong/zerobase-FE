import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { Category } from '../constants/category';
import { Button } from '../ui/button';
import xButton from './../../assets/xButton.svg';

export default function Toggle() {
  const [isOpened, setOpen] = useState(false);

  const toogleMenu = () => {
    setOpen((isOpened) => !isOpened);
  };

  useEffect(() => {
    console.log('a');
  }, [isOpened]);

  return (
    <div>
      <button onClick={toogleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul
        className="menuToggle"
        style={{
          left: isOpened ? '0px' : '-450px',
        }}
      >
        <button onClick={toogleMenu} className="w-14 self-end">
          <img src={xButton} alt="X Button" />
        </button>
        <Button variant="link">{Category.all}</Button>
        <Button variant="link">{Category.men}</Button>
        <Button variant="link">{Category.women}</Button>
        <Button variant="link">{Category.accessory}</Button>
      </ul>
    </div>
  );
}
