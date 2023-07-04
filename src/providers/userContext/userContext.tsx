import { createContext, useState } from "react";
import { TLoginForm } from "../../components/loginForm/loginFormSchema";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Iuser, IuserProviderProps } from "./@types";

export const UserContext = createContext({} as IuserContext);

interface IuserContext{
  userLogin: (formData: TLoginForm) => void;
  user: Iuser | undefined
}

export const UserProvider = ({children}: IuserProviderProps) => {
  const [user, setUser] = useState<Iuser | undefined>();
  const navigate = useNavigate();

  const userLogin = async (formData: TLoginForm) => {
    try {
      const response = await api.post<Iuser>("/login", formData);
      toast.success("Login realizado com sucesso");
      setUser(response.data);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      navigate("/register");
    } catch (error) {
       toast.error("Email ou senha inválidos");
    }
  }

  return(
    <UserContext.Provider value={{userLogin, user}}>
      {children}
    </UserContext.Provider>
  )
}