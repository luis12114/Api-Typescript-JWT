import "dotenv/config"
import express from "express";
import cors from "cors";
import {router} from "./routes";
import db from "./config/mongo"
const app=  express();
const Port= process.env.PORT|| 3001;

app.use(cors());
app.use(express.json())
app.use(router);
db().then(() =>{
    console.log("the connection  to db ready ");
    
})

app.listen(Port, () => console.log(`Ready for the port ${Port}`))

