import { Router,Request,Response } from "express";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {userSignUpInps} from "@remotedeskdevelopers/ag"
import { userSigInInps } from "@remotedeskdevelopers/ag";
import * as dotenv from 'dotenv';
dotenv.config();

enum StCode{
    NotFound=404,
    OK=200,
    Found=302,
    UnAuthorized=401,
    InternalServerError=500

}



export const userRouter=Router();

userRouter.post("/",(req:Request,res:Response)=>{
    const dburl=process.env.DATABASE_URL;

    const prisma = new PrismaClient({
        datasourceUrl: dburl,
    }).$extends(withAccelerate());

    // figure out this 
    const body=req.body();
    const {success}=userSignUpInps.safeParse(body);
    // this will parse the inputs 
    if(success){
        res.json({msg:StCode.OK})

    }else{
        // return the error message 
    }

    res.json({
        msg:"user api working"
    })

})

userRouter.post("/userSignIn",(req:Request,res:Response)=>{
    const dburl=process.env.DATABASE_URL;

    const prisma = new PrismaClient({
        datasourceUrl: dburl,
    }).$extends(withAccelerate());

    const body=req.body();
    const {success}=userSigInInps.safeParse(body);
    


})