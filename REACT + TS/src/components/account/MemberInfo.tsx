import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Separator } from '../ui/separator';

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
    if (confirm('Do you want to proceed with membership withdrawal?')) {
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
    <div className="flex justify-center">
      <div
        className="flex flex-col gap-5 p-20 w-full"
        style={{ maxWidth: '1700px' }}
      >
        <h1 className="text-xl font-regular">MY PAGE</h1>
        <p>{`Welcome ${id}`}</p>
        <Separator />
        <div className="flex justify-between border-[1px] border-gray-400 p-5">
          <div className="w-1/2">
            <div className="pb-3">Balance</div>
            <div>Order History</div>
          </div>
          <div className="w-1/2">
            <div className="pb-3">Used</div>
            <div>Coupons</div>
          </div>
        </div>
        <div className="mb-10 border-[1px] border-gray-400 ">
          <div className="bg-gray-200/50 p-3">ORDER STATUS (Last 3 months)</div>
          <div className="flex flex-wrap justify-between text-center items-center p-5">
            <span className="w-full sm:w-1/5">Awaiting Payment</span>
            <span className="w-full sm:w-1/5">Preparing Shipment</span>
            <span className="w-full sm:w-1/5">In Transit</span>
            <span className="w-full sm:w-1/5">Delivered</span>
            <ul className="w-full sm:w-1/5 text-center sm:text-left">
              <li>Cancellations: 0</li>
              <li>Exchanges: 0</li>
              <li>Returns: 0</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center sm:justify-end gap-2">
          <button className="border-[1px] border-gray-400 px-4" onClick={handleLogout}>
            LOGOUT
          </button>
          <Button onClick={handleWithdrawal} variant="link">
            WITHDRAWAL
          </Button>
        </div>
      </div>
    </div>
  );
}
