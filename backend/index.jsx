// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./auth'); // Import the auth routes

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/auth', authRoutes); // Use the auth routes for signup and login

// Other routes and app.listen...

