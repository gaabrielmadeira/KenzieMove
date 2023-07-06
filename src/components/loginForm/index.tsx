import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormSchema, TLoginForm } from "./loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../providers/userContext/userContext";
import { Link } from "react-router-dom";
import { StyledFieldSet, StyledLoginForm, StyledMain } from "./style";
import { StyledInput } from "../../styles/form";

export const LoginForm = () => {
  const { register,
    handleSubmit,
    formState: { errors }
  } = useForm<TLoginForm>({
    resolver: zodResolver(LoginFormSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const { userLogin } = useContext(UserContext);

  const submit: SubmitHandler<TLoginForm> = (formData) => {
    userLogin(formData);
  }

  return (
    <StyledMain>
      <StyledLoginForm onSubmit={handleSubmit(submit)}>
        <h1 className="login__title">Login</h1>
        <StyledFieldSet>
          <StyledInput type="email" inputsize="login" {...register("email")} placeholder="E-mail"/>
          {errors.email && <p>{errors.email.message}</p>}
          <StyledInput type="password" inputsize="login" {...register("password")} placeholder="Senha" />
          {errors.password && <p>{errors.password.message}</p>}
          <button>Entrar</button>
        </StyledFieldSet>
        <div className="register__button">
          <p>ou</p>
          <Link to="/register">
            <span>Cadastre-se</span>
          </Link>
        </div>
      </StyledLoginForm>
    </StyledMain>
  )
}