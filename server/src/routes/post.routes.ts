import express from 'express'
import { createPost, deletePost, getPost, likePost, timelinePost, updatePost } from '../controllers/post'
const routes = express.Router()

//create a post
routes.post("/",createPost)
//update a post
routes.put("/:id",updatePost)
//delete a post
routes.delete("/:id",deletePost)
//like and dislike post
routes.put("/:id/like",likePost)
//get a post
routes.get('/:id',getPost)
//get timeline post 
routes.get('/timeline/all',timelinePost)
export default routes