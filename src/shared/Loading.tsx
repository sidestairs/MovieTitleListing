import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import ReactDOM from 'react-dom';

import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
  const [container] = useState(() => {
    return document.createElement('div');
  });

  useEffect(() => {
    // container.classList.add(className)
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(
    <Box
      sx={{
        bgcolor: '#000000',
        opacity: 0.6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      <CircularProgress />
    </Box>,
    container
  );
}
