import express from "express";
const router = express.Router();
import isAuth from "../Middlewares/auth.js";
import { Signup,Login,Logout, updateProfile } from "../Controllers/user.controller.js";


//user routes
router.route("/signup").post(Signup);
router.route("/login").post(Login);
router.route("/logout").post(Logout);
router.route("/update/profile").post(isAuth,updateProfile);
// router.route("/signup").post(Signup);


export default router;




