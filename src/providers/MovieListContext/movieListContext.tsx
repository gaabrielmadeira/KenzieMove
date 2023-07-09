import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { IMovie, IMoviesContext, IMoviesProviderProps, IReview } from "./@types";

export const MovieListContext = createContext({} as IMoviesContext);

export function MovieListProvider({ children }: IMoviesProviderProps) {
  const [movieList, setMovieList] = useState<IMovie[]>([]);
  const [selectMovie, setSelectMovie] = useState<IReview | null>(null);

  useEffect(() => {
    const getMoviesToList = async () => {
      try {
        const { data } = await api.get<IMovie[]>("/movies");
        setMovieList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMoviesToList();
  }, []);

  return (
    <MovieListContext.Provider value={{ movieList, selectMovie, setSelectMovie }}>
      {children}
    </MovieListContext.Provider>
  );
}
