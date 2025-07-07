import mongoose from 'mongoose';
import {MongClient} from "mongodb";
const connectDB = async () => {
  let _db;
  try {
    const client = new MongClient(process.env.mongoDBURL);
    await client.connect();
    _db = client.db("macherial");
    console.log("✅ MongoDB connected");
    return _db;
  } catch (err) {
    console.error("❌ MongoDB error:", err.message);
    process.exit(1);
  }
};

export const getDB = () => {
  return _db;
}
export default connectDB;
