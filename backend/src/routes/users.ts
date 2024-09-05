import { Router,Request,Response } from "express";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import * as dotenv from 'dotenv';
dotenv.config();



export const userRouter=Router();

userRouter.post("/",(req:Request,res:Response)=>{
    const dburl=process.env.DATABASE_URL;

    const prisma = new PrismaClient({
        datasourceUrl: dburl,
    }).$extends(withAccelerate());

    // figure out this 
    // const body=req.json();

    res.json({
        msg:"user api working"
    })

})
