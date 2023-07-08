import { useContext } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MainContentDashboard } from "../../components/MainContentDashboard";
import { LoggedHeader } from "../../components/logeedHeader";
import { UserContext } from "../../providers/userContext/userContext";

export const DashboardPage = () => {
  const {userToken} = useContext(UserContext);

  return (
    <>
      {userToken ? <LoggedHeader /> : <Header />}
      <MainContentDashboard />
      <Footer />
    </>
  );
};


