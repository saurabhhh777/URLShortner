import express from "express";
const router = express.Router();
import { shortUrl } from "../Controllers/url.controller.js";
import isAuth  from "../Middlewares/auth.js";




router.route("/short").post(shortUrl);


export default router;
