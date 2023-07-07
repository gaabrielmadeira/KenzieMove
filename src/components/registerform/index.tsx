import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TRegisterForm, registerFormSchema } from "./registerformschema";
import { UserContext } from "../../providers/userContext/userContext";
import { useContext } from "react";
import { StyledInput } from "../../styles/form";
import { StyledMain, StyledRegisterDiv, StyledRegisterForm } from "./style";
import { StyledParagraph, StyledTitleOne } from "../../styles/typography";
import { StyledButton } from "../../styles/buttons";
import { Link } from "react-router-dom";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterForm>({
    resolver: zodResolver(registerFormSchema),
  });

  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<TRegisterForm> = (formData) => {
    userRegister(formData);
  };

  return (
    <StyledMain>
      <StyledRegisterDiv className="first-title">
        <div>
          <StyledTitleOne fontSize="large">Cadastro</StyledTitleOne>
          <StyledParagraph>
            Preencha os campos para cadastrar-se
          </StyledParagraph>
          <Link to={"/"}>
            <StyledButton buttonsize="transparent-yellow">
              ⇐ Voltar
            </StyledButton>
          </Link>
        </div>
      </StyledRegisterDiv>
      <StyledRegisterForm onSubmit={handleSubmit(submit)} noValidate>
        <div>
          <div>
            <StyledInput
              inputsize="register"
              type="text"
              placeholder="Seu nome"
              {...register("name")}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>

          <div>
            <StyledInput
              inputsize="register"
              type="email"
              placeholder="Seu e-mail"
              {...register("email")}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div>
            <StyledInput
              inputsize="register"
              type="password"
              placeholder="Crie uma senha"
              {...register("password")}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <div>
            <StyledInput
              inputsize="register"
              type="password"
              placeholder="Confirme sua senha"
              {...register("confirm")}
            />
            {errors.confirm && <p>{errors.confirm.message}</p>}
          </div>
        </div>

        <StyledButton buttonsize="large" type="submit">
          Cadastrar-se
        </StyledButton>
      </StyledRegisterForm>
    </StyledMain>
  );
};
