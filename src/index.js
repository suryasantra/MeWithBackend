import dotenv from "dotenv";


// import mongoose from "mongoose";
// import { DB_Name } from "./constants";
import connectDb from "./db/index.js";


dotenv.config({
    path: "./env"
})


connectDb()








/*
import mongoose from "mongoose";

const app = express()
// const connectDB = function(){

// }

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
        app.on("error",(error) => {
            console.log("ERROR:",error);
            throw  error
        })
        app.listen(process.env.PORT, () =>{
            console.log(`app is listening port on ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.error("Error:",error)
    }
})()
*/