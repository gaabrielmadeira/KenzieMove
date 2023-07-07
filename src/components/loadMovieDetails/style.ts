import { styled } from "styled-components";
export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  img {
    width: 100%;
    border-radius: 85px;
  }
  > div {
    display: flex;
    justify-content: space-between;
    width: clamp(280px, 100%, 1550px);
    padding: 0 1rem;
    .div-title {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    .div-duration {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }
`;
