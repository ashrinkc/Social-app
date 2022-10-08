import express,{ Request, Response } from "express"
import {  updateUser , deleteUser, getUser } from "../controllers/user"

const routes = express.Router()

//update a user
routes.put('/:id',updateUser)

//delete a user
routes.delete('/:id',deleteUser)

// get a user
routes.get('/:id',getUser)

//follow a user
routes.get('/:id/follow')
export default routes