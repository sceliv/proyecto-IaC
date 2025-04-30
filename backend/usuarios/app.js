const express = require('express');
const dotenv = require('dotenv');
const usuarioRoutes = require('./routes/usuarioRoutes');
const { connectDB } = require('./config/db');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/usuarios', usuarioRoutes);

connectDB();

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Usuarios service running on port ${PORT}`));