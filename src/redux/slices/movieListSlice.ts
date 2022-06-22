import { createAsyncThunk, createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { fetchMovieList } from './movieListAPI';

export interface MovieObject {
  title: String;
  description: String;
  programType: String;
  images: {
    'Poster Art': {
      url: String;
      width: Number;
      height: Number;
    };
  };
  releaseYear: Number;
  funFacts?: String;
}

export interface MovieListState {
  total: number;
  status: 'idle' | 'loading' | 'failed';
  entries: MovieObject[];
}

const initialState: MovieListState = {
  total: 0,
  status: 'idle',
  entries: [],
};

export const fetchMovieListAsync = createAsyncThunk('movieList/fetchMovieList', async () => {
  const response = await fetchMovieList();
  return response;
});

export const fetchFunFactsAsync = createAsyncThunk('movieList/fetchMovieList', async () => {
  const response = await fetchMovieList();
  return response;
});

export const movieListSlice = createSlice({
  name: 'movieList',
  initialState,
  reducers: {
    setTotalCount: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    setMovieList: (state, action: PayloadAction<MovieObject[]>) => {
      state.entries = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieListAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovieListAsync.fulfilled, (state, action) => {
        state.status = 'idle';
      })
      .addCase(fetchMovieListAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

// Actions
export const { setTotalCount, setMovieList } = movieListSlice.actions;

// Selectors
export const selectCount = (state: RootState) => state.movieList.total;
export const selectStatus = (state: RootState) => state.movieList.status;
export const selectAllMovieEntries = (state: RootState) => state.movieList.entries;

// Create Selectors
export const selectMovieCategories = createSelector(selectAllMovieEntries, (allMovieEntires) => {
  const unique = Array.from(new Set(allMovieEntires.map((item) => item.programType)));
  return unique;
});

// SELECTS MOVIE VIA PROGRAM TYPE
export const selectMovieByCategory = createSelector(selectAllMovieEntries, (allMovieEntires) => {
  return function callbackFunction(category: String | undefined) {
    return allMovieEntires.filter((item) => item.programType === category);
  };
});

// Reducers
export default movieListSlice.reducer;
