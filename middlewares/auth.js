import { User } from "../models/user.js";
import jwt from "jsonwebtoken"

export const isAuthenticated = async(req,res,next)=>{
  
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) {
    return res.status(401).json({
      success: false,
      message: "Authorization header missing. Login first.",
    });
  }
  const token = authorizationHeader.split(" ")[1];
  
    if(!token)
      return res.status(404).json({
        success : false,
        message : "Login First",
      });
    
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
       req.user = await User.findById(decoded._id);
       
       next();

}