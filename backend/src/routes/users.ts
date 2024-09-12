import { Router,Request,Response, response } from "express";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {userSignUpInps} from "@remotedeskdevelopers/ag"
import { userSigInInps } from "@remotedeskdevelopers/ag";
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET=process.env.JWT_SECRET||"sec_key";

enum StCode{
    NotFound=404,
    OK=200,
    Found=302,
    UnAuthorized=401,
    InternalServerError=500

}

export const userRouter=Router();

userRouter.post("/",async (req:Request,res:Response)=>{
    const dburl=process.env.DATABASE_URL;

    const prisma = new PrismaClient({
        datasourceUrl: dburl,
    }).$extends(withAccelerate());

    // figure out this 
    const body=req.body();
    const {success}=userSignUpInps.safeParse(body);
    // this will parse the inputs 
    if(success){
        try{

            const user= await prisma.user.create({
                data:{
                    firstName:body.firstName,
                    lastName:body.lastName,
                    email:body.email,
                    phoneNo:body.phoneNo,
                    project:body.project
                }
            })
            const token=jwt.sign({userId:user.id,userEmail:user.email},
                JWT_SECRET,
                {expiresIn:'1h'}
            )
            res.status(StCode.OK).json({msg:"User SignUp success"})
        }catch(e){
            res.status(StCode.InternalServerError);
            console.log("Error occured ",e);
        }
        finally{
           await prisma.$disconnect()
        }
    }

    else{
       return res.status(StCode.UnAuthorized).json({msg:"Invalid inputs"})
        
    }

    res.json({
        msg:"user api working"
    })

})

userRouter.post("/userSignIn",async (req:Request,res:Response)=>{
    const dburl=process.env.DATABASE_URL;

    const prisma = new PrismaClient({
        datasourceUrl: dburl,
    }).$extends(withAccelerate());

    const body=req.body();
    const {success}=userSigInInps.safeParse(body);

    if(success)
    {
        try{
        const {email,password}=body.data;
        const user=await prisma.user.findUnique({
            where:{email}
        })
        const token=localStorage.getItem('token');

        res.status(StCode.OK).json({msg:"Success SignIn",token});
        }catch(e){
            res.status(StCode.UnAuthorized);
            console.log("Error while SignIn ")
        }
        finally{
            await prisma.$disconnect();
        }

    }
    else{
        return res.status(StCode.UnAuthorized).json({msg:"Error while parsing the inputs"})
    }
})

userRouter.post("/projectSubmit",async(req:Request,res:Response)=>{

})