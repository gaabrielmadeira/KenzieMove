import { useContext } from "react";
import { IReview } from "../../../../providers/ReviewsContext/@types";
import { ReviewContext } from "../../../../providers/ReviewsContext/ReviewsContext";

interface IReviewCardProps {
    review: IReview
}

export const ReviewUser = ({ review }:IReviewCardProps) => {
    const { deleteReview } = useContext(ReviewContext)

    return(
        <div>
            <h3>Sua avaliação</h3>
            <p>{review.description}</p>
            {/* <button onClick={() => }>Editar</button> */}
            <button onClick={() => deleteReview(review.id)}>Remover</button>
        </div>
    )
}