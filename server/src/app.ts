import express,{Express} from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from'dotenv'
import connect from './utils/connection'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'
import postRoute from './routes/post.routes'
import morgan from 'morgan'
import helmet from 'helmet'
const app:Express = express()
dotenv.config()

//middleware
app.use(express.json())
app.use(cors())
app.use(morgan("common"))
app.use(helmet())

//routes
app.use('/api/users',userRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/posts',postRoute)

const PORT = process.env.PORT || 5000
app.listen(PORT,async()=>{
    console.log("The app is running") 
    await connect()
})