import { styled } from "styled-components";
import loginImage from "../../assets/loginImage.svg";

export const StyledMain = styled.main`
    border: 1px solid red;
    width: 100%;
    height: 934px;

    background-image: url(${loginImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledLoginForm = styled.form`
border: 1px solid red;
  width: clamp(280px, 45%, 659px);
  height: 572px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 2.1875rem;

  .login__title{
    margin-bottom: 1.25rem;
    color: #FFF;
  }

  .register__button{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 0.9375rem;

    margin-top: 1.25rem;
  }

  .register__button> p{
    color: #FFF;
  }
`

export const StyledFieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`