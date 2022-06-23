import React from 'react';
import CategoryCard from './CategoryCard';
import Grid from '@mui/material/Grid';
import { useAppSelector } from 'redux/hook';
import { selectMovieCategories } from 'redux/slices/movieListSlice';

export default function CategoryList() {
  const movieCategories = useAppSelector(selectMovieCategories);

  return (
    <React.Fragment>
      <Grid container spacing={2} md>
        {movieCategories.map((category, index) => {
          return (
            <Grid key={index} item>
              <CategoryCard category={category} />
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
}
