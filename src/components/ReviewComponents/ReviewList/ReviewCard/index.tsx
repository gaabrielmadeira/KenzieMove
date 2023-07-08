import { useContext, useEffect, useState } from "react";
import { IReview } from "../../../../providers/ReviewsContext/@types";
import { api } from "../../../../services/api";
import {
  StyledParagraph,
  StyledTitleOne,
  StyledTitleThree,
  StyledMenuItem,
} from "../../../../styles/typography";

import { StyledList } from "./style";
import { ReviewContext } from "../../../../providers/ReviewsContext/ReviewsContext";
import { Iuser } from "../../../../providers/userContext/@types";

interface IReviewCardProps {
  review: IReview;
}

export const ReviewCard = ({ review }: IReviewCardProps) => {
  const [author, setAuthor] = useState(null);

  console.log(review.userId);

  useEffect(() => {
    const findAuthor = async () => {
      try {
        const { data } = await api.get(`/users/${review.userId}`);
        setAuthor(data.name);
      } catch (error) {
        console.log(error);
      }
    };
    findAuthor();
  }, []);

  return (
    <StyledList>
      <StyledTitleOne fontSize="large">J</StyledTitleOne>
      <StyledMenuItem><span>☆</span> {review.score}.0</StyledMenuItem>
      <StyledParagraph>"{review.description}"</StyledParagraph>
      <StyledTitleOne fontSize="large">{author}</StyledTitleOne>
    </StyledList>
  );
};
