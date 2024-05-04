import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Separator } from '@radix-ui/react-separator';

import { useSetRecoilState } from 'recoil';
import { isLoginState } from '@/types/Recoil';

export default function MemberInfo() {
  const nav = useNavigate();
  const setIsLogin = useSetRecoilState(isLoginState);
  const userInfo = localStorage.getItem('account');

  const handleLogout = () => {
    localStorage.removeItem('isLogin');
    setIsLogin(false);
    nav('/');
  };

  const handleWithdrawal = () => {
    if (confirm('Do you want to proceed with membership withdrawal? ')) {
      alert('Exited.');
      localStorage.removeItem('account');
      localStorage.removeItem('isLogin');
      setIsLogin(false);
      nav('/');
    }
  };

  let id = '';
  if (userInfo) {
    const parsedUserInfo = JSON.parse(userInfo);
    id = parsedUserInfo.userID;
  }

  return (
    <div>
      <div className="flex flex-col justify-center gap-10 items-center py-20">
        <h1 className="text-xl">My Page</h1>
        <Separator />
        <h1>{`Welcome ${id}`}</h1>
        <Button onClick={handleLogout}>LOGIN OUT</Button>
        <Button onClick={handleWithdrawal}>WITHDRAWAL</Button>
      </div>
    </div>
  );
}
