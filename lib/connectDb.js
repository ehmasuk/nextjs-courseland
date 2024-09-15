import mongoose from "mongoose";

export const connectDb = async () => {
    if (mongoose.connection.readyState === 1) {
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, { dbName: "courseland" });
        console.log("Connected to the database.");
    } catch (error) {
        console.log("Database connection error:", error.message);
    }
};