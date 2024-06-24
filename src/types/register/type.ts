import { z } from 'zod'

export const registerSchema = z.object({
    email: z.string().email("Required a valid Email"),
    password: z.string().min(3, "Required a min 3 characters"),
    cpf: z.string().min(11, "Required number cpf").max(14),
    code: z.string().optional()
})

export type TRegisterSchema = z.infer<typeof registerSchema>
