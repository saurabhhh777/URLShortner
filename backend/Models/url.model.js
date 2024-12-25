import mongoose from "mongoose";

const urlSchema = mongoose.Schema({
    shorturl:{
        type:String,
        unique:true,
        requred:true,
    },
    unshorturl:{
        type:String,
        requred:true,
    },
    createdby:{
        type:mongoose.Types.ObjectId,
        ref:"User",
    }

},{ timeStamp:true });

const urlModel = mongoose.model("Url",urlSchema);

export default urlModel;