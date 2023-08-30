import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://admi:admi@cluster0.pd1laae.mongodb.net/");
            console.log("Tu Base de datos ha sido conectada")
  } catch (error) {
        console.log(error);
    }
};
