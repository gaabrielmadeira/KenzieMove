import { styled } from "styled-components";


export const StyledLoginHeader = styled.header`
  margin: 0;
  padding-top: 1.875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .image {
    width: clamp(80px, 100px, 105px);
  }
  
  .buttons-container{
    width: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 15px 0;

  .login-button{
    display: none;
  }

    @media(min-width: 768px){
    .login-button{
      display: block;
    }
  }
  }
`