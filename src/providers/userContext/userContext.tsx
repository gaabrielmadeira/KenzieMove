import { createContext, useState } from "react";
import { TLoginForm } from "../../components/loginForm/loginFormSchema";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Iregister, Iuser, IuserProviderProps } from "./@types";
import { TRegisterForm } from "../../components/registerform/registerformschema";

export const UserContext = createContext({} as IuserContext);

interface IuserContext{
  userLogin: (formData: TLoginForm) => void;
  user: Iuser | undefined;
  userRegister: (formData: TRegisterForm) => Promise<void>
}

export const UserProvider = ({children}: IuserProviderProps) => {
  const [user, setUser] = useState<Iuser | undefined>();
  const navigate = useNavigate();

  const userLogin = async (formData: TLoginForm) => {
    try {
      const response = await api.post<Iuser>("/login", formData);
      toast.success("Login realizado com sucesso", {
        theme: "dark",
      });
      setUser(response.data);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      navigate("/");
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
  
  return(
    <UserContext.Provider value={{userLogin, user, userRegister}}>
      {children}
    </UserContext.Provider>
  );
  }