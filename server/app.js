import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB, { getDB } from './db.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to DB
await connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const db = getDB();
    await db.collection("users").insertOne({
      username,
      usermail,
      message,
      submittedAt: new Date()
    });

    console.log("📥 Inserted contact:", { username, usermail, message });
    res.redirect("https://mancherial-g6py.vercel.app/");
  } catch (err) {
    console.error("❌ Insert error:", err.message);
    res.status(500).json({ error: "Database insert failed" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
