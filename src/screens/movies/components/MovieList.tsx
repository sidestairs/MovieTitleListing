import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { useAppSelector } from 'redux/hook';
import { selectMovieByCategory } from 'redux/slices/movieListSlice';
import { MovieObject } from 'redux/slices/movieListSlice';
import MovieDialog from './MovieDialog';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

interface MovieObjectWithFunFacts extends MovieObject {
  funfactsIndex: String;
}

const MovieList = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const [movieListing, setMovieListing] = useState<MovieObject[]>();
  const [currentMovie, setCurrentMovie] = useState<MovieObjectWithFunFacts>();
  const [openMovieDialog, setOpenMovieDialog] = React.useState(false);
  const movieByCategory = useAppSelector(selectMovieByCategory);

  useEffect(() => {
    const movies = movieByCategory(category);
    setMovieListing(movies);
    // eslint-disable-next-line
  }, [category]);

  const handleMovieDialogClose = () => {
    setOpenMovieDialog(false);
  };

  const handleMovieDialogOpen = (entry: MovieObjectWithFunFacts) => {
    setCurrentMovie(entry);
    setOpenMovieDialog(true);
  };

  return (
    <React.Fragment>
      <MovieDialog open={openMovieDialog} handleClose={handleMovieDialogClose} currentMovie={currentMovie} />
      <Box mb={3}>
        <Button startIcon={<ArrowBack />} size="large" variant="text" onClick={() => navigate(-1)}>
          Back
        </Button>
      </Box>
      <Grid container spacing={2}>
        {movieListing &&
          movieListing.map((entry, index) => {
            return (
              <Grid key={index} item xl>
                <MovieCard
                  {...entry}
                  onClick={() => handleMovieDialogOpen({ ...entry, funfactsIndex: index.toString() })}
                />
              </Grid>
            );
          })}
      </Grid>
    </React.Fragment>
  );
};

export default MovieList;
