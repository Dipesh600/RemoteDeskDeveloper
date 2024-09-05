import { Router,Request,Response } from "express";

export const premiumUserRouter=Router();

premiumUserRouter.post("/",(req:Request,res:Response)=>{
    res.json({
        msg:"api check for premium users"
    })
})