import mongoose from "mongoose";
 
export interface PostI extends mongoose.Document{
    userId:string,
    desc:string,
    img:string,
    likes:number[]
}

const postSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        max:500
    },
    img:{
        type:String
    },
    likes:{
        type:Array,
        default:[]
    }
},{
    timestamps:true
})


const PostModel = mongoose.model<PostI>("Post",postSchema)

export default PostModel