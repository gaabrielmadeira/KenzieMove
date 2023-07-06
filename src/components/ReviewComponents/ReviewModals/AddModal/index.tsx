import { useContext } from "react";
import { ReviewContext } from "../../../../providers/ReviewsContext/ReviewsContext";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { IReviewForm, reviewFormSchema } from "../../ReviewForms/AddForm/ReviewFormSchema";


export const AddReviewModal = () => {  
    const { register, handleSubmit, formState: { errors } } = useForm<IReviewForm>({
    resolver: zodResolver(reviewFormSchema)
    });
    
    const { addReview } = useContext(ReviewContext)


    return(
        <div role="dialog">
            <div>
                <form>
                    <h1>Avaliação</h1>
                    <select {...register("score")}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input type="text" {...register("description")}/>
                </form>
            </div>
        </div>
    )
}