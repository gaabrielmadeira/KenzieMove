import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IMovie } from "../../providers/MovieListContext/@types";
import { ReviewContext } from "../../providers/ReviewsContext/ReviewsContext";
import { api } from "../../services/api";
import { StyledTags } from "../../styles/tags";
import { StyledTitleOne, StyledParagraph } from "../../styles/typography";
import { StyledDiv } from "./style";

export const LoadMovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState<IMovie | null>(null);
  const { setReviewList } = useContext(ReviewContext);

  useEffect(() => {
    const loadMovie = async () => {
      console.log(id);
      try {
        const { data } = await api.get(`/movies/${id}?_embed=reviews`);

        setMovie(data);
        setReviewList(data.reviews);
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    };
    loadMovie();
  }, []);
  return (
    <StyledDiv>
      <img src={movie?.image} alt="" />
      <div>
        <div className="div-title">
          <StyledTags>{movie?.type}</StyledTags>
          <StyledTitleOne fontSize="large">{movie?.name}</StyledTitleOne>
        </div>
        <div className="div-duration">
          <StyledParagraph>{movie?.duration}m</StyledParagraph>
        </div>
      </div>
      <div>
        <StyledParagraph>{movie?.synopsis}</StyledParagraph>
      </div>
    </StyledDiv>
  );
};
