import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Favorites from '../pages/Favorites';
import Home from '../pages/Home';

const MainRoute: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/likes' element={<Favorites />} />
    </Routes>
  );
};

export default MainRoute;