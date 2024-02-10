import { Response, Request } from "express";
import { handleHTTP } from "../utils/error.handle";
import { getCars, insertCar,getCar, updateCar,deleteCar } from "../services/itemts";



const getItem =async ({params}: Request, res: Response) => {
  try {
    const {id}=params
    const response= await getCar(id)
    const data=response? response : "Not found item"
    res.send(data);
  } catch (error) {
    handleHTTP(res,'Error get item');
  }
};

const getItems = async (req: Request, res: Response) => {
    try {
      const response= await getCars()
      res.send(response);
    } catch (error) {
      handleHTTP(res,'Error get items',error);
    }
};

const updateItem = async ({params,body}: Request, res: Response) => {
    try {
      const {id}=params
      const response=await updateCar(id,body);
      res.send(response)
    } catch (error) {
      handleHTTP(res,'Error update item',error);
    }
};

const postItem =async ({body}: Request, res: Response) => {
    try {
     const responseItem=  await insertCar(body)
     res.send(responseItem)
    } catch (error) {
      handleHTTP(res,'Error insert item',error);
    }
};

const deleteItem =async ({params}: Request, res: Response) => {
    try {
      const {id}=params
      const response= await deleteCar (id)
       res.send(response);

    } catch (error) {
      handleHTTP(res,'Error delete item',error);
    }
};

export { getItem, getItems, updateItem, postItem, deleteItem };
