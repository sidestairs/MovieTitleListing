import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import movieposterplaceholder from 'assets/movieposterplaceholder.png';

const MovieImage = ({
  url,
  width,
  height,
  title,
  mediaHeight = 200,
}: {
  url: String;
  width: Number;
  height: Number;
  title: String;
  mediaHeight: Number;
}) => {
  const handleImageError = (e: any) => {
    e.target.onerror = null;
    e.target.src = movieposterplaceholder;
  };

  return (
    <React.Fragment>
      <CardMedia
        component="img"
        height={`${mediaHeight}`}
        image={`${url}`}
        alt={`${title}`}
        onError={handleImageError}
      />
    </React.Fragment>
  );
};

export default MovieImage;
