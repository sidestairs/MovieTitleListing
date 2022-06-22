import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import movieListReducer from 'redux/slices/movieListSlice';
import { funFactsApi } from './services/funFacts';

export const store = configureStore({
  reducer: {
    movieList: movieListReducer,
    [funFactsApi.reducerPath]: funFactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(funFactsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

setupListeners(store.dispatch);
