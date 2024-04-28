import searchImg from '../../assets/search.svg';
import xButton from '../../assets/xButton.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavSearchBar() {
  const nav = useNavigate();
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const toggleInput = () => {
    setInputVisible(!inputVisible);
  };

  const onClickBtn = () => {
    if (inputVisible && inputValue.trim() !== '') {
      console.log(inputValue);
      //nav('/search');
    } else {
      toggleInput();
    }
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex relative">
      <input
        style={{
          borderBottom: '1px solid',
          width: inputVisible ? '150px' : '0px', // 너비가 0px에서 150px로 변화하도록 설정
          transition: 'width 0.3s ease', // 너비에 대한 애니메이션 트랜지션
        }}
        value={inputValue}
        type="text"
        className="border-slate-500 bg-transparent mr-2 w-0 overflow-hidden" // w-0 클래스 추가
        placeholder="Search..."
        onChange={onChangeInput}
      />

      <button onClick={onClickBtn}>
        <img
          src={inputVisible ? xButton : searchImg}
          alt={inputVisible ? 'close icon' : 'search icon'}
          width="30px"
          className={
            inputVisible
              ? 'transition-all duration-300 transform rotate-90'
              : ''
          }
        />
      </button>
    </div>
  );
}
