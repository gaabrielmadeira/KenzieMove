import { Link } from "react-router-dom";
import kenziemovie from "../../assets/kenziemovie.svg";
import { StyledButton } from "../../styles/buttons";
import { StyledHeader } from "./style";

export const Header = () => (
  <StyledHeader visible="transparent">
    <img src={kenziemovie} alt="imagem logo" width="50px" height="50px" />

    <div>
      <Link to={"/register"}>
        <StyledButton buttonsize="transparent">Cadastre-se</StyledButton>
      </Link>
      <Link to={"/login"}>
        <StyledButton buttonsize="medium">Entrar</StyledButton>
      </Link>
    </div>
  </StyledHeader>
);
