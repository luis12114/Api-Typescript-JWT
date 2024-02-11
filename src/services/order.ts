import itemModel from "../models/items";


const  getOrders=async() =>{
  const responseItem= await itemModel.find({})
  return responseItem
}

export {getOrders}