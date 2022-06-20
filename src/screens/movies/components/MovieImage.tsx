import React from 'react';
import CardMedia from '@mui/material/CardMedia';

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
  return (
    <React.Fragment>
      <CardMedia component="img" height={`${mediaHeight}`} image={`${url}`} alt={`${title}`} />
    </React.Fragment>
  );
};

export default MovieImage;
