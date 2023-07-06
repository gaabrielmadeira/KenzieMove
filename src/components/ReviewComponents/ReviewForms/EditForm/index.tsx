import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { reviewFormSchema, IReviewForm } from "./ReviewFormSchema";
import { useContext } from "react";
import { ReviewContext } from "../../../../providers/ReviewsContext/ReviewsContext";


export const ReviewEditForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IReviewForm>({
        resolver: zodResolver(reviewFormSchema) 
    })
    const { editReview } = useContext(ReviewContext)

    const submit: SubmitHandler<IReviewForm> = (formData) => {
        editReview(formData)
    }
    
    return(
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" {...register("description")}/>
            {errors.description ? <p>{errors.description.message}</p> : null}
        </form>
    )
}