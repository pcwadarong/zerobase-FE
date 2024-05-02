import { Button } from '@/components/ui/button';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

export default function User() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [title, setTitle] = useState('LOG IN');
  const [query, setQuery] = useState('register');
  const [switchBtn, setSwitchBtn] = useState('CREATE A ACCOUNT');

  const handleSwitch = () => {
    const newSwitchBtn = switchBtn === 'login' ? 'create a account' : 'login';
    const newTitle = title === 'LOG IN' ? 'CREATE A ACCOUNT' : 'LOG IN';
    const newQuery = query === 'login' ? 'register' : 'login';
    setQuery(newQuery);
    setTitle(newTitle);
    setSwitchBtn(newSwitchBtn);
    setSearchParams({ link: newQuery });
  };

  return (
    <div>
      <Nav />
      <div className="pt-28"></div>
      <div className="flex flex-col justify-center gap-10 items-center py-20">
        <h1 className="text-xl">{title}</h1>
        {query === 'register' ? (
          <form action="submit" className="w-96 flex flex-col gap-6">
            <Input className="w-full" placeholder="Email Id" />
            <Input className="w-full" placeholder="Password" />
            <Button className="w-full">SUBMIT</Button>
          </form>
        ) : (
          <form action="submit" className="w-96 flex flex-col gap-6">
            <Input className="w-full" placeholder="Email Id" />
            <Input className="w-full" placeholder="Password" />
            <Input className="w-full" placeholder="Password again" />
            <Button className="w-full">CREATE ACCOUNT</Button>
          </form>
        )}
        <div className="flex flex-col items-center">
          <Link to={`/user/${query}`}>
            <Button variant="link" onClick={handleSwitch}>
              {switchBtn}
            </Button>
          </Link>
          <Button variant="link">Forgot your password?</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
