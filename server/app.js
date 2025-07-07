import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import connectDB from './db.js';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
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


// Sample API route
app.get('/', (req, res, next) => {
  res.json({ message: 'API working! for get /' });
  next();
});

// Get __dirname equivalent in ESM

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// Serve React build in production
// set to node_env to production


  // const clientBuildPath = path.join(__dirname, '../client/build');
  // app.use(express.static(clientBuildPath));

app.post('/contact', (req, res) => {
  const { username, usermail, message } = req.body;
  console.log("📩 Contact Form Submission:", { username, usermail, message });

  // Optionally store to DB or send mail...

  // res.redirect("https://mancherial-g6py.vercel.app/");
});



// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
