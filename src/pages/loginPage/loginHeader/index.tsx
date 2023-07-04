import { Link } from "react-router-dom";
import Kenziemovie from "../../../assets/kenziemovie.svg";

export const LoginHeader = () => {
  return (
    <header>
      <img src={Kenziemovie} alt="" />
      <div>
        <Link to="/register">
          <span>Cadastre-se</span>
        </Link>
        <button>Entrar</button>
      </div>
    </header>
  )
}