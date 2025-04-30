const express = require('express');
const dotenv = require('dotenv');
const prestamoRoutes = require('./routes/prestamoRoutes');
const { connectDB } = require('./config/db');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/prestamos', prestamoRoutes);

connectDB();

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => console.log(`Prestamos service running on port ${PORT}`));