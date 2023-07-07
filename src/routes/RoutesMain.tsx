import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/loginPage";
import { RegisterPage } from "../pages/registerPage";
import { DashboardPage } from "../pages/dashboardPage";
import { MoviePage } from "../pages/moviePage";
import { MovieListProvider } from "../providers/MovieListContext/movieListContext";
import { UserProvider } from "../providers/userContext/userContext";
import { ReviewProvider } from "../providers/ReviewsContext/ReviewsContext";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={
        <UserProvider>
          <LoginPage />
        </UserProvider>} />
      <Route path="/register" element={
        <UserProvider>
          <RegisterPage />
        </UserProvider>
      } />

      <Route
        path="/"
        element={
          <MovieListProvider>
            <DashboardPage />
          </MovieListProvider>
        }
      />
      <Route
        path="/dashboard/movie/:id"
        element={
          <ReviewProvider>
            <MoviePage />
          </ReviewProvider>
        }
      />
    </Routes>
  );
};

