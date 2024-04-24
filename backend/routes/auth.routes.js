import express from "express"
const routes=express();

import {login,signup,logout} from "../controllers/auth.controllers.js"

routes.get("/login",login)

routes.get("/signup",signup)

routes.get("/logout",logout)

export default routes