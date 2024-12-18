import mongoose from "mongoose";
// process.config();

const connectDB = async()=>{
    try {   
        await mongoose.connect("mongodb+srv://Saurabhhere:hello@cluster0.wkxao.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
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
