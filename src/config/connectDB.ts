import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.DB_URL as string);
    console.log("Database connected...");
  } catch (error: any) {
    console.log(error.message);
    setTimeout(connectDB, 50000);
  }
};

export default connectDB;
