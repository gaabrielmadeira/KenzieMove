import { z } from "zod";

export const reviewFormSchema = z.object({
    score: z.string().nonempty("A nota é obrigatória"),
    description: z
    .string()
    .nonempty("O conteúdo é obrigatório")
})

export type IReviewForm = z.infer<typeof reviewFormSchema>