import mongoose from "mongoose";

export const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected succesfully");
        
    } catch (error) {
        console.log("Error connected to mongodb ", error.message);
        process.exit(1);
    }
}