import {z} from 'zod'

export const signinSchema = z.object({
    email: z.string().email("Required a valid Email"),
    password: z.string().min(3, "Required a min 3 characters")
})

export type TSigninSchema = z.infer<typeof signinSchema>
