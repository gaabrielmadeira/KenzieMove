import { useContext } from "react";
import { StyledParagraph } from "../../styles/typography";
import { MovieListContext } from "../../providers/MovieListContext/movieListContext";
import { StyledSynopse } from "./style";

export const SinopseMovie = () => {
  const { selectMovie } = useContext(MovieListContext);
  return (
    <StyledSynopse>
      <StyledParagraph>{selectMovie?.synopsis}</StyledParagraph>
    </StyledSynopse>
  )
}