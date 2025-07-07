import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB, { getDB } from './db.js';
import moment from 'moment-timezone';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to DB
await connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set({"view engine": "ejs"});
app.use(cors({
  origin: process.env.CLIENT_URL?.split(',') || [
    "https://mancherial-git-master-chandudev69s-projects.vercel.app",
    "https://mancherial.vercel.app"
  ],
  credentials: true,
}));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'API working!' });
});

app.post('/contact', async (req, res) => {
  const { username, usermail, message } = req.body;

  if (!username || !usermail || !message) {
    const dateIST = moment().tz('Asia/kolkata').toDate();
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const db = getDB();
    await db.collection("users").insertOne({
      username,
      usermail,
      message,
      submittedAt: new Date(),
    }).then((result)=>{
      app.render("/thankyou");
      console.log(result)
    }).catch((err)=>{
      console.log(err)
    });


  } catch (err) {
    console.error("❌ Insert error:", err.message);
    res.status(500).json({ error: "Database insert failed" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
