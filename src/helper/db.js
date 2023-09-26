import mongoose from "mongoose";
import { env } from "../../next.config";

const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "NextJS",
    });
    console.log(`Connected With Database: ${connection.name}`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
