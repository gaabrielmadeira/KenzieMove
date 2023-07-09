import { styled } from "styled-components";

export const StyledDivForModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;

`;

export const StyledUl = styled.ul`
  display: flex;
  width: clamp(280px, 100%, 1550px);

  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;

  margin: 0 auto;
  padding: 0 1rem;

  @media(min-width: 875px){
    padding-left: 3%;
    justify-content: space-between;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 15px;
`;

export const StyledReviewTitle = styled.section`
    position: relative;
    width: clamp(280px, 100%, 1550px);
    height: auto;
    padding: 0 1rem;
    margin-bottom: 2.8125rem;
    margin-top: 1.875rem;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 30px;

  .review-button{
    position: absolute;
    right: 0;
    bottom: -8px;
    width: 130px;
    padding: 3px;
  }
`