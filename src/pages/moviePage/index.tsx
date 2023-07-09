import { useEffect, useContext } from "react";
import { ReviewContext } from "../../providers/ReviewsContext/ReviewsContext";
import { useNavigate, useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { AvaliableReviews } from "../../components/ReviewComponents/ReviewList";
import { LoadMovieDetails } from "../../components/loadMovieDetails";
import { api } from "../../services/api";
import { MovieListContext } from "../../providers/MovieListContext/movieListContext";
import { StyledMovieImage } from "./style";
import { SinopseMovie } from "../../components/sinopseMovie";
import { StyledContainer } from "../../styles/container";
import { UserContext } from "../../providers/userContext/userContext";
import { LoggedHeader } from "../../components/logeedHeader";

export interface IBackgroundImageProps {
  backgroundImage: string | undefined;
}

export const MoviePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { setReviewList } = useContext(ReviewContext);
  const { setSelectMovie, selectMovie } = useContext(MovieListContext);
  const { userToken } = useContext(UserContext);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const { data } = await api.get(`/movies/${id}?_embed=reviews`);

        setSelectMovie(data);
        setReviewList(data.reviews);
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    };
    loadMovie();
  }, []);

  return (
    <>
      <StyledMovieImage backgroundImage={selectMovie?.image}>
        {userToken ? <LoggedHeader /> : <Header />}
        <StyledContainer>
          <LoadMovieDetails />
        </StyledContainer>
      </StyledMovieImage>
      <StyledContainer>
        <SinopseMovie />
        <AvaliableReviews />
      </StyledContainer>
      <Footer />
    </>
  );
};
