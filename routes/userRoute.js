import express from "express";
import * as userController from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.route("/register").post(userController.createUser);
userRoute.route("/login").post(userController.loginUser);

export default userRoute;
