import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMediaExtended from 'shared/CardMediaExtended';

import { MovieObject } from 'redux/slices/movieListSlice';

interface IProps extends MovieObject {
  onClick: () => void;
}

const MovieCard = ({ title, description, images, programType, releaseYear, onClick }: IProps) => {
  return (
    <Card sx={{ height: 300, width: 180, cursor: 'pointer' }} onClick={onClick}>
      <CardMediaExtended {...images['Poster Art']} title={title} mediaHeight={200} />
      <CardContent>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {`${title}`}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {`${releaseYear}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default React.memo(MovieCard);
