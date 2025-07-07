import mongoose from 'mongoose';
import {MongClient} from "mongoose";
const connectDB = async () => {
  let _db;
  try {
    // await mongoose.connect(process.env.mongoDBURL, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    const client = new MongClient(process.env.mongoDBURL);
    await client.connect();
    _db = client.db("macherial");
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB error:", err.message);
    process.exit(1);
  }
};

export const getDB = () => {
  return _db;
}
export default connectDB;
