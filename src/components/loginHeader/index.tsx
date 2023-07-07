import { Link } from "react-router-dom";
import { StyledButton } from "../../styles/buttons";
import  kenziemovie  from "../../assets/kenziemovie.svg";
import { StyledLoginHeader } from "./style";

export const LoginHeader = () => (
  <StyledLoginHeader>
    <img className="image" src={kenziemovie} alt="imagem logo" />
    <div className="buttons-container">
      <Link to={"/register"}>
        <StyledButton buttonsize="transparent">Cadastre-se</StyledButton>
      </Link>
      <Link to={"/login"}>
        <StyledButton className="login-button" buttonsize="medium">Entrar</StyledButton>
      </Link>
    </div>
  </StyledLoginHeader>
);