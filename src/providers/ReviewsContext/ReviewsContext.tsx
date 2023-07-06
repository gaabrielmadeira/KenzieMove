import { createContext, useState } from "react";
import { IReview, IReviewContext, IReviewProviderProps } from "./@types";
import { IReviewForm } from "../../components/ReviewComponents/ReviewForms/AddForm/ReviewFormSchema";

export const ReviewContext = createContext({} as IReviewContext);


export const ReviewProvider = ({ children }: IReviewProviderProps) => {

    const [reviewList, setReviewList] = useState<IReview[]>([]);
    const [editingReview, setEditingReview] = useState<IReview | null>(null)


    const addReview = (formData: IReviewForm, movieId: string, userId: string) => {
        const newReview = { id: crypto.randomUUID(), movieId, userId, ...formData};
        setReviewList((reviewList) => [...reviewList, newReview]);
    }


    const deleteReview = (reviewId: string) => {
        if(confirm("Você deseja mesmo excluir esta análise?")){
            setReviewList((reviewList) => reviewList.filter(review => review.id !== reviewId))
        }
    }

    
    const editReview = (formData: IReviewForm, reviewId: string) => {
        setReviewList((reviewList) => reviewList.map(review => {
            const reviewUpdated = { ...formData}
            if(reviewId === review.id){
                return{ ...review, reviewUpdated}
            }
            else {
                return review
            }
        }))
    }

    return(
        <ReviewContext.Provider value={{reviewList, addReview, deleteReview, editReview, editingReview, setEditingReview}}>
            {children}
        </ReviewContext.Provider>
    )
}