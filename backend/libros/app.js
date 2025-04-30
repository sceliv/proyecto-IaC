const express = require('express');
const dotenv = require('dotenv');
const libroRoutes = require('./routes/libroRoutes');
const { connectDB } = require('./config/db');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/libros', libroRoutes);

connectDB();

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Libros service running on port ${PORT}`));