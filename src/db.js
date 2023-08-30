import mongoose from "mongoose";
import { MONGODB_URI} from "./config.js"


export const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Tu Base de datos ha sido conectada")
    } catch (error) {
        console.log(error);
    }
};
