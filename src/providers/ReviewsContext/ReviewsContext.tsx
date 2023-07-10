import { createContext, useState } from "react";
import { IReview, IReviewContext, IReviewProviderProps } from "./@types";
import { IReviewForm } from "../../components/ReviewComponents/ReviewForms/AddForm/ReviewFormSchema";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const ReviewContext = createContext({} as IReviewContext);

export const ReviewProvider = ({ children }: IReviewProviderProps) => {
  const [reviewList, setReviewList] = useState<IReview[]>([]);
  const [editingReview, setEditingReview] = useState<IReview | null>(null);

  const { id } = useParams();
  const movieId = id ?? "";
  const userId = localStorage.getItem("@USERID") ?? "";

  const [isOpenAdd, setIsOpenAdd] = useState<boolean>(false);
  const [isOpenEdit, setIsOpenEdit] = useState<boolean>(false);


  const addReview = async (formData: IReviewForm) => {
    try {
      const token = localStorage.getItem("@TOKEN");

      const newReview = {
        id: crypto.randomUUID(),
        movieId,
        userId,
        ...formData,
      };

      const { data } = await api.post("/reviews", newReview, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setReviewList((reviewList) => [...reviewList, data]);
    } catch (error) {
      console.log(error);
      toast.error("Apenas usuários logados podem fazer avaliações", {
        theme: "dark",
      });
    }
  };

  const deleteReview = async (reviewId: string) => {
    try {
      const token = localStorage.getItem("@TOKEN");

      await api.delete(`/reviews/${reviewId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setReviewList((reviewList) =>
        reviewList.filter((review) => review.id !== reviewId)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const editReview = async (formData: IReviewForm, reviewId: string) => {
    try {
      const token = localStorage.getItem("@TOKEN");

      const newReview = {
        id: reviewId,
        movieId,
        userId,
        ...formData,
      };

      const { data } = await api.put(`/reviews/${reviewId}`, newReview, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      setReviewList((reviewList) => reviewList.map((review) => {
        if(review.id === reviewId) {
          return {...review, ...data}
        }
        else {
          return review
        }
      }));
      
    } catch (error) {
      console.log(error)
    }
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
        setIsOpenAdd,
        isOpenAdd,
        isOpenEdit, 
        setIsOpenEdit
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};
