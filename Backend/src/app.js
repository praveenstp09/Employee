const express = require('express');
const employeeRoutes = require('./routes/employeeRoutes');
const authRoutes = require('./routes/authRoutes');
const app = express();

app.use(express.json());

app.use('/api/employees', employeeRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;
