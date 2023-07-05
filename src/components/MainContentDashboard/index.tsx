import { useContext } from "react";
import { MovieListContext } from "../../providers/MovieListContext/movieListContext";
import { ListCardMovie } from "./ListCardMovie";
import { StyledMain } from "./style";

export const MainContentDashboard = () => {
  const { movieList } = useContext(MovieListContext);

  return (
    <StyledMain>
      <ul>
        {movieList.map((movie) => (
          <ListCardMovie key={movie.id} movie={movie} />
        ))}
      </ul>
    </StyledMain>
  );
};
