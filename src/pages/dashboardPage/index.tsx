import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MainContentDashboard } from "../../components/MainContentDashboard";
import { LoggedHeader } from "../../components/logeedHeader";

export const DashboardPage = () => {
  const token = localStorage.getItem("@TOKEN");

  return (
    <>
      {token ? <LoggedHeader/> : <Header/>}
      <MainContentDashboard />
      <Footer />
    </>
  );
};

