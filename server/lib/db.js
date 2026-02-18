import mongoose from "mongoose";


// function to connect to the Database
export const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("Database Connected"))
        await mongoose.connect(`${process.env.MONGODB_URI}/quickchat-app`)
    } catch (error) {
        console.log(error);
    }
}