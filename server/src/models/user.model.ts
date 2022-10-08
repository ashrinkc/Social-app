import mongoose from "mongoose";
import bcrypt from 'bcrypt'
export interface UserI extends mongoose.Document{
    username:string,
    email:string,
    password:string,
    profilePicture:string,
    coverPicture:string,
    followers:string[],
    followings:string[],
    isAdmin:boolean,
    desc:string,
    city:string,
    from:string,
    relationship:number,
    createdAt:Date,
    updatedAt:Date
}

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:3,
        max:20,
        unique:true
    },
    email:{
        type:String,
        required:true,
        max:50,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:6
    },
    profilePicture:{
        type:String,
        default:""
    },
    coverPicture:{
        type:String,
        default:""
    },
    followers:{
        type:Array,
        default:[]
    },
    followings:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    desc:{
        type:String,
        max:50
    },
    city:{
        type:String,
        max:50
    },
    from:{
        type:String,
        max:50
    },
    relationship:{
        type:Number,
        enum:[1,2,3]
    },
},{
    timestamps:true
})

userSchema.pre("save",async function(next){
    let user = this as UserI
    if(!user.isModified("password")){
        return next()
    }
    const salt = await bcrypt.genSalt(20);
    const hash = await bcrypt.hash(user.password,salt)
    user.password = hash
    return next()
})

const UserModel = mongoose.model<UserI>("User",userSchema)

export default UserModel