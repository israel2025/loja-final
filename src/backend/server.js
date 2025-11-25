const express = require('express');
const path = require('path');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const vendorRoutes = require('./routes/vendorRoutes');
const withdrawRoutes = require('./routes/withdrawRoutes');

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' })); // allow base64 images
app.use(express.urlencoded({ extended: true }));

// static uploads
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/vendors', vendorRoutes);
app.use('/api/withdrawals', withdrawRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`API running on port ${port}`));
