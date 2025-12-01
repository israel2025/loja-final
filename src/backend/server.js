require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./src/config/db');
const routes = require('./src/routes');
const { errorHandler } = require('./src/middlewares/errorHandler');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploads
app.use('/uploads', express.static(__dirname + '/uploads'));

// Routes
app.use('/api', routes);

// Global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✔ Database connected');
    // If you want sequelize to sync models automatically uncomment:
    // await sequelize.sync({ alter: true });
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('Unable to connect to the database:', err);
    process.exit(1);
  }
})();
