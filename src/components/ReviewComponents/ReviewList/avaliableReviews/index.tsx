import { useContext } from "react";
import { IReview } from "../../../../providers/ReviewsContext/@types";
import { ReviewContext } from "../../../../providers/ReviewsContext/ReviewsContext";
import { StyledMenuItem, StyledParagraph } from "../../../../styles/typography";
import { StyledUserReview } from "./styles";
import { AiOutlineStar } from "react-icons/ai";
import { TiPencil } from "react-icons/ti";
import { BsFillTrash3Fill } from "react-icons/bs";

interface IReviewCardProps {
  review: IReview
}

export const ReviewUser = ({ review }: IReviewCardProps) => {
  const { deleteReview, setIsOpenEdit } = useContext(ReviewContext)

  return (
    <>
      <StyledUserReview>
        <div className="content">
          <div className="div_buttons">
            <AiOutlineStar style={{ color: "var(--color-yellow)" }} /><StyledMenuItem>{review.score}.0</StyledMenuItem>
            <button onClick={() => setIsOpenEdit(true)}><TiPencil style={{ color: "var(--color-yellow)" }} /></button>
            <button onClick={() => deleteReview(review.id)}><BsFillTrash3Fill style={{ color: "var(--color-yellow)" }} /></button>
          </div>
          <StyledParagraph>{review.description}</StyledParagraph>
        </div>
      </StyledUserReview>
    </>
  )
}