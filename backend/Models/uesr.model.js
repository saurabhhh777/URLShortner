import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        uniqe:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    history:{
        type:mongoose.Types.ObjectId,
        ref:"Url",        
    }

});

const userModel = mongoose.model("User",userSchema);

export default userModel;
