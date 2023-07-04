import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormSchema, TLoginForm } from "./loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../../providers/userContext";
import { Link } from "react-router-dom";

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
    <main>
      <form onSubmit={handleSubmit(submit)}>
        <h1>Login</h1>
        <fieldset>
          <input type="email" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
          <input type="password" {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}
          <button>Entrar</button>
        </fieldset>
        <div>
          <p>ou</p>
          <Link to="/register">
            <span>Cadastre-se</span>
          </Link>
        </div>
      </form>
    </main>
  )
}