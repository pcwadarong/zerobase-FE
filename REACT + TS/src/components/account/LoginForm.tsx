import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { isLoginState, userIDState, passwordState } from '@/types/Recoil';
import { FormProps } from '@/types/globalTypes';

export default function LoginForm(props: FormProps) {
  const { handleUserIDChange, handlePasswordChange } = props;
  const userID = useRecoilValue(userIDState);
  const password = useRecoilValue(passwordState);
  const userInfo = localStorage.getItem('account');
  const setIsLogin = useSetRecoilState(isLoginState);
  const nav = useNavigate();

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

  return (
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
  );
}
