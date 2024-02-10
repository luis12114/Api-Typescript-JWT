import { Router,Request,Response } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";
import { logsMiddleware } from "../middleware/log";

const router = Router();

router.get('/',getItems);

router.get('/:id',logsMiddleware,getItem);

router.post('/',postItem);

router.put('/:id',updateItem);

router.delete('/:id',deleteItem);



export {router};
