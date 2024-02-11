import { Response, Request } from "express";
import { handleHTTP } from "../utils/error.handle";
import { getOrders } from "../services/order";
import { RequestExt } from "../interfaces/session.interface";


const getOrdersList = async (req: RequestExt, res: Response) => {
    try {
      const response= await getOrders()
      res.send({
        response,
        user:req.user
      });
    } catch (error) {
      handleHTTP(res,'Error get items',error);
    }
};

export {getOrdersList}