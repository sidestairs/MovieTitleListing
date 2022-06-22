import data from '../data/sample.json';

// export function fetchCount(amount = 1) {
//   return new Promise<{ data: number }>((resolve) => setTimeout(() => resolve({ data: amount }), 500));
// }

export const fetchMovieList = async () => {
  return data;
};
