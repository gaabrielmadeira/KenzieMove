import { useContext, useEffect, useRef } from "react";
import { ReviewContext } from "../../../../providers/ReviewsContext/ReviewsContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  IReviewForm,
  reviewFormSchema,
} from "../../ReviewForms/AddForm/ReviewFormSchema";
import { StyledOverlay } from "../../../../styles/modal";
import { ModalDiv } from "./style";
import { StyledMenuItem, StyledTitleOne } from "../../../../styles/typography";
import { StyledSelect, StyledTextArea } from "../../../../styles/form";
import { StyledButton } from "../../../../styles/buttons";

interface AddReviewModalProps {
  setIsOpenAdd: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddReviewModal: React.FC<AddReviewModalProps> = ({
  setIsOpenAdd,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IReviewForm>({
    resolver: zodResolver(reviewFormSchema),
  });
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutClick = (e: MouseEvent) => {
      const targetNode = e.target as Node;
      if (!modalRef.current?.contains(targetNode)) {
        setIsOpenAdd(false);
      }
    };

    window.addEventListener("mousedown", handleOutClick);

    return () => {
      window.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  const { addReview } = useContext(ReviewContext);


  const submit = async (formData: IReviewForm) => {
    addReview(formData)
    setIsOpenAdd(false)
  };

  return (
    <StyledOverlay role="dialog">
      <ModalDiv ref={modalRef}>
        <div>
          <StyledTitleOne fontSize="large">Avaliação</StyledTitleOne>
          <StyledMenuItem onClick={() => setIsOpenAdd(false)}>X</StyledMenuItem>
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
          <StyledButton className="insert__review-button" buttonsize="medium" type="submit">
            ☆ Avaliar
          </StyledButton>
        </form>
      </ModalDiv>
    </StyledOverlay>
  );
};
