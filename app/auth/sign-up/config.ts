import { z } from "zod";
export const signUpSchema = z.object({
    email:z.string(),
    password:z.string().min(8,{
        message:"Password must be at least 8 characters"
    }),
    confirmPassword:z.string()
})
.refine((data)=>data.password===data.confirmPassword,{
    message:"Passwords don`t match",
    path:["confirmPassword"]
});
