import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/loginPage";
import { RegisterPage } from "../pages/registerPage";
import { DashboardPage } from "../pages/dashboardPage";
import { MoviePage } from "../pages/moviePage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/dashboard/movie" element={<MoviePage />} />
    </Routes>
  );
};
