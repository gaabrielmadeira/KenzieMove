import { IMovie } from "../../../providers/MovieListContext/@types";
import { StyledParagraph, StyledTitleOne } from "../../../styles/typography";
import { StyledTags } from "../../../styles/tags";
import { StyledList } from "./style";
import { useNavigate } from "react-router-dom";
useNavigate

interface IMovieProps {
  movie: IMovie;
}

export const ListCardMovie = ({ movie }: IMovieProps) => {
  const navigate = useNavigate();

  const handleClick: React.MouseEventHandler<HTMLLIElement> = () => {
    navigate(`/dashboard/movie/${movie.id}`);
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
