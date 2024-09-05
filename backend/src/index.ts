import  express from "express";
import { Router,Request,Response } from "express";
import { userRouter } from "./routes/users";

const app=express();


// to route the requests coming to sign ie user functionalities 



app.use('/user',userRouter);


