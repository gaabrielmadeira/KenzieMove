import kenziemovie from "../../assets/kenziemovie.svg";
import { StyledHeader } from "./style";

export const Header = () => (
  <StyledHeader>
    <img src={kenziemovie} alt="imagem logo" width="50px" height="50px" />

    <div>
      <button>Cadastre-se</button>
      <button>Entrar</button>
    </div>
  </StyledHeader>
);


