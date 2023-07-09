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
  selectMovie: IReview | null;
  setSelectMovie: React.Dispatch<React.SetStateAction<IReview | null>>;
}

export interface IReviewList{
  id: number;
  name: string;
  type: string;
  duration: number;
  synopsis: string;
  image: string;
  reviews: IReview[];
}

export interface IReview{
  id: number;
  movieId: number;
  userId: number;
  score: number;
  description: string;
}

