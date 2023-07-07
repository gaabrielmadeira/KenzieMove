import { IReview } from "../../../../providers/ReviewsContext/@types";

interface IReviewCardProps {
    review: IReview
}

export const ReviewCard = ({review}:IReviewCardProps) => {

    return(
        <li>
            <img src="" alt="" />
            <h2>{review.score}</h2>
            <p>{review.description}</p>
            <p>Nome do autor</p>
        </li>
    )
}