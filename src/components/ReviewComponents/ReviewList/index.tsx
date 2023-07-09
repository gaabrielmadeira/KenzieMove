import { useContext } from "react";
import { StyledButton } from "../../../styles/buttons";
import { StyledTitleOne } from "../../../styles/typography";
import { EditReviewModal } from "../ReviewModals/EditModal";
import { AddReviewModal } from "../ReviewModals/AddModal";
import { StyledDivForModal } from "./style";
import { ReviewCard } from "./ReviewCard";
import { StyledUl } from "./style";
import { StyledDiv } from "./style";
import { ReviewContext } from "../../../providers/ReviewsContext/ReviewsContext";
import { ReviewUser } from "./avaliableReviews";

export const AvaliableReviews = () => {

  const { reviewList, setIsOpenAdd, isOpenAdd, isOpenEdit, setIsOpenEdit } = useContext(ReviewContext);

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
        
        {userReview !== undefined ? <ReviewUser review={userReview}/>  : null }
        
      </StyledDivForModal>

      <StyledDiv>
        <StyledUl>
          {allReviewsLessUser.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </StyledUl>
      </StyledDiv>

      {isOpenAdd ? <AddReviewModal setIsOpenAdd={setIsOpenAdd} /> : null}
      {isOpenEdit ? <EditReviewModal setIsOpenEdit={setIsOpenEdit}/> : null}
      
    </>
  );
};
