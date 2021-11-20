require('dotenv').config();
const express = require('express');
var cors = require('cors');

const { PORT } = require('./global/constants');
const connectDB = require('./global/db');
const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const contactsRoutes = require('./routes/contacts');

const app = express();

connectDB();

app.use(cors());
app.use(express.json({ extended: false }));

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/contacts', contactsRoutes);

const port = PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
