import { styled } from "styled-components";

export const StyledDivForModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: clamp(280px, 100%, 1550px);
    padding: 0 1rem;
    gap: 30px;

    @media(min-width: 750px){
      flex-direction: row;
    }
  }
`;


export const StyledUl = styled.ul`
  display: flex;
  width: clamp(280px, 100%, 1550px);

  flex-wrap: wrap;
  gap: 30px;

  margin: 0 auto;
  padding: 0 1rem;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 15px;
`;
