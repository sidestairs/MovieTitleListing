import React, { useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import CardMedia from '@mui/material/CardMedia';
import movieposterplaceholder from 'assets/movieposterplaceholder.png';

interface IProps {
  url: String;
  width: Number;
  height: Number;
  title: String;
  mediaHeight: Number;
}

const MovieImage = ({ url, width, height, title, mediaHeight = 200 }: IProps) => {
  const [hasImageLoaded, setHasImageLoaded] = useState(false);

  const handleImageError = (e: any) => {
    e.target.onerror = null;
    e.target.src = movieposterplaceholder;
  };

  return (
    <React.Fragment>
      {!hasImageLoaded && <Skeleton variant="rectangular" animation="wave" height={`${mediaHeight}px`} />}
      <CardMedia
        component="img"
        height={`${mediaHeight}`}
        image={`${url}`}
        alt={`${title}`}
        onLoad={() => setHasImageLoaded(true)}
        onError={handleImageError}
        loading="lazy"
        sx={{
          opacity: hasImageLoaded ? 1.0 : 0,
        }}
      />
    </React.Fragment>
  );
};

export default MovieImage;
