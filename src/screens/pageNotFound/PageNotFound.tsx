import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/');
  }, 1000);

  return <React.Fragment>Page not found, redirecting you</React.Fragment>;
}
