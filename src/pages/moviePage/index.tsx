import { useContext, useEffect, useState } from "react";
import { ReviewContext } from "../../providers/ReviewsContext/ReviewsContext";
// import { ReviewAddForm } from "../../components/ReviewComponents/ReviewForms/AddForm";
// import { MovieListContext } from "../../providers/MovieListContext/movieListContext";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { AddReviewModal } from "../../components/ReviewComponents/ReviewModals/AddModal";
import { EditReviewModal } from "../../components/ReviewComponents/ReviewModals/EditModal";

import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { ReviewList } from "../../components/ReviewComponents/ReviewList";
import { IMovie } from "../../providers/MovieListContext/@types";


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
      <p>{movie?.name}</p>
      <ReviewList />
      <Footer />


      {isOpenAdd ? <AddReviewModal setIsOpenAdd={setIsOpenAdd} /> : null}
      
      {isOpenEdit ? <EditReviewModal setIsOpenEdit={setIsOpenEdit} /> : null}
    </>
  );
};
