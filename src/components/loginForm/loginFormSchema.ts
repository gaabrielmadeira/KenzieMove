import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z
  .string()
  .nonempty("O email é obrigatório"),
  password: z
  .string()
  .nonempty("Por favor preencha a senha"),
})

export type TLoginForm = z.infer<typeof LoginFormSchema>;