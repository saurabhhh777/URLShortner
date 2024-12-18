import express from "express";
const app = express();
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import userRoute from "./Routes/user.route.js";
import urlRoute from "./Routes/url.route.js";
import connectDB  from "./utils/db.js";
import { getData } from "./Controllers/url.controller.js";

dotenv.config({});

//for database connection call 
connectDB();

const _dirname = path.resolve();

//default middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());



// cors for cross origin resorce sharing 
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
    methods:"GET,POST,PUT"
}));




app.use("/api/v1/user",userRoute);
app.use("/api/v2/url",urlRoute);
app.get("/u/:shorturl",getData);


app.use(express.static(path.join(_dirname , "/frontend/dist")));
app.get('*',(_,res)=>{
    res.sendFile(path.resolve(_dirname , "frontend","dist","index.html"));
});




const PORT = process.env.PORT || 3000 ;

app.listen(PORT,()=>{
    console.log(`Server is running ! ${PORT}`);
});