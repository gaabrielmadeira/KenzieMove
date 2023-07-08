import { useState } from "react";
import { StyledButton } from "../../../styles/buttons";
import { StyledTitleOne } from "../../../styles/typography";
import { EditReviewModal } from "../ReviewModals/EditModal";
import { AddReviewModal } from "../ReviewModals/AddModal";
import { StyledDivForModal } from "./style";

export const AvaliableReviews = () => {
  const [isOpenAdd, setIsOpenAdd] = useState<boolean>(false);
  const [isOpenEdit, setIsOpenEdit] = useState<boolean>(false);

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

      {isOpenAdd ? <AddReviewModal setIsOpenAdd={setIsOpenAdd} /> : null}
      {isOpenEdit ? <EditReviewModal setIsOpenEdit={setIsOpenEdit} /> : null}
    </>
  );
};
