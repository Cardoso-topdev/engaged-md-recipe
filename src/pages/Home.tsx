import RecipeTable from 'components/RecipeTable';
import React, { useEffect, useState } from 'react';
import { RecipeApis } from 'service/api-service';
import MainLayout from '../layouts/MainLayout';

const Home: React.FC = () => {
  
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const getRecipes = async (): Promise<void> => {
      try {
        const recipes = await RecipeApis.getRecipes()
        setRecipes(recipes)
      } catch (e: any) {
        console.log('Get Recipes Error : ', e.response?.data?.message)
      }
    }
    getRecipes()
  }, [])

  useEffect(() => {
    console.log(recipes)
  }, [recipes])

  return (
    <MainLayout>
      <RecipeTable recipes={recipes} /> 
    </MainLayout>
  );
};

export default Home;