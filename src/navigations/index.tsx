import React, { useEffect } from 'react';
import MainRoute from 'navigations/MainRoute';
import Loading from 'shared/Loading';
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

    if (status === 'failed') {
      return <>Fail to load movie list</>;
    }

    return <Loading />;
  };

  return <React.Fragment>{render()}</React.Fragment>;
}
