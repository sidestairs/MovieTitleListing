import data from '../data/sample.json';

// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) => setTimeout(() => resolve({ data: amount }), 500));
}

export const fetchMovieList = async () => {
  // console.log('data', data.entries);

  return data;

  // try {
  //   const response = await fetch('../data/sample.json');
  //   const movies = response.json();
  //   console.log('movies', movies);
  //   return response;
  // } catch (error) {
  //   console.log('error:', error);
  // }
};
