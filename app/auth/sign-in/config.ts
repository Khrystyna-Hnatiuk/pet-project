import {z} from 'zod'
// import { email } from 'zod/v4'

export const signInSchema =z.object({
    email:z.string(),
    password:z.string().min(8,{
        message:"Password must be at least 8 characters",
    })
})