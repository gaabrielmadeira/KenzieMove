import { useContext, useEffect } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MainContentDashboard } from "../../components/MainContentDashboard";
import { LoggedHeader } from "../../components/logeedHeader";
import { UserContext } from "../../providers/userContext/userContext";

export const DashboardPage = () => {
  const {userToken, setToken} = useContext(UserContext);

  useEffect(()=> {
  const HeaderAtt = () => {
    setToken(localStorage.getItem("@TOKEN"));
  }
    HeaderAtt()
  },[])

  return (
    <>
      { userToken ? <LoggedHeader /> : <Header />}
      <MainContentDashboard />
      <Footer />
    </>
  );
};


