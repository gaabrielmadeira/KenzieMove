import { z } from "zod";

export const reviewFormSchema = z.object({
    score: z.string(),
    description: z
    .string()
    .nonempty("O conteúdo é obrigatório")
})

export type IReviewForm = z.infer<typeof reviewFormSchema>