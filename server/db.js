import mongoose from "mongoose";
const connectDB = async () => {
     try{
          await mongoose.connect(process.env.mongoDBURL, {
          }).then(() => console.log("connected"))
            .catch(err => console.error("error:", err));
     }
     catch(err){
          process.exit(1)
     }
}
export default connectDB;