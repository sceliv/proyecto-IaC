const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const { connectDB } = require('./config/db');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);

connectDB();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Auth service running on port ${PORT}`));