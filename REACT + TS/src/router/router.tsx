import { Routes, Route } from 'react-router-dom';
import { memo } from 'react';
import Error from '../pages/Error';
import Index from '../pages/Index';

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Index />} />
    </Routes>
  );
};

export default memo(Router);
