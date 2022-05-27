import { Card, CardActions, CardContent, Chip, IconButton, Stack, Typography } from '@mui/material';
import MainLayout from 'layouts/MainLayout';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { RecipeType, StoreValue } from 'types/recipe';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { like } from 'redux/redux-slice';

/**
 * Recipe detail page. 
 * Showing recipe detail information
 * Need to call API for getting recipe detail info from the backend
 */
const Detail: React.FC = () => {
  const [searchParams] = useSearchParams()
  const recipeId: Number = +(searchParams.get("id") ?? 0)
  const recipes = useSelector((state: StoreValue) => state.recipeReducer.recipes)
  const recipeDetailData: RecipeType = recipes.filter(item => item.id === recipeId)[0]
  const {creatorName, cookingTime, favorite, name, createdAt, ingredients, instructions} = recipeDetailData
  const dispatch = useDispatch()

  return (
    <MainLayout>
      <Card sx={{ maxWidth: '500px', padding: '20px', margin: 'auto' }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant='h4'>{name}</Typography>
          <Typography component={'span'} display='block'>{`Created At: ${createdAt}`}</Typography>
          <Typography component={'span'} display='block'>{`Creator Name: ${creatorName}`}</Typography>
          <Typography component={'span'} display='block'>{`Cooking Time: ${cookingTime}`}</Typography>
          <Stack spacing={1} alignItems="center">
            <Typography variant='h6'>Ingredients</Typography>
            <Stack direction={'row'} spacing={1}>
              {ingredients.map((item, index) => (
                <Chip label={item} color='primary' variant="outlined" key={index}/>
              ))}
            </Stack>
            <Typography variant='h6'>Instructions</Typography>
            <Stack direction={'row'} spacing={1}>
              {instructions.map((item, index) => (
                <Chip label={item} color='primary' variant="outlined" key={index}/>
              ))}
            </Stack>
          </Stack>
        </CardContent>
        <CardActions>
          <IconButton
            color="primary"
            aria-label="like"
            component="span"
            onClick={(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
              event.stopPropagation();
              dispatch(like(recipeDetailData))
            }}
          >
            {favorite ? (<StarIcon />) : (<StarOutlineIcon />)}
          </IconButton>
        </CardActions>
      </Card>
    </MainLayout>
  );
};

export default Detail;