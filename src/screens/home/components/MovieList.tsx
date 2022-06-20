import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import Grid from '@mui/material/Grid';
import { useAppSelector, useAppDispatch } from 'redux/hook';
import { selectMovieEntries, selectStatus, fetchMovieListAsync, setMovieList } from 'redux/slices/movieListSlice';

export default function MovieList() {
  console.log('movielist');
  const movieEntries = useAppSelector(selectMovieEntries);
  const status = useAppSelector(selectStatus);

  const dispatch = useAppDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');
  // const incrementValue = Number(incrementAmount) || 0;

  useEffect(() => {
    const entries = dispatch(fetchMovieListAsync()).unwrap();
    entries.then((response) => {
      // console.log('response', response.entries);
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
            <Grid item xs={8}>
              {movieEntries.map((entry, index) => {
                return <MovieCard key={index} {...entry} />;
              })}
            </Grid>
          </Grid>
        </>
      )}
    </React.Fragment>
  );
}
