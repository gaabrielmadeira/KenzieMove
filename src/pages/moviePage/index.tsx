import { useState, useEffect, useContext } from "react";
import { ReviewContext } from "../../providers/ReviewsContext/ReviewsContext";
import { useNavigate, useParams } from "react-router-dom";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { AvaliableReviews } from "../../components/ReviewComponents/ReviewList";
import { LoadMovieDetails } from "../../components/loadMovieDetails";

import { api } from "../../services/api";
import { IMovie } from "../../providers/MovieListContext/@types";

export const MoviePage = () => {
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

  console.log(movie)

  return (
    <>
      <Header />
      <LoadMovieDetails />
      <AvaliableReviews />
      <Footer />
    </>
  );
};
