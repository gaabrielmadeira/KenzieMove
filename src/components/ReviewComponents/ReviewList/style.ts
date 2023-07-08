import { styled } from "styled-components";

export const StyledDivForModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: clamp(280px, 100%, 1550px);
    padding: 0 1rem;
  }
`;
