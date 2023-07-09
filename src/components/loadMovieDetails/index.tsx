import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { StyledTags } from "../../styles/tags";
import { StyledTitleOne, StyledParagraph } from "../../styles/typography";
import { StyledDiv } from "./style";
import { IReviewList } from "../../providers/MovieListContext/@types";


export const LoadMovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectMovie, setSelectMovie] = useState<IReviewList | null>(null);
  const [score, setScore] = useState<any>(null);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const { data } = await api.get(`/movies/${id}?_embed=reviews`);
        setSelectMovie(data);
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    };
    loadMovie();
  }, []);

  useEffect(() => {
    const scoreReviews = () => {
      const totalReviews = selectMovie?.reviews.length || 0;
      const totalScore: number = selectMovie?.reviews
        ? selectMovie.reviews.reduce((sum, review) => sum + +review.score, 0)
        : 0;

      const averageScore = totalReviews > 0 ? totalScore / totalReviews : 0;
      setScore(averageScore.toFixed(1));
    };
    scoreReviews();
  });
  return (
    <StyledDiv>
      <div>
        <div className="div-title">
          <StyledTags>{selectMovie?.type}</StyledTags>
          <StyledTitleOne fontSize="large">{selectMovie?.name}</StyledTitleOne>
        </div>
        <div className="div-duration">
          <StyledParagraph>{selectMovie?.duration}m</StyledParagraph>
          <StyledParagraph>
            <span>☆</span> {score}
          </StyledParagraph>
        </div>
      </div>
    </StyledDiv>
  );
};
