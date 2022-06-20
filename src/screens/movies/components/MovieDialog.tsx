import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { MovieObject } from 'redux/slices/movieListSlice';
import CardMedia from '@mui/material/CardMedia';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

interface IProps {
  open: boolean;
  handleClose: () => void;
  currentMovie: MovieObject | undefined;
}

export default function MovieDialog({ open, handleClose, currentMovie }: IProps) {
  return (
    <div>
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {currentMovie?.title}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <CardMedia
            component="img"
            height="194"
            image={`${currentMovie?.images['Poster Art'].url}`}
            alt={`${currentMovie?.title}`}
          />
          <Typography gutterBottom>{currentMovie?.description}</Typography>
        </DialogContent>
        <DialogActions>
          <Typography gutterBottom>{`Release Year: ${currentMovie?.releaseYear}`}</Typography>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
