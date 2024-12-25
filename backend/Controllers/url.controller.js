import {nanoid} from "nanoid";
import urlModel from "../Models/url.model.js";
import userModel from "../Models/uesr.model.js";

export const shortUrl = async(req,res)=>{
    try {

        const unshorturl = req.body.unshorturl;
        console.log(`Unshorted url is :${unshorturl}`);

        // if(!unshorturl){
        //     return res.status(400).json({
        //         message:"Please enter the url !",
        //         success:false,
        //     });
        // }

        const shorturl = nanoid(8);

        // const id = req.id;

        const isUrl = await urlModel.create({
            shorturl,
            unshorturl,
            // createdby:id,
        });

        // const isUser = await userModel.findById({
        //     _id:id,
        // });


        // await userModel.create({
        //     fullname:isUser.fullname,
        //     email:isUser.email,
        //     password:isUser.password,
        //     history:isUrl._id,
        // });


        console.log(`${isUrl} working in the urlModel !`);


        console.log(isUrl);


        console.log("Responce before !");

        return res.status(200).json({
            message:"Your url shorted now !",
            isUrl,
            success:true, 
        });



        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Server error , please try again later !",
            success:false,   
        });
    }    
}


export const getData = async(req,res)=>{
    try {
        const url = req.params.shorturl;

        console.log(url);

        if(!url){
            return res.status(400).json({
                message:"please enter url ",
                success:false,
            });
 
        }

        const isUrlExist = await urlModel.findOne({
            shorturl:url,
        });

        console.log(isUrlExist);

        if(!isUrlExist){
            return res.status(400).json({
                message:"Shorted url not exist !",
                success:false,
            
            });
        }

        res.redirect(isUrlExist.unshorturl);

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Server error , please try again !",
            success:false,
        });
    }

}