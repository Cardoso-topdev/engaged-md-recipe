import RecipeTable from 'components/RecipeTable';
import React from 'react';
import MainLayout from '../layouts/MainLayout';

/**
 * Display favorites recipes in the MUI table.
 * Using RecipeTable and set isFavorite prop as true
 */
const Favorites: React.FC = () => {
  return (
    <MainLayout>
      <RecipeTable isFavorite={true} /> 
    </MainLayout>
  );
};

export default Favorites;