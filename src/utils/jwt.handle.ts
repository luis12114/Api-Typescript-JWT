import {sign, verify} from  "jsonwebtoken";

const JWT_SECRET= process.env.JWT_SECRET || "JWT-TOKEN.01010101";

const generateToken= async (id:string)  =>{
 const jwt=  await sign({id},JWT_SECRET,{expiresIn:"2h"});
 return jwt
}

const verifyToken= async () => {
    
}


export {generateToken, verifyToken}