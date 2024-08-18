import mongoose from "mongoose";

export const connectDb = async () => {
    await mongoose.connect('mongodb+srv://admin:ESVoqwxl9MUJCJI3@cluster0.1zu0c4n.mongodb.net/').then(() => console.log("db connected"));
}