import { useContext, useState } from "react";
import { ReviewContext } from "../../../providers/ReviewsContext/ReviewsContext";
import { ReviewCard } from "./ReviewCard";
import { UserContext } from "../../../providers/userContext/userContext";

export const ReviewList = () => {
    const { reviewList } = useContext(ReviewContext)
    const { user } = useContext(UserContext)
    const { reviewUser, setReviewUser } = useState({})

    return(
        <div>
            <h1>
                Avaliações
            </h1>
            {console.log(reviewList)}

            <p>{user?.user.name}</p>

            <ul>
                { reviewList.map(review => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </ul>
        </div>

    )
}