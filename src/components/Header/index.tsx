import { Link } from "react-router-dom";
import kenziemovie from "../../assets/kenziemovie.svg";
import { StyledButton } from "../../styles/buttons";
import { StyledHeader } from "./style";

export const Header = () => (
  <StyledHeader>
    <img className="image" src={kenziemovie} alt="imagem logo" />

    <div>
      <Link to={"/register"}>
        <StyledButton buttonsize="transparent-m">Cadastre-se</StyledButton>
      </Link>
      <Link to={"/login"}>
        <StyledButton buttonsize="medium">Entrar</StyledButton>
      </Link>
    </div>
  </StyledHeader>
);
