import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/userContext/userContext";
import { Navigate, Outlet } from "react-router";

export const PublicRoutes = () =>{
  const {userToken, setToken} = useContext(UserContext);

  useEffect(()=> {
  const LogeedRoute = () => {
    setToken(localStorage.getItem("@TOKEN"));
  }
    LogeedRoute()
  },[])

  return !userToken ? <Outlet /> : <Navigate to="/" />
};