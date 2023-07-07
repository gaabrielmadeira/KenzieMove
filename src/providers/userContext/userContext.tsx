import { createContext, useEffect, useState } from "react";
import { TLoginForm } from "../../components/loginForm/loginFormSchema";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {Iregister, Iuser, IuserProviderProps } from "./@types";
import { TRegisterForm } from "../../components/registerform/registerformschema";

export const UserContext = createContext({} as IuserContext);

interface IuserContext{
  userLogin: (formData: TLoginForm) => void;
  user: Iuser | null;
  userRegister: (formData: TRegisterForm) => Promise<void>;
}

export const UserProvider = ({children}: IuserProviderProps) => {
  const [user, setUser] = useState<Iuser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const id = localStorage.getItem("@USERID");
  
    const AutoLogin = async () => {
      try {
        const {data} = await api.get(`/users/${id}`);
        setUser(data);
      } catch (error) {
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
      }
    }
  
    if (token && id) {
      AutoLogin()
    }
  }, [])

  const userLogin = async (formData: TLoginForm) => {
    try {
      const {data} = await api.post("/login", formData);
      setUser(data.user)
      const token = data.accessToken;
      const UserId = data.user.id;
      localStorage.setItem("@TOKEN", token);
      localStorage.setItem("@USERID", UserId.toString());
      toast.success("Login realizado com sucesso", {
        theme: "dark",
      });
      navigate("/dashboard/movie");        
    } catch (error) {
        toast.error("Email ou senha inválidos", {
          theme: "dark",
        });
    }
  }


  const userRegister = async(formData: TRegisterForm) => {
    try{
      const response = await api.post<Iregister>("/users", formData)
      toast.success("Cadastro realizado com sucesso", {
        theme: "dark",
      })
      navigate("/login")
      
      } catch (error){
        toast.error("algo deu errado", {
          theme: "dark",
        })
      }
    }

    const Logout = () => {
      setUser(null);
      localStorage.removeItem("@TOKEN");
      localStorage.removeItem("USERID");
    }
    
    
  return(
    <UserContext.Provider value={{userLogin, user, userRegister}}>
      {children}
    </UserContext.Provider>
  );
  }