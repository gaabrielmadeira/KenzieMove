import { useContext, useState } from "react";
import { StyledButton } from "../../../styles/buttons";
import { StyledTitleOne } from "../../../styles/typography";
import { EditReviewModal } from "../ReviewModals/EditModal";
import { AddReviewModal } from "../ReviewModals/AddModal";
import { StyledDivForModal } from "./style";
import { ReviewCard } from "./ReviewCard";
import { StyledUl } from "./style";
import { StyledDiv } from "./style";
import { ReviewContext } from "../../../providers/ReviewsContext/ReviewsContext";
import { UserContext } from "../../../providers/userContext/userContext";

export const AvaliableReviews = () => {
  const [isOpenAdd, setIsOpenAdd] = useState<boolean>(false);
  const [isOpenEdit, setIsOpenEdit] = useState<boolean>(false);

  const { reviewList } = useContext(ReviewContext);
  const { user } = useContext(UserContext);

  const userId = localStorage.getItem("@USERID")
 

  const allReviewsLessUser = reviewList.filter(
    (review) => review.userId.toString() !== userId
  );

  const userReview = reviewList.find(
    (review) => review.userId.toString() === userId
  );

  return (
    <>
      <StyledDivForModal>
        <div>
          <StyledTitleOne fontSize="large">Avaliações</StyledTitleOne>
          <StyledButton buttonsize="medium" onClick={() => setIsOpenAdd(true)}>
            ☆ Avaliar
          </StyledButton>
        </div>
      </StyledDivForModal>

      <StyledDiv>
        <StyledUl>
          {allReviewsLessUser.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </StyledUl>
      </StyledDiv>

      {isOpenAdd ? <AddReviewModal setIsOpenAdd={setIsOpenAdd} /> : null}
      {isOpenEdit ? <EditReviewModal setIsOpenEdit={setIsOpenEdit} /> : null}
    </>
  );
};
