import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Separator } from '@radix-ui/react-separator';

import { useSetRecoilState } from 'recoil';
import { isLoginState, userAccount } from '@/types/Recoil';

export default function Register() {
  const nav = useNavigate();
  const setIsLogin = useSetRecoilState(isLoginState);
  const setUserAccount = useSetRecoilState(userAccount);

  const handleLogout = () => {
    localStorage.removeItem('account');
    localStorage.removeItem('isLogin');
    setIsLogin(false);
    
    setUserAccount({
      'userID': '',
      'password': '',
      'email': '',
    });
    nav('/');
  };

  return (
    <div>
      <div className="flex flex-col justify-center gap-10 items-center py-20">
        <h1 className="text-xl">My Page</h1>
        <Separator />
        <Button onClick={handleLogout}>Register</Button>
      </div>
    </div>
  );
}
