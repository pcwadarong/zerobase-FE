import { Button } from '@/components/ui/button';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { isLoginState, userAccount } from '@/types/Recoil';
import { useState, useEffect } from 'react';

export default function Account() {
  const setIsLogin = useSetRecoilState(isLoginState);
  const nav = useNavigate();
  const [title, setTitle] = useState('LOG IN');
  const [query, setQuery] = useState('login');
  const [switchBtn, setSwitchBtn] = useState('CREATE A ACCOUNT');

  // const [email, setEmail] = useRecoilState(userAccoun('email'));
  // const [userID, setUserID] = useRecoilState(userAccoun('userID'));
  // const [password, setPassword] = useRecoilState(userAccoun('password'));
  
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const location = useLocation();
  const userInfo = localStorage.getItem('account');

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

  const confirmAccount = () => {
    if (!userID || !password) {
      alert('Please enter both ID and password.');
      return;
    }

    if (userInfo) {
      const parsedUserInfo = JSON.parse(userInfo);
      const savedId = parsedUserInfo.userID;
      const savedPassword = parsedUserInfo.password;

      if (savedId === userID && savedPassword === password) {
        setIsLogin(true);
        nav('/');
        localStorage.setItem('isLogin', 'true');
        return;
      }
    }
    alert('Invalid username or password');
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleUserIDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserID(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !userID || !password) {
      alert('Please fill out all fields.');
      return;
    }

    const isUsernameValid = /^[A-Za-z0-9]+$/.test(userID);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/.test(
      password,
    );

    if (!isUsernameValid) {
      alert('Username must contain only letters and numbers.');
      return;
    }

    if (!isPasswordValid) {
      alert(
        'Password must contain at least 5 characters including letters and numbers.',
      );
      return;
    }

    const accountData = {
      userID: userID,
      password: password,
      email: email,
    };

    localStorage.setItem('account', JSON.stringify(accountData));
    alert('Registration Completed');

    setEmail('');
    setUserID('');
    setPassword('');
    nav(`/member/login`);
  };

  return (
    <div>
      <Nav />
      <div className="pt-28"></div>
      <div className="flex flex-col justify-center gap-10 items-center py-20">
        <h1 className="text-xl">{title}</h1>
        {query === 'login' ? (
          <form action="submit" className="w-96 flex flex-col gap-6">
            <Input
              className="w-full"
              onChange={handleUserIDChange}
              required
              placeholder="ID"
            />
            <Input
              className="w-full"
              onChange={handlePasswordChange}
              type="password"
              required
              placeholder="Password"
            />
            <Button className="w-full" onClick={confirmAccount}>
              SUBMIT
            </Button>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="w-96 flex flex-col gap-6">
            <div>
              <h1>Email</h1>
              <Input
                className="w-full"
                required
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                type="email"
              />
            </div>
            <div>
              <h1>Your ID</h1>
              <Input
                className="w-full"
                required
                placeholder="User ID"
                value={userID}
                onChange={handleUserIDChange}
              />
            </div>
            <div>
              <h1>Password</h1>
              <Input
                className="w-full"
                required
                placeholder="At least 6 characters"
                value={password}
                onChange={handlePasswordChange}
                type="password"
              />
            </div>
            <Button className="w-full">CREATE ACCOUNT</Button>
          </form>
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
