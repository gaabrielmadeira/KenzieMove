import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TRegisterForm, registerFormSchema } from "./registerformschema";
import { UserContext } from "../../providers/userContext/userContext";
import { useContext } from "react";


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
      <form onSubmit={handleSubmit(submit)} noValidate>
         <input
            type="text"
            placeholder="Seu nome"
            {...register("name")}/>
            {errors.name && <p>{errors.name.message}</p>}
         

          <input
            type="email"
            placeholder="Seu e-mail"
            {...register("email")}/>
            {errors.email && <p>{errors.email.message}</p>}
         

         <input
            type="password"
            placeholder="Crie uma senha"
            {...register("password")} />
            {errors.password && <p>{errors.password.message}</p>}
        

         <input
            type="password"
            placeholder="Confirme sua senha"
            {...register("confirm")}/>
            {errors.confirm && <p>{errors.confirm.message}</p>}
          

         <button type="submit">Cadastra-se</button>
      </form>
   );
};