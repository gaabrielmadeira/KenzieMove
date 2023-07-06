import { useContext, useState } from "react";
import { ReviewContext } from "../../../providers/ReviewsContext/ReviewsContext";
import { ReviewCard } from "./ReviewCard";

export const ReviewList = () => {
    const { reviewList } = useContext(ReviewContext)
    const { reviewUser, setReviewUser } = useState({})

    return(
        <div>

            <ul>
                { reviewList.map(review => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </ul>
        </div>

    )
}