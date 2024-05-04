import { Input } from '../ui/input';
import { Button } from '../ui/button';

export default function LoginForm({
  handleUserIDChange,
  handlePasswordChange,
  handleSubmit,
}) {
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
      <Button className="w-full" onClick={handleSubmit}>
        SUBMIT
      </Button>
    </form>
  );
}
