import { Routes, Route } from 'react-router-dom';
import { memo } from 'react';
import Error from '../pages/Error';
import Index from '../pages/Index';
import Products from '../pages/Products';
import Search from '../pages/Search';
import Special from '../pages/Special';
import Detail from '@/pages/Detail';

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Index />} />
      <Route path="/products/*" element={<Products />} />
      <Route path="/best" element={<Special index="best" />} />
      <Route path="/new" element={<Special index="new"/>} />
      <Route path="/search" element={<Search />} />
      <Route path="/products/detail/:id" element={<Detail />} />
    </Routes>
  );
};

export default memo(Router);
