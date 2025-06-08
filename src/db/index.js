import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
        console.log(`\n MongoDb connected!!! DB host:${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("Error:",error);
        process.exit(1)
    }
}

export default connectDb