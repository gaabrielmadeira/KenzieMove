import { kenziemovie } from "../../../assets/kenziemovie.svg";

export const ReviewHeader = () => {
  return(
    <header>
      <img src={kenziemovie} alt="logo com o nome do site na cor branca" />

      <div>
        <span></span>
        <button>Sair</button>
      </div>
    </header>
  )
}