import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { StyledTags } from "../../styles/tags";
import { StyledTitleOne, StyledParagraph } from "../../styles/typography";
import { StyledDiv } from "./style";

interface IReviewList {
  id: number;
  name: string;
  type: string;
  duration: number;
  synopsis: string;
  image: string;
  reviews: IReview[];
}
interface IReview {
  id: number;
  movieId: number;
  userId: number;
  score: number;
  description: string;
}

export const LoadMovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState<IReviewList | null>(null);
  const [score, setScore] = useState<any>(null);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const { data } = await api.get(`/movies/${id}?_embed=reviews`);

        setMovie(data);
        console.log(data);
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    };
    loadMovie();
  }, []);

  useEffect(() => {
    const scoreReviews = () => {
      const totalReviews = movie?.reviews.length || 0;
      const totalScore: number = movie?.reviews
        ? movie.reviews.reduce((sum, review) => sum + +review.score, 0)
        : 0;

      const averageScore = totalReviews > 0 ? totalScore / totalReviews : 0;
      setScore(averageScore.toFixed(1));
    };
    scoreReviews();
  });
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
          <StyledParagraph>
            <span>☆</span> {score}
          </StyledParagraph>
        </div>
      </div>
      <div>
        <StyledParagraph>{movie?.synopsis}</StyledParagraph>
      </div>
    </StyledDiv>
  );
};
