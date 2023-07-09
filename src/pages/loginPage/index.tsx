import { Footer } from "../../components/Footer";
import { LoginForm } from "../../components/loginForm";
import { LoginHeader } from "../../components/loginHeader";
import { StyledContainer } from "../../styles/container";
import { StyledContainerImage, StyledMain } from "./style";

export const LoginPage = () => {
  return (
    <>
      <StyledContainerImage>
        <StyledContainer page="login">
          <LoginHeader />
          <StyledMain>
            <LoginForm />
          </StyledMain>
        </StyledContainer>
      </StyledContainerImage>
      <Footer />
    </>
  )
};
