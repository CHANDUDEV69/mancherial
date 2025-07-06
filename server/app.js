const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const { default: connectDB } = require('./db');
const cors = require('cors');

app.use(cors({
  origin: 'https://mancherial.vercel.app/', // replace with actual Vercel domain
}));

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
connectDB();

// Serve frontend if built in same project
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
}

// Example API
app.get('/api', (req, res) => {
  res.json({ message: 'API working!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
