import { useContext } from "react";
import { ReviewContext } from "../../../providers/ReviewsContext/ReviewsContext";
import { ReviewCard } from "./ReviewCard";
import { UserContext } from "../../../providers/userContext/userContext";
import { StyledUl } from "./style";
import { StyledDiv } from "./style";

export const ReviewList = () => {
  const { reviewList } = useContext(ReviewContext);
  const { user } = useContext(UserContext);

  const allReviewsLessUser = reviewList.filter(
    (review) => review.userId.toString() !== user?.user.id.toString()
  );

  const userReview = reviewList.find(
    (review) => review.userId.toString() === user?.user.id.toString()
  );



  return (
    <StyledDiv>
      <h1>Avaliações</h1>

      <p>{user?.user.name}</p>

      {/* { reviewList.map(review => (
                    <ReviewCard key={review.id} review={review} />
                ))} */}

      <StyledUl>
        {allReviewsLessUser.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
          />
        ))}
      </StyledUl>
    </StyledDiv>
  );
};
