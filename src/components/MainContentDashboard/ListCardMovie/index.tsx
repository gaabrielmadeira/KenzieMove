import { useContext } from "react";
import { MovieListContext} from "../../../providers/MovieListContext/movieListContext";
import { IMovie } from "../../../providers/MovieListContext/@types";

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

