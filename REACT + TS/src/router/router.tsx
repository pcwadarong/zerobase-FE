import { Routes, Route } from 'react-router-dom';
import Error from '../pages/Error';
import Index from '../pages/Index';
import Products from '../pages/Products';
import Search from '../pages/Search';
import Account from '@/pages/Account';
import Member from '@/pages/Member';
import Detail from '@/pages/Detail';
import Cart from '@/pages/Cart';

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Index />} />
      <Route path="/products/*" element={<Products index="category" />} />
      <Route path="/best" element={<Products index="best" />} />
      <Route path="/new" element={<Products index="new" />} />
      <Route path="/search" element={<Search />} />
      <Route path="/products/detail/:id" element={<Detail />} />
      <Route path="/member/:action" element={<Account />} />
      <Route path="/member/info" element={<Member />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Router;
