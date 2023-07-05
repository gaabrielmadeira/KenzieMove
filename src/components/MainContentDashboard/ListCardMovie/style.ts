import { styled } from "styled-components";

export const StyledList = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;
  cursor: pointer;
  img {
    border-radius: 50px;
  }
  div {
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      flex-direction: column;
    }
  }
  @media (max-width: 1350px) {
    img {
      width: clamp(200px, 100%, 1350px);
    }
  }
`;
