import React, { useEffect } from 'react';
import MainRoute from 'navigations/MainRoute';
import { useAppSelector, useAppDispatch } from 'redux/hook';
import { selectStatus, fetchMovieListAsync, setMovieList, selectAllMovieEntries } from 'redux/slices/movieListSlice';

export default function NavigationRoute() {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);
  const allMovieEntries = useAppSelector(selectAllMovieEntries);

  console.log('status', status);

  useEffect(() => {
    const entries = dispatch(fetchMovieListAsync()).unwrap();
    entries.then((response) => {
      dispatch(setMovieList(response.entries));
    });
  }, []);

  const render = () => {
    if (status === 'idle' && allMovieEntries.length > 0) {
      return <MainRoute />;
    }

    return <>loading</>;
  };

  return <React.Fragment>{render()}</React.Fragment>;
}
