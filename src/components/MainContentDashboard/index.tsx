import { useContext } from "react";
import { MovieListContext } from "../../providers/MovieListContext/movieListContext";
import { ListCardMovie } from "./ListCardMovie";

export const MainContentDashboard = () => {
  const { movieList } = useContext(MovieListContext);

  return (
    <main>
      <ul>
        {movieList.map((movie) => (
          <ListCardMovie key={movie.id} movie={movie} />
        ))}
      </ul>
    </main>
  );
};
