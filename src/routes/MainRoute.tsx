import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Favorites from '../pages/Favorites';
import Home from '../pages/Home';
import Detail from 'pages/Detail';

/**
 * Main Route for the application
 */
const MainRoute: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/likes' element={<Favorites />} />
      <Route path='/details' element={<Detail />} />
    </Routes>
  );
};

export default MainRoute;