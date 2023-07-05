import kenziemovie from "../../assets/kenziemovie.svg";

export const Header = () => (
  <header>
    <img src={kenziemovie} alt="imagem logo" width="50px" height="50px" />

    <div>
      <button>Cadastre-se</button>
      <button>Entrar</button>
    </div>
  </header>
);


