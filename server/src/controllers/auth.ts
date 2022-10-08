import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from 'bcrypt'
export const register = async(req:Request,res:Response) =>{
    const newUser = new User(req.body)
    try{
        const user = await newUser.save()
        res.status(200).json(user)
    }catch(err:any){
        res.status(500).json(err)
    }
}

export const login = async(req:Request,res:Response) =>{
    try{
        const user = await User.findOne({email:req.body.email})
        !user && res.status(404).send('user not found')
        const validPassword = await bcrypt.compare(req.body.password,user!.password)
        !validPassword && res.status(400).json("Wrong password")

        res.status(200).json(user)
    }catch(err:any){
        res.status(500).json(err)
    }
    
}