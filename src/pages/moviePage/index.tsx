import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { AddReviewModal } from "../../components/ReviewComponents/ReviewModals/AddModal";
import { EditReviewModal } from "../../components/ReviewComponents/ReviewModals/EditModal";

import { ReviewList } from "../../components/ReviewComponents/ReviewList";
import { LoadMovieDetails } from "../../components/loadMovieDetails";

import { api } from "../../services/api";

export const MoviePage = () => {
  const [isOpenAdd, setIsOpenAdd] = useState(false)
  const [isOpenEdit, setIsOpenEdit] = useState(false)

  const { id } = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState<IMovie | null>(null)

  const { setReviewList } = useContext(ReviewContext)


  useEffect(() => {
    const loadMovie = async () => {
      console.log(id)
      try {
        const { data } = await api.get(`/movies/${id}?_embed=reviews`)

        setMovie(data)
        setReviewList(data.reviews)

      } catch (error) {
        console.log(error)
        navigate("/")
      }
    }
    loadMovie()
  }, [])


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
