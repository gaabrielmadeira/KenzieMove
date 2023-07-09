import { useEffect, useContext } from "react";
import { ReviewContext } from "../../providers/ReviewsContext/ReviewsContext";
import { useNavigate, useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { AvaliableReviews } from "../../components/ReviewComponents/ReviewList";
import { LoadMovieDetails } from "../../components/loadMovieDetails";
import { api } from "../../services/api";
import { MovieListContext } from "../../providers/MovieListContext/movieListContext";

export const MoviePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { setReviewList } = useContext(ReviewContext);
  const { setSelectMovie } = useContext(MovieListContext);

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
      <div>
        <Header />
        <LoadMovieDetails />
      </div>
      <AvaliableReviews />
      <Footer />
    </>
  );
};
