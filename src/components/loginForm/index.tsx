import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormSchema, TLoginForm } from "./loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../providers/userContext/userContext";
import { Link } from "react-router-dom";
import { StyledFieldSet, StyledLoginForm } from "./style";
import { StyledInput } from "../../styles/form";
import { StyledMenuItem, StyledParagraph, StyledTitleOne } from "../../styles/typography";
import { StyledButton } from "../../styles/buttons";

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
    <StyledLoginForm onSubmit={handleSubmit(submit)}>
      <StyledTitleOne fontSize="large">Login</StyledTitleOne>
      <StyledFieldSet>
        <StyledInput type="email" inputsize="login" {...register("email")} placeholder="E-mail" />
        {errors.email && <StyledMenuItem color="yellow">{errors.email.message}</StyledMenuItem>}
        <StyledInput type="password" inputsize="login" {...register("password")} placeholder="Senha" />
        {errors.password && <StyledMenuItem color="yellow">{errors.password.message}</StyledMenuItem>}
        <StyledButton buttonsize="login">Entrar</StyledButton>
      </StyledFieldSet>
      <div className="register-container">
        <StyledParagraph>ou</StyledParagraph>
        <Link to="/register">
          <StyledMenuItem color="yellow">Cadastre-se</StyledMenuItem>
        </Link>
      </div>
    </StyledLoginForm>
  )
};