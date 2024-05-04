import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm({
  handleUserIDChange,
  handlePasswordChange,
}) {
    
  const [email, setEmail] = useState('');
  const nav = useNavigate();

  const handleSubmit = (e) => {
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
    <form onSubmit={handleSubmit} className="w-96 flex flex-col gap-6">
      <div>
        <h1>Email</h1>
        <Input
          className="w-full"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
      </div>
      <div>
        <h1>Your ID</h1>
        <Input
          className="w-full"
          required
          placeholder="User ID"
          onChange={handleUserIDChange}
        />
      </div>
      <div>
        <h1>Password</h1>
        <Input
          className="w-full"
          required
          placeholder="At least 6 characters"
          onChange={handlePasswordChange}
          type="password"
        />
      </div>
      <Button className="w-full">CREATE ACCOUNT</Button>
    </form>
  );
}
