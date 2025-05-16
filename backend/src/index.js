require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

// Роуты
app.use('/api/auth', authRoutes);

// Проверка подключения
sequelize.authenticate()
  .then(() => console.log('PostgreSQL connected'))
  .catch(err => console.error('Connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));