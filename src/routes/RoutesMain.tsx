import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/loginPage";
import { RegisterPage } from "../pages/registerPage";
import { DashboardPage } from "../pages/dashboardPage";
import { MoviePage } from "../pages/moviePage";
import { UserProvider } from "../providers/userContext";

export const RoutesMain = () => {
  return (
    <Routes>
        <Route path="/login" element={<UserProvider><LoginPage /></UserProvider>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard/movie" element={<MoviePage />} />
    </Routes>
  );
};
