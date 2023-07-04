import { useContext } from "react";
import {
  IMovie,
  MovieListContext,
} from "../../../providers/MovieListContext/movieListContext";

interface IMovieProps {
  movie: IMovie;
}

export const ListCardMovie = ({ movie }: IMovieProps) => {
  const { getMovieDetailsWithReviews } = useContext(MovieListContext);

  const handleClick: React.MouseEventHandler<HTMLLIElement> = () => {
    getMovieDetailsWithReviews(movie.id);
  };

  return (
    <li onClick={handleClick}>
      <img src={movie.image} alt="" />
      <div>
        <div>
          <p>{movie.type}</p>
          <p>{movie.name}</p>
        </div>
        <div>
          <p>{movie.duration}</p>
        </div>
      </div>
    </li>
  );
};
