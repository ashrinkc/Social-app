import { Request, Response } from "express";
import Post from "../models/post.model";
import User from "../models/user.model";

export const createPost = async(req:Request,res:Response) =>{
    const newPost = new Post(req.body)
    try{
        const savePost = await newPost.save()
        res.status(200).json(savePost)
    }catch(err:any){
        res.status(500).json(err)
    }
}

export const updatePost = async(req:Request,res:Response) =>{
    try{
        const post = await Post.findById(req.params.id)
        if(post?.userId === req.body.userId){
            await post?.updateOne({$set:req.body})
            res.status(200).json("The post has been updated")
        }else{
            res.status(403).json("You can update only your post")
        }
    }
    catch(err:any){
        res.status(500).json(err)
    }
}

export const deletePost = async(req:Request,res:Response) =>{
    try{
        const post = await Post.findById(req.params.id)
        if(post?.userId === req.body.userId){
            await post?.deleteOne()
            res.status(200).json("The post has been deleted")
        }else{
            res.status(403).json("You can delete only your post")
        }
    }
    catch(err:any){
        res.status(500).json(err)
    }
}

export const likePost = async(req:Request,res:Response) =>{
    try{
        const post = await Post.findById(req.params.id)
        if(!post?.likes.includes(req.body.userId)){
            await post?.updateOne({
                $push:{likes:req.body.userId}
            })
            res.status(200).json("The post has been liked")
        }else{
            await post.updateOne({
                $pull:{likes:req.body.userId}
            })
            res.status(200).json("The post has been unliked")
        }
    }catch(err:any){
        res.status(500).json(err)
    }
}

export const getPost = async(req:Request,res:Response) =>{
    try{
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    }catch(err:any){
        res.status(500).json(err)
    }
}

export const timelinePost = async(req:Request,res:Response) =>{
    
    try{
        const currentUser = await User.findById(req.body.userId)
        const userPosts = await Post.find({userId:currentUser?._id})
        const friendPosts = currentUser?.followings.map(friendId=>{
               return Post.find({userId:friendId})
            })
        //@ts-ignore
        res.json(userPosts.concat(...friendPosts)) 
    }catch(err:any){
        res.status(500).json(err)
    }
}