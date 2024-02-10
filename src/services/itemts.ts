import { Car } from "../interfaces/car.interface";
import itemModel from "../models/items";

const insertCar = async (item:Car) => {
  const responseInsert=await itemModel.create(item)
  return responseInsert;
};

const  getCars=async() =>{
  const responseItem= await itemModel.find({})
  return responseItem
}

const  getCar=async(id:string) =>{
  const responseItem= await itemModel.findOne({_id:id})
  return responseItem
}

const updateCar= async (id:string,data:Car) =>{
  const responseItem= await itemModel.findOneAndUpdate({_id:id,}, data,{new:true})
  return responseItem;
}

const  deleteCar=async(id:string) =>{
  const responseItem= await itemModel.deleteOne({_id:id,})
  return responseItem
}

export {insertCar, getCars,getCar,updateCar,deleteCar}