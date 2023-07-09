import { styled } from "styled-components";

export const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 20px 0;
  background: var(--color-grey-2);
  padding: 1rem;
  gap: 20px;
  
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  div {
    display: flex;
    justify-content: space-between;
    p {
      cursor: pointer;
      padding: 5px;
    }
  }

  .insert__review-button{
    width: 140px;
  }
`;
