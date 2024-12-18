import mongoose from "mongoose";
// process.config();

const connectDB = async()=>{
    try {   
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDb connect successfully !");
        
    } catch (error) {
        console.log(error);
        // return res.status(500).json({
        //     message:"MongoDb not connect , please try again later !",
        //     success:false,
        // });
    }
}

export default connectDB;