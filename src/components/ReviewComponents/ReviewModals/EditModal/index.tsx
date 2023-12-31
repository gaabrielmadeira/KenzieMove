import { useContext, useEffect, useRef } from "react";
import { ReviewContext } from "../../../../providers/ReviewsContext/ReviewsContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  IReviewForm,
  reviewFormSchema,
} from "../../ReviewForms/EditForm/ReviewFormSchema";

import { StyledOverlay } from "../../../../styles/modal";
import { ModalDiv } from "./style";
import { StyledMenuItem, StyledTitleOne } from "../../../../styles/typography";
import { StyledSelect, StyledTextArea } from "../../../../styles/form";
import { StyledButton } from "../../../../styles/buttons";

interface EditReviewModal {
  setIsOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EditReviewModal: React.FC<EditReviewModal> = ({
  setIsOpenEdit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IReviewForm>({
    resolver: zodResolver(reviewFormSchema),
  });

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutClick = (e: { target: any }) => {
      if (!modalRef.current?.contains(e.target)) {
        setIsOpenEdit(false);
      }
    };

    window.addEventListener("mousedown", handleOutClick);

    return () => {
      window.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  const { editReview, reviewList } = useContext(ReviewContext);

  const userId = localStorage.getItem("@USERID");

  const userReview = reviewList.find(
    (review) => review.userId.toString() === userId
  );

  const submit = (formData: { description: string; score: string }) => {
    if (userReview && userReview.id) {
      editReview(formData, userReview.id);
      setIsOpenEdit(false);
    }
  };

  return (
    <StyledOverlay role="dialog">
      <ModalDiv ref={modalRef}>
        <div>
          <StyledTitleOne fontSize="large">Editar Avaliação</StyledTitleOne>
          <StyledMenuItem onClick={() => setIsOpenEdit(false)}>
            X
          </StyledMenuItem>
        </div>

        <form onSubmit={handleSubmit(submit)}>
          <StyledSelect {...register("score")}>
            <option value="">Seleciona uma nota</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </StyledSelect>
          {errors.score ? (
            <StyledMenuItem color="yellow">
              {errors.score.message}
            </StyledMenuItem>
          ) : null}

          <StyledTextArea
            {...register("description")}
            placeholder="Deixe um comentário"
          />
          {errors.description ? (
            <StyledMenuItem color="yellow">
              {errors.description.message}
            </StyledMenuItem>
          ) : null}
          <StyledButton
            className="modify-button"
            buttonsize="medium"
            type="submit"
          >
            ☆ Atualizar
          </StyledButton>
        </form>
      </ModalDiv>
    </StyledOverlay>
  );
};
