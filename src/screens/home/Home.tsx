import React, { Suspense } from 'react';
import Loading from 'shared/Loading';

const CategoryList = React.lazy(() => import('./components/CategoryList'));

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <CategoryList />
    </Suspense>
  );
}
