import React, { useEffect } from 'react';
import MainRoute from 'navigations/MainRoute';
import Loading from 'shared/Loading';
import { useAppSelector, useAppDispatch } from 'redux/hook';
import {
  selectStatus,
  fetchMovieListAsync,
  selectAllMovieEntries,
  setMovieList,
  setTotalCount,
} from 'redux/slices/movieListSlice';

export default function NavigationRoute() {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);
  const allMovieEntries = useAppSelector(selectAllMovieEntries);

  useEffect(() => {
    const entries = dispatch(fetchMovieListAsync()).unwrap();
    entries.then((response) => {
      dispatch(setMovieList(response.entries));
      dispatch(setTotalCount(response.total));
    });
  }, []);

  const render = () => {
    if (status === 'idle' && allMovieEntries.length > 0) {
      return <MainRoute />;
    }

    if (status === 'failed') {
      return <>Fail to load movie list</>;
    }

    return <Loading />;
  };

  return <React.Fragment>{render()}</React.Fragment>;
}
