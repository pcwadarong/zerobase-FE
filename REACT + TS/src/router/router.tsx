import { Routes, Route } from 'react-router-dom';
import { memo } from 'react';
import Error from '../pages/Error';
import Index from '../pages/Index';
import Products from '../pages/Products';
import Search from '../pages/Search';
import User from '@/pages/User';
import Detail from '@/pages/Detail';

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
      <Route path="/user/:location" element={<User />} />
    </Routes>
  );
};

export default memo(Router);
