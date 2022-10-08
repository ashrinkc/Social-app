import mongoose from "mongoose";

const connect = async() =>{
    const DB:string = `${process.env.DB}`
    try{
        await mongoose.connect(DB);
        console.log("Connected to database")
    }catch(err){
        console.log(`could not connect ${err}`)
        process.exit(1)
    }
}

export default connect