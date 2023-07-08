import { createContext, useState } from "react";
import { IReview, IReviewContext, IReviewProviderProps } from "./@types";
import { IReviewForm } from "../../components/ReviewComponents/ReviewForms/AddForm/ReviewFormSchema";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

export const ReviewContext = createContext({} as IReviewContext);

export const ReviewProvider = ({ children }: IReviewProviderProps) => {
  const [reviewList, setReviewList] = useState<IReview[]>([]);

  const [editingReview, setEditingReview] = useState<IReview | null>(null);

  const { id } = useParams();
  const movieId = id ?? "";
  const userId = localStorage.getItem("@USERID") ?? "";


  const addReview = async (
    formData: IReviewForm
  ) => {
    try {
      const token = localStorage.getItem("@TOKEN")

      const newReview = { id: crypto.randomUUID(), movieId, userId, ...formData };

      console.log(newReview)

      const { data } = await api.post("/reviews", newReview, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })

      setReviewList((reviewList) => [...reviewList, data])
      console.log("reviewList")
    } catch (error) {
      console.log(error)
    }
  };


  const deleteReview = async (reviewId: string) => {
    try {
      const token = localStorage.getItem("@TOKEN")

      await api.delete(`/reviews/${reviewId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      setReviewList((reviewList) => reviewList.filter(
        (review) => review.id !== reviewId
      ))
    } catch (error) {
      console.log(error)
    }
  };


  
  const editReview = (formData: IReviewForm, reviewId: string) => {
    setReviewList((reviewList) =>
      reviewList.map((review) => {
        const reviewUpdated = { ...formData };
        if (reviewId === review.id) {
          return { ...review, reviewUpdated };
        } else {
          return review;
        }
      })
    );
  };

  return (
    <ReviewContext.Provider
      value={{
        reviewList,
        addReview,
        deleteReview,
        editReview,
        editingReview,
        setEditingReview,
        setReviewList,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};
