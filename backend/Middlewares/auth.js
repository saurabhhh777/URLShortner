import jwt from "jsonwebtoken";

const isAuth = (req,res,next)=>{
    try {
        
        const token = req.cookies.token;
        
        if(!token){
            return res.status(401).json({
                message:"User not authenticated !",
                success:false,
            });
        }
        

        const decode = jwt.verify(token,process.env.JWT_SECRET);

        if(!decode){
            return res.status(401).json({
                message:"Invalid token !",
                success:false,
            });
        }

        req.id = decode.userID;

        next();

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Auth failed !",
            success:false,
        });
    }


}

export default isAuth;