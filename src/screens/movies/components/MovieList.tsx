import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import Grid from '@mui/material/Grid';
import { useAppSelector, useAppDispatch } from 'redux/hook';
import { selectMovieByCategory } from 'redux/slices/movieListSlice';
import { MovieObject } from 'redux/slices/movieListSlice';

import { useParams } from 'react-router-dom';

export default function MovieList() {
  const { category } = useParams();
  const [movieList, setMovieList] = useState<MovieObject[]>();
  const movieByCategory = useAppSelector(selectMovieByCategory);
  const dispatch = useAppDispatch();

  console.log('category', category);

  useEffect(() => {
    setMovieList(movieByCategory(category));
  }, [category]);

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {movieList &&
          movieList.map((entry, index) => {
            return (
              <Grid item xl>
                <MovieCard key={index} {...entry} />
              </Grid>
            );
          })}
      </Grid>
    </React.Fragment>
  );
}
