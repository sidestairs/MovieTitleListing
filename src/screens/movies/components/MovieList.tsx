import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import Grid from '@mui/material/Grid';
import { useAppSelector, useAppDispatch } from 'redux/hook';
import { selectMovieByCategory } from 'redux/slices/movieListSlice';
import { MovieObject } from 'redux/slices/movieListSlice';
import MovieDialog from './MovieDialog';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';

const MovieList = () => {
  const { category } = useParams();
  const [movieListing, setMovieListing] = useState<MovieObject[]>();
  const [currentMovie, setCurrentMovie] = useState<MovieObject>();
  const [openMovieDialog, setOpenMovieDialog] = React.useState(false);
  const movieByCategory = useAppSelector(selectMovieByCategory);
  const dispatch = useAppDispatch();

  console.log('category', category);

  useEffect(() => {
    const movies = movieByCategory(category);
    setMovieListing(movies);
  }, [category]);

  const handleMovieDialogClose = () => {
    setOpenMovieDialog(false);
  };

  const handleMovieDialogOpen = (entry: MovieObject) => {
    setCurrentMovie(entry);
    setOpenMovieDialog(true);
  };

  return (
    <React.Fragment>
      <MovieDialog open={openMovieDialog} handleClose={handleMovieDialogClose} currentMovie={currentMovie} />
      <Grid container spacing={2}>
        {movieListing &&
          movieListing.map((entry, index) => {
            return (
              <Grid key={index} item xl>
                <MovieCard {...entry} onClick={() => handleMovieDialogOpen(entry)} />
              </Grid>
            );
          })}
      </Grid>
    </React.Fragment>
  );
};

export default MovieList;
