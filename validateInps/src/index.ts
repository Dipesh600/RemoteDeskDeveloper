import {z} from "zod"

export const userSignUpInps=z.object({
    firstName:z.string(),
    lastName:z.string(),
    email:z.string(),
    password:z.string().min(6),
    phoneNo:z.number().min(10)
})

export const userSigInInps=z.object({
    email:z.string(),
    password:z.string().min(6),
})

export const premiumUserSignUpInps=z.object({
    firstName:z.string(),
    lastName:z.string(),
    email:z.string(),
    password:z.string().min(6),
    phoneNo:z.number().min(10)
})

export const premiumUserSignInInps=z.object({
    email:z.string(),
    password:z.string().min(6),
})

export const ProjectDetails=z.object({
    title:z.string(),
    description:z.string(),
})

export type USignUp=z.infer<typeof userSignUpInps>
export type USignIn=z.infer<typeof userSigInInps>
export type PUserSignUp=z.infer<typeof premiumUserSignUpInps>
export type PUserSignIn=z.infer<typeof premiumUserSignInInps>
export type ProjectDescp=z.infer<typeof ProjectDetails>


