import { Request, Response } from "express";
import { registerNewUser, login } from "../services/auth";
import { handleHTTP } from "../utils/error.handle";

const registerCtrl = async ({body}: Request, res: Response) => {
  try {
    const responseUser=await registerNewUser(body);
    res.send(responseUser);
  } catch (error) {
    console.log(error);
    handleHTTP(res,'Error get item');
  }
};

const loginCtrl = async ({body}: Request, res: Response) => {
  try {
    const {email,password}=body
    const responseLogin=await login({email,password})
    if(responseLogin=='password incorrect'){
      res.status(403);
      res.send(responseLogin);
    }else{
      res.send(responseLogin)
    }
   
  } catch (error) {
    console.log(error);
    handleHTTP(res,'Error get item');
  }
};

export { registerCtrl, loginCtrl };
