import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import PageNotFound from 'screens/pageNotFound/PageNotFound';

/**
 * All redirection and catchall links will be declared here
 */
export default function CatchAllRoute() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/" />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
