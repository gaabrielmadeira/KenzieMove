import styled from "styled-components";
import loginImage from "../../assets/loginImage.svg";

export const StyledContainerImage = styled.div`
    background-image: url(${loginImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    display: flex;
    justify-content: center;
`

export const StyledMain = styled.main`
  display: flex;
  justify-content: center;

  margin-top: 5%;

  @media(min-width: 768px){
    justify-content: flex-start;
  }
`