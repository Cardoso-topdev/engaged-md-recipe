import RecipeTable from 'components/RecipeTable';
import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Favorites: React.FC = () => {
  return (
    <MainLayout>
      <RecipeTable isFavorite={true} /> 
    </MainLayout>
  );
};

export default Favorites;