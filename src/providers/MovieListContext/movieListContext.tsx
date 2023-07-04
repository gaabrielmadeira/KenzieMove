import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { IMovie, IMoviesContext, IMoviesProviderProps } from "./@types";

export const MovieListContext = createContext({} as IMoviesContext);

export function MovieListProvider({ children }: IMoviesProviderProps) {
  const [movieList, setMovieList] = useState<IMovie[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getMoviesToList = async () => {
      try {
        const { data } = await api.get("/movies");

        setMovieList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMoviesToList();
  }, []);

  const getMovieDetailsWithReviews = async (movieId: number) => {
    try {
      await api.get(`/movies/${movieId}?_embed=reviews`);

      navigate("/dashboard/movie");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MovieListContext.Provider
      value={{ movieList, getMovieDetailsWithReviews }}
    >
      {children}
    </MovieListContext.Provider>
  );
}

