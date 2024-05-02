import SearchImg from '../../assets/search.svg';
import XButton from '../../assets/xButton.svg';
import { useState, KeyboardEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavSearchBar() {
  const nav = useNavigate();
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const onKeydown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      nav('/search');
    }
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex relative">
      <input
        style={{
          width: inputVisible ? '150px' : '0px',
          transition: 'width 0.3s ease',
        }}
        value={inputValue}
        type="text"
        className="border-slate-500 bg-transparent mr-2 w-0 overflow-hidden border-b-[1px]"
        placeholder="Search..."
        onChange={onChangeInput}
        onKeyDown={onKeydown}
      />

      <button className="w-7" onClick={() => setInputVisible(!inputVisible)}>
        <div
          className={
            inputVisible
              ? 'transition-all duration-300 transform rotate-90'
              : ''
          }
        >
          {inputVisible ? <XButton /> : <SearchImg />}
        </div>
      </button>
    </div>
  );
}
