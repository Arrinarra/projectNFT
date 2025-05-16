require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const authRoutes = require('./routes/auth');
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Роуты
app.use('/api/auth', authRoutes);

// Подключение к БД и запуск сервера
sequelize.sync().then(() => {
  console.log('SQLite connected');
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
});