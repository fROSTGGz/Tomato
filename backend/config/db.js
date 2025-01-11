import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:greatstack2002@cluster0.vdhif.mongodb.net/GOFOOD').then(()=>console.log("DB Connected"));
}