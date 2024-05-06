import { Button } from '@/components/ui/button';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userIDState, passwordState } from '@/utils/saveAccount';
import { useState, useEffect } from 'react';
import RegisterForm from '@/components/account/RegisterForm';
import LoginForm from '@/components/account/LoginForm';

export default function Account() {
  const nav = useNavigate();
  const location = useLocation();

  const [title, setTitle] = useState('LOG IN');
  const [query, setQuery] = useState('login');
  const [switchBtn, setSwitchBtn] = useState('CREATE A ACCOUNT');

  const setUserID = useSetRecoilState(userIDState);
  const setPassword = useSetRecoilState(passwordState);

  useEffect(() => {
    const index = location.pathname.slice(
      location.pathname.indexOf('member/') + 'member/'.length,
    );
    const newTitle = index === 'login' ? 'LOG IN' : 'CREATE A ACCOUNT';
    const newSwitchBtn =
      index === 'login' ? 'create a account' : 'Have an account? login';
    setQuery(index);
    setTitle(newTitle);
    setSwitchBtn(newSwitchBtn);

    if (index !== 'register' && index !== 'login') {
      nav('/member/login');
    }
  }, [location, nav]);

  const handleSignSwitch = () => {
    const newQuery = query === 'login' ? 'register' : 'login';
    nav(`/member/${newQuery}`);
  };

  const handleUserIDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserID(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <Nav />
      <div className="pt-28"></div>
      <div className="flex flex-col justify-center gap-10 items-center py-20">
        <h1 className="text-xl">{title}</h1>
        {query === 'login' ? (
          <LoginForm
            handleUserIDChange={handleUserIDChange}
            handlePasswordChange={handlePasswordChange}
          />
        ) : (
          <RegisterForm
            handleUserIDChange={handleUserIDChange}
            handlePasswordChange={handlePasswordChange}
          />
        )}
        <div className="flex flex-col items-center">
          <Button variant="link" onClick={handleSignSwitch}>
            {switchBtn}
          </Button>

          <Button variant="link">Forgot your password?</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
