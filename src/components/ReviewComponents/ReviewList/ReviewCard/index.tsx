import { useEffect, useState } from "react";
import { IReview } from "../../../../providers/ReviewsContext/@types";
import { api } from "../../../../services/api";
import {
  StyledParagraph,
  StyledTitleOne,
  StyledMenuItem,
} from "../../../../styles/typography";

import { StyledList } from "./style";
import { StyledFirstLetterTag } from "../../../../styles/tags";

interface IReviewCardProps {
  review: IReview;
}

export const ReviewCard = ({ review }: IReviewCardProps) => {
  const [author, setAuthor] = useState(null);
  const UserName = localStorage.getItem("@USERNAME");
  const firstLetter = UserName ? UserName.charAt(0) : "";

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
      <StyledFirstLetterTag>{firstLetter}</StyledFirstLetterTag>
      <StyledMenuItem><span>☆</span> {review.score}.0</StyledMenuItem>
      <StyledParagraph>"{review.description}"</StyledParagraph>
      <StyledTitleOne fontSize="large">{author}</StyledTitleOne>
    </StyledList>
  );
};
