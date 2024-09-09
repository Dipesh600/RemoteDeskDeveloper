import { z } from "zod";
export declare const userSignUpInps: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    phoneNo: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNo: number;
}, {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNo: number;
}>;
export declare const userSigInInps: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const premiumUserSignUpInps: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    phoneNo: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNo: number;
}, {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNo: number;
}>;
export declare const premiumUserSignInInps: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const ProjectDetails: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    description: string;
}, {
    title: string;
    description: string;
}>;
export type USignUp = z.infer<typeof userSignUpInps>;
export type USignIn = z.infer<typeof userSigInInps>;
export type PUserSignUp = z.infer<typeof premiumUserSignUpInps>;
export type PUserSignIn = z.infer<typeof premiumUserSignInInps>;
export type ProjectDescp = z.infer<typeof ProjectDetails>;
