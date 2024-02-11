import { Router } from "express";
import { getOrdersList } from "../controllers/order";
import { checkJwt } from "../middleware/session";
const router =Router();

router.get('/',checkJwt,getOrdersList)
export {router}