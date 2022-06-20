import React, { useEffect } from 'react';
import CategoryCard from './CategoryCard';
import Grid from '@mui/material/Grid';
import { useAppSelector, useAppDispatch } from 'redux/hook';
import { selectMovieCategories, selectStatus, fetchMovieListAsync, setMovieList } from 'redux/slices/movieListSlice';

export default function MovieList() {
  const dispatch = useAppDispatch();
  const movieCategories = useAppSelector(selectMovieCategories);
  const status = useAppSelector(selectStatus);

  useEffect(() => {
    const entries = dispatch(fetchMovieListAsync()).unwrap();
    entries.then((response) => {
      dispatch(setMovieList(response.entries));
    });
  }, []);

  return (
    <React.Fragment>
      {status === 'loading' ? (
        <>loading</>
      ) : (
        <>
          <Grid container spacing={2}>
            {movieCategories.map((category, index) => {
              return (
                <Grid item xl>
                  <CategoryCard key={index} category={category} />
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
    </React.Fragment>
  );
}
