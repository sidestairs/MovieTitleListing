import React, { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from 'redux/hook';
import { selectMovieList, getMovieList, fetchMovieListAsync } from 'redux/slices/movieListSlice';

export default function MovieList() {
  const count = useAppSelector(selectMovieList);
  const dispatch = useAppDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');
  // const incrementValue = Number(incrementAmount) || 0;

  useEffect(() => {
    const user = dispatch(fetchMovieListAsync()).unwrap();
  });

  return <React.Fragment>MovieList</React.Fragment>;
}
