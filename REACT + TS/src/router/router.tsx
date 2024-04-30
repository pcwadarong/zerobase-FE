import { Routes, Route } from 'react-router-dom';
import { memo } from 'react';
import Error from '../pages/Error';
import Index from '../pages/Index';
import Products from '../pages/Products';
import Search from '../pages/Search'

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Index />} />
      <Route path="/products" element={<Products />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export default memo(Router);
