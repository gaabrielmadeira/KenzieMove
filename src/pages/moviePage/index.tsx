import { useState } from "react";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { AddReviewModal } from "../../components/ReviewComponents/ReviewModals/AddModal";
import { EditReviewModal } from "../../components/ReviewComponents/ReviewModals/EditModal";

import { ReviewList } from "../../components/ReviewComponents/ReviewList";
import { LoadMovieDetails } from "../../components/loadMovieDetails";

export const MoviePage = () => {
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  return (
    <>
      <Header />
      <LoadMovieDetails />
      <ReviewList />
      <Footer />

      {isOpenAdd ? <AddReviewModal setIsOpenAdd={setIsOpenAdd} /> : null}

      {isOpenEdit ? <EditReviewModal setIsOpenEdit={setIsOpenEdit} /> : null}
    </>
  );
};
