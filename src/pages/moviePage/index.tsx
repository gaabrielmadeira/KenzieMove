import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { AvaliableReviews } from "../../components/ReviewComponents/ReviewList";
import { LoadMovieDetails } from "../../components/loadMovieDetails";

export const MoviePage = () => {
  return (
    <>
      <Header />
      <LoadMovieDetails />
      <AvaliableReviews />
      <Footer />
    </>
  );
};
