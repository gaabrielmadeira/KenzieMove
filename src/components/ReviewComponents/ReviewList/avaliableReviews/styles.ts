import { styled } from "styled-components";

export const StyledUserReview = styled.section`
  width: clamp(150px, 80vw, 400px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.875rem;
  padding-left: 2%;

  .content{
    padding-left: 3%;
  }

  .div_buttons{
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5px;

    margin-top: 1.875rem;
    margin-bottom: 1.875rem;
  }

  .description{
      width: clamp(260px, 40vw, 600px);
      height: auto;
      word-wrap: break-word;
    }

  @media(min-width: 768px){
    width: 100%;

    .content{
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
    }
    
    .title{
      align-self: flex-start;
      margin-bottom: 2.5rem;
    }
    }
`