import { Footer } from "../../components/Footer";
import { LoginForm } from "../../components/loginForm";
import { LoginHeader } from "../../components/loginHeader";
import { StyledContainer, StyledContainerImage, StyledMain } from "./style";

export const LoginPage = () => {
  return (
    <>
      <StyledContainerImage>
        <StyledContainer>
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
