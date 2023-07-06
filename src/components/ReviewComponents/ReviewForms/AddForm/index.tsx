import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { reviewFormSchema, IReviewForm } from "./ReviewFormSchema";
import { useContext } from "react";
import { ReviewContext } from "../../../../providers/ReviewsContext/ReviewsContext";


export const ReviewAddForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IReviewForm>({
        resolver: zodResolver(reviewFormSchema)
    })
    const { addReview } = useContext(ReviewContext)

    const submit: SubmitHandler<IReviewForm> = (formData) => {
        addReview(formData)
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            {/* <select {...register("description")}/> */}
            <input type="text" {...register("description")}/>
            {errors.description? <p>{errors.description.message}</p> : null}
        </form>
    )
}