import React, { Suspense } from 'react';
import Loading from 'shared/Loading';

const MovieList = React.lazy(() => import('./components/MovieList'));

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <MovieList />
    </Suspense>
  );
}
