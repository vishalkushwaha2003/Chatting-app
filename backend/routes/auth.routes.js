import express from "express"
const routes=express();

import {login,signup,logout} from "../controllers/auth.controllers.js"

routes.get("/login",login)

routes.post("/signup",signup)

routes.get("/logout",logout)

export default routes