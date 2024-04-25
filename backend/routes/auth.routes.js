import express from "express"
const routes=express();

import {login,signup,logout} from "../controllers/auth.controllers.js"

routes.post("/login",login)

routes.post("/signup",signup)

routes.post("/logout",logout)

export default routes