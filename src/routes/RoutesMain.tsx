import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/loginPage";
import { RegisterPage } from "../pages/registerPage";
import { DashboardPage } from "../pages/dashboardPage";
import { MoviePage } from "../pages/moviePage";
import { MovieListProvider } from "../providers/MovieListContext/movieListContext";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route
        path="/"
        element={
          <MovieListProvider>
            <DashboardPage />
          </MovieListProvider>
        }
      />
      <Route
        path="/dashboard/movie"
        element={
          <MovieListProvider>
            <MoviePage />
          </MovieListProvider>
        }
      />
    </Routes>
  );
};
