import { useContext } from "react";
import { MovieListContext } from "../../../providers/MovieListContext/movieListContext";
import { IMovie } from "../../../providers/MovieListContext/@types";
import { StyledParagraph, StyledTitleOne } from "../../../styles/typography";
import { StyledTags } from "../../../styles/tags";
import { StyledList } from "./style";

interface IMovieProps {
  movie: IMovie;
}

export const ListCardMovie = ({ movie }: IMovieProps) => {
  const { getMovieDetailsWithReviews } = useContext(MovieListContext);

  const handleClick: React.MouseEventHandler<HTMLLIElement> = () => {
    getMovieDetailsWithReviews(movie.id);
  };

  return (
    <StyledList onClick={handleClick}>
      <img src={movie.image} alt="" />
      <div>
        <div>
          <StyledTags>{movie.type}</StyledTags>
          <StyledTitleOne fontSize="large">{movie.name}</StyledTitleOne>
        </div>
        <div>
          <StyledParagraph>{movie.duration} m</StyledParagraph>
        </div>
      </div>
    </StyledList>
  );
};
