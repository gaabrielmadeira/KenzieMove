export interface IMovie {
  id: number;
  name: string;
  type: string;
  duration: number;
  synopsis: string;
  image: string;
}

export interface IMoviesProviderProps {
  children: React.ReactNode;
}

export interface IMoviesContext {
  movieList: IMovie[];
  getMovieDetailsWithReviews: (movieId: number) => void;
}