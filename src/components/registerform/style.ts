import { styled } from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  height: 934px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledRegisterForm = styled.form`
  width: clamp(280px, 100%, 1100px);
  height: 290px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1rem;
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
`;
export const StyledRegisterDiv = styled.div`
  width: clamp(280px, 100%, 1100px);
  height: 140px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 15px;

    .Link {
      position: relative;
      align-self: end;
      bottom: 93px;
      @media (max-width: 328px) {
        bottom: 113px;
      }
    }
  }
`;
