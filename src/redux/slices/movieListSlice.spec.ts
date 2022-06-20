import data from '../data/sample.json';
import movieReducer, { MovieListState, setTotalCount, setMovieList, selectCount } from './movieListSlice';

describe('counter reducer', () => {
  const initialState: MovieListState = {
    total: 0,
    status: 'idle',
    entries: [],
  };

  it('should handle initial state', () => {
    expect(movieReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
      entries: [],
    });
  });

  it('should handle setting total', () => {
    const actual = movieReducer(initialState, setTotalCount(data.total));
    expect(actual.total).toEqual(data.total);
  });

  it('should handle setting movie list', () => {
    const actual = movieReducer(initialState, setMovieList(data.entries));
    expect(actual.entries).toEqual(data.entries);
  });
});
