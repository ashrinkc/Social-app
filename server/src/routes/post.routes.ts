import express from 'express'
import { createPost, deletePost, getPost, likePost, profilePost, timelinePost, updatePost } from '../controllers/post'
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
routes.get('/timeline/:userId',timelinePost)
// get users all post
routes.get('/profile/:username',profilePost)
export default routes