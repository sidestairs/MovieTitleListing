// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) => setTimeout(() => resolve({ data: amount }), 500));
}

export const fetchMovieList = async () => {
  try {
    const response = await fetch('../data/sample.json');
    const movies = response.json();
    console.log('movies', movies);
    return response;
  } catch (error) {
    console.log('error:', error);
  }
};
